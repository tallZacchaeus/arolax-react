/**
 * Brandfirst Media website copy.
 *
 * Source: BrandfirstMedia-Website-Content.md ("Draft for client review").
 * Copy here is the client's own; anything the document left as a placeholder is
 * marked TODO rather than invented.
 */

export const site = {
  name: 'Brandfirst Media',
  tagline: 'Media and Brand Communications Agency',
  location: 'Lagos, Nigeria',
  // The content document leaves these blank — do not invent them.
  phone: null,   // TODO: client to supply
  email: null,   // TODO: client to supply
  social: [{ label: 'Facebook', href: 'https://www.facebook.com/BrandfirstMedia' }],
  meta: {
    title: 'Brandfirst Media | Media and Brand Communications Agency in Lagos',
    description:
      'Brandfirst Media helps brands plan, execute, and measure strategic media, digital, and integrated marketing communication campaigns in Lagos, Nigeria.',
  },
};

export const home = {
  hero: {
    // Two explicit lines. Natural wrapping broke to three at common laptop
    // widths and two on wide screens, so the balanced split is fixed here.
    headlineLines: ['Putting Your Brand First', 'in Every Media Decision'],
    headline: 'Putting Your Brand First in Every Media Decision',
    sub: 'Brandfirst Media helps businesses and organizations plan, create, deliver, and measure strategic campaigns across traditional and digital media.',
    primary: { label: 'Start a Project', href: '/contact' },
    secondary: { label: 'Explore Our Services', href: '/services' },
    support:
      'From media strategy and brand communications to campaign execution and performance measurement, we help brands show up with the right message, in the right channels, at the right time.',
  },
  intro: {
    headline: 'Strategic Media Solutions for Brands That Want to Grow',
    body: [
      'Strong brands are not built by visibility alone. They are built through consistent messaging, smart channel choices, audience insight, and disciplined execution.',
      'Brandfirst Media works with organizations to make their communications more focused, more engaging, and more effective. We support clients across brand strategy, media planning, digital communication, campaign management, and measurement.',
    ],
  },
  why: {
    headline: 'Built Around Strategy, Reach, and Results',
    body: 'Every campaign needs more than creative ideas. It needs a clear objective, a defined audience, the right channel mix, and a practical way to measure success. Brandfirst Media brings these pieces together so brands can communicate with purpose and confidence.',
    highlights: [
      'Audience-led planning',
      'Integrated campaign thinking',
      'Traditional and digital media experience',
      'Clear reporting and performance review',
      'Practical strategies tailored to each client',
    ],
  },
  industries: {
    headline: 'Supporting Brands Across Sectors',
    body: 'We work with brands, organizations, and institutions that need stronger communication, better visibility, and more effective audience engagement.',
    sectors: [
      'Consumer brands',
      'Corporate organizations',
      'Financial services',
      'Public sector and government agencies',
      'Nonprofits and development organizations',
      'Education and professional services',
      'Retail and lifestyle brands',
    ],
  },
  cta: {
    headline: 'Ready to Put Your Brand First?',
    body: 'Let us help you plan and deliver a campaign that reaches the right audience and supports your business goals.',
    button: { label: 'Contact Brandfirst Media', href: '/contact' },
  },
};

/** Six services — short cards on the homepage, full detail on /services. */
export const services = [
  {
    n: '01',
    slug: 'media-strategy-and-planning',
    title: 'Media Strategy and Planning',
    card: 'We help brands understand their audience, select the right platforms, and build media plans that support clear business objectives.',
    body: 'A strong media plan begins with a clear understanding of the brand, audience, market, budget, and desired outcome. We help clients define campaign priorities and choose the right mix of channels to reach their target audience effectively.',
    includes: ['Audience and market review', 'Campaign objective setting', 'Channel recommendation', 'Media plan development', 'Budget allocation guidance', 'Campaign rollout planning'],
  },
  {
    n: '02',
    slug: 'integrated-marketing-communications',
    title: 'Integrated Marketing Communications',
    card: 'We align advertising, public relations, social media, content, and direct communication into one consistent brand message.',
    body: 'Customers interact with brands across many channels. We help clients create a consistent communication approach across advertising, public relations, digital platforms, social media, direct marketing, and content.',
    includes: ['Communication strategy', 'Campaign messaging', 'Brand storytelling', 'Channel alignment', 'Promotional campaign planning', 'Stakeholder communication support'],
  },
  {
    n: '03',
    slug: 'digital-and-social-media-marketing',
    title: 'Digital and Social Media Marketing',
    card: 'We create digital strategies that help brands build awareness, engage communities, generate leads, and strengthen customer relationships.',
    body: 'Digital platforms give brands the opportunity to build communities, listen to customers, promote offers, and generate leads. We help clients use digital and social media with purpose, structure, and measurable goals.',
    includes: ['Social media strategy', 'Content planning', 'Community engagement direction', 'Campaign calendar development', 'Paid digital campaign support', 'Reporting and recommendations'],
  },
  {
    n: '04',
    slug: 'media-buying-and-campaign-placement',
    title: 'Media Buying and Campaign Placement',
    card: 'We support campaign placement across relevant media channels, helping brands reach the people who matter most.',
    body: 'Good placement helps the right message reach the right audience at the right time. We support brands in planning and placing campaigns across suitable traditional and digital media channels.',
    includes: ['Media channel selection', 'Campaign scheduling', 'Placement coordination', 'Budget management support', 'Vendor liaison', 'Campaign monitoring'],
  },
  {
    n: '05',
    slug: 'brand-and-content-development',
    title: 'Brand and Content Development',
    card: 'We help shape messages, campaign ideas, and content that connect with audiences and support long-term brand equity.',
    body: 'Content should reflect the brand, serve the audience, and support campaign goals. We help clients create communication materials that are clear, persuasive, and aligned with their brand identity.',
    includes: ['Campaign concepts', 'Copy direction', 'Social content themes', 'Brand messaging', 'Promotional content', 'Presentation and proposal support'],
  },
  {
    n: '06',
    slug: 'research-and-performance-measurement',
    title: 'Research and Performance Measurement',
    card: 'We track campaign activity and results so clients can understand what is working and make better marketing decisions.',
    body: 'Measurement helps brands understand the value of their campaigns. We support clients with tracking, reporting, and performance review so future decisions can be based on evidence.',
    includes: ['Campaign performance tracking', 'Media monitoring', 'Competitor review', 'Audience feedback review', 'Report preparation', 'Post-campaign recommendations'],
  },
];

export const about = {
  hero: {
    headline: 'About Brandfirst Media',
    sub: 'A media and brand communications agency focused on helping organizations reach, engage, and influence their audiences.',
  },
  overview: [
    'Brandfirst Media is a strategic media and communications agency based in Lagos, Nigeria. We help brands and organizations develop communication plans, execute campaigns, manage media visibility, and measure campaign performance.',
    'Our work is guided by a simple idea: the brand must come first. Before media is bought, content is produced, or campaigns are launched, we focus on the audience, the message, and the result the brand needs to achieve.',
  ],
  philosophy: {
    headline: 'Brand First. Audience Always.',
    body: [
      'We believe effective communication starts with understanding. A campaign should not only be visible; it should be relevant, consistent, and useful to the people it is meant to reach.',
      'That is why we combine media thinking, brand strategy, social communication, and performance measurement to help clients make informed decisions and build stronger relationships with their audiences.',
    ],
  },
  mission: 'To help brands communicate clearly, reach the right people, and achieve measurable results through strategic media and integrated marketing communication.',
  vision: 'To be a trusted media and communications partner for brands that want to build visibility, relevance, and long-term value.',
  values: [
    { title: 'Strategy',       text: 'We start with the objective, the audience, and the message before choosing channels.' },
    { title: 'Clarity',        text: 'We make communication focused, consistent, and easy to understand.' },
    { title: 'Accountability', text: 'We believe campaigns should be reviewed, measured, and improved.' },
    { title: 'Creativity',     text: 'We develop ideas and messages that help brands stand out meaningfully.' },
    { title: 'Partnership',    text: 'We work closely with clients to understand their goals and deliver practical solutions.' },
  ],
};

export const work = {
  hero: {
    headline: 'Our Work',
    sub: 'Campaign thinking, media strategy, and communication support for brands that need to be seen, heard, and remembered.',
  },
  cta: {
    headline: 'Have a Campaign in Mind?',
    body: 'Let us help you turn your objective into a clear media and communication plan.',
    button: { label: 'Start a Project', href: '/contact' },
  },
  /**
   * TODO: replace with approved client work. The content document supplies
   * these titles as placeholders and a case-study format (client, sector,
   * challenge, solution, channels, results) to fill in once available.
   */
  placeholders: [
    { slug: 'brand-awareness-campaign',   title: 'Brand Awareness Campaign for a Consumer Brand',      sector: 'Consumer brands' },
    { slug: 'integrated-media-launch',    title: 'Integrated Media Launch for a Corporate Organization', sector: 'Corporate' },
    { slug: 'social-media-strategy',      title: 'Social Media Strategy for Audience Engagement',       sector: 'Digital' },
    { slug: 'public-communication',       title: 'Public Communication Campaign for an Institution',    sector: 'Public sector' },
    { slug: 'multi-channel-review',       title: 'Performance Review for a Multi-Channel Campaign',     sector: 'Measurement' },
  ],
};

export const insights = {
  hero: {
    headline: 'Insights',
    sub: 'Practical thinking on media, marketing communication, brand visibility, digital engagement, and campaign measurement.',
  },
  intro: 'Brandfirst Media shares practical insights to help businesses and organizations make better communication decisions. Our articles focus on strategy, media planning, brand visibility, customer engagement, and performance measurement.',
  /** TODO: suggested topics from the content document — not yet written articles. */
  topics: [
    'Why every brand needs a clear media strategy before buying media',
    'How integrated marketing communication improves campaign performance',
    'What brands should measure after a campaign',
    'The role of social media in customer engagement',
    'How to choose the right media channels for your audience',
    'Why brand consistency matters across traditional and digital platforms',
    'Turning audience insights into stronger campaign ideas',
    'What businesses should know before launching a digital campaign',
  ],
};

export const contact = {
  hero: {
    headline: 'Let Us Talk About Your Brand',
    sub: 'Whether you are planning a campaign, launching a product, strengthening your brand presence, or reviewing your media performance, Brandfirst Media can help.',
  },
  body: 'Tell us what you want to achieve and we will help you identify the right communication approach. Share a few details about your brand, your audience, and your campaign goals.',
  fields: ['Name', 'Company or organization', 'Email address', 'Phone number', 'Service interest', 'Project budget range', 'Message'],
};

export const nav = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work',     href: '/work' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact',  href: '/contact' },
];
