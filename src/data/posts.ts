// Blog post data — sample posts with full content for SEO.
// Replace with a CMS later; the shape (and the page code) stays the same.

// A single block of article content. Kept simple so we can render it without
// a markdown dependency: each block is either a subheading or a paragraph.
export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string };

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
