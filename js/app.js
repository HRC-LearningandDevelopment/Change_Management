/* =========================================================================
   Course engine — plain JS, no build step.
   State lives in localStorage under COURSE_CONFIG.storageKey and is saved
   on every interaction, so a mid-activity refresh never loses work.
   ========================================================================= */
(function () {
  "use strict";
  const C = window.COURSE, CFG = window.COURSE_CONFIG;
  const KEY = CFG.storageKey;
  const INTERACTIVE = new Set(["form", "reflect", "bucket", "sequence", "match", "flip", "hotspot", "sim", "profiles", "quiz", "video", "rewrite", "heatmap"]);
  const PAIR_COLORS = ["#1270A0", "#157A72", "#7A4BB5", "#C2410C", "#2F5D8A", "#A3366B"];

  /* ---------------- State ---------------- */
  function blank() {
    return { v: 1, name: "", track: null, blocks: {}, mods: {},
      final: { answers: {}, submitted: false, score: null, best: null, attempts: 0 },
      time: { total: 0 }, created: Date.now(), passedAt: null, last: "#/welcome" };
  }
  function load() {
    try { const raw = localStorage.getItem(KEY); if (raw) return Object.assign(blank(), JSON.parse(raw)); } catch (e) { /* corrupt or blocked */ }
    return blank();
  }
  let S = load();
  let storageOK = true;
  let saveTimer = null;
  function writeNow() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); storageOK = true; }
    catch (e) { storageOK = false; }
  }
  function save(immediate) { clearTimeout(saveTimer); if (immediate) writeNow(); else saveTimer = setTimeout(writeNow, 200); }
  window.addEventListener("beforeunload", () => writeNow());
  window.addEventListener("pagehide", () => writeNow());
  const bs = (id) => S.blocks[id] || (S.blocks[id] = {});

  /* ---------------- DOM helper ---------------- */
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "class") el.className = v;
      else if (k === "html") el.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const kid of kids.flat(Infinity)) {
      if (kid == null || kid === false) continue;
      el.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
    }
    return el;
  }
  const $ = (sel, root) => (root || document).querySelector(sel);
  function shuffle(arr, avoidIdentity) {
    const a = arr.slice();
    for (let tries = 0; tries < 10; tries++) {
      for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
      if (!avoidIdentity || a.some((x, i) => x !== arr[i])) break;
    }
    return a;
  }
  function msg(kind, html) { return h("div", { class: "msg " + kind, role: kind === "bad" ? "alert" : "status", html }); }
  function fmtTime(sec) {
    const m = Math.round(sec / 60);
    if (m < 1) return "Under 1 min";
    if (m < 60) return m + " min";
    return Math.floor(m / 60) + " h " + (m % 60) + " min";
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

  /* ---------------- Course structure helpers ---------------- */
  const modById = (id) => C.modules.find((m) => m.id === id);
  const foundationMods = () => C.modules.filter((m) => m.part === "foundation");
  const trackMods = () => (S.track ? C.modules.filter((m) => m.track === S.track) : []);
  const pathMods = () => foundationMods().concat(trackMods());
  const reqBlocks = (m) => m.screens.flatMap((s) => s.blocks.filter((b) => INTERACTIVE.has(b.type)));
  const blockDone = (b) => !!(S.blocks[b.id] && S.blocks[b.id].done);
  const modPct = (m) => { const r = reqBlocks(m); return r.length ? r.filter(blockDone).length / r.length : 1; };
  const modDone = (m) => modPct(m) >= 1;
  const screenOpen = (scr) => scr.blocks.filter((b) => INTERACTIVE.has(b.type) && !blockDone(b));
  const allPathDone = () => !!S.track && pathMods().every(modDone);
  const finalQs = () => C.finalCheck.questions.filter((q) => q.track === "all" || q.track === S.track);
  const passed = () => S.final.best != null && S.final.best >= C.finalCheck.passMark;

  /* ---------------- Time tracking ---------------- */
  // Counts only while the tab is visible and the learner was active in the last
  // 5 minutes. Any gap > 15 s between ticks (sleep, throttled background tab) is discarded.
  let lastTick = Date.now(), lastActive = Date.now();
  ["pointerdown", "keydown", "scroll", "touchstart", "input"].forEach((ev) =>
    window.addEventListener(ev, () => { lastActive = Date.now(); }, { passive: true, capture: true }));
  document.addEventListener("visibilitychange", () => { lastTick = Date.now(); if (!document.hidden) lastActive = Date.now(); });
  setInterval(() => {
    const now = Date.now(), d = now - lastTick; lastTick = now;
    if (document.hidden || d > 15000 || now - lastActive > 5 * 60 * 1000) return;
    S.time.total += d / 1000; save(); updateFoot();
  }, 5000);

  /* ---------------- Routing ---------------- */
  function parseHash() {
    const p = (location.hash || "").replace(/^#\/?/, "").split("/");
    if (p[0] === "m" && modById(p[1])) return { page: "module", mod: p[1], screen: Math.max(0, parseInt(p[2] || "0", 10) || 0) };
    if (["welcome", "path", "final", "cert"].includes(p[0])) return { page: p[0] };
    return null;
  }
  function go(hash) { if (location.hash === hash) render(); else location.hash = hash; }
  window.addEventListener("hashchange", render);

  // Ordered list of nav pages used by Continue
  function sequenceHashes() {
    const list = ["#/welcome"];
    foundationMods().forEach((m) => list.push("#/m/" + m.id + "/0"));
    list.push("#/path");
    trackMods().forEach((m) => list.push("#/m/" + m.id + "/0"));
    list.push("#/final", "#/cert");
    return list;
  }
  function nextAfterModule(m) {
    const list = sequenceHashes(), i = list.indexOf("#/m/" + m.id + "/0");
    return list[i + 1] || "#/final";
  }
  function prevBeforeModule(m) {
    const list = sequenceHashes(), i = list.indexOf("#/m/" + m.id + "/0");
    const prev = list[i - 1] || "#/welcome";
    const pm = prev.match(/^#\/m\/([^/]+)/);
    return pm ? "#/m/" + pm[1] + "/" + (modById(pm[1]).screens.length - 1) : prev;
  }

  /* ---------------- Shell: nav ---------------- */
  function markerEl(pct) { const i = h("i"); i.style.height = Math.round(pct * 100) + "%"; return h("span", { class: "marker", "aria-hidden": "true" }, i); }
  function navItem(label, hash, pct, current, locked) {
    return h("button", { class: "nav-item" + (locked ? " locked" : ""), "aria-current": current ? "page" : null,
      onclick: () => { document.body.classList.remove("nav-open"); go(hash); } },
      markerEl(pct), h("span", null, label), locked ? h("span", { class: "lock" }, "Locked") : null);
  }
  function renderNav(route) {
    const nav = $("#nav"); nav.innerHTML = "";
    const cur = (p, id) => route.page === p && (!id || route.mod === id);
    nav.append(h("div", { class: "nav-group" }, h("div", { class: "nav-group-label" }, "Start"),
      navItem("Welcome", "#/welcome", S.name ? 1 : 0, cur("welcome"))));
    nav.append(h("div", { class: "nav-group" }, h("div", { class: "nav-group-label" }, "Part 1: the foundation"),
      foundationMods().map((m) => navItem(m.title, "#/m/" + m.id + "/" + resumeScreen(m), modPct(m), cur("module", m.id)))));
    const g2 = h("div", { class: "nav-group" }, h("div", { class: "nav-group-label" }, "Part 2: your path"),
      navItem("Choose your path", "#/path", S.track ? 1 : 0, cur("path")));
    if (S.track) trackMods().forEach((m) => g2.append(navItem(m.title, "#/m/" + m.id + "/" + resumeScreen(m), modPct(m), cur("module", m.id))));
    else g2.append(h("div", { class: "nav-note" }, "Your modules appear here once you choose a path."));
    nav.append(g2);
    const fpct = passed() ? 1 : S.final.submitted ? 0.5 : 0;
    nav.append(h("div", { class: "nav-group" }, h("div", { class: "nav-group-label" }, "Wrap-up"),
      navItem("Final check", "#/final", fpct, cur("final"), !allPathDone()),
      navItem("Certificate and answers", "#/cert", passed() ? 1 : 0, cur("cert"))));
    updateFoot();
  }
  function resumeScreen(m) { const s = (S.mods[m.id] && S.mods[m.id].screen) || 0; return Math.min(s, m.screens.length - 1); }
  function updateFoot() {
    const f = $("#foot"); if (!f) return;
    const pm = pathMods(); const done = pm.filter(modDone).length;
    f.innerHTML = "";
    [h("div", null, h("strong", null, fmtTime(S.time.total)), " invested"),
      h("div", null, S.track ? `${done} of ${pm.length} modules complete` : "Choose a path in Part 2"),
      storageOK ? null : h("div", { style: "color:#F3B2AD" }, "Progress can't be saved in this browser (private mode or storage blocked)."),
      h("button", { onclick: resetAll }, "Reset my progress")].forEach((el) => { if (el) f.append(el); });
  }
  function resetAll() {
    if (!confirm("Erase all progress, answers, and reflections saved in this browser? This can't be undone.")) return;
    localStorage.removeItem(KEY); S = blank(); location.hash = "#/welcome"; render();
  }

  /* ---------------- Main render ---------------- */
  let lastRouteKey = "";
  function render() {
    let route = parseHash();
    if (!route) { location.replace(S.last && S.last !== location.hash ? S.last : "#/welcome"); return; }
    if (route.page === "module") {
      const m = modById(route.mod);
      if (m.track !== "all" && m.track !== S.track) { location.replace("#/path"); return; }
      route.screen = Math.min(route.screen, m.screens.length - 1);
      const ms = S.mods[m.id] || (S.mods[m.id] = { screen: 0 });
      ms.screen = Math.max(ms.screen || 0, route.screen);
    }
    S.last = location.hash; save();
    renderNav(route);
    const card = $("#card"); card.innerHTML = "";
    const pages = { welcome: pageWelcome, path: pagePath, module: pageModule, final: pageFinal, cert: pageCert };
    pages[route.page](card, route);
    const key = JSON.stringify(route);
    if (key !== lastRouteKey) { window.scrollTo(0, 0); lastRouteKey = key; const h1 = $("#card h1"); if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); } }
  }

  function hero(kicker, title, sub, compact) {
    return h("header", { class: "hero" + (compact ? " compact" : "") },
      h("p", { class: "hero-kicker" }, kicker), h("h1", null, title), sub ? h("p", { class: "hero-sub" }, sub) : null);
  }

  /* ---------------- Page: welcome ---------------- */
  function pageWelcome(card) {
    card.append(hero(C.kicker + " \u00b7 About " + C.minutes + " minutes", C.title, C.subtitle));
    const body = h("div", { class: "body" });
    body.append(
      h("p", { class: "lead" }, "Learn how to lead people through change: translate it into meaning, diagnose what's really blocking adoption, turn resistance into useful information, and make the new way stick."),
      h("p", { html: "This course is built for <strong>Team Leaders and Managers</strong> in Operations and Support. It takes about " + C.minutes + " minutes, and your progress saves automatically in this browser, so you can stop and come back at any time." }));
    const nameMsg = h("div");
    const input = h("input", { type: "text", id: "learner-name", autocomplete: "name", value: S.name || "", "aria-describedby": "name-msg" });
    const saveName = () => {
      const v = input.value.trim(); nameMsg.innerHTML = "";
      if (!v) { nameMsg.append(msg("bad", "Enter your name so it can appear on your certificate.")); input.focus(); return; }
      S.name = v; save(true); renderNav({ page: "welcome" }); nameMsg.append(msg("ok", "Saved. Your certificate will read <strong>" + esc(v) + "</strong>."));
    };
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") saveName(); });
    nameMsg.id = "name-msg";
    body.append(h("div", { class: "panel" },
      h("label", { class: "field-label", for: "learner-name" }, "Your name, as it should appear on your certificate"),
      h("div", { class: "row" }, input, h("button", { class: "btn", onclick: saveName }, "Save name")), nameMsg));
    body.append(h("h2", null, "How it works"),
      h("ol", { class: "steps" },
        h("li", null, h("span", { class: "num" }, "1"), h("div", { html: "<strong>Part 1: the foundation.</strong> How people experience change, and why resistance is useful information. About 25 minutes." })),
        h("li", null, h("span", { class: "num" }, "2"), h("div", { html: "<strong>Part 2: your path.</strong> Choose Team Leader or Manager and follow the path built for your role, ending in a capstone and a plan you take back to work. About 50 minutes." })),
        h("li", null, h("span", { class: "num" }, "3"), h("div", { html: "<strong>Wrap-up.</strong> A 10-question final check (80% to pass), your certificate, and a PDF of everything you wrote. About 10 minutes." }))),
      h("p", { class: "muted" }, "Each activity ends with coaching key points. If YouTube is blocked on your network, every video has a text summary instead."));
    const started = Object.keys(S.blocks).length > 0;
    body.append(h("div", { class: "footer-nav" }, h("span"),
      h("button", { class: "btn", onclick: () => go(started && S.last && S.last !== "#/welcome" ? S.last : "#/m/f1/0") },
        started ? "Continue where you left off" : "Start Part 1")));
    card.append(body);
  }

  /* ---------------- Page: choose path ---------------- */
  function pagePath(card) {
    card.append(hero("Part 2: your path", "Choose your path", null, true));
    const body = h("div", { class: "body" });
    body.append(h("p", { class: "lead" }, "Team Leaders and Managers share the same language for change, but your roles in it are different. Pick the path that matches the work you do."),
      h("p", null, "Team Leaders translate change and coach individuals day to day. Managers sponsor, align leaders, remove systemic barriers, and sustain outcomes."));
    const box = h("div", { class: "paths", role: "group", "aria-label": "Choose your path" });
    const note = h("div");
    for (const [id, t] of Object.entries(C.tracks)) {
      const mods = C.modules.filter((m) => m.track === id);
      box.append(h("button", { class: "path", "aria-pressed": S.track === id ? "true" : "false",
        onclick: () => { S.track = id; save(true); render(); } },
        h("span", { class: "tick", "aria-hidden": "true" }),
        h("p", { class: "meta" }, t.label + " \u00b7 " + mods.length + " modules \u00b7 about " + t.minutes + " min"),
        h("h3", null, t.name + " path"), h("p", null, t.promise)));
    }
    body.append(box, note);
    if (S.track) {
      body.append(h("h2", { style: "margin-top:30px" }, "Your " + C.tracks[S.track].name + " modules"), moduleList(trackMods()),
        h("p", { class: "muted" }, "You can switch paths at any time. Work you've done in either path stays saved."));
    }
    body.append(h("div", { class: "footer-nav" },
      h("button", { class: "btn ghost", onclick: () => go("#/m/f2/" + (modById("f2").screens.length - 1)) }, "Back"),
      h("button", { class: "btn", onclick: () => {
        if (!S.track) { note.innerHTML = ""; note.append(msg("bad", "Choose the Team Leader or Manager path to continue.")); return; }
        const first = trackMods().find((m) => !modDone(m)) || trackMods()[0];
        go("#/m/" + first.id + "/" + resumeScreen(first));
      } }, "Start my path")));
    card.append(body);
  }
  function moduleList(mods) {
    return h("ul", { class: "modlist" }, mods.map((m) => h("li", null, markerEl(modPct(m)),
      h("div", { class: "grow" }, h("b", null, m.title), h("small", null, m.summary)),
      h("span", { class: "pct" }, Math.round(modPct(m) * 100) + "%"))));
  }

  /* ---------------- Page: module screen ---------------- */
  function pageModule(card, route) {
    const m = modById(route.mod), idx = route.screen, scr = m.screens[idx];
    const group = m.part === "foundation" ? foundationMods() : trackMods();
    const pos = group.indexOf(m) + 1;
    const kicker = (m.part === "foundation" ? "Part 1: the foundation" : C.tracks[S.track].name + " path") + " \u00b7 " +
      (m.capstone ? "Capstone" : "Module " + pos + " of " + group.filter((x) => !x.capstone).length) + " \u00b7 About " + m.minutes + " min";
    const hd = hero(kicker, m.title, null, true);
    const bars = h("div", { class: "bars", "aria-hidden": "true" });
    m.screens.forEach((s, i) => bars.append(h("span", { class: i === idx ? "here" : screenOpen(s).length === 0 && (S.mods[m.id].screen >= i) ? "done" : (S.mods[m.id].screen >= i ? "seen" : "") })));
    hd.append(bars, h("p", { class: "bars-label" }, "Screen " + (idx + 1) + " of " + m.screens.length + ": " + scr.title));
    card.append(hd);

    const body = h("div", { class: "body" });
    if (idx === 0) body.append(h("p", { class: "lead" }, m.summary));
    body.append(h("h2", null, scr.title));
    for (const b of scr.blocks) body.append(renderBlock(b, () => onBlockChange(m)));

    const gate = h("div", { class: "gate-msg" });
    const isLast = idx === m.screens.length - 1;
    const backHash = idx > 0 ? "#/m/" + m.id + "/" + (idx - 1) : prevBeforeModule(m);
    body.append(h("div", { class: "footer-nav" },
      h("button", { class: "btn ghost", onclick: () => go(backHash) }, "Back"),
      h("button", { class: "btn", id: "continue-btn", onclick: () => {
        const open = screenOpen(scr);
        gate.innerHTML = "";
        if (open.length) {
          const first = open[0], t = first.title || labelFor(first);
          gate.append(msg("bad", "Finish <strong>" + esc(t) + "</strong> to continue." + (open.length > 1 ? " " + (open.length - 1) + " more activity on this screen is still open." : "")));
          const el = document.getElementById("blk-" + first.id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        go(isLast ? nextAfterModule(m) : "#/m/" + m.id + "/" + (idx + 1));
      } }, isLast ? (m.part === "foundation" && m === foundationMods().slice(-1)[0] ? "Finish Part 1" : "Finish module") : "Continue"),
      gate));
    card.append(body);
  }
  function labelFor(b) {
    return { reflect: "the reflection", form: "the form", video: "the video", quiz: "the check for understanding" }[b.type] || "the activity";
  }
  function onBlockChange(m) {
    // refresh nav markers without re-rendering the page
    renderNav(parseHash() || { page: "module", mod: m.id });
    const g = $(".gate-msg"); if (g) g.innerHTML = "";
  }

  /* ---------------- Block dispatcher ---------------- */
  function renderBlock(b, changed) {
    switch (b.type) {
      case "p": return h("p", { html: b.html });
      case "announce": return h("blockquote", { class: "announce", html: b.html });
      case "list": return h("ul", { class: "prose" }, b.items.map((i) => h("li", { html: i })));
      case "callout": return h("aside", { class: "callout " + (b.tone || "") }, h("h3", null, b.title), h("p", { html: b.html }));
      case "table": return h("div", { class: "table-wrap" }, h("table", null,
        h("thead", null, h("tr", null, b.head.map((c) => h("th", { scope: "col" }, c)))),
        h("tbody", null, b.rows.map((r) => h("tr", null, r.map((c) => h("td", { html: c })))))));
      default: {
        const fn = R[b.type];
        if (!fn) return h("p", null, "[Unknown block: " + b.type + "]");
        const st = bs(b.id);
        const ctx = {
          save: () => save(),
          complete: () => { if (!st.done) { st.done = true; st.doneAt = Date.now(); } save(true); changed(); },
          undo: () => { if (st.done) { st.done = false; save(true); changed(); } }
        };
        return fn(b, st, ctx);
      }
    }
  }

  /* Shared activity frame */
  function shell(b, typeLabel, st) {
    const el = h("section", { class: "activity" + (st.done ? " is-done" : ""), id: "blk-" + b.id, "aria-labelledby": "t-" + b.id });
    const chip = h("span", { class: "chip-done", hidden: st.done ? null : true }, "Completed");
    el.append(h("div", { class: "act-head" },
      h("div", null, typeLabel ? h("p", { class: "act-type" }, typeLabel) : null, h("h3", { id: "t-" + b.id }, b.title || "")), chip));
    if (b.prompt) el.append(h("p", { class: "act-prompt" }, b.prompt));
    const inner = h("div"); el.append(inner);
    const keyBox = h("div");
    el.append(keyBox);
    const showDone = () => {
      el.classList.add("is-done"); chip.hidden = false;
      if (b.key && !keyBox.firstChild) keyBox.append(h("div", { class: "keypoints" }, h("h4", null, "Coaching key points"),
        h("ul", null, b.key.map((k) => h("li", null, k)))));
    };
    const hideDone = () => { el.classList.remove("is-done"); chip.hidden = true; keyBox.innerHTML = ""; };
    if (st.done) showDone();
    return { el, inner, showDone, hideDone };
  }

  const R = {};

  /* ---------- Reflection ---------- */
  R.reflect = function (b, st, ctx) {
    const sh = shell({ id: b.id, title: "Reflect" }, null, st);
    const out = h("div");
    const ta = h("textarea", { id: "ta-" + b.id, rows: 4, "aria-label": b.prompt }, st.text || "");
    ta.value = st.text || "";
    ta.addEventListener("input", () => { st.text = ta.value; ctx.save(); if (!ta.value.trim() && st.done) { ctx.undo(); sh.hideDone(); } });
    sh.inner.append(h("p", { class: "act-prompt", style: "margin-bottom:12px;color:var(--text)" }, b.prompt), ta,
      h("div", { class: "act-actions" }, h("button", { class: "btn small", onclick: () => {
        out.innerHTML = "";
        if (ta.value.trim().length < 3) { out.append(msg("bad", "Write at least a sentence before saving. This reflection is part of your PDF.")); ta.focus(); return; }
        st.text = ta.value; ctx.complete(); sh.showDone(); out.append(msg("ok", "Reflection saved."));
      } }, "Save reflection")), out);
    return sh.el;
  };

  /* ---------- Multi-field form ---------- */
  R.form = function (b, st, ctx) {
    const sh = shell(b, "Your work", st);
    st.values = st.values || {};
    const out = h("div");
    if (b.intro) sh.inner.append(h("p", { class: "act-prompt" }, b.intro));
    const fieldEls = {};
    for (const f of b.fields) {
      const ta = h("textarea", { id: b.id + "-" + f.id, rows: 2 });
      ta.value = st.values[f.id] || "";
      ta.addEventListener("input", () => { st.values[f.id] = ta.value; wrap.classList.remove("missing"); ctx.save(); });
      const wrap = h("div", { class: "field" }, h("label", { class: "field-label", for: b.id + "-" + f.id }, f.label),
        f.prompt ? h("span", { class: "hint" }, f.prompt) : null, ta);
      fieldEls[f.id] = wrap; sh.inner.append(wrap);
    }
    sh.inner.append(h("div", { class: "act-actions" }, h("button", { class: "btn small", onclick: () => {
      out.innerHTML = "";
      const need = b.minFilled || b.fields.length;
      const missing = b.fields.filter((f) => !(st.values[f.id] || "").trim());
      missing.forEach((f) => fieldEls[f.id].classList.add("missing"));
      if (b.fields.length - missing.length < need) {
        out.append(msg("bad", "Complete every field before saving. Still empty: " + missing.map((f) => "<strong>" + esc(f.label) + "</strong>").join(", ") + ". Short answers are fine."));
        const first = fieldEls[missing[0].id].querySelector("textarea"); if (first) first.focus();
        return;
      }
      ctx.complete(); sh.showDone(); out.append(msg("ok", "Saved. This will be included in your PDF."));
    } }, b.saveLabel || "Save")), out);
    return sh.el;
  };

  /* ---------- Bucket sort (tap-to-place everywhere, drag with mouse/pen) ---------- */
  R.bucket = function (b, st, ctx) {
    const sh = shell(b, "Sort into groups", st);
    st.place = st.place || {};
    if (!st.order) { st.order = shuffle(b.items.map((i) => i.id), true); ctx.save(); }
    let selected = null;
    const out = h("div");
    const itemById = (id) => b.items.find((i) => i.id === id);
    function place(itemId, bucketId) {
      if (st.done) return;
      if (bucketId) st.place[itemId] = bucketId; else delete st.place[itemId];
      st.wrong = (st.wrong || []).filter((x) => x !== itemId);
      selected = null; out.innerHTML = ""; ctx.save(); draw();
    }
    function chip(id) {
      const it = itemById(id);
      const cls = "bchip" + (selected === id ? " selected" : "") + ((st.wrong || []).includes(id) ? " wrong" : "") + (st.done ? " right" : "");
      const el = h("button", { class: cls, type: "button", "data-item": id, "aria-pressed": selected === id ? "true" : "false" }, it.text);
      if (st.done) { el.disabled = true; return el; }
      el.addEventListener("click", (e) => { if (el._dragged) { el._dragged = false; return; } e.stopPropagation(); selected = selected === id ? null : id; draw(); });
      el.addEventListener("pointerdown", (e) => startDrag(e, el, id));
      return el;
    }
    function startDrag(e, el, id) {
      if (e.pointerType === "touch" || e.button !== 0) return; // touch uses tap-to-place
      const sx = e.clientX, sy = e.clientY; let ghost = null, over = null;
      const move = (ev) => {
        if (!ghost) {
          if (Math.hypot(ev.clientX - sx, ev.clientY - sy) < 6) return;
          ghost = el.cloneNode(true); ghost.classList.add("drag-ghost"); ghost.style.width = el.offsetWidth + "px"; document.body.append(ghost); el.classList.add("dragging");
        }
        ghost.style.left = ev.clientX - 20 + "px"; ghost.style.top = ev.clientY - 16 + "px";
        const t = document.elementFromPoint(ev.clientX, ev.clientY);
        const zone = t && t.closest("[data-zone]");
        if (over && over !== zone) over.classList.remove("target");
        over = zone && sh.el.contains(zone) ? zone : null; if (over) over.classList.add("target");
      };
      const up = () => {
        window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up);
        if (!ghost) return;
        ghost.remove(); el.classList.remove("dragging"); el._dragged = true;
        if (over) { over.classList.remove("target"); place(id, over.dataset.zone === "pool" ? null : over.dataset.zone); }
      };
      window.addEventListener("pointermove", move); window.addEventListener("pointerup", up);
    }
    function zoneClick(zoneId) { if (selected) place(selected, zoneId); }
    function draw() {
      sh.inner.innerHTML = "";
      const pool = h("div", { class: "pool", "data-zone": "pool", "aria-label": "Items to sort" });
      pool.addEventListener("click", () => { if (selected && st.place[selected]) place(selected, null); });
      st.order.filter((id) => !st.place[id]).forEach((id) => pool.append(chip(id)));
      const grid = h("div", { class: "buckets", "data-n": b.buckets.length });
      for (const bk of b.buckets) {
        const z = h("div", { class: "bucket" + (selected ? " armed" : ""), "data-zone": bk.id, role: "button", tabindex: st.done ? null : "0",
          "aria-label": "Place in " + bk.label },
          h("div", { class: "bucket-label" }, bk.label));
        z.addEventListener("click", (e) => { if (e.target.closest(".bchip")) return; zoneClick(bk.id); });
        z.addEventListener("keydown", (e) => { if ((e.key === "Enter" || e.key === " ") && e.target === z) { e.preventDefault(); zoneClick(bk.id); } });
        st.order.filter((id) => st.place[id] === bk.id).forEach((id) => z.append(chip(id)));
        grid.append(z);
      }
      const left = st.order.filter((id) => !st.place[id]).length;
      sh.inner.append(
        h("p", { class: "muted", style: "font-size:15px;margin:0 0 10px" }, st.done ? "All items sorted correctly." :
          "Select an item, then select the group it belongs in. On a computer you can also drag items." + (selected ? " Item selected: choose a group." : "")),
        pool, grid);
      if (!st.done) sh.inner.append(h("div", { class: "act-actions" }, h("button", { class: "btn small", onclick: () => {
        out.innerHTML = "";
        if (left) { out.append(msg("bad", "Place every item before checking. " + left + " still in the pool.")); return; }
        st.attempts = (st.attempts || 0) + 1;
        const wrong = b.items.filter((i) => st.place[i.id] !== i.bucket).map((i) => i.id);
        if (!wrong.length) { st.wrong = []; ctx.complete(); sh.showDone(); draw(); out.append(msg("ok", "All " + b.items.length + " sorted correctly" + (st.attempts > 1 ? " (attempt " + st.attempts + ")." : " on the first try."))); return; }
        wrong.forEach((id) => delete st.place[id]); st.wrong = wrong; ctx.save(); draw();
        out.append(msg("bad", (b.items.length - wrong.length) + " of " + b.items.length + " correct. The highlighted items went back to the pool. Think about which group fits them best and try again."));
      } }, "Check my sorting")), out);
      else sh.inner.append(out);
    }
    draw();
    return sh.el;
  };

  /* ---------- Sequence ---------- */
  R.sequence = function (b, st, ctx) {
    const sh = shell(b, "Put in order", st);
    const correct = b.items.map((i) => i.id);
    if (!st.order) { st.order = shuffle(correct, true); ctx.save(); }
    const out = h("div");
    let marks = null;
    function move(i, d) { const j = i + d; if (j < 0 || j >= st.order.length) return; [st.order[i], st.order[j]] = [st.order[j], st.order[i]]; marks = null; out.innerHTML = ""; ctx.save(); draw(i + d); }
    function draw(focusIdx) {
      sh.inner.innerHTML = "";
      const list = h("ol", { class: "seq" });
      st.order.forEach((id, i) => {
        const it = b.items.find((x) => x.id === id);
        const cls = st.done ? "right" : marks ? (marks[i] ? "right" : "wrong") : "";
        const li = h("li", { class: cls, "data-id": id },
          h("span", { class: "pos", "aria-hidden": "true" }, i + 1),
          h("span", { class: "txt" }, h("b", null, it.text), it.detail ? h("small", null, it.detail) : null),
          st.done ? null : h("span", { class: "moves" },
            h("button", { class: "iconbtn", type: "button", "aria-label": "Move " + it.text + " up", disabled: i === 0 ? true : null, onclick: () => move(i, -1) }, "\u2191"),
            h("button", { class: "iconbtn", type: "button", "aria-label": "Move " + it.text + " down", disabled: i === st.order.length - 1 ? true : null, onclick: () => move(i, 1) }, "\u2193")));
        if (!st.done) enableDrag(li, list);
        list.append(li);
      });
      sh.inner.append(h("p", { class: "muted", style: "font-size:15px;margin:0 0 6px" }, st.done ? "Correct order." : "Use the arrows to reorder. On a computer you can also drag an item."), list);
      if (!st.done) sh.inner.append(h("div", { class: "act-actions" }, h("button", { class: "btn small", onclick: () => {
        st.attempts = (st.attempts || 0) + 1;
        marks = st.order.map((id, i) => id === correct[i]);
        const n = marks.filter(Boolean).length;
        out.innerHTML = "";
        if (n === correct.length) { ctx.complete(); sh.showDone(); draw(); out.append(msg("ok", "That's the right order.")); return; }
        ctx.save(); draw();
        out.append(msg("bad", n + " of " + correct.length + " are in the right position (shown in green). Move the others and check again."));
      } }, "Check my order")), out);
      else sh.inner.append(out);
      if (focusIdx != null) { const btns = list.children[focusIdx] && list.children[focusIdx].querySelectorAll(".iconbtn"); if (btns && btns.length) (btns[0].disabled ? btns[1] : btns[0]).focus(); }
    }
    function enableDrag(li, list) {
      li.addEventListener("pointerdown", (e) => {
        if (e.pointerType === "touch" || e.button !== 0 || e.target.closest("button")) return;
        const sy = e.clientY; let dragging = false;
        const mv = (ev) => {
          if (!dragging && Math.abs(ev.clientY - sy) < 6) return;
          dragging = true; li.style.opacity = ".6";
          const sibs = [...list.children].filter((c) => c !== li);
          const after = sibs.find((c) => { const r = c.getBoundingClientRect(); return ev.clientY < r.top + r.height / 2; });
          if (after) list.insertBefore(li, after); else list.append(li);
        };
        const up = () => {
          window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up);
          li.style.opacity = "";
          if (dragging) { st.order = [...list.children].map((c) => c.dataset.id); marks = null; out.innerHTML = ""; ctx.save(); draw(); }
        };
        window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
      });
    }
    draw();
    return sh.el;
  };

  /* ---------- Matching with lines ---------- */
  R.match = function (b, st, ctx) {
    const sh = shell(b, "Match the pairs", st);
    st.pairs = st.pairs || {};
    if (!st.rorder) { st.rorder = shuffle(b.right.map((r) => r.id), true); ctx.save(); }
    let sel = null, marks = null;
    const out = h("div");
    const leftIdx = (lid) => b.left.findIndex((l) => l.id === lid);
    const pairOfRight = (rid) => Object.keys(st.pairs).find((l) => st.pairs[l] === rid);
    let wrapEl, svg;
    function pick(side, id) {
      if (st.done) return;
      out.innerHTML = ""; marks = null;
      if (side === "L") { sel = sel === id ? null : id; draw(); return; }
      if (!sel) { const l = pairOfRight(id); if (l) { delete st.pairs[l]; ctx.save(); } draw(); return; } // tap a paired right with nothing selected: unpair
      const prev = pairOfRight(id); if (prev) delete st.pairs[prev];
      st.pairs[sel] = id; sel = null; ctx.save(); draw();
    }
    function item(side, obj) {
      const lid = side === "L" ? obj.id : pairOfRight(obj.id);
      const paired = side === "L" ? !!st.pairs[obj.id] : !!lid;
      const n = lid ? leftIdx(lid) : -1;
      let cls = "mitem";
      if (paired) cls += " paired";
      if (sel === obj.id && side === "L") cls += " selected";
      if (st.done) cls += " right"; else if (marks && paired && lid in marks) cls += marks[lid] ? " right" : " wrong";
      const badge = h("span", { class: "badge", "aria-hidden": "true" }, paired ? String(n + 1) : (side === "L" ? String(leftIdx(obj.id) + 1) : ""));
      if (paired) badge.style.background = PAIR_COLORS[n % PAIR_COLORS.length];
      else if (side === "L") { badge.style.color = "var(--muted)"; }
      const label = side === "L" ? obj.text : obj.text;
      const el = h("button", { class: cls, type: "button", "data-side": side, "data-id": obj.id, disabled: st.done ? true : null,
        "aria-pressed": sel === obj.id ? "true" : "false",
        "aria-label": (paired ? "Paired with " + (n + 1) + ". " : "") + label, onclick: () => pick(side, obj.id) }, badge, label);
      return el;
    }
    function drawLines() {
      if (!svg || !wrapEl.isConnected) return;
      svg.innerHTML = "";
      if (getComputedStyle(svg).display === "none") return; // single-column layout: badges carry the pairing
      const base = wrapEl.getBoundingClientRect();
      for (const [lid, rid] of Object.entries(st.pairs)) {
        const le = wrapEl.querySelector('[data-side="L"][data-id="' + lid + '"]'), re = wrapEl.querySelector('[data-side="R"][data-id="' + rid + '"]');
        if (!le || !re) continue;
        const a = le.getBoundingClientRect(), c = re.getBoundingClientRect();
        if (c.left < a.right) continue; // columns stacked: no sensible line
        const x1 = a.right - base.left, y1 = a.top + a.height / 2 - base.top, x2 = c.left - base.left, y2 = c.top + c.height / 2 - base.top;
        const dx = (x2 - x1) / 2;
        const n = leftIdx(lid);
        const color = st.done ? "#157A72" : marks && lid in marks ? (marks[lid] ? "#157A72" : "#B3261E") : PAIR_COLORS[n % PAIR_COLORS.length];
        const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
        p.setAttribute("d", `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`);
        p.setAttribute("fill", "none"); p.setAttribute("stroke", color); p.setAttribute("stroke-width", "2.5"); p.setAttribute("stroke-linecap", "round");
        svg.append(p);
        [[x1, y1], [x2, y2]].forEach(([x, y]) => { const ci = document.createElementNS("http://www.w3.org/2000/svg", "circle"); ci.setAttribute("cx", x); ci.setAttribute("cy", y); ci.setAttribute("r", "4.5"); ci.setAttribute("fill", color); svg.append(ci); });
      }
    }
    function draw() {
      sh.inner.innerHTML = "";
      svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); svg.setAttribute("class", "lines"); svg.setAttribute("aria-hidden", "true");
      wrapEl = h("div", { class: "match" }, svg,
        h("div", { class: "match-col" }, h("h4", null, "Select one of these"), b.left.map((l) => item("L", l))),
        h("div", { class: "match-col" }, h("h4", null, "Then its match"), st.rorder.map((rid) => item("R", b.right.find((r) => r.id === rid)))));
      const nPaired = Object.keys(st.pairs).length;
      sh.inner.append(h("p", { class: "muted", style: "font-size:15px;margin:0 0 12px" }, st.done ? "All pairs matched." :
        (sel ? "Now select its match on the right." : "Select an item on the left, then its match on the right. Select a matched item on the right to undo it.") + " " + nPaired + " of " + b.left.length + " paired."), wrapEl);
      if (!st.done) sh.inner.append(h("div", { class: "act-actions" }, h("button", { class: "btn small", onclick: () => {
        out.innerHTML = "";
        const missing = b.left.length - Object.keys(st.pairs).length;
        if (missing) { out.append(msg("bad", "Match every item before checking. " + missing + " still unmatched.")); return; }
        st.attempts = (st.attempts || 0) + 1;
        marks = {}; b.left.forEach((l) => { marks[l.id] = st.pairs[l.id] === b.pairs[l.id]; });
        const wrong = Object.keys(marks).filter((k) => !marks[k]);
        if (!wrong.length) { marks = null; ctx.complete(); sh.showDone(); draw(); out.append(msg("ok", "All pairs are correct.")); return; }
        draw();
        out.append(msg("bad", (b.left.length - wrong.length) + " of " + b.left.length + " pairs are correct. Incorrect pairs are shown in red and have been cleared. Rematch them and check again."));
        wrong.forEach((k) => delete st.pairs[k]); ctx.save();
        setTimeout(() => { if (!st.done) { marks = null; draw(); } }, 1600);
      } }, "Check my matches")), out);
      else sh.inner.append(out);
      requestAnimationFrame(drawLines);
    }
    const ro = new ResizeObserver(() => drawLines());
    draw();
    requestAnimationFrame(() => { if (wrapEl) ro.observe(sh.el); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawLines);
    return sh.el;
  };

  /* ---------- Flip cards ---------- */
  R.flip = function (b, st, ctx) {
    const sh = shell(b, "Explore", st);
    st.seen = st.seen || [];
    const count = h("p", { class: "muted", style: "font-size:15px;margin:0 0 12px" });
    const upd = () => { count.textContent = st.done ? "All " + b.cards.length + " cards explored." : st.seen.length + " of " + b.cards.length + " explored. Select a card to flip it."; };
    const grid = h("div", { class: "flips" });
    b.cards.forEach((c, i) => {
      const card = h("button", { class: "flip", type: "button", "aria-pressed": "false", "aria-label": c.front + ". Select to flip." },
        h("span", { class: "flip-inner" },
          h("span", { class: "flip-face flip-front" }, st.seen.includes(i) ? h("span", { class: "seen-dot" }) : null,
            h("span", null, h("b", null, c.front), c.sub ? h("small", null, c.sub) : null), h("span", { class: "flip-hint" }, "Select to flip")),
          h("span", { class: "flip-face flip-back", html: c.back })));
      card.addEventListener("click", () => {
        const on = card.classList.toggle("flipped"); card.setAttribute("aria-pressed", on ? "true" : "false");
        if (on && !st.seen.includes(i)) {
          st.seen.push(i); ctx.save();
          const front = card.querySelector(".flip-front"); if (!front.querySelector(".seen-dot")) front.prepend(h("span", { class: "seen-dot" }));
          if (st.seen.length === b.cards.length) { ctx.complete(); sh.showDone(); }
          upd();
        }
      });
      grid.append(card);
    });
    upd(); sh.inner.append(count, grid);
    return sh.el;
  };

  /* ---------- Hotspot / scavenger hunt ---------- */
  R.hotspot = function (b, st, ctx) {
    const sh = shell(b, "Find it", st);
    st.found = st.found || []; st.missed = st.missed || [];
    const fb = h("div", { "aria-live": "polite" });
    const counter = h("span", { class: "hs-counter" });
    const upd = () => { counter.textContent = "Found " + st.found.length + " of " + b.find; };
    const d = b.doc;
    function clickSeg(key, seg, el) {
      fb.innerHTML = "";
      if (seg.target) {
        if (!st.found.includes(key)) { st.found.push(key); el.classList.add("found"); }
        fb.append(msg("ok", "<strong>Found one.</strong> " + esc(seg.fb)));
        if (st.found.length >= b.find && !st.done) { ctx.complete(); sh.showDone(); fb.append(msg("ok", "You found all " + b.find + ".")); }
      } else {
        if (!st.missed.includes(key)) st.missed.push(key);
        el.classList.add("miss");
        fb.append(msg("info", "<strong>Not this one.</strong> " + esc(seg.fb) + (st.done ? "" : " Keep looking.")));
      }
      ctx.save(); upd();
    }
    const cls = (key) => (st.found.includes(key) ? " found" : st.missed.includes(key) ? " miss" : "");
    let bodyEl;
    if (d.kind === "message") {
      bodyEl = h("div", { class: "doc-body" });
      d.segments.forEach((s, i) => { const k = "s" + i; const el = h("button", { class: "seg" + cls(k), type: "button" }, s.t); el.onclick = () => clickSeg(k, s, el); bodyEl.append(el, " "); });
    } else if (d.kind === "tiles") {
      bodyEl = h("div", { class: "tiles" });
      d.tiles.forEach((t, i) => { const k = "t" + i; const el = h("button", { class: "tile" + cls(k), type: "button" }, h("small", null, t.label), h("b", null, t.value)); el.onclick = () => clickSeg(k, t, el); bodyEl.append(el); });
    } else {
      bodyEl = h("div", { class: "table-wrap", style: "margin:0;border:0;border-radius:0" }, h("table", null,
        h("thead", null, h("tr", null, d.head.map((c) => h("th", { scope: "col" }, c)))),
        h("tbody", null, d.rows.map((r, ri) => h("tr", null, r.map((c, ci) => {
          if (typeof c === "string") return h("td", null, c);
          const k = "c" + ri + "-" + ci; const el = h("button", { class: "cellbtn" + cls(k), type: "button", "aria-label": d.rows[ri][0] + ", " + d.head[ci] + ": " + c.t }, c.t); el.onclick = () => clickSeg(k, c, el);
          return h("td", null, el);
        }))))));
    }
    upd();
    sh.inner.append(h("div", { class: "doc" }, h("div", { class: "doc-head" }, d.heading, counter), bodyEl), fb);
    return sh.el;
  };

  /* ---------- Step runner shared by branching sims and profiles ---------- */
  function runSteps(host, steps, st, ctx, onFinish, opts) {
    st.step = st.step || 0; st.wrong = st.wrong || {};
    let justRight = null;
    function draw() {
      host.innerHTML = "";
      if (opts && opts.track) {
        const tr = h("div", { class: "sim-track", "aria-hidden": "true" });
        steps.forEach((s, i) => tr.append(h("span", { class: i < st.step ? "done" : i === st.step ? "here" : "" })));
        tr.append(h("em", null, st.step >= steps.length ? "Complete" : "Step " + (st.step + 1) + " of " + steps.length + (steps[st.step].label ? ": " + steps[st.step].label : "")));
        host.append(tr);
      }
      if (st.step >= steps.length) { onFinish && onFinish(true); return; }
      const s = steps[st.step], wrongs = st.wrong[st.step] || [];
      if (s.context) host.append(h("p", { style: "margin-bottom:6px" }, s.context));
      if (s.quote) host.append(h("p", { class: "sim-quote" }, s.quote));
      if (s.prompt) host.append(h("p", { class: "sim-quote", style: "font-size:17px" }, s.prompt));
      const fb = h("div", { "aria-live": "polite" });
      const opts2 = h("div", { class: "opts" });
      s.options.forEach((o, oi) => {
        const isWrong = wrongs.includes(oi), isRight = justRight === oi;
        const btn = h("button", { class: "opt" + (isWrong ? " wrong" : "") + (isRight ? " right" : ""), type: "button",
          disabled: isWrong || justRight != null ? true : null }, o.text);
        btn.onclick = () => {
          if (o.correct) { justRight = oi; ctx.save(); draw(); }
          else { (st.wrong[st.step] = st.wrong[st.step] || []).push(oi); lastFb = oi; ctx.save(); draw(); }
        };
        opts2.append(btn);
      });
      host.append(opts2, fb);
      function showFb() {
        fb.innerHTML = "";
        if (justRight != null) {
          fb.append(msg("ok", "<strong>Good choice.</strong> " + esc(s.options[justRight].feedback)),
            h("div", { class: "act-actions" }, h("button", { class: "btn small dark", onclick: () => { st.step++; justRight = null; lastFb = null; ctx.save(); draw(); host.closest(".activity").scrollIntoView({ behavior: "smooth", block: "nearest" }); } },
              st.step === steps.length - 1 ? "Finish" : "Continue")));
        } else if (lastFb != null) {
          fb.append(msg("bad", "<strong>Not the best response.</strong> " + esc(s.options[lastFb].feedback) + " Try another response."));
        }
      }
      showFb();
    }
    let lastFb = null;
    draw();
  }

  /* ---------- Branching simulation ---------- */
  R.sim = function (b, st, ctx) {
    const sh = shell(b, "Branching scenario", st);
    sh.inner.append(h("div", { class: "sim-setup" }, b.setup));
    const host = h("div"); sh.inner.append(host);
    runSteps(host, b.steps, st, ctx, () => {
      const wrongTotal = Object.values(st.wrong || {}).reduce((a, x) => a + x.length, 0);
      host.append(h("p", { style: "font-weight:700;color:var(--ink);margin:4px 0 6px" }, "The strongest response at each step"),
        h("ul", { class: "sim-history" }, b.steps.map((s, i) => h("li", null, h("b", null, (s.label || "Step " + (i + 1)) + ": "), s.options.find((o) => o.correct).text))));
      host.append(msg("ok", "<strong>Scenario complete.</strong> " + (wrongTotal ? "You recovered from " + wrongTotal + " less effective choice" + (wrongTotal > 1 ? "s" : "") + " along the way; that's how the skill is built." : "You chose the strongest response at every step.")),
        h("div", { class: "act-actions" }, h("button", { class: "linkbtn", onclick: () => { st.step = 0; st.wrong = {}; ctx.save(); runAgain(); } }, "Replay this scenario")));
      if (!st.done) { ctx.complete(); } sh.showDone();
    }, { track: true });
    function runAgain() { runSteps(host, b.steps, st, ctx, () => { host.append(msg("ok", "<strong>Scenario complete.</strong>")); }, { track: true }); }
    return sh.el;
  };

  /* ---------- Profiles (diagnose several people) ---------- */
  R.profiles = function (b, st, ctx) {
    const sh = shell(b, "Diagnose", st);
    st.p = st.p || {};
    const isDone = (p) => !!(st.p[p.id] && st.p[p.id].done);
    if (!st.cur) st.cur = (b.profiles.find((p) => !isDone(p)) || b.profiles[0]).id;
    const grid = h("div", { class: "profiles" }), stage = h("div", { class: "pstage" });
    function drawGrid() {
      grid.innerHTML = "";
      b.profiles.forEach((p) => grid.append(h("button", { class: "pcard" + (st.cur === p.id ? " current" : "") + (isDone(p) ? " done" : ""), type: "button",
        "aria-pressed": st.cur === p.id ? "true" : "false", onclick: () => { st.cur = p.id; ctx.save(); drawGrid(); drawStage(); } },
        h("b", null, p.name), h("small", null, p.tag), h("span", { class: "sr-only" }, isDone(p) ? " (done)" : ""))));
    }
    function drawStage() {
      const p = b.profiles.find((x) => x.id === st.cur), ps = st.p[p.id] || (st.p[p.id] = {});
      stage.innerHTML = "";
      stage.append(h("h3", null, p.name), h("p", { class: "sim-quote" }, p.quote));
      const host = h("div"); stage.append(host);
      runSteps(host, p.steps, ps, ctx, () => {
        ps.done = true; ctx.save();
        const next = b.profiles.find((x) => !isDone(x));
        host.append(msg("ok", "<strong>" + esc(p.name) + " diagnosed.</strong>"));
        if (next) host.append(h("div", { class: "act-actions" }, h("button", { class: "btn small dark", onclick: () => { st.cur = next.id; ctx.save(); drawGrid(); drawStage(); } }, "Next: " + next.name)));
        drawGrid();
        if (b.profiles.every(isDone) && !st.done) { ctx.complete(); sh.showDone(); }
      });
    }
    const count = () => b.profiles.filter(isDone).length;
    sh.inner.append(h("p", { class: "muted", style: "font-size:15px;margin:0 0 12px" }, "Select a team member. For each, pick the diagnosis, then the response. Work through all five."), grid, stage);
    drawGrid(); drawStage(); void count;
    return sh.el;
  };

  /* ---------- Quiz (check for understanding) ---------- */
  function quizUI(questions, st, opts) {
    const wrap = h("div"); st.answers = st.answers || {};
    function draw() {
      wrap.innerHTML = "";
      if (st.submitted) {
        const n = questions.filter((q, i) => st.answers[i] === q.answer).length;
        wrap.append(h("div", { class: "score" }, h("b", null, Math.round((n / questions.length) * 100) + "%"), h("span", null, n + " of " + questions.length + " correct" + (opts.scoreNote ? opts.scoreNote(n) : ""))));
      }
      questions.forEach((q, i) => {
        const fs = h("fieldset", null, h("legend", null, (i + 1) + ". " + q.q));
        q.options.forEach((o, oi) => {
          let cls = "";
          if (st.submitted) { if (oi === q.answer) cls = "right"; else if (st.answers[i] === oi) cls = "wrong"; }
          const r = h("input", { type: "radio", name: opts.name + "-" + i, value: oi, disabled: st.submitted ? true : null });
          r.checked = st.answers[i] === oi;
          r.addEventListener("change", () => { st.answers[i] = oi; wrap.querySelectorAll(".q")[i].classList.remove("unanswered"); opts.save(); });
          fs.append(h("label", { class: cls }, r, h("span", null, o)));
        });
        const qd = h("div", { class: "q" }, fs);
        if (st.submitted) qd.append(msg(st.answers[i] === q.answer ? "ok" : "bad", "<strong>" + (st.answers[i] === q.answer ? "Correct." : "Not quite.") + "</strong> " + esc(q.explain)));
        wrap.append(qd);
      });
      const out = h("div");
      if (!st.submitted) {
        wrap.append(h("div", { class: "act-actions" }, h("button", { class: "btn" + (opts.big ? "" : " small"), onclick: () => {
          out.innerHTML = "";
          const missing = questions.map((q, i) => i).filter((i) => st.answers[i] == null);
          if (missing.length) {
            missing.forEach((i) => wrap.querySelectorAll(".q")[i].classList.add("unanswered"));
            out.append(msg("bad", "Answer every question before submitting. Still unanswered: " + missing.map((i) => "question " + (i + 1)).join(", ") + "."));
            wrap.querySelectorAll(".q")[missing[0]].scrollIntoView({ behavior: "smooth", block: "center" });
            return;
          }
          const n = questions.filter((q, i) => st.answers[i] === q.answer).length;
          st.submitted = true; st.attempts = (st.attempts || 0) + 1;
          st.score = Math.round((n / questions.length) * 100); st.best = Math.max(st.best || 0, st.score);
          opts.onSubmit(); draw(); wrap.scrollIntoView({ behavior: "smooth", block: "start" });
        } }, opts.submitLabel || "Check my answers")), out);
      } else {
        wrap.append(h("div", { class: "act-actions" }, opts.after ? opts.after() : null,
          h("button", { class: "btn small ghost", onclick: () => { st.submitted = false; st.answers = {}; opts.save(); draw(); } }, "Retake")));
      }
    }
    draw();
    return wrap;
  }
  R.quiz = function (b, st, ctx) {
    const sh = shell({ id: b.id, title: "Check for understanding" }, null, st);
    sh.inner.append(h("p", { class: "act-prompt" }, "Quick retrieval practice. Your score is recorded, and you can retake it."));
    sh.inner.append(quizUI(b.questions, st, { name: b.id, save: ctx.save, onSubmit: () => { ctx.complete(); sh.showDone(); } }));
    return sh.el;
  };

  /* ---------- Video with opt-out ---------- */
  function ytId(url) {
    if (!url || /^\[.*\]$/.test(url.trim())) return null;
    const m = url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/|\/live\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : (/^[A-Za-z0-9_-]{11}$/.test(url.trim()) ? url.trim() : null);
  }
  R.video = function (b, st, ctx) {
    const v = CFG.videos[b.videoKey];
    const sh = shell({ id: b.id, title: v.title }, "Video", st);
    const id = ytId(v.url);
    function draw() {
      sh.inner.innerHTML = "";
      const frame = h("div", { class: "video-frame" });
      if (st.optOut) frame.append(h("div", { class: "video-empty" }, "Video hidden. You chose the text summary below."));
      else if (id) frame.append(h("iframe", { src: "https://www.youtube-nocookie.com/embed/" + id + "?rel=0", title: v.title, loading: "lazy",
        allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen", allowfullscreen: true, referrerpolicy: "strict-origin-when-cross-origin" }));
      else frame.append(h("div", { class: "video-empty" }, "This video link hasn't been set up yet. Use the text summary below."));
      const opt = h("input", { type: "checkbox", id: "opt-" + b.id });
      opt.checked = !!st.optOut;
      opt.addEventListener("change", () => { st.optOut = opt.checked; ctx.save(); draw(); });
      if (!st.optOut) sh.inner.append(frame);
      sh.inner.append(h("label", { class: "check", for: "opt-" + b.id, style: st.optOut ? "margin-top:0" : null }, opt,
        h("span", null, "I can't watch YouTube on this network. Show me a text summary instead.")));
      if (st.optOut || !id) sh.inner.append(h("div", { class: "summary" }, h("h4", null, "Text summary: " + v.title), v.summary.map((p) => h("p", null, p))));
      const rv = h("input", { type: "checkbox", id: "rev-" + b.id });
      rv.checked = !!st.done;
      rv.addEventListener("change", () => {
        st.mode = (st.optOut || !id) ? "summary" : "video";
        if (rv.checked) { ctx.complete(); sh.showDone(); } else { ctx.undo(); sh.hideDone(); }
      });
      sh.inner.append(h("div", { class: "reviewed-box" }, h("label", { class: "check", for: "rev-" + b.id }, rv,
        h("span", null, h("strong", null, (st.optOut || !id) ? "I've read the summary." : "I've watched the video."), " Required to continue."))));
    }
    draw();
    return sh.el;
  };

  /* ---------- Rewrite with model reveal ---------- */
  R.rewrite = function (b, st, ctx) {
    const sh = shell(b, "Rewrite", st);
    st.items = st.items || {};
    b.items.forEach((it, i) => {
      const s = st.items[i] || (st.items[i] = { text: "", revealed: false });
      const out = h("div");
      const ta = h("textarea", { rows: 3, "aria-label": "Your rewrite of: " + it.original }); ta.value = s.text || "";
      ta.addEventListener("input", () => { s.text = ta.value; ctx.save(); });
      const showModel = () => out.append(h("div", { class: "model" }, h("b", null, "Model answer: "), it.model, h("br"), h("span", { class: "muted", style: "font-size:15px" }, "Why it works: " + it.why)));
      const btn = h("button", { class: "btn small", onclick: () => {
        out.innerHTML = "";
        if (!ta.value.trim()) { out.append(msg("bad", "Write your version first, then compare it with the model.")); ta.focus(); return; }
        s.revealed = true; ctx.save(); showModel(); btn.remove();
        if (b.items.every((_, j) => st.items[j] && st.items[j].revealed) && !st.done) { ctx.complete(); sh.showDone(); }
      } }, "Compare with model answer");
      sh.inner.append(h("div", { class: "rw" }, h("p", { class: "orig" }, it.original), ta, s.revealed ? null : h("div", { class: "act-actions" }, btn), out));
      if (s.revealed) showModel();
    });
    return sh.el;
  };

  /* ---------- Heat map self-assessment ---------- */
  R.heatmap = function (b, st, ctx) {
    const sh = shell(b, "Self-assessment", st);
    st.ratings = st.ratings || {};
    function lowest() { const rated = b.steps.filter((s) => st.ratings[s.id]); if (rated.length < b.steps.length) return null; return rated.reduce((a, s) => (st.ratings[s.id] < st.ratings[a.id] ? s : a)); }
    function draw() {
      sh.inner.innerHTML = "";
      const low = lowest();
      b.steps.forEach((s) => {
        const rate = h("div", { class: "rate", role: "group", "aria-label": "Rate " + s.label });
        for (let v = 1; v <= 5; v++) rate.append(h("button", { type: "button", "data-v": v, "aria-pressed": st.ratings[s.id] === v ? "true" : "false", "aria-label": s.label + ": " + v,
          onclick: () => { st.ratings[s.id] = v; ctx.save(); draw(); } }, v));
        sh.inner.append(h("div", { class: "heat-row" + (low && low.id === s.id ? " lowest" : "") }, h("span", { class: "lbl" }, s.label), rate));
      });
      if (!low) { sh.inner.append(h("p", { class: "muted", style: "font-size:15px;margin-top:12px" }, "Rate all eight conditions (" + Object.keys(st.ratings).length + " of " + b.steps.length + " done) to reveal your weakest step.")); return; }
      const out = h("div");
      const ev = h("textarea", { rows: 3, id: b.id + "-ev" }); ev.value = st.evidence || ""; ev.addEventListener("input", () => { st.evidence = ev.value; ctx.save(); });
      const ac = h("textarea", { rows: 3, id: b.id + "-ac" }); ac.value = st.action || ""; ac.addEventListener("input", () => { st.action = ac.value; ctx.save(); });
      st.lowest = low.id;
      sh.inner.append(h("div", { class: "heat-focus" },
        h("h3", null, "Your weakest condition: " + low.label),
        h("p", { style: "margin-bottom:6px" }, "Sample actions to consider:"), h("ul", { class: "prose" }, low.actions.map((a) => h("li", null, a))),
        h("div", { class: "field" }, h("label", { class: "field-label", for: b.id + "-ev" }, "What evidence supports this rating?"), ev),
        h("div", { class: "field" }, h("label", { class: "field-label", for: b.id + "-ac" }, "One management action you'll take"), h("span", { class: "hint" }, "Check: does it change the condition, or just add communication?"), ac),
        h("button", { class: "btn small", onclick: () => {
          out.innerHTML = "";
          if (!ev.value.trim() || !ac.value.trim()) { out.append(msg("bad", "Add both your evidence and your action before saving. A rating without evidence is a guess.")); (ev.value.trim() ? ac : ev).focus(); return; }
          ctx.complete(); sh.showDone(); out.append(msg("ok", "Saved to your PDF."));
        } }, "Save my assessment"), out));
    }
    draw();
    return sh.el;
  };

  /* ---------------- Page: final check ---------------- */
  function pageFinal(card) {
    card.append(hero("Wrap-up", "Final check", null, true));
    const body = h("div", { class: "body" });
    if (!allPathDone()) {
      body.append(h("p", { class: "lead" }, "The final check unlocks when you've completed Part 1 and every module in your path."));
      if (!S.track) body.append(msg("info", "You haven't chosen a path yet."), h("div", { class: "act-actions" }, h("button", { class: "btn", onclick: () => go("#/path") }, "Choose your path")));
      else {
        body.append(h("h2", { style: "font-size:21px" }, "Still to complete"),
          h("ul", { class: "modlist" }, pathMods().filter((m) => !modDone(m)).map((m) => h("li", null, markerEl(modPct(m)),
            h("div", { class: "grow" }, h("b", null, m.title), h("small", null, Math.round(modPct(m) * 100) + "% complete")),
            h("button", { class: "btn small ghost", onclick: () => go("#/m/" + m.id + "/" + resumeScreen(m)) }, "Open")))));
      }
      card.append(body); return;
    }
    const qs = finalQs();
    body.append(h("p", { class: "lead" }, qs.length + " questions drawn from Part 1 and your " + C.tracks[S.track].name + " path. You need " + C.finalCheck.passMark + "% to earn your certificate, and you can retake it."),
      S.final.best != null ? h("p", { class: "muted" }, "Best score so far: " + S.final.best + "% across " + S.final.attempts + " attempt" + (S.final.attempts > 1 ? "s" : "") + ".") : null);
    const F = S.final;
    body.append(quizUI(qs, F, { name: "final", big: true, save: () => save(), submitLabel: "Submit final check",
      scoreNote: () => (F.score >= C.finalCheck.passMark ? ". You passed." : ". You need " + C.finalCheck.passMark + "% to pass. Review the explanations and retake when you're ready."),
      onSubmit: () => { if (F.best >= C.finalCheck.passMark && !S.passedAt) S.passedAt = Date.now(); save(true); renderNav({ page: "final" }); },
      after: () => (F.score >= C.finalCheck.passMark || passed()) ? h("button", { class: "btn small", onclick: () => go("#/cert") }, "Get my certificate") : null }));
    card.append(body);
  }

  /* ---------------- Page: certificate and answers ---------------- */
  function cfuScores() {
    return pathMods().flatMap((m) => m.screens.flatMap((s) => s.blocks.filter((b) => b.type === "quiz").map((b) => ({ m, b, st: S.blocks[b.id] }))));
  }
  function pageCert(card) {
    card.append(hero("Wrap-up", "Certificate and answers", null, true));
    const body = h("div", { class: "body" });
    const cfus = cfuScores().filter((x) => x.st && x.st.best != null);
    const cfuAvg = cfus.length ? Math.round(cfus.reduce((a, x) => a + x.st.best, 0) / cfus.length) : null;
    body.append(h("div", { class: "stats" },
      h("div", { class: "stat" }, h("small", null, "Time invested"), h("b", null, fmtTime(S.time.total))),
      h("div", { class: "stat" }, h("small", null, "Final check (best)"), h("b", null, S.final.best != null ? S.final.best + "%" : "Not taken")),
      h("div", { class: "stat" }, h("small", null, "Checks for understanding"), h("b", null, cfuAvg != null ? cfuAvg + "%" : "None yet"))));

    body.append(h("h2", null, "Your certificate"));
    if (!passed()) {
      body.append(msg("info", "Your certificate unlocks when you score " + C.finalCheck.passMark + "% or higher on the final check." + (allPathDone() ? "" : " Complete your path modules first to unlock the final check.")),
        h("div", { class: "act-actions" }, h("button", { class: "btn small", onclick: () => go(allPathDone() ? "#/final" : "#/path") }, allPathDone() ? "Go to the final check" : "Continue my path")));
    } else {
      const out = h("div");
      const input = h("input", { type: "text", id: "cert-name", value: S.name || "", autocomplete: "name" });
      const canvas = h("canvas", { width: 1600, height: 1131, role: "img", "aria-label": "Certificate preview" });
      const redraw = () => drawCert(canvas).catch(() => {});
      input.addEventListener("input", () => { S.name = input.value.trim(); save(); redraw(); });
      body.append(h("div", { class: "panel" }, h("label", { class: "field-label", for: "cert-name" }, "Name on certificate"), h("div", { class: "row" }, input)),
        h("div", { class: "cert-wrap" }, canvas),
        h("div", { class: "act-actions" }, h("button", { class: "btn", id: "dl-cert", onclick: async () => {
          out.innerHTML = "";
          if (!input.value.trim()) { out.append(msg("bad", "Enter your name before downloading the certificate.")); input.focus(); return; }
          S.name = input.value.trim(); save(true); await drawCert(canvas);
          const a = h("a", { href: canvas.toDataURL("image/png"), download: "Managing-Change-Certificate-" + S.name.replace(/[^A-Za-z0-9]+/g, "-") + ".png" });
          document.body.append(a); a.click(); a.remove();
          out.append(msg("ok", "Certificate downloaded as a PNG."));
        } }, "Download certificate (PNG)")), out);
      redraw();
    }

    body.append(h("h2", { style: "margin-top:38px" }, "Download your answers"),
      h("p", null, "Get a PDF of every reflection, plan, rewrite, and activity result from your path, plus your scores. It's a useful record to bring to a conversation with your manager or coach."));
    const pout = h("div");
    body.append(h("div", { class: "act-actions" }, h("button", { class: "btn dark", id: "dl-pdf", onclick: async () => {
      pout.innerHTML = "";
      if (!window.PDFLib) { pout.append(msg("bad", "The PDF tool didn't load. Refresh the page and try again.")); return; }
      try { const bytes = await buildPDF(); downloadBlob(new Blob([bytes], { type: "application/pdf" }), "Managing-Change-My-Answers" + (S.name ? "-" + S.name.replace(/[^A-Za-z0-9]+/g, "-") : "") + ".pdf"); pout.append(msg("ok", "PDF downloaded.")); }
      catch (e) { console.error(e); pout.append(msg("bad", "The PDF couldn't be created: " + esc(e.message))); }
    } }, "Download PDF of my answers")), pout);

    if (S.track) body.append(h("h2", { style: "margin-top:38px" }, "Your progress"), moduleList(pathMods()));
    card.append(body);
  }
  function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob); const a = h("a", { href: url, download: name });
    document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  /* ---------------- Certificate canvas ---------------- */
  const imgCache = {};
  function loadImg(src) {
    if (!imgCache[src]) imgCache[src] = new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; });
    return imgCache[src];
  }
  async function drawCert(cv) {
    const F = '"Proxima Nova", "Helvetica Neue", Arial, sans-serif';
    if (document.fonts) await Promise.all(["400 30px", "600 30px", "700 30px"].map((w) => document.fonts.load(w + " 'Proxima Nova'").catch(() => {})));
    const [logo, bars] = await Promise.all([loadImg("img/logo-horizontal-dark.png"), loadImg("img/hero-bars.png")]);
    const x = cv.getContext("2d"), W = cv.width, H = cv.height;
    x.clearRect(0, 0, W, H);
    x.fillStyle = "#FFFFFF"; x.fillRect(0, 0, W, H);
    // navy band with bar motif
    x.fillStyle = "#101E38"; x.fillRect(0, 0, W, 300);
    x.save(); x.beginPath(); x.rect(0, 0, W, 300); x.clip();
    x.globalAlpha = 0.9; x.drawImage(bars, W - 400, 20, 330, 330 * bars.height / bars.width); x.restore();
    const g = x.createLinearGradient(0, 0, W, 0); g.addColorStop(0, "#2CD1C9"); g.addColorStop(1, "#00B5E2");
    x.fillStyle = g; x.fillRect(0, 300, W, 10);
    x.fillStyle = "#68D1C7"; x.font = "600 30px " + F; x.fillText("Certificate of completion", 110, 110);
    const fit = (t, weight, max, maxW) => { let sz = max; x.font = weight + " " + sz + "px " + F; while (x.measureText(t).width > maxW && sz > 20) { sz -= 2; x.font = weight + " " + sz + "px " + F; } };
    x.fillStyle = "#FFFFFF"; fit(C.title, 700, 78, W - 560); x.fillText(C.title, 110, 210);
    x.fillStyle = "#DEE6EF"; fit(C.subtitle, 600, 38, W - 560); x.fillText(C.subtitle, 110, 262);
    // body
    x.fillStyle = "#5B6779"; x.font = "400 32px " + F; x.fillText("This certifies that", 110, 420);
    let name = S.name || "Your name";
    let size = 96; x.font = "700 " + size + "px " + F;
    while (x.measureText(name).width > W - 220 && size > 48) { size -= 4; x.font = "700 " + size + "px " + F; }
    x.fillStyle = "#101E38"; x.fillText(name, 110, 530);
    x.fillStyle = "#68D1C7"; x.fillRect(110, 560, Math.min(x.measureText(name).width, W - 220), 6);
    x.fillStyle = "#2A384D"; x.font = "400 32px " + F;
    x.fillText("has completed the " + (S.track ? C.tracks[S.track].name + " path" : "course") + " of Managing Change, including the", 110, 635);
    x.fillText("foundation modules, a capstone, and the graded final check.", 110, 680);
    // stats
    const date = new Date(S.passedAt || Date.now()).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    const stats = [["Date completed", date], ["Time invested", fmtTime(S.time.total)], ["Knowledge check score", (S.final.best != null ? S.final.best : 0) + "%"]];
    stats.forEach(([k, v], i) => {
      const sx = 110 + i * 470;
      x.fillStyle = "#EFF4F7"; roundRect(x, sx, 760, 430, 150, 18); x.fill();
      x.fillStyle = "#5B6779"; x.font = "600 26px " + F; x.fillText(k, sx + 32, 815);
      x.fillStyle = "#101E38"; x.font = "700 46px " + F; x.fillText(v, sx + 32, 875);
    });
    x.drawImage(logo, 110, 990, 360, 360 * logo.height / logo.width);
    x.fillStyle = "#5B6779"; x.font = "400 24px " + F; x.textAlign = "right"; x.fillText("Learning and Development", W - 110, 1060); x.textAlign = "left";
  }
  function roundRect(x, X, Y, w, hh, r) { x.beginPath(); x.moveTo(X + r, Y); x.arcTo(X + w, Y, X + w, Y + hh, r); x.arcTo(X + w, Y + hh, X, Y + hh, r); x.arcTo(X, Y + hh, X, Y, r); x.arcTo(X, Y, X + w, Y, r); x.closePath(); }

  /* ---------------- PDF of answers (pdf-lib, vendored) ---------------- */
  const CP1252 = "\u20AC\u201A\u0192\u201E\u2026\u2020\u2021\u02C6\u2030\u0160\u2039\u0152\u017D\u2018\u2019\u201C\u201D\u2022\u2013\u2014\u02DC\u2122\u0161\u203A\u0153\u017E\u0178";
  function clean(s) {
    return String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
      .replace(/\u2191/g, "up").replace(/\u2193/g, "down").replace(/\u2713/g, "v").replace(/\t/g, "  ")
      .split("").map((c) => (c.charCodeAt(0) < 256 || CP1252.includes(c) || c === "\n" ? c : "?")).join("").replace(/\r/g, "");
  }
  async function buildPDF() {
    const { PDFDocument, StandardFonts, rgb } = window.PDFLib;
    const doc = await PDFDocument.create();
    doc.setTitle("Managing Change: my answers"); doc.setAuthor(S.name || "Learner");
    const reg = await doc.embedFont(StandardFonts.Helvetica), bold = await doc.embedFont(StandardFonts.HelveticaBold);
    const PW = 595.28, PH = 841.89, M = 54, MW = PW - M * 2;
    const INK = rgb(0.063, 0.118, 0.22), TXT = rgb(0.165, 0.22, 0.30), MUT = rgb(0.36, 0.40, 0.47), TEAL = rgb(0.08, 0.48, 0.45);
    let page, y;
    const newPage = () => { page = doc.addPage([PW, PH]); y = PH - M; page.drawText("Managing Change: my answers" + (S.name ? " | " + clean(S.name) : ""), { x: M, y: 26, size: 8, font: reg, color: MUT }); };
    newPage();
    function wrap(text, font, size, width) {
      const lines = [];
      for (const para of clean(text).split("\n")) {
        const words = para.split(/\s+/); let line = "";
        if (!para.trim()) { lines.push(""); continue; }
        for (const w of words) {
          const t = line ? line + " " + w : w;
          if (font.widthOfTextAtSize(t, size) <= width) line = t;
          else {
            if (line) lines.push(line);
            let ww = w; while (font.widthOfTextAtSize(ww, size) > width) { let k = ww.length; while (k > 1 && font.widthOfTextAtSize(ww.slice(0, k), size) > width) k--; lines.push(ww.slice(0, k)); ww = ww.slice(k); }
            line = ww;
          }
        }
        lines.push(line);
      }
      return lines;
    }
    function text(t, o) {
      o = Object.assign({ font: reg, size: 10.5, color: TXT, gap: 4, indent: 0, lh: 1.38 }, o);
      const lines = wrap(t, o.font, o.size, MW - o.indent);
      for (const ln of lines) {
        if (y - o.size < M) newPage();
        page.drawText(ln, { x: M + o.indent, y: y - o.size, size: o.size, font: o.font, color: o.color });
        y -= o.size * o.lh;
      }
      y -= o.gap;
    }
    const space = (n) => { y -= n; if (y < M) newPage(); };
    // Cover block
    page.drawRectangle({ x: 0, y: PH - 150, width: PW, height: 150, color: INK });
    page.drawText("Managing Change", { x: M, y: PH - 78, size: 26, font: bold, color: rgb(1, 1, 1) });
    page.drawText("From Resistance to Readiness | My answers and results", { x: M, y: PH - 104, size: 12, font: reg, color: rgb(0.41, 0.82, 0.78) });
    y = PH - 180;
    text("Learner: " + (S.name || "(name not entered)"), { font: bold, size: 12, color: INK, gap: 2 });
    text("Path: " + (S.track ? C.tracks[S.track].name : "Not chosen"), { gap: 2 });
    text("Generated: " + new Date().toLocaleString(), { gap: 2 });
    text("Time invested: " + fmtTime(S.time.total), { gap: 2 });
    text("Final check: " + (S.final.best != null ? "best " + S.final.best + "% (" + S.final.attempts + " attempt" + (S.final.attempts > 1 ? "s" : "") + ", pass mark " + C.finalCheck.passMark + "%)" + (passed() ? ", passed" : ", not yet passed") : "not taken"), { gap: 2 });
    const cf = cfuScores().filter((x) => x.st && x.st.best != null);
    text("Checks for understanding: " + (cf.length ? cf.map((x) => x.m.title + " " + x.st.best + "%").join("; ") : "none completed"), { gap: 12 });

    const mods = S.track ? pathMods() : foundationMods();
    for (const m of mods) {
      space(8);
      if (y < M + 80) newPage();
      page.drawRectangle({ x: M, y: y - 4, width: 4, height: 18, color: TEAL });
      text(m.title, { font: bold, size: 15, color: INK, indent: 12, gap: 2 });
      text(Math.round(modPct(m) * 100) + "% complete", { size: 9, color: MUT, indent: 12, gap: 8 });
      for (const scr of m.screens) for (const b of scr.blocks) {
        if (!INTERACTIVE.has(b.type)) continue;
        const st = S.blocks[b.id] || {};
        const status = st.done ? "Completed" : "Not completed";
        const head = (t) => text(t, { font: bold, size: 11, color: INK, gap: 2 });
        const ans = (t) => text(t && String(t).trim() ? t : "(no answer)", { indent: 10, gap: 6, color: t && String(t).trim() ? TXT : MUT });
        switch (b.type) {
          case "reflect": head("Reflection: " + b.prompt); ans(st.text); break;
          case "form": head(b.title); for (const f of b.fields) { text(f.label, { font: bold, size: 9.5, color: MUT, indent: 10, gap: 0 }); ans((st.values || {})[f.id]); } break;
          case "rewrite": head(b.title + " (" + status + ")"); b.items.forEach((it, i) => { const s = (st.items || {})[i] || {}; text("Original: " + it.original, { indent: 10, size: 9.5, color: MUT, gap: 1 }); text("My version: " + (s.text || "(none)"), { indent: 10, gap: 1 }); text("Model: " + it.model, { indent: 10, size: 9.5, color: TEAL, gap: 6 }); }); break;
          case "heatmap": head(b.title + " (" + status + ")"); text(b.steps.map((s) => s.label + ": " + ((st.ratings || {})[s.id] || "-")).join("  |  "), { indent: 10, size: 9.5, gap: 3 });
            if (st.lowest) { text("Weakest condition: " + b.steps.find((s) => s.id === st.lowest).label, { indent: 10, font: bold, size: 10, gap: 1 }); text("Evidence: " + (st.evidence || "(none)"), { indent: 10, gap: 1 }); text("Action: " + (st.action || "(none)"), { indent: 10, gap: 6 }); } break;
          case "quiz": head("Check for understanding: " + (st.best != null ? "best " + st.best + "%" + (st.attempts > 1 ? " over " + st.attempts + " attempts" : "") : "not taken")); space(2); break;
          case "video": { const v = CFG.videos[b.videoKey]; head("Video: " + v.title); text(st.done ? "Reviewed (" + (st.mode === "summary" ? "read the text summary" : "watched the video") + ")" : "Not yet reviewed", { indent: 10, gap: 6 }); break; }
          case "sim": { const w = Object.values(st.wrong || {}).reduce((a, x) => a + x.length, 0); head("Scenario: " + b.title); text(st.done ? "Completed with " + w + " less effective choice" + (w === 1 ? "" : "s") + " along the way." : "In progress: step " + Math.min((st.step || 0) + 1, b.steps.length) + " of " + b.steps.length + ".", { indent: 10, gap: 6 }); break; }
          case "profiles": { const n = b.profiles.filter((p) => st.p && st.p[p.id] && st.p[p.id].done).length; head("Diagnosis activity: " + b.title); text(n + " of " + b.profiles.length + " team members diagnosed. " + status + ".", { indent: 10, gap: 6 }); break; }
          case "hotspot": head("Scavenger hunt: " + b.title); text(status + ". Found " + (st.found || []).length + " of " + b.find + (st.missed && st.missed.length ? ", with " + st.missed.length + " other item" + (st.missed.length > 1 ? "s" : "") + " examined." : "."), { indent: 10, gap: 6 }); break;
          case "flip": head("Flip cards: " + b.title); text((st.seen || []).length + " of " + b.cards.length + " explored. " + status + ".", { indent: 10, gap: 6 }); break;
          default: head(({ bucket: "Sorting", sequence: "Sequencing", match: "Matching" }[b.type] || "Activity") + ": " + b.title);
            text(status + (st.attempts ? " (" + st.attempts + " check" + (st.attempts > 1 ? "s" : "") + ")" : "") + ".", { indent: 10, gap: 6 });
        }
      }
    }
    return doc.save();
  }

  /* ---------------- Boot ---------------- */
  function boot() {
    const menu = $("#menu-btn"), backdrop = $("#backdrop");
    menu.addEventListener("click", () => { const open = document.body.classList.toggle("nav-open"); menu.setAttribute("aria-expanded", open ? "true" : "false"); });
    const closeNav = () => { document.body.classList.remove("nav-open"); menu.setAttribute("aria-expanded", "false"); };
    backdrop.addEventListener("click", closeNav);
    $("#close-btn").addEventListener("click", () => { closeNav(); menu.focus(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") document.body.classList.remove("nav-open"); });
    render();
  }
  // Exposed for automated QA only.
  window.__course = { get state() { return S; }, save: () => save(true), fmtTime };
  boot();
})();
