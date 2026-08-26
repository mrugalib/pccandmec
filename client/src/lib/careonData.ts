/**
 * Careons reference recreation — reusable content model for detail routes.
 * Keep individual causes and programmes editable here so overview and detail pages stay aligned.
 */
export type CareonDetail = {
  slug: string;
  kicker: string;
  title: string;
  raised: string;
  goal: string;
  image: string;
  description: string;
  outcome: string;
  focus: string[];
  /** Who the cause serves — answers "what type of cause is this?" on the detail page. */
  beneficiaries?: string;
  /** "$X provides Y" tiers — answers "how does my contribution transform a life?" */
  donationImpact?: { amount: string; result: string }[];
};

export const causes: CareonDetail[] = [
  {
    slug: "education-equality",
    kicker: "Education access",
    title: "Fundraising for Education Equality and Access",
    raised: "$40,000",
    goal: "$65,200",
    image: "/images/hero-kids.jpg",
    description: "This cause supports practical learning access, safer study environments, and the tools students need to keep building their futures.",
    outcome: "Every contribution helps move resources closer to learners and local partners who turn access into opportunity.",
    focus: ["Learning materials and safe spaces", "Community-led education support", "Tools for sustained attendance"],
    beneficiaries: "Children and young people in flood-prone coastal and Haor communities who lose regular access to school whenever their local building is damaged or their family income is disrupted.",
    donationImpact: [
      { amount: "$25", result: "Supplies one child with a full term of books, a uniform, and basic school materials." },
      { amount: "$100", result: "Covers a month of safe transport and a tutor-led catch-up session for a small learning group." },
      { amount: "$500", result: "Helps repair or restock a flood-damaged classroom so an entire cohort can keep attending." },
    ],
  },
  {
    slug: "healthcare-access",
    kicker: "Health equity",
    title: "Building Stronger Futures Through Healthcare Access",
    raised: "$52,000",
    goal: "$75,200",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1500&q=85",
    description: "This cause strengthens access to essential health support by helping communities respond sooner, recover with dignity, and reach reliable care.",
    outcome: "Support is directed toward practical medical readiness, community care, and services that can keep pace with urgent need.",
    focus: ["Essential care and medical readiness", "Local referral and support networks", "Recovery-centred community services"],
    beneficiaries: "Families in underserved coastal wards who otherwise travel hours to reach the nearest clinic, plus mothers and children who rely on basic maternal and child healthcare.",
    donationImpact: [
      { amount: "$20", result: "Covers essential medicine and basic care for one patient at a mobile health camp." },
      { amount: "$150", result: "Funds a full-day mobile health camp visit for an underserved ward." },
      { amount: "$600", result: "Stocks a community health post with emergency medical supplies for a season." },
    ],
  },
  {
    slug: "women-girls-education",
    kicker: "Inclusive learning",
    title: "Empowering Women and Girls Through Education",
    raised: "$80,000",
    goal: "$85,000",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
    description: "This cause expands pathways into education and skills development so women and girls can participate fully in learning, work, and community life.",
    outcome: "Focused support helps create room for confidence, learning continuity, and long-term opportunity.",
    focus: ["Accessible learning pathways", "Skills and mentorship opportunities", "Community support for participation"],
    beneficiaries: "Women and girls in rural households where cultural and financial barriers most often push them out of school or off the path toward independent income.",
    donationImpact: [
      { amount: "$30", result: "Provides one woman a month of vocational or digital-skills training materials." },
      { amount: "$120", result: "Sponsors a girl's school fees and supplies for a full term." },
      { amount: "$450", result: "Seeds a women-led savings group with starter capital and mentorship for a year." },
    ],
  },
];

export type WorkAreaDetail = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  overview: string;
  highlights: { label: string; value: string }[];
  focus: string[];
};

export const workAreaDetails: WorkAreaDetail[] = [
  {
    slug: "disaster-response-recovery",
    title: "Disaster Response & Recovery",
    tagline: "Rapid relief, shelter, and recovery support for communities hit by floods, cyclones, and crisis.",
    image: "/images/hero-coastal-boat.jpg",
    overview: "When disaster strikes, our teams move fast. Pre-positioned relief stocks and trained local volunteers let us reach affected families within hours, not days, with food, clean water, and emergency shelter. Once the immediate crisis passes, we stay to help households rebuild homes, restart livelihoods, and get children back into school.",
    highlights: [
      { label: "Response window", value: "< 48 hrs" },
      { label: "Families reached", value: "12,400+" },
      { label: "Districts covered", value: "9" },
    ],
    focus: [
      "Emergency food, water & shelter kits",
      "Search, rescue & safe evacuation support",
      "Cash grants for immediate household needs",
      "Post-crisis rebuilding & livelihood recovery",
    ],
  },
  {
    slug: "agriculture-livelihoods",
    title: "Agriculture & Livelihoods",
    tagline: "Sustainable farming, aquaculture, and income-generating skills that build lasting self-reliance.",
    image: "/images/hero-aquaculture.jpg",
    overview: "We work alongside farming and fishing families to strengthen the everyday sources of income they depend on. Through climate-smart agriculture, aquaculture training, and starter support like seeds and equipment, households build steadier, more resilient incomes — with a strong focus on women-led enterprise and cooperative savings.",
    highlights: [
      { label: "Households trained", value: "3,800+" },
      { label: "Avg. income increase", value: "+34%" },
      { label: "Active farmer groups", value: "120" },
    ],
    focus: [
      "Climate-smart farming & aquaculture training",
      "Seed, tools & starter-stock support",
      "Cooperative savings & market access",
      "Women-led livelihood groups",
    ],
  },
  {
    slug: "inclusion-equity-justice",
    title: "Inclusion, Equity & Justice",
    tagline: "Advancing rights and representation for women, children, and marginalized groups.",
    image: "/images/about-community.jpg",
    overview: "Lasting change depends on communities being able to claim their own rights. We run rights-awareness and legal-aid sessions, support women's leadership and savings groups, and create safe spaces for children — while advocating alongside local governance bodies for more inclusive, accountable decision-making.",
    highlights: [
      { label: "Women reached", value: "9,200+" },
      { label: "Legal aid cases", value: "640" },
      { label: "Community groups", value: "85" },
    ],
    focus: [
      "Legal aid & rights awareness sessions",
      "Women's leadership & savings groups",
      "Child protection & safe spaces",
      "Advocacy with local governance bodies",
    ],
  },
  {
    slug: "climate-resilience",
    title: "Climate Resilience",
    tagline: "Helping coastal and Haor communities adapt to a changing climate and protect their future.",
    image: "/images/hero-haor-fishing.jpg",
    overview: "Coastal and Haor communities are on the frontline of a changing climate. We help them adapt through mangrove and embankment restoration, early-warning systems for floods and cyclones, and climate-adaptive housing design — paired with hands-on disaster-preparedness training so communities can act quickly when conditions turn.",
    highlights: [
      { label: "Coastal villages", value: "46" },
      { label: "Trees planted", value: "180,000+" },
      { label: "Early-warning reach", value: "25,000 people" },
    ],
    focus: [
      "Mangrove & embankment restoration",
      "Flood & cyclone early-warning systems",
      "Climate-adaptive housing design",
      "Community disaster-preparedness training",
    ],
  },
  {
    slug: "education-skills",
    title: "Education & Skills",
    tagline: "Quality learning and vocational training that open doors for children and young people.",
    image: "/images/hero-kids.jpg",
    overview: "We support children from foundational learning through to vocational readiness, running local learning centres, scholarships, and school-supply support so that classroom disruption doesn't become a dead end. For young people, vocational and digital-skills training connects directly to mentorship and job placement.",
    highlights: [
      { label: "Children enrolled", value: "7,500+" },
      { label: "Learning centres", value: "38" },
      { label: "Vocational graduates", value: "1,200+" },
    ],
    focus: [
      "Foundational learning & school-readiness",
      "Scholarships & school supply support",
      "Vocational & digital skills training",
      "Youth mentorship & job placement",
    ],
  },
  {
    slug: "health-water-sanitation",
    title: "Health, Water & Sanitation",
    tagline: "Access to clean water, hygiene, and essential healthcare for underserved families.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1500&q=85",
    overview: "Basic health and sanitation shape everything else a family can achieve. We run mobile health camps and install safe water points and filtration systems in underserved communities, paired with hygiene education and sanitation units — with particular attention to maternal and child health.",
    highlights: [
      { label: "Clean water access", value: "22,000+" },
      { label: "Health camps / year", value: "150+" },
      { label: "Sanitation units built", value: "3,100" },
    ],
    focus: [
      "Mobile health camps & essential medicines",
      "Safe water points & filtration systems",
      "Hygiene education & sanitation units",
      "Maternal & child health support",
    ],
  },
];

export const programs: CareonDetail[] = [
  {
    slug: "healthcare-access",
    kicker: "Emergency Health Relief",
    title: "Healthcare Access",
    raised: "$16,800",
    goal: "$40,000",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1500&q=85",
    description: "Ensure fast delivery of medical and health units during emergency to provide care and support recovery.",
    outcome: "The programme is structured around practical readiness, responsive support, and recovery that begins with local needs.",
    focus: ["Rapid health support", "Medical units and supplies", "Recovery coordination"],
  },
  {
    slug: "nutritional-support",
    kicker: "Food Security Initiative",
    title: "Nutritional Support",
    raised: "$60,800",
    goal: "$100,800",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1500&q=85",
    description: "Ensure timely access to nutritious food, clean water, and supplements for communities in times of crisis.",
    outcome: "The programme combines reliable distribution with respectful support for households navigating disruption.",
    focus: ["Nutritious food access", "Clean water and supplements", "Household-centred distribution"],
  },
  {
    slug: "clean-water",
    kicker: "Water Purification Project",
    title: "Access to Clean Water",
    raised: "$20,800",
    goal: "$60,000",
    image: "https://framerusercontent.com/images/2srJeanTF7o28bioeTcEYLrSCms.jpg?width=5760&height=3840",
    description: "Provide clean water access through filtration systems, safe water distribution and hygiene education.",
    outcome: "Practical systems and local knowledge work together so clean water can remain accessible beyond an immediate response.",
    focus: ["Filtration and safe distribution", "Hygiene education", "Local maintenance knowledge"],
  },
];

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  highlight: string;
  category: string;
  year: string;
  location: string;
  heroImage: string;
  summary: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  stats: { label: string; value: string }[];
  gallery: string[];
};

export const projects: ProjectCaseStudy[] = [
  {
    slug: "kutubdia-flood-response",
    title: "Kutubdia Flood Response",
    highlight: "72-hour emergency relief for 4,200 coastal families after cyclone landfall.",
    category: "Disaster Response",
    year: "2024",
    location: "Kutubdia, Cox's Bazar",
    heroImage: "/images/hero-coastal-boat.jpg",
    summary: "When a cyclone breached the embankment at Kutubdia, our field teams reached the worst-hit wards within 18 hours with food, clean water, and emergency shelter.",
    overview: "Kutubdia's western embankment gave way during a July cyclone, flooding nine wards and displacing thousands overnight. Our disaster-response team, pre-positioned in Cox's Bazar under a standing relief agreement, mobilized boats and relief stock the same night and reached the first affected households within 18 hours.",
    challenge: "Roads were underwater and the only access to several wards was by boat, at a time when tidal surges made crossings dangerous. Displaced families had lost stored food and clean drinking water within the first few hours.",
    approach: "We ran relief operations in three phases: immediate boat-based distribution of food, water-purification tablets, and tarpaulin shelter kits; a rapid household needs assessment to flag the most vulnerable families for follow-up; and cash grants disbursed within two weeks to help households begin rebuilding without waiting on aid convoys.",
    outcome: "4,200 families received emergency supplies within the first 72 hours, and 1,100 of the most vulnerable households received follow-up cash grants and materials to rebuild within six weeks of the flood.",
    stats: [
      { label: "Families reached", value: "4,200" },
      { label: "Response time", value: "18 hrs" },
      { label: "Cash grants disbursed", value: "1,100" },
    ],
    gallery: [
      "/images/about-climate-flood.jpg",
      "/images/donate-hands.jpg",
      "/images/hero-haor-fishing.jpg",
      "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "bagerhat-aquaculture-initiative",
    title: "Bagerhat Aquaculture Initiative",
    highlight: "Training 320 households in sustainable shrimp and fish farming.",
    category: "Agriculture & Livelihoods",
    year: "2023",
    location: "Bagerhat District",
    heroImage: "/images/hero-aquaculture.jpg",
    summary: "A season-long training program helped 320 farming households in Bagerhat shift from single-crop rice paddies to mixed rice-and-aquaculture plots.",
    overview: "Saltwater intrusion has made traditional rice farming increasingly unreliable across parts of Bagerhat. Rather than treat this as a loss, we worked with local farmers to convert flooded paddies into managed aquaculture plots that could produce income year-round.",
    challenge: "Most households had no prior aquaculture experience and no capital to invest in nets, feed, or fingerlings, and were wary of abandoning a rice crop they understood for a system they didn't.",
    approach: "We ran hands-on training across a full growing season, paired every participating household with a peer mentor from an earlier cohort, and provided starter stock and equipment on a cost-shared basis so households had a stake in the outcome from day one.",
    outcome: "320 households completed the training, with participating families reporting a 34% average increase in household income within the first year, and 120 farmer groups now operating independently.",
    stats: [
      { label: "Households trained", value: "320" },
      { label: "Avg. income increase", value: "+34%" },
      { label: "Farmer groups formed", value: "120" },
    ],
    gallery: [
      "/images/hero-coastal-boat.jpg",
      "/images/about-community.jpg",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1500&q=85",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "digital-literacy-circles",
    title: "Digital Literacy Circles",
    highlight: "Mobile-first financial literacy sessions for 1,100 women.",
    category: "Inclusion & Equity",
    year: "2023",
    location: "Satkhira District",
    heroImage: "/images/hero-women-phones.jpg",
    summary: "Weekly learning circles taught women in Satkhira to use mobile banking, verify prices, and manage household savings independently.",
    overview: "Many women in the villages we work in had access to a mobile phone in the household but rarely used it themselves for anything beyond calls. Digital Literacy Circles gave women a regular, low-pressure setting to learn the basics of mobile banking and online information alongside people they already knew.",
    challenge: "Confidence, not access, was the biggest barrier. Many participants had never used a smartphone unassisted and were reluctant to try in front of family members who already considered themselves more capable.",
    approach: "Sessions were run entirely by trained local women facilitators in small peer groups, moving from basic phone navigation to mobile banking, price verification for market goods, and record-keeping for household savings groups.",
    outcome: "1,100 women completed the program, and savings-group facilitators reported that circle graduates were significantly more likely to manage their own group's mobile transactions without help.",
    stats: [
      { label: "Women trained", value: "1,100" },
      { label: "Learning circles run", value: "64" },
      { label: "Villages covered", value: "18" },
    ],
    gallery: [
      "/images/donate-hands.jpg",
      "/images/about-community.jpg",
      "/images/hero-kids.jpg",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "haor-early-warning-network",
    title: "Haor Early Warning Network",
    highlight: "Flood-alert system covering 46 wetland villages.",
    category: "Climate Resilience",
    year: "2022",
    location: "Sunamganj Haor Basin",
    heroImage: "/images/hero-haor-fishing.jpg",
    summary: "A community-run early-warning network now gives Haor basin villages hours of advance notice before flash floods reach their homes.",
    overview: "Flash floods in the Haor wetlands can rise faster than official warnings travel. We worked with local volunteer networks to build a low-tech early-warning system that combines upstream water-level readings with a village-to-village phone tree.",
    challenge: "Existing flood warnings came from regional monitoring stations too far upstream to give villages meaningful lead time, and mobile network coverage in the basin is unreliable during storms.",
    approach: "Volunteers were trained to read simple gauge markers at key points along the basin and relay readings through a redundant phone-and-radio system to a village coordinator, who triggers a locally agreed evacuation and livestock-moving plan.",
    outcome: "The network now covers 46 villages and gave an average of 6 hours' advance warning during the last two flood seasons, time that villages use to move livestock, boats, and essential belongings to higher ground.",
    stats: [
      { label: "Villages covered", value: "46" },
      { label: "Avg. warning time", value: "6 hrs" },
      { label: "Trained volunteers", value: "180" },
    ],
    gallery: [
      "/images/hero-coastal-boat.jpg",
      "/images/about-climate-flood.jpg",
      "/images/hero-aquaculture.jpg",
      "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "community-learning-centres",
    title: "Community Learning Centres",
    highlight: "38 learning centres serving 7,500 children.",
    category: "Education & Skills",
    year: "2022",
    location: "Khulna & Satkhira",
    heroImage: "/images/hero-kids.jpg",
    summary: "Thirty-eight community learning centres now give children in remote coastal wards a consistent place to study when their local school is disrupted.",
    overview: "In wards where flooding or storm damage regularly disrupts government schooling, we set up community learning centres run out of existing village structures, staffed by trained local tutors, to keep children's education moving between disruptions.",
    challenge: "Repeated school closures were pushing children, particularly girls, toward dropping out entirely rather than catching up once schools reopened.",
    approach: "We recruited and trained local tutors rather than bringing in outside staff, kept class sizes small, and aligned the centres' curriculum with the national syllabus so children could move back into formal schooling without falling behind.",
    outcome: "38 centres now operate across two districts, serving 7,500 children, with partner schools reporting improved re-enrollment rates among centre attendees after disruptions.",
    stats: [
      { label: "Learning centres", value: "38" },
      { label: "Children enrolled", value: "7,500" },
      { label: "Local tutors trained", value: "95" },
    ],
    gallery: [
      "/images/about-community.jpg",
      "/images/hero-women-phones.jpg",
      "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "clean-water-for-khulna",
    title: "Clean Water for Khulna",
    highlight: "22,000 people connected to safe water points.",
    category: "Health & Sanitation",
    year: "2021",
    location: "Khulna District",
    heroImage: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1500&q=85",
    summary: "A district-wide filtration and distribution program brought safe drinking water within walking distance for 22,000 people in salinity-affected villages.",
    overview: "Salinity intrusion had made most shallow wells in the area unsafe for drinking. We installed a network of filtration points and safe distribution systems, paired with hygiene education, so that clean water became a short walk rather than a daily struggle.",
    challenge: "Existing water points were either too saline to drink safely or too far for many households to reach reliably, pushing families toward unsafe alternatives.",
    approach: "We mapped household distances to existing infrastructure, installed filtration points to close the largest gaps, and trained local water-committee volunteers to maintain the systems and run hygiene education sessions.",
    outcome: "22,000 people gained access to a safe water point within a 15-minute walk of home, and locally trained committees have kept every installed system operational since handover.",
    stats: [
      { label: "People connected", value: "22,000" },
      { label: "Filtration points built", value: "64" },
      { label: "Water committees trained", value: "64" },
    ],
    gallery: [
      "https://framerusercontent.com/images/2srJeanTF7o28bioeTcEYLrSCms.jpg?width=5760&height=3840",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1500&q=85",
      "/images/donate-hands.jpg",
      "/images/about-community.jpg",
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
  body: string[];
  gallery: string[];
};

export const blogs: BlogPost[] = [
  {
    slug: "bringing-hope-through-food-shelter-and-support",
    title: "Bringing hope through food, shelter, and support",
    category: "Disaster Response",
    date: "Apr 9, 2025",
    readTime: "5 min read",
    author: "PCC & MEC Field Team",
    image: "https://framerusercontent.com/images/84D3YC9gPH9F7d3pORzAz25QrgI.jpg?width=1440&height=1105",
    excerpt: "When flooding tore through coastal villages in Khulna, our field teams were on the ground within hours, distributing food, shelter kits, and medical support to families who had lost everything.",
    body: [
      "When flooding tore through coastal villages in Khulna, our field teams were on the ground within hours, distributing food, shelter kits, and medical support to families who had lost everything. For many households, the water rose faster than anyone expected, leaving little time to save more than a few belongings.",
      "Our disaster-response volunteers, pre-positioned under a standing relief agreement, moved quickly to reach the worst-affected wards by boat where roads had disappeared under water. Emergency food parcels, water-purification tablets, and tarpaulin shelter kits were distributed to the first families within 18 hours of the embankment breach.",
      "Beyond the immediate response, our teams stayed on to support longer-term recovery. Cash grants were distributed to the most vulnerable households within two weeks, giving families the flexibility to rebuild on their own terms rather than waiting on aid convoys to arrive.",
      "\"We lost our home and our stored rice within a single night,\" said one mother of three in an affected ward. \"But within a day, there was food for my children and a place to sleep that was dry. That mattered more than I can explain.\"",
      "This kind of rapid response is only possible because of consistent support from donors and partners who help us keep relief stocks pre-positioned and volunteers trained year-round. Every contribution brings us closer to reaching the next family before the water rises.",
    ],
    gallery: [
      "https://framerusercontent.com/images/84D3YC9gPH9F7d3pORzAz25QrgI.jpg?width=1440&height=1105",
      "/images/hero-coastal-boat.jpg",
      "/images/donate-hands.jpg",
    ],
  },
  {
    slug: "building-food-security-through-community-farming",
    title: "Building Food Security Through Community Farming",
    category: "Agriculture & Livelihoods",
    date: "Sep 19, 2025",
    readTime: "4 min read",
    author: "PCC & MEC Field Team",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
    excerpt: "Saltwater intrusion has made traditional rice farming increasingly unreliable across parts of Bagerhat. Rather than treat this as a loss, our community farming groups are turning the tide.",
    body: [
      "Saltwater intrusion has made traditional rice farming increasingly unreliable across parts of Bagerhat. Rather than treat this as a loss, our community farming groups are turning the tide — converting flooded paddies into mixed rice-and-aquaculture plots that produce income year-round.",
      "The shift hasn't been easy. Most participating households had no prior aquaculture experience and little capital to invest in nets, feed, or fingerlings. Many were understandably wary of abandoning a crop they understood for a system that felt unfamiliar and risky.",
      "To ease that transition, our team ran hands-on training across a full growing season, pairing every participating household with a peer mentor from an earlier cohort. Starter stock and equipment were provided on a cost-shared basis, so families had a genuine stake in the outcome from day one.",
      "The results have exceeded expectations: participating households have reported a 34% average increase in income within the first year, and 120 farmer groups are now operating independently, sharing knowledge and resources across villages without outside support.",
      "\"My father grew only rice his whole life,\" said one young farmer from a participating cooperative. \"Now our land gives us fish, shrimp, and rice — even when the salt comes in. We are not just surviving the change, we are building something new from it.\"",
    ],
    gallery: [
      "/images/hero-aquaculture.jpg",
      "/images/about-community.jpg",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1500&q=85",
    ],
  },
  {
    slug: "restoring-hope-in-times-of-urgency",
    title: "Restoring Hope in Times of Urgency in Human",
    category: "Climate Resilience",
    date: "Apr 7, 2025",
    readTime: "6 min read",
    author: "PCC & MEC Field Team",
    image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=85",
    excerpt: "Flash floods in the Haor wetlands can rise faster than official warnings travel. A community-run early-warning network now gives villages hours of advance notice before the water reaches their homes.",
    body: [
      "Flash floods in the Haor wetlands can rise faster than official warnings travel. For villages tucked deep in the basin, a flood that begins upstream can arrive with almost no notice — unless someone is watching the water and ready to sound the alarm.",
      "That's the gap our Haor Early Warning Network was built to close. Working with local volunteer networks, we combined upstream water-level readings with a low-tech, village-to-village phone tree, so that a rise in the water miles away can trigger a coordinated response long before it reaches anyone's doorstep.",
      "Volunteers are trained to read simple gauge markers at key points along the basin and relay readings through a redundant phone-and-radio system to a village coordinator, who triggers a locally agreed evacuation and livestock-moving plan the moment conditions turn.",
      "The network now covers 46 villages and delivered an average of six hours' advance warning during the last two flood seasons — time that families use to move livestock, boats, and essential belongings to higher ground before the water arrives.",
      "\"Six hours doesn't sound like much until you've had zero,\" said a village coordinator who has run the local phone tree for two seasons. \"Now my neighbours have time to save what matters most before they have to run.\"",
      "As climate patterns continue to shift, this kind of community-owned, low-cost resilience is proving to be some of the most effective protection we can offer — restoring not just safety, but a sense of control over an increasingly unpredictable climate.",
    ],
    gallery: [
      "/images/hero-haor-fishing.jpg",
      "/images/about-climate-flood.jpg",
      "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=85",
    ],
  },
];
