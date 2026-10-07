/* =========================================================================
   COURSE CONTENT — Managing Change: From Resistance to Readiness
   Source: Managing Change Facilitator Guide (slide-ready), restructured for
   self-paced learning. Block types are rendered by app.js.
   ========================================================================= */
window.COURSE = {
  title: "Managing Change",
  subtitle: "From Resistance to Readiness",
  kicker: "Team Leaders and Managers",
  minutes: 90,

  tracks: {
    tl: {
      name: "Team Leader",
      label: "I lead a team day to day",
      promise: "You'll leave with a repeatable method to translate change, diagnose resistance, coach individuals, and reinforce new behaviors without overpromising or becoming defensive.",
      minutes: 50
    },
    mgr: {
      name: "Manager",
      label: "I lead Team Leaders or a function",
      promise: "You'll leave with a practical architecture for aligning leaders, shaping the conditions for adoption, managing a portfolio of changes, removing barriers, and sustaining results across teams and locations.",
      minutes: 55
    }
  },

  modules: [
  /* =====================================================================
     PART 1 — FOUNDATION (both paths)
     ===================================================================== */
  {
    id: "f1", part: "foundation", track: "all", minutes: 15,
    title: "The human side of change",
    summary: "Notice your own first reaction, separate the change event from the human transition, and see how your signals shape adoption.",
    screens: [
      {
        title: "A message lands",
        blocks: [
          { type: "p", html: "Imagine this message arrives in your inbox this morning, with no other context." },
          { type: "announce", html: "“Beginning next week, the team will use a revised work queue and updated quality checkpoints. More details will be shared.”" },
          { type: "form", id: "f1-thoughts", title: "Your first three thoughts",
            intro: "Write down the first three thoughts that come to mind. Don't edit them; nobody else will see these unless you choose to download them.",
            fields: [
              { id: "t1", label: "First thought" },
              { id: "t2", label: "Second thought" },
              { id: "t3", label: "Third thought" }
            ],
            minFilled: 3, saveLabel: "Save my thoughts" },
          { type: "bucket", id: "f1-sort", title: "Sort the reactions",
            prompt: "Here's how other leaders reacted to the same message. Sort each reaction into the type it is.",
            buckets: [
              { id: "opp", label: "Opportunity" },
              { id: "q", label: "Question" },
              { id: "con", label: "Concern" },
              { id: "jud", label: "Judgment" }
            ],
            items: [
              { id: "a", text: "Maybe this finally fixes the routing mess we deal with every day.", bucket: "opp" },
              { id: "b", text: "Which accounts move to the revised queue?", bucket: "q" },
              { id: "c", text: "Next week is month-end. I'm worried we'll fall behind while we learn it.", bucket: "con" },
              { id: "d", text: "Here we go again. Nobody asked the people who actually do the work.", bucket: "jud" },
              { id: "e", text: "Will the new checkpoints change how my team's quality is scored?", bucket: "q" },
              { id: "f", text: "This could be the chance to get the extra checkpoint I've been asking for.", bucket: "opp" },
              { id: "g", text: "I'm worried my newer people will struggle with two changes at once.", bucket: "con" },
              { id: "h", text: "Leadership clearly doesn't understand our work.", bucket: "jud" }
            ],
            key: [
              "Every one of these reactions is normal. The first thought is human; the next leadership behavior is a choice.",
              "Notice how many reactions come from what the message leaves out. “More details will be shared” creates a vacuum, and people fill vacuums with their past experience.",
              "Judgments are often concerns or questions that haven't been heard yet. Treat them as a signal to clarify, not a stance to argue with."
            ] },
          { type: "reflect", id: "f1-r1",
            prompt: "Look back at your own three thoughts. Which came from the change itself, and which came from missing information or a previous experience?" }
        ]
      },
      {
        title: "Event vs. transition",
        blocks: [
          { type: "p", html: "Most change plans are built around the <strong>event</strong>: the go-live date, the system cutover, the new policy. But adoption happens in the <strong>transition</strong>, the uneven human process of letting go, learning, testing, and forming a new routine." },
          { type: "table", head: ["Change event", "Human transition"], rows: [
            ["External: a new system, workflow, metric, structure, client, or policy.", "Internal: letting go, learning, testing, and forming a new routine."],
            ["Can have a launch date.", "Has uneven speed and may continue long after go-live."],
            ["Managed through plans, tasks, and controls.", "Led through meaning, support, practice, feedback, and reinforcement."]
          ] },
          { type: "bucket", id: "f1-event", title: "Event or transition?",
            prompt: "Sort each statement into the side of change it describes.",
            buckets: [ { id: "ev", label: "Change event" }, { id: "tr", label: "Human transition" } ],
            items: [
              { id: "a", text: "The new claim-edit rules go live on the 14th.", bucket: "ev" },
              { id: "b", text: "A specialist keeps a sticky note of the old codes “just in case.”", bucket: "tr" },
              { id: "c", text: "IT completes access provisioning for all affected users.", bucket: "ev" },
              { id: "d", text: "Two weeks after go-live, people still double-check every account the old way.", bucket: "tr" },
              { id: "e", text: "The SOP is updated and published to the shared drive.", bucket: "ev" },
              { id: "f", text: "A tenured employee feels her expertise matters less now.", bucket: "tr" },
              { id: "g", text: "The legacy report is switched off.", bucket: "ev" },
              { id: "h", text: "The team starts to trust the new queue after a few good weeks.", bucket: "tr" }
            ],
            key: [
              "A technically complete launch can sit alongside an incomplete adoption. Training completion and go-live tell you the event happened, not that the transition has.",
              "Don't label people by a fixed stage of transition. Use observed behavior (the sticky note, the double-checking) to decide what support is needed right now.",
              "Events are managed; transitions are led. Your plan needs both."
            ] }
        ]
      },
      {
        title: "Your signals travel first",
        blocks: [
          { type: "p", html: "Before any formal communication goes out, your team is already reading you: your words, your tone, the questions you ask, and what you quietly let slide. That reading shapes what happens next." },
          { type: "sequence", id: "f1-chain", title: "Build the leader signal chain",
            prompt: "Put these links in the order they influence each other, starting with what happens inside the leader.",
            items: [
              { id: "a", text: "Leader interpretation", detail: "How you make sense of the change yourself." },
              { id: "b", text: "Leader behavior", detail: "What you say, do, measure, and ignore." },
              { id: "c", text: "Team meaning", detail: "What the team concludes the change really means." },
              { id: "d", text: "Participation", detail: "Whether people engage, test, and raise issues." },
              { id: "e", text: "Adoption and outcomes", detail: "Whether the new way sticks and delivers value." }
            ],
            key: [
              "The chain starts with your own interpretation. If you privately see the change as pointless, it leaks into your behavior, however carefully you word things.",
              "You don't need false enthusiasm. You need constructive ownership: acknowledge impact, separate confirmed from unconfirmed, and name the next step.",
              "What you repeatedly measure and ignore speaks louder than any announcement."
            ] },
          { type: "sim", id: "f1-sim", title: "First reactions in the huddle",
            setup: "It's the morning huddle, the day after the announcement. You have about ten minutes. Your team has questions, and how you respond in the next few minutes sets the tone.",
            steps: [
              { context: "Sam, one of your most experienced people, sighs and says:",
                quote: "“Why are they changing this again? We only just got used to the last version.”",
                options: [
                  { text: "“Honestly, I also don't know why leadership keeps changing things.”", correct: false,
                    feedback: "This criticizes the initiative. It feels relatable in the moment, but it tells the team the change isn't worth taking seriously, and it puts you on the opposite side of a decision you'll later need to implement." },
                  { text: "“It's happening either way, so there's no point worrying about it.”", correct: false,
                    feedback: "This dismisses the concern. Sam hears that questions aren't welcome, and the frustration goes underground, where it turns into rumor and workarounds." },
                  { text: "“I know this affects how we work, and it's frustrating to change again so soon. Let's separate what's confirmed from what we still need clarified.”", correct: true,
                    feedback: "You acknowledged the impact without undermining the initiative, and you gave the conversation a structure: confirmed vs. still unknown." }
                ] },
              { context: "Priya, who usually picks things up fast, chimes in:",
                quote: "“It's just a new queue. This should be easy, right?”",
                options: [
                  { text: "“Exactly. It's straightforward, so nobody should have trouble.”", correct: false,
                    feedback: "Agreeing that it's easy minimizes the effort. Anyone who does struggle will now hesitate to say so, and you'll find out about problems later, through errors." },
                  { text: "“The steps may be straightforward, but building a new habit takes practice. We'll review the tricky points together.”", correct: true,
                    feedback: "You avoided minimizing the effort and made it safe to find the work hard, which is how you hear about problems early." },
                  { text: "“We'll see. These things are never as easy as they say.”", correct: false,
                    feedback: "This seeds doubt with no plan attached. It's honest-sounding, but it gives the team nothing to do except expect trouble." }
                ] },
              { context: "Sam comes back in:",
                quote: "“So do we just follow it, or is anyone going to listen if it doesn't work?”",
                options: [
                  { text: "“Just follow it. We have no choice.”", correct: false,
                    feedback: "This holds the line but shuts down the most valuable information you could get: where the new way may fail in real conditions." },
                  { text: "“If it doesn't work for you, use whatever gets the job done.”", correct: false,
                    feedback: "This invites workarounds and quietly undermines the required process. You've made a promise you have no authority to keep." },
                  { text: "“The expectation is clear: we use the new queue. I also want to understand what might stop us meeting it safely and consistently. Bring me specific examples.”", correct: true,
                    feedback: "You held the expectation and opened a channel for real operational risk, with a specific ask: examples, not general complaints." }
                ] }
            ],
            key: [
              "Three habits shape a team's first read on change: dismissing, criticizing, or clarifying. Only clarifying keeps both the expectation and the conversation open.",
              "Honest doesn't mean doubtful. You can say “I don't know yet” and still own the change: name what's confirmed, what's open, and when you'll know more.",
              "Asking for specific examples turns frustration into evidence you can act on or escalate."
            ] }
        ]
      },
      {
        title: "Watch: the human side of change",
        blocks: [
          { type: "video", id: "v1", videoKey: "VIDEO_1" },
          { type: "callout", tone: "rcm", title: "In revenue cycle work",
            html: "A revised claim edit, charge-review route, denial work queue, coding guideline, payer rule, or productivity measure can look purely technical. Adoption still depends on individual understanding, confidence, access, and reinforcement." }
        ]
      },
      {
        title: "Your toolkit",
        blocks: [
          { type: "p", html: "This course draws on eight well-established frameworks. Treat them as practical lenses for better diagnosis and action, not as universal laws to memorize. Flip each card to see what it's good for and where it can mislead you." },
          { type: "flip", id: "f1-frameworks", title: "Eight lenses for leading change",
            cards: [
              { front: "ADKAR", sub: "Prosci", back: "<strong>Use it to</strong> diagnose individual adoption barriers: Awareness, Desire, Knowledge, Ability, Reinforcement.<br><br><strong>Watch out:</strong> communication or training isn't the answer to every barrier." },
              { front: "SCARF", sub: "David Rock", back: "<strong>Use it to</strong> anticipate social threat around Status, Certainty, Autonomy, Relatedness, and Fairness.<br><br><strong>Watch out:</strong> it's a conversation lens, not a clinical diagnosis." },
              { front: "Kotter's 8 steps", sub: "Kotter", back: "<strong>Use it to</strong> structure organization-level momentum: coalition, vision, barriers, wins, and institutionalization.<br><br><strong>Watch out:</strong> large changes rarely unfold in a perfectly linear sequence. Use it iteratively." },
              { front: "Transition curve", sub: "Human response", back: "<strong>Use it to</strong> normalize varied human responses and choose the right support.<br><br><strong>Watch out:</strong> don't label people or force everyone through identical stages." },
              { front: "Growth mindset", sub: "Learning orientation", back: "<strong>Use it to</strong> shift from proving competence to learning, experimenting, and improving.<br><br><strong>Watch out:</strong> never use it to dismiss legitimate operational constraints." },
              { front: "Lean PDSA", sub: "Plan, Do, Study, Act", back: "<strong>Use it to</strong> test improvements on a manageable scale and learn from evidence.<br><br><strong>Watch out:</strong> never bypass compliance, security, client, or clinical governance." },
              { front: "GROW coaching", sub: "Goal, Reality, Options, Will", back: "<strong>Use it to</strong> turn resistance conversations into ownership and next steps.<br><br><strong>Watch out:</strong> coaching doesn't replace clear performance expectations." },
              { front: "Stakeholder mapping", sub: "Influence, impact, support", back: "<strong>Use it to</strong> prioritize engagement by influence, impact, and current support.<br><br><strong>Watch out:</strong> positions and influence shift, so revisit the map." }
            ],
            key: [
              "Each framework answers a different question. ADKAR asks where one person is stuck; SCARF asks what feels threatening; Kotter asks whether the organization has the conditions for momentum.",
              "Every lens has a misuse. The caution on each card matters as much as the use.",
              "The goal is better diagnosis and action, not framework vocabulary. A framework label without an operational action is not an answer."
            ] }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "f1-q", questions: [
            { q: "A new workflow went live on schedule and everyone completed training. Three weeks later, many people still use a personal workaround. What best describes the situation?",
              options: ["The change failed and should be reversed.", "The change event is complete, but the human transition is not.", "The team is resistant and needs firmer accountability.", "Training was poor quality and should be repeated."],
              answer: 1, explain: "Go-live and training completion show the event happened. Adoption depends on the transition, which often continues well after launch. Look at what's making the old way easier before choosing a response." },
            { q: "Which response best shows constructive ownership when you don't yet know the answer to a team question?",
              options: ["“I have no idea. Nobody tells us anything.”", "“Don't worry, it will all work out.”", "“That isn't confirmed yet. The decision owner is Operations, and I'll update you by Thursday's huddle.”", "“Let's not get distracted by details.”"],
              answer: 2, explain: "Clarity over certainty: you don't need every answer, but you must distinguish what's known from unknown, name the owner, and commit to an update." },
            { q: "Why does the course treat frameworks like ADKAR and SCARF as “lenses”?",
              options: ["Because they're unproven and shouldn't be relied on.", "Because they help diagnose situations and choose actions, not because they are universal laws.", "Because learners only need to memorize the acronyms.", "Because each one replaces the need for the others."],
              answer: 1, explain: "Frameworks support better diagnosis and action. Memorizing labels without connecting them to an operational action adds little." }
          ] }
        ]
      }
    ]
  },

  {
    id: "f2", part: "foundation", track: "all", minutes: 12,
    title: "Resistance is data",
    summary: "Treat pushback as information. Tell the four types of pushback apart and use language that keeps both the standard and the conversation open.",
    screens: [
      {
        title: "Four types of pushback",
        blocks: [
          { type: "p", html: "“Resistance” is often used as a verdict on a person. In this course, it's a signal to investigate. Pushback can reveal risk, workload, trust, capability, or design issues that the people who planned the change couldn't see." },
          { type: "table", head: ["Type", "What may be happening", "Appropriate response"], rows: [
            ["Information gap", "The person has an incomplete or inaccurate picture.", "Clarify and verify understanding."],
            ["Design feedback", "The person has spotted a real workflow, customer, quality, or compliance risk.", "Capture evidence, escalate to the correct owner, and close the feedback loop."],
            ["Capability gap", "The person supports the change but lacks skill, practice, access, or time.", "Train, practice, observe, coach, and remove barriers."],
            ["Accountability issue", "Expectations and support are clear, ability is demonstrated, but the person chooses not to follow the required process.", "Use fair performance management and document according to policy."]
          ] },
          { type: "bucket", id: "f2-types", title: "Which type of pushback is it?",
            prompt: "Sort each statement into the type of pushback it most likely represents.",
            buckets: [
              { id: "info", label: "Information gap" },
              { id: "design", label: "Design feedback" },
              { id: "cap", label: "Capability gap" },
              { id: "acc", label: "Accountability issue" }
            ],
            items: [
              { id: "a", text: "“I heard we're going to be scored on speed only from now on.” (Quality remains part of the scorecard.)", bucket: "info" },
              { id: "b", text: "“Someone said the old template is staying, so why learn the new one?” (It's being retired next month.)", bucket: "info" },
              { id: "c", text: "“The new route sends secondary-payer denials to a queue nobody monitors. Three accounts sat there for a week.”", bucket: "design" },
              { id: "d", text: "“This checklist step conflicts with the client's documented escalation requirement.”", bucket: "design" },
              { id: "e", text: "“I'm on board, but I still don't have access to the new queue.”", bucket: "cap" },
              { id: "f", text: "“I know the steps. I just can't do them fast enough with live volume yet.”", bucket: "cap" },
              { id: "g", text: "Trained, observed doing it correctly, reason explained twice: “I'm sticking with my own spreadsheet.”", bucket: "acc" },
              { id: "h", text: "Has access, practice time, and passed the checks, yet keeps routing accounts the retired way after a clear conversation.", bucket: "acc" }
            ],
            key: [
              "Same word, different problems. Treating a design defect as an attitude problem means you blame people for the system's flaws, and the defect stays.",
              "Accountability comes last, not first. It's appropriate only once expectations, rationale, access, support, and demonstrated ability are all in place.",
              "Design feedback deserves a closed loop: capture the evidence, route it to the owner, and tell the person what happened. Silence teaches people to stop raising risks."
            ] }
        ]
      },
      {
        title: "Watch: resistance is data",
        blocks: [
          { type: "video", id: "v2", videoKey: "VIDEO_2" }
        ]
      },
      {
        title: "Words that keep the door open",
        blocks: [
          { type: "p", html: "Under pressure, most of us reach for quick phrases that end the conversation. A small change in wording can hold the same standard while keeping trust and information flowing." },
          { type: "match", id: "f2-phrases", title: "Match the situation to the better phrase",
            prompt: "Select a situation on the left, then the phrase on the right that handles it best. Each phrase fits exactly one situation.",
            left: [
              { id: "s1", text: "You don't know the answer yet" },
              { id: "s2", text: "The concern is valid" },
              { id: "s3", text: "The concern is based on inaccurate information" },
              { id: "s4", text: "The expectation is non-negotiable" },
              { id: "s5", text: "The employee needs more practice" },
              { id: "s6", text: "The old way keeps coming back" }
            ],
            right: [
              { id: "r1", text: "“That isn't confirmed yet. The decision owner is Quality, and I'll update you by Friday.”" },
              { id: "r2", text: "“That's a valid risk to investigate. Please share the example through the issue log while we keep following the current approved guidance.”" },
              { id: "r3", text: "“Let's compare what you heard with the confirmed guidance and find where the message became unclear.”" },
              { id: "r4", text: "“The required process is the new route. Let's address what's preventing correct and consistent execution.”" },
              { id: "r5", text: "“Training introduced the process. Let's observe the task and target the exact point that needs practice.”" },
              { id: "r6", text: "“The old behavior is still easier or more reinforced. Which system, measure, habit, or barrier is pulling people back?”" }
            ],
            pairs: { s1: "r1", s2: "r2", s3: "r3", s4: "r4", s5: "r5", s6: "r6" },
            key: [
              "Each better phrase replaces a reflex: “I have no idea,” “You're right, this won't work,” “That's wrong,” “Just do it,” “You already attended training,” “People hate change.”",
              "Notice that agreeing a concern is valid doesn't mean agreeing to a workaround. You can validate the risk and keep the approved process.",
              "“People hate change” blames individuals. Asking what's pulling people back points you at the system, which is usually where the fix is."
            ] }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "f2-q", questions: [
            { q: "An employee says, “I support the new process, but I can't get into the system yet.” What type of pushback is this?",
              options: ["Information gap", "Design feedback", "Capability gap", "Accountability issue"],
              answer: 2, explain: "The person supports the change but lacks access, which is a capability barrier. Remove it before measuring or comparing their performance." },
            { q: "An employee raises a valid risk and asks to use the old method until it's fixed. What's the best response?",
              options: ["Agree. The concern is valid, so the workaround is justified.", "Refuse and tell them to stop raising problems.", "Keep following the approved process while escalating the risk with evidence to the right owner, then close the loop.", "Let them decide for themselves."],
              answer: 2, explain: "Don't reward bypass behavior just because the concern is valid. Escalate the legitimate risk while the approved process remains in place." },
            { q: "When is an accountability response appropriate?",
              options: ["As soon as someone pushes back in public.", "When expectations and rationale are clear, access and support are available, ability has been demonstrated, and the required behavior still isn't followed.", "Whenever productivity drops after a change.", "When someone asks too many questions."],
              answer: 1, explain: "Accountability comes after enablement and evidence. Used earlier, it punishes people for gaps the organization hasn't closed." }
          ] }
        ]
      }
    ]
  },

  /* =====================================================================
     PART 2 — TEAM LEADER PATH
     ===================================================================== */
  {
    id: "tl1", part: "path", track: "tl", minutes: 9,
    title: "Translate change into meaning",
    summary: "Answer the four questions every team asks and build a 60-second change story that's clear, credible, and honest about unknowns.",
    screens: [
      {
        title: "The four questions every team asks",
        blocks: [
          { type: "p", html: "Whatever the change, people usually need four answers: <strong>why</strong>, <strong>what</strong>, <strong>what it means for me</strong>, and <strong>what happens next</strong>. A complete message acknowledges both the benefit and the effort, and it separates what's decided, what's open for input, and what's still unknown." },
          { type: "match", id: "tl1-four", title: "Match each question to a strong answer",
            prompt: "Select a question, then the leader wording that answers it.",
            left: [
              { id: "why", text: "Why?" },
              { id: "what", text: "What?" },
              { id: "me", text: "What does it mean for me?" },
              { id: "next", text: "What happens next?" }
            ],
            right: [
              { id: "a", text: "“This change addresses repeated rework and inconsistent routing that delay resolution.”" },
              { id: "b", text: "“The activity code and escalation route change. Documentation standards stay the same.”" },
              { id: "c", text: "“There may be a temporary learning dip. Practice time and SME support are available.”" },
              { id: "d", text: "“We'll practice today, use the job aid, and review errors and questions in daily huddles.”" }
            ],
            pairs: { why: "a", what: "b", me: "c", next: "d" },
            key: [
              "“What?” is strongest when it also names what isn't changing. Stability is reassuring and cuts down rumor.",
              "“What does it mean for me?” is the question leaders most often skip. Acknowledging a learning dip is credible; promising none is not.",
              "“What happens next?” turns a message into a plan: practice, tools, and a routine for questions."
            ] }
        ]
      },
      {
        title: "Spot the problems",
        blocks: [
          { type: "p", html: "A Team Leader drafted this message for a distributed team across two time zones. It's well-intentioned, but five sentences will cause trouble." },
          { type: "hotspot", id: "tl1-hunt", title: "Find the five problem sentences",
            prompt: "Click each sentence that would create confusion, false certainty, or threat. Sentences that are fine will tell you so.",
            find: 5,
            doc: { kind: "message", heading: "Draft huddle message", segments: [
              { t: "Hi team, quick heads-up on next week.", fb: "A friendly opener is fine." },
              { t: "Starting Monday we move to the new CDM-linked PA routing.", target: true, fb: "Undefined acronyms and jargon. For a global team, use short sentences and define terms. “CDM” and “PA” may mean different things to different people." },
              { t: "Leadership has decided, so there's nothing to discuss.", target: true, fb: "This removes all voice (an Autonomy threat). The decision to implement may be final, but input on risks and support is still needed." },
              { t: "It will definitely make everyone faster with zero disruption.", target: true, fb: "False certainty, and benefits with no acknowledged cost. When the learning dip arrives, credibility goes with it." },
              { t: "The job aid and practice cases are in the team folder.", fb: "This is useful. It points people to concrete support." },
              { t: "Scheduling details will follow at some point.", target: true, fb: "An unknown with no owner, date, or time zone. Say who owns it and when the update will come." },
              { t: "Do you understand?", target: true, fb: "This invites a polite “yes” and tells you nothing. Ask people to explain the change in their own words instead." },
              { t: "Thanks for your flexibility.", fb: "A courteous close is fine." }
            ] },
            key: [
              "Global communication check: short sentences, defined acronyms, explicit dates, owners, and time zones.",
              "Never create false certainty. Separate what's decided, what's open for input, and what's still unknown, and name who owns each unknown.",
              "Silence isn't agreement. Check understanding through explanation (“Walk me through how you'd route this one”), and offer more than one channel for questions: live, chat, form, and one-to-one."
            ] }
        ]
      },
      {
        title: "Build your 60-second change story",
        blocks: [
          { type: "p", html: "Pick a real change you're leading now, or one you led recently, and keep it free of patient or client details. Use the canvas to draft a story you could tell in about a minute. A strong story isn't “selling” the change; it makes the reason, impact, and support understandable." },
          { type: "form", id: "tl1-canvas", title: "Change story canvas",
            fields: [
              { id: "case", label: "Case for change", prompt: "What problem or opportunity makes action necessary now?" },
              { id: "future", label: "Future state", prompt: "What will be better, and for whom?" },
              { id: "shift", label: "Behavior shift", prompt: "What must people stop, start, and continue?" },
              { id: "bounds", label: "Boundaries", prompt: "What is non-negotiable? What is open for input?" },
              { id: "support", label: "Support", prompt: "What knowledge, practice, tools, time, and coaching are available?" },
              { id: "evidence", label: "Success evidence", prompt: "What leading and outcome indicators will show adoption and value?" },
              { id: "unknowns", label: "Unknowns", prompt: "What isn't decided yet, and when or how will updates come?" }
            ],
            saveLabel: "Save my canvas",
            key: [
              "Read it back and listen for three traps: fake certainty, benefits without any acknowledged cost, and unclear expectations.",
              "If your “Unknowns” field is empty, look again. Almost every change has open questions, and naming them builds trust.",
              "Say it aloud to someone. Revise one sentence that sounds vague, defensive, or overly promotional."
            ] },
          { type: "reflect", id: "tl1-r1", prompt: "Read your story aloud once. Which sentence sounded most vague, defensive, or promotional, and how would you rewrite it?" }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "tl1-q", questions: [
            { q: "Which is the best way to check that a remote team understood a change?",
              options: ["Ask, “Does everyone understand?”", "Assume understanding if nobody asks questions.", "Ask people to explain the change, or walk through a case, in their own words.", "Resend the email in bold."],
              answer: 2, explain: "Explanation reveals real understanding. Silence or a yes to a closed question often hides confusion, especially across cultures and time zones." },
            { q: "A decision about schedules is still open. What should your message say?",
              options: ["Nothing until it's decided.", "That it's still being evaluated, who owns it, and when you'll update the team.", "A best guess so people aren't anxious.", "That it probably won't affect anyone."],
              answer: 1, explain: "Clarity over certainty: name the unknown, the owner, and the update cadence. Guessing creates false certainty you'll have to walk back." }
          ] }
        ]
      }
    ]
  },

  {
    id: "tl2", part: "path", track: "tl", minutes: 10,
    title: "Diagnose before you solve",
    summary: "Use ADKAR to find the earliest unresolved barrier for each person, and match the intervention to the barrier.",
    screens: [
      {
        title: "ADKAR as a diagnostic",
        blocks: [
          { type: "p", html: "ADKAR describes five outcomes a person needs to adopt a change. The order matters: you look for the <strong>earliest unresolved</strong> outcome and target that. More training won't fix weak Awareness or Desire, and more communication won't create Ability without practice." },
          { type: "sequence", id: "tl2-adkar", title: "Put ADKAR in order",
            prompt: "Arrange the five outcomes in the order a person moves through them.",
            items: [
              { id: "a", text: "Awareness", detail: "Can explain why the change is necessary." },
              { id: "d", text: "Desire", detail: "Chooses to take part and can name personal or team value." },
              { id: "k", text: "Knowledge", detail: "Knows the new steps, decisions, and resources." },
              { id: "ab", text: "Ability", detail: "Can perform reliably in real conditions." },
              { id: "r", text: "Reinforcement", detail: "Keeps the behavior going after the launch." }
            ],
            key: [
              "Diagnose from the left. If Awareness is missing, a perfect training session lands on someone who still doesn't see why.",
              "Knowledge and Ability are different. Knowing the steps in a classroom isn't the same as doing them reliably under live volume.",
              "Reinforcement is where many changes quietly fail: the behavior is learned, then slides back when huddles, QA, and targets still reward the old way."
            ] },
          { type: "table", head: ["Outcome", "Barrier signal", "Team Leader response"], rows: [
            ["Awareness", "“Why are we doing this?” “Nothing is wrong.”", "Connect the change to evidence, risk, customer impact, or strategy. Clarify the consequences of no change."],
            ["Desire", "“What's in it for us?” “I don't agree.”", "Explore impact and concerns. Create appropriate choice in implementation. Clarify expectations."],
            ["Knowledge", "“What do I click?” “Which route applies?”", "Focused instruction, examples, job aids, and checks for understanding."],
            ["Ability", "“I know the steps but can't do it quickly.”", "Deliberate practice, observation, feedback, time, access, and barrier removal."],
            ["Reinforcement", "“We went back to the old way.”", "Recognize, measure, coach, correct drift, and align huddles, QA, and performance routines."]
          ] }
        ]
      },
      {
        title: "Case: the new denial prioritization logic",
        blocks: [
          { type: "p", html: "Your denial team has received a new prioritization method. Five people are responding differently. For each, decide the likely first unresolved ADKAR outcome, then choose the response that fits." },
          { type: "profiles", id: "tl2-profiles", title: "Diagnose five team members",
            profiles: [
              { id: "p1", name: "Imani", tag: "Denials specialist, 4 years",
                quote: "“Why are we even doing this? Our denial numbers look fine to me.”",
                steps: [
                  { prompt: "What's the earliest unresolved outcome?", options: [
                    { text: "Awareness", correct: true, feedback: "Right. She can't yet explain why the change is needed. A validating question: “What have you heard about why this is changing?”" },
                    { text: "Desire", correct: false, feedback: "Not yet. She isn't saying she disagrees with the reason; she doesn't see one. Check Awareness first." },
                    { text: "Knowledge", correct: false, feedback: "She hasn't asked how to do anything. The gap is earlier: the why." },
                    { text: "Ability", correct: false, feedback: "There's no sign she can't perform. The gap is in understanding why." },
                    { text: "Reinforcement", correct: false, feedback: "She hasn't adopted it yet, so there's nothing to reinforce. Start earlier." }
                  ] },
                  { prompt: "Which response fits?", options: [
                    { text: "Enroll her in the refresher training.", correct: false, feedback: "Training teaches how, not why. It would use her time without touching the barrier." },
                    { text: "Show her the aging and rework data behind the change, and what happens to high-risk accounts if nothing changes.", correct: true, feedback: "Connecting the change to evidence and the consequences of no change targets Awareness directly." },
                    { text: "Tell her the decision is final.", correct: false, feedback: "That answers whether, not why. It may produce surface compliance while the doubt spreads." }
                  ] }
                ] },
              { id: "p2", name: "Rafael", tag: "Senior specialist, morning shift",
                quote: "“I get the goal. But this logic dumps the hardest payers on the morning shift. That isn't fair.”",
                steps: [
                  { prompt: "What's the earliest unresolved outcome?", options: [
                    { text: "Awareness", correct: false, feedback: "He says he gets the goal, so Awareness is in place." },
                    { text: "Desire", correct: true, feedback: "Right, likely Desire, with a Fairness concern from SCARF. He understands why but has a real reason not to want it as designed." },
                    { text: "Knowledge", correct: false, feedback: "He clearly understands how the logic works; that's what he's objecting to." },
                    { text: "Ability", correct: false, feedback: "Nothing suggests he can't do it. The issue is whether he wants to, and why." },
                    { text: "Reinforcement", correct: false, feedback: "He hasn't adopted it yet. Look earlier." }
                  ] },
                  { prompt: "Which response fits?", options: [
                    { text: "Explore the concern, look at workload distribution data together, and escalate the pattern if it holds while the standard stays in place.", correct: true, feedback: "You treat the fairness concern as possible design feedback, gather evidence, and keep the expectation clear." },
                    { text: "Re-run the training so he understands the logic better.", correct: false, feedback: "He already understands it. Training here wastes effort and signals you didn't listen." },
                    { text: "Remind him that high performers shouldn't complain.", correct: false, feedback: "This threatens Status and Fairness and buries what could be a genuine design flaw." }
                  ] }
                ] },
              { id: "p3", name: "Mei", tag: "Completed training last week",
                quote: "Mei completed the training but keeps selecting the wrong queue.",
                steps: [
                  { prompt: "What's the earliest unresolved outcome?", options: [
                    { text: "Awareness", correct: false, feedback: "Nothing suggests she doesn't understand why. She's trying to do it." },
                    { text: "Desire", correct: false, feedback: "She's attempting the new method, which suggests willingness." },
                    { text: "Knowledge", correct: true, feedback: "Possibly, but it could also be Ability. You can't tell from the outcome alone. Observe her before deciding." },
                    { text: "Ability", correct: true, feedback: "Possibly, but it could also be Knowledge. You can't tell from the outcome alone. Observe her before deciding." },
                    { text: "Reinforcement", correct: false, feedback: "She hasn't reached reliable use yet, so it's too early for Reinforcement." }
                  ] },
                  { prompt: "Which response fits?", options: [
                    { text: "Resend the announcement with the rationale.", correct: false, feedback: "The why isn't her problem. More communication won't fix a how problem." },
                    { text: "Sit with her on a few live accounts and ask her to talk through her decisions.", correct: true, feedback: "Observation tells you whether she doesn't know the rule (Knowledge) or knows it but can't apply it under real conditions (Ability). Then you can target the fix." },
                    { text: "Start a performance conversation.", correct: false, feedback: "Ability hasn't been demonstrated, so accountability is premature and unfair." }
                  ] }
                ] },
              { id: "p4", name: "Tomás", tag: "Strong performer",
                quote: "Tomás performs correctly during observation, but reverts to the old method when volumes rise.",
                steps: [
                  { prompt: "What's the earliest unresolved outcome?", options: [
                    { text: "Awareness", correct: false, feedback: "He uses the method when observed, so he knows why it matters." },
                    { text: "Desire", correct: false, feedback: "Possible, but the pattern points to production pressure, not unwillingness." },
                    { text: "Knowledge", correct: false, feedback: "He performs correctly when observed, so he knows the steps." },
                    { text: "Ability", correct: true, feedback: "Likely Ability under production conditions, and possibly Reinforcement too. He can do it, but not yet reliably when the pressure is on." },
                    { text: "Reinforcement", correct: true, feedback: "Likely Reinforcement, and possibly Ability under production conditions too. Something in the environment makes the old way easier when volume spikes." }
                  ] },
                  { prompt: "Which response fits?", options: [
                    { text: "Retrain him from scratch.", correct: false, feedback: "He already knows it. Retraining ignores what's pulling him back." },
                    { text: "Look at what volume pressure, huddles, and targets reward; protect some practice time at speed; recognize correct use and correct drift early.", correct: true, feedback: "You address both practice under real conditions and the system that's reinforcing the old behavior." },
                    { text: "Explain the reasons for the change again.", correct: false, feedback: "He understands the reasons. The gap is in the operating conditions." }
                  ] }
                ] },
              { id: "p5", name: "Aisha", tag: "Joined the team last month",
                quote: "“I want to use it. But which route applies when the payer is secondary?”",
                steps: [
                  { prompt: "What's the earliest unresolved outcome?", options: [
                    { text: "Awareness", correct: false, feedback: "She's not asking why." },
                    { text: "Desire", correct: false, feedback: "She says she wants to use it." },
                    { text: "Knowledge", correct: true, feedback: "Right. She's missing a specific decision rule. Validate with: “Talk me through the steps and decision points.”" },
                    { text: "Ability", correct: false, feedback: "She can't perform it yet because she doesn't know this rule. That's earlier than Ability." },
                    { text: "Reinforcement", correct: false, feedback: "She hasn't adopted it yet." }
                  ] },
                  { prompt: "Which response fits?", options: [
                    { text: "Remind her of the benefits so she stays motivated.", correct: false, feedback: "She's already motivated. Selling the change wastes the moment." },
                    { text: "Walk through two secondary-payer examples with the job aid, then ask her to route a third and explain why.", correct: true, feedback: "Focused instruction with examples and a check for understanding targets Knowledge." },
                    { text: "Give her more time; she'll work it out.", correct: false, feedback: "Without the rule, more time means more inconsistent routing." }
                  ] }
                ] }
            ],
            key: [
              "Five people, one change, five different barriers. A single team-wide fix (usually “more training”) would have helped one or two and wasted everyone else's time.",
              "The label is not the point; validation is. For Mei and Tomás, two answers were defensible, and only observation could tell you which.",
              "A mismatched intervention doesn't just waste effort. It tells the person you didn't listen."
            ] }
        ]
      },
      {
        title: "Questions that validate a diagnosis",
        blocks: [
          { type: "table", head: ["Outcome", "Questions to ask"], rows: [
            ["Awareness", "“What have you heard about why this is changing?” “What problem is the change meant to solve?”"],
            ["Desire", "“What concerns you most about supporting this?” “What would make participation more workable?”"],
            ["Knowledge", "“Talk me through the steps and decision points.” “Where would you go if a case doesn't match the job aid?”"],
            ["Ability", "“Show me how you'd complete this in the live environment or a simulation.” “What slows or blocks you?”"],
            ["Reinforcement", "“What makes the old way easier to return to?” “What feedback or reminder would help this stick?”"]
          ] },
          { type: "reflect", id: "tl2-r1", prompt: "Think of one person on your team and the change you used earlier. What's their earliest unresolved ADKAR outcome, what question would you ask to validate it, and what's one targeted response?" }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "tl2-q", questions: [
            { q: "A trained employee can explain the new process but can't complete it under normal volume. What's the likely barrier?",
              options: ["Awareness", "Desire", "Knowledge", "Ability"],
              answer: 3, explain: "They know it but can't do it reliably in real conditions. Provide realistic practice, observation, feedback, and barrier removal." },
            { q: "Several team members ask, “Why are we doing this? Nothing is broken.” What's the least effective response?",
              options: ["Share the evidence behind the change.", "Schedule another training session on the new steps.", "Explain the consequences of not changing.", "Connect the change to customer or quality impact."],
              answer: 1, explain: "That's an Awareness gap. Training teaches how, not why, so it won't move this barrier." }
          ] }
        ]
      }
    ]
  },

  {
    id: "tl3", part: "path", track: "tl", minutes: 8,
    title: "Reduce threat, increase agency",
    summary: "Use SCARF to spot avoidable social threat, then rewrite messages so the standard stays clear and people keep dignity and voice.",
    screens: [
      {
        title: "The SCARF lens",
        blocks: [
          { type: "p", html: "SCARF names five social needs that change can threaten: Status, Certainty, Autonomy, Relatedness, and Fairness. It's a lens for avoidable threat, not a diagnosis of personality. The goal isn't to remove all discomfort; change can involve hard decisions. The goal is to avoid adding threat that doesn't need to be there." },
          { type: "flip", id: "tl3-scarf", title: "Explore the five domains",
            cards: [
              { front: "Status", sub: "Do I still matter here?", back: "<strong>Threat:</strong> expertise seems devalued; the role feels smaller.<br><br><strong>Leader action:</strong> acknowledge existing expertise and define how it contributes to the new process." },
              { front: "Certainty", sub: "What happens next?", back: "<strong>Threat:</strong> unknown timeline, role, workload, or standard.<br><br><strong>Leader action:</strong> clarify what's known, unknown, the next decision, and when updates will come." },
              { front: "Autonomy", sub: "Do I have any say?", back: "<strong>Threat:</strong> change feels imposed with no voice.<br><br><strong>Leader action:</strong> offer genuine choices about implementation, practice order, or feedback method." },
              { front: "Relatedness", sub: "Am I part of this?", back: "<strong>Threat:</strong> remote or affected employees feel excluded.<br><br><strong>Leader action:</strong> create inclusive forums, peer support, and visible access to leaders." },
              { front: "Fairness", sub: "Is this applied evenly?", back: "<strong>Threat:</strong> workload, opportunity, communication, or consequences seem inconsistent.<br><br><strong>Leader action:</strong> explain decision criteria, apply standards consistently, and review disproportionate impact." }
            ],
            key: [
              "Most of these actions cost nothing but attention. Naming someone's expertise or stating the next update date can lower threat immediately.",
              "Keeping the non-negotiable clear is itself a Certainty move. Ambiguity about the standard is a threat too.",
              "Autonomy doesn't mean choosing whether to change. It means real choices about how: practice order, feedback route, who tests first."
            ] }
        ]
      },
      {
        title: "Threat-to-agency rewrites",
        blocks: [
          { type: "p", html: "Rewrite each message so the non-negotiable stays clear while unnecessary threat is reduced. Write your version first, then compare it with a model answer." },
          { type: "rewrite", id: "tl3-rewrite", title: "Rewrite the message",
            items: [
              { original: "“The decision is final, so there's no point discussing it.”",
                model: "“The decision to implement is final. Your input is still needed on risks, support, and how we implement consistently.”",
                why: "Separates the decision (fixed) from the implementation (open), restoring Autonomy without reopening the decision." },
              { original: "“Everyone received the same training, so errors shouldn't happen.”",
                model: "“Everyone received the same introduction. We'll now verify ability through practice and target support where needed.”",
                why: "Reframes training as exposure, not proficiency, and removes the implied blame, which lowers Status and Fairness threat." },
              { original: "“High performers shouldn't struggle with this.”",
                model: "“This change needs a new behavior. Current performance level doesn't remove the need for practice.”",
                why: "Protects Status by making practice normal for everyone, so strong performers can admit difficulty." },
              { original: "“We can't answer that yet.”",
                model: "“That decision is still being evaluated. The owner is Operations, and we'll provide an update by the next huddle.”",
                why: "Converts a dead end into Certainty: who owns it and when people will hear." }
            ],
            key: [
              "Look at what every model answer keeps: the standard. None of them soften the requirement; they remove threat around it.",
              "The pattern is reusable: name what's fixed, name what's open, and name the next step.",
              "“We can't answer that yet” and “That decision is with Operations; update by Thursday” carry the same information, but only one builds trust."
            ] }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "tl3-q", questions: [
            { q: "A Team Leader says, “Don't ask questions; the decision is final.” Which SCARF domains are most threatened?",
              options: ["Relatedness only", "Autonomy and Certainty, and potentially Status and Fairness", "Fairness only", "None. It's just clear communication."],
              answer: 1, explain: "Removing all voice threatens Autonomy; refusing questions leaves Certainty gaps. Dismissal can also feel like a Status and Fairness threat." },
            { q: "Night-shift employees say updates always arrive after their shift ends. Which domains are most at risk?",
              options: ["Status and Autonomy", "Relatedness and Fairness", "Certainty only", "None. It's a scheduling issue."],
              answer: 1, explain: "Being left out of communication threatens Relatedness, and unequal access feels unfair. Provide equivalent access and collect asynchronous questions." }
          ] }
        ]
      }
    ]
  },

  {
    id: "tl4", part: "path", track: "tl", minutes: 12,
    title: "The resistance conversation",
    summary: "Practice the 5L conversation (Listen, Label, Learn, Link, Lock) in a branching role-play with a tenured specialist.",
    screens: [
      {
        title: "The 5L conversation",
        blocks: [
          { type: "p", html: "When someone pushes back, the 5L sequence helps you acknowledge the concern without promising an exception, and without agreeing that the change is wrong." },
          { type: "sequence", id: "tl4-5l", title: "Order the 5L steps",
            prompt: "Arrange the steps in the order you'd use them in a conversation.",
            items: [
              { id: "l1", text: "Listen", detail: "Give full attention; don't prepare a rebuttal. “Tell me what concerns you most.”" },
              { id: "l2", text: "Label", detail: "Name the concern without exaggerating agreement. “It sounds like the workload impact is the main issue.”" },
              { id: "l3", text: "Learn", detail: "Ask for evidence and examples. “Where does it break down? How often? What's the risk?”" },
              { id: "l4", text: "Link", detail: "Connect to purpose, expectations, support, and the real barrier. “The quality requirement stays. Let's fix the access issue.”" },
              { id: "l5", text: "Lock", detail: "Agree action, owner, date, measure, and follow-up. “You'll test five cases; I'll confirm the exception route; we review tomorrow.”" }
            ],
            key: [
              "Listening first isn't softness; it's how you find out which of the four pushback types you're dealing with.",
              "Learn before you Link. If you link to purpose before you have evidence, it sounds like a rebuttal.",
              "Most conversations fail at Lock. “We'll see” leaves the concern open and the behavior unchanged. Name the owner, date, and measure."
            ] }
        ]
      },
      {
        title: "Role-play: the follow-up workflow",
        blocks: [
          { type: "sim", id: "tl4-sim", title: "Branching role-play",
            setup: "Daniel is a tenured AR specialist with nine years on the team. In this morning's huddle, with eight colleagues listening, he says: “This new follow-up workflow adds clicks and will reduce productivity. I'm going to use the old method until someone proves this works.” A couple of people nod.",
            steps: [
              { label: "In the huddle", context: "Everyone is watching to see what you do. What do you say?",
                options: [
                  { text: "“This isn't optional. The pilot data proves it works, so let's move on.”", correct: false,
                    feedback: "Leading with facts and authority in front of his peers threatens Daniel's Status and Autonomy. He hasn't been heard, so the room learns that concerns get shut down. You may get surface compliance while the workaround continues quietly." },
                  { text: "“Fair point, the clicks do add up. Use whatever method works for now.”", correct: false,
                    feedback: "You've publicly endorsed bypassing the required process. Others will follow, and you've made an exception you don't have authority to grant." },
                  { text: "“Thanks for raising it; productivity matters. The new workflow is still the required process today. I want to understand exactly where the clicks add up, so let's talk right after huddle.”", correct: true,
                    feedback: "You acknowledged the concern, held the boundary in front of the team, and moved the detail to a private conversation. Everyone heard that concerns are welcome and that the standard stands." }
                ] },
              { label: "Listen", context: "After the huddle, Daniel opens with: “It's not just clicks. I've done follow-up for nine years and this feels like it was designed by people who've never worked a queue.”",
                options: [
                  { text: "“Let's stick to facts, not feelings about who designed it.”", correct: false,
                    feedback: "You've corrected him before he's finished. That minimizes him and stops the flow of information you need." },
                  { text: "“Go on. Tell me what concerns you most.”", correct: true,
                    feedback: "Full attention, no rebuttal. Daniel explains: on Medicare Advantage follow-ups the workflow adds three screens per account, and notes have to be entered twice." },
                  { text: "“I hear you, but the design team did consult experienced staff.”", correct: false,
                    feedback: "That's a rebuttal disguised as listening. He'll stop explaining and start defending." }
                ] },
              { label: "Label", context: "You've heard the full picture. How do you name it back?",
                options: [
                  { text: "“So you think the whole workflow is a mistake.”", correct: false,
                    feedback: "That exaggerates his position into something easy to dismiss. He raised two specific issues, not a blanket rejection." },
                  { text: "“It sounds like the main issues are the extra screens on MA follow-ups and the double note entry, and that your experience wasn't part of the design.”", correct: true,
                    feedback: "Accurate and specific, without agreeing the change is wrong. Naming the Status concern shows you heard what sat underneath the clicks." },
                  { text: "“You're completely right. This is a bad design.”", correct: false,
                    feedback: "Exaggerated agreement. You've validated a conclusion you can't support, which undermines the change and sets up a promise you can't keep." }
                ] },
              { label: "Learn", context: "Now you need evidence. What do you ask?",
                options: [
                  { text: "“Everyone finds new workflows slower at first. It'll pass.”", correct: false,
                    feedback: "That dismisses the concern without testing it. If there's a real design defect, you've just buried it." },
                  { text: "“How often does it happen, on which account types, and what's the effect on your daily volume? Can you show me two examples?”", correct: true,
                    feedback: "You asked for pattern, frequency, impact, and concrete examples. That's what turns an opinion into something you can act on or escalate." },
                  { text: "“Send me a list of everything wrong with it.”", correct: false,
                    feedback: "An open-ended list invites broad opinions rather than evidence. You want specific cases, frequency, and impact." }
                ] },
              { label: "Link", context: "Daniel shows you two accounts. The double note entry looks like a genuine design issue. The extra screens look like they'd speed up with practice. What do you say?",
                options: [
                  { text: "“The workflow stays, and refusing it is a performance issue. Let's leave it there.”", correct: false,
                    feedback: "Jumping to accountability before enablement and evidence is premature. Part of his concern looks like valid design feedback." },
                  { text: "“The follow-up standard stays; it's what keeps our notes audit-ready. The double entry may be a real design issue, and the extra screens may get faster with practice. Let's tackle both.”", correct: true,
                    feedback: "You linked to purpose, kept the expectation, and matched each issue to the right response: escalate the design defect; build ability on the screens." },
                  { text: "“Since it might be a design problem, let's pause using it for MA accounts.”", correct: false,
                    feedback: "That's an unapproved workaround. A valid concern doesn't authorize bypassing the required process." }
                ] },
              { label: "Lock", context: "Time to close. How do you end the conversation?",
                options: [
                  { text: "“Let's see how it goes.”", correct: false,
                    feedback: "No owner, no date, no measure. Nothing changes, and the concern stays open in front of the team." },
                  { text: "“I'll escalate it. In the meantime, use your judgment.”", correct: false,
                    feedback: "“Use your judgment” reads as permission to use the old method. The interim expectation must be explicit." },
                  { text: "“You'll work the next five MA accounts in the new workflow and note where the double entry happens. I'll take your examples to the workflow owner today and confirm an answer by Thursday's huddle, and I'll update the team on what we found.”", correct: true,
                    feedback: "Action, owner, date, measure, and follow-up. Closing the loop publicly on Thursday shows the whole team that raising concerns works." }
                ] }
            ],
            key: [
              "Daniel's statement was public, so part of your response had to be public too: acknowledge, hold the standard, take the detail offline.",
              "Separate the concern from the conduct. His concern was valuable; announcing he'd bypass the process was not acceptable. You addressed both.",
              "Resistance often contains a real defect. The double note entry would have stayed hidden if you'd won the argument in the huddle.",
              "Close the loop where the issue was raised. Thursday's update tells eight people that speaking up leads somewhere."
            ] }
        ]
      },
      {
        title: "Rate yourself",
        blocks: [
          { type: "p", html: "In a live workshop, an observer would score you with this rubric. Use it to reflect honestly on how you handle these conversations in real life, not in the simulation." },
          { type: "table", head: ["Behavior", "Not yet", "Effective"], rows: [
            ["Listens without interruption", "Defends, corrects, or minimizes immediately.", "Allows a complete explanation and summarizes accurately."],
            ["Separates concern from conduct", "Labels the person as negative.", "Values the concern while addressing refusal clearly."],
            ["Uses evidence", "Debates broad opinions.", "Requests a case pattern, frequency, impact, and a controllable test."],
            ["Maintains boundaries", "Promises exceptions or avoids the expectation.", "States the non-negotiable and the proper escalation route."],
            ["Closes the loop", "Ends with “we'll see.”", "Confirms owner, date, measure, and follow-up channel."]
          ] },
          { type: "reflect", id: "tl4-r1", prompt: "Which rubric behavior is hardest for you in real conversations, and what will you do differently next time?" }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "tl4-q", questions: [
            { q: "Which closing line best completes the Lock step?",
              options: ["“Let's keep an eye on it.”", "“Thanks for sharing. I'll think about it.”", "“You'll test the job aid on five cases; I'll confirm the exception route; we'll review tomorrow at 10.”", "“Do what you think is best.”"],
              answer: 2, explain: "Lock means action, owner, date, measure, and follow-up, all of which are explicit here." },
            { q: "What makes resistance valuable to a leader?",
              options: ["It shows who's disloyal.", "It can reveal information, design, capability, workload, trust, or fairness issues that improve implementation.", "It gives the leader a chance to show authority.", "It isn't valuable; it should be minimized."],
              answer: 1, explain: "Resistance is data. Investigating it often surfaces risks the plan missed." }
          ] }
        ]
      }
    ]
  },

  {
    id: "tl5", part: "path", track: "tl", minutes: 8,
    title: "Challenge the status quo safely",
    summary: "Turn improvement ideas into small, compliant PDSA tests, and learn to spot the idea that would cross a line.",
    screens: [
      {
        title: "Innovation is disciplined curiosity",
        blocks: [
          { type: "p", html: "Challenging the status quo isn't the same as bypassing controls. In US revenue cycle work, improvement has to operate within privacy, security, payer, client, coding, documentation, and compliance requirements. Your job is to create a safe path for ideas to be tested and evaluated." },
          { type: "sequence", id: "tl5-pdsa", title: "Order the PDSA cycle",
            prompt: "Arrange the four phases of a micro-experiment.",
            items: [
              { id: "p", text: "Plan", detail: "Define the problem and evidence, the smallest safe test, required approvals, and your predicted result." },
              { id: "d", text: "Do", detail: "Run the limited test with defined people, cases, duration, and safeguards. Record what happens." },
              { id: "s", text: "Study", detail: "Compare expected and actual results across quality, compliance, productivity, effort, and downstream impact." },
              { id: "a", text: "Act", detail: "Adopt, adapt, abandon, or escalate. Document the decision and the next test." }
            ],
            key: [
              "Most of the safety lives in Plan: evidence that the problem is real, the smallest possible test, and the approvals required before anything runs.",
              "Study looks beyond speed. A test that's faster but raises defects or shifts work downstream hasn't succeeded.",
              "Abandoning an idea is a legitimate result. A cycle that ends in “abandon” still taught you something cheaply."
            ] }
        ]
      },
      {
        title: "Review a team idea",
        blocks: [
          { type: "p", html: "One of your specialists has sent you an improvement proposal. Most of it is excellent. One line would stop it cold." },
          { type: "hotspot", id: "tl5-hunt", title: "Find the line that fails the idea test",
            prompt: "Click the sentence that has to change before this test can run.",
            find: 1,
            doc: { kind: "message", heading: "Proposal: faster denial follow-up", segments: [
              { t: "Problem: we re-key the same payer reference number on three screens, which adds about 40 seconds per account. I timed 30 accounts last week.", fb: "This is strong: a specific problem with baseline evidence." },
              { t: "Test: our pod of four will try a shared reference template for two weeks.", fb: "A small, bounded test with defined people and duration. Good." },
              { t: "To make it faster, I'll export the open accounts with patient names and dates of birth to a spreadsheet on my personal drive so we can copy and paste.", target: true, fb: "This moves patient information outside approved systems. It fails the compliance and privacy test outright and needs Privacy and IT Security involvement. Never test process changes using real patient data outside approved systems." },
              { t: "We'll measure average handle time and error rate against last month's baseline.", fb: "Pairing speed with quality is exactly right." },
              { t: "If the error rate rises, we'll stop and review.", fb: "A clear guardrail with a stop condition. Good." }
            ] },
            key: [
              "Run every idea through five tests: customer or patient impact, compliance and privacy, quality, flow efficiency, and measurability.",
              "A good idea with one non-compliant step isn't a bad idea. Coach the person to redesign that step with the right approvals rather than rejecting the whole thing.",
              "Never let speed metrics override coding accuracy, documentation integrity, payer requirements, or compliant claim handling."
            ] }
        ]
      },
      {
        title: "Your stop, start, continue",
        blocks: [
          { type: "p", html: "Look at a workflow your team runs today. Propose one behavior to stop, one to start, and one to continue, and back each with evidence and controls." },
          { type: "form", id: "tl5-ssc", title: "Stop, start, continue",
            fields: [
              { id: "stop", label: "Stop", prompt: "What should the team stop doing, and why?" },
              { id: "start", label: "Start", prompt: "What should the team start doing?" },
              { id: "cont", label: "Continue", prompt: "What's working and should be protected?" },
              { id: "evid", label: "Evidence", prompt: "What evidence shows the problem or opportunity exists?" },
              { id: "ctrl", label: "Risk controls and approvals", prompt: "Who needs to approve it (Compliance, Coding, IT Security, Privacy, client)? What safeguards apply?" },
              { id: "meas", label: "Success measure and guardrail", prompt: "What baseline, leading indicator, outcome, and guardrail will you track?" }
            ],
            saveLabel: "Save my proposal" }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "tl5-q", questions: [
            { q: "What's the first step before challenging an RCM workflow?",
              options: ["Run the new method quietly to see if it works.", "Define the problem with evidence and identify the required governance and safeguards before testing.", "Ask the team to vote.", "Change the job aid and announce it."],
              answer: 1, explain: "Evidence and governance come first. Testing without approval can create compliance, privacy, or client risk." },
            { q: "A PDSA test cut handle time by 15%, but rework rose downstream. What's the right Act decision?",
              options: ["Adopt it. Speed improved.", "Adapt or abandon, and investigate the downstream impact before expanding.", "Hide the rework data.", "Expand to all teams to get more data."],
              answer: 1, explain: "Study covers quality and downstream impact, not just speed. Shifting work elsewhere isn't an improvement." }
          ] }
        ]
      }
    ]
  },

  {
    id: "tl6", part: "path", track: "tl", minutes: 12, capstone: true,
    title: "Capstone: from announcement to adoption",
    summary: "Bring every tool together on an AI-assisted work queue rollout, then build your own 30-day change leadership plan.",
    screens: [
      {
        title: "The case",
        blocks: [
          { type: "p", html: "A global RCM team is introducing an approved AI-assisted feature that recommends work-queue priority. The feature doesn't make the final decision; employees stay accountable for reviewing the account and following validated procedures. Pilot results suggest faster identification of high-risk accounts, but the team has concerns about accuracy, role security, productivity expectations, and what happens when a recommendation conflicts with policy." },
          { type: "p", html: "Five signals are showing up in your team:" },
          { type: "list", items: [
            "Two high performers question whether their expertise will still be valued.",
            "New hires assume the recommendation is always correct.",
            "Night-shift employees say updates arrive after their shift and decisions feel unfair.",
            "One employee hasn't received access but is being compared against the new productivity baseline.",
            "A vocal employee shares three examples of questionable recommendations, but no case details through the approved channel."
          ] },
          { type: "match", id: "tl6-signals", title: "Match each signal to the right first action",
            prompt: "Select a signal, then the action that addresses its likely ADKAR and SCARF barrier.",
            left: [
              { id: "s1", text: "High performers worry their expertise won't matter" },
              { id: "s2", text: "New hires accept every recommendation" },
              { id: "s3", text: "Night shift gets updates late" },
              { id: "s4", text: "Employee without access is compared to the new baseline" },
              { id: "s5", text: "Vocal employee cites questionable recommendations" }
            ],
            right: [
              { id: "a1", text: "Involve them in reviewing exceptions and make clear that human judgment remains essential." },
              { id: "a2", text: "Use contrasting examples and require a rationale before accepting or rejecting any recommendation." },
              { id: "a3", text: "Provide equivalent communication access, collect questions asynchronously, and include shift representatives." },
              { id: "a4", text: "Fix the access barrier and exclude or annotate their numbers until conditions are equivalent." },
              { id: "a5", text: "Ask for de-identified evidence through the approved route, investigate patterns, and close the loop." }
            ],
            pairs: { s1: "a1", s2: "a2", s3: "a3", s4: "a4", s5: "a5" },
            key: [
              "Expertise concern: Desire and Status. Overreliance: Knowledge and Ability. Night shift: Awareness, Relatedness, and Fairness. Missing access: Ability and Fairness. Questionable outputs: possibly valid design feedback.",
              "Overreliance is as much a risk as rejection. Requiring a rationale before accepting a recommendation keeps humans accountable.",
              "The vocal employee may be right. Route the evidence properly and investigate, without allowing unapproved workarounds in the meantime."
            ] }
        ]
      },
      {
        title: "Choose your measures",
        blocks: [
          { type: "p", html: "To know whether the rollout is working, you need indicators at different points in the chain, plus guardrails that tell you if something is going wrong." },
          { type: "bucket", id: "tl6-measures", title: "Sort the measures",
            prompt: "Sort each measure into the type it is.",
            buckets: [
              { id: "lead", label: "Leading" },
              { id: "adopt", label: "Adoption" },
              { id: "out", label: "Outcome" },
              { id: "guard", label: "Guardrail" }
            ],
            items: [
              { id: "a", text: "Access completion across all shifts", bucket: "lead" },
              { id: "b", text: "Practice accuracy on exception cases", bucket: "lead" },
              { id: "c", text: "Share of cases worked through the approved workflow correctly", bucket: "adopt" },
              { id: "d", text: "Appropriate accept and override decisions on sampled cases", bucket: "adopt" },
              { id: "e", text: "Turnaround time", bucket: "out" },
              { id: "f", text: "Preventable error rate", bucket: "out" },
              { id: "g", text: "Signs of inappropriate reliance on automation", bucket: "guard" },
              { id: "h", text: "Compliance findings", bucket: "guard" }
            ],
            key: [
              "Leading indicators tell you early whether people are set up to succeed. If access is incomplete, outcome data will mislead you.",
              "Adoption is behavior: are people using the new way correctly? It's different from whether they finished training.",
              "Guardrails protect against the change succeeding in the wrong way, such as faster turnaround achieved through over-trusting the tool."
            ] },
          { type: "reflect", id: "tl6-r1", prompt: "Draft your opening line for a 5L conversation with the vocal employee. How will you listen first while keeping the approved channel clear?" }
        ]
      },
      {
        title: "Your 30-day change leadership plan",
        blocks: [
          { type: "p", html: "This is the tool you'll take back to work. Use the change you've been working with throughout the course. Fill every field; short answers are fine." },
          { type: "form", id: "tl6-plan", title: "30-day change leadership plan",
            fields: [
              { id: "reason", label: "Change and business reason" },
              { id: "people", label: "People most affected" },
              { id: "shift", label: "Required behavior shift: stop, start, continue" },
              { id: "adkar", label: "First ADKAR barrier to address" },
              { id: "scarf", label: "SCARF risks to reduce" },
              { id: "comms", label: "Communication cadence and channels" },
              { id: "coach", label: "Practice and coaching plan" },
              { id: "esc", label: "Barrier escalation owner" },
              { id: "lead", label: "Leading adoption indicators" },
              { id: "out", label: "Outcome and guardrail measures" },
              { id: "win", label: "Short-term win to recognize" },
              { id: "review", label: "Date to review and adjust" }
            ],
            saveLabel: "Save my plan" },
          { type: "reflect", id: "tl6-close", prompt: "Complete the sentence: “The next time my team faces change, I will stop ___, start ___, and continue ___.” Who will notice the difference?" }
        ]
      }
    ]
  },

  /* =====================================================================
     PART 2 — MANAGER PATH
     ===================================================================== */
  {
    id: "mg1", part: "path", track: "mgr", minutes: 7,
    title: "Change is a system, not an announcement",
    summary: "See why launches that look successful often aren't, and check all five layers that determine whether change actually lands.",
    screens: [
      {
        title: "The launch that looked successful",
        blocks: [
          { type: "p", html: "A new workflow launched on time. Communications went out, training completion reached 98%, and managers reported positive feedback. Six weeks later, quality is inconsistent, old templates are still in use, Team Leaders give different answers, and employees have built manual workarounds." },
          { type: "hotspot", id: "mg1-hunt", title: "Find the false-confidence indicators",
            prompt: "This was the six-week status dashboard. Click the four indicators that made leaders believe the change had landed.",
            find: 4,
            doc: { kind: "tiles", heading: "Six-week status dashboard", tiles: [
              { label: "Launch date", value: "On time", target: true, fb: "Launch timing tells you the event happened, not that behavior changed." },
              { label: "Communications sent", value: "6 of 6", target: true, fb: "Activity, not adoption. Messages sent don't show messages understood or acted on." },
              { label: "Training completion", value: "98%", target: true, fb: "Training completion shows exposure, not reliable performance." },
              { label: "Manager pulse", value: "4.4 / 5 positive", target: true, fb: "Survey positivity isn't the same as correct behavior or business value, and managers may be reporting what they think leaders want to hear." },
              { label: "Legacy template use", value: "41% of cases", fb: "This is real evidence that adoption hasn't happened. It's the kind of signal leaders should have been watching." },
              { label: "Quality variance across teams", value: "±18 points", fb: "This is a genuine warning sign of uneven proficiency, not a false-confidence indicator." },
              { label: "Workaround spreadsheets reported", value: "7", fb: "Real evidence: the new way is harder than the old way somewhere. Worth investigating, not ignoring." },
              { label: "TL answers to the same question", value: "3 different", fb: "A clear sign of missing enablement and no single source of truth, but not something that created false confidence." }
            ] },
            key: [
              "All four false-confidence indicators measure activity. None measure adoption, proficiency, or outcome.",
              "The real signals (legacy template use, quality variance, workarounds) were available. They just weren't on the scorecard leaders were watching.",
              "Keep asking: what behavior must be different, and what system currently rewards the old behavior?"
            ] }
        ]
      },
      {
        title: "Five layers of change success",
        blocks: [
          { type: "p", html: "Managers tend to overvalue launch readiness and undervalue the conditions for adoption. A change has to hold up across five layers, and a gap in any one of them pulls behavior backward." },
          { type: "flip", id: "mg1-layers", title: "Explore the five layers",
            cards: [
              { front: "Strategic value", sub: "Why now, and what's at stake?", back: "<strong>Manager question:</strong> why does this matter now, and what value or risk is at stake?<br><br><strong>If ignored:</strong> change becomes an activity without priority." },
              { front: "Solution quality", sub: "Does it work in real conditions?", back: "<strong>Manager question:</strong> does the redesigned process work in real operating conditions?<br><br><strong>If ignored:</strong> people are blamed for design defects." },
              { front: "People adoption", sub: "Willing and able?", back: "<strong>Manager question:</strong> are affected groups willing and able to use the new way?<br><br><strong>If ignored:</strong> launch occurs without behavior change." },
              { front: "Operating system", sub: "Do routines support it?", back: "<strong>Manager question:</strong> do goals, staffing, access, measures, incentives, and routines support it?<br><br><strong>If ignored:</strong> the old system pulls behavior backward." },
              { front: "Governance", sub: "Who owns what?", back: "<strong>Manager question:</strong> who decides, escalates, measures, and sustains?<br><br><strong>If ignored:</strong> barriers and risks remain unowned." }
            ],
            key: [
              "The layers explain the opening case: training addressed only part of people adoption, while the operating system (old templates still available) and governance (inconsistent answers) were never fixed.",
              "“Solution quality” protects your people. If the design doesn't work in real conditions, behavior problems are symptoms, not causes.",
              "Most of these layers sit with Managers, not Team Leaders. That's the core of the Manager role in change."
            ] },
          { type: "reflect", id: "mg1-r1", prompt: "For a change you're leading now: what behavior must be different, and what in the current system still rewards the old behavior?" }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "mg1-q", questions: [
            { q: "Training completion is 100%, but use of the old workflow remains high. What does this show?",
              options: ["The change has succeeded.", "Activity is complete, but adoption isn't. Diagnose the barrier and operating conditions.", "Training needs to be repeated.", "The team is resistant."],
              answer: 1, explain: "Training shows exposure. High legacy use means something in the operating system or individual barriers is still pulling people back." },
            { q: "Employees keep making the same errors with a new process, despite good training. Which layer should you check first?",
              options: ["Strategic value", "Solution quality: does the process work in real conditions?", "Communications", "Recognition"],
              answer: 1, explain: "Before blaming people, check whether the design works in real operating conditions. Otherwise people get blamed for design defects." }
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
              { front: "Form a vision", sub: "What will be different?", back: "<strong>You:</strong> define a clear future state and strategic choices.<br><strong>Ask:</strong> can leaders explain what will be different?<br><strong>Evidence:</strong> shared narrative, target behaviors, outcome measures." },
              { front: "Enlist people", sub: "Contributing or receiving?", back: "<strong>You:</strong> create participation beyond the core project team.<br><strong>Ask:</strong> are people contributing, or only receiving updates?<br><strong>Evidence:</strong> champions, feedback routes, local ownership." },
              { front: "Remove barriers", sub: "What makes the old way easier?", back: "<strong>You:</strong> resolve policy, capacity, skill, access, measure, and system obstacles.<br><strong>Ask:</strong> what makes the old way easier?<br><strong>Evidence:</strong> a barrier log with owners and closure dates." },
              { front: "Generate wins", sub: "What credible proof, soon?", back: "<strong>You:</strong> design early proof that matters to stakeholders.<br><strong>Ask:</strong> what credible result can we demonstrate soon?<br><strong>Evidence:</strong> verified improvement with no hidden guardrail failure." },
              { front: "Sustain acceleration", sub: "Declaring victory too early?", back: "<strong>You:</strong> use learning and credibility to expand and improve.<br><strong>Ask:</strong> are leaders declaring victory too early?<br><strong>Evidence:</strong> a next-wave roadmap and continued sponsor attention." },
              { front: "Institute change", sub: "Will it outlast the project?", back: "<strong>You:</strong> embed behavior in routines, measures, talent, and governance.<br><strong>Ask:</strong> will the change survive leadership or project turnover?<br><strong>Evidence:</strong> updated SOPs, QA, onboarding, scorecards, recognition, controls." }
            ],
            key: [
              "Every step pairs a responsibility with evidence. If you can't point to the evidence, rate the condition as weak, however much activity has happened.",
              "“Remove barriers” is where Managers have the most leverage. A barrier log with owners and dates turns complaints into closures.",
              "“Generate wins” has a trap: a win that hides a guardrail failure (faster, but less accurate) destroys credibility when it surfaces."
            ] }
        ]
      },
      {
        title: "Find the weakest step",
        blocks: [
          { type: "p", html: "Rate a current initiative from 1 (absent) to 5 (strong) on each condition. Your lowest-rated condition will open prompts and sample actions. You'll need to justify that rating with evidence." },
          { type: "heatmap", id: "mg2-heat", title: "Kotter heat map",
            steps: [
              { id: "urg", label: "Create urgency", actions: ["Brief leaders with the specific data and a short case story so they can explain why now.", "Make the priority visible in a real decision, such as protecting time or pausing a lower-value project."] },
              { id: "coal", label: "Build a coalition", actions: ["Write a one-page coalition charter: members, decision rights, meeting rhythm.", "Add an affected-role representative and a Compliance or IT owner with real decision access."] },
              { id: "vis", label: "Form a vision", actions: ["Draft three target behaviors and two outcome measures leaders can repeat.", "Test the narrative: can three Team Leaders explain the future state in their own words?"] },
              { id: "enl", label: "Enlist people", actions: ["Recruit champions on each site and shift, with protected time.", "Open a feedback route and publish what you've changed because of it."] },
              { id: "bar", label: "Remove barriers", actions: ["Start a barrier log with owner and closure date for every item.", "Review the log weekly and escalate items older than ten working days."] },
              { id: "win", label: "Generate wins", actions: ["Define one short-term win and the evidence (including guardrails) needed before announcing it.", "Choose a win that matters to frontline staff, not only to sponsors."] },
              { id: "acc", label: "Sustain acceleration", actions: ["Hold a lessons-learned review before expanding to the next site.", "Keep the sponsor in a monthly review until stabilization, not just launch."] },
              { id: "inst", label: "Institute change", actions: ["List every SOP, QA rubric, onboarding module, and scorecard that still describes the old way.", "Set a legacy-retirement date and owner."] }
            ],
            key: [
              "Your lowest score points to where effort will have the most effect. Spreading effort evenly across all eight steps is the most common mistake.",
              "Challenge your own action: does it change the condition, or does it just add more communication?",
              "Repeat this heat map every few weeks. Conditions shift as the change moves, and Kotter is meant to be used iteratively."
            ] }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "mg2-q", questions: [
            { q: "How does this course recommend using Kotter's eight steps?",
              options: ["As a strict sequence to complete in order", "As a diagnostic of organization-level conditions, revisited iteratively", "Only at the start of a project", "As a communication plan template"],
              answer: 1, explain: "Large changes rarely unfold linearly. Use the steps to find which conditions are weak right now." },
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
          { type: "p", html: "Map stakeholders on three dimensions: <strong>influence</strong> over the change, <strong>impact</strong> from the change, and current <strong>support</strong>. High impact doesn't always mean high formal authority; affected employees and informal influencers can shape adoption strongly." },
          { type: "match", id: "mg3-stake", title: "Match each group to its engagement approach",
            prompt: "Select a stakeholder group, then the engagement approach that fits what they need from you.",
            left: [
              { id: "s1", text: "Executive sponsor" },
              { id: "s2", text: "Peer Managers" },
              { id: "s3", text: "Team Leaders" },
              { id: "s4", text: "SMEs, Quality, Compliance, IT" },
              { id: "s5", text: "Employees" },
              { id: "s6", text: "Clients or external partners" }
            ],
            right: [
              { id: "r1", text: "Brief with evidence; request specific sponsor actions, not generic endorsement." },
              { id: "r2", text: "Joint planning, dependency review, and a shared decision log." },
              { id: "r3", text: "Leader cascade with teach-back and office hours." },
              { id: "r4", text: "Defined review gates, service levels, and an accountable owner." },
              { id: "r5", text: "Segmented communication, pilots, listening, and coaching." },
              { id: "r6", text: "Formal change control and clear decision rights." }
            ],
            pairs: { s1: "r1", s2: "r2", s3: "r3", s4: "r4", s5: "r5", s6: "r6" },
            key: [
              "Each group needs something different from you. Sending everyone the same update treats very different needs as one.",
              "Team Leaders need rehearsal, not just information. Teach-back is how you know they're ready to speak to their teams.",
              "Revisit the map. Positions and influence shift as the change moves, especially after early wins or setbacks."
            ] }
        ]
      },
      {
        title: "Sponsorship is action",
        blocks: [
          { type: "p", html: "Stakeholder awareness isn't sponsorship. Active sponsors make decisions, allocate resources, model priorities, reinforce behavior, and stay visible after launch." },
          { type: "table", head: ["Sponsor behavior", "Concrete commitment"], rows: [
            ["Say", "Repeat the case, desired behavior, and priority in recurring forums."],
            ["Do", "Make decisions and allocate resources consistent with the change."],
            ["Model", "Use the new process, language, tool, or governance personally where relevant."],
            ["Reinforce", "Recognize adoption, address conflicting priorities, and hold leaders accountable."],
            ["Stay", "Remain visible after launch and through stabilization."]
          ] },
          { type: "bucket", id: "mg3-sponsor", title: "Action or messaging?",
            prompt: "Sort each sponsor behavior: is it a sponsor action, or sponsor messaging only?",
            buckets: [ { id: "act", label: "Sponsor action" }, { id: "msg", label: "Messaging only" } ],
            items: [
              { id: "a", text: "Approves two hours of protected simulation practice per person", bucket: "act" },
              { id: "b", text: "Sends an all-staff email saying the rollout has full support", bucket: "msg" },
              { id: "c", text: "Resolves the conflict between the new quality target and the old productivity target", bucket: "act" },
              { id: "d", text: "Opens the town hall with “I'm really excited about this change”", bucket: "msg" },
              { id: "e", text: "Reviews the adoption scorecard weekly and follows up with a Manager whose team bypasses the workflow", bucket: "act" },
              { id: "f", text: "Asks managers to “keep the energy up”", bucket: "msg" },
              { id: "g", text: "Retires the legacy report so the old way stops being easier", bucket: "act" },
              { id: "h", text: "Posts an intranet article about why change is exciting", bucket: "msg" }
            ],
            key: [
              "Messaging matters; it's the “Say” in the sponsor contract. But on its own it asks people to change while the system stays the same.",
              "Sponsor actions change conditions: time, priorities, resources, accountability, and what's easier to do.",
              "Your job as a Manager is to ask for actions, not endorsements."
            ] }
        ]
      },
      {
        title: "Convert vague support into a specific ask",
        blocks: [
          { type: "p", html: "Rewrite each vague request as a specific sponsor ask, with a forum, a message or decision, an owner, and a date. Then compare with the model." },
          { type: "rewrite", id: "mg3-ask", title: "Make the ask specific",
            items: [
              { original: "“Please support the rollout.”",
                model: "“At Monday's town hall, explain the client and quality reason for the change, name the non-negotiable behavior, and confirm that legacy workarounds will be retired after validation.”",
                why: "Names a forum, a message, and a commitment the sponsor can actually deliver." },
              { original: "“Please remove barriers.”",
                model: "“Approve two hours of protected simulation practice and assign IT ownership for access failures, resolved within one business day during stabilization.”",
                why: "Turns a vague hope into a resource decision and an owned service level." },
              { original: "“Please reinforce adoption.”",
                model: "“Review the adoption and guardrail scorecard weekly for four weeks and address any Manager whose team is bypassing the approved workflow.”",
                why: "Specifies the rhythm, the evidence, the duration, and the accountability behavior." }
            ],
            key: [
              "Sponsors usually want to help. Vague asks get vague help, because they can't tell what you need.",
              "Every strong ask has a forum or mechanism, a specific decision or message, and a time frame.",
              "Ask for the sponsor to stay: a four-week review rhythm keeps attention past launch, when most changes lose it."
            ] }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "mg3-q", questions: [
            { q: "Which is a sponsor action rather than sponsor messaging?",
              options: ["A supportive email to all staff", "Allocating resources, resolving priority conflicts, making decisions, removing barriers, and holding leaders accountable", "A motivational video", "A slogan on the intranet"],
              answer: 1, explain: "Sponsorship shows in decisions and resources. Messaging is necessary but not sufficient." },
            { q: "A frontline team has little formal authority but will be heavily affected. How should you treat them on your stakeholder map?",
              options: ["Low priority, since they have little influence", "As a high-impact group that can strongly shape adoption, with active engagement", "Inform them after launch", "Engage them only through their Manager"],
              answer: 1, explain: "High impact doesn't require high authority. Affected groups and informal influencers often decide whether adoption happens." }
          ] }
        ]
      }
    ]
  },

  {
    id: "mg4", part: "path", track: "mgr", minutes: 7,
    title: "Lead through leaders",
    summary: "Equip Team Leaders with what they need to lead change, not just relay it, and run a leader cascade that actually works.",
    screens: [
      {
        title: "What Team Leaders need from you",
        blocks: [
          { type: "p", html: "A leader cascade isn't forwarding slides. If Team Leaders can't answer first-level questions, or can't safely say “I'll verify,” the organization has built a rumor network. Team Leaders need six things from you." },
          { type: "flip", id: "mg4-six", title: "The six things Team Leaders need",
            cards: [
              { front: "Context", sub: "The bigger picture", back: "<strong>You provide:</strong> the case for change, future state, trade-offs, and stakeholder impact.<br><br><strong>Verify:</strong> the Team Leader can explain the change in plain language." },
              { front: "Clarity", sub: "What's fixed and what's local", back: "<strong>You provide:</strong> non-negotiables, local choices, decision rights, and the escalation path.<br><br><strong>Verify:</strong> the Team Leader classifies sample issues correctly." },
              { front: "Capability", sub: "Skills to lead it", back: "<strong>You provide:</strong> conversation practice, coaching tools, scenario answers, and job aids.<br><br><strong>Verify:</strong> observed role-play and teach-back." },
              { front: "Capacity", sub: "Time to do it", back: "<strong>You provide:</strong> time for learning, coaching, huddles, and stabilization.<br><br><strong>Verify:</strong> workload and priority conflicts are resolved." },
              { front: "Consistency", sub: "One answer", back: "<strong>You provide:</strong> aligned answers and rapid updates when guidance changes.<br><br><strong>Verify:</strong> a single source of truth and a decision log." },
              { front: "Cover", sub: "Backing when it's hard", back: "<strong>You provide:</strong> visible support when a Team Leader enforces the agreed standard.<br><br><strong>Verify:</strong> escalated resistance and barriers get timely management action." }
            ],
            key: [
              "Every need has a verification. Attendance at a briefing verifies none of them.",
              "Capacity is the one most often skipped. Asking Team Leaders to coach a change on top of a full load, with no time protected, quietly guarantees it won't happen.",
              "Cover matters most when it's hardest. If a Team Leader enforces the standard and you don't back them, every other Team Leader notices."
            ] }
        ]
      },
      {
        title: "Run a leader cascade",
        blocks: [
          { type: "sequence", id: "mg4-cascade", title: "Order the leader cascade",
            prompt: "Arrange the steps of an effective leader cascade, from first to last.",
            items: [
              { id: "c1", text: "Pre-brief Team Leaders before broad employee communication" },
              { id: "c2", text: "Explain the business case and acknowledge likely team impact" },
              { id: "c3", text: "Clarify what's decided, open, and unknown" },
              { id: "c4", text: "Demonstrate the expected leader conversation" },
              { id: "c5", text: "Practice with realistic objections" },
              { id: "c6", text: "Require teach-back in their own words, including the escalation route" },
              { id: "c7", text: "Provide a one-page leader kit and a response time for open questions" },
              { id: "c8", text: "Audit message consistency and coaching behavior, not just attendance" }
            ],
            key: [
              "Order matters: Team Leaders who hear news at the same time as their teams can only react, not lead.",
              "Demonstrate, then practice, then teach-back. Each step moves from knowing to doing to proving readiness.",
              "The cascade doesn't end at the briefing. Auditing consistency is how you find the Team Leader giving a different answer before it becomes the team's truth."
            ] },
          { type: "reflect", id: "mg4-r1", prompt: "For your current change: what must a Team Leader be able to explain, demonstrate, decide, and escalate before speaking to their team?" }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "mg4-q", questions: [
            { q: "What's the best evidence that a Team Leader is ready to lead a change conversation?",
              options: ["They attended the briefing.", "They received the slides.", "They can explain the change and escalation route in their own words and have rehearsed realistic objections.", "They said they're comfortable."],
              answer: 2, explain: "Teach-back and observed rehearsal verify readiness. Attendance and self-report don't." },
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
    summary: "Treat change fatigue as a portfolio problem. Size the impact of each change and decide what to stop, pause, or sequence.",
    screens: [
      {
        title: "What change fatigue looks like",
        blocks: [
          { type: "p", html: "Change fatigue is usually a portfolio and operating-system problem, not an employee attitude problem. Look for these signs:" },
          { type: "list", items: [
            "Cynicism about new initiatives, and references to past efforts that were abandoned.",
            "Less attention to communications and lower participation in learning.",
            "Competing changes with overlapping deadlines and no trade-off decisions.",
            "Temporary workarounds becoming permanent.",
            "Managers privately deprioritizing initiatives while publicly agreeing.",
            "High effort with no visible improvement or closure."
          ] },
          { type: "bucket", id: "mg5-impact", title: "Size the impact",
            prompt: "Sort each change into its likely impact level, so you can see how much absorption capacity it needs.",
            buckets: [ { id: "low", label: "Low" }, { id: "med", label: "Medium" }, { id: "high", label: "High" } ],
            items: [
              { id: "a", text: "A field label changes on an existing screen", bucket: "low" },
              { id: "b", text: "Team reads an update; no new skill required", bucket: "low" },
              { id: "c", text: "No change to any metric or target", bucket: "low" },
              { id: "d", text: "A new feature or work queue is added", bucket: "med" },
              { id: "e", text: "Several handoffs or decisions change", bucket: "med" },
              { id: "f", text: "A target or metric definition is updated", bucket: "med" },
              { id: "g", text: "Move to a new platform or automation model", bucket: "high" },
              { id: "h", text: "Work needs new judgment, certification, or sustained coaching", bucket: "high" },
              { id: "i", text: "Role, authority, or career path is affected", bucket: "high" }
            ],
            key: [
              "Impact isn't one number. A small technology change can still be high impact if it changes roles, judgment, or how people are measured.",
              "When several medium changes land on the same people in the same month, together they behave like one high-impact change.",
              "Use this sizing to decide sequencing, not just communication volume."
            ] }
        ]
      },
      {
        title: "Portfolio triage",
        blocks: [
          { type: "table", head: ["Question", "Management decision"], rows: [
            ["Strategic relevance", "Continue, accelerate, redesign, pause, or stop."],
            ["Capacity demand", "What work will be removed, delayed, automated, or resourced?"],
            ["Change collision", "Do multiple initiatives affect the same people, process, system, or metric?"],
            ["Sequence", "What must happen first because of dependency or learning load?"],
            ["Absorption capacity", "How much can teams learn and stabilize while maintaining service and quality?"],
            ["Legacy retirement", "Which old processes, templates, meetings, or measures will be removed?"]
          ] },
          { type: "callout", tone: "rule", title: "Manager decision rule", html: "Never add significant change without naming the capacity source. “Absorb it” is not a capacity plan." },
          { type: "reflect", id: "mg5-r1", prompt: "List the changes landing on your teams in the next 90 days. Which collide for the same people, workflow, or metric, and what will you pause, sequence, or stop?" }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "mg5-q", questions: [
            { q: "A sponsor wants to add a new reporting requirement for a team already mid-way through a system migration at month-end. What's the best response?",
              options: ["Agree. The team will absorb it.", "Agree, but ask the team to work overtime.", "Name the collision, and agree what will be removed, delayed, or resourced before adding it.", "Quietly deprioritize it without telling the sponsor."],
              answer: 2, explain: "Never add significant change without naming the capacity source. Make the trade-off visible and decide it openly." },
            { q: "Managers publicly support an initiative but privately tell their teams to ignore it. What's this most likely a sign of?",
              options: ["Poor individual attitude", "Change fatigue from an unmanaged portfolio with no trade-off decisions", "Strong local leadership", "A training gap"],
              answer: 1, explain: "Private deprioritizing is a classic fatigue signal: too many competing demands, with nobody making the trade-offs explicitly." }
          ] }
        ]
      }
    ]
  },

  {
    id: "mg6", part: "path", track: "mgr", minutes: 8,
    title: "Measure adoption, not activity",
    summary: "Build a measurement chain from activity to guardrails, and learn to spot the data point that should stop a bad decision.",
    screens: [
      {
        title: "The change measurement chain",
        blocks: [
          { type: "table", head: ["Level", "Question", "Examples"], rows: [
            ["Activity", "Did we deliver the intervention?", "Communications sent, training completed, access provisioned."],
            ["Awareness and readiness", "Do people understand and intend to act?", "Reason recall, clarity pulse, readiness risks."],
            ["Adoption", "Are people using the new way?", "Approved workflow usage, decline in legacy process."],
            ["Proficiency", "Can people perform correctly and efficiently?", "Quality, decision accuracy, observed skill, cycle time after the learning curve."],
            ["Outcome", "Is the change producing the intended value?", "Less rework, better turnaround, customer result, cost or risk reduction."],
            ["Guardrail", "Are we avoiding unacceptable harm or distortion?", "Compliance findings, quality decline, inequitable workload, gaming, burnout signs."]
          ] },
          { type: "bucket", id: "mg6-chain", title: "Place the measures",
            prompt: "Sort each measure into its level in the chain.",
            buckets: [
              { id: "act", label: "Activity" },
              { id: "adopt", label: "Adoption" },
              { id: "prof", label: "Proficiency" },
              { id: "out", label: "Outcome" },
              { id: "guard", label: "Guardrail" }
            ],
            items: [
              { id: "a", text: "Training completion rate", bucket: "act" },
              { id: "b", text: "Access provisioned for affected users", bucket: "act" },
              { id: "c", text: "Share of eligible cases worked through the approved path", bucket: "adopt" },
              { id: "d", text: "Decline in legacy template use", bucket: "adopt" },
              { id: "e", text: "Exception decision accuracy on sampled cases", bucket: "prof" },
              { id: "f", text: "Cycle time once the learning curve has passed", bucket: "prof" },
              { id: "g", text: "Reduction in preventable rework", bucket: "out" },
              { id: "h", text: "Improvement in turnaround time", bucket: "out" },
              { id: "i", text: "Compliance deviations linked to the change", bucket: "guard" },
              { id: "j", text: "Workload imbalance between shifts", bucket: "guard" }
            ],
            key: [
              "Activity measures are easy to collect and easy to over-trust. They show exposure, not performance.",
              "Adoption and proficiency are different: people can use the new path (adoption) and still make wrong decisions in it (proficiency).",
              "Always pair productivity with quality and compliance guardrails. A change can hit its outcome target by causing harm elsewhere."
            ] }
        ]
      },
      {
        title: "Read the scorecard",
        blocks: [
          { type: "p", html: "Six weeks in, a peer Manager points at this scorecard and says Site C needs a performance plan: “They're clearly the weakest.”" },
          { type: "hotspot", id: "mg6-hunt", title: "Find the data point that should stop that decision",
            prompt: "Click the single cell that means Site C's productivity can't fairly be compared yet.",
            find: 1,
            doc: { kind: "table", heading: "Week 6 change scorecard", head: ["Site", "Validated access", "Workflow adoption", "Exception accuracy", "Accounts per day"],
              rows: [
                ["Site A", { t: "100%", fb: "Full access, so Site A's numbers are a fair comparison point." }, { t: "88%", fb: "Strong adoption, but not the issue here." }, { t: "94%", fb: "Healthy proficiency." }, { t: "52", fb: "Productivity looks strong, but it only means something if conditions are equivalent." }],
                ["Site B", { t: "98%", fb: "Near-complete access." }, { t: "81%", fb: "Reasonable adoption." }, { t: "91%", fb: "Healthy proficiency." }, { t: "49", fb: "Close to Site A." }],
                ["Site C", { t: "71%", target: true, fb: "Nearly a third of Site C can't access the new workflow. Comparing their productivity against sites with full access isn't fair or meaningful. Fix the access defect first, and exclude or annotate the comparison until conditions are equivalent." }, { t: "62%", fb: "Low adoption, but why? Look upstream: people can't adopt a workflow they can't open." }, { t: "90%", fb: "Those who can use it are making accurate decisions, so this isn't a capability problem." }, { t: "38", fb: "This is the number the peer Manager is reacting to. The question is whether it's a fair comparison." }]
              ] },
            key: [
              "Segmenting data by site, shift, role, or access condition reveals what aggregate numbers hide.",
              "Don't compare productivity until access and defined proficiency conditions are met. Otherwise you penalize people for barriers the organization hasn't removed.",
              "Every metric needs an owner and a response threshold. Here the right response to 71% access is to escalate the access defect, not to manage performance."
            ] }
        ]
      },
      {
        title: "Scorecard design rules",
        blocks: [
          { type: "list", items: [
            "Establish a baseline before launch whenever possible.",
            "Segment data by site, shift, role, tenure, or access condition to detect uneven adoption.",
            "Use both leading and lagging indicators.",
            "Pair productivity with quality and compliance guardrails.",
            "Assign a named owner and response threshold to every metric.",
            "Define what decision will be made if the metric moves outside tolerance. If there's no decision, reconsider the metric.",
            "Don't confuse survey positivity with correct behavior or business value."
          ] },
          { type: "quiz", id: "mg6-q", questions: [
            { q: "Why segment adoption data?",
              options: ["To find individuals to discipline.", "Aggregate results can hide unequal access, site-specific barriers, shift differences, or capability gaps.", "Because more charts look more thorough.", "To compare teams for rankings."],
              answer: 1, explain: "Averages hide the uneven conditions that explain most adoption gaps." },
            { q: "A metric has no defined response if it moves outside tolerance. What should you do?",
              options: ["Keep it; more data is always better.", "Define the decision it should trigger, or reconsider whether to track it.", "Report it monthly anyway.", "Hide it from the scorecard."],
              answer: 1, explain: "A metric that triggers no decision adds noise. Every metric needs an owner and a response threshold." }
          ] }
        ]
      }
    ]
  },

  {
    id: "mg7", part: "path", track: "mgr", minutes: 9,
    title: "Resistance, risk, and escalation",
    summary: "Work through an escalation scenario: protect speaking up, contain real risk, and apply accountability only when it's fair.",
    screens: [
      {
        title: "Resistance management principles",
        blocks: [
          { type: "list", items: [
            "Don't personalize resistance. Diagnose the system, history, identity, workload, capability, trust, and fairness factors.",
            "Don't reward bypass behavior just because the concern is valid. Use the approved process while escalating legitimate risk.",
            "Protect speaking up. Retaliation or public humiliation suppresses the evidence leaders need.",
            "Close the feedback loop. Silence after concerns are raised teaches disengagement.",
            "Use progressive accountability only after expectations, enablement, and evidence are clear.",
            "Document decisions and guidance changes so global teams get the same source of truth."
          ] },
          { type: "callout", tone: "rcm", title: "RCM safeguard", html: "Managers shouldn't make independent coding, billing, payer-contract, compliance, privacy, or system-security interpretations beyond their authority. Route questions to the accountable function and communicate verified guidance." }
        ]
      },
      {
        title: "Scenario: “the routing is broken”",
        blocks: [
          { type: "sim", id: "mg7-sim", title: "Escalation decision simulation",
            setup: "Jordan, one of your Team Leaders, catches you after a meeting: “My team says the new routing is broken. They want to go back to the old template until it's fixed, and three of them already have.”",
            steps: [
              { label: "First question", context: "What do you do first?",
                options: [
                  { text: "Tell Jordan to let them use the old template. The concern sounds valid.", correct: false,
                    feedback: "That rewards bypass behavior before you know anything. A valid concern doesn't authorize an unapproved workaround." },
                  { text: "Ask Jordan whether any of the examples involve immediate compliance, privacy, security, patient, client, or financial risk.", correct: true,
                    feedback: "Start at the top of the escalation tree. Immediate risk determines whether you need formal containment before anything else." },
                  { text: "Tell Jordan to issue warnings to the three people using the old template.", correct: false,
                    feedback: "Accountability before diagnosis punishes people who may have spotted a real defect, and it teaches the whole team to stay quiet." }
                ] },
              { label: "Immediate risk", context: "Jordan checks. One example shows an account with a privacy restriction landing in an unrestricted queue.",
                options: [
                  { text: "Contain it and escalate formally through the privacy and compliance route now, with interim guidance to the team.", correct: true,
                    feedback: "Immediate privacy risk goes through formal escalation and containment right away, with clear interim guidance so people know what to do meanwhile." },
                  { text: "Fix it yourself by changing the queue permissions.", correct: false,
                    feedback: "That's a system-security decision beyond your authority, and it leaves no record. Route it to the accountable function." },
                  { text: "Add it to next week's governance agenda.", correct: false,
                    feedback: "Immediate privacy risk can't wait a week. It needs the formal containment route now." }
                ] },
              { label: "Policy ambiguity", context: "The privacy issue is contained. The other complaints turn out to be Team Leaders reading the exception rule two different ways, and both readings are defensible.",
                options: [
                  { text: "Let each Team Leader use their own reading until someone complains.", correct: false,
                    feedback: "Two readings means inconsistent work and an unfair experience for employees. Ambiguity needs an owner." },
                  { text: "Assign the workflow owner to resolve it, publish interim guidance in the single source of truth, and log the decision.", correct: true,
                    feedback: "A validated design defect or policy ambiguity needs a named owner, interim guidance, and a documented decision so every site gets the same answer." },
                  { text: "Tell employees to use whichever reading feels right.", correct: false,
                    feedback: "That pushes an organizational ambiguity onto individuals and guarantees inconsistent results." }
                ] },
              { label: "Accountability", context: "A week later, one specialist (trained, observed proficient, with confirmed access, and who has seen the interim guidance) is still using the retired template.",
                options: [
                  { text: "Raise it in the team huddle as an example of what not to do.", correct: false,
                    feedback: "Public humiliation suppresses speaking up across the whole team, and you need that speaking up. It's what surfaced the privacy issue." },
                  { text: "Apply fair accountability consistent with policy, documented privately, while continuing to welcome concerns.", correct: true,
                    feedback: "Expectations, enablement, and evidence are now clear, so accountability is appropriate. Handle it privately and consistently." },
                  { text: "Let it go. They raised the original concern, after all.", correct: false,
                    feedback: "Raising a valid concern earlier doesn't exempt someone from a clear expectation now. Inconsistency is a Fairness threat to everyone else." }
                ] },
              { label: "Close the loop", context: "The routing defect is fixed and the exception rule is clarified. What now?",
                options: [
                  { text: "Fix things quietly; nobody needs to know.", correct: false,
                    feedback: "Silence after people raise concerns teaches them to stop raising concerns." },
                  { text: "Tell Jordan's team what was found, what changed, and what stays the same, and thank the people who raised it.", correct: true,
                    feedback: "Closing the loop visibly turns this episode into proof that speaking up works, which is your best early-warning system." },
                  { text: "Send Jordan a short email confirming it's resolved.", correct: false,
                    feedback: "Better than nothing, but the people who raised the concern need to hear the outcome directly." }
                ] }
            ],
            key: [
              "Work the escalation tree from the top: immediate risk, then design defect or ambiguity, then operational barriers, then disagreement with a valid process, and only then accountability.",
              "The “resistant” team found a real privacy defect. Punishing them at step one would have buried it.",
              "Protecting speaking up and holding accountability aren't opposites. You did both, in the right order.",
              "Stay within your authority. Route coding, billing, privacy, and security interpretations to the accountable function."
            ] }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "mg7-q", questions: [
            { q: "When should a Manager pause or contain part of a change?",
              options: ["Whenever employees complain.", "When defined risk thresholds are breached or accountable governance requires review, especially for compliance, privacy, security, patient, client, or material financial risk.", "Only when the sponsor agrees.", "Never. Pausing loses momentum."],
              answer: 1, explain: "Containment is triggered by defined risk thresholds and governance, not by volume of complaints." },
            { q: "The main barrier is that one site lacks staffing to complete practice. Where does this sit on the escalation tree?",
              options: ["Immediate risk: use formal containment.", "Design defect: assign an owner.", "Operational barrier: remove it and provide support.", "Accountability: apply policy."],
              answer: 2, explain: "Access, staffing, skill, and workload barriers are operational. Remove them and provide support." }
          ] }
        ]
      }
    ]
  },

  {
    id: "mg8", part: "path", track: "mgr", minutes: 12, capstone: true,
    title: "Capstone: global RCM transformation",
    summary: "Make the calls on a three-part global transformation, then build your own change charter.",
    screens: [
      {
        title: "The case",
        blocks: [
          { type: "p", html: "A global RCM operation is implementing three connected changes: an AI-assisted account-prioritization feature, revised quality measures focused on decision accuracy, and a new productivity methodology. The executive sponsor expects rapid value. The pilot site reports promising turnaround improvement, but other sites have different payer mix, staffing, learning maturity, and system configurations." },
          { type: "sim", id: "mg8-sim", title: "Make the calls",
            setup: "You lead the Managers across three sites. Six complications land on your desk over the first month.",
            steps: [
              { label: "Productivity comparison", context: "Several Managers want to compare productivity across sites starting next week, “to create healthy urgency.” Access and practice time are still uneven.",
                options: [
                  { text: "Agree. Visible comparison drives urgency.", correct: false,
                    feedback: "Comparing under unequal conditions penalizes people for barriers the organization hasn't removed, and it erodes trust in the whole change." },
                  { text: "Hold comparisons until access and defined proficiency conditions are met, and pair speed with accuracy, rework, and compliance measures.", correct: true,
                    feedback: "Fair comparison needs equivalent conditions, and speed never stands alone without guardrails." },
                  { text: "Compare privately among Managers only.", correct: false,
                    feedback: "Private comparisons still drive decisions and pressure, and they leak. The conditions problem remains." }
                ] },
              { label: "Mixed answers", context: "Team Leaders are getting different answers from Operations, Quality, and IT.",
                options: [
                  { text: "Have each function publish its own FAQ.", correct: false,
                    feedback: "Three FAQs institutionalize the inconsistency." },
                  { text: "Create one verified source of truth with a change log, an exception library, office hours, and a defined response time.", correct: true,
                    feedback: "Enablement depends on consistency. A single verified source, plus a way to get fast answers, stops the rumor network." },
                  { text: "Tell Team Leaders to use their judgment.", correct: false,
                    feedback: "That pushes an organizational alignment problem onto individuals and guarantees inconsistent practice." }
                ] },
              { label: "Fear about roles", context: "Employees fear the AI recommendations will replace their judgment, or their roles.",
                options: [
                  { text: "Reassure everyone: “No one will lose their job.”", correct: false,
                    feedback: "If that hasn't been decided, you're promising an outcome you can't guarantee, and broken promises are hard to recover from." },
                  { text: "Avoid the topic until there's more information.", correct: false,
                    feedback: "Silence lets the rumor become the narrative." },
                  { text: "Clarify that people remain accountable for the decision, state what's decided and what's still unknown, and avoid promising role outcomes that haven't been decided.", correct: true,
                    feedback: "Clarity over certainty. You address the fear honestly, reinforce human accountability, and don't overpromise." }
                ] },
              { label: "Compliance review", context: "Compliance requests additional review of a subset of cases before they're processed under the new prioritization.",
                options: [
                  { text: "Push back, citing the sponsor's timeline.", correct: false,
                    feedback: "Governance requirements aren't negotiable against a timeline. Speed can't override compliance." },
                  { text: "Contain that subset per Compliance's guidance, communicate interim instructions, and update the plan.", correct: true,
                    feedback: "Governance is part of the design. Containing the subset protects the change and the organization." },
                  { text: "Proceed and review the cases afterward.", correct: false,
                    feedback: "Reviewing after processing defeats the purpose of the review." }
                ] },
              { label: "Celebrating the pilot", context: "The pilot team wants to announce a big win on speed. Rework hasn't stabilized yet.",
                options: [
                  { text: "Announce it now to build momentum.", correct: false,
                    feedback: "A win that hides a guardrail problem destroys credibility when the rework shows up." },
                  { text: "Hold until the result is verified: faster risk identification with stable or improved accuracy, and no compliance deterioration.", correct: true,
                    feedback: "A credible short-term win is verified, relevant, linked to the change, and doesn't hide guardrail deterioration." },
                  { text: "Announce it with a footnote about rework.", correct: false,
                    feedback: "People remember the headline, not the footnote. Verify first." }
                ] },
              { label: "Portfolio collision", context: "Two other major initiatives will affect the same employees in the same month.",
                options: [
                  { text: "Ask teams to absorb all three; it's only a month.", correct: false,
                    feedback: "“Absorb it” isn't a capacity plan. Overload shows up as errors, workarounds, and fatigue." },
                  { text: "Sequence the overlapping launches, remove nonessential meetings and reports, and protect practice and stabilization time.", correct: true,
                    feedback: "You named the collision and made trade-offs, which is what portfolio discipline means." },
                  { text: "Run all three and approve overtime.", correct: false,
                    feedback: "Overtime adds capacity briefly but increases fatigue and error risk, and it doesn't fix the learning-load collision." }
                ] }
            ],
            key: [
              "Coalition: sponsor, Operations, Quality, Compliance, IT, Training, site leadership, and affected-role representation, with named decision rights.",
              "Narrative: connect to risk-based prioritization and quality, clarify human accountability, acknowledge access and learning differences, and don't promise undecided role outcomes.",
              "Measures: no productivity comparison until access and proficiency conditions are met. Pair speed with accuracy, rework, compliance, and employee-impact guardrails.",
              "Anchor: update SOPs, QA rubrics, onboarding, access governance, and performance routines, and set a retirement plan for legacy tools."
            ] }
        ]
      },
      {
        title: "Your change charter",
        blocks: [
          { type: "p", html: "This is the tool you'll take back to work. Use a change you're accountable for. Fill every field; short, specific answers are better than long general ones." },
          { type: "form", id: "mg8-charter", title: "Change charter",
            fields: [
              { id: "case", label: "Strategic case and value at stake" },
              { id: "coal", label: "Sponsor and coalition" },
              { id: "pop", label: "Affected populations and impact" },
              { id: "beh", label: "Future-state behaviors" },
              { id: "nonneg", label: "Non-negotiables and local choices" },
              { id: "rights", label: "Decision rights and escalation" },
              { id: "tl", label: "Team Leader enablement" },
              { id: "cap", label: "Capacity source and legacy work removed" },
              { id: "stake", label: "Stakeholder engagement" },
              { id: "adopt", label: "Adoption and proficiency metrics" },
              { id: "out", label: "Outcome and guardrails" },
              { id: "wins", label: "Short-term wins" },
              { id: "sustain", label: "Sustainment and ownership after project close" }
            ],
            saveLabel: "Save my charter" },
          { type: "reflect", id: "mg8-close", prompt: "What's one thing you'll do differently in the next seven days, and what evidence will show progress?" }
        ]
      }
    ]
  }
  ],

  /* =====================================================================
     FINAL KNOWLEDGE CHECK — 4 shared + 6 path-specific = 10 per learner
     ===================================================================== */
  finalCheck: {
    passMark: 80,
    questions: [
      { id: "s1", track: "all", q: "Go-live was two weeks ago and training is complete, but half the team still uses a workaround. What does this tell you?",
        options: ["The change failed.", "The change event is complete; the human transition isn't.", "The team needs disciplinary action.", "The workaround should become the standard."],
        answer: 1, explain: "Launch and training show the event happened. Adoption depends on transition, which takes longer and needs support and reinforcement." },
      { id: "s2", track: "all", q: "An employee supports the change but can't get the time to practice during peak volume. What type of pushback is this?",
        options: ["Information gap", "Design feedback", "Capability gap", "Accountability issue"],
        answer: 2, explain: "Supportive but lacking practice, time, skill, or access is a capability gap. Remove the barrier." },
      { id: "s3", track: "all", q: "In a meeting with participants across several countries, nobody asks questions after you explain a change. What should you conclude?",
        options: ["Everyone understood and agrees.", "Silence isn't necessarily agreement. Check understanding by asking people to explain it in their own words, and offer other channels for questions.", "The group is disengaged.", "The message was too long."],
        answer: 1, explain: "Communication norms vary. Silence can mean processing, politeness, or confusion. Check through explanation and offer more than one channel." },
      { id: "s4", track: "all", q: "Which phrase best handles a valid concern without encouraging a workaround?",
        options: ["“You're right; this won't work.”", "“That's a valid risk to investigate. Please share the example through the issue log while we keep following the current approved guidance.”", "“Just do it.”", "“Everyone hates change.”"],
        answer: 1, explain: "Validate the risk, route the evidence, and keep the approved process in place." },

      { id: "t1", track: "tl", q: "A trained employee can explain the new process but can't complete it under normal volume. What's the likely barrier?",
        options: ["Awareness", "Desire", "Knowledge", "Ability"],
        answer: 3, explain: "Ability: they know it but can't yet do it reliably in real conditions. Provide realistic practice, observation, feedback, and barrier removal." },
      { id: "t2", track: "tl", q: "A Team Leader says, “Don't ask questions; the decision is final.” Which SCARF domains are most threatened?",
        options: ["Relatedness only", "Autonomy and Certainty, and potentially Status and Fairness", "Status only", "None"],
        answer: 1, explain: "Removing voice threatens Autonomy; refusing questions leaves Certainty gaps; dismissal can feel like a Status and Fairness threat." },
      { id: "t3", track: "tl", q: "When is an accountability response appropriate?",
        options: ["When someone disagrees publicly.", "When expectations and rationale are clear, access and support are available, ability has been demonstrated, and the behavior still isn't followed.", "As soon as productivity drops.", "When the Manager requests it."],
        answer: 1, explain: "Accountability follows enablement and evidence, never before." },
      { id: "t4", track: "tl", q: "In the 5L conversation, what does the Lock step require?",
        options: ["Ending the conversation politely.", "Agreeing on action, owner, date, measure, and follow-up.", "Restating the policy firmly.", "Escalating to the Manager."],
        answer: 1, explain: "Lock turns the conversation into commitments that can be checked: who does what, by when, measured how, and when you'll follow up." },
      { id: "t5", track: "tl", q: "What's the first step before challenging an RCM workflow?",
        options: ["Try the new method quietly.", "Define the problem with evidence and identify the required governance and safeguards before testing.", "Ask the team to vote.", "Update the job aid."],
        answer: 1, explain: "Evidence and governance come first, so improvement never bypasses compliance, privacy, or client requirements." },
      { id: "t6", track: "tl", q: "New hires accept every AI recommendation without review. What's the best response?",
        options: ["Praise their speed.", "Use contrasting examples and require a rationale before accepting or rejecting a recommendation.", "Turn the feature off.", "Tell them to trust their instincts."],
        answer: 1, explain: "Overreliance is a Knowledge and Ability gap. Requiring a rationale keeps human accountability in place." },

      { id: "m1", track: "mgr", q: "Training completion is 100%, but use of the old workflow remains high. What does this show?",
        options: ["The change succeeded.", "Activity is complete, but adoption isn't. Diagnose the barrier and operating conditions.", "Training must be repeated.", "Employees are resistant."],
        answer: 1, explain: "Training shows exposure, not adoption. Find what in the system still rewards the old way." },
      { id: "m2", track: "mgr", q: "Which is a sponsor action rather than sponsor messaging?",
        options: ["An endorsement email", "Allocating resources, resolving priority conflicts, making decisions, removing barriers, and holding leaders accountable", "A motivational town hall opening", "An intranet article"],
        answer: 1, explain: "Sponsorship shows in decisions and resources; messaging alone asks people to change while the system stays the same." },
      { id: "m3", track: "mgr", q: "Why segment adoption data?",
        options: ["To rank individuals.", "Aggregate results can hide unequal access, site-specific barriers, shift differences, or capability gaps.", "To make reports longer.", "For audit purposes only."],
        answer: 1, explain: "Segmentation reveals the uneven conditions that averages hide." },
      { id: "m4", track: "mgr", q: "What makes a short-term win credible?",
        options: ["It's announced quickly.", "It's verified, relevant to stakeholders, linked to the change, and doesn't hide guardrail deterioration.", "The sponsor likes it.", "It shows the biggest percentage improvement."],
        answer: 1, explain: "An unverified win, or one hiding a guardrail failure, damages credibility when the truth surfaces." },
      { id: "m5", track: "mgr", q: "When should a Manager pause or contain part of a change?",
        options: ["When complaints increase.", "When defined risk thresholds are breached or accountable governance requires review, especially for compliance, privacy, security, patient, client, or material financial risk.", "Only with sponsor approval.", "Never."],
        answer: 1, explain: "Containment is triggered by risk thresholds and governance, not by complaint volume." },
      { id: "m6", track: "mgr", q: "A sponsor asks you to launch a significant new initiative to teams already absorbing two others. What's the correct principle?",
        options: ["Teams can absorb it if motivated.", "Never add significant change without naming the capacity source: what will be stopped, paused, sequenced, or resourced.", "Launch it and monitor fatigue.", "Delay telling the teams."],
        answer: 1, explain: "“Absorb it” isn't a capacity plan. Make the trade-off explicit." }
    ]
  }
};
