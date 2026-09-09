// Blog post data — sample posts with full content for SEO.
// Replace with a CMS later; the shape (and the page code) stays the same.

// A single block of article content. Kept simple so we can render it without
// a markdown dependency: each block is a subheading, a paragraph, or a bulleted
// list (used when a passage is genuinely enumerable, e.g. pricing tiers).
export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  // URL-safe identifier, e.g. used at /blog/<slug>.
  slug: string;
  // Post title.
  title: string;
  // Short teaser shown on cards and used as the default meta description.
  excerpt: string;
  // Optional standalone meta description for SEO, when it should differ from
  // the on-page excerpt. Falls back to `excerpt` (same pattern as ventures).
  metaDescription?: string;
  // Linked blog category slug (see blog-categories.ts).
  categorySlug: string;
  // Author display name.
  author: string;
  // ISO date string (YYYY-MM-DD) for sorting/display.
  date: string;
  // Estimated read time in minutes.
  readingMinutes: number;
  // Full article body, rendered block by block on the post page.
  content: ContentBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "building-a-company-on-a-wyoming-llc-from-outside-the-us",
    title: "Building a Company on a Wyoming LLC From Outside the US",
    excerpt:
      "An LLC filed from outside the US in days. Being ready to take a customer's payment through it — still not finished. The honest account of what this setup actually involves.",
    metaDescription:
      "Running a Wyoming LLC from Bangladesh, including the part still not finished. What's actually fast, what's actually slow, and where things stand right now.",
    categorySlug: "startup-building",
    author: "Talukder Abir Hasan",
    date: "2026-09-09",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        text: "FrictionLab is a Wyoming LLC, run entirely from Tangail, Bangladesh. I've never set foot in Wyoming, or the United States. Here's the honest account of what that setup actually involves, including the parts that still aren't finished.",
      },
      { type: "heading", text: "Why Wyoming, specifically" },
      {
        type: "paragraph",
        text: "No state income tax, no residency or citizenship requirement to form one, and a formation process that doesn't need you to be physically present. That combination is why it's the default choice for founders operating from outside the US — not because it's automatically the best structure for every business, but because it's one of the few that doesn't assume you live there. I'm not a lawyer or an accountant, and this isn't advice on what structure is right for anyone else's situation. It's what worked for mine.",
      },
      { type: "heading", text: "The part that's actually fast" },
      {
        type: "paragraph",
        text: "Filing the Articles of Organization through a formation service took days, not months. That's the part every guide to this talks about, and it's genuinely true — the paperwork that creates the legal entity is the easy part of this whole process.",
      },
      { type: "heading", text: "The part nobody mentions" },
      {
        type: "paragraph",
        text: "Having an LLC and being able to use it for what you actually need — taking payments — are two different timelines. Getting an EIN, a real US mailing address for the entity, and documentation a payment processor will accept as proof of a registered business takes considerably longer, especially when it's handled through a formation service rather than in person.",
      },
      {
        type: "paragraph",
        text: "I found this out the hard way when I tried to activate Stripe. The dashboard showed a \"switch to live account\" option, which looked like approval. It wasn't. Trying to actually complete activation hit a locked country field and a requirement for business documentation the LLC formation hadn't produced yet — because the formation itself was still incomplete. Filing the entity and being ready to process a customer's payment are not the same milestone, and I'd assumed they were.",
      },
      { type: "heading", text: "Where this actually stands right now" },
      {
        type: "paragraph",
        text: "Still blocked, as of writing this. The formation service hasn't yet delivered a usable US mailing address for the entity, and that one missing piece cascades into everything downstream of it: three policy documents still have a placeholder where that address needs to go, and Stripe's business registration can't complete without it. This isn't a story about a problem I solved. It's a story about a dependency that's been sitting there for weeks, entirely outside my control on any given day, while every other part of the business kept moving.",
      },
      {
        type: "heading",
        text: "What I'd actually tell someone else doing this from outside the US",
      },
      {
        type: "list",
        items: [
          "Assume the paperwork that creates the entity is the fast part, and the paperwork that makes the entity usable is the slow part.",
          "Don't build your launch timeline around \"LLC formed\" as the milestone that unblocks payments — it doesn't.",
          "Ask the formation service directly, before you pay them, exactly how long the mailing address and EIN take separately from the entity filing itself, because those are the two things that will actually determine when you can take a first payment.",
          "And build everything else — the product, the pricing, the outreach — in parallel with this, not after it, because waiting on paperwork you don't control is not a good reason to stop building the parts you do.",
        ],
      },
    ],
  },
  {
    slug: "ai-agents-vs-automation-whats-actually-different",
    title: "AI Agents vs Automation: What's Actually Different",
    excerpt:
      "One task in the portfolio runs the same steps every day without variation. Another reasons through a different path each time. Here's the real difference between automation and an agent, and how to tell which one a task actually needs.",
    metaDescription:
      "A cron job and a code agent both run inside FrictionLab. Here's the actual, testable difference between them, and why most \"AI agent\" branding gets it wrong.",
    categorySlug: "startup-building",
    author: "Talukder Abir Hasan",
    date: "2026-09-09",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        text: "FrictionLab runs both an \"agent\" and an \"automation,\" and for a while I used those words interchangeably. They aren't. Having built one of each, the difference isn't philosophical — it's a specific, testable question, and knowing which one you actually need is a real skill, not just AI vocabulary.",
      },
      { type: "heading", text: "The test that actually matters" },
      {
        type: "paragraph",
        text: "Can you write down the exact steps in advance, in order, with no branching that depends on judgment? If yes, that's automation. If the right next step depends on reasoning about what you're currently looking at, and would change depending on the situation, that's an agent. Nothing about model size, cost, or how impressive the output looks decides which category something belongs to. Only that one question does.",
      },
      {
        type: "heading",
        text: "What automation looks like in the portfolio",
      },
      {
        type: "paragraph",
        text: "The FrictionLab Agentic OS runs a cron job at 06:00 UTC every day. Same trigger, same sequence, same steps every single time, logged to a PostgreSQL audit trail so I can verify it did exactly what it always does. Nothing about that task requires judgment. It requires reliability. Calling it \"agentic\" in the name was a branding choice, not a technical one — underneath, it's automation, and that's exactly what it should be. Automation is cheap to trust because it's fully predictable. You don't review it the way you'd review a judgment call, because there isn't one being made.",
      },
      { type: "heading", text: "What an actual agent looks like" },
      {
        type: "paragraph",
        text: "FricSor, the code agent I built, is different. Given a failing test, it decides what to inspect, forms a hypothesis about the cause, checks that hypothesis against the actual code, and revises if it's wrong — genuinely different steps depending on what it finds, not a fixed script running the same sequence regardless of the situation. That's what makes it an agent rather than automation: the path isn't predetermined, it's reasoned out in the moment.",
      },
      {
        type: "paragraph",
        text: "That also makes it the one that requires real oversight. A predictable pipeline earns trust by doing the same thing every time. A reasoning process earns trust by being checked, because the same input can lead to a different path depending on what it decides to look at first.",
      },
      {
        type: "heading",
        text: "Where most of the AI agent hype gets this wrong",
      },
      {
        type: "paragraph",
        text: "A lot of what gets marketed as an \"AI agent\" is a fixed pipeline with a language model bolted onto one step, and a lot of what actually needs judgment gets built as a rigid script that breaks the moment reality doesn't match the assumption baked into it. Both are the wrong tool for the job, just in opposite directions. The expensive, harder-to-trust option isn't automatically better because it's newer. If the steps are known and stable, automation is faster, cheaper, and more reliable than making a model reason through something that never actually varies.",
      },
      {
        type: "heading",
        text: "The actual question to ask before building either one",
      },
      {
        type: "paragraph",
        text: "Not \"should this be automated or should this be an agent,\" framed as if one is the modern choice. The real question is whether the task in front of you has a fixed shape or a variable one. A daily report has a fixed shape — automate it. Diagnosing why a test is failing has a variable shape — that needs judgment. Getting that categorization wrong either way costs you: over-engineering a fixed task with reasoning it doesn't need, or under-engineering a variable one with a script that can't adapt to what it actually finds.",
      },
    ],
  },
  {
    slug: "how-to-validate-a-saas-idea-before-writing-a-line-of-code",
    title: "How to Validate a SaaS Idea Before Writing a Line of Code",
    excerpt:
      "ScholarPilot had real signups before it was built. The other eight products in the portfolio didn't. Here's what that difference actually proved, and the honest limit of what it proved.",
    metaDescription:
      "One product got 10 signups before a line of code existed. Eight others didn't. An honest look at what that validation step actually bought, and what it didn't.",
    categorySlug: "startup-building",
    author: "Talukder Abir Hasan",
    date: "2026-09-09",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        text: "ScholarPilot had 10 people sign up before I'd built a single feature. Every other product in the portfolio went straight from idea to build with no equivalent step. Same founder, same tools, two completely different starting points — and it's worth being honest about what that difference actually bought me, because it wasn't a sale.",
      },
      { type: "heading", text: "What validation actually looked like" },
      {
        type: "paragraph",
        text: "Not a survey. Not a set of mockups shown to friends who'd say yes to be polite. A real page, describing the real thing ScholarPilot would do, asking for one concrete low-friction commitment: sign up for early access. Nothing hypothetical about the ask — it was the actual first step of the actual product, just without the product behind it yet.",
      },
      {
        type: "paragraph",
        text: "Ten people took that step. That's the entire validation. Not a focus group, not a survey response, a real action from a real person before any code existed to justify it.",
      },
      {
        type: "heading",
        text: "Why this is different from what I did with everything else",
      },
      {
        type: "paragraph",
        text: "Every other product started with me deciding it was worth building, then building it. No page, no ask, no real person's action standing between the idea and the code. The idea felt validated because it made sense to me, which is not the same thing as anyone else confirming it with an action.",
      },
      {
        type: "paragraph",
        text: "That's the actual difference this post is about. Not \"ScholarPilot succeeded and the others didn't\" — none of them have a paying customer yet, ScholarPilot included. The difference is that ScholarPilot had ten real signals before I spent a single hour building, and the rest had zero. One of those starting points gives you information. The other just gives you a head start on being wrong.",
      },
      {
        type: "heading",
        text: "What validation is actually worth, honestly",
      },
      {
        type: "paragraph",
        text: "Ten signups is real evidence someone will give up an email address for this. It is not evidence anyone will pay for it. I want to be precise about that line, because it's tempting to treat pre-launch signups as proof of a business, and they aren't — they're proof of curiosity, which is a floor, not a finish line. ScholarPilot still has zero paying customers despite having the best validation story in the portfolio. Validation lowers the odds you're building something nobody wants. It doesn't remove the actual selling that has to happen after.",
      },
      {
        type: "heading",
        text: "What I'd actually tell someone before they write code",
      },
      {
        type: "paragraph",
        text: "Build the smallest possible version of the real ask, not a generic \"would you be interested\" question. The ask should be the actual first step of the actual product — a signup, a waitlist tied to a specific promised outcome, a form asking for the exact information the product would need on day one. A vague interest question gets a vague yes. A specific commitment gets a real answer.",
      },
      {
        type: "paragraph",
        text: "Set the bar before you look at the number, not after. Decide in advance what counts as enough signal to justify building — and just as important, what doesn't — because it's easy to talk yourself into three signups being encouraging once you're already attached to the idea.",
      },
      {
        type: "paragraph",
        text: "And treat the validation step as genuinely cheap compared to the alternative. A landing page and an honest ask cost a day. The eight products I built without one cost weeks each, and I still don't know for most of them whether anyone would have signed up if I'd asked first.",
      },
    ],
  },
  {
    slug: "how-to-price-a-saas-product-when-you-have-zero-customers",
    title: "How to Price a SaaS Product When You Have Zero Customers",
    excerpt:
      "Pricing research without a real customer to react to isn't research — it's avoidance wearing a spreadsheet. Here's the actual reasoning behind ScholarPilot's four pricing tiers, with zero customers to validate any of it.",
    metaDescription:
      "No customers, no data, still had to pick a price. The actual reasoning behind ScholarPilot's pricing tiers, and the honest caveat that comes with it.",
    categorySlug: "startup-building",
    author: "Talukder Abir Hasan",
    date: "2026-09-09",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        text: "Every pricing guide assumes you have data. Conversion rates by tier, churn by price point, what customers actually said when a number was too high. I have none of that. ScholarPilot has never had a paying customer, and I still had to put a number on it before launch. Here's what I actually did, and why I think it was the right call despite having nothing to validate it against.",
      },
      {
        type: "heading",
        text: "The trap is treating pricing as a research problem",
      },
      {
        type: "paragraph",
        text: "The instinct, when you have no data, is to go find some. Read pricing psychology, study ten competitors, build a spreadsheet of willingness-to-pay models. I did some of this, and it produced exactly one useful thing: a sense of the range other tools in the category charge. Everything past that was research standing in for the thing I actually needed to do, which was pick a number and start talking to people about it.",
      },
      {
        type: "paragraph",
        text: "Pricing research without a real customer to react to it isn't research. It's the same avoidance pattern as building another dashboard instead of sending an email — just wearing a spreadsheet instead of a folder.",
      },
      { type: "heading", text: "What I actually priced ScholarPilot at" },
      {
        type: "paragraph",
        text: "Free, then Starter at $19 a month, Pro at $49, Partner at $199. No model produced these numbers. Here's the actual reasoning:",
      },
      {
        type: "list",
        items: [
          "Free removes the only real barrier to a first look — a student deciding whether to trust an unknown platform with their study-abroad plans.",
          "Starter at $19 sits just under the round $20 mark, priced for an individual student comparing it against a single IELTS prep course or one paid consultation, not against enterprise software.",
          "Pro at $49 is the plan built for someone who wants every tool active at once, not a superior version of Starter — the tiers should split by usage breadth, not by manufactured feature-gating.",
          "Partner at $199 is a different buyer entirely: a coaching center serving many students at once, where the price needs to make sense against what they already charge each student, not against the individual plans above it.",
        ],
      },
      {
        type: "paragraph",
        text: "None of these numbers came from a survey. They came from asking what a specific person would be comparing this against, and pricing relative to that alternative instead of relative to how many hours I spent building it.",
      },
      { type: "heading", text: "The honest caveat" },
      {
        type: "paragraph",
        text: "This is a guess, not a conclusion. Zero paying customers means zero evidence any of these four numbers are right. What I do have confidence in is the reasoning behind them, which means if $19 turns out to be wrong, I'll know which assumption broke and can fix that one thing instead of re-deriving the whole structure from scratch.",
      },
      {
        type: "heading",
        text: "What I'd actually tell another founder in this position",
      },
      {
        type: "paragraph",
        text: "Price against a named alternative your buyer already pays for, not against your own effort. Treat the first price as reversible — it's a hypothesis you're about to test with real conversations, not a permanent commitment. And don't let getting the number perfect become the reason you haven't asked anyone to pay it yet. A number in front of a real lead teaches you more in one conversation than another week of research ever will.",
      },
    ],
  },
  {
    slug: "claude-code-vs-hiring-a-developer-real-comparison",
    title: "Claude Code vs Hiring a Developer: A Real Comparison",
    excerpt:
      "Claude Code has been the entire engineering team behind nine live products. Here's the honest version — including the failures — of what that actually replaces and where it doesn't.",
    metaDescription:
      "Nine products, zero employees. An honest comparison of what Claude Code actually replaces, where it fails, and when hiring a real developer becomes necessary.",
    categorySlug: "startup-building",
    author: "Talukder Abir Hasan",
    date: "2026-09-09",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        text: "For the life of FrictionLab, my engineering team has been Claude Code, not a person. Nine products live, zero employees. Here's the honest version of what that trade actually gets you, and where it falls short.",
      },
      { type: "heading", text: "What a developer gives you that a tool can't" },
      {
        type: "paragraph",
        text: "A developer you hire brings judgment you didn't ask for. They notice the thing you didn't know to specify, push back when an idea is bad, and carry domain knowledge that took them years to build. They have something at stake beyond the current prompt: a reputation, a career, a reason to tell you the truth even when it's inconvenient. None of that comes from a tool, no matter how good the tool is at writing code.",
      },
      {
        type: "paragraph",
        text: "The cost of that is real too. Salary or equity, a hiring process, onboarding time, and the ongoing overhead of managing someone whose judgment you're relying on. For a funded team, that trade makes sense. For a solo, bootstrapped studio, it isn't available yet regardless of whether it would help.",
      },
      { type: "heading", text: "What Claude Code actually replaces" },
      {
        type: "paragraph",
        text: "Not judgment. Execution. Once I know what I want built and can describe it clearly, it gets built in about the time it takes to write the ticket, not wait for someone to pick it up. That's the entire reason nine products exist: not because building got easier in some abstract sense, but because the gap between deciding something and having it working shrank from weeks to hours.",
      },
      {
        type: "paragraph",
        text: "There's no negotiation, no onboarding, no payroll. For someone who can't afford to hire even one developer yet, that's not a minor convenience — it's the difference between shipping and not shipping at all.",
      },
      { type: "heading", text: "Where it actually breaks" },
      {
        type: "paragraph",
        text: "It isn't a clean win. On one build, a script it had written got silently dropped partway through a longer multi-part task — nothing said it failed, it just wasn't there afterward, and only a deliberate check caught it. On another project, pasting a code block containing a raw link tag came through with the opening tag stripped, while everything around it looked fine. Neither failure was dramatic, and both were fixable once caught, but \"once caught\" is the operative phrase.",
      },
      {
        type: "paragraph",
        text: "That's the real discipline this requires: review every change before it goes live, test against the actual database rather than trusting the code by itself, run one command at a time instead of chaining a sequence and assuming it all landed. Skip that discipline and the tool's mistakes look identical to correct output right up until something breaks in production.",
      },
      { type: "heading", text: "The actual comparison" },
      {
        type: "paragraph",
        text: "Claude Code doesn't replace a developer's judgment. It replaces the six or seven developers a growing studio would otherwise need to hire, one per product, none of whom I could have afforded yet. That's a different comparison than \"which one writes better code.\" It's the difference between running nine live products as one person or running zero as one person waiting to afford the first hire.",
      },
      { type: "heading", text: "When hiring actually becomes the right call" },
      {
        type: "paragraph",
        text: "Once a single product needs to scale past what one person can safely review, or needs expertise I genuinely don't have, that's the point a hire stops being aspirational and starts being necessary. Right now, every product is still small enough that I can verify everything myself. That won't stay true forever, and the day it stops being true is the day this comparison changes.",
      },
    ],
  },
  {
    slug: "what-i-learned-shipping-seven-products-zero-customers",
    title: "What I Learned Shipping Seven Products and Getting Zero Customers",
    excerpt:
      "Building was never the hard part. Here's the honest breakdown of what seven shipped products and zero paying customers actually taught me about avoidance disguised as progress.",
    metaDescription:
      "Seven products shipped, zero paying customers. What that pattern actually revealed about building versus selling, and what changes now.",
    categorySlug: "startup-building",
    author: "Talukder Abir Hasan",
    date: "2026-09-09",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        text: "Here's the plain version: I've shipped seven products under FrictionLab. Two more have joined since. Paying customers across all of them: zero. This isn't a confession, and it isn't false modesty either. It's the most useful data point I have about how I actually work, and it took building seven products to see it clearly.",
      },
      { type: "heading", text: "Shipping was never the hard part" },
      {
        type: "paragraph",
        text: "With Claude Code doing the engineering, going from idea to a working product is fast. Spec it, build it, deploy it, move to the next one. ScholarPilot, PropMate AI, TubeCommand, PromptCraft, LeadMate AI, Lumora, FinMate AI — each one went from nothing to a live, working product in a matter of weeks, not months. If the test of a venture studio were \"can you build things,\" FrictionLab would look successful by any measure.",
      },
      {
        type: "paragraph",
        text: "But shipping was never the test. Getting someone to pay for what I shipped was, and I kept mistaking the first for the second.",
      },
      { type: "heading", text: "The bottleneck was never technical" },
      {
        type: "paragraph",
        text: "Every time a product stalled, my instinct was to build something to fix it. Leads weren't converting, so I'd build a better dashboard. Outreach felt scattered, so I'd build a system to organize it. At one point I had a project literally named Revenue OS, meant to function as an automated CMO and CRO for the whole portfolio. I treated it like real infrastructure I was waiting on.",
      },
      {
        type: "paragraph",
        text: "It was a folder. Nothing was built. It had no data, because none of the products had customers yet, and a system that analyzes conversion has nothing to analyze without a single real conversion to look at. I was planning to optimize marketing for a business that didn't have a first sale.",
      },
      {
        type: "paragraph",
        text: "That's the pattern, stated plainly: building feels like progress because it produces something visible, and it never requires anyone to say no to you. Outreach does. A cold email might get ignored. A warm lead might go quiet. Building another tool sidesteps that risk entirely, which is exactly why it's so easy to keep doing.",
      },
      { type: "heading", text: "What actually needed to happen instead" },
      {
        type: "paragraph",
        text: "The honest fix was never a new system. It was contacting the four people who had already shown real interest and asking them to pay. That's it. No dashboard required. I did eventually send that outreach — but only after building eight more things I told myself were prerequisites first.",
      },
      {
        type: "paragraph",
        text: "Some of the delay was real, not just avoidance. Getting Stripe fully live has depended on paperwork through Rocket Wave that's genuinely outside my control on any given day. But real blockers and self-imposed ones were tangled together for a long time, and it took a lot of getting called out — by the pattern repeating itself, more than once — before I could tell them apart.",
      },
      { type: "heading", text: "Where this actually leaves things" },
      {
        type: "paragraph",
        text: "Seven products at the start of this reflection. Nine now, counting SOPscribe and FricSor. Zero paying customers through all of it. The count of things built kept climbing while the number that actually matters stayed flat, and for a long stretch I didn't notice those were two different numbers.",
      },
      {
        type: "paragraph",
        text: "The lesson isn't \"stop building.\" Claude Code makes building cheap enough that it was never really the constraint. The lesson is that a studio's job isn't to keep producing more surface area — it's to take the risk on one idea all the way through to someone paying for it. I've gotten very good at the first half. The second half is the actual job, and it's the one I'm doing now: fewer new builds, more direct conversations with the people who already said they'd pay.",
      },
    ],
  },
  {
    slug: "ai-venture-studio-vs-accelerator-vs-agency",
    title: "AI Venture Studio vs Accelerator vs Agency: What's Actually Different",
    excerpt:
      "Three labels, one question people keep asking. The honest breakdown of what separates a venture studio from an accelerator and an agency — and which one actually describes running seven AI products alone.",
    metaDescription:
      "Venture studio, accelerator, or agency — the labels get used interchangeably online. Here's what actually separates them, and which one FrictionLab really is.",
    categorySlug: "startup-building",
    author: "Talukder Abir Hasan",
    date: "2026-08-03",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        text: "People ask what FrictionLab is more often than they ask what it does. Fair question. The three labels — venture studio, accelerator, agency — get used almost interchangeably online, and most explanations of the differences read like they were written by someone trying to sound smart at a pitch event rather than someone who's actually run one of these. Here's the version without the jargon.",
      },
      { type: "heading", text: "An agency sells time" },
      {
        type: "paragraph",
        text: "An agency takes a client's problem and builds a solution for money, on the client's timeline, to the client's spec. The client owns the result. The agency owns nothing when the contract ends except the fee already paid and whatever reputation the work earned. This is a completely legitimate business model — a huge amount of software gets built this way — but the agency's upside is capped at hours billed. Do the work well enough and the reward is more hours to bill.",
      },
      { type: "heading", text: "An accelerator sells belief, briefly" },
      {
        type: "paragraph",
        text: "An accelerator takes a small stake in a company that already exists, in exchange for a few months of mentorship, some cash, and a demo day at the end. The company was someone else's idea before the accelerator ever met them. The accelerator's job is compression: take a business that would develop over two years and force a version of it into three months. It works well for teams that already have conviction and just need speed and connections. It doesn't build anything itself.",
      },
      { type: "heading", text: "A venture studio builds the company from inside" },
      {
        type: "paragraph",
        text: "This is the model FrictionLab runs. The studio doesn't wait for someone to bring an idea and a team. It generates the idea, builds the product, and either runs the resulting company itself or spins it out with the studio retaining ownership.",
      },
      {
        type: "paragraph",
        text: "The incentive structure is the whole difference. An agency gets paid whether or not the client's product ever finds a single user — the invoice clears either way. An accelerator gets a stake in a company that already had momentum before it walked in the door. A studio has neither safety net. If the product doesn't work, there's no client to bill and no other team's traction to point to. The studio absorbs the loss directly, which is exactly why studios build fewer things per year than agencies and take longer per product than accelerators expect. The risk sits in one place instead of being spread across a client roster or a portfolio of founders who did the early work themselves.",
      },
      { type: "heading", text: "What this looks like inside FrictionLab" },
      {
        type: "paragraph",
        text: "In practice, every product in the portfolio — ScholarPilot, PropMate AI, and the rest — started the same way: an idea I picked, not a client's brief or a founder's pitch deck. I write the spec, build the MVP with Claude Code doing the engineering lift, and I'm the one deciding whether a product ships, pivots, or gets shelved. There's no client relationship to maintain and no board to report to before the thing has proven anything.",
      },
      {
        type: "paragraph",
        text: "The upside of that is real ownership. Every dollar ScholarPilot eventually makes belongs to the studio, not a client who commissioned it. The downside is just as real: no mentor network, no cohort of other founders solving the same problems in parallel, no cash advance while the product finds its first customer. Whatever FrictionLab needs — capital, patience, a second opinion — has to come from inside the studio itself, at least for now.",
      },
      { type: "heading", text: "So which one is FrictionLab" },
      {
        type: "paragraph",
        text: "Mostly a venture studio, run at a scale of one. It doesn't have the balance sheet of an Atomic or an Expa, and it isn't pretending to. What it shares with those larger studios is the structural choice that actually defines the category: the studio is the one taking the risk on the idea, not a client paying to have someone else's idea executed, and not an accelerator collecting equity in a bet someone else already placed.",
      },
      {
        type: "paragraph",
        text: "That's the honest answer to the question people ask more often than they realize.",
      },
    ],
  },
  {
    slug: "how-i-use-claude-code-to-run-seven-products-solo",
    title: "How I Use Claude Code to Run Seven AI Products Solo",
    excerpt:
      "Seven live AI products, one person. The honest version of how that works: Claude Code used like an engineering hire, and a hard line about which decisions never get delegated.",
    categorySlug: "startup-building",
    author: "Talukder Abir Hasan",
    date: "2026-07-29",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        text: "FrictionLab runs seven AI SaaS products. There is one person on the team. Every session, when people ask how that's possible, the honest answer disappoints them a little: there's no secret framework, no team of contractors hiding behind the scenes. It's Claude Code, used the way you'd use an actual engineering hire, and a set of habits about what I do and don't hand off.",
      },
      { type: "heading", text: "The division of labor" },
      {
        type: "paragraph",
        text: "I make every decision that requires judgment about the business: what to build, what to cut, how to price something, which bug actually matters to a real customer versus which one is just annoying to look at. Claude Code makes almost every decision about how to implement what I've decided. Database schema, API integrations, auth flows, deployment configuration, the exact wiring between Stripe and a webhook — all of that runs through it.",
      },
      {
        type: "paragraph",
        text: "The split isn't \"AI does the easy parts, I do the hard parts.\" Plenty of what Claude Code handles is genuinely hard in the way that matters to an engineer: getting a Cloudflare Email Routing SPF record to coexist with a Resend sending domain without breaking either one is fiddly, unforgiving work. I don't do that work. I read the explanation of what was done, decide if it matches what the business actually needs, and either approve it or push back.",
      },
      { type: "heading", text: "Where it goes wrong if you're not careful" },
      {
        type: "paragraph",
        text: "The failure mode isn't the AI writing bad code. In my experience it's the opposite problem: the code is usually fine, syntactically correct, and passes whatever tests exist. The risk is approving something that's technically right and wrong for the business, because it's easy to skim a diff, see that it compiles, and move on without asking whether this is actually the right call.",
      },
      {
        type: "paragraph",
        text: "A concrete example: early in one product's build, a document-rejection email feature got flagged as ready to ship. It was correct code. It also would have sent real emails from an unverified sending domain, which some providers silently throttle or block. Catching that wasn't a coding problem. It was a \"does this actually work in production, for real users, today\" problem, and that's the part that still needs a human paying attention, every time.",
      },
      { type: "heading", text: "What actually changed for someone building alone" },
      {
        type: "paragraph",
        text: "Three years ago, seven live products from one person would have meant either a co-founder or a much smaller scope than I'm running now. The tools didn't remove the need for engineering judgment. They removed the need to personally type out every implementation of that judgment, which is a different thing.",
      },
      {
        type: "paragraph",
        text: "What that buys, concretely: I can go from \"students need visa interview practice\" to a working feature in ScholarPilot in a single session, instead of that idea sitting in a backlog for weeks waiting on engineering time I don't have. The bottleneck moved from \"can we build this\" to \"should we build this, and is it actually the right next move for the business\" — which, if I'm honest, is a harder and more interesting problem than the one it replaced.",
      },
      { type: "heading", text: "The part I'm still working on" },
      {
        type: "paragraph",
        text: "Building fast doesn't fix the actual bottleneck once a product is live and working. I have warm leads on one of my products who liked what they saw and haven't converted, and the tools that let me ship seven products didn't do anything to fix that — because that's not an engineering problem. It's a \"pick up the phone\" problem, and no amount of AI-assisted development touches it. If there's a lesson in running a solo AI-first studio that's worth taking seriously, it's that one: the tools change what you can build alone, not what you're willing to actually go sell.",
      },
    ],
  },
  {
    slug: "building-ai-venture-studio-from-bangladesh",
    title: "Building an AI Venture Studio from Bangladesh",
    excerpt:
      "How FrictionLab turns a one-person operation into a portfolio of AI-first companies — and the systems that make it possible.",
    categorySlug: "startup-building",
    author: "Talukder Abir Hasan",
    date: "2025-12-10",
    readingMinutes: 6,
    content: [
      {
        type: "paragraph",
        text: "I studied at North South University and dropped out. What I actually enjoyed was the part where a system either worked or it didn't. Buildings and blueprints take too long to tell you which one. Software tells you in seconds. So I taught myself to code and pointed everything at that instead.",
      },
      {
        type: "paragraph",
        text: "FrictionLab is what came out of that shift. It's registered as a Wyoming LLC, and I run it alone from Tangail, a small district a few hours outside Dhaka. Those two facts sit oddly next to each other on paper, but they're both deliberate. The US entity isn't about pretending to be somewhere I'm not — it's the practical layer that lets Bangladesh-built software sell to a global market without friction on payments, contracts, or trust. The name is literal. Removing friction between an idea and the thing that actually ships is the entire job.",
      },
      { type: "heading", text: "Why a studio instead of one product" },
      {
        type: "paragraph",
        text: "Most startup advice assumes you pick one problem and go deep. That's good advice if you have a team and a runway clock. Working alone, I found the opposite more useful: build several products that share the same underlying muscle — auth, billing, email infrastructure, deployment pipelines — so each new one gets cheaper to launch than the last. ScholarPilot handles study-abroad planning for international students. PropMate AI handles property management for landlords and small agencies. PromptCraft, LeadMate AI, TubeCommand, and a few others each solve one specific, narrow problem for one specific kind of user. None of them need to be a unicorn. They need to work, and they need to not require a team to keep working.",
      },
      {
        type: "paragraph",
        text: "That's the actual definition of a venture studio, stripped of the pitch-deck language: a place that builds companies using shared infrastructure and shared judgment, rather than funding companies someone else builds.",
      },
      { type: "heading", text: "What \"AI-first\" means in practice" },
      {
        type: "paragraph",
        text: "I use Claude Code the way a founder with more money would use a small engineering team. Authentication flows, Stripe integrations, email routing, database migrations — the mechanical parts of building software get delegated to it, and I stay in the seat that actually needs a human: deciding what to build, catching the places where an automated fix is wrong for the business even though it's syntactically correct, and doing the parts of running a company that no model can do for you, like talking to an actual customer.",
      },
      {
        type: "paragraph",
        text: "This isn't a story about replacing engineers with a chatbot. It's closer to what a solo carpenter does with good power tools: the saw doesn't design the cabinet, but it changes what one person can build alone in a day. Three years ago, running seven live products by yourself would have meant either a much smaller scope or a co-founder. Now it means a disciplined stack and a lot of sessions spent reviewing what the tools produced rather than writing it by hand.",
      },
      { type: "heading", text: "The parts nobody puts in the pitch" },
      {
        type: "paragraph",
        text: "It would be dishonest to make this sound easier than it is. Working solo means every bug report, every customer email, and every infrastructure decision routes through one inbox, which is mine. There's no one to hand off the parts you're bad at. Progress on any single product is slower than it would be with a dedicated team on it, because attention is split across all of them. And the instinct to keep building new things — a new landing page, a new integration, one more product — is constant, even when the better use of a week is picking up the phone to the handful of people who already said yes and haven't paid yet. That tension between building and selling doesn't go away just because the tools got better.",
      },
      { type: "heading", text: "Where this is headed" },
      {
        type: "paragraph",
        text: "The studio model only works if the shared infrastructure keeps getting cheaper to reuse, so most of what happens behind the scenes at FrictionLab is exactly that — building the internal systems, not just the customer-facing products. Aurora, the internal command center that ties the portfolio together, exists for that reason. It's not a product for sale. It's the thing that makes running several products from one desk in Tangail actually sustainable.",
      },
      {
        type: "paragraph",
        text: "I don't think the interesting story here is \"AI lets one person do the work of ten.\" Most of the time it lets one focused person do the work of two or three, and that's still a meaningful shift if you're starting with nothing but a laptop and a Wyoming filing. The bigger claim I'd make is narrower: the geography that used to decide who got to build global software doesn't decide it anymore. The constraint moved. What's left is the same thing it always was — picking the right problems and actually finishing them.",
      },
    ],
  },
  {
    slug: "agents-that-actually-ship-work",
    title: "Agents That Actually Ship Work, Not Demos",
    excerpt:
      "The difference between a flashy AI demo and an agent you can trust in production comes down to a few hard design choices.",
    categorySlug: "ai-agents",
    author: "Talukder Abir Hasan",
    date: "2025-11-28",
    readingMinutes: 8,
    content: [
      {
        type: "paragraph",
        text: "Most AI agent demos look magical and break the moment they meet the real world. The gap between demo and product is not model quality — it is engineering discipline.",
      },
      { type: "heading", text: "Constrain the problem" },
      {
        type: "paragraph",
        text: "Reliable agents do one job inside clear boundaries. Narrow scope, explicit tools, and well-defined success criteria beat open-ended autonomy every time.",
      },
      { type: "heading", text: "Verify, then trust" },
      {
        type: "paragraph",
        text: "Production agents check their own work: validating outputs, retrying on failure, and escalating to a human when confidence is low. Verification is what turns a clever script into infrastructure.",
      },
      { type: "heading", text: "Observe everything" },
      {
        type: "paragraph",
        text: "You cannot improve what you cannot see. Logging every step, input, and decision makes an agent debuggable — and debuggable agents are the only ones worth shipping.",
      },
    ],
  },
  {
    slug: "prompt-libraries-as-product-infrastructure",
    title: "Prompt Libraries as Product Infrastructure",
    excerpt:
      "Why treating prompts like reusable, versioned assets is the unlock for shipping AI features fast and consistently.",
    categorySlug: "prompt-engineering",
    author: "Talukder Abir Hasan",
    date: "2025-11-14",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        text: "Prompts are usually scattered across code, notebooks, and chat history. That works for a prototype and collapses for a product. Treating prompts as infrastructure changes the trajectory.",
      },
      { type: "heading", text: "Version everything" },
      {
        type: "paragraph",
        text: "A prompt is code. It deserves versioning, review, and a changelog. When a prompt changes, you should know what changed, why, and what it affected.",
      },
      { type: "heading", text: "Reuse over rewrite" },
      {
        type: "paragraph",
        text: "A shared library of tested prompts means every new feature starts from proven building blocks instead of a blank page. This is exactly the problem Prom Craft is built to solve.",
      },
    ],
  },
  {
    slug: "automation-that-removes-real-friction",
    title: "Automation That Removes Real Friction",
    excerpt:
      "Not all automation is created equal. The highest-leverage automations remove the work nobody should be doing by hand.",
    categorySlug: "automation",
    author: "Talukder Abir Hasan",
    date: "2025-10-30",
    readingMinutes: 6,
    content: [
      {
        type: "paragraph",
        text: "Automation is often pitched as a productivity hack. At FrictionLab it is a design principle: every repeated manual step is friction waiting to be removed.",
      },
      { type: "heading", text: "Start with the boring work" },
      {
        type: "paragraph",
        text: "The best first automations are unglamorous — data entry, follow-ups, reporting. They free human attention for the work that actually compounds.",
      },
      { type: "heading", text: "Connect the tools you already use" },
      {
        type: "paragraph",
        text: "Platforms like Make.com and n8n let you wire existing tools into a single pipeline, no rebuild required. Small automations, stacked together, become an execution engine.",
      },
    ],
  },
  {
    slug: "shipping-a-saas-mvp-in-weeks",
    title: "Shipping a SaaS MVP in Weeks, Not Months",
    excerpt:
      "A practical playbook for taking a SaaS idea from blank repo to paying users without drowning in scope.",
    categorySlug: "saas",
    author: "Talukder Abir Hasan",
    date: "2025-10-12",
    readingMinutes: 7,
    content: [
      {
        type: "paragraph",
        text: "Most SaaS MVPs die from scope, not from lack of demand. The discipline of shipping small is what separates products that launch from projects that linger.",
      },
      { type: "heading", text: "Cut to one core loop" },
      {
        type: "paragraph",
        text: "Find the single workflow your product must nail and build only that. Everything else is a distraction until the core loop delivers value.",
      },
      { type: "heading", text: "Charge early" },
      {
        type: "paragraph",
        text: "Pricing is the fastest way to learn whether you have a product or a hobby. Put a payment link in front of users sooner than feels comfortable.",
      },
    ],
  },
  {
    slug: "ai-for-study-abroad-and-admissions",
    title: "AI for Study Abroad and Admissions",
    excerpt:
      "How AI is reshaping test prep, university matching, and the admissions journey for students worldwide.",
    categorySlug: "education-technology",
    author: "Talukder Abir Hasan",
    date: "2025-09-26",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        text: "The path to studying abroad is full of friction: standardized tests, university research, applications, and scholarships, each with its own maze. AI can guide students through all of it.",
      },
      { type: "heading", text: "Personalized guidance at scale" },
      {
        type: "paragraph",
        text: "An AI co-pilot can match a student to the right universities and scholarships based on their profile, then break the application into clear, achievable steps. This is the vision behind Scholar Pilot.",
      },
      { type: "heading", text: "Smarter test preparation" },
      {
        type: "paragraph",
        text: "Adaptive AI tutoring for IELTS, TOEFL, GRE, GMAT, and SAT meets each student where they are, focusing practice exactly where it moves the score.",
      },
    ],
  },
];

// Returns the most recent posts, newest first.
export function getRecentPosts(limit = 3): BlogPost[] {
  return [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

// Returns a single post by its slug, or undefined if not found.
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

// All post slugs — used by generateStaticParams for /blog/[slug].
export const postSlugs = posts.map((post) => post.slug);
