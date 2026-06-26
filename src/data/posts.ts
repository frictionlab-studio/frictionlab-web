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
  // Short teaser shown on cards and used as the meta description.
  excerpt: string;
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
        text: "A venture studio used to require a large team, deep funding, and years of runway. AI has quietly rewritten that equation. Today a small, disciplined team can build, launch, and operate several software companies at once — provided it has the right systems.",
      },
      { type: "heading", text: "The studio model, reimagined" },
      {
        type: "paragraph",
        text: "FrictionLab treats every product as a node in one shared system. Design, infrastructure, and AI foundations are built once and reused everywhere, so launching a new venture is closer to configuration than construction.",
      },
      { type: "heading", text: "Why Bangladesh, why now" },
      {
        type: "paragraph",
        text: "Operating from Dhaka on a US LLC foundation pairs global market reach with a lean, cost-efficient execution engine. Distance is just another form of friction — and AI removes it.",
      },
      {
        type: "paragraph",
        text: "The goal is not to build one company perfectly. It is to build a machine that builds companies repeatably.",
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
