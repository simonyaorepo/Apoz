// Development/Projects Section data objects

export const DEVELOPMENT_OVERVIEW_DATA = {
  vision: {
    heading: "APOZ Development Vision",
    description: "The Asia Pacific Opportunity Zone (APOZ) is a multi-phase, mixed-use development project in Winnie, Texas, combining industrial, residential, commercial, and logistics hubs to support Asia-Pacific manufacturing relocation and U.S. trade growth.",
    advantages: [
      {
        title: "QOZ Status",
        description: "Federal tax benefits for investors"
      },
      {
        title: "FTZ-171 Activation",
        description: "Duty-free imports and exports"
      },
      {
        title: "Strategic Location",
        description: "Near Houston's ports, energy corridor, and I-10 logistics network"
      }
    ]
  },
  phases: [
    {
      phase: "Phase 1",
      scope: "Industrial Park & Logistics Hub",
      size: "~436+ acres",
      estimatedCost: "~$240M",
      timeline: "2025–2026"
    },
    {
      phase: "Phase 2",
      scope: "2,000 Affordable Homes",
      size: "TBD",
      estimatedCost: "TBD",
      timeline: "TBD"
    },
    {
      phase: "Phase 3",
      scope: "Commercial, Retail & Mixed-Use",
      size: "TBD",
      estimatedCost: "TBD",
      timeline: "TBD"
    }
  ],
  infrastructure: {
    heading: "Infrastructure & Construction Priorities",
    priorities: [
      {
        category: "Land Development",
        description: "Grading, utilities, stormwater drainage"
      },
      {
        category: "Transportation Access",
        description: "Roads, trucking corridors, EV-friendly logistics"
      },
      {
        category: "FTZ Facilities",
        description: "Warehousing, bonded storage, customs processing areas"
      },
      {
        category: "Residential Community",
        description: "Affordable housing + schools, clinics, retail centers"
      }
    ]
  },
  investment: {
    heading: "Investment & Funding Strategy",
    strategies: [
      {
        title: "Qualified Opportunity Fund (QOF)",
        description: "For investors seeking QOZ tax benefits"
      },
      {
        title: "Strategic LP Investors",
        description: "Family offices, institutional capital, IPO listed company partner"
      },
      {
        title: "REIT & IPO Exit Paths",
        description: "Designed for securitization of stabilized assets"
      },
      {
        title: "Public-Private Partnerships",
        description: "Engage Texas state housing funds, federal HUD programs"
      }
    ]
  }
};

export const PHASE_1_DATA = {
  title: "Phase 1",
  backgroundImage: "/assets/images/development/phase1/hero.jpg",
  breadcrumbLabel: "Phase 1",
  overview: {
    intro: [
      "Phase 1 of APOZ is located in Winnie, Texas within both the Qualified Opportunity Zone (QOZ) and Foreign Trade Zone (FTZ) designation, creating a unique Asia Pacific Opportunity Zone industrial and logistics hub.",
      "This initial phase encompasses approximately 436 acres with planned built area of approximately 400,000 sq ft, focusing on industrial warehouses, manufacturing facilities, and bonded logistics operations."
    ],
    positioning: [
      "The project strategically leverages FTZ-171 benefits for duty-free imports and exports, while being located within a Qualified Opportunity Zone to provide significant tax advantages for investors.",
      "This positioning makes APOZ ideal for Asia-Pacific manufacturers looking to relocate or expand into the U.S. market, offering both operational cost savings and favorable investment structures."
    ]
  },
  objectives: [
    "<strong>Infrastructure Development:</strong> Roads, utilities, data connectivity",
    "<strong>Anchor Tenants:</strong> Attract initial manufacturing & distribution tenants",
    "<strong>Financial Close:</strong> Raise funds via QOF, REITs, and strategic LPs",
    "<strong>Regulatory Activation:</strong> FTZ approval, environmental permits, construction readiness"
  ],
  timeline: [
    {
      milestone: "Site Preparation",
      targetDate: "Q4 2025",
      keyActions: "Land clearing, grading, and initial utilities"
    },
    {
      milestone: "Infrastructure Build-Out",
      targetDate: "Q1–Q3 2026",
      keyActions: "Roads, drainage, power, water, fiber installation"
    },
    {
      milestone: "FTZ Activation",
      targetDate: "Mid-2026",
      keyActions: "Secure CBP operational clearance"
    },
    {
      milestone: "Construction of First Facilities",
      targetDate: "Late 2026",
      keyActions: "Build-out of warehouses & assembly plants"
    },
    {
      milestone: "Tenant Onboarding",
      targetDate: "Q1 2027",
      keyActions: "Signed leases & operational go-live"
    }
  ],
  financing: {
    targetRaise: "~$24MM",
    sources: [
      "<strong>Equity via QOF (~30–40%):</strong> Tax-advantaged capital from QOZ investors seeking capital gains deferral and potential elimination",
      "<strong>Strategic LPs / Family Offices (~15–20%):</strong> Private equity partners seeking stable returns enhanced by FTZ operational advantages",
      "<strong>Bank Debt & Construction Loans (~25–35%):</strong> Senior debt financing for infrastructure and facility development",
      "<strong>Potential REIT exit or IPO conversion:</strong> Long-term liquidity pathway for stabilized assets"
    ],
    returnsSummary: "Phase 1 delivers attractive returns enhanced by both QOZ tax benefits and FTZ operational advantages. QOZ-adjusted IRR provides additional uplift for qualified investors through capital gains tax deferral and potential elimination after 10+ years, while FTZ-enhanced EBITDA growth delivers operational advantages through duty savings and streamlined customs operations."
  }
};

export const PHASE_2_DATA = {
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Development", path: "/development" },
    { label: "Phase 2", path: "/development/phase2" }
  ],
  title: "Phase 2: APOZ Residential Village",
  subtitle: "Affordable Workforce Housing & Community Development",
  overview: [
    "Phase 2 shifts focus to the Residential Village: ~2,000 affordable housing units designed to serve the workforce employed in Phase 1's industrial park and beyond. These units will be developed in a QOZ-designated area, leveraging tax-advantaged capital (QOF) alongside Low-Income Housing Tax Credits (LIHTC), private LPs, and institutional debt.",
    "The goal is to create quality, affordable, and sustainable housing that supports economic mobility, stabilizes land values, and generates a recurring revenue stream through rental income and eventual build-to-sell conversions."
  ],
  objectives: [
    "<strong>Workforce Demand:</strong> Provide attainable housing for the ~2,000+ workers generated by the industrial park, retail, and logistics facilities in Phase 1.",
    "<strong>Stabilize Land Value:</strong> Develop the residential component to elevate surrounding property values and attract complementary commercial services.",
    "<strong>Leverage QOZ Incentives:</strong> Tap into Qualified Opportunity Zone benefits to defer, reduce, or eliminate capital gains taxes on appreciation.",
    "<strong>Promote Community Integration:</strong> Incorporate walkable streets, community centers, green spaces, and easy connections to Phase 1's employment hubs."
  ],
  scope: {
    totalUnits: "~2,000 affordable housing units",
    unitTypes: [
      "1-, 2-, and 3-bedroom apartments",
      "Townhomes and single-family attached homes",
      "A mix of rental and eventual for-sale (Build-to-Rent, then Build-to-Sell strategies)"
    ],
    communityFeatures: [
      "Pocket parks, playgrounds, and community gathering spaces",
      "On-site management and maintenance",
      "Pedestrian-friendly pathways linking to transit and Phase 1 employment centers"
    ],
    landUse: "~200+ acres, with potential expansion zones for commercial/retail pads"
  },
  financing: {
    estimatedCost: "~$250MM – $300MM total development cost",
    sources: [
      "<strong>QOF Equity (~30–40%):</strong> Tax-advantaged capital from QOZ investors seeking deferral, reduction, or elimination of capital gains.",
      "<strong>LIHTC Syndication (~15–25%):</strong> Tax credit equity sold to institutional buyers (banks, corporations) in exchange for project equity.",
      "<strong>Private LPs & Co-Investors (~15–20%):</strong> Family offices, impact investors, and institutional partners seeking stable yields + social returns.",
      "<strong>Senior Debt & Construction Loans (~25–35%):</strong> Bank financing (HUD, Freddie Mac, Fannie Mae multi-family programs) at favorable rates given the QOZ and LIHTC structure."
    ]
  },
  timeline: [
    {
      milestone: "Planning & Permitting",
      targetDate: "Q1 2026",
      keyActions: "Finalize site plan, zoning approvals, LIHTC application, QOF structuring"
    },
    {
      milestone: "Financial Close & Groundbreaking",
      targetDate: "Q2–Q3 2026",
      keyActions: "Close on QOF equity, LIHTC syndication, debt financing; begin site prep and foundation work"
    },
    {
      milestone: "Vertical Construction (Phase 2A)",
      targetDate: "Q4 2026 – Q4 2027",
      keyActions: "First ~800–1,000 units under construction (apartments and townhomes)"
    },
    {
      milestone: "Initial Lease-Up",
      targetDate: "Q1 2028",
      keyActions: "First buildings complete; marketing and lease-up to Phase 1 workforce and local families"
    },
    {
      milestone: "Phase 2B Construction",
      targetDate: "Q2 2028 – End-2028",
      keyActions: "Build out remaining ~1,000+ units; expand retail/commercial pads; finalize community amenities"
    },
    {
      milestone: "Stabilized Operation & Exit Planning",
      targetDate: "2029+",
      keyActions: "Reach full occupancy; evaluate REIT conversion, refinance, or phased for-sale transitions"
    }
  ],
  synergy: [
    "<strong>Phase 1 Employment Anchor:</strong> Industrial tenants generate steady workforce demand, ensuring high occupancy and minimal vacancy risk.",
    "<strong>Integrated Community:</strong> Workers live, work, and shop within a walkable, master-planned ecosystem—reducing commute times and increasing quality of life.",
    "<strong>Land Value Uplift:</strong> Successful Phase 1 operations boost surrounding land values, making Phase 2 Residential development more feasible and profitable.",
    "<strong>Dual QOZ Benefits:</strong> Both phases leverage QOZ tax incentives, multiplying investor appeal and creating compounding financial advantages."
  ]
};
