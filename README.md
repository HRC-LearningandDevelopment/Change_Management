# Managing Change: From Resistance to Readiness

A self-paced e-learning course for Team Leaders and Managers, built from the *Managing Change Facilitator Guide*. Plain HTML, CSS, and JavaScript: no build step, no framework, no backend, no login. Visual system matches *Planning and Prioritising for Results*.

## Deploy to GitHub Pages

1. Create the repository on GitHub.
2. Upload **everything in this folder** to the root of the repository, keeping the folder structure. Include the empty `.nojekyll` file (it stops GitHub from processing the site with Jekyll).
3. In the repository, go to **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, and save.
4. The course will be live at `https://<your-org>.github.io/<repo-name>/` within a minute or two.

## Before launch: set the video links

Open `js/config.js` and replace `[VIDEO_1_URL]` and `[VIDEO_2_URL]` with normal YouTube links (`watch?v=`, `youtu.be/`, or `/embed/` all work).

**Also replace the two text summaries in the same file.** They currently summarize the concept each video supports, because the videos weren't available when the course was built. Learners who tick the "I can't watch YouTube" box see only the summary, so it should match the actual video.

Until a URL is set, the player shows a "not set up yet" panel and the summary, so the course still works end to end.

## Cache-busting: bump `?v=N` on every update

Every CSS and JS file is loaded in `index.html` with a version suffix, for example `js/app.js?v=12`. Browsers and GitHub Pages cache aggressively, so **whenever you change any file, increase the number on every tag in `index.html`** (currently `v=12`):

```
sed -i 's/?v=12"/?v=13"/g' index.html
```

If an update "isn't showing up," check in your browser's developer tools (Network tab) that the new `?v=` number loaded before assuming the change didn't work.

## What's where

| Path | Contents |
| --- | --- |
| `index.html` | Page shell and asset tags |
| `js/config.js` | Video URLs, video summaries, storage key |
| `js/content-core.js` | Roles, functions, and the four profile scenarios with their recurring cast |
| `js/content-foundation.js` | Part 1 modules (all profiles) |
| `js/content-tl.js` | Team Leader path |
| `js/content-mgr.js` | Manager path |
| `js/content-final.js` | Final knowledge check |
| `js/app.js` | Course engine: navigation, activity types, progress, timer, certificate, PDF |
| `css/styles.css` | Brand styles, including `@font-face` for Proxima Nova |
| `fonts/` | Proxima Nova (WOFF, with the original OTF/TTF as fallback) |
| `img/` | HealthRecon Connect logos, hero artwork, favicon |
| `vendor/pdf-lib.min.js` | PDF library for "Download PDF of my answers" (bundled locally, so it works on networks that block CDNs) |

To edit course wording, change the relevant `js/content-*.js` file, then bump `?v=N`.

## Course structure and tailoring

On the welcome screen, learners choose their **role** (Team Leader or Manager) and their **function** (Operations, or Non-Ops / Support). That creates four versions of the course, each built around one running scenario and a recurring cast:

| Profile | Scenario | Cast |
| --- | --- | --- |
| Team Leader, Operations | *Smart Queue*: new denial work-queue prioritization, then AI recommendations | Daniel, Imani, Rafael, Mei, Tomás, Aisha; manager Grace |
| Team Leader, Support | *One Front Door*: internal requests move from email and chat to a service portal | Marcus, Lena, Ravi, Ana, Kofi; manager Elena |
| Manager, Operations | *Smart Queue at scale*: three sites, a night shift, AI prioritization, new quality measures | TLs Jordan, Priya, Sam; the VP, Quality, the client |
| Manager, Support | *One Front Door* enterprise-wide: portal, role-based access, SLA tiers | TLs Chris, Neha, Owen; the COO, IT Security, Ops managers |

Characters recur on purpose: the senior employee who pushes back in the diagnosis activity is the one learners coach in the role-play.

- **Start:** welcome, name, and profile.
- **Part 1: the foundation:** The human side of change; Resistance is data. Shared structure, tailored scenarios. Contains both videos.
- **Part 2: your path:** Team Leader (5 modules + capstone with a 30-day plan) or Manager (7 modules + capstone with a change charter).
- **Wrap-up:** 10-question final check (80% to pass, retakes allowed), canvas certificate (PNG) showing the role and function, and a PDF of every reflection, plan, and activity result.

### How to edit tailored content

Any value in the content files can be wrapped in `V({...})` with variant keys. The most specific match wins: `tl_ops`, `tl_sup`, `mgr_ops`, `mgr_sup`, then `ops` / `sup`, then `tl` / `mgr`, then `all`. For example:

```js
title: V({ ops: "Spot the problems in the huddle message", sup: "Spot the problems in the stand-up message" })
```

A whole block can also be a variant (the role-play simulations are), or carry `only: "sup"` to appear for one profile group only. Activities whose content varies are saved separately per profile, so learners who switch profiles never get mixed-up answers. Untailored work, like reflections on generic prompts, carries across.

If you add an Operations variant, add the Support one too, or that profile falls back to the Operations wording.

## Progress and data

Progress, answers, reflections, profile, and time are saved in the learner's browser (`localStorage`) on every interaction. Nothing is sent anywhere. This means progress is tied to one browser on one device; clearing browser data or switching devices starts fresh. Learners can download their PDF as a record. A "Reset my progress" link sits at the bottom of the menu.

Time counts only while the tab is visible and the learner has been active in the last five minutes; gaps from a sleeping laptop or a background tab are ignored.

## Fonts

Proxima Nova is a commercial typeface. Publishing the font files on a public GitHub Pages site makes them downloadable by anyone, so confirm your license covers web embedding on a public site. If it doesn't, make the repository private (with GitHub Pages on a plan that supports it) or swap in licensed web fonts.

## Content governance

This course is a leadership-development resource, not legal, compliance, coding, billing, clinical, HR-policy, or payer-contract advice. Scenarios are de-identified and illustrative. Framework credits: ADKAR (Prosci), the 8-Step Process (Kotter), and SCARF (David Rock).
