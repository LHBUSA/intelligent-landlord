export type ArticleCategory = 'guides' | 'market' | 'legal'

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: ArticleCategory
  categoryLabel: string
  pill: string
  tags: string[]
  publishedAt: string
  readTime: string
  author: string
  body: string
  image?: string
  featured?: boolean
  seoTitle?: string
  seoDescription?: string
  faqs?: { q: string; a: string }[]
}

export const ARTICLES: Article[] = [
  // ── GUIDES ──────────────────────────────────────────────────────────────────
  {
    slug: 'landlord-tenant-law-complete-guide',
    title: 'Landlord-Tenant Law: What Every Landlord Must Know in 2026',
    excerpt: 'State laws vary dramatically. Security deposits, entry notice, habitability standards, and eviction procedures differ by jurisdiction — and getting it wrong is expensive.',
    category: 'guides',
    categoryLabel: 'Landlord Guides',
    pill: 'Essential Reading',
    tags: ['landlord-tenant law', 'legal', 'lease', 'eviction'],
    publishedAt: '2026-03-01',
    readTime: '12 min',
    author: 'IL Editorial',
    featured: true,
    body: `
<h2>Why Landlord-Tenant Law Is More Complex Than Most People Realize</h2>
<p>Unlike federal law, which applies uniformly across the country, landlord-tenant law is almost entirely governed at the state level — and in many cases, at the city or county level. A landlord operating in California faces an entirely different legal landscape than one in Texas, Ohio, or Florida. Violating even minor procedural rules can void an eviction case, result in penalties, or expose a landlord to a tenant lawsuit.</p>
<p>This guide covers the core legal concepts every landlord must understand regardless of state: habitability, security deposits, required notices, and the eviction process.</p>

<h2>The Implied Warranty of Habitability</h2>
<p>In virtually every state, landlords are legally required to maintain rental units in a habitable condition. This means functional heating, plumbing, electrical systems, weatherproofing, and freedom from pest infestations. The standard is not cosmetic — it is safety and functionality.</p>
<p>If a landlord fails to maintain habitability after receiving written notice, tenants in most states have several legal remedies: repair-and-deduct (paying for repairs out of rent), rent withholding (placing rent in escrow), or lease termination without penalty. Courts take habitability claims seriously — this is not an area where cutting corners pays off.</p>

<h2>Security Deposit Rules by State</h2>
<p>Security deposit law is one of the most varied — and most litigated — areas of landlord-tenant law. Key variables across states:</p>
<ul>
  <li><strong>Maximum amount:</strong> Most states cap deposits at 1–2 months rent. Some states (Texas, Florida) have no statutory cap.</li>
  <li><strong>Holding requirements:</strong> Some states require deposits be held in separate escrow accounts and prohibit commingling with operating funds.</li>
  <li><strong>Return timeline:</strong> Ranges from 14 days (Massachusetts) to 45 days (Georgia) after move-out. Missing the deadline often results in automatic forfeiture of the right to withhold any amount.</li>
  <li><strong>Itemization:</strong> Deductions must be itemized in writing. "General wear and tear" cannot be deducted — only damage beyond normal use.</li>
</ul>
<p>Always document the property condition at move-in and move-out with dated photos and a written checklist signed by both parties.</p>

<h2>Required Notice Before Entry</h2>
<p>Most states require landlords to give 24–48 hours notice before entering an occupied unit — even for non-emergency maintenance. Entering without notice violates the tenant's right to quiet enjoyment and can constitute harassment under some state laws. Emergency entry (burst pipes, fire, gas leak) is generally permitted without advance notice but should be documented.</p>

<h2>The Eviction Process: A Brief Overview</h2>
<p>Evictions are a court process. Self-help evictions — changing locks, removing belongings, shutting off utilities — are illegal in every state and expose landlords to significant liability.</p>
<p>The general process follows this sequence:</p>
<ol>
  <li><strong>Written notice to the tenant</strong> — Pay or Quit (nonpayment), Cure or Quit (lease violation), or Unconditional Quit (repeat violation). Notice periods vary by state and violation type.</li>
  <li><strong>Filing with the court</strong> — If the tenant does not comply with the notice, the landlord files an unlawful detainer or eviction action with the local court.</li>
  <li><strong>Court hearing</strong> — Both parties present their case. A judgment for possession is entered if the landlord prevails.</li>
  <li><strong>Writ of possession</strong> — If the tenant does not vacate voluntarily, a law enforcement officer (sheriff or marshal) executes the writ and removes the tenant.</li>
</ol>
<p>Timing ranges from as little as 3–4 weeks (Texas) to several months (California, New York) depending on local court schedules and tenant defenses.</p>

<h2>The Most Common — and Costly — Landlord Mistakes</h2>
<ul>
  <li>Using a generic lease downloaded from the internet that does not comply with state law</li>
  <li>Accepting partial rent payment during an eviction (resets the notice clock in many states)</li>
  <li>Failing to return the security deposit within the statutory deadline</li>
  <li>Making verbal agreements that contradict the written lease</li>
  <li>Retaliating against a tenant for exercising legal rights (filing a complaint, organizing tenants, requesting repairs)</li>
</ul>
    `,
    faqs: [
      { q: 'Can I evict a tenant for any reason?', a: 'In states without just cause eviction requirements, landlords can decline to renew a lease at the end of its term. However, mid-lease evictions require a legally valid reason: nonpayment, lease violation, or illegal activity. Many cities (especially in California and New York) require just cause even for non-renewals.' },
      { q: 'How much can I charge for a security deposit?', a: 'It depends on your state. Most states cap deposits at one or two months rent. Some have no cap. Check your state-specific page on this site for the exact limit.' },
      { q: 'Do I need a lawyer to evict a tenant?', a: 'Not required in most jurisdictions, but strongly recommended for contested evictions or complex situations. A procedural error can get your case dismissed and require starting over from the notice stage.' },
    ],
  },
  {
    slug: 'how-to-screen-tenants-legally',
    title: 'How to Screen Tenants Without Getting Sued',
    excerpt: 'The Fair Housing Act draws a hard line between smart screening and illegal discrimination. Here is what you can ask, what you can check, and what to never put in writing.',
    category: 'guides',
    categoryLabel: 'Landlord Guides',
    pill: 'Risk Management',
    tags: ['tenant screening', 'fair housing', 'credit check', 'background check'],
    publishedAt: '2026-02-24',
    readTime: '9 min',
    author: 'IL Editorial',
    body: `
<h2>The Foundation: Written Screening Criteria</h2>
<p>Before you accept a single application, write down your tenant selection criteria and apply them uniformly to every applicant. This protects you legally and keeps your decision-making objective. Your criteria should include minimum income requirements (typically 2.5–3x monthly rent), credit score thresholds, rental history requirements, and criminal background policy.</p>

<h2>What the Fair Housing Act Prohibits</h2>
<p>Federal law prohibits discrimination based on seven protected classes: race, color, national origin, religion, sex, familial status, and disability. Many states add additional protections: source of income (housing vouchers), sexual orientation, gender identity, marital status, and age.</p>
<p>Neutral-sounding policies can still constitute illegal discrimination if they have a "disparate impact" on a protected class. A blanket policy of rejecting all applicants with any criminal history, for example, has been challenged under disparate impact theory.</p>

<h2>What You Can Check</h2>
<ul>
  <li><strong>Credit report:</strong> Authorized under the Fair Credit Reporting Act with applicant consent. Reveals payment history, collections, judgments, and bankruptcies.</li>
  <li><strong>Criminal background:</strong> Permitted, but evaluate actual risk — HUD guidance advises against blanket bans and recommends individualized assessment.</li>
  <li><strong>Eviction history:</strong> Eviction records are public court records. Landlords can and should check them.</li>
  <li><strong>Income verification:</strong> Pay stubs, bank statements, offer letters, or tax returns for self-employed applicants.</li>
  <li><strong>Rental references:</strong> Call prior landlords. Ask whether they would rent to the applicant again.</li>
</ul>

<h2>Adverse Action Notices</h2>
<p>If you deny an applicant based fully or partially on a consumer report (credit, background, eviction), you are required under the Fair Credit Reporting Act to provide an adverse action notice. This must include the name of the reporting agency, a statement that the agency did not make the decision, and information on the applicant's right to dispute the report.</p>

<h2>Documentation is Your Defense</h2>
<p>Keep all applications, screening reports, and denial reasons on file for at least three years. If you are ever accused of discriminatory denial, documented evidence that you applied consistent criteria to every applicant is your best defense.</p>
    `,
  },
  {
    slug: 'lease-agreement-must-have-clauses',
    title: 'The 12 Clauses Every Lease Agreement Must Include',
    excerpt: 'A lease is your primary legal protection. Generic templates miss critical state-specific requirements and leave you exposed. Here is what your lease must say.',
    category: 'guides',
    categoryLabel: 'Landlord Guides',
    pill: 'Legal Essentials',
    tags: ['lease agreement', 'rental contract', 'legal', 'clauses'],
    publishedAt: '2026-02-18',
    readTime: '8 min',
    author: 'IL Editorial',
    body: `
<h2>Why Generic Leases Fail Landlords</h2>
<p>Most landlords start with a lease template downloaded from the internet. The problem: these templates are often not jurisdiction-specific, not updated for current law, and omit provisions that courts require to enforce certain rights. A missing or improperly worded clause can render key provisions unenforceable at exactly the moment you need them most.</p>

<h2>The 12 Essential Clauses</h2>

<h3>1. Names of All Parties</h3>
<p>List every adult occupant by full legal name. Anyone not listed on the lease has no legal tenancy rights — but a lease that only names one adult in a household of three creates complications. Identify the property owner or management entity exactly as it appears on the deed or entity registration.</p>

<h3>2. Property Description</h3>
<p>Full street address including unit number. If storage units, parking spaces, or other areas are included, describe them explicitly. If they are not included, state that explicitly to avoid future disputes.</p>

<h3>3. Lease Term and Holdover Provisions</h3>
<p>Start date, end date, and what happens if the tenant stays beyond the lease term. Most leases convert to month-to-month on holdover — specify the notice required to terminate a month-to-month tenancy (typically 30 days, but varies by state).</p>

<h3>4. Rent Amount, Due Date, and Late Fees</h3>
<p>Monthly rent, due date (typically the 1st), grace period if any, and late fee amount. Many states cap late fees — verify your state limit before writing this clause.</p>

<h3>5. Security Deposit Terms</h3>
<p>Amount, where it will be held, conditions for withholding, and return timeline. Reference your state statute — it signals professionalism and makes your compliance harder to dispute.</p>

<h3>6. Utilities and Maintenance Responsibilities</h3>
<p>Who pays which utilities. Who is responsible for lawn care, snow removal, appliance maintenance, and HVAC filter replacement. Vague leases on this point lead to the most common tenant disputes.</p>

<h3>7. Entry Notice Requirements</h3>
<p>State the required notice period (typically 24–48 hours) and the acceptable means of delivery. Even if your state mandates this, restating it in the lease reinforces tenant awareness and your compliance.</p>

<h3>8. Pet Policy</h3>
<p>Permitted pets, weight limits, breed restrictions, pet deposit or pet rent (note: these are separate from assistance animal accommodations, which are a Fair Housing Act requirement and cannot be refused).</p>

<h3>9. Subletting and Assignment</h3>
<p>Whether the tenant may sublease and under what conditions. A blanket prohibition on subletting is enforceable in most states but not all — California requires landlords to have a legitimate business reason to deny a sublet request.</p>

<h3>10. Smoking and Illegal Activity</h3>
<p>Explicit prohibition on smoking inside the unit (and ideally on the property) and on illegal activity. These clauses are grounds for eviction if violated and must be spelled out to be enforced.</p>

<h3>11. Lease Termination Conditions</h3>
<p>What constitutes a material breach by either party. What notice is required. What early termination fees apply if the tenant breaks the lease before the end of the term.</p>

<h3>12. State-Required Disclosures</h3>
<p>Every state requires specific disclosures be attached to or incorporated into the lease. Common examples: lead paint disclosure (federal, for pre-1978 homes), mold disclosure (many states), flood zone disclosure, bedbug history, move-in inspection checklist. Missing required disclosures can expose landlords to penalties and complicate security deposit disputes.</p>
    `,
  },

  // ── MARKET ──────────────────────────────────────────────────────────────────
  {
    slug: 'rental-market-outlook-2026',
    title: 'U.S. Rental Market Outlook 2026: What Landlords Need to Know',
    excerpt: 'New supply hitting the Sun Belt is compressing rents in markets that were red-hot in 2022. Meanwhile, Midwest and Northeast rents continue to climb. The national story masks everything.',
    category: 'market',
    categoryLabel: 'Rental Market',
    pill: 'Market Intelligence',
    tags: ['rental market', 'rent trends', 'vacancy rates', '2026'],
    publishedAt: '2026-03-05',
    readTime: '10 min',
    author: 'IL Editorial',
    featured: true,
    body: `
<h2>The National Headline Masks Diverging Local Markets</h2>
<p>National rent figures tell a story of stabilization. But averages are built from extremes. Markets that absorbed enormous new apartment supply — Austin, Phoenix, Tampa, Nashville — are seeing year-over-year rent declines as developers delivered hundreds of thousands of new units into markets that couldn't absorb them at the pace the 2021-2022 run-up implied.</p>
<p>Meanwhile, supply-constrained coastal metros and Midwest cities with strong employment bases continue to see rents press higher. Chicago, Columbus, Indianapolis, and Cleveland are all posting meaningful rent growth with limited new construction pipelines. For landlords in these markets, 2026 remains a strong operating environment.</p>

<h2>Sun Belt: The Correction Phase</h2>
<p>The Sun Belt buildout was historically large. Texas, Florida, Georgia, Arizona, and Tennessee collectively delivered more new multifamily units in 2023–2024 than at any point since the 1980s. In markets like Austin, asking rents on new listings are running 8–12% below their 2022 peak. Concessions — free months, waived fees, furnished units — are common on Class A properties.</p>
<p>The silver lining for individual landlords: single-family rental demand has held up better than multifamily in most Sun Belt markets. Renters who want a house with a yard are not cross-shopping luxury apartment towers. Your competition is different, and your vacancy rates likely reflect that.</p>

<h2>Midwest: The Quiet Outperformer</h2>
<p>Indianapolis, Columbus, Cleveland, and Kansas City have posted 4–7% rent growth in 2025–2026 with vacancy rates below 5%. These markets combine affordable entry prices, stable employment bases, and low new construction activity. Cap rates in the 6–8% range — significantly higher than coastal markets — continue to attract investors rotating out of Sun Belt positions.</p>

<h2>What Landlords Should Watch</h2>
<ul>
  <li><strong>Local vacancy rates:</strong> A market-level vacancy rate above 8% typically compresses rents and extends days-on-market. Below 5% gives landlords pricing power. Know your submarket specifically, not just your metro.</li>
  <li><strong>New supply pipeline:</strong> Check your city's building permit data or local apartment association reports. Units permitted today hit the market in 12–24 months. A large pipeline is a leading indicator of future rent pressure.</li>
  <li><strong>Employment trends:</strong> Rental demand is employment demand. Major layoffs or plant closures in your primary employer base are a leading indicator of vacancy increases.</li>
  <li><strong>Seasonal patterns:</strong> Rental demand peaks in spring/summer in most markets. Listing vacancies in October–February typically requires either lower rents or longer vacancies. Price accordingly.</li>
</ul>
    `,
  },
  {
    slug: 'cap-rate-explained-rental-investors',
    title: 'Cap Rate Explained: What It Actually Tells You (and What It Doesn\'t)',
    excerpt: 'Cap rate is the most widely used metric in rental real estate — and the most misunderstood. Here is how to calculate it correctly and what it actually measures.',
    category: 'market',
    categoryLabel: 'Rental Market',
    pill: 'Investor Math',
    tags: ['cap rate', 'NOI', 'rental investing', 'ROI', 'cash flow'],
    publishedAt: '2026-02-20',
    readTime: '7 min',
    author: 'IL Editorial',
    body: `
<h2>The Formula — and What Goes Into It</h2>
<p>Cap rate = Net Operating Income ÷ Property Value</p>
<p>NOI is gross rental income minus all operating expenses: property taxes, insurance, maintenance, property management fees, vacancy allowance, and capital reserve. NOI does <em>not</em> include mortgage payments — it is a measure of the property's income productivity independent of financing.</p>

<h2>What Cap Rate Actually Measures</h2>
<p>Cap rate measures the unlevered yield on a property. It answers the question: if I paid all cash for this property, what annual return would the income produce? A 6% cap rate means the property generates $6 in NOI for every $100 of value.</p>
<p>Cap rates also function as a market pricing signal. When investors accept lower cap rates, they are paying more for the same income — typically because they expect rent growth or appreciation. High cap rate markets (7–9%) are pricing in more risk or less growth. Low cap rate markets (3–5%) are pricing in stability or strong appreciation expectations.</p>

<h2>What Cap Rate Does Not Measure</h2>
<ul>
  <li><strong>Cash-on-cash return:</strong> This accounts for financing. A 6% cap rate property with 80% leverage might produce a 10% cash-on-cash return — or 2%, depending on your interest rate. Cap rate ignores debt.</li>
  <li><strong>Total return:</strong> Cap rate ignores appreciation. A 4.5% cap rate in a high-growth market might outperform an 8% cap rate in a stagnant one over 10 years.</li>
  <li><strong>Actual performance:</strong> Cap rates are typically quoted on pro forma NOI — seller assumptions about vacancy and expenses that may be optimistic. Always reconstruct NOI from actual historical financials.</li>
</ul>

<h2>Typical Cap Rates by Market Type (2026)</h2>
<table>
  <thead><tr><th>Market Type</th><th>Typical Cap Rate Range</th></tr></thead>
  <tbody>
    <tr><td>Major coastal metros (NYC, LA, SF)</td><td>3.5%–5%</td></tr>
    <tr><td>Sun Belt metros (Austin, Phoenix, Tampa)</td><td>4.5%–6.5%</td></tr>
    <tr><td>Secondary Midwest cities</td><td>6%–8.5%</td></tr>
    <tr><td>Tertiary and rural markets</td><td>7.5%–10%+</td></tr>
  </tbody>
</table>
    `,
  },

  // ── LEGAL ───────────────────────────────────────────────────────────────────
  {
    slug: 'eviction-process-by-state',
    title: 'The Eviction Process by State: Timelines, Costs, and What to Expect',
    excerpt: 'Eviction timelines range from 3 weeks to 6+ months depending on your state. Know the rules before you need them — not during an active dispute.',
    category: 'legal',
    categoryLabel: 'Legal & State Law',
    pill: 'State Law',
    tags: ['eviction', 'unlawful detainer', 'landlord rights', 'tenant removal'],
    publishedAt: '2026-02-28',
    readTime: '11 min',
    author: 'IL Editorial',
    featured: false,
    body: `
<h2>The Eviction Process: A Step-by-Step Overview</h2>
<p>Eviction is a legal process with defined steps that cannot be skipped or reordered. Self-help eviction — changing locks, removing belongings, shutting off utilities — is illegal in every state and exposes landlords to significant liability including civil damages and sometimes criminal charges.</p>

<h2>Step 1: Written Notice to Vacate</h2>
<p>Before filing anything with a court, landlords must provide written notice to the tenant. The notice type and required period depend on the reason for eviction:</p>
<ul>
  <li><strong>Pay or Quit:</strong> Used for nonpayment of rent. Tenant is given a set period (3–10 days depending on state) to pay the full amount owed or vacate. In many states, accepting any partial payment after serving this notice voids the notice and requires starting over.</li>
  <li><strong>Cure or Quit:</strong> Used for curable lease violations (unauthorized pet, unapproved occupant). Tenant is given a set period to cure the violation or vacate.</li>
  <li><strong>Unconditional Quit:</strong> Used for severe or repeat violations. No opportunity to cure — tenant must vacate within the notice period. Typically requires prior documented violations.</li>
</ul>

<h2>Step 2: Filing the Eviction Action</h2>
<p>If the tenant does not comply with the notice, the landlord files an unlawful detainer action (called "summary possession," "dispossessory," or simply "eviction" depending on state) with the local court — typically the district court or municipal court with jurisdiction over the property address.</p>
<p>Filing fees range from approximately $30 (Texas) to $240+ (California). The landlord must also pay for service of process — official delivery of court papers to the tenant, typically by the sheriff's office.</p>

<h2>Step 3: Court Hearing</h2>
<p>The hearing is typically scheduled 3–30 days after filing depending on court calendar and state procedure. Both parties present their case. Tenants can raise defenses including: improper notice, acceptance of rent after notice, retaliation, or habitability issues. If the landlord prevails, the court enters a judgment for possession.</p>

<h2>Step 4: Writ of Possession and Move-Out</h2>
<p>After judgment, if the tenant does not leave voluntarily, the court issues a writ of possession. The sheriff or marshal posts the writ and schedules a lockout — typically 3–14 days after the writ is issued. On the lockout date, the officer executes the writ and the landlord regains possession of the property.</p>

<h2>Fastest and Slowest States</h2>
<table>
  <thead><tr><th>State</th><th>Typical Timeline</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Texas</td><td>3–4 weeks</td><td>Fastest in the nation. Simple process, landlord-friendly courts.</td></tr>
    <tr><td>Georgia</td><td>3–5 weeks</td><td>Streamlined dispossessory process.</td></tr>
    <tr><td>Florida</td><td>4–6 weeks</td><td>Fast for nonpayment. Longer for lease violations.</td></tr>
    <tr><td>Ohio</td><td>5–8 weeks</td><td>Varies significantly by county.</td></tr>
    <tr><td>New York</td><td>3–6 months</td><td>Among the most tenant-protective. NYC courts significantly slower.</td></tr>
    <tr><td>California</td><td>3–6 months</td><td>Just cause requirements in many cities. Complex court procedures.</td></tr>
    <tr><td>New Jersey</td><td>2–4 months</td><td>Landlord must prove just cause in most situations.</td></tr>
  </tbody>
</table>

<h2>What Evictions Actually Cost</h2>
<p>Beyond lost rent during the process, direct eviction costs typically include: court filing fees ($30–$240), process server or sheriff fees ($50–$150), attorney fees if retained ($500–$3,000+), and property repair and cleaning costs after turnover. All-in costs of $2,000–$5,000 are common for an uncontested eviction — significantly more if contested or if the property is damaged.</p>
<p>This is why tenant screening is the most important investment a landlord can make.</p>
    `,
  },
  {
    slug: 'security-deposit-laws-by-state',
    title: 'Security Deposit Laws by State: Limits, Timelines, and Penalties',
    excerpt: 'Miss your state\'s return deadline by one day and you may forfeit your right to withhold anything. Every state has different rules. Here is what you need to know.',
    category: 'legal',
    categoryLabel: 'Legal & State Law',
    pill: 'State Law',
    tags: ['security deposit', 'landlord law', 'deposit return', 'tenant rights'],
    publishedAt: '2026-02-14',
    readTime: '8 min',
    author: 'IL Editorial',
    body: `
<h2>The Stakes Are Higher Than Most Landlords Realize</h2>
<p>Security deposit disputes are among the most common landlord-tenant legal claims — and landlords lose more of them than they should. Not because the deductions are wrong, but because of procedural failures: missing deadlines, insufficient documentation, or improper itemization.</p>

<h2>Maximum Deposit Amounts</h2>
<table>
  <thead><tr><th>State</th><th>Maximum Deposit</th><th>Return Deadline</th></tr></thead>
  <tbody>
    <tr><td>California</td><td>1 month rent (unfurnished)</td><td>21 days</td></tr>
    <tr><td>Texas</td><td>No statutory limit</td><td>30 days</td></tr>
    <tr><td>Florida</td><td>No statutory limit</td><td>15 days (no deductions) / 30 days (with deductions)</td></tr>
    <tr><td>New York</td><td>1 month rent</td><td>14 days</td></tr>
    <tr><td>Ohio</td><td>No statutory limit</td><td>30 days</td></tr>
    <tr><td>Illinois</td><td>No statutory limit (Chicago: 1.5x)</td><td>30 days</td></tr>
    <tr><td>Georgia</td><td>No statutory limit</td><td>30 days</td></tr>
    <tr><td>Massachusetts</td><td>1 month rent</td><td>30 days</td></tr>
    <tr><td>Washington</td><td>No statutory limit</td><td>21 days</td></tr>
    <tr><td>Colorado</td><td>No statutory limit</td><td>30 days (1 month for SFR)</td></tr>
  </tbody>
</table>

<h2>Normal Wear and Tear vs. Damage: The Crucial Distinction</h2>
<p>Landlords cannot deduct for normal wear and tear — the expected deterioration of a property from ordinary use over time. Courts have been fairly consistent in defining this line:</p>
<ul>
  <li><strong>Wear and tear (not deductible):</strong> Faded paint, minor scuffs on walls, carpet worn flat in traffic areas, small nail holes from pictures, loose hinges, dimmed lightbulbs.</li>
  <li><strong>Damage (deductible):</strong> Large holes in walls, pet stains in carpet, broken fixtures, missing blinds, burns on countertops, unauthorized paint colors.</li>
</ul>
<p>The longer a tenant occupies a property, the more wear is considered normal. A tenant who lived in a unit for five years is not responsible for carpet that needs replacement — a 10–15 year useful life for carpet means significant useful life has been consumed by normal tenancy.</p>

<h2>The Move-In/Move-Out Checklist: Your Most Important Document</h2>
<p>A signed move-in inspection checklist documenting pre-existing conditions is your primary defense against disputed deductions. Without it, a tenant can claim any damage pre-existed their tenancy and you have no documented baseline to counter with. Many states require landlords to provide a move-in checklist — but even where not required, failing to use one is a costly mistake.</p>
    `,
  },
]

// ── Exports ──────────────────────────────────────────────────────────────────

export const ALL_ARTICLES = ARTICLES
export const ARTICLE_COUNT = ARTICLES.length
export const CATEGORY_COUNTS = {
  guides: ARTICLES.filter(a => a.category === 'guides').length,
  market: ARTICLES.filter(a => a.category === 'market').length,
  legal:  ARTICLES.filter(a => a.category === 'legal').length,
}

export function getArticle(category: ArticleCategory, slug: string): Article | undefined {
  return ARTICLES.find(a => a.category === category && a.slug === slug)
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return ARTICLES.filter(a => a.category === category)
}

export function getFeaturedArticle(): Article | undefined {
  return ARTICLES.find(a => a.featured)
}

export function getRecentArticles(limit = 6, excludeSlug?: string): Article[] {
  return ARTICLES
    .filter(a => a.slug !== excludeSlug)
    .slice(0, limit)
}

export function getSlugsForCategory(category: ArticleCategory): string[] {
  return ARTICLES.filter(a => a.category === category).map(a => a.slug)
}

export function getRelatedArticles(category: ArticleCategory, slug: string, limit = 3): Article[] {
  return ARTICLES
    .filter(a => a.category === category && a.slug !== slug)
    .slice(0, limit)
}

export function getSearchIndex() {
  return ARTICLES.map(a => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    category: a.category,
    categoryLabel: a.categoryLabel,
    tags: a.tags,
  }))
}
