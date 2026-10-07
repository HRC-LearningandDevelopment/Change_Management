/* =========================================================================
   COURSE CONTENT — core definitions
   Tailoring: any value can be a variant created with CV({...}). Keys, in
   order of precedence: tl_ops, tl_sup, mgr_ops, mgr_sup, then ops / sup,
   then tl / mgr, then all. The engine resolves variants from the learner's
   profile at render time. Blocks can also carry only: "ops" | "sup" | "tl" |
   "mgr" | "tl_ops" ... (or an array) to appear for some profiles only.
   ========================================================================= */
window.CV = function (o) { return Object.assign({ __v: 1 }, o); };

window.COURSE = {
  title: "Managing Change",
  subtitle: "From Resistance to Readiness",
  minutes: 90,

  roles: {
    tl: { name: "Team Leader", label: "I lead a team of individual contributors day to day.",
      promise: "Translate change for your team, diagnose what's blocking each person, coach through pushback, and make new habits stick." },
    mgr: { name: "Manager", label: "I lead Team Leaders, or I lead a whole function.",
      promise: "Align your leaders, shape the conditions for adoption, manage competing changes, remove barriers, and sustain results across teams." }
  },
  functions: {
    ops: { name: "Operations", short: "Operations",
      label: "Client-facing delivery: work queues, productivity, quality, payers, and service levels." },
    sup: { name: "Non-Ops / Support", short: "Support",
      label: "Functions that serve the business: IT, HR, WFM, Finance, Training, Quality, Facilities, and more." }
  },

  /* One running scenario and cast per profile. Characters recur in activities. */
  profiles: {
    tl_ops: {
      change: "Smart Queue",
      tagline: "A new prioritization logic for your denial work queue",
      scenario: "You lead a denials and AR follow-up team of nine. Next month your team moves to Smart Queue: a new prioritization logic for the denial work queue, with updated quality checkpoints. Later, an AI-assisted recommendation feature arrives too. You'll lead your team through all of it in this course.",
      cast: [
        { name: "Daniel", role: "Tenured AR specialist, 9 years", note: "Knows every payer's quirks. Not shy about saying so." },
        { name: "Imani", role: "Denials specialist", note: "Solid performer who wants to know why." },
        { name: "Rafael", role: "Senior specialist, morning shift", note: "Watches closely for fairness." },
        { name: "Mei", role: "Recently trained", note: "Trying hard; still finding her feet." },
        { name: "Aisha", role: "Joined last month", note: "Keen, and full of questions." },
        { name: "Grace", role: "Your Operations Manager", note: "Expects adoption, and backs you when you escalate well." }
      ]
    },
    tl_sup: {
      change: "One Front Door",
      tagline: "Every internal request moves into one service portal",
      scenario: "You lead a team of eight service coordinators in Shared Services. Your team handles internal requests for Operations teams across two sites: system access, HR questions, schedule changes. Today, requests arrive by email, chat, and a tap on the shoulder. Next month everything moves to One Front Door: a single service portal with request categories, SLA tiers, and a new approval workflow.",
      cast: [
        { name: "Marcus", role: "Senior coordinator, 11 years", note: "Half of Operations has his number and uses it." },
        { name: "Lena", role: "Access specialist", note: "Precise, and skeptical of anything new." },
        { name: "Ravi", role: "Strong performer", note: "Fast and reliable, until month-end hits." },
        { name: "Ana", role: "Completed training last week", note: "Careful, but still learning the categories." },
        { name: "Kofi", role: "Covers the night shift", note: "Often the last to hear about changes." },
        { name: "Elena", role: "Your Shared Services Manager", note: "Owns the rollout; needs your team to show it works." }
      ]
    },
    mgr_ops: {
      change: "Smart Queue at scale",
      tagline: "New queue logic, AI-assisted prioritization, and new quality measures across three sites",
      scenario: "You manage five Team Leaders running denials and AR teams across three sites and a night shift; in this course you'll work most closely with three of them. Smart Queue rolls out to every site next month, followed by AI-assisted prioritization and revised quality measures focused on decision accuracy. The sponsor expects value fast. Your sites differ in payer mix, staffing, and experience.",
      cast: [
        { name: "Jordan", role: "Team Leader, Site A", note: "Steady and trusted; teams follow Jordan's lead." },
        { name: "Priya", role: "Team Leader, Site B", note: "Your newest TL, eager to prove herself." },
        { name: "Sam", role: "Team Leader, night shift", note: "Skeptical. Night shift always hears last." },
        { name: "The VP of Operations", role: "Executive sponsor", note: "Wants fast results to show the client." },
        { name: "Quality and Compliance", role: "Governance partners", note: "Will stop anything that risks accuracy or compliance." },
        { name: "The client account team", role: "External stakeholder", note: "Watching turnaround and error rates." }
      ]
    },
    mgr_sup: {
      change: "One Front Door",
      tagline: "One service portal, role-based access, and SLA tiers across Shared Services",
      scenario: "You manage Shared Services: the IT service desk, People Services (HR), and Workforce Management, led by three Team Leaders. You own One Front Door, consolidating every internal request into one service portal with SLA tiers, role-based access provisioning, and a new approval workflow. Your internal customers, the Operations managers, can't afford disruption at month-end, and they have the COO's ear.",
      cast: [
        { name: "Chris", role: "Team Leader, IT service desk", note: "Confident in the tool; underestimates the people side." },
        { name: "Neha", role: "Team Leader, People Services", note: "Protective of confidential HR data, and of her team." },
        { name: "Owen", role: "Team Leader, WFM", note: "“We tried a portal in 2022. It died in four months.”" },
        { name: "The COO", role: "Executive sponsor", note: "Wants one view of internal service, fast." },
        { name: "Operations managers", role: "Your internal customers", note: "Used to texting your team directly. Influential." },
        { name: "IT Security and Internal Audit", role: "Governance partners", note: "Own the access-control and approval rules." }
      ]
    }
  },

  modules: [],
  finalCheck: { passMark: 80, questions: [] }
};
