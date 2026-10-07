/* PART 1 — FOUNDATION (all profiles, tailored by role and function) */
(function () {
  const V = window.CV;

  window.COURSE.modules.push(
  {
    id: "f1", part: "foundation", track: "all", minutes: 15,
    title: "The human side of change",
    summary: "Meet your scenario, notice your own first reaction, separate the change event from the human transition, and see how your signals shape adoption.",
    screens: [
      {
        title: "Meet your scenario",
        blocks: [
          { type: "p", html: V({
            tl: "Everything in this course is built around one change you'll lead from announcement to adoption, and the people you'll lead through it. You'll meet them again and again.",
            mgr: "Everything in this course is built around one change you're accountable for, and the leaders and stakeholders you'll work through. You'll meet them again and again." }) },
          { type: "briefing" },
          { type: "callout", tone: "", title: "How to use the scenario", html: V({
            tl: "When an activity asks what you'd say or do, answer as the leader of this team. Then, in the reflections, apply it to the real change you're leading now.",
            mgr: "When an activity asks for a decision, make it as the manager accountable for this change. Then, in the reflections, apply it to the real change you're leading now." }) }
        ]
      },
      {
        title: "A message lands",
        blocks: [
          { type: "p", html: V({
            tl: "Imagine this message arrives in your inbox this morning, with no other context. Your team sees it at the same moment you do.",
            mgr: "Imagine this message arrives from the program office this morning, copied to your Team Leaders. Within the hour, they'll be looking to you for what it means." }) },
          { type: "announce", html: V({
            ops: "“Beginning next week, the team will use a revised work queue and updated quality checkpoints. More details will be shared.”",
            sup: "“Beginning next week, all internal requests will go through the new service portal, with updated approval steps. More details will be shared.”" }) },
          { type: "form", id: "f1-thoughts", title: "Your first three thoughts",
            intro: "Write down the first three thoughts that come to mind. Don't edit them; nobody sees these unless you download them.",
            fields: [ { id: "t1", label: "First thought" }, { id: "t2", label: "Second thought" }, { id: "t3", label: "Third thought" } ],
            minFilled: 3, saveLabel: "Save my thoughts" },
          { type: "bucket", id: "f1-sort", title: "Sort the reactions",
            prompt: V({ tl: "Here's how people on teams like yours reacted to the same message. Sort each reaction into the type it is.",
                        mgr: "Here's how managers and Team Leaders like yours reacted to the same message. Sort each reaction into the type it is." }),
            buckets: [ { id: "opp", label: "Opportunity" }, { id: "q", label: "Question" }, { id: "con", label: "Concern" }, { id: "jud", label: "Judgment" } ],
            items: V({
              tl_ops: [
                { id: "a", text: "Maybe this finally fixes the routing mess we deal with every day.", bucket: "opp" },
                { id: "b", text: "Which accounts move to the revised queue?", bucket: "q" },
                { id: "c", text: "Next week is month-end. I'm worried we'll fall behind while we learn it.", bucket: "con" },
                { id: "d", text: "Here we go again. Nobody asked the people who actually work the queue.", bucket: "jud" },
                { id: "e", text: "Will the new checkpoints change how my quality is scored?", bucket: "q" },
                { id: "f", text: "This could be the chance to get the extra checkpoint I've been asking for.", bucket: "opp" },
                { id: "g", text: "I'm worried the newer people will struggle with two changes at once.", bucket: "con" },
                { id: "h", text: "Leadership clearly doesn't understand our work.", bucket: "jud" } ],
              tl_sup: [
                { id: "a", text: "Finally, one place to see every request instead of digging through three inboxes.", bucket: "opp" },
                { id: "b", text: "Which request types need the new approval step?", bucket: "q" },
                { id: "c", text: "Payroll questions peak next week. I'm worried we'll fall behind while we learn the portal.", bucket: "con" },
                { id: "d", text: "Another tool nobody asked for. Ops managers will just keep texting Marcus anyway.", bucket: "jud" },
                { id: "e", text: "Does the SLA clock start when a request is submitted, or when it's approved?", bucket: "q" },
                { id: "f", text: "This could finally show leadership how much work we actually handle.", bucket: "opp" },
                { id: "g", text: "I'm worried Ops leaders will be frustrated if their access requests slow down.", bucket: "con" },
                { id: "h", text: "Whoever designed this has never worked a service desk.", bucket: "jud" } ],
              mgr_ops: [
                { id: "a", text: "If this works, we can stop arguing about which accounts to work first.", bucket: "opp" },
                { id: "b", text: "Do the new checkpoints change how site scorecards are calculated?", bucket: "q" },
                { id: "c", text: "My Team Leaders will get questions before they have answers.", bucket: "con" },
                { id: "d", text: "Corporate launches another initiative at month-end. Typical.", bucket: "jud" },
                { id: "e", text: "Who owns the routing rules if one site's payer mix doesn't fit the logic?", bucket: "q" },
                { id: "f", text: "This could finally fix the site comparison problem we keep having.", bucket: "opp" },
                { id: "g", text: "Night shift always hears about these changes last.", bucket: "con" },
                { id: "h", text: "The design team clearly doesn't understand how our sites actually run.", bucket: "jud" } ],
              mgr_sup: [
                { id: "a", text: "One portal could finally give us real demand data for staffing.", bucket: "opp" },
                { id: "b", text: "Which approval steps are changing, and who signed them off?", bucket: "q" },
                { id: "c", text: "Ops managers will go to the COO the first time an access request is late.", bucket: "con" },
                { id: "d", text: "This is IT's project being dumped on my teams.", bucket: "jud" },
                { id: "e", text: "Will the HR system integration work on day one?", bucket: "q" },
                { id: "f", text: "This could end the ‘just text Marcus’ culture and make service fair for every site.", bucket: "opp" },
                { id: "g", text: "Owen's team will see this as a rerun of the 2022 portal that failed.", bucket: "con" },
                { id: "h", text: "Leadership never thinks about internal service at month-end.", bucket: "jud" } ]
            }),
            key: V({
              tl: [
                "Every one of these reactions is normal. The first thought is human; the next leadership behavior is a choice.",
                "Notice how many reactions come from what the message leaves out. “More details will be shared” creates a vacuum, and people fill vacuums with their past experience.",
                "Judgments are often concerns or questions that haven't been heard yet. Treat them as a signal to clarify, not a stance to argue with."
              ],
              mgr: [
                "Every one of these reactions is normal, including yours. The first thought is human; the next leadership behavior is a choice.",
                "“More details will be shared” creates a vacuum. Your Team Leaders will fill it with their own guesses, and then repeat those guesses to their teams.",
                "Your reaction travels: whatever you show your Team Leaders this morning, several teams will hear by lunchtime."
              ] }) },
          { type: "reflect", id: "f1-r1",
            prompt: "Look back at your own three thoughts. Which came from the change itself, and which came from missing information or a previous experience?" }
        ]
      },
      {
        title: "Event vs. transition",
        blocks: [
          { type: "p", html: "Most change plans are built around the <strong>event</strong>: the go-live date, the system cutover, the new policy. But adoption happens in the <strong>transition</strong>, the uneven human process of letting go, learning, testing, and forming a new routine." },
          { type: "table", head: ["Change event", "Human transition"], rows: [
            [V({ ops: "External: a new workflow, system, metric, client rule, or policy.", sup: "External: a new platform, policy, approval rule, SLA, or structure." }), "Internal: letting go, learning, testing, and forming a new routine."],
            ["Can have a launch date.", "Has uneven speed and may continue long after go-live."],
            ["Managed through plans, tasks, and controls.", "Led through meaning, support, practice, feedback, and reinforcement."]
          ] },
          { type: "bucket", id: "f1-event", title: "Event or transition?",
            prompt: "Sort each statement into the side of change it describes.",
            buckets: [ { id: "ev", label: "Change event" }, { id: "tr", label: "Human transition" } ],
            items: V({
              ops: [
                { id: "a", text: "The new claim-edit rules go live on the 14th.", bucket: "ev" },
                { id: "b", text: "A specialist keeps a sticky note of the old codes “just in case.”", bucket: "tr" },
                { id: "c", text: "IT completes queue access for all affected users.", bucket: "ev" },
                { id: "d", text: "Two weeks after go-live, people still double-check every account the old way.", bucket: "tr" },
                { id: "e", text: "The SOP is updated and published to the shared drive.", bucket: "ev" },
                { id: "f", text: "A tenured specialist feels her payer expertise matters less now.", bucket: "tr" },
                { id: "g", text: "The legacy work list is switched off.", bucket: "ev" },
                { id: "h", text: "The team starts to trust the new queue after a few good weeks.", bucket: "tr" } ],
              sup: [
                { id: "a", text: "The service portal goes live on the 14th.", bucket: "ev" },
                { id: "b", text: "A coordinator keeps a personal spreadsheet of requests “just in case” the portal loses one.", bucket: "tr" },
                { id: "c", text: "Every coordinator receives a portal agent license.", bucket: "ev" },
                { id: "d", text: "Two weeks after go-live, people still answer Ops managers' texts instead of logging requests.", bucket: "tr" },
                { id: "e", text: "The request catalog and approval matrix are published on the intranet.", bucket: "ev" },
                { id: "f", text: "A senior coordinator feels his relationships with Ops managers matter less now.", bucket: "tr" },
                { id: "g", text: "The shared request inbox is switched to an auto-reply.", bucket: "ev" },
                { id: "h", text: "Internal customers start to trust the portal after a few weeks of on-time responses.", bucket: "tr" } ]
            }),
            key: V({
              tl: [
                "A technically complete launch can sit alongside an incomplete adoption. Go-live tells you the event happened, not that the transition has.",
                "Don't label people by a fixed stage of transition. Use what you observe (the sticky note, the side spreadsheet) to decide what support someone needs right now.",
                "Events are managed; transitions are led. Your team needs you for the transition."
              ],
              mgr: [
                "A technically complete launch can sit alongside an incomplete adoption. Your project plan probably tracks the event; someone has to own the transition.",
                "Your Team Leaders see the transition first. Ask them what they're observing, not just whether milestones are green.",
                "Events are managed; transitions are led. Your plan needs both, with named owners."
              ] }) }
        ]
      },
      {
        title: "Your signals travel first",
        blocks: [
          { type: "p", html: V({
            tl: "Before any formal communication goes out, your team is already reading you: your words, your tone, the questions you ask, and what you quietly let slide.",
            mgr: "Before any formal communication goes out, your Team Leaders are already reading you, and they'll pass on what they read. What you show them is what several teams will hear." }) },
          { type: "sequence", id: "f1-chain", title: "Build the leader signal chain",
            prompt: "Put these links in the order they influence each other, starting with what happens inside the leader.",
            items: [
              { id: "a", text: "Leader interpretation", detail: "How you make sense of the change yourself." },
              { id: "b", text: "Leader behavior", detail: "What you say, do, measure, and ignore." },
              { id: "c", text: V({ tl: "Team meaning", mgr: "Team Leader and team meaning" }), detail: V({ tl: "What the team concludes the change really means.", mgr: "What your leaders conclude it means, and then tell their teams." }) },
              { id: "d", text: "Participation", detail: "Whether people engage, test, and raise issues." },
              { id: "e", text: "Adoption and outcomes", detail: "Whether the new way sticks and delivers value." }
            ],
            key: [
              "The chain starts with your own interpretation. If you privately see the change as pointless, it leaks into your behavior, however carefully you word things.",
              "You don't need false enthusiasm. You need constructive ownership: acknowledge impact, separate what's confirmed from what isn't, and name the next step.",
              "What you repeatedly measure and ignore speaks louder than any announcement."
            ] },
          V({
            tl_ops: { type: "sim", id: "f1-sim", title: "First reactions in the huddle",
              setup: "It's the morning huddle, the day after the Smart Queue announcement. You have ten minutes. Your team has questions, and how you respond now sets the tone.",
              steps: [
                { context: "Daniel, your most experienced specialist, sighs:", quote: "“Why are they changing this again? We only just got used to the last version.”",
                  options: [
                    { text: "“Honestly, I don't know why leadership keeps changing things either.”", correct: false, feedback: "This criticizes the initiative. It feels relatable, but it tells the team the change isn't worth taking seriously, and puts you against a decision you'll soon have to implement." },
                    { text: "“It's happening either way, so there's no point worrying about it.”", correct: false, feedback: "This dismisses the concern. Daniel hears that questions aren't welcome, and his frustration goes underground, where it becomes rumor and workarounds." },
                    { text: "“I know this affects how we work, and changing again so soon is frustrating. Let's separate what's confirmed from what we still need clarified.”", correct: true, feedback: "You acknowledged the impact without undermining the initiative, and gave the conversation a structure: confirmed versus still unknown." } ] },
                { context: "Tomás, who picks things up fast, chimes in:", quote: "“It's just a new queue order. This should be easy, right?”",
                  options: [
                    { text: "“Exactly. It's straightforward, so nobody should have trouble.”", correct: false, feedback: "Agreeing that it's easy minimizes the effort. Anyone who struggles, like Mei or Aisha, will now hesitate to say so, and you'll find out through errors." },
                    { text: "“The steps may be simple, but building a new habit under live volume takes practice. We'll review the tricky accounts together.”", correct: true, feedback: "You made it safe to find the work hard, which is how you hear about problems early." },
                    { text: "“We'll see. These things are never as easy as they say.”", correct: false, feedback: "This seeds doubt with no plan attached. It gives the team nothing to do except expect trouble." } ] },
                { context: "Daniel again:", quote: "“So do we just follow it, or is anyone going to listen if it doesn't work?”",
                  options: [
                    { text: "“Just follow it. We have no choice.”", correct: false, feedback: "This holds the line but shuts down the most valuable information you could get: where the new queue may fail in real conditions." },
                    { text: "“If it doesn't work for you, work the accounts however you think best.”", correct: false, feedback: "This invites workarounds and quietly undermines the required process. You've made a promise you have no authority to keep." },
                    { text: "“The expectation is clear: we work the new queue. I also want to know what might stop us doing that accurately. Bring me specific accounts where it breaks.”", correct: true, feedback: "You held the expectation and opened a channel for real operational risk, with a specific ask: accounts, not general complaints." } ] }
              ],
              key: [
                "Three habits shape a team's first read on change: dismissing, criticizing, or clarifying. Only clarifying keeps both the expectation and the conversation open.",
                "Honest doesn't mean doubtful. You can say “I don't know yet” and still own the change: name what's confirmed, what's open, and when you'll know more.",
                "Asking for specific accounts turns frustration into evidence you can act on or escalate to Grace."
              ] },
            tl_sup: { type: "sim", id: "f1-sim", title: "First reactions at stand-up",
              setup: "It's the morning stand-up, the day after the One Front Door announcement. You have ten minutes. Your team has questions, and how you respond now sets the tone.",
              steps: [
                { context: "Marcus, your most senior coordinator, leans back:", quote: "“Why do we need a portal? The Ops managers message me and it gets done. It works.”",
                  options: [
                    { text: "“Honestly, I don't see why either. It'll probably slow everything down.”", correct: false, feedback: "This criticizes the initiative. It feels loyal to Marcus, but it tells the team the portal isn't worth taking seriously, and you'll have to implement it next week." },
                    { text: "“It's happening anyway, so let's not waste time on it.”", correct: false, feedback: "This dismisses the concern. Marcus hears that his eleven years of relationships don't count, and that frustration goes underground." },
                    { text: "“Your relationships with Ops are a real strength, and changing how they reach us is a big shift. Let's separate what's confirmed from what we still need clarified.”", correct: true, feedback: "You recognized what Marcus values without undermining the change, and gave the conversation a structure: confirmed versus still unknown." } ] },
                { context: "Ravi, your fastest coordinator, shrugs:", quote: "“It's just a form. This should be easy, right?”",
                  options: [
                    { text: "“Exactly. Nobody should struggle with a form.”", correct: false, feedback: "This minimizes the effort. Ana, who's still learning the categories, will now hesitate to admit she's stuck." },
                    { text: "“Logging is easy. Changing habits, ours and our internal customers', takes practice. We'll practice the tricky request types together.”", correct: true, feedback: "You named the real challenge: not the form, but changing how people across Operations ask for help." },
                    { text: "“We'll see. Portals never work the first time.”", correct: false, feedback: "This seeds doubt with no plan attached, and it echoes the 2022 portal story people already tell." } ] },
                { context: "Marcus comes back in:", quote: "“So if an Ops manager messages me directly, do I just ignore them?”",
                  options: [
                    { text: "“Yes. Ignore anything that isn't a ticket.”", correct: false, feedback: "This damages relationships with internal customers overnight, and they'll escalate. The portal needs a bridge, not a wall." },
                    { text: "“If it's urgent, just handle it the old way.”", correct: false, feedback: "This invites a permanent side door. Within a month, ‘urgent’ will mean everything from Marcus's regulars." },
                    { text: "“Every request goes through the portal. For now, help them log it, or log it with them. And tell me where the portal makes that hard; bring specific examples.”", correct: true, feedback: "You held the expectation, protected the relationship, and asked for evidence about where the design gets in the way." } ] }
              ],
              key: [
                "Three habits shape a team's first read on change: dismissing, criticizing, or clarifying. Only clarifying keeps both the expectation and the conversation open.",
                "In support functions, your team's habits are tied to your internal customers' habits. Plan to bring both along.",
                "Asking for specific examples turns frustration into evidence you can take to Elena."
              ] },
            mgr_ops: { type: "sim", id: "f1-sim", title: "First reactions in your leadership meeting",
              setup: "It's your weekly Team Leader meeting, the day after the Smart Queue announcement. Your Team Leaders will take their cue from you, then carry it to five teams.",
              steps: [
                { context: "Sam, who leads the night shift, speaks first:", quote: "“Why are we changing this again? My team just got used to the last version, and night shift always finds out last.”",
                  options: [
                    { text: "“I'm with you. Corporate keeps doing this to us.”", correct: false, feedback: "Criticizing the change in front of your Team Leaders licenses them to do the same with their teams. Your cynicism would reach five teams by the end of the shift." },
                    { text: "“It's decided. Let's not spend meeting time on it.”", correct: false, feedback: "This dismisses a fair point. Sam will relay that questions aren't welcome, and night shift's sense of exclusion will deepen." },
                    { text: "“Changing again so soon is a real cost, and night shift hearing last is a fair concern. Let's separate what's confirmed from what's open, and fix how night shift gets updates.”", correct: true, feedback: "You acknowledged the cost, treated the fairness concern as fixable, and gave your leaders a structure they can reuse with their own teams." } ] },
                { context: "Priya, your newest Team Leader, is upbeat:", quote: "“It's just a new queue logic. Our teams should pick it up in a day, right?”",
                  options: [
                    { text: "“Yes. If a team struggles, that's a Team Leader issue.”", correct: false, feedback: "This minimizes the effort and tells your TLs to hide problems. You'll find out about struggles through quality scores instead of conversations." },
                    { text: "“The logic is simple; reliable use under live volume isn't. Plan for a learning dip. I'll protect practice time for the first two weeks.”", correct: true, feedback: "You set realistic expectations and backed them with a resource decision, which is exactly what a manager can do that a TL can't." },
                    { text: "“Honestly, expect chaos.”", correct: false, feedback: "Doom without a plan. Your TLs will brace for failure and pass that on." } ] },
                { context: "Jordan, your most trusted Team Leader, asks:", quote: "“If our teams find problems with the routing, do we push back or just comply?”",
                  options: [
                    { text: "“Just comply. We don't have a choice.”", correct: false, feedback: "This shuts down the early warning signals you need most. Problems will surface later as errors." },
                    { text: "“Use your judgment. If it doesn't fit your site, adapt it locally.”", correct: false, feedback: "Five Team Leaders adapting locally means five versions of the process, and no way to tell a design defect from a local workaround." },
                    { text: "“We implement it as designed, consistently across sites. Bring me specific accounts where it breaks, and I'll take them to the workflow owner with a response time.”", correct: true, feedback: "You held consistency and created a single, owned route for evidence, with a commitment back to your leaders." } ] }
              ],
              key: [
                "Your Team Leaders mirror you. Dismissing, criticizing, or clarifying: whichever you model is what five teams will hear.",
                "Managers can do what Team Leaders can't: protect time, fix information flow for night shift, and own the route for escalations. Use that.",
                "Consistency across sites isn't rigidity. It's what lets you tell a real design defect from a local workaround."
              ] },
            mgr_sup: { type: "sim", id: "f1-sim", title: "First reactions in your leadership sync",
              setup: "It's your weekly sync with your Team Leaders, the day after One Front Door was announced. What you show them now is what three teams, and many Operations managers, will hear.",
              steps: [
                { context: "Owen, who leads Workforce Management, crosses his arms:", quote: "“We tried a portal in 2022 and abandoned it in four months. Why would this be any different?”",
                  options: [
                    { text: "“Honestly, I have my doubts too.”", correct: false, feedback: "Agreeing in front of your Team Leaders licenses the doubt. Owen's 2022 story becomes the official story." },
                    { text: "“That was a different project. Let's move on.”", correct: false, feedback: "This dismisses history people remember vividly. If you won't talk about 2022, your team will, without you." },
                    { text: "“That history matters, and people will remember it. Let's name what went wrong in 2022, what's different now, and what's still unconfirmed.”", correct: true, feedback: "You turned a past failure into a credibility test the new plan has to pass, and gave your leaders a structure to reuse." } ] },
                { context: "Chris, who leads the IT service desk, is relaxed:", quote: "“It's a standard platform. The teams will be fine in a day.”",
                  options: [
                    { text: "“Agreed. If anyone struggles, coach them harder.”", correct: false, feedback: "This minimizes the effort and frames struggle as a performance issue, so people will hide problems." },
                    { text: "“The tool is standard; changing how all of Operations asks for help isn't. Our people and our internal customers need practice. Plan for a dip at month-end.”", correct: true, feedback: "You reframed the change around behavior, both your team's and your internal customers', which is where adoption really happens." },
                    { text: "“Brace yourselves. It'll be messy.”", correct: false, feedback: "Doom without a plan. Your TLs will brace for failure and pass that on." } ] },
                { context: "Neha, who leads People Services, asks:", quote: "“If an Ops manager escalates because a request is slower, do we make an exception for them?”",
                  options: [
                    { text: "“Yes. Keep the Ops managers happy whatever it takes.”", correct: false, feedback: "Exceptions for whoever escalates loudest recreate the ‘text Marcus’ culture, and make service unfair for everyone else." },
                    { text: "“No exceptions, ever. They'll adapt.”", correct: false, feedback: "This ignores genuinely urgent cases, like a new hire who can't log in on day one, and invites a COO escalation." },
                    { text: "“The portal is the route for everyone. Truly urgent cases use the defined urgent path, and I want every case logged so we can fix the design.”", correct: true, feedback: "You held fairness, allowed for real urgency through a defined route, and turned escalations into design evidence." } ] }
              ],
              key: [
                "Your Team Leaders mirror you, and in Shared Services, so do your internal customers' expectations. What you model becomes the service standard.",
                "Old failures don't go away by not mentioning them. Name the history, then show what's different.",
                "A defined urgent path protects fairness better than either ‘no exceptions’ or ‘anything for the loudest.’"
              ] }
          })
        ]
      },
      {
        title: "Watch: the human side of change",
        blocks: [
          { type: "video", id: "v1", videoKey: "VIDEO_1" },
          { type: "callout", tone: "rcm", title: V({ ops: "In revenue cycle work", sup: "In support functions" }), html: V({
            ops: "A revised claim edit, denial work queue, coding guideline, payer rule, or productivity measure can look purely technical. Adoption still depends on individual understanding, confidence, access, and reinforcement.",
            sup: "A new approval matrix, request category, access policy, or SLA can look purely administrative. Adoption still depends on whether your people, and your internal customers, understand it, can use it, and see it reinforced." }) }
        ]
      },
      {
        title: "Your toolkit",
        blocks: [
          { type: "p", html: "This course draws on eight well-established frameworks. Treat them as practical lenses for better diagnosis and action, not universal laws to memorize. Flip each card to see what it's good for, and where it can mislead you." },
          { type: "flip", id: "f1-frameworks", title: "Eight lenses for leading change",
            cards: [
              { front: "ADKAR", sub: "Prosci", back: "<strong>Use it to</strong> diagnose individual adoption barriers: Awareness, Desire, Knowledge, Ability, Reinforcement.<br><br><strong>Watch out:</strong> communication or training isn't the answer to every barrier." },
              { front: "SCARF", sub: "David Rock", back: "<strong>Use it to</strong> anticipate social threat around Status, Certainty, Autonomy, Relatedness, and Fairness.<br><br><strong>Watch out:</strong> it's a conversation lens, not a clinical diagnosis." },
              { front: "Kotter's 8 steps", sub: "Kotter", back: "<strong>Use it to</strong> structure organization-level momentum: coalition, vision, barriers, wins, and making change stick.<br><br><strong>Watch out:</strong> large changes rarely unfold in a perfectly linear sequence." },
              { front: "Transition curve", sub: "Human response", back: "<strong>Use it to</strong> normalize varied human responses and choose the right support.<br><br><strong>Watch out:</strong> don't label people or force everyone through identical stages." },
              { front: "Growth mindset", sub: "Learning orientation", back: "<strong>Use it to</strong> shift from proving competence to learning, experimenting, and improving.<br><br><strong>Watch out:</strong> never use it to dismiss legitimate operational constraints." },
              { front: "Lean PDSA", sub: "Plan, Do, Study, Act", back: V({ ops: "<strong>Use it to</strong> test improvements on a manageable scale and learn from evidence.<br><br><strong>Watch out:</strong> never bypass compliance, security, client, or payer requirements.", sup: "<strong>Use it to</strong> test improvements on a manageable scale and learn from evidence.<br><br><strong>Watch out:</strong> never bypass security, privacy, policy, or audit requirements." }) },
              { front: "GROW coaching", sub: "Goal, Reality, Options, Will", back: "<strong>Use it to</strong> turn resistance conversations into ownership and next steps.<br><br><strong>Watch out:</strong> coaching doesn't replace clear performance expectations." },
              { front: "Stakeholder mapping", sub: "Influence, impact, support", back: "<strong>Use it to</strong> prioritize engagement by influence, impact, and current support.<br><br><strong>Watch out:</strong> positions and influence shift, so revisit the map." }
            ],
            key: V({
              tl: [
                "You'll use ADKAR and SCARF most: ADKAR tells you where one person is stuck; SCARF tells you what feels threatening to them.",
                "Every lens has a misuse. The caution on each card matters as much as the use.",
                "A framework label without an action is not an answer. The goal is a better next conversation."
              ],
              mgr: [
                "You'll lean on Kotter and stakeholder mapping for the system, and ADKAR and SCARF to coach your Team Leaders on individuals.",
                "Every lens has a misuse. The caution on each card matters as much as the use.",
                "A framework label without a management action is not an answer. The goal is a better decision."
              ] }) }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "f1-q", questions: V({
            ops: [
              { q: "Smart Queue went live on schedule and everyone completed training. Three weeks later, many people still work accounts from a personal list. What best describes the situation?",
                options: ["The change failed and should be reversed.", "The change event is complete, but the human transition is not.", "The team is resistant and needs firmer accountability.", "Training was poor and should be repeated."],
                answer: 1, explain: "Go-live and training show the event happened. Adoption depends on the transition, which often continues well after launch. Find what's making the old way easier before choosing a response." },
              { q: "Which response best shows constructive ownership when you don't yet know the answer?",
                options: ["“I have no idea. Nobody tells us anything.”", "“Don't worry, it'll all work out.”", "“That isn't confirmed yet. The decision owner is Quality, and I'll update you by Thursday.”", "“Let's not get distracted by details.”"],
                answer: 2, explain: "Clarity over certainty: you don't need every answer, but distinguish what's known from unknown, name the owner, and commit to an update." },
              { q: "Why does the course treat ADKAR and SCARF as “lenses”?",
                options: ["Because they're unproven.", "Because they help diagnose situations and choose actions, not because they're universal laws.", "Because you only need the acronyms.", "Because each one replaces the others."],
                answer: 1, explain: "Frameworks support better diagnosis and action. Labels without an operational action add little." } ],
            sup: [
              { q: "The portal went live on schedule and everyone completed training. Three weeks later, coordinators still handle many requests by chat. What best describes the situation?",
                options: ["The change failed and should be reversed.", "The change event is complete, but the human transition is not.", "The team is resistant and needs firmer accountability.", "Training was poor and should be repeated."],
                answer: 1, explain: "Go-live and training show the event happened. Adoption depends on the transition, for your team and your internal customers. Find what's making the old way easier before choosing a response." },
              { q: "Which response best shows constructive ownership when you don't yet know the answer?",
                options: ["“I have no idea. Nobody tells us anything.”", "“Don't worry, it'll all work out.”", "“That isn't confirmed yet. The decision owner is IT Security, and I'll update you by Thursday.”", "“Let's not get distracted by details.”"],
                answer: 2, explain: "Clarity over certainty: you don't need every answer, but distinguish what's known from unknown, name the owner, and commit to an update." },
              { q: "Why does the course treat ADKAR and SCARF as “lenses”?",
                options: ["Because they're unproven.", "Because they help diagnose situations and choose actions, not because they're universal laws.", "Because you only need the acronyms.", "Because each one replaces the others."],
                answer: 1, explain: "Frameworks support better diagnosis and action. Labels without a practical action add little." } ]
          }) }
        ]
      }
    ]
  },

  {
    id: "f2", part: "foundation", track: "all", minutes: 12,
    title: "Resistance is data",
    summary: "Treat pushback as information. Tell the four types of pushback apart, and use language that keeps both the standard and the conversation open.",
    screens: [
      {
        title: "Four types of pushback",
        blocks: [
          { type: "p", html: V({
            tl: "“Resistance” is often used as a verdict on a person. In this course, it's a signal to investigate. Pushback can reveal risk, workload, trust, capability, or design problems that the people who planned the change couldn't see.",
            mgr: "“Resistance” is often used as a verdict on a person, and it reaches you secondhand, filtered through your Team Leaders. In this course, it's a signal to investigate. Pushback can reveal design problems nobody planning the change could see." }) },
          { type: "table", head: ["Type", "What may be happening", "Appropriate response"], rows: [
            ["Information gap", "The person has an incomplete or inaccurate picture.", "Clarify and verify understanding."],
            ["Design feedback", V({ ops: "The person has spotted a real workflow, client, quality, or compliance risk.", sup: "The person has spotted a real workflow, internal customer, security, or policy risk." }), "Capture evidence, escalate to the correct owner, and close the feedback loop."],
            ["Capability gap", "The person supports the change but lacks skill, practice, access, or time.", "Train, practice, observe, coach, and remove barriers."],
            ["Accountability issue", "Expectations and support are clear, ability is demonstrated, but the person chooses not to follow the required process.", "Use fair performance management and document according to policy."]
          ] },
          { type: "bucket", id: "f2-types", title: "Which type of pushback is it?",
            prompt: V({ tl: "Sort each statement from your team into the type of pushback it most likely represents.",
                        mgr: "Your Team Leaders bring you these statements from their teams. Sort each into the type of pushback it most likely represents." }),
            buckets: [ { id: "info", label: "Information gap" }, { id: "design", label: "Design feedback" }, { id: "cap", label: "Capability gap" }, { id: "acc", label: "Accountability issue" } ],
            items: V({
              ops: [
                { id: "a", text: "“I heard we'll be scored on speed only from now on.” (Quality stays on the scorecard.)", bucket: "info" },
                { id: "b", text: "“Someone said the old work list is staying, so why learn the new queue?” (It's retired next month.)", bucket: "info" },
                { id: "c", text: "“The new logic sends secondary-payer denials to a queue nobody monitors. Three accounts sat there a week.”", bucket: "design" },
                { id: "d", text: "“This checkpoint conflicts with the client's documented escalation requirement.”", bucket: "design" },
                { id: "e", text: "“I'm on board, but I still don't have access to the new queue.”", bucket: "cap" },
                { id: "f", text: "“I know the steps. I just can't do them fast enough with live volume yet.”", bucket: "cap" },
                { id: "g", text: "Trained, observed doing it correctly, reason explained twice: “I'm sticking with my own list.”", bucket: "acc" },
                { id: "h", text: "Has access, practice time, and passed the checks, yet keeps working accounts the retired way after a clear conversation.", bucket: "acc" } ],
              sup: [
                { id: "a", text: "“I heard we can't help anyone by phone anymore.” (Phone support stays for system outages.)", bucket: "info" },
                { id: "b", text: "“Someone said HR requests aren't moving to the portal until next year.” (They move in week two.)", bucket: "info" },
                { id: "c", text: "“The approval step sends night-shift access requests to day managers. Three new hires couldn't log in on their first shift.”", bucket: "design" },
                { id: "d", text: "“The ‘urgent’ category lets anyone skip the approval our access-control policy requires.”", bucket: "design" },
                { id: "e", text: "“I'm fine with the portal, but my login still doesn't have the agent role.”", bucket: "cap" },
                { id: "f", text: "“I know the categories. I just can't triage fast enough when twenty requests land at once.”", bucket: "cap" },
                { id: "g", text: "Trained, observed using the portal correctly, reason explained twice: “I'll keep handling my regulars by email.”", bucket: "acc" },
                { id: "h", text: "Has the right access, practice time, and passed the checks, yet keeps closing requests outside the portal after a clear conversation.", bucket: "acc" } ]
            }),
            key: [
              "Same word, different problems. Treating a design defect as an attitude problem means you blame people for the system's flaws, and the defect stays.",
              "Accountability comes last, not first. It's appropriate only once expectations, rationale, access, support, and demonstrated ability are all in place.",
              "Design feedback deserves a closed loop: capture the evidence, route it to the owner, and tell the person what happened. Silence teaches people to stop raising risks."
            ] }
        ]
      },
      {
        title: "Watch: resistance is data",
        blocks: [ { type: "video", id: "v2", videoKey: "VIDEO_2" } ]
      },
      {
        title: "Words that keep the door open",
        blocks: [
          { type: "p", html: V({
            tl: "Under pressure, most of us reach for quick phrases that end the conversation. A small change in wording can hold the same standard while keeping trust and information flowing.",
            mgr: "Under pressure, most of us reach for quick phrases that end the conversation, and your Team Leaders will copy the phrases you use. A small change in wording holds the same standard while keeping information flowing." }) },
          { type: "match", id: "f2-phrases", title: "Match the situation to the better phrase",
            prompt: "Select a situation on the left, then the phrase on the right that handles it best. Each phrase fits exactly one situation.",
            left: [
              { id: "s1", text: "You don't know the answer yet" },
              { id: "s2", text: "The concern is valid" },
              { id: "s3", text: "The concern is based on inaccurate information" },
              { id: "s4", text: "The expectation is non-negotiable" },
              { id: "s5", text: "The person needs more practice" },
              { id: "s6", text: "The old way keeps coming back" }
            ],
            right: [
              { id: "r1", text: V({ ops: "“That isn't confirmed yet. The decision owner is Quality, and I'll update you by Friday.”", sup: "“That isn't confirmed yet. The decision owner is IT Security, and I'll update you by Friday.”" }) },
              { id: "r2", text: V({ ops: "“That's a valid risk to investigate. Please log the example in the issue log while we keep following the approved workflow.”", sup: "“That's a valid risk to investigate. Please log the example in the issue tracker while we keep following the approved process.”" }) },
              { id: "r3", text: "“Let's compare what you heard with the confirmed guidance and find where the message became unclear.”" },
              { id: "r4", text: V({ ops: "“The required process is the new queue. Let's address what's preventing correct and consistent use.”", sup: "“The required route is the portal. Let's address what's preventing correct and consistent use.”" }) },
              { id: "r5", text: "“Training introduced the process. Let's observe the task and target the exact point that needs practice.”" },
              { id: "r6", text: "“The old way is still easier or more rewarded. Which system, measure, habit, or barrier is pulling people back?”" }
            ],
            pairs: { s1: "r1", s2: "r2", s3: "r3", s4: "r4", s5: "r5", s6: "r6" },
            key: [
              "Each better phrase replaces a reflex: “I have no idea,” “You're right, this won't work,” “That's wrong,” “Just do it,” “You already had training,” “People hate change.”",
              "Agreeing a concern is valid doesn't mean agreeing to a workaround. You can validate the risk and keep the approved process.",
              "“People hate change” blames individuals. Asking what's pulling people back points you at the system, which is usually where the fix is."
            ] }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "f2-q", questions: [
            { q: V({ ops: "A specialist says, “I support Smart Queue, but I can't get into the new queue yet.” What type of pushback is this?", sup: "A coordinator says, “I support the portal, but my login still doesn't have the agent role.” What type of pushback is this?" }),
              options: ["Information gap", "Design feedback", "Capability gap", "Accountability issue"],
              answer: 2, explain: "The person supports the change but lacks access: a capability barrier. Remove it before measuring or comparing their performance." },
            { q: V({ ops: "Someone raises a valid risk and asks to keep using the old work list until it's fixed. What's the best response?", sup: "Someone raises a valid risk and asks to keep handling requests by email until it's fixed. What's the best response?" }),
              options: ["Agree. The concern is valid, so the workaround is justified.", "Refuse, and tell them to stop raising problems.", "Keep following the approved process while escalating the risk with evidence to the right owner, then close the loop.", "Let them decide for themselves."],
              answer: 2, explain: "Don't reward bypass behavior just because the concern is valid. Escalate the legitimate risk while the approved process stays in place." },
            { q: "When is an accountability response appropriate?",
              options: ["As soon as someone pushes back in public.", "When expectations and rationale are clear, access and support are available, ability has been demonstrated, and the required behavior still isn't followed.", "Whenever performance drops after a change.", "When someone asks too many questions."],
              answer: 1, explain: "Accountability comes after enablement and evidence. Used earlier, it punishes people for gaps the organization hasn't closed." }
          ] }
        ]
      }
    ]
  });
})();
