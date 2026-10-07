/* PART 2 — TEAM LEADER PATH (tailored by function) */
(function () {
  const V = window.CV;

  window.COURSE.modules.push(
  {
    id: "tl1", part: "path", track: "tl", minutes: 9,
    title: "Translate change into meaning",
    summary: V({ ops: "Answer the four questions your team will ask about Smart Queue, and build a 60-second change story that's clear, credible, and honest about unknowns.",
                 sup: "Answer the four questions your team will ask about One Front Door, and build a 60-second change story that's clear, credible, and honest about unknowns." }),
    screens: [
      {
        title: "The four questions every team asks",
        blocks: [
          { type: "p", html: "Whatever the change, people need four answers: <strong>why</strong>, <strong>what</strong>, <strong>what it means for me</strong>, and <strong>what happens next</strong>. A complete message acknowledges both the benefit and the effort, and separates what's decided, what's open for input, and what's still unknown." },
          { type: "match", id: "tl1-four", title: V({ ops: "Match each question to a strong Smart Queue answer", sup: "Match each question to a strong One Front Door answer" }),
            prompt: "Select a question, then the leader wording that answers it.",
            left: [ { id: "why", text: "Why?" }, { id: "what", text: "What?" }, { id: "me", text: "What does it mean for me?" }, { id: "next", text: "What happens next?" } ],
            right: V({
              ops: [
                { id: "a", text: "“We keep reworking the same accounts and routing them inconsistently, which delays resolution.”" },
                { id: "b", text: "“The queue order and escalation route change. Documentation standards stay the same.”" },
                { id: "c", text: "“Expect a temporary dip while you learn it. Practice time and SME support are available.”" },
                { id: "d", text: "“We'll practice today, use the job aid, and review stuck accounts in every huddle.”" } ],
              sup: [
                { id: "a", text: "“Requests get lost across inboxes and chats, and Operations can't see where theirs stand.”" },
                { id: "b", text: "“Requests now come through the portal, with categories and SLA tiers. Our service standards stay the same.”" },
                { id: "c", text: "“Expect a slower first two weeks. Practice tickets and a floor-walker are available.”" },
                { id: "d", text: "“We'll practice in the sandbox today, use the category guide, and review stuck requests at every stand-up.”" } ]
            }),
            pairs: { why: "a", what: "b", me: "c", next: "d" },
            key: [
              "“What?” is strongest when it also names what isn't changing. Stability is reassuring and cuts down rumor.",
              "“What does it mean for me?” is the question leaders most often skip. Acknowledging a dip is credible; promising none is not.",
              V({ ops: "“What happens next?” turns a message into a plan: practice, tools, and a routine for questions in the huddle.", sup: "“What happens next?” turns a message into a plan: practice, tools, and a routine for questions at stand-up." })
            ] }
        ]
      },
      {
        title: "Spot the problems",
        blocks: [
          { type: "p", html: V({ ops: "A fellow Team Leader drafted this message for a team spread across two time zones. It's well-intentioned, but five sentences will cause trouble.",
                                 sup: "A fellow Team Leader drafted this message for a team covering day and night shifts at two sites. It's well-intentioned, but five sentences will cause trouble." }) },
          { type: "hotspot", id: "tl1-hunt", title: "Find the five problem sentences",
            prompt: "Click each sentence that would create confusion, false certainty, or threat. Sentences that are fine will tell you so.",
            find: 5,
            doc: V({
              ops: { kind: "message", heading: "Draft huddle message", segments: [
                { t: "Hi team, quick heads-up on next week.", fb: "A friendly opener is fine." },
                { t: "Starting Monday we move to the new CDM-linked PA routing.", target: true, fb: "Undefined acronyms and jargon. For a distributed team, use short sentences and define terms. “CDM” and “PA” may mean different things to different people." },
                { t: "Leadership has decided, so there's nothing to discuss.", target: true, fb: "This removes all voice (an Autonomy threat). The decision may be final, but input on risks and support is still needed." },
                { t: "It will definitely make everyone faster with zero disruption.", target: true, fb: "False certainty, and benefit with no acknowledged cost. When the learning dip arrives, your credibility goes with it." },
                { t: "The job aid and practice accounts are in the team folder.", fb: "Useful. It points people to concrete support." },
                { t: "Scheduling details will follow at some point.", target: true, fb: "An unknown with no owner, date, or time zone. Say who owns it and when the update will come." },
                { t: "Do you understand?", target: true, fb: "This invites a polite “yes” and tells you nothing. Ask people to explain it in their own words instead." },
                { t: "Thanks for your flexibility.", fb: "A courteous close is fine." } ] },
              sup: { kind: "message", heading: "Draft stand-up message", segments: [
                { t: "Hi team, quick heads-up on next week.", fb: "A friendly opener is fine." },
                { t: "Starting Monday we move to the new ITSM portal with RBAC-based L1/L2 routing.", target: true, fb: "Jargon and undefined acronyms. Not everyone on a mixed IT, HR, and WFM team knows what ITSM, RBAC, or L1/L2 mean. Say it plainly." },
                { t: "Leadership has decided, so there's nothing to discuss.", target: true, fb: "This removes all voice (an Autonomy threat). The decision may be final, but input on risks and support is still needed." },
                { t: "Ops will love it, and nothing will slow down.", target: true, fb: "False certainty about your internal customers, with no acknowledged cost. When the first slow week arrives, so do the escalations." },
                { t: "The category guide and sandbox logins are in the team channel.", fb: "Useful. It points people to concrete support." },
                { t: "Night-shift coverage details will follow at some point.", target: true, fb: "An unknown with no owner or date, aimed at the group most likely to feel left out. Say who owns it and when the update comes." },
                { t: "Does everyone understand?", target: true, fb: "This invites a polite “yes” and tells you nothing. Ask someone to walk through logging a tricky request instead." },
                { t: "Thanks for your flexibility.", fb: "A courteous close is fine." } ] }
            }),
            key: [
              "Communication check: short sentences, defined terms, explicit dates, owners, and shifts or time zones.",
              "Never create false certainty. Separate what's decided, what's open for input, and what's still unknown, and name who owns each unknown.",
              "Silence isn't agreement. Check understanding through explanation, and offer more than one channel for questions: live, chat, form, and one-to-one."
            ] }
        ]
      },
      {
        title: "Build your 60-second change story",
        blocks: [
          { type: "p", html: V({
            ops: "Pick a real change you're leading now, or one you led recently, and keep it free of patient or client details. Draft a story you could tell your team in about a minute. A strong story isn't “selling” the change; it makes the reason, impact, and support understandable.",
            sup: "Pick a real change you're leading now, or one you led recently, and keep it free of employee or system details. Draft a story you could tell your team in about a minute. A strong story isn't “selling” the change; it makes the reason, impact, and support understandable." }) },
          { type: "form", id: "tl1-canvas", title: "Change story canvas",
            fields: [
              { id: "case", label: "Case for change", prompt: "What problem or opportunity makes action necessary now?" },
              { id: "future", label: "Future state", prompt: V({ ops: "What will be better, and for whom (team, client, patient)?", sup: "What will be better, and for whom (team, internal customers, the business)?" }) },
              { id: "shift", label: "Behavior shift", prompt: "What must people stop, start, and continue?" },
              { id: "bounds", label: "Boundaries", prompt: "What is non-negotiable? What is open for input?" },
              { id: "support", label: "Support", prompt: "What knowledge, practice, tools, time, and coaching are available?" },
              { id: "evidence", label: "Success evidence", prompt: "What early signs and outcome measures will show adoption and value?" },
              { id: "unknowns", label: "Unknowns", prompt: "What isn't decided yet, and when or how will updates come?" }
            ],
            saveLabel: "Save my canvas",
            key: [
              "Read it back and listen for three traps: fake certainty, benefits without any acknowledged cost, and unclear expectations.",
              "If your “Unknowns” field was hard to fill, look again. Almost every change has open questions, and naming them builds trust.",
              "Say it aloud to someone. Revise any sentence that sounds vague, defensive, or overly promotional."
            ] },
          { type: "reflect", id: "tl1-r1", prompt: "Read your story aloud once. Which sentence sounded most vague, defensive, or promotional, and how would you rewrite it?" }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "tl1-q", questions: [
            { q: V({ ops: "What's the best way to check that your team, spread across two time zones, understood Smart Queue?", sup: "What's the best way to check that your day and night coordinators understood One Front Door?" }),
              options: ["Ask, “Does everyone understand?”", "Assume understanding if nobody asks questions.", V({ ops: "Ask people to explain the change, or route a sample account, in their own words.", sup: "Ask people to explain the change, or log a sample request, in their own words." }), "Resend the email in bold."],
              answer: 2, explain: "Explanation reveals real understanding. Silence or a yes to a closed question often hides confusion, especially across shifts and cultures." },
            { q: V({ ops: "A decision about the new escalation route is still open. What should your huddle message say?", sup: "A decision about night-shift approvals is still open. What should your stand-up message say?" }),
              options: ["Nothing until it's decided.", "That it's still being decided, who owns it, and when you'll update the team.", "A best guess so people aren't anxious.", "That it probably won't affect anyone."],
              answer: 1, explain: "Clarity over certainty: name the unknown, the owner, and when updates come. Guessing creates false certainty you'll have to walk back." }
          ] }
        ]
      }
    ]
  },

  {
    id: "tl2", part: "path", track: "tl", minutes: 10,
    title: "Diagnose before you solve",
    summary: "Use ADKAR to find the earliest unresolved barrier for each person on your team, and match the response to the barrier.",
    screens: [
      {
        title: "ADKAR as a diagnostic",
        blocks: [
          { type: "p", html: "ADKAR describes five outcomes a person needs to adopt a change. The order matters: look for the <strong>earliest unresolved</strong> outcome and target that. More training won't fix weak Awareness or Desire, and more communication won't create Ability without practice." },
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
              "Knowledge and Ability are different. Knowing the steps in training isn't the same as doing them reliably when it's busy.",
              V({ ops: "Reinforcement is where changes quietly fail: the behavior is learned, then slides back when huddles, QA, and productivity targets still reward the old way.", sup: "Reinforcement is where changes quietly fail: the behavior is learned, then slides back when stand-ups, SLA reports, and grateful Ops managers still reward the old way." })
            ] },
          { type: "table", head: ["Outcome", "Barrier signal", "Your response"], rows: [
            ["Awareness", "“Why are we doing this?” “Nothing is wrong.”", V({ ops: "Connect the change to evidence, client impact, or risk. Explain what happens if nothing changes.", sup: "Connect the change to evidence, internal customer impact, or audit risk. Explain what happens if nothing changes." })],
            ["Desire", "“What's in it for us?” “I don't agree.”", "Explore impact and concerns. Offer real choices in how it's implemented. Clarify expectations."],
            ["Knowledge", V({ ops: "“Which queue does this go to?”", sup: "“Which category does this go in?”" }), "Focused instruction, examples, job aids, and checks for understanding."],
            ["Ability", "“I know the steps but can't do it quickly.”", "Deliberate practice, observation, feedback, time, access, and barrier removal."],
            ["Reinforcement", "“We went back to the old way.”", V({ ops: "Recognize, measure, coach, correct drift, and align huddles, QA, and targets.", sup: "Recognize, measure, coach, correct drift, and align stand-ups, SLA reports, and recognition." })]
          ] }
        ]
      },
      {
        title: V({ ops: "Case: five people, one Smart Queue", sup: "Case: five people, one front door" }),
        blocks: [
          { type: "p", html: V({ ops: "Smart Queue is live. Five people on your team are responding differently. For each, decide the likely first unresolved ADKAR outcome, then choose the response that fits.",
                                 sup: "One Front Door is live. Five people on your team are responding differently. For each, decide the likely first unresolved ADKAR outcome, then choose the response that fits." }) },
          { type: "profiles", id: "tl2-profiles", title: "Diagnose five team members",
            profiles: V({
              ops: [
                { id: "p1", name: "Imani", tag: "Denials specialist, 4 years", quote: "“Why are we even doing this? Our denial numbers look fine to me.”",
                  steps: [
                    { prompt: "What's the earliest unresolved outcome?", options: [
                      { text: "Awareness", correct: true, feedback: "Right. She can't yet explain why the change is needed. A validating question: “What have you heard about why this is changing?”" },
                      { text: "Desire", correct: false, feedback: "Not yet. She isn't disagreeing with the reason; she doesn't see one. Check Awareness first." },
                      { text: "Knowledge", correct: false, feedback: "She hasn't asked how to do anything. The gap is earlier: the why." },
                      { text: "Ability", correct: false, feedback: "There's no sign she can't perform. The gap is in understanding why." },
                      { text: "Reinforcement", correct: false, feedback: "She hasn't adopted it yet, so there's nothing to reinforce. Start earlier." } ] },
                    { prompt: "Which response fits?", options: [
                      { text: "Enroll her in the refresher training.", correct: false, feedback: "Training teaches how, not why. It uses her time without touching the barrier." },
                      { text: "Show her the aging and rework data behind the change, and what happens to high-risk accounts if nothing changes.", correct: true, feedback: "Connecting the change to evidence and the cost of doing nothing targets Awareness directly." },
                      { text: "Tell her the decision is final.", correct: false, feedback: "That answers whether, not why. You may get surface compliance while the doubt spreads." } ] } ] },
                { id: "p2", name: "Rafael", tag: "Senior specialist, morning shift", quote: "“I get the goal. But this logic dumps the hardest payers on the morning shift. That isn't fair.”",
                  steps: [
                    { prompt: "What's the earliest unresolved outcome?", options: [
                      { text: "Awareness", correct: false, feedback: "He says he gets the goal, so Awareness is in place." },
                      { text: "Desire", correct: true, feedback: "Right, likely Desire, with a Fairness concern. He understands why but has a real reason not to want it as designed." },
                      { text: "Knowledge", correct: false, feedback: "He clearly understands how the logic works; that's what he's objecting to." },
                      { text: "Ability", correct: false, feedback: "Nothing suggests he can't do it. The question is whether he wants to, and why." },
                      { text: "Reinforcement", correct: false, feedback: "He hasn't adopted it yet. Look earlier." } ] },
                    { prompt: "Which response fits?", options: [
                      { text: "Explore the concern, look at the workload distribution data together, and escalate the pattern to Grace if it holds, while the standard stays in place.", correct: true, feedback: "You treat the fairness concern as possible design feedback, gather evidence, and keep the expectation clear." },
                      { text: "Re-run the training so he understands the logic better.", correct: false, feedback: "He already understands it. Training wastes effort and signals you didn't listen." },
                      { text: "Remind him that senior people shouldn't complain.", correct: false, feedback: "This threatens Status and Fairness, and buries what could be a genuine design flaw." } ] } ] },
                { id: "p3", name: "Mei", tag: "Completed training last week", quote: "Mei completed the training but keeps sending accounts to the wrong queue.",
                  steps: [
                    { prompt: "What's the earliest unresolved outcome?", options: [
                      { text: "Awareness", correct: false, feedback: "Nothing suggests she doesn't understand why. She's trying to do it." },
                      { text: "Desire", correct: false, feedback: "She's attempting the new method, which suggests willingness." },
                      { text: "Knowledge", correct: true, feedback: "Possibly, but it could also be Ability. You can't tell from the outcome alone. Observe before deciding." },
                      { text: "Ability", correct: true, feedback: "Possibly, but it could also be Knowledge. You can't tell from the outcome alone. Observe before deciding." },
                      { text: "Reinforcement", correct: false, feedback: "She hasn't reached reliable use yet, so it's too early for Reinforcement." } ] },
                    { prompt: "Which response fits?", options: [
                      { text: "Resend the announcement with the rationale.", correct: false, feedback: "The why isn't her problem. More communication won't fix a how problem." },
                      { text: "Sit with her on a few live accounts and ask her to talk through her routing decisions.", correct: true, feedback: "Observation tells you whether she doesn't know the rule (Knowledge) or knows it but can't apply it under real conditions (Ability)." },
                      { text: "Start a performance conversation.", correct: false, feedback: "Ability hasn't been demonstrated, so accountability is premature and unfair." } ] } ] },
                { id: "p4", name: "Tomás", tag: "Strong performer", quote: "Tomás works the new queue correctly when observed, but reverts to his old order when volumes rise.",
                  steps: [
                    { prompt: "What's the earliest unresolved outcome?", options: [
                      { text: "Awareness", correct: false, feedback: "He uses the method when observed, so he knows why it matters." },
                      { text: "Desire", correct: false, feedback: "Possible, but the pattern points to production pressure, not unwillingness." },
                      { text: "Knowledge", correct: false, feedback: "He performs correctly when observed, so he knows the steps." },
                      { text: "Ability", correct: true, feedback: "Likely Ability under pressure, and possibly Reinforcement too. He can do it, but not yet reliably when volume spikes." },
                      { text: "Reinforcement", correct: true, feedback: "Likely Reinforcement, and possibly Ability under pressure too. Something makes the old way easier when volume spikes." } ] },
                    { prompt: "Which response fits?", options: [
                      { text: "Retrain him from scratch.", correct: false, feedback: "He already knows it. Retraining ignores what's pulling him back." },
                      { text: "Look at what volume pressure, huddles, and targets reward; protect some practice at speed; recognize correct use and correct drift early.", correct: true, feedback: "You address both practice under real conditions and the system reinforcing the old behavior." },
                      { text: "Explain the reasons for the change again.", correct: false, feedback: "He understands the reasons. The gap is in the operating conditions." } ] } ] },
                { id: "p5", name: "Aisha", tag: "Joined last month", quote: "“I want to use it. But which queue does an account go to when the payer is secondary?”",
                  steps: [
                    { prompt: "What's the earliest unresolved outcome?", options: [
                      { text: "Awareness", correct: false, feedback: "She's not asking why." },
                      { text: "Desire", correct: false, feedback: "She says she wants to use it." },
                      { text: "Knowledge", correct: true, feedback: "Right. She's missing a specific decision rule. Validate with: “Talk me through the steps and decision points.”" },
                      { text: "Ability", correct: false, feedback: "She can't do it yet because she doesn't know the rule, which is earlier than Ability." },
                      { text: "Reinforcement", correct: false, feedback: "She hasn't adopted it yet." } ] },
                    { prompt: "Which response fits?", options: [
                      { text: "Remind her of the benefits so she stays motivated.", correct: false, feedback: "She's already motivated. Selling the change wastes the moment." },
                      { text: "Walk through two secondary-payer examples with the job aid, then ask her to route a third and explain why.", correct: true, feedback: "Focused instruction with examples and a check for understanding targets Knowledge." },
                      { text: "Give her more time; she'll work it out.", correct: false, feedback: "Without the rule, more time means more inconsistent routing." } ] } ] }
              ],
              sup: [
                { id: "p1", name: "Lena", tag: "Access specialist, 5 years", quote: "“Why are we even doing this? Nobody's complained about our response times.”",
                  steps: [
                    { prompt: "What's the earliest unresolved outcome?", options: [
                      { text: "Awareness", correct: true, feedback: "Right. She can't yet explain why the change is needed. A validating question: “What have you heard about why this is changing?”" },
                      { text: "Desire", correct: false, feedback: "Not yet. She isn't disagreeing with the reason; she doesn't see one. Check Awareness first." },
                      { text: "Knowledge", correct: false, feedback: "She hasn't asked how to do anything. The gap is earlier: the why." },
                      { text: "Ability", correct: false, feedback: "There's no sign she can't perform. The gap is in understanding why." },
                      { text: "Reinforcement", correct: false, feedback: "She hasn't adopted it yet, so there's nothing to reinforce. Start earlier." } ] },
                    { prompt: "Which response fits?", options: [
                      { text: "Enroll her in the portal refresher training.", correct: false, feedback: "Training teaches how, not why. It uses her time without touching the barrier." },
                      { text: "Show her the evidence: requests lost or duplicated across inboxes, how long new hires wait for access, and the audit finding on undocumented approvals.", correct: true, feedback: "As an access specialist, the audit finding will land. Connecting the change to evidence targets Awareness directly." },
                      { text: "Tell her the decision is final.", correct: false, feedback: "That answers whether, not why. You may get surface compliance while the doubt spreads." } ] } ] },
                { id: "p2", name: "Marcus", tag: "Senior coordinator, 11 years", quote: "“I get the goal. But making Ops managers fill in a form treats them like strangers. That's not how we built trust.”",
                  steps: [
                    { prompt: "What's the earliest unresolved outcome?", options: [
                      { text: "Awareness", correct: false, feedback: "He says he gets the goal, so Awareness is in place." },
                      { text: "Desire", correct: true, feedback: "Right, likely Desire, with Status and Relatedness concerns. His relationships are his professional identity, and he sees the portal threatening them." },
                      { text: "Knowledge", correct: false, feedback: "He knows exactly how the portal works; that's what he's objecting to." },
                      { text: "Ability", correct: false, feedback: "Nothing suggests he can't use it. The question is whether he wants to, and why." },
                      { text: "Reinforcement", correct: false, feedback: "He hasn't adopted it yet. Look earlier." } ] },
                    { prompt: "Which response fits?", options: [
                      { text: "Explore what he's protecting, and involve him in designing how key Ops managers are introduced to the portal, while the portal stays the route.", correct: true, feedback: "You turn his relationships into an asset for the change instead of a casualty of it, and keep the expectation clear." },
                      { text: "Re-run the portal training so he sees how easy it is.", correct: false, feedback: "Ease isn't his objection. Training wastes effort and signals you didn't listen." },
                      { text: "Remind him the portal is about efficiency, not feelings.", correct: false, feedback: "This threatens Status directly and dismisses the trust he's built, which the change actually needs." } ] } ] },
                { id: "p3", name: "Ana", tag: "Completed training last week", quote: "Ana completed the training but keeps choosing the wrong request category.",
                  steps: [
                    { prompt: "What's the earliest unresolved outcome?", options: [
                      { text: "Awareness", correct: false, feedback: "Nothing suggests she doesn't understand why. She's trying to do it." },
                      { text: "Desire", correct: false, feedback: "She's using the portal, which suggests willingness." },
                      { text: "Knowledge", correct: true, feedback: "Possibly, but it could also be Ability. You can't tell from the outcome alone. Observe before deciding." },
                      { text: "Ability", correct: true, feedback: "Possibly, but it could also be Knowledge. You can't tell from the outcome alone. Observe before deciding." },
                      { text: "Reinforcement", correct: false, feedback: "She hasn't reached reliable use yet, so it's too early for Reinforcement." } ] },
                    { prompt: "Which response fits?", options: [
                      { text: "Resend the launch announcement with the rationale.", correct: false, feedback: "The why isn't her problem. More communication won't fix a how problem." },
                      { text: "Sit with her on a few live requests and ask her to talk through her category choices.", correct: true, feedback: "Observation tells you whether she doesn't know the category rules (Knowledge) or knows them but can't apply them under real conditions (Ability)." },
                      { text: "Start a performance conversation.", correct: false, feedback: "Ability hasn't been demonstrated, so accountability is premature and unfair." } ] } ] },
                { id: "p4", name: "Ravi", tag: "Strong performer", quote: "Ravi logs everything correctly when it's quiet, but handles requests by chat when month-end volume spikes.",
                  steps: [
                    { prompt: "What's the earliest unresolved outcome?", options: [
                      { text: "Awareness", correct: false, feedback: "He uses the portal when it's quiet, so he knows why it matters." },
                      { text: "Desire", correct: false, feedback: "Possible, but the pattern points to month-end pressure, not unwillingness." },
                      { text: "Knowledge", correct: false, feedback: "He logs correctly when it's quiet, so he knows the steps." },
                      { text: "Ability", correct: true, feedback: "Likely Ability under pressure, and possibly Reinforcement too. He can do it, but not yet reliably when twenty requests land at once." },
                      { text: "Reinforcement", correct: true, feedback: "Likely Reinforcement, and possibly Ability under pressure too. Something makes chat easier at month-end, probably grateful Ops managers." } ] },
                    { prompt: "Which response fits?", options: [
                      { text: "Retrain him from scratch.", correct: false, feedback: "He already knows it. Retraining ignores what's pulling him back." },
                      { text: "Look at what month-end pressure, stand-ups, and thank-you messages reward; practice fast triage; recognize correct use and correct drift early.", correct: true, feedback: "You address both practice at speed and the system reinforcing the old behavior." },
                      { text: "Explain the reasons for the portal again.", correct: false, feedback: "He understands the reasons. The gap is in the conditions at month-end." } ] } ] },
                { id: "p5", name: "Kofi", tag: "Covers the night shift", quote: "“I want to use it. But which category does a schedule swap go in when it also needs a system access change?”",
                  steps: [
                    { prompt: "What's the earliest unresolved outcome?", options: [
                      { text: "Awareness", correct: false, feedback: "He's not asking why." },
                      { text: "Desire", correct: false, feedback: "He says he wants to use it." },
                      { text: "Knowledge", correct: true, feedback: "Right. He's missing a specific rule for combined requests. Validate with: “Talk me through how you'd log it.”" },
                      { text: "Ability", correct: false, feedback: "He can't do it yet because he doesn't know the rule, which is earlier than Ability." },
                      { text: "Reinforcement", correct: false, feedback: "He hasn't adopted it yet." } ] },
                    { prompt: "Which response fits?", options: [
                      { text: "Remind him of the benefits so he stays motivated.", correct: false, feedback: "He's already motivated. Selling the change wastes the moment." },
                      { text: "Walk through two combined-request examples with the category guide, then ask him to log a third and explain why.", correct: true, feedback: "Focused instruction with examples and a check for understanding targets Knowledge, and works even though he's on nights." },
                      { text: "Tell him to ask the day shift in the morning.", correct: false, feedback: "That leaves requests sitting overnight and tells night shift they're an afterthought." } ] } ] }
              ]
            }),
            key: [
              "Five people, one change, five different barriers. A single team-wide fix (usually “more training”) would have helped one or two and wasted everyone else's time.",
              V({ ops: "The label isn't the point; validation is. For Mei and Tomás, two answers were defensible, and only observation could tell you which.", sup: "The label isn't the point; validation is. For Ana and Ravi, two answers were defensible, and only observation could tell you which." }),
              "A mismatched response doesn't just waste effort. It tells the person you didn't listen."
            ] }
        ]
      },
      {
        title: "Questions that validate a diagnosis",
        blocks: [
          { type: "table", head: ["Outcome", "Questions to ask"], rows: [
            ["Awareness", "“What have you heard about why this is changing?” “What problem is the change meant to solve?”"],
            ["Desire", "“What concerns you most about supporting this?” “What would make it more workable for you?”"],
            ["Knowledge", V({ ops: "“Talk me through the steps and decision points.” “Where would you go if an account doesn't match the job aid?”", sup: "“Talk me through the steps and decision points.” “Where would you go if a request doesn't fit any category?”" })],
            ["Ability", V({ ops: "“Show me how you'd work this account in the live queue.” “What slows or blocks you?”", sup: "“Show me how you'd log and route this request in the portal.” “What slows or blocks you?”" })],
            ["Reinforcement", "“What makes the old way easier to go back to?” “What feedback or reminder would help this stick?”"]
          ] },
          { type: "reflect", id: "tl2-r1", prompt: "Think of one person on your real team and the change you're leading. What's their earliest unresolved ADKAR outcome, what question would you ask to check, and what's one targeted response?" }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "tl2-q", questions: [
            { q: V({ ops: "A trained specialist can explain Smart Queue but can't work it at normal volume. What's the likely barrier?", sup: "A trained coordinator can explain the portal but can't keep up at normal volume. What's the likely barrier?" }),
              options: ["Awareness", "Desire", "Knowledge", "Ability"],
              answer: 3, explain: "They know it but can't do it reliably in real conditions. Provide realistic practice, observation, feedback, and barrier removal." },
            { q: V({ ops: "Several specialists ask, “Why are we doing this? Nothing is broken.” What's the least effective response?", sup: "Several coordinators ask, “Why are we doing this? Nothing is broken.” What's the least effective response?" }),
              options: ["Share the evidence behind the change.", "Schedule another training session on the new steps.", "Explain the consequences of not changing.", V({ ops: "Connect the change to client or quality impact.", sup: "Connect the change to internal customer or audit impact." })],
              answer: 1, explain: "That's an Awareness gap. Training teaches how, not why, so it won't move this barrier." }
          ] }
        ]
      }
    ]
  },

  {
    id: "tl3", part: "path", track: "tl", minutes: 8,
    title: "Reduce threat, increase agency",
    summary: "Use SCARF to spot avoidable threat in how change lands on your team, then rewrite messages so the standard stays clear and people keep dignity and voice.",
    screens: [
      {
        title: "The SCARF lens",
        blocks: [
          { type: "p", html: "SCARF names five social needs that change can threaten: Status, Certainty, Autonomy, Relatedness, and Fairness. It's a lens for avoidable threat, not a judgment about personality. The goal isn't to remove all discomfort; the goal is to stop adding threat that doesn't need to be there." },
          { type: "flip", id: "tl3-scarf", title: "Explore the five domains",
            cards: [
              { front: "Status", sub: "Do I still matter here?", back: V({ ops: "<strong>Threat:</strong> payer expertise seems devalued; the role feels smaller.<br><br><strong>Your move:</strong> name their expertise, and define how it contributes to the new queue (for example, reviewing exceptions).", sup: "<strong>Threat:</strong> relationships and know-how seem devalued; the role feels smaller.<br><br><strong>Your move:</strong> name their expertise, and define how it contributes (for example, shaping the request categories)." }) },
              { front: "Certainty", sub: "What happens next?", back: "<strong>Threat:</strong> unknown timeline, role, workload, or standard.<br><br><strong>Your move:</strong> say what's known, what's unknown, the next decision, and when updates will come." },
              { front: "Autonomy", sub: "Do I have any say?", back: "<strong>Threat:</strong> change feels imposed with no voice.<br><br><strong>Your move:</strong> offer real choices about how: practice order, who tests first, or how feedback is given." },
              { front: "Relatedness", sub: "Am I part of this?", back: V({ ops: "<strong>Threat:</strong> remote or other-shift colleagues feel left out.<br><br><strong>Your move:</strong> create inclusive huddles, peer buddies, and visible access to you.", sup: "<strong>Threat:</strong> night-shift or other-site colleagues feel left out.<br><br><strong>Your move:</strong> record stand-ups, pair buddies across shifts, and make yourself reachable." }) },
              { front: "Fairness", sub: "Is this applied evenly?", back: "<strong>Threat:</strong> workload, opportunity, communication, or consequences seem uneven.<br><br><strong>Your move:</strong> explain the criteria, apply standards consistently, and review who carries the extra load." }
            ],
            key: [
              "Most of these moves cost nothing but attention. Naming someone's expertise or stating the next update date lowers threat immediately.",
              "Keeping the non-negotiable clear is itself a Certainty move. Ambiguity about the standard is a threat too.",
              "Autonomy doesn't mean choosing whether to change. It means real choices about how."
            ] }
        ]
      },
      {
        title: "Threat-to-agency rewrites",
        blocks: [
          { type: "p", html: "Rewrite each message so the non-negotiable stays clear while unnecessary threat is reduced. Write your version first, then compare it with a model answer." },
          { type: "rewrite", id: "tl3-rewrite", title: "Rewrite the message",
            items: V({
              ops: [
                { original: "“The decision is final, so there's no point discussing it.”", model: "“The decision to move to Smart Queue is final. Your input is still needed on risks, support, and how we work it consistently.”", why: "Separates the decision (fixed) from the implementation (open), restoring Autonomy without reopening the decision." },
                { original: "“Everyone got the same training, so routing errors shouldn't happen.”", model: "“Everyone got the same introduction. We'll now check how it's going on live accounts and target support where needed.”", why: "Reframes training as exposure, not proficiency, and removes the implied blame, which lowers Status and Fairness threat." },
                { original: "“Someone with Daniel's experience shouldn't struggle with this.”", model: "“This change needs a new habit. Experience doesn't remove the need for practice, and your payer knowledge is exactly what we need for the exceptions.”", why: "Protects Status by making practice normal for everyone, and gives expertise a role in the new way." },
                { original: "“We can't answer that yet.”", model: "“That decision is still with the workflow owner. Grace will have an update for us by Thursday's huddle.”", why: "Turns a dead end into Certainty: who owns it, and when people will hear." } ],
              sup: [
                { original: "“The portal is happening, so there's no point discussing it.”", model: "“The decision to move to the portal is final. Your input is still needed on risks, support, and how we bring our internal customers along.”", why: "Separates the decision (fixed) from the implementation (open), restoring Autonomy without reopening the decision." },
                { original: "“Everyone got the same training, so requests shouldn't be miscategorized.”", model: "“Everyone got the same introduction. We'll now check how it's going on live requests and target support where needed.”", why: "Reframes training as exposure, not proficiency, and removes the implied blame, which lowers Status and Fairness threat." },
                { original: "“Someone with Marcus's experience shouldn't need help with a ticketing tool.”", model: "“This change needs a new habit. Experience doesn't remove the need for practice, and your relationships with Ops are exactly what we need to bring them along.”", why: "Protects Status by making practice normal for everyone, and gives his relationships a role in the new way." },
                { original: "“We can't answer that yet.”", model: "“That decision is still with IT Security. Elena will have an update for us by Thursday's stand-up.”", why: "Turns a dead end into Certainty: who owns it, and when people will hear." } ]
            }),
            key: [
              "Look at what every model answer keeps: the standard. None of them soften the requirement; they remove threat around it.",
              "The pattern is reusable: name what's fixed, name what's open, and name the next step.",
              "“We can't answer that yet” and “That's with the owner; update by Thursday” carry the same information. Only one builds trust."
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
            { q: V({ ops: "Night-shift specialists say Smart Queue updates always arrive after their shift ends. Which domains are most at risk?", sup: "Kofi says portal updates always arrive after the night shift ends. Which domains are most at risk?" }),
              options: ["Status and Autonomy", "Relatedness and Fairness", "Certainty only", "None. It's a scheduling issue."],
              answer: 1, explain: "Being left out of communication threatens Relatedness, and unequal access feels unfair. Give equivalent access and collect questions asynchronously." }
          ] }
        ]
      }
    ]
  },

  {
    id: "tl4", part: "path", track: "tl", minutes: 12,
    title: "The resistance conversation",
    summary: V({ ops: "Practice the 5L conversation (Listen, Label, Learn, Link, Lock) in a branching role-play with Daniel, your most experienced specialist.",
                 sup: "Practice the 5L conversation (Listen, Label, Learn, Link, Lock) in a branching role-play with Marcus, your most senior coordinator." }),
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
              { id: "l4", text: "Link", detail: V({ ops: "Connect to purpose, expectations, support, and the real barrier. “The quality checkpoint stays. Let's fix the access issue.”", sup: "Connect to purpose, expectations, support, and the real barrier. “Logging every request stays. Let's fix the category that keeps confusing people.”" }) },
              { id: "l5", text: "Lock", detail: V({ ops: "Agree action, owner, date, measure, and follow-up. “You'll test five accounts; I'll confirm the exception route; we review tomorrow.”", sup: "Agree action, owner, date, measure, and follow-up. “You'll log five combined requests; I'll confirm the category rule; we review tomorrow.”" }) }
            ],
            key: [
              "Listening first isn't softness. It's how you find out which of the four pushback types you're dealing with.",
              "Learn before you Link. If you link to purpose before you have evidence, it sounds like a rebuttal.",
              "Most conversations fail at Lock. “We'll see” leaves the concern open and the behavior unchanged."
            ] }
        ]
      },
      {
        title: V({ ops: "Role-play: Daniel and the new queue", sup: "Role-play: Marcus and the portal" }),
        blocks: [
          V({
          ops: { type: "sim", id: "tl4-sim", title: "Branching role-play",
            setup: "Daniel has nine years on the team and knows every payer's quirks. In this morning's huddle, with eight colleagues listening, he says: “This new follow-up workflow adds clicks and will kill our productivity. I'm going to use the old method until someone proves this works.” A couple of people nod.",
            steps: [
              { label: "In the huddle", context: "Everyone is watching to see what you do. What do you say?", options: [
                { text: "“This isn't optional. The pilot data proves it works, so let's move on.”", correct: false, feedback: "Leading with facts and authority in front of his peers threatens Daniel's Status and Autonomy. He hasn't been heard, so the room learns that concerns get shut down. You may get surface compliance while the workaround continues quietly." },
                { text: "“Fair point, the clicks do add up. Use whatever method works for now.”", correct: false, feedback: "You've publicly endorsed bypassing the required process. Others will follow, and you've granted an exception you don't have authority to give." },
                { text: "“Thanks for raising it; productivity matters. The new workflow is still the required process today. I want to understand exactly where the clicks add up, so let's talk right after huddle.”", correct: true, feedback: "You acknowledged the concern, held the boundary in front of the team, and moved the detail to a private conversation. Everyone heard that concerns are welcome and the standard stands." } ] },
              { label: "Listen", context: "After the huddle, Daniel opens with: “It's not just clicks. I've done follow-up for nine years and this feels like it was designed by people who've never worked a queue.”", options: [
                { text: "“Let's stick to facts, not feelings about who designed it.”", correct: false, feedback: "You've corrected him before he's finished. That minimizes him and stops the information you need." },
                { text: "“Go on. Tell me what concerns you most.”", correct: true, feedback: "Full attention, no rebuttal. Daniel explains: on Medicare Advantage follow-ups the workflow adds three screens per account, and notes have to be entered twice." },
                { text: "“I hear you, but the design team did consult experienced staff.”", correct: false, feedback: "That's a rebuttal dressed up as listening. He'll stop explaining and start defending." } ] },
              { label: "Label", context: "You've heard the full picture. How do you name it back?", options: [
                { text: "“So you think the whole workflow is a mistake.”", correct: false, feedback: "That exaggerates his position into something easy to dismiss. He raised two specific issues, not a blanket rejection." },
                { text: "“It sounds like the main issues are the extra screens on MA follow-ups and the double note entry, and that your experience wasn't part of the design.”", correct: true, feedback: "Accurate and specific, without agreeing the change is wrong. Naming the Status concern shows you heard what sat underneath the clicks." },
                { text: "“You're completely right. This is a bad design.”", correct: false, feedback: "Exaggerated agreement. You've validated a conclusion you can't support, and set up a promise you can't keep." } ] },
              { label: "Learn", context: "Now you need evidence. What do you ask?", options: [
                { text: "“Everyone finds new workflows slower at first. It'll pass.”", correct: false, feedback: "That dismisses the concern without testing it. If there's a real design defect, you've just buried it." },
                { text: "“How often does it happen, on which account types, and what's the effect on your daily volume? Can you show me two examples?”", correct: true, feedback: "You asked for pattern, frequency, impact, and concrete examples. That turns an opinion into something you can act on or escalate." },
                { text: "“Send me a list of everything wrong with it.”", correct: false, feedback: "An open-ended list invites broad opinions, not evidence. You want specific accounts, frequency, and impact." } ] },
              { label: "Link", context: "Daniel shows you two accounts. The double note entry looks like a genuine design issue. The extra screens look like they'd speed up with practice. What do you say?", options: [
                { text: "“The workflow stays, and refusing it is a performance issue. Let's leave it there.”", correct: false, feedback: "Jumping to accountability before enablement and evidence is premature. Part of his concern looks like valid design feedback." },
                { text: "“The follow-up standard stays; it's what keeps our notes audit-ready. The double entry may be a real design issue, and the extra screens may get faster with practice. Let's tackle both.”", correct: true, feedback: "You linked to purpose, kept the expectation, and matched each issue to the right response: escalate the defect; build ability on the screens." },
                { text: "“Since it might be a design problem, let's pause using it for MA accounts.”", correct: false, feedback: "That's an unapproved workaround. A valid concern doesn't authorize bypassing the required process." } ] },
              { label: "Lock", context: "Time to close. How do you end the conversation?", options: [
                { text: "“Let's see how it goes.”", correct: false, feedback: "No owner, no date, no measure. Nothing changes, and the concern stays open in front of the team." },
                { text: "“I'll escalate it. In the meantime, use your judgment.”", correct: false, feedback: "“Use your judgment” reads as permission to use the old method. The interim expectation must be explicit." },
                { text: "“You'll work the next five MA accounts in the new workflow and note where the double entry happens. I'll take your examples to Grace and the workflow owner today, confirm an answer by Thursday's huddle, and update the team on what we found.”", correct: true, feedback: "Action, owner, date, measure, and follow-up. Closing the loop publicly on Thursday shows the whole team that raising concerns works." } ] }
            ],
            key: [
              "Daniel's statement was public, so part of your response had to be public too: acknowledge, hold the standard, take the detail offline.",
              "Separate the concern from the conduct. His concern was valuable; announcing he'd bypass the process was not acceptable. You addressed both.",
              "Resistance often contains a real defect. The double note entry would have stayed hidden if you'd won the argument in the huddle.",
              "Close the loop where the issue was raised. Thursday's update tells eight people that speaking up leads somewhere."
            ] },
          sup: { type: "sim", id: "tl4-sim", title: "Branching role-play",
            setup: "Marcus has eleven years in Shared Services, and half of Operations knows him by name. At this morning's stand-up, with seven colleagues listening, he says: “This portal adds steps and our internal customers hate it. I'm going to keep handling my regulars by email until someone proves this is better.” A couple of people nod.",
            steps: [
              { label: "At stand-up", context: "Everyone is watching to see what you do. What do you say?", options: [
                { text: "“This isn't optional. The portal data proves it's better, so let's move on.”", correct: false, feedback: "Leading with facts and authority in front of his peers threatens Marcus's Status and Autonomy. The room learns concerns get shut down, and his regulars keep emailing him quietly." },
                { text: "“Fair point, Ops does hate extra steps. Keep handling your regulars by email for now.”", correct: false, feedback: "You've publicly created a side door. Everyone with ‘regulars’ will use it, and the portal's data becomes meaningless." },
                { text: "“Thanks for raising it; our internal customers matter. The portal is still the required route today. I want to understand exactly where it's adding steps, so let's talk right after stand-up.”", correct: true, feedback: "You acknowledged what he cares about, held the boundary in front of the team, and moved the detail to a private conversation." } ] },
              { label: "Listen", context: "After stand-up, Marcus opens with: “It's not just steps. I've spent eleven years building trust with these managers, and now I'm telling them to fill in a form like strangers.”", options: [
                { text: "“Let's stick to the process, not personal relationships.”", correct: false, feedback: "You've dismissed the thing he values most before he's finished. That stops the information you need." },
                { text: "“Go on. Tell me what concerns you most.”", correct: true, feedback: "Full attention, no rebuttal. Marcus explains: new-hire access requests need four screens plus a manager approval that often stalls overnight, and managers resubmit because they get no confirmation." },
                { text: "“I hear you, but the project team did consult the service desk.”", correct: false, feedback: "That's a rebuttal dressed up as listening. He'll stop explaining and start defending." } ] },
              { label: "Label", context: "You've heard the full picture. How do you name it back?", options: [
                { text: "“So you think the whole portal is a mistake.”", correct: false, feedback: "That exaggerates his position into something easy to dismiss. He raised specific issues, not a blanket rejection." },
                { text: "“It sounds like the main issues are the overnight approval stall on new-hire access and the missing confirmation, and that your relationships with Ops feel undervalued.”", correct: true, feedback: "Accurate and specific, without agreeing the portal is wrong. Naming the relationship concern shows you heard what sat underneath." },
                { text: "“You're right. This portal is a step backwards.”", correct: false, feedback: "Exaggerated agreement. You've validated a conclusion you can't support, and undermined Elena's rollout." } ] },
              { label: "Learn", context: "Now you need evidence. What do you ask?", options: [
                { text: "“Every new tool feels slower at first. It'll pass.”", correct: false, feedback: "That dismisses the concern without testing it. If there's a real design defect, you've just buried it." },
                { text: "“How often does the approval stall, for which request types, and what's the effect on new hires' first shifts? Can you show me two tickets?”", correct: true, feedback: "You asked for pattern, frequency, impact, and concrete examples. That turns an opinion into evidence." },
                { text: "“Send me a list of everything wrong with the portal.”", correct: false, feedback: "An open-ended list invites broad opinions, not evidence. You want specific tickets, frequency, and impact." } ] },
              { label: "Link", context: "Marcus shows you two tickets. The overnight approval stall looks like a genuine design issue. The extra screens look like they'd speed up with a saved template and practice. What do you say?", options: [
                { text: "“The portal stays, and handling requests by email is a performance issue. Let's leave it there.”", correct: false, feedback: "Jumping to accountability before enablement and evidence is premature. Part of his concern is valid design feedback." },
                { text: "“Logging every request stays; it's how we prove approvals for audit and see real demand. The overnight stall may be a real design issue, and the screens may get faster with templates. Let's tackle both, and you're the best person to help Ops managers make the switch.”", correct: true, feedback: "You linked to purpose, kept the expectation, matched each issue to the right response, and gave his relationships a role in the change." },
                { text: "“Since the approval stalls, let's skip it for new-hire access.”", correct: false, feedback: "That bypasses the access-control policy. A valid concern doesn't authorize skipping a required control." } ] },
              { label: "Lock", context: "Time to close. How do you end the conversation?", options: [
                { text: "“Let's see how it goes.”", correct: false, feedback: "No owner, no date, no measure. Nothing changes, and the concern stays open in front of the team." },
                { text: "“I'll escalate it. Meanwhile, use your judgment with your regulars.”", correct: false, feedback: "“Use your judgment” reads as permission to keep emailing. The interim expectation must be explicit." },
                { text: "“You'll log your next ten requests in the portal, help two of your regular Ops managers submit their own, and note where the approval stalls. I'll take your tickets to Elena and the platform owner today, confirm an answer by Thursday's stand-up, and update the team.”", correct: true, feedback: "Action, owner, date, measure, and follow-up, and Marcus becomes a bridge to Ops instead of a side door." } ] }
            ],
            key: [
              "Marcus's statement was public, so part of your response had to be public too: acknowledge, hold the standard, take the detail offline.",
              "Separate the concern from the conduct. His concern was valuable; announcing he'd bypass the portal was not acceptable. You addressed both.",
              "Resistance often contains a real defect. The overnight approval stall would have stayed hidden if you'd won the argument at stand-up.",
              "The person resisting hardest often holds what the change needs most. Marcus's relationships can carry Operations onto the portal."
            ] }
          })
        ]
      },
      {
        title: "Rate yourself",
        blocks: [
          { type: "p", html: "In a live workshop, an observer would score you with this rubric. Use it to reflect honestly on how you handle these conversations in real life." },
          { type: "table", head: ["Behavior", "Not yet", "Effective"], rows: [
            ["Listens without interruption", "Defends, corrects, or minimizes immediately.", "Allows a complete explanation and summarizes accurately."],
            ["Separates concern from conduct", "Labels the person as negative.", "Values the concern while addressing refusal clearly."],
            ["Uses evidence", "Debates broad opinions.", "Asks for a pattern, frequency, impact, and a testable example."],
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
              options: ["“Let's keep an eye on it.”", "“Thanks for sharing. I'll think about it.”", V({ ops: "“You'll test the job aid on five accounts; I'll confirm the exception route; we review tomorrow at 10.”", sup: "“You'll log five combined requests; I'll confirm the category rule; we review tomorrow at 10.”" }), "“Do what you think is best.”"],
              answer: 2, explain: "Lock means action, owner, date, measure, and follow-up, all explicit here." },
            { q: "What makes resistance valuable to a leader?",
              options: ["It shows who's disloyal.", "It can reveal information, design, capability, workload, trust, or fairness issues that improve the rollout.", "It gives the leader a chance to show authority.", "It isn't valuable; minimize it."],
              answer: 1, explain: "Resistance is data. Investigating it often surfaces risks the plan missed." }
          ] }
        ]
      }
    ]
  },

  {
    id: "tl5", part: "path", track: "tl", minutes: 8,
    title: "Challenge the status quo safely",
    summary: "Turn your team's improvement ideas into small, safe PDSA tests, and learn to spot the idea that would cross a line.",
    screens: [
      {
        title: "Innovation is disciplined curiosity",
        blocks: [
          { type: "p", html: V({
            ops: "Challenging the status quo isn't the same as bypassing controls. In revenue cycle work, improvement has to operate within privacy, security, payer, client, coding, documentation, and compliance requirements. Your job is to create a safe path for your team's ideas to be tested.",
            sup: "Challenging the status quo isn't the same as bypassing controls. In support functions, improvement has to operate within security, privacy, employment, audit, and policy requirements. Your job is to create a safe path for your team's ideas to be tested." }) },
          { type: "sequence", id: "tl5-pdsa", title: "Order the PDSA cycle",
            prompt: "Arrange the four phases of a small, safe experiment.",
            items: [
              { id: "p", text: "Plan", detail: "Define the problem and evidence, the smallest safe test, the approvals needed, and your predicted result." },
              { id: "d", text: "Do", detail: "Run the limited test with defined people, cases, duration, and safeguards. Record what happens." },
              { id: "s", text: "Study", detail: "Compare expected and actual results across quality, compliance, speed, effort, and knock-on effects." },
              { id: "a", text: "Act", detail: "Adopt, adapt, abandon, or escalate. Document the decision and the next test." }
            ],
            key: [
              "Most of the safety lives in Plan: evidence that the problem is real, the smallest possible test, and approvals before anything runs.",
              "Study looks beyond speed. A test that's faster but raises errors or pushes work downstream hasn't succeeded.",
              "Abandoning an idea is a legitimate result. A cycle that ends in “abandon” still taught you something cheaply."
            ] }
        ]
      },
      {
        title: "Review a team idea",
        blocks: [
          { type: "p", html: V({ ops: "Aisha has sent you an improvement proposal. Most of it is excellent. One line would stop it cold.", sup: "Ravi has sent you an improvement proposal. Most of it is excellent. One line would stop it cold." }) },
          { type: "hotspot", id: "tl5-hunt", title: "Find the line that fails the idea test",
            prompt: "Click the sentence that has to change before this test can run.",
            find: 1,
            doc: V({
              ops: { kind: "message", heading: "Proposal: faster denial follow-up", segments: [
                { t: "Problem: we re-key the same payer reference number on three screens, which adds about 40 seconds per account. I timed 30 accounts last week.", fb: "Strong: a specific problem with baseline evidence." },
                { t: "Test: our pod of four will try a shared reference template for two weeks.", fb: "A small, bounded test with defined people and duration. Good." },
                { t: "To make it faster, I'll export the open accounts with patient names and dates of birth to a spreadsheet on my personal drive so we can copy and paste.", target: true, fb: "This moves patient information outside approved systems. It fails the privacy and compliance test outright and needs Privacy and IT Security involvement. Never test process changes with real patient data outside approved systems." },
                { t: "We'll measure average handle time and error rate against last month's baseline.", fb: "Pairing speed with quality is exactly right." },
                { t: "If the error rate rises, we'll stop and review.", fb: "A clear guardrail with a stop condition. Good." } ] },
              sup: { kind: "message", heading: "Proposal: faster new-hire access", segments: [
                { t: "Problem: new-hire access requests wait an average of 19 hours for manager approval, mostly overnight. I pulled 40 tickets from last month.", fb: "Strong: a specific problem with baseline evidence." },
                { t: "Test: for two weeks, our pod will pre-build access requests from the HR start list, so managers only need to click approve.", fb: "A small, bounded test with defined people and duration. Good." },
                { t: "To save time, I'll set up one shared admin login for the pod so anyone can grant access without waiting for their own permissions.", target: true, fb: "Shared credentials break access control and make every grant untraceable for audit. It fails the security test outright and needs IT Security involvement. Never test a process change by weakening a control." },
                { t: "We'll measure approval wait time and access errors against last month's baseline.", fb: "Pairing speed with accuracy is exactly right." },
                { t: "If access errors rise, we'll stop and review.", fb: "A clear guardrail with a stop condition. Good." } ] }
            }),
            key: [
              V({ ops: "Run every idea through five tests: client or patient impact, privacy and compliance, quality, flow, and measurability.", sup: "Run every idea through five tests: internal customer impact, security and privacy, accuracy, flow, and measurability." }),
              "A good idea with one unsafe step isn't a bad idea. Coach the person to redesign that step with the right approvals rather than rejecting the whole thing.",
              V({ ops: "Never let speed override coding accuracy, documentation integrity, payer requirements, or compliant claim handling.", sup: "Never let speed override access control, data privacy, audit trails, or policy." })
            ] }
        ]
      },
      {
        title: "Your stop, start, continue",
        blocks: [
          { type: "p", html: "Look at a process your real team runs today. Propose one behavior to stop, one to start, and one to continue, and back each with evidence and controls." },
          { type: "form", id: "tl5-ssc", title: "Stop, start, continue",
            fields: [
              { id: "stop", label: "Stop", prompt: "What should the team stop doing, and why?" },
              { id: "start", label: "Start", prompt: "What should the team start doing?" },
              { id: "cont", label: "Continue", prompt: "What's working and should be protected?" },
              { id: "evid", label: "Evidence", prompt: "What evidence shows the problem or opportunity exists?" },
              { id: "ctrl", label: "Risk controls and approvals", prompt: V({ ops: "Who needs to approve it (Compliance, Coding, IT Security, Privacy, the client)? What safeguards apply?", sup: "Who needs to approve it (IT Security, Privacy, HR policy, Legal, Audit)? What safeguards apply?" }) },
              { id: "meas", label: "Success measure and guardrail", prompt: "What baseline, early indicator, outcome, and guardrail will you track?" }
            ],
            saveLabel: "Save my proposal" }
        ]
      },
      {
        title: "Check for understanding",
        blocks: [
          { type: "quiz", id: "tl5-q", questions: [
            { q: V({ ops: "What's the first step before challenging an RCM workflow?", sup: "What's the first step before challenging a support process?" }),
              options: ["Run the new method quietly to see if it works.", "Define the problem with evidence and identify the governance and safeguards needed before testing.", "Ask the team to vote.", "Change the job aid and announce it."],
              answer: 1, explain: V({ ops: "Evidence and governance come first. Testing without approval can create compliance, privacy, or client risk.", sup: "Evidence and governance come first. Testing without approval can create security, privacy, or audit risk." }) },
            { q: V({ ops: "A PDSA test cut handle time by 15%, but rework rose downstream. What's the right Act decision?", sup: "A PDSA test cut response time by 15%, but reopened requests rose. What's the right Act decision?" }),
              options: ["Adopt it. Speed improved.", "Adapt or abandon, and investigate the knock-on effect before expanding.", "Leave the extra rework out of the report.", "Expand to all teams to get more data."],
              answer: 1, explain: "Study covers quality and knock-on effects, not just speed. Shifting work elsewhere isn't an improvement." }
          ] }
        ]
      }
    ]
  },

  {
    id: "tl6", part: "path", track: "tl", minutes: 12, capstone: true,
    title: "Capstone: from announcement to adoption",
    summary: "Bring every tool together as your change adds an AI feature, then build your own 30-day change leadership plan.",
    screens: [
      {
        title: "The next wave",
        blocks: [
          { type: "p", html: V({
            ops: "Smart Queue is adding an approved AI-assisted feature that recommends which accounts to work first. It doesn't make the final decision; your specialists stay accountable for reviewing each account and following validated procedures. The pilot suggests faster identification of high-risk accounts, but your team has concerns about accuracy, job security, productivity expectations, and what happens when a recommendation conflicts with policy.",
            sup: "One Front Door is adding an approved AI triage feature that suggests the category and priority for each incoming request. It doesn't make the final decision; your coordinators stay accountable for reviewing each request and following the approval matrix. The pilot suggests faster routing, but your team has concerns about accuracy, job security, SLA expectations, and what happens when a suggestion conflicts with the access policy." }) },
          { type: "p", html: "Five signals are showing up on your team:" },
          { type: "list", items: V({
            ops: [
              "Daniel and Rafael question whether their expertise will still be valued.",
              "Newer specialists, including Aisha, assume the recommendation is always correct.",
              "Night-shift specialists say updates arrive after their shift and decisions feel unfair.",
              "One specialist hasn't received access but is already being compared against the new productivity baseline.",
              "A vocal specialist shares three examples of questionable recommendations, but no account details through the approved channel." ],
            sup: [
              "Marcus and Lena question whether their expertise will still be valued.",
              "Newer coordinators, including Ana, accept every AI suggestion without checking.",
              "Kofi and the night shift say updates arrive after their shift and decisions feel unfair.",
              "One coordinator hasn't received the updated agent role but is already measured against the new SLA.",
              "A vocal coordinator shares three examples of wrong priority suggestions, but no ticket numbers through the approved channel." ] }) },
          { type: "match", id: "tl6-signals", title: "Match each signal to the right first action",
            prompt: "Select a signal, then the action that addresses its likely ADKAR and SCARF barrier.",
            left: V({
              ops: [
                { id: "s1", text: "Experts worry their expertise won't matter" }, { id: "s2", text: "Newer people accept every recommendation" },
                { id: "s3", text: "Night shift gets updates late" }, { id: "s4", text: "Specialist without access is compared to the new baseline" },
                { id: "s5", text: "Vocal specialist cites questionable recommendations" } ],
              sup: [
                { id: "s1", text: "Experts worry their expertise won't matter" }, { id: "s2", text: "Newer people accept every AI suggestion" },
                { id: "s3", text: "Night shift gets updates late" }, { id: "s4", text: "Coordinator without the agent role is measured on the new SLA" },
                { id: "s5", text: "Vocal coordinator cites wrong priority suggestions" } ] }),
            right: V({
              ops: [
                { id: "a1", text: "Involve them in reviewing exceptions, and make clear that human judgment remains essential." },
                { id: "a2", text: "Use contrasting examples, and require a rationale before accepting or rejecting any recommendation." },
                { id: "a3", text: "Give equivalent access to updates, collect questions asynchronously, and include a night-shift voice." },
                { id: "a4", text: "Fix the access barrier, and exclude or annotate their numbers until conditions are equivalent." },
                { id: "a5", text: "Ask for de-identified account examples through the approved route, investigate patterns, and close the loop." } ],
              sup: [
                { id: "a1", text: "Involve them in reviewing tricky requests and tuning categories, and make clear that human judgment remains essential." },
                { id: "a2", text: "Use contrasting examples, and require a reason before accepting or overriding any suggestion." },
                { id: "a3", text: "Give equivalent access to updates, collect questions asynchronously, and include a night-shift voice." },
                { id: "a4", text: "Fix the role assignment, and exclude or annotate their SLA results until conditions are equivalent." },
                { id: "a5", text: "Ask for ticket numbers through the approved route, investigate patterns, and close the loop." } ] }),
            pairs: { s1: "a1", s2: "a2", s3: "a3", s4: "a4", s5: "a5" },
            key: [
              "Expertise concern: Desire and Status. Over-reliance: Knowledge and Ability. Night shift: Awareness, Relatedness, and Fairness. Missing access: Ability and Fairness. Questionable outputs: possibly valid design feedback.",
              "Over-reliance is as much a risk as rejection. Requiring a reason before accepting a suggestion keeps people accountable.",
              "The vocal person may be right. Route the evidence properly and investigate, without allowing unapproved workarounds in the meantime."
            ] }
        ]
      },
      {
        title: "Choose your measures",
        blocks: [
          { type: "p", html: "To know whether the rollout is working, you need indicators at different points, plus guardrails that warn you if it's succeeding the wrong way." },
          { type: "bucket", id: "tl6-measures", title: "Sort the measures",
            prompt: "Sort each measure into the type it is.",
            buckets: [ { id: "lead", label: "Leading" }, { id: "adopt", label: "Adoption" }, { id: "out", label: "Outcome" }, { id: "guard", label: "Guardrail" } ],
            items: V({
              ops: [
                { id: "a", text: "Access completed across all shifts", bucket: "lead" },
                { id: "b", text: "Practice accuracy on exception accounts", bucket: "lead" },
                { id: "c", text: "Share of accounts worked through the approved workflow correctly", bucket: "adopt" },
                { id: "d", text: "Appropriate accept and override decisions on sampled accounts", bucket: "adopt" },
                { id: "e", text: "Turnaround time", bucket: "out" },
                { id: "f", text: "Preventable error rate", bucket: "out" },
                { id: "g", text: "Signs of over-reliance on the recommendations", bucket: "guard" },
                { id: "h", text: "Compliance findings", bucket: "guard" } ],
              sup: [
                { id: "a", text: "Agent-role access completed across all shifts", bucket: "lead" },
                { id: "b", text: "Practice accuracy on combined and unusual requests", bucket: "lead" },
                { id: "c", text: "Share of requests logged and routed through the portal correctly", bucket: "adopt" },
                { id: "d", text: "Appropriate accept and override decisions on AI suggestions", bucket: "adopt" },
                { id: "e", text: "Time to resolve requests", bucket: "out" },
                { id: "f", text: "Requests reopened or resubmitted", bucket: "out" },
                { id: "g", text: "Signs of over-reliance on AI suggestions", bucket: "guard" },
                { id: "h", text: "Access granted without the required approval", bucket: "guard" } ]
            }),
            key: [
              "Leading indicators tell you early whether people are set up to succeed. If access is incomplete, outcome data will mislead you.",
              "Adoption is behavior: are people using the new way correctly? That's different from whether they finished training.",
              "Guardrails protect against succeeding the wrong way, like faster results achieved by over-trusting the tool."
            ] },
          { type: "reflect", id: "tl6-r1", prompt: V({ ops: "Draft your opening line for a 5L conversation with the vocal specialist. How will you listen first while keeping the approved channel clear?", sup: "Draft your opening line for a 5L conversation with the vocal coordinator. How will you listen first while keeping the approved channel clear?" }) }
        ]
      },
      {
        title: "Your 30-day change leadership plan",
        blocks: [
          { type: "p", html: "This is the tool you take back to work. Use the real change you've been working with throughout the course. Fill every field; short answers are fine." },
          { type: "form", id: "tl6-plan", title: "30-day change leadership plan",
            fields: [
              { id: "reason", label: "Change and business reason" },
              { id: "people", label: "People most affected" },
              { id: "shift", label: "Required behavior shift: stop, start, continue" },
              { id: "adkar", label: "First ADKAR barrier to address" },
              { id: "scarf", label: "SCARF risks to reduce" },
              { id: "comms", label: V({ ops: "Communication rhythm and channels (huddles, chat, one-to-ones)", sup: "Communication rhythm and channels (stand-ups, chat, one-to-ones)" }) },
              { id: "coach", label: "Practice and coaching plan" },
              { id: "esc", label: "Who you'll escalate barriers to" },
              { id: "lead", label: "Leading adoption indicators" },
              { id: "out", label: "Outcome and guardrail measures" },
              { id: "win", label: "Early win to recognize" },
              { id: "review", label: "Date to review and adjust" }
            ],
            saveLabel: "Save my plan" },
          { type: "reflect", id: "tl6-close", prompt: "Complete the sentence: “The next time my team faces change, I will stop ___, start ___, and continue ___.” Who will notice the difference?" }
        ]
      }
    ]
  });
})();
