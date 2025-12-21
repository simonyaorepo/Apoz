// Projects Section data for APOZ phases and timeline

export const PROJECTS_OVERVIEW = {
  title: "Development Projects",
  subtitle: "A phased approach to sustainable growth",
  description: "APOZ's master-planned development spans 646+ acres across three strategic phases, combining industrial infrastructure, commercial centers, and residential communities to create a thriving economic ecosystem."
};

export const PHASE_ONE_DATA = {
  id: "phase1",
  title: "Phase One: Foundation & Infrastructure",
  acreage: "436 acres",
  status: "In Development",
  timeline: "2026-2030",
  description: "Phase One establishes APOZ's core industrial and residential infrastructure through a two-stage development process.",
  
  stages: {
    stageOne: {
      title: "Stage One: Industrial Core",
      year: 2026,
      acreage: "31 acres",
      buildings: [
        { type: "Industrial/Office", size: "200,000 sq ft", count: 1 },
        { type: "Industrial/Office", size: "100,000 sq ft", count: 2 }
      ],
      totalSqFt: "400,000 sq ft",
      purpose: "APOZ management offices (FTZ #171 Zone Operator Office) and initial demonstration of park capabilities",
      features: [
        "FTZ Zone Operator headquarters",
        "Demonstration facilities for prospective tenants",
        "Initial infrastructure and utilities",
        "Flexible leasing model showcasing"
      ]
    },
    
    stageTwo: {
      title: "Stage Two: Full Buildout",
      years: "2027-2030",
      developments: [
        {
          year: 2027,
          industrial: { buildings: 10, sqftPerBuilding: 200000, total: "2M sq ft" },
          residential: 200,
          commercial: "100,000 sq ft"
        },
        {
          year: 2028,
          industrial: { buildings: 15, sqftPerBuilding: 200000, total: "3M sq ft" },
          residential: 400,
          commercial: "400,000 sq ft"
        },
        {
          year: 2029,
          industrial: { buildings: 10, sqftPerBuilding: 200000, total: "2M sq ft" },
          residential: 300,
          commercial: "100,000 sq ft"
        },
        {
          year: 2030,
          industrial: { buildings: 12, sqftPerBuilding: 200000, total: "2.4M sq ft" },
          residential: 500,
          commercial: "100,000 sq ft"
        }
      ]
    }
  },

  totals: {
    industrial: "9.8M sq ft",
    commercial: "700,000 sq ft",
    residential: "1,500 units",
    projectedAnnualIncome: "$234.4M"
  },

  rentalIncome: {
    industrial: {
      sqft: "9,800,000",
      rate: "$1.50/sq ft/month",
      breakdown: "$1.00 rent + $0.50 TICAM",
      monthly: "$14,700,000",
      annual: "$176,400,000"
    },
    commercial: {
      sqft: "700,000",
      rate: "$2.50/sq ft/month",
      breakdown: "$2.00 rent + $0.50 TICAM",
      monthly: "$1,750,000",
      annual: "$21,000,000"
    },
    residential: {
      units: 1500,
      rate: "$1,500/unit/month",
      monthly: "$2,250,000",
      annual: "$27,000,000"
    },
    other: {
      annual: "$10,000,000",
      description: "Miscellaneous income from services and fees"
    }
  }
};

export const PHASE_TWO_DATA = {
  id: "phase2",
  title: "Phase Two: Residential Expansion",
  acreage: "210 acres",
  status: "Planned",
  timeline: "Future Development",
  model: "Build-to-Sale",
  description: "Phase Two focuses on creating a fully integrated community with affordable housing for the APOZ workforce.",
  
  residential: {
    units: 1500,
    lotSize: "10,000 sq ft average",
    density: "4 units per acre",
    homeSize: "1,200 sq ft (3 bedroom)",
    pricing: {
      salesPrice: "$188,000",
      costBreakdown: {
        land: "$5,000",
        soft: "$3,000",
        hard: "$70,000",
        misc: "$10,000",
        total: "$88,000"
      },
      profitPerUnit: "$100,000",
      totalProfit: "$150,000,000"
    }
  },

  features: [
    "1,500 affordable housing units",
    "Workforce housing for industrial tenants",
    "Community amenities and green spaces",
    "Integration with Phase One industrial zones"
  ],

  impact: {
    employeeRetention: "Enhanced through on-site housing",
    communityStability: "Self-sustaining residential ecosystem",
    economicBenefit: "Reduces commute costs for workers"
  }
};

export const PHASE_THREE_DATA = {
  id: "phase3",
  title: "Phase Three: Innovation Hub",
  status: "Long-term Vision",
  timeline: "Beyond 2030",
  description: "Phase Three envisions APOZ as a world-class innovation hub integrating advanced manufacturing, global logistics, sustainable energy, and smart living ecosystems.",
  
  vision: [
    "World-class innovation hub for advanced manufacturing",
    "Global logistics and supply chain center",
    "Sustainable energy and green infrastructure",
    "Smart living ecosystems with cutting-edge technology",
    "R&D facilities for high-tech industries"
  ],

  goals: [
    {
      title: "Global Investment",
      description: "Attract leading multinational enterprises and high-tech industries"
    },
    {
      title: "Innovation Leadership",
      description: "Foster breakthrough developments in manufacturing and logistics"
    },
    {
      title: "Sustainable Growth",
      description: "Implement energy efficiency, green infrastructure, and circular economy"
    },
    {
      title: "Smart Communities",
      description: "Create technology-enhanced living experiences for residents"
    }
  ],

  strategic: {
    positioning: "Strategic gateway for international collaboration",
    commitment: "Long-term economic resilience and technological leadership",
    role: "Core hub for industrial excellence and innovation"
  }
};

export const RESIDENTIAL_PROJECTS = {
  id: "residential",
  title: "Residential Development",
  subtitle: "Affordable housing for the APOZ community",
  
  overview: {
    totalUnits: 3000,
    startingPrice: "$188,000",
    model: "Mixed Build-to-Lease and Build-to-Sale",
    target: "Working-class families employed within the park"
  },

  phaseOne: {
    units: 1500,
    model: "Build-to-Lease",
    rent: "$1,500/month",
    annualIncome: "$27,000,000",
    purpose: "Stable workforce housing for industrial tenants"
  },

  phaseTwo: {
    units: 1500,
    model: "Build-to-Sale",
    price: "$188,000",
    totalRevenue: "$282,000,000",
    grossProfit: "$150,000,000",
    purpose: "Homeownership opportunities for APOZ employees"
  },

  features: [
    "3-bedroom, 1,200 sq ft homes",
    "Modern modular construction",
    "Energy-efficient design",
    "Community green spaces",
    "Proximity to employment centers",
    "Access to commercial amenities"
  ],

  benefits: {
    forWorkers: "Affordable housing near employment",
    forEmployers: "Enhanced employee retention and satisfaction",
    forInvestors: "Stable rental income and strong sales returns",
    forCommunity: "Vibrant, sustainable residential neighborhoods"
  }
};

export const COMMERCIAL_PROJECTS = {
  id: "commercial",
  title: "Commercial Development",
  subtitle: "Retail and service hubs along Interstate 10",
  
  overview: {
    totalSqFt: "700,000 sq ft",
    location: "Along I-10 corridor",
    traffic: "30,000+ daily vehicles",
    rentalRate: "$2.50/sq ft/month"
  },

  tenantMix: [
    "Retail stores and shopping centers",
    "Restaurants and dining establishments",
    "Healthcare facilities and medical offices",
    "Professional services and business centers",
    "Entertainment and recreation venues"
  ],

  revenue: {
    monthly: "$1,750,000",
    annual: "$21,000,000",
    model: "Build-to-Lease"
  },

  benefits: {
    forResidents: "Convenient access to goods and services",
    forCommuters: "Strategic I-10 visibility and accessibility",
    forInvestors: "High-traffic commercial real estate",
    forPark: "Complete live-work-shop ecosystem"
  }
};

export const INDUSTRIAL_PROJECTS = {
  id: "industrial",
  title: "Industrial Development",
  subtitle: "FTZ #171 manufacturing and logistics facilities",
  
  overview: {
    totalSqFt: "9,800,000 sq ft",
    buildings: "47+ facilities",
    rentalRate: "$1.50/sq ft/month",
    ftzDesignation: "FTZ #171"
  },

  buildingTypes: [
    {
      type: "Large Manufacturing",
      size: "200,000 sq ft",
      count: 45,
      features: ["High ceilings", "Heavy power", "Loading docks", "FTZ benefits"]
    },
    {
      type: "Mixed Office/Industrial",
      size: "100,000 sq ft",
      count: 2,
      features: ["Administrative space", "Light manufacturing", "Flexible layouts"]
    }
  ],

  revenue: {
    monthly: "$14,700,000",
    annual: "$176,400,000",
    model: "Build-to-Lease"
  },

  tenantBenefits: [
    "FTZ duty deferral and reduction",
    "Streamlined customs procedures",
    "Improved cash flow",
    "Made in USA designation",
    "Strategic logistics location"
  ],

  targetIndustries: [
    "Advanced Manufacturing",
    "Electronics Assembly",
    "Automotive Components",
    "Food Processing",
    "Medical Devices",
    "Technology Hardware",
    "Logistics and Distribution"
  ]
};

export const TIMELINE_DATA = {
  title: "Development Timeline",
  
  milestones: [
    {
      year: 2025,
      quarter: "Q4",
      phase: "Pre-Construction",
      events: [
        "Final site surveys and environmental assessments",
        "Master plan approval from Chambers County",
        "Land acquisition closing"
      ]
    },
    {
      year: 2026,
      quarter: "Q1-Q2",
      phase: "Groundbreaking",
      events: [
        "Construction begins on Phase One Stage One",
        "Three initial buildings (400,000 sq ft)",
        "Infrastructure development"
      ]
    },
    {
      year: 2027,
      quarter: "Full Year",
      phase: "Expansion",
      events: [
        "10 industrial buildings (2M sq ft)",
        "200 residential units delivered",
        "100,000 sq ft commercial space"
      ]
    },
    {
      year: 2028,
      quarter: "Full Year",
      phase: "Peak Development",
      events: [
        "15 industrial buildings (3M sq ft)",
        "400 residential units",
        "400,000 sq ft commercial expansion"
      ]
    },
    {
      year: 2029,
      quarter: "Full Year",
      phase: "Continued Growth",
      events: [
        "10 industrial buildings (2M sq ft)",
        "300 residential units",
        "Commercial center expansion"
      ]
    },
    {
      year: 2030,
      quarter: "Full Year",
      phase: "Phase One Completion",
      events: [
        "12 final buildings (2.4M sq ft)",
        "500 residential units",
        "Full Phase One operational",
        "436 acres fully developed"
      ]
    }
  ],

  projectedCompletion: {
    phaseOne: "End of 2030",
    phaseTwo: "Post-2030",
    phaseThree: "Long-term vision"
  }
};

export const FUTURE_PHASES = {
  title: "Future Development",
  description: "Beyond Phase One, APOZ continues to expand its vision of a world-class industrial and residential community.",
  
  phases: [
    {
      name: "Phase Two",
      focus: "Residential sales and community building",
      acres: 210,
      timeline: "Post-2030"
    },
    {
      name: "Phase Three",
      focus: "Innovation hub and smart city initiatives",
      acres: "TBD",
      timeline: "Long-term"
    }
  ]
};
