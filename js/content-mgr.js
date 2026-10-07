/* PART 2 — MANAGER PATH (tailored by function) */
(function () {
  const V = window.CV;

  window.COURSE.modules.push(
  {
    id: "mg1", part: "path", track: "mgr", minutes: 7,
    title: "Change is a system, not an announcement",
    summary: "See why launches that look successful often aren't, and check all five layers that decide whether change actually lands.",
    screens: [
      {
        title: "The launch that looked successful",
        blocks: [
          { type: "p", html: V({
            ops: "Smart Queue's pilot workflow launched on time at Site A. Communications went out, training completion hit 98%, and Team Leaders reported positive feedback. Six weeks later, quality is inconsistent, old work lists are still in use, Team Leaders give different answers, and specialists have built manual workarounds.",
            sup: "One Front Door's first phase launched on time for IT requests. Announcements went out, training completion hit 98%, and Team Leaders reported positive feedback. Six weeks later, response times are inconsistent, Ops managers still email requests directly, coordinators give different answers about approvals, and teams have built side spreadsheets." }) },
          { type: "hotspot", id: "mg1-hunt", title: "Find the false-confidence indicators",
            prompt: "This was the six-week status dashboard. Click the four indicators that made leaders believe the change had landed.",
            find: 4,
            doc: V({
              ops: { kind: "tiles", heading: "Six-week status dashboard", tiles: [
                { label: "Launch date", value: "On time", target: true, fb: "Launch timing tells you the event happened, not that behavior changed." },
                { label: "Communications sent", value: "6 of 6", target: true, fb: "Activity, not adoption. Messages sent don't show messages understood or acted on." },
                { label: "Training completion", value: "98%", target: true, fb: "Training completion shows exposure, not reliable performance." },
                { label: "Team Leader pulse", value: "4.4 / 5", target: true, fb: "Positive sentiment isn't correct behavior or business value, and TLs may report what they think you want to hear." },
                { label: "Legacy work list use", value: "41% of accounts", fb: "Real evidence that adoption hasn't happened. This is what leaders should have been watching." },
                { label: "Quality variance across teams", value: "±18 points", fb: "A genuine warning sign of uneven proficiency, not a false-confidence indicator." },
                { label: "Workaround spreadsheets reported", value: "7", fb: "Real evidence: somewhere the new way is harder than the old. Worth investigating." },
                { label: "TL answers to the same question", value: "3 different", fb: "A clear sign of missing enablement and no single source of truth." } ] },
              sup: { kind: "tiles", heading: "Six-week status dashboard", tiles: [
                { label: "Launch date", value: "On time", target: true, fb: "Launch timing tells you the event happened, not that behavior changed." },
                { label: "Announcements sent", value: "6 of 6", target: true, fb: "Activity, not adoption. Messages sent don't show messages understood or acted on." },
                { label: "Training completion", value: "98%", target: true, fb: "Training completion shows exposure, not reliable use." },
                { label: "Team Leader pulse", value: "4.4 / 5", target: true, fb: "Positive sentiment isn't correct behavior or business value, and TLs may report what they think you want to hear." },
                { label: "Requests arriving outside the portal", value: "37%", fb: "Real evidence that adoption hasn't happened, for your team and your internal customers. This is what leaders should have been watching." },
                { label: "Response-time variance across teams", value: "±2.5 days", fb: "A genuine warning sign of uneven proficiency or routing, not a false-confidence indicator." },
                { label: "Side spreadsheets reported", value: "6", fb: "Real evidence: somewhere the portal is harder than the old way. Worth investigating." },
                { label: "Answers to the same approval question", value: "3 different", fb: "A clear sign of missing enablement and no single source of truth." } ] }
            }),
            key: [
              "All four false-confidence indicators measure activity. None measure adoption, proficiency, or outcome.",
              "The real signals were available. They just weren't on the dashboard leaders were watching.",
              "Keep asking: what behavior must be different, and what in the system still rewards the old behavior?"
            ] }
        ]
      },
      {
        title: "Five layers of change success",
        blocks: [
          { type: "p", html: "Managers tend to overvalue launch readiness and undervalue the conditions for adoption. A change has to hold up across five layers, and a gap in any one pulls behavior backward." },
          { type: "flip", id: "mg1-layers", title: "Explore the five layers",
            cards: [
              { front: "Strategic value", sub: "Why now, and what's at stake?", back: "<strong>Ask:</strong> why does this matter now, and what value or risk is at stake?<br><br><strong>If ignored:</strong> change becomes an activity without priority." },
              { front: "Solution quality", sub: "Does it work in real conditions?", back: V({ ops: "<strong>Ask:</strong> does the redesigned workflow work with real payer mix, volume, and staffing?<br><br><strong>If ignored:</strong> people are blamed for design defects.", sup: "<strong>Ask:</strong> do the categories, approvals, and routing work with real request volume and shifts?<br><br><strong>If ignored:</strong> people are blamed for design defects." }) },
              { front: "People adoption", sub: "Willing and able?", back: V({ ops: "<strong>Ask:</strong> are affected teams willing and able to use the new way?<br><br><strong>If ignored:</strong> launch happens without behavior change.", sup: "<strong>Ask:</strong> are your teams, and your internal customers, willing and able to use the new way?<br><br><strong>If ignored:</strong> launch happens without behavior change." }) },
              { front: "Operating system", sub: "Do routines support it?", back: "<strong>Ask:</strong> do goals, staffing, access, measures, incentives, and routines support it?<br><br><strong>If ignored:</strong> the old system pulls behavior backward." },
              { front: "Governance", sub: "Who owns what?", back: "<strong>Ask:</strong> who decides, escalates, measures, and sustains?<br><br><strong>If ignored:</strong> barriers and risks remain unowned." }
            ],
            key: [
              V({ ops: "The layers explain the opening case: training addressed only part of people adoption, while the operating system (old work lists still available) and governance (inconsistent answers) were never fixed.", sup: "The layers explain the opening case: training addressed only part of people adoption, while the operating system (inboxes still open) and governance (inconsistent approval answers) were never fixed." }),
              "“Solution quality” protects your people. If the design doesn't work in real conditions, behavior problems are symptoms, not causes.",
              "Most of these layers sit with you, not your Team Leaders. That's the core of the Manager role in change."
            ] },
          { type: "reflect", id: "mg1-r1", prompt: "For a real change you're leading: what behavior must be different, and what in the current system still rewards the old behavior?" }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "mg1-q", questions: [
            { q: V({ ops: "Training completion is 100%, but use of the legacy work list remains high. What does this show?", sup: "Training completion is 100%, but many requests still arrive by email. What does this show?" }),
              options: ["The change has succeeded.", "Activity is complete, but adoption isn't. Diagnose the barriers and operating conditions.", "Training needs to be repeated.", "The team is resistant."],
              answer: 1, explain: "Training shows exposure. If the old way persists, something in the system or individual barriers is still pulling people back." },
            { q: "People keep making the same errors with a new process despite good training. Which layer should you check first?",
              options: ["Strategic value", "Solution quality: does the process work in real conditions?", "Communications", "Recognition"],
              answer: 1, explain: "Before blaming people, check whether the design works in real conditions. Otherwise people get blamed for design defects." }
          ] }
        ]
      }
    ]
  },

  {
    id: "mg2", part: "path", track: "mgr", minutes: 8,
    title: "Kotter's architecture for momentum",
    summary: "Use Kotter's eight steps as a diagnostic heat map to find the weakest organization-level condition in your change.",
    screens: [
      {
        title: "Eight conditions for momentum",
        blocks: [
          { type: "p", html: "Kotter's model gives an organization-level view of change. Large changes rarely unfold in a perfectly linear sequence, so use the eight steps as a <strong>diagnostic</strong>: which conditions are strong, and which are missing?" },
          { type: "flip", id: "mg2-kotter", title: "Explore the eight steps",
            cards: [
              { front: "Create urgency", sub: "Why act now?", back: "<strong>You:</strong> connect data and stories to a credible opportunity or risk.<br><strong>Ask:</strong> do people understand why action is needed now?<br><strong>Evidence:</strong> leaders can explain the case; priority shows in decisions." },
              { front: "Build a coalition", sub: "Who can move or block it?", back: "<strong>You:</strong> assemble authority, expertise, influence, and affected voices.<br><strong>Ask:</strong> who can move or block this change?<br><strong>Evidence:</strong> the coalition has a charter, time, credibility, and decision access." },
              { front: "Form a vision", sub: "What will be different?", back: "<strong>You:</strong> define a clear future state and the choices behind it.<br><strong>Ask:</strong> can leaders explain what will be different?<br><strong>Evidence:</strong> shared story, target behaviors, outcome measures." },
              { front: "Enlist people", sub: "Contributing or receiving?", back: "<strong>You:</strong> create participation beyond the project team.<br><strong>Ask:</strong> are people contributing, or only receiving updates?<br><strong>Evidence:</strong> champions, feedback routes, local ownership." },
              { front: "Remove barriers", sub: "What makes the old way easier?", back: "<strong>You:</strong> resolve policy, capacity, skill, access, measure, and system obstacles.<br><strong>Ask:</strong> what makes the old way easier?<br><strong>Evidence:</strong> a barrier log with owners and closure dates." },
              { front: "Generate wins", sub: "What credible proof, soon?", back: "<strong>You:</strong> design early proof that matters to stakeholders.<br><strong>Ask:</strong> what credible result can we show soon?<br><strong>Evidence:</strong> verified improvement with no hidden guardrail failure." },
              { front: "Sustain acceleration", sub: "Declaring victory too early?", back: "<strong>You:</strong> use learning and credibility to expand and improve.<br><strong>Ask:</strong> are leaders declaring victory too early?<br><strong>Evidence:</strong> a next-wave roadmap and continued sponsor attention." },
              { front: "Institute change", sub: "Will it outlast the project?", back: V({ ops: "<strong>You:</strong> embed behavior in routines, measures, and governance.<br><strong>Ask:</strong> will it survive leadership or project turnover?<br><strong>Evidence:</strong> updated SOPs, QA rubrics, onboarding, scorecards, controls.", sup: "<strong>You:</strong> embed behavior in routines, measures, and governance.<br><strong>Ask:</strong> will it survive leadership or project turnover?<br><strong>Evidence:</strong> updated policies, service catalog, onboarding, SLA reports, controls." }) }
            ],
            key: [
              "Every step pairs a responsibility with evidence. If you can't point to the evidence, rate the condition as weak, however much activity has happened.",
              "“Remove barriers” is where Managers have the most leverage. A barrier log with owners and dates turns complaints into closures.",
              "“Generate wins” has a trap: a win that hides a guardrail failure destroys credibility when it surfaces."
            ] }
        ]
      },
      {
        title: "Find the weakest step",
        blocks: [
          { type: "p", html: V({ ops: "Rate Smart Queue, or a real change you're leading, from 1 (absent) to 5 (strong) on each condition. Your weakest condition opens prompts and sample actions, and you'll need to back the rating with evidence.", sup: "Rate One Front Door, or a real change you're leading, from 1 (absent) to 5 (strong) on each condition. Your weakest condition opens prompts and sample actions, and you'll need to back the rating with evidence." }) },
          { type: "heatmap", id: "mg2-heat", title: "Kotter heat map",
            steps: V({
              ops: [
                { id: "urg", label: "Create urgency", actions: ["Brief your TLs with the rework and aging data and one account story, so they can explain why now.", "Make the priority visible in a real decision, like protecting practice time at month-end."] },
                { id: "coal", label: "Build a coalition", actions: ["Write a one-page charter: members, decision rights, meeting rhythm.", "Add a frontline specialist and a Quality or Compliance owner with real decision access."] },
                { id: "vis", label: "Form a vision", actions: ["Draft three target behaviors and two outcome measures your TLs can repeat.", "Test it: can Jordan, Priya, and Sam explain the future state in their own words?"] },
                { id: "enl", label: "Enlist people", actions: ["Recruit a champion on each site and the night shift, with protected time.", "Open a feedback route and publish what you've changed because of it."] },
                { id: "bar", label: "Remove barriers", actions: ["Start a barrier log with an owner and closure date for every item.", "Review it weekly and escalate anything older than ten working days."] },
                { id: "win", label: "Generate wins", actions: ["Define one early win and the evidence, including quality guardrails, needed before announcing it.", "Choose a win that matters to specialists, not only to the sponsor."] },
                { id: "acc", label: "Sustain acceleration", actions: ["Hold a lessons-learned review before expanding to the next site.", "Keep the sponsor in a monthly review until stabilization, not just launch."] },
                { id: "inst", label: "Institute change", actions: ["List every SOP, QA rubric, onboarding module, and scorecard that still describes the old way.", "Set a retirement date and owner for the legacy work list."] } ],
              sup: [
                { id: "urg", label: "Create urgency", actions: ["Brief your TLs with the lost-request and new-hire access data, and the audit finding, so they can explain why now.", "Make the priority visible in a real decision, like closing the shared inboxes on a set date."] },
                { id: "coal", label: "Build a coalition", actions: ["Write a one-page charter: members, decision rights, meeting rhythm.", "Add an Operations manager and an IT Security owner with real decision access."] },
                { id: "vis", label: "Form a vision", actions: ["Draft three target behaviors and two outcome measures your TLs can repeat.", "Test it: can Chris, Neha, and Owen explain the future state in their own words?"] },
                { id: "enl", label: "Enlist people", actions: ["Recruit portal champions in each team and in key Operations departments.", "Open a feedback route and publish what you've changed because of it."] },
                { id: "bar", label: "Remove barriers", actions: ["Start a barrier log with an owner and closure date for every item.", "Review it weekly and escalate anything older than ten working days."] },
                { id: "win", label: "Generate wins", actions: ["Define one early win, such as new hires with access on day one, and the evidence needed before announcing it.", "Choose a win your internal customers will feel, not only one the COO will see."] },
                { id: "acc", label: "Sustain acceleration", actions: ["Hold a lessons-learned review before moving the next request type onto the portal.", "Keep the COO in a monthly review until stabilization, not just launch."] },
                { id: "inst", label: "Institute change", actions: ["List every policy, intranet page, onboarding module, and report that still describes the old way.", "Set a retirement date and owner for each shared inbox."] } ]
            }),
            key: [
              "Your lowest score points to where effort will have the most effect. Spreading effort evenly across eight steps is the most common mistake.",
              "Challenge your own action: does it change the condition, or does it just add more communication?",
              "Repeat the heat map every few weeks. Conditions shift as the change moves."
            ] }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "mg2-q", questions: [
            { q: "How does this course recommend using Kotter's eight steps?",
              options: ["As a strict sequence to complete in order", "As a diagnostic of organization-level conditions, revisited regularly", "Only at the start of a project", "As a communication plan template"],
              answer: 1, explain: "Large changes rarely unfold in order. Use the steps to find which conditions are weak right now." },
            { q: "Your weakest condition is “Remove barriers.” Which action addresses it most directly?",
              options: ["Send another update explaining the benefits.", "Create a barrier log with owners and closure dates, and review it weekly.", "Run a team-building event.", "Announce an early win."],
              answer: 1, explain: "Barrier removal needs owners and dates. More communication doesn't remove an access, capacity, or policy obstacle." }
          ] }
        ]
      }
    ]
  },

  {
    id: "mg3", part: "path", track: "mgr", minutes: 9,
    title: "Stakeholders and sponsorship",
    summary: "Map stakeholders by influence, impact, and support, then turn vague sponsor support into specific, visible actions.",
    screens: [
      {
        title: "Map your stakeholders",
        blocks: [
          { type: "p", html: V({
            ops: "Map stakeholders on three dimensions: <strong>influence</strong> over the change, <strong>impact</strong> from the change, and current <strong>support</strong>. High impact doesn't always mean high formal authority; specialists and informal influencers can shape adoption strongly.",
            sup: "Map stakeholders on three dimensions: <strong>influence</strong> over the change, <strong>impact</strong> from the change, and current <strong>support</strong>. In support functions, your internal customers often have more influence over your change than any org chart suggests." }) },
          { type: "match", id: "mg3-stake", title: "Match each group to its engagement approach",
            prompt: "Select a stakeholder group, then the engagement approach that fits what they need from you.",
            left: V({
              ops: [
                { id: "s1", text: "The VP of Operations (sponsor)" }, { id: "s2", text: "Peer Managers at other sites" }, { id: "s3", text: "Your Team Leaders" },
                { id: "s4", text: "Quality, Compliance, and IT" }, { id: "s5", text: "Specialists on the floor" }, { id: "s6", text: "The client account team" } ],
              sup: [
                { id: "s1", text: "The COO (sponsor)" }, { id: "s2", text: "Operations managers (internal customers)" }, { id: "s3", text: "Your Team Leaders" },
                { id: "s4", text: "IT Security and Internal Audit" }, { id: "s5", text: "Coordinators on your teams" }, { id: "s6", text: "The platform vendor" } ] }),
            right: V({
              ops: [
                { id: "r1", text: "Brief with evidence; ask for specific sponsor actions, not general endorsement." },
                { id: "r2", text: "Joint planning, a dependency review, and a shared decision log." },
                { id: "r3", text: "Leader cascade with teach-back and office hours." },
                { id: "r4", text: "Defined review gates, service levels, and an accountable owner." },
                { id: "r5", text: "Communication by role, pilots, listening, and coaching." },
                { id: "r6", text: "Formal change control and clear decision rights." } ],
              sup: [
                { id: "r1", text: "Brief with evidence; ask for specific sponsor actions, not general endorsement." },
                { id: "r2", text: "Early previews, a named service contact, and a clear account of what changes for their teams." },
                { id: "r3", text: "Leader cascade with teach-back and office hours." },
                { id: "r4", text: "Defined review gates and sign-off on the approval and access rules." },
                { id: "r5", text: "Communication by role, pilots, listening, and coaching." },
                { id: "r6", text: "Formal change control, contracted service levels, and clear decision rights." } ] }),
            pairs: { s1: "r1", s2: "r2", s3: "r3", s4: "r4", s5: "r5", s6: "r6" },
            key: [
              "Each group needs something different from you. Sending everyone the same update treats very different needs as one.",
              "Team Leaders need rehearsal, not just information. Teach-back is how you know they're ready.",
              V({ ops: "Revisit the map. Positions shift as the change moves, especially after early wins or setbacks at one site.", sup: "Revisit the map. One frustrated Operations manager at month-end can shift the COO's view overnight." })
            ] }
        ]
      },
      {
        title: "Sponsorship is action",
        blocks: [
          { type: "p", html: "Awareness isn't sponsorship. Active sponsors make decisions, allocate resources, model priorities, reinforce behavior, and stay visible after launch." },
          { type: "table", head: ["Sponsor behavior", "Concrete commitment"], rows: [
            ["Say", "Repeat the case, desired behavior, and priority in recurring forums."],
            ["Do", "Make decisions and allocate resources consistent with the change."],
            ["Model", V({ ops: "Use the new process, language, and reports personally where relevant.", sup: "Submit their own requests through the portal, and use its data in their reviews." })],
            ["Reinforce", "Recognize adoption, resolve conflicting priorities, and hold leaders accountable."],
            ["Stay", "Remain visible after launch and through stabilization."]
          ] },
          { type: "bucket", id: "mg3-sponsor", title: "Action or messaging?",
            prompt: "Sort each sponsor behavior: is it a sponsor action, or messaging only?",
            buckets: [ { id: "act", label: "Sponsor action" }, { id: "msg", label: "Messaging only" } ],
            items: V({
              ops: [
                { id: "a", text: "Approves two hours of protected practice per specialist", bucket: "act" },
                { id: "b", text: "Sends an all-staff email saying the rollout has full support", bucket: "msg" },
                { id: "c", text: "Resolves the clash between the new quality target and the old productivity target", bucket: "act" },
                { id: "d", text: "Opens the town hall with “I'm really excited about this change”", bucket: "msg" },
                { id: "e", text: "Reviews the adoption scorecard weekly and follows up with a site that bypasses the workflow", bucket: "act" },
                { id: "f", text: "Asks managers to “keep the energy up”", bucket: "msg" },
                { id: "g", text: "Retires the legacy work list so the old way stops being easier", bucket: "act" },
                { id: "h", text: "Posts an intranet article about why change is exciting", bucket: "msg" } ],
              sup: [
                { id: "a", text: "Approves protected sandbox practice time for every coordinator", bucket: "act" },
                { id: "b", text: "Sends an all-staff email saying the portal has full support", bucket: "msg" },
                { id: "c", text: "Tells Operations managers that requests outside the portal won't be prioritized after week three", bucket: "act" },
                { id: "d", text: "Opens the town hall with “This is a great step forward”", bucket: "msg" },
                { id: "e", text: "Reviews portal adoption weekly and follows up with any department routing around it", bucket: "act" },
                { id: "f", text: "Asks Team Leaders to “keep everyone positive”", bucket: "msg" },
                { id: "g", text: "Approves closing the shared inboxes so the old way stops being easier", bucket: "act" },
                { id: "h", text: "Posts an intranet article about digital transformation", bucket: "msg" } ]
            }),
            key: [
              "Messaging matters; it's the “Say” in the sponsor contract. But on its own it asks people to change while the system stays the same.",
              "Sponsor actions change conditions: time, priorities, resources, accountability, and what's easiest to do.",
              V({ ops: "Your job is to ask the VP for actions, not endorsements.", sup: "Your job is to ask the COO for actions, especially ones that move your internal customers, which you can't do alone." })
            ] }
        ]
      },
      {
        title: "Turn vague support into a specific ask",
        blocks: [
          { type: "p", html: "Rewrite each vague request as a specific sponsor ask, with a forum, a message or decision, an owner, and a date. Then compare with the model." },
          { type: "rewrite", id: "mg3-ask", title: "Make the ask specific",
            items: V({
              ops: [
                { original: "“Please support the rollout.”", model: "“At Monday's town hall, explain the client and quality reason for Smart Queue, name the non-negotiable behavior, and confirm the legacy work list retires after validation.”", why: "Names a forum, a message, and a commitment the sponsor can actually deliver." },
                { original: "“Please remove barriers.”", model: "“Approve two hours of protected practice per specialist, and assign IT to own queue access failures, fixed within one business day during stabilization.”", why: "Turns a vague hope into a resource decision and an owned service level." },
                { original: "“Please reinforce adoption.”", model: "“Review the adoption and quality scorecard weekly for four weeks, and follow up with any site bypassing the approved workflow.”", why: "Specifies the rhythm, the evidence, the duration, and the accountability behavior." } ],
              sup: [
                { original: "“Please support the rollout.”", model: "“At Monday's Operations leadership meeting, explain why every request now goes through the portal, name the date the shared inboxes close, and ask managers to submit their own requests from week one.”", why: "Targets the audience you can't move alone, your internal customers, with a date and a behavior." },
                { original: "“Please remove barriers.”", model: "“Approve two hours of sandbox practice per coordinator, and assign IT to own agent-role access failures, fixed within one business day during stabilization.”", why: "Turns a vague hope into a resource decision and an owned service level." },
                { original: "“Please reinforce adoption.”", model: "“Review the portal adoption and SLA scorecard weekly for four weeks, and follow up with any department that keeps routing around the portal.”", why: "Specifies the rhythm, the evidence, the duration, and the accountability behavior." } ]
            }),
            key: [
              "Sponsors usually want to help. Vague asks get vague help because they can't tell what you need.",
              "Every strong ask has a forum or mechanism, a specific decision or message, and a time frame.",
              "Ask the sponsor to stay: a four-week review rhythm keeps attention past launch, when most changes lose it."
            ] }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "mg3-q", questions: [
            { q: "Which is a sponsor action rather than sponsor messaging?",
              options: ["A supportive email to all staff", "Allocating resources, resolving priority conflicts, making decisions, removing barriers, and holding leaders accountable", "A motivational video", "A slogan on the intranet"],
              answer: 1, explain: "Sponsorship shows in decisions and resources. Messaging is necessary but not enough." },
            { q: V({ ops: "Specialists have little formal authority but will be heavily affected. How should you treat them on your stakeholder map?", sup: "Operations managers have no authority over your function but will be heavily affected. How should you treat them on your stakeholder map?" }),
              options: ["Low priority, since they have little authority over you", "As a high-impact group that can strongly shape adoption, with active engagement", "Inform them after launch", "Engage them only through someone else"],
              answer: 1, explain: "High impact doesn't require formal authority. Affected groups and informal influencers often decide whether adoption happens." }
          ] }
        ]
      }
    ]
  },

  {
    id: "mg4", part: "path", track: "mgr", minutes: 7,
    title: "Lead through leaders",
    summary: "Equip your Team Leaders to lead the change, not just relay it, and run a leader cascade that actually works.",
    screens: [
      {
        title: "What your Team Leaders need from you",
        blocks: [
          { type: "p", html: V({
            ops: "A leader cascade isn't forwarding slides. If Jordan, Priya, and Sam can't answer first-level questions, or can't safely say “I'll check,” you've built a rumor network across three sites. Team Leaders need six things from you.",
            sup: "A leader cascade isn't forwarding slides. If Chris, Neha, and Owen can't answer first-level questions, or can't safely say “I'll check,” your teams, and every Operations manager who asks them, get three different answers. Team Leaders need six things from you." }) },
          { type: "flip", id: "mg4-six", title: "The six things Team Leaders need",
            cards: [
              { front: "Context", sub: "The bigger picture", back: "<strong>You provide:</strong> the case for change, future state, trade-offs, and stakeholder impact.<br><br><strong>Check:</strong> they can explain the change in plain language." },
              { front: "Clarity", sub: "What's fixed and what's local", back: "<strong>You provide:</strong> non-negotiables, local choices, decision rights, and the escalation path.<br><br><strong>Check:</strong> they classify sample issues correctly." },
              { front: "Capability", sub: "Skills to lead it", back: "<strong>You provide:</strong> conversation practice, coaching tools, scenario answers, and job aids.<br><br><strong>Check:</strong> observed role-play and teach-back." },
              { front: "Capacity", sub: "Time to do it", back: "<strong>You provide:</strong> time for learning, coaching, team meetings, and stabilization.<br><br><strong>Check:</strong> workload and priority conflicts are resolved." },
              { front: "Consistency", sub: "One answer", back: "<strong>You provide:</strong> aligned answers and fast updates when guidance changes.<br><br><strong>Check:</strong> a single source of truth and a decision log." },
              { front: "Cover", sub: "Backing when it's hard", back: "<strong>You provide:</strong> visible support when a Team Leader enforces the agreed standard.<br><br><strong>Check:</strong> escalated barriers get timely management action." }
            ],
            key: [
              "Every need has a check. Attending a briefing proves none of them.",
              "Capacity is the one most often skipped. Asking TLs to coach a change on top of a full load, with no time protected, quietly guarantees it won't happen.",
              V({ ops: "Cover matters most when it's hardest. If Sam enforces the standard on night shift and you don't back him, every other TL notices.", sup: "Cover matters most when it's hardest. If Neha holds the portal line with a senior Ops manager and you don't back her, every other TL notices." })
            ] }
        ]
      },
      {
        title: "Run a leader cascade",
        blocks: [
          { type: "sequence", id: "mg4-cascade", title: "Order the leader cascade",
            prompt: "Arrange the steps of an effective leader cascade, from first to last.",
            items: [
              { id: "c1", text: "Pre-brief Team Leaders before anyone else hears" },
              { id: "c2", text: "Explain the business case and acknowledge likely team impact" },
              { id: "c3", text: "Clarify what's decided, open, and unknown" },
              { id: "c4", text: "Demonstrate the leader conversation you expect" },
              { id: "c5", text: "Practice with realistic objections" },
              { id: "c6", text: "Require teach-back in their own words, including the escalation route" },
              { id: "c7", text: "Provide a one-page leader kit and a response time for open questions" },
              { id: "c8", text: "Check message consistency and coaching behavior, not just attendance" }
            ],
            key: [
              "Order matters: Team Leaders who hear news at the same time as their teams can only react, not lead.",
              "Demonstrate, then practice, then teach-back. Each step moves from knowing to doing to proving readiness.",
              "The cascade doesn't end at the briefing. Checking consistency is how you find the TL giving a different answer before it becomes the team's truth."
            ] },
          { type: "reflect", id: "mg4-r1", prompt: "For a real change you're leading: what must each Team Leader be able to explain, demonstrate, decide, and escalate before they speak to their team?" }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "mg4-q", questions: [
            { q: "What's the best evidence that a Team Leader is ready to lead a change conversation?",
              options: ["They attended the briefing.", "They received the slides.", "They can explain the change and escalation route in their own words and have rehearsed realistic objections.", "They said they're comfortable."],
              answer: 2, explain: "Teach-back and observed rehearsal show readiness. Attendance and self-report don't." },
            { q: "Team Leaders are giving different answers to the same question. Which need is unmet?",
              options: ["Cover", "Consistency: a single source of truth and a decision log", "Capacity", "Context"],
              answer: 1, explain: "Inconsistent answers point to a missing single source of truth and slow updates when guidance changes." }
          ] }
        ]
      }
    ]
  },

  {
    id: "mg5", part: "path", track: "mgr", minutes: 7,
    title: "Change fatigue and portfolio discipline",
    summary: "Treat change fatigue as a portfolio problem. Size the impact of each change, and decide what to stop, pause, or sequence.",
    screens: [
      {
        title: "What change fatigue looks like",
        blocks: [
          { type: "p", html: "Change fatigue is usually a portfolio and operating-system problem, not an attitude problem. Look for these signs:" },
          { type: "list", items: [
            "Cynicism about new initiatives, and references to past efforts that were abandoned.",
            "Less attention to communications and lower participation in learning.",
            "Competing changes with overlapping deadlines and no trade-off decisions.",
            "Temporary workarounds becoming permanent.",
            "Leaders quietly deprioritizing initiatives while publicly agreeing.",
            "High effort with no visible improvement or closure."
          ] },
          { type: "bucket", id: "mg5-impact", title: "Size the impact",
            prompt: "Sort each change into its likely impact level, so you can see how much absorption capacity it needs.",
            buckets: [ { id: "low", label: "Low" }, { id: "med", label: "Medium" }, { id: "high", label: "High" } ],
            items: V({
              ops: [
                { id: "a", text: "A field label changes on an existing account screen", bucket: "low" },
                { id: "b", text: "Team reads a payer update; no new skill required", bucket: "low" },
                { id: "c", text: "No change to any metric or target", bucket: "low" },
                { id: "d", text: "A new work queue is added", bucket: "med" },
                { id: "e", text: "Several handoffs or escalation steps change", bucket: "med" },
                { id: "f", text: "A productivity or quality definition is updated", bucket: "med" },
                { id: "g", text: "Move to a new platform or AI-assisted prioritization", bucket: "high" },
                { id: "h", text: "Work needs new judgment, certification, or sustained coaching", bucket: "high" },
                { id: "i", text: "Role, authority, or career path is affected", bucket: "high" } ],
              sup: [
                { id: "a", text: "A field label changes on the request form", bucket: "low" },
                { id: "b", text: "Team reads a policy update; no new skill required", bucket: "low" },
                { id: "c", text: "No change to any metric or SLA", bucket: "low" },
                { id: "d", text: "A new request category is added", bucket: "med" },
                { id: "e", text: "Several handoffs or approval steps change", bucket: "med" },
                { id: "f", text: "An SLA target definition is updated", bucket: "med" },
                { id: "g", text: "Move to a new service platform", bucket: "high" },
                { id: "h", text: "Work needs new judgment, certification, or sustained coaching", bucket: "high" },
                { id: "i", text: "Role, authority, or career path is affected", bucket: "high" } ]
            }),
            key: [
              "Impact isn't one number. A small technology change can still be high impact if it changes roles, judgment, or how people are measured.",
              "When several medium changes land on the same people in the same month, together they behave like one high-impact change.",
              "Use this sizing to decide sequencing, not just how much to communicate."
            ] }
        ]
      },
      {
        title: "Portfolio triage",
        blocks: [
          { type: "table", head: ["Question", "Management decision"], rows: [
            ["Strategic relevance", "Continue, accelerate, redesign, pause, or stop."],
            ["Capacity demand", "What work will be removed, delayed, automated, or resourced?"],
            ["Change collision", "Do several initiatives hit the same people, process, system, or metric?"],
            ["Sequence", "What must happen first because of dependency or learning load?"],
            ["Absorption capacity", V({ ops: "How much can teams learn and stabilize while holding turnaround and quality?", sup: "How much can teams learn and stabilize while holding service levels to the business?" })],
            ["Legacy retirement", "Which old processes, templates, meetings, or reports will be removed?"]
          ] },
          { type: "callout", tone: "rule", title: "Manager decision rule", html: "Never add significant change without naming where the capacity comes from. “Absorb it” is not a capacity plan." },
          { type: "reflect", id: "mg5-r1", prompt: "List the real changes landing on your teams in the next 90 days. Which collide for the same people, process, or metric, and what will you pause, sequence, or stop?" }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "mg5-q", questions: [
            { q: V({ ops: "The VP wants to add a new client reporting requirement for Site B, which is mid-way through Smart Queue at month-end. What's the best response?", sup: "Finance asks you to add a new expense-approval workflow to the portal at month-end, while HR requests are still being migrated. What's the best response?" }),
              options: ["Agree. The team will absorb it.", "Agree, but ask for overtime.", "Name the collision, and agree what will be removed, delayed, or resourced before adding it.", "Quietly deprioritize it without saying anything."],
              answer: 2, explain: "Never add significant change without naming where the capacity comes from. Make the trade-off visible and decide it openly." },
            { q: "Leaders publicly support an initiative but privately tell their teams to ignore it. What's this most likely a sign of?",
              options: ["Poor individual attitude", "Change fatigue from an unmanaged portfolio with no trade-off decisions", "Strong local leadership", "A training gap"],
              answer: 1, explain: "Quiet deprioritizing is a classic fatigue signal: too many competing demands, with nobody making the trade-offs explicitly." }
          ] }
        ]
      }
    ]
  },

  {
    id: "mg6", part: "path", track: "mgr", minutes: 8,
    title: "Measure adoption, not activity",
    summary: "Build a measurement chain from activity to guardrails, and spot the data point that should stop a bad decision.",
    screens: [
      {
        title: "The change measurement chain",
        blocks: [
          { type: "table", head: ["Level", "Question", "Examples"], rows: [
            ["Activity", "Did we deliver the intervention?", "Communications sent, training completed, access provisioned."],
            ["Awareness and readiness", "Do people understand and intend to act?", "Reason recall, clarity pulse, readiness risks."],
            ["Adoption", "Are people using the new way?", V({ ops: "Approved workflow use, decline in the legacy work list.", sup: "Requests through the portal, decline in inbox and chat requests." })],
            ["Proficiency", "Can people perform correctly and efficiently?", V({ ops: "Decision accuracy, quality, cycle time after the learning curve.", sup: "Category accuracy, triage time after the learning curve." })],
            ["Outcome", "Is it producing the intended value?", V({ ops: "Less rework, better turnaround, client results.", sup: "Faster resolution, fewer resubmissions, day-one access for new hires." })],
            ["Guardrail", "Are we avoiding unacceptable harm or distortion?", V({ ops: "Compliance findings, quality decline, uneven workload, gaming, burnout signs.", sup: "Access granted without approval, privacy incidents, uneven workload, gaming SLAs." })]
          ] },
          { type: "bucket", id: "mg6-chain", title: "Place the measures",
            prompt: "Sort each measure into its level in the chain.",
            buckets: [ { id: "act", label: "Activity" }, { id: "adopt", label: "Adoption" }, { id: "prof", label: "Proficiency" }, { id: "out", label: "Outcome" }, { id: "guard", label: "Guardrail" } ],
            items: V({
              ops: [
                { id: "a", text: "Training completion rate", bucket: "act" },
                { id: "b", text: "Queue access provisioned for affected users", bucket: "act" },
                { id: "c", text: "Share of eligible accounts worked through the approved path", bucket: "adopt" },
                { id: "d", text: "Decline in legacy work list use", bucket: "adopt" },
                { id: "e", text: "Exception decision accuracy on sampled accounts", bucket: "prof" },
                { id: "f", text: "Cycle time once the learning curve has passed", bucket: "prof" },
                { id: "g", text: "Reduction in preventable rework", bucket: "out" },
                { id: "h", text: "Improvement in turnaround time", bucket: "out" },
                { id: "i", text: "Compliance deviations linked to the change", bucket: "guard" },
                { id: "j", text: "Workload imbalance between shifts", bucket: "guard" } ],
              sup: [
                { id: "a", text: "Training completion rate", bucket: "act" },
                { id: "b", text: "Agent roles provisioned", bucket: "act" },
                { id: "c", text: "Share of requests submitted through the portal", bucket: "adopt" },
                { id: "d", text: "Decline in requests sent to shared inboxes", bucket: "adopt" },
                { id: "e", text: "Correct category on sampled requests", bucket: "prof" },
                { id: "f", text: "Triage time once the learning curve has passed", bucket: "prof" },
                { id: "g", text: "Reduction in resubmitted requests", bucket: "out" },
                { id: "h", text: "New hires with working access on day one", bucket: "out" },
                { id: "i", text: "Access granted without the required approval", bucket: "guard" },
                { id: "j", text: "Workload imbalance between teams or shifts", bucket: "guard" } ]
            }),
            key: [
              "Activity measures are easy to collect and easy to over-trust. They show exposure, not performance.",
              "Adoption and proficiency differ: people can use the new path and still make wrong decisions in it.",
              V({ ops: "Always pair productivity with quality and compliance guardrails. A change can hit its target by causing harm elsewhere.", sup: "Always pair speed with access-control and privacy guardrails. An SLA can be hit by skipping the approvals that protect the business." })
            ] }
        ]
      },
      {
        title: "Read the scorecard",
        blocks: [
          { type: "p", html: V({ ops: "Six weeks in, a peer Manager points at this scorecard and says Site C needs a performance plan: “They're clearly the weakest.”", sup: "Six weeks in, a peer Manager points at this scorecard and says People Services needs a performance plan: “They're clearly the slowest.”" }) },
          { type: "hotspot", id: "mg6-hunt", title: "Find the data point that should stop that decision",
            prompt: V({ ops: "Click the single cell that means Site C's productivity can't fairly be compared yet.", sup: "Click the single cell that means People Services' resolution time can't fairly be compared yet." }),
            find: 1,
            doc: V({
              ops: { kind: "table", heading: "Week 6 change scorecard", head: ["Site", "Validated access", "Workflow adoption", "Exception accuracy", "Accounts per day"],
                rows: [
                  ["Site A", { t: "100%", fb: "Full access, so Site A is a fair comparison point." }, { t: "88%", fb: "Strong adoption, but not the issue here." }, { t: "94%", fb: "Healthy proficiency." }, { t: "52", fb: "Strong productivity, but it only means something if conditions are equivalent." }],
                  ["Site B", { t: "98%", fb: "Near-complete access." }, { t: "81%", fb: "Reasonable adoption." }, { t: "91%", fb: "Healthy proficiency." }, { t: "49", fb: "Close to Site A." }],
                  ["Site C", { t: "71%", target: true, fb: "Nearly a third of Site C can't access the new workflow. Comparing their productivity against sites with full access isn't fair or meaningful. Fix the access defect first, and annotate the comparison until conditions are equivalent." }, { t: "62%", fb: "Low adoption, but why? Look upstream: people can't adopt a workflow they can't open." }, { t: "90%", fb: "Those who can use it are accurate, so this isn't a capability problem." }, { t: "38", fb: "This is the number your peer is reacting to. The question is whether the comparison is fair." }]
                ] },
              sup: { kind: "table", heading: "Week 6 service scorecard", head: ["Team", "Routed to the right queue", "Portal adoption", "Satisfaction", "Days to resolve"],
                rows: [
                  ["IT service desk", { t: "96%", fb: "Requests arrive in the right place, so IT is a fair comparison point." }, { t: "91%", fb: "Strong adoption, but not the issue here." }, { t: "4.3", fb: "Healthy satisfaction." }, { t: "1.2", fb: "Fast, but it only means something if conditions are equivalent." }],
                  ["WFM", { t: "93%", fb: "Most requests arrive in the right place." }, { t: "85%", fb: "Reasonable adoption." }, { t: "4.1", fb: "Healthy satisfaction." }, { t: "1.6", fb: "Close to IT." }],
                  ["People Services", { t: "58%", target: true, fb: "42% of People Services requests land in the wrong queue and must be manually re-routed before work can start. That's a category-mapping defect, not a performance problem. Fix the routing, and annotate resolution time until conditions are equivalent." }, { t: "79%", fb: "Lower adoption, but why? Look upstream: misrouted requests make the portal feel broken." }, { t: "3.6", fb: "Lower satisfaction is a symptom. The question is what's causing it." }, { t: "3.9", fb: "This is the number your peer is reacting to. The question is whether the comparison is fair." }]
                ] }
            }),
            key: [
              V({ ops: "Breaking data down by site, shift, role, or access reveals what overall averages hide.", sup: "Breaking data down by team, request type, or routing reveals what overall averages hide." }),
              "Don't compare performance until conditions are equivalent. Otherwise you penalize people for barriers the organization hasn't removed.",
              V({ ops: "Every metric needs an owner and a response threshold. Here the right response to 71% access is to escalate the access defect, not to manage performance.", sup: "Every metric needs an owner and a response threshold. Here the right response to 58% correct routing is to fix the category mapping, not to manage performance." })
            ] }
        ]
      },
      {
        title: "Scorecard design rules",
        blocks: [
          { type: "list", items: [
            "Set a baseline before launch whenever possible.",
            V({ ops: "Break data down by site, shift, role, tenure, or access to detect uneven adoption.", sup: "Break data down by team, request type, requesting department, or shift to detect uneven adoption." }),
            "Use both leading and lagging indicators.",
            V({ ops: "Pair productivity with quality and compliance guardrails.", sup: "Pair speed and SLA results with accuracy, access-control, and privacy guardrails." }),
            "Give every metric a named owner and a response threshold.",
            "Define what decision you'll make if a metric moves outside tolerance. If there's no decision, reconsider the metric.",
            "Don't confuse positive survey results with correct behavior or business value."
          ] },
          { type: "quiz", id: "mg6-q", questions: [
            { q: "Why break adoption data down rather than look at the overall average?",
              options: ["To find individuals to discipline.", "Averages can hide unequal access, local barriers, shift differences, or capability gaps.", "More charts look more thorough.", "To rank teams."],
              answer: 1, explain: "Averages hide the uneven conditions that explain most adoption gaps." },
            { q: "A metric has no defined response if it moves outside tolerance. What should you do?",
              options: ["Keep it; more data is always better.", "Define the decision it should trigger, or reconsider tracking it.", "Report it monthly anyway.", "Hide it."],
              answer: 1, explain: "A metric that triggers no decision adds noise. Every metric needs an owner and a response threshold." }
          ] }
        ]
      }
    ]
  },

  {
    id: "mg7", part: "path", track: "mgr", minutes: 9,
    title: "Resistance, risk, and escalation",
    summary: "Work through an escalation scenario with one of your Team Leaders: protect speaking up, contain real risk, and apply accountability only when it's fair.",
    screens: [
      {
        title: "Principles for managing resistance",
        blocks: [
          { type: "list", items: [
            "Don't personalize resistance. Diagnose the system, history, identity, workload, capability, trust, and fairness factors.",
            "Don't reward bypass behavior just because the concern is valid. Keep the approved process while escalating legitimate risk.",
            "Protect speaking up. Retaliation or public humiliation suppresses the evidence leaders need.",
            "Close the feedback loop. Silence after concerns are raised teaches disengagement.",
            "Use progressive accountability only after expectations, enablement, and evidence are clear.",
            "Document decisions and guidance changes so every team gets the same source of truth."
          ] },
          { type: "callout", tone: "rcm", title: V({ ops: "RCM safeguard", sup: "Support function safeguard" }), html: V({
            ops: "Managers shouldn't make independent coding, billing, payer-contract, compliance, privacy, or system-security interpretations beyond their authority. Route questions to the accountable function and communicate verified guidance.",
            sup: "Managers shouldn't make independent security, privacy, employment-law, payroll, or audit interpretations beyond their authority. Route questions to the accountable function and communicate verified guidance." }) }
        ]
      },
      {
        title: V({ ops: "Scenario: “the routing is broken”", sup: "Scenario: “the approvals are broken”" }),
        blocks: [
          V({
          ops: { type: "sim", id: "mg7-sim", title: "Escalation decision simulation",
            setup: "Jordan catches you after a meeting: “My team says the new routing is broken. They want to go back to the old work list until it's fixed, and three of them already have.”",
            steps: [
              { label: "First question", context: "What do you do first?", options: [
                { text: "Tell Jordan to let them use the old work list. The concern sounds valid.", correct: false, feedback: "That rewards bypass behavior before you know anything. A valid concern doesn't authorize an unapproved workaround." },
                { text: "Ask Jordan whether any of the examples involve immediate compliance, privacy, security, patient, client, or financial risk.", correct: true, feedback: "Start at the top of the escalation tree. Immediate risk decides whether you need formal containment before anything else." },
                { text: "Tell Jordan to issue warnings to the three people using the old list.", correct: false, feedback: "Accountability before diagnosis punishes people who may have spotted a real defect, and teaches the whole team to stay quiet." } ] },
              { label: "Immediate risk", context: "Jordan checks. One example shows an account with a privacy restriction landing in an unrestricted queue.", options: [
                { text: "Contain it and escalate formally through the privacy and compliance route now, with interim guidance to the team.", correct: true, feedback: "Immediate privacy risk goes through formal escalation and containment straight away, with clear interim guidance so people know what to do." },
                { text: "Fix it yourself by changing the queue permissions.", correct: false, feedback: "That's a system-security decision beyond your authority, and it leaves no record. Route it to the accountable function." },
                { text: "Add it to next week's governance agenda.", correct: false, feedback: "Immediate privacy risk can't wait a week. It needs the formal containment route now." } ] },
              { label: "Ambiguity", context: "The privacy issue is contained. The other complaints turn out to be Team Leaders reading the exception rule two ways, and both readings are defensible.", options: [
                { text: "Let each Team Leader use their own reading until someone complains.", correct: false, feedback: "Two readings means inconsistent work across sites and an unfair experience. Ambiguity needs an owner." },
                { text: "Assign the workflow owner to resolve it, publish interim guidance in the single source of truth, and log the decision.", correct: true, feedback: "A design defect or policy ambiguity needs a named owner, interim guidance, and a documented decision so every site gets the same answer." },
                { text: "Tell specialists to use whichever reading feels right.", correct: false, feedback: "That pushes an organizational ambiguity onto individuals and guarantees inconsistent results." } ] },
              { label: "Accountability", context: "A week later, one specialist (trained, observed proficient, with confirmed access, and who has seen the interim guidance) is still using the retired work list.", options: [
                { text: "Have Jordan raise it in the huddle as an example of what not to do.", correct: false, feedback: "Public humiliation suppresses speaking up across the team, and speaking up is what surfaced the privacy issue." },
                { text: "Support Jordan to apply fair accountability under policy, documented privately, while continuing to welcome concerns.", correct: true, feedback: "Expectations, enablement, and evidence are now clear, so accountability is appropriate. Handle it privately and consistently." },
                { text: "Let it go. They raised the original concern, after all.", correct: false, feedback: "Raising a valid concern earlier doesn't exempt someone from a clear expectation now. Inconsistency is a Fairness threat to everyone else." } ] },
              { label: "Close the loop", context: "The routing defect is fixed and the exception rule is clarified. What now?", options: [
                { text: "Fix things quietly; nobody needs to know.", correct: false, feedback: "Silence after people raise concerns teaches them to stop raising concerns." },
                { text: "Join Jordan's huddle: say what was found, what changed, and what stays the same, and thank the people who raised it.", correct: true, feedback: "Closing the loop visibly turns this episode into proof that speaking up works, your best early-warning system." },
                { text: "Send Jordan a short email confirming it's resolved.", correct: false, feedback: "Better than nothing, but the people who raised the concern need to hear the outcome directly." } ] }
            ],
            key: [
              "Work the escalation tree from the top: immediate risk, then design defect or ambiguity, then operational barriers, then disagreement with a valid process, and only then accountability.",
              "The “resistant” team found a real privacy defect. Punishing them at step one would have buried it.",
              "Protecting speaking up and holding accountability aren't opposites. You did both, in the right order.",
              "Stay within your authority. Route coding, billing, privacy, and security interpretations to the accountable function."
            ] },
          sup: { type: "sim", id: "mg7-sim", title: "Escalation decision simulation",
            setup: "Neha catches you after a meeting: “My team says the portal approvals are broken. They want to go back to email for HR requests until it's fixed, and three of them already have.”",
            steps: [
              { label: "First question", context: "What do you do first?", options: [
                { text: "Tell Neha to let them use email. The concern sounds valid.", correct: false, feedback: "That rewards bypass behavior before you know anything, and reopens the side door One Front Door was built to close." },
                { text: "Ask Neha whether any of the examples involve immediate privacy, security, legal, payroll, or financial risk.", correct: true, feedback: "Start at the top of the escalation tree. With HR data, immediate risk decides whether you need formal containment before anything else." },
                { text: "Tell Neha to issue warnings to the three people using email.", correct: false, feedback: "Accountability before diagnosis punishes people who may have spotted a real defect, and teaches the team to stay quiet." } ] },
              { label: "Immediate risk", context: "Neha checks. One example shows salary-change requests visible to every coordinator in the shared queue, not just People Services.", options: [
                { text: "Contain it and escalate formally through the privacy and IT Security route now, with interim guidance to the team.", correct: true, feedback: "Exposed confidential HR data goes through formal escalation and containment straight away, with clear interim guidance." },
                { text: "Fix it yourself by changing the queue visibility settings.", correct: false, feedback: "That's a security configuration decision beyond your authority, and it leaves no record. Route it to the accountable function." },
                { text: "Add it to next week's governance agenda.", correct: false, feedback: "Exposed salary data can't wait a week. It needs the formal containment route now." } ] },
              { label: "Ambiguity", context: "The privacy issue is contained. The other complaints turn out to be Team Leaders reading the contractor-access approval rule two ways, and both readings are defensible.", options: [
                { text: "Let each Team Leader use their own reading until someone complains.", correct: false, feedback: "Two readings means inconsistent access decisions, which is an audit finding waiting to happen. Ambiguity needs an owner." },
                { text: "Assign the policy owner to resolve it, publish interim guidance in the single source of truth, and log the decision.", correct: true, feedback: "A design defect or policy ambiguity needs a named owner, interim guidance, and a documented decision so every team gives the same answer." },
                { text: "Tell coordinators to use whichever reading feels right.", correct: false, feedback: "That pushes an organizational ambiguity onto individuals and guarantees inconsistent access decisions." } ] },
              { label: "Accountability", context: "A week later, one coordinator (trained, observed proficient, with confirmed access, and who has seen the interim guidance) is still handling HR requests by email.", options: [
                { text: "Have Neha raise it at stand-up as an example of what not to do.", correct: false, feedback: "Public humiliation suppresses speaking up, and speaking up is what surfaced the salary-data exposure." },
                { text: "Support Neha to apply fair accountability under policy, documented privately, while continuing to welcome concerns.", correct: true, feedback: "Expectations, enablement, and evidence are now clear, so accountability is appropriate. Handle it privately and consistently." },
                { text: "Let it go. They raised the original concern, after all.", correct: false, feedback: "Raising a valid concern earlier doesn't exempt someone from a clear expectation now. Inconsistency is a Fairness threat to everyone else." } ] },
              { label: "Close the loop", context: "The visibility defect is fixed and the contractor rule is clarified. What now?", options: [
                { text: "Fix things quietly; nobody needs to know.", correct: false, feedback: "Silence after people raise concerns teaches them to stop raising concerns." },
                { text: "Join Neha's stand-up: say what was found, what changed, and what stays the same, and thank the people who raised it.", correct: true, feedback: "Closing the loop visibly turns this episode into proof that speaking up works, your best early-warning system." },
                { text: "Send Neha a short email confirming it's resolved.", correct: false, feedback: "Better than nothing, but the people who raised the concern need to hear the outcome directly." } ] }
            ],
            key: [
              "Work the escalation tree from the top: immediate risk, then design defect or ambiguity, then operational barriers, then disagreement with a valid process, and only then accountability.",
              "The “resistant” team found a real privacy defect. Punishing them at step one would have buried it.",
              "Protecting speaking up and holding accountability aren't opposites. You did both, in the right order.",
              "Stay within your authority. Route security, privacy, and employment-law interpretations to the accountable function."
            ] }
          })
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "mg7-q", questions: [
            { q: "When should a Manager pause or contain part of a change?",
              options: ["Whenever people complain.", V({ ops: "When defined risk thresholds are breached or governance requires review, especially for compliance, privacy, security, patient, client, or material financial risk.", sup: "When defined risk thresholds are breached or governance requires review, especially for security, privacy, legal, payroll, or audit risk." }), "Only when the sponsor agrees.", "Never. Pausing loses momentum."],
              answer: 1, explain: "Containment is triggered by defined risk thresholds and governance, not by the volume of complaints." },
            { q: V({ ops: "Site C lacks the staffing to complete practice. Where does this sit on the escalation tree?", sup: "The night-shift team can't complete portal practice because the sandbox is down after 6pm. Where does this sit on the escalation tree?" }),
              options: ["Immediate risk: use formal containment.", "Design defect: assign an owner.", "Operational barrier: remove it and provide support.", "Accountability: apply policy."],
              answer: 2, explain: "Access, staffing, skill, and workload barriers are operational. Remove them and provide support." }
          ] }
        ]
      }
    ]
  },

  {
    id: "mg8", part: "path", track: "mgr", minutes: 12, capstone: true,
    title: V({ ops: "Capstone: Smart Queue across three sites", sup: "Capstone: One Front Door goes enterprise-wide" }),
    summary: "Make the calls on a three-part transformation, then build your own change charter.",
    screens: [
      {
        title: "The case",
        blocks: [
          { type: "p", html: V({
            ops: "Smart Queue is now one of three connected changes: the new queue logic, AI-assisted account prioritization, and revised quality measures focused on decision accuracy. The VP expects rapid value for the client. Site A reports promising turnaround improvement, but Sites B and C have different payer mix, staffing, experience, and system configurations.",
            sup: "One Front Door is now one of three connected changes: the single service portal, role-based access provisioning, and new SLA tiers reported to the executive team. The COO expects rapid value. The IT pilot reports faster resolution, but People Services and WFM have different request volumes, confidentiality needs, shift patterns, and configurations." }) },
          V({
          ops: { type: "sim", id: "mg8-sim", title: "Make the calls",
            setup: "You lead the Managers across three sites. Six complications land on your desk in the first month.",
            steps: [
              { label: "Site comparison", context: "Several Managers want to compare productivity across sites from next week, “to create healthy urgency.” Access and practice time are still uneven.", options: [
                { text: "Agree. Visible comparison drives urgency.", correct: false, feedback: "Comparing under unequal conditions penalizes people for barriers the organization hasn't removed, and erodes trust in the whole change." },
                { text: "Hold comparisons until access and defined proficiency conditions are met, and pair speed with accuracy, rework, and compliance measures.", correct: true, feedback: "Fair comparison needs equivalent conditions, and speed never stands alone without guardrails." },
                { text: "Compare privately among Managers only.", correct: false, feedback: "Private comparisons still drive decisions and pressure, and they leak. The conditions problem remains." } ] },
              { label: "Mixed answers", context: "Team Leaders are getting different answers from Operations, Quality, and IT.", options: [
                { text: "Have each function publish its own FAQ.", correct: false, feedback: "Three FAQs make the inconsistency official." },
                { text: "Create one verified source of truth with a change log, an exception library, office hours, and a defined response time.", correct: true, feedback: "Enablement depends on consistency. One verified source, plus fast answers, stops the rumor network." },
                { text: "Tell Team Leaders to use their judgment.", correct: false, feedback: "That pushes an organizational alignment problem onto individuals and guarantees inconsistent practice." } ] },
              { label: "Fear about roles", context: "Specialists fear the AI recommendations will replace their judgment, or their jobs.", options: [
                { text: "Reassure everyone: “No one will lose their job.”", correct: false, feedback: "If that hasn't been decided, you're promising an outcome you can't guarantee, and broken promises are hard to recover from." },
                { text: "Avoid the topic until there's more information.", correct: false, feedback: "Silence lets the rumor become the story." },
                { text: "Make clear that people remain accountable for decisions, state what's decided and what's still unknown, and don't promise role outcomes that haven't been decided.", correct: true, feedback: "Clarity over certainty. You address the fear honestly, reinforce human accountability, and don't overpromise." } ] },
              { label: "Compliance review", context: "Compliance asks for extra review of a subset of accounts before they're processed under the new prioritization.", options: [
                { text: "Push back, citing the sponsor's timeline.", correct: false, feedback: "Governance isn't negotiable against a timeline. Speed can't override compliance." },
                { text: "Contain that subset as Compliance directs, give interim instructions, and update the plan.", correct: true, feedback: "Governance is part of the design. Containing the subset protects the change and the organization." },
                { text: "Proceed and review the accounts afterward.", correct: false, feedback: "Reviewing after processing defeats the purpose of the review." } ] },
              { label: "Celebrating the pilot", context: "Site A wants to announce a big win on speed. Rework hasn't stabilized yet.", options: [
                { text: "Announce it now to build momentum.", correct: false, feedback: "A win that hides a guardrail problem destroys credibility when the rework shows up." },
                { text: "Hold until it's verified: faster risk identification with stable or improved accuracy, and no compliance deterioration.", correct: true, feedback: "A credible early win is verified, relevant, linked to the change, and doesn't hide guardrail problems." },
                { text: "Announce it with a footnote about rework.", correct: false, feedback: "People remember the headline, not the footnote. Verify first." } ] },
              { label: "Portfolio collision", context: "Two other major initiatives will hit the same specialists in the same month.", options: [
                { text: "Ask teams to absorb all three; it's only a month.", correct: false, feedback: "“Absorb it” isn't a capacity plan. Overload shows up as errors, workarounds, and fatigue." },
                { text: "Sequence the overlapping launches, cut nonessential meetings and reports, and protect practice and stabilization time.", correct: true, feedback: "You named the collision and made trade-offs, which is what portfolio discipline means." },
                { text: "Run all three and approve overtime.", correct: false, feedback: "Overtime adds capacity briefly but increases fatigue and error risk, and doesn't fix the learning-load collision." } ] }
            ],
            key: [
              "Coalition: the VP, Operations, Quality, Compliance, IT, Training, site leadership, and a specialist voice, with named decision rights.",
              "Story: connect to risk-based prioritization and quality, make human accountability clear, acknowledge site differences, and don't promise undecided role outcomes.",
              "Measures: no site comparison until access and proficiency conditions are met. Pair speed with accuracy, rework, compliance, and people-impact guardrails.",
              "Make it stick: update SOPs, QA rubrics, onboarding, access governance, and performance routines, and retire the legacy work list."
            ] },
          sup: { type: "sim", id: "mg8-sim", title: "Make the calls",
            setup: "You lead Shared Services through the enterprise rollout. Six complications land on your desk in the first month.",
            steps: [
              { label: "SLA league tables", context: "Several Managers want to publish SLA league tables by team from next week, “to create healthy urgency.” Agent access and request categories are still being fixed.", options: [
                { text: "Agree. Visible league tables drive urgency.", correct: false, feedback: "Ranking teams under unequal conditions penalizes people for routing and access defects the organization hasn't fixed." },
                { text: "Hold comparisons until routing and access conditions are equivalent, and pair speed with accuracy, resubmissions, and satisfaction.", correct: true, feedback: "Fair comparison needs equivalent conditions, and speed never stands alone without guardrails." },
                { text: "Share the league tables privately with Managers only.", correct: false, feedback: "Private rankings still drive pressure, and they leak. The conditions problem remains." } ] },
              { label: "Mixed answers", context: "Team Leaders are getting different answers from IT, HR, and the vendor.", options: [
                { text: "Have each group publish its own FAQ.", correct: false, feedback: "Three FAQs make the inconsistency official." },
                { text: "Create one verified source of truth with a change log, a known-issues page, office hours, and a defined response time.", correct: true, feedback: "Enablement depends on consistency. One verified source, plus fast answers, stops the rumor network." },
                { text: "Tell Team Leaders to use their judgment.", correct: false, feedback: "That pushes an organizational alignment problem onto individuals and guarantees inconsistent service." } ] },
              { label: "Fear about roles", context: "Coordinators fear AI triage and self-service will replace their roles.", options: [
                { text: "Reassure everyone: “No one will lose their job.”", correct: false, feedback: "If that hasn't been decided, you're promising an outcome you can't guarantee." },
                { text: "Avoid the topic until there's more information.", correct: false, feedback: "Silence lets the rumor become the story." },
                { text: "Make clear that people remain accountable for decisions, state what's decided and what's still unknown, and don't promise role outcomes that haven't been decided.", correct: true, feedback: "Clarity over certainty. You address the fear honestly, reinforce human accountability, and don't overpromise." } ] },
              { label: "Audit review", context: "Internal Audit asks to review every access approval granted through the portal's urgent path before it's used again.", options: [
                { text: "Push back, citing the COO's timeline.", correct: false, feedback: "Audit requirements aren't negotiable against a timeline. Speed can't override access control." },
                { text: "Suspend the urgent path as Audit directs, give interim instructions for genuine emergencies, and update the plan.", correct: true, feedback: "Governance is part of the design. Containing the urgent path protects the change and the organization." },
                { text: "Keep using it and send Audit a report afterward.", correct: false, feedback: "Continuing while under review defeats the purpose of the review." } ] },
              { label: "Celebrating the pilot", context: "The IT team wants to announce 40% faster resolution. Resubmitted requests haven't stabilized yet.", options: [
                { text: "Announce it now to build momentum.", correct: false, feedback: "A win that hides a guardrail problem destroys credibility, especially with Operations managers who are the ones resubmitting." },
                { text: "Hold until it's verified: faster resolution with stable resubmissions, and no access-control exceptions.", correct: true, feedback: "A credible early win is verified, relevant, linked to the change, and doesn't hide guardrail problems." },
                { text: "Announce it with a footnote about resubmissions.", correct: false, feedback: "People remember the headline, not the footnote. Verify first." } ] },
              { label: "Portfolio collision", context: "A payroll system upgrade and an Operations scheduling change will hit the same coordinators in the same month.", options: [
                { text: "Ask teams to absorb all three; it's only a month.", correct: false, feedback: "“Absorb it” isn't a capacity plan. Overload shows up as errors, workarounds, and fatigue." },
                { text: "Sequence the overlapping launches, cut nonessential meetings and reports, and protect practice and stabilization time.", correct: true, feedback: "You named the collision and made trade-offs, which is what portfolio discipline means." },
                { text: "Run all three and approve overtime.", correct: false, feedback: "Overtime adds capacity briefly but increases fatigue and error risk, and doesn't fix the learning-load collision." } ] }
            ],
            key: [
              "Coalition: the COO, IT, HR, WFM, IT Security, Internal Audit, the vendor, and Operations managers as internal customers, with named decision rights.",
              "Story: connect to fair, visible service for every site, make human accountability clear, acknowledge team differences, and don't promise undecided role outcomes.",
              "Measures: no league tables until routing and access conditions are equivalent. Pair speed with accuracy, resubmissions, satisfaction, and access-control guardrails.",
              "Make it stick: update policies, the service catalog, onboarding, access governance, and SLA reporting, and close the shared inboxes for good."
            ] }
          })
        ]
      },
      {
        title: "Your change charter",
        blocks: [
          { type: "p", html: "This is the tool you take back to work. Use a real change you're accountable for. Fill every field; short, specific answers beat long general ones." },
          { type: "form", id: "mg8-charter", title: "Change charter",
            fields: [
              { id: "case", label: "Strategic case and value at stake" },
              { id: "coal", label: "Sponsor and coalition" },
              { id: "pop", label: V({ ops: "Affected teams, sites, and shifts, and the impact on each", sup: "Affected teams and internal customers, and the impact on each" }) },
              { id: "beh", label: "Future-state behaviors" },
              { id: "nonneg", label: "Non-negotiables and local choices" },
              { id: "rights", label: "Decision rights and escalation" },
              { id: "tl", label: "Team Leader enablement" },
              { id: "cap", label: "Where the capacity comes from, and what legacy work is removed" },
              { id: "stake", label: "Stakeholder engagement" },
              { id: "adopt", label: "Adoption and proficiency measures" },
              { id: "out", label: "Outcomes and guardrails" },
              { id: "wins", label: "Early wins" },
              { id: "sustain", label: "Ownership after the project closes" }
            ],
            saveLabel: "Save my charter" },
          { type: "reflect", id: "mg8-close", prompt: "What's one thing you'll do differently in the next seven days, and what evidence will show progress?" }
        ]
      }
    ]
  });
})();
