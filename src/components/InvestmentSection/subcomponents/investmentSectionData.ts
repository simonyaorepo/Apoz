import { DollarSign, Globe, TrendingUp, Shield, Zap, Building2 } from "lucide-react";

// Investment Overview
export const INVESTMENT_OVERVIEW = {
  title: "Investment Overview",
  description: "Asia Pacific Opportunity Zone (APOZ) in Winnie, Texas is a comprehensive development combining industrial park, affordable housing, and bonded logistics facilities.",
  highlights: [
    "Only FTZ + QOZ dual-status business park in the U.S.",
    "Total planned development: Industrial park + affordable housing + bonded logistics",
    "Special Incentives: QOZ capital gains tax benefits + FTZ duty-free operations",
    "REIT-ready structure designed for IPO or REIT conversion"
  ],
  investmentStrategy: [
    {
      phase: "Phase 1",
      scope: "Industrial park + warehouses + logistics facilities",
      capitalRequired: "~$24MM",
      fundingSources: "QOF + LPs + strategic partners"
    },
    {
      phase: "Phase 2",
      scope: "2,000 affordable homes + community infrastructure",
      capitalRequired: "TBD",
      fundingSources: "QOF + LIHTC + debt financing"
    },
    {
      phase: "Phase 3",
      scope: "Retail, data center, and additional manufacturing hubs",
      capitalRequired: "TBD",
      fundingSources: "REIT + private equity"
    }
  ],
  capitalStructure: [
    {
      layer: "Equity – QOF Investors (30-40%)",
      role: "Invest capital gains into APOZ QOF",
      returnType: "Tax-free gains after 10 years"
    },
    {
      layer: "Preferred LP Investors (25-35%)",
      role: "Family offices, institutions, strategic partners",
      returnType: "Fixed IRR + upside sharing"
    },
    {
      layer: "Senior Debt (25-35%)",
      role: "Construction loans + infrastructure financing",
      returnType: "Interest + collateral"
    },
    {
      layer: "Developer Promote (5-10%)",
      role: "APOZ sponsor equity",
      returnType: "Performance-based carry"
    }
  ],
  investorBenefits: {
    qozTax: [
      "Defer capital gains until Dec 31, 2026",
      "Pay zero federal capital gains tax on APOZ investment profits after 10 years"
    ],
    ftzOperating: [
      "Attracts global manufacturing tenants",
      "Duty-free imports/export improve tenant margins → stronger rental yield"
    ],
    irrPotential: {
      baseCase: "~15-18%",
      withQOZ: "+3-5% IRR uplift"
    }
  },
  exitStrategy: [
    "REIT Conversion: Pool APOZ assets into a publicly traded REIT.",
    "Strategic Sale: Sell stabilized assets to institutional investors.",
    "IPO Listing: Potential for cross-border listing in the U.S."
  ]
};

// FTZ + QOZ Dual Benefits
export const DUAL_STATUS_BENEFITS = {
  ftz: {
    title: "Foreign Trade Zone (FTZ #171)",
    benefits: [
      {
        name: "Duty Deferral",
        description: "No duty payment until goods leave the FTZ for U.S. consumption"
      },
      {
        name: "Duty Reduction",
        description: "Option to pay duty on lower-classified finished product vs. higher raw material rate"
      },
      {
        name: "No Duty on Exports",
        description: "Manufacture goods and export duty-free with 'Made in USA' designation"
      },
      {
        name: "Improved Cash Flow",
        description: "Significant working capital savings from deferred duty payments"
      },
      {
        name: "Streamlined Logistics",
        description: "Simplified customs procedures and faster clearance times"
      },
      {
        name: "No Duty on Waste/Scrap",
        description: "Duty exemption on manufacturing waste and scrap materials"
      }
    ]
  },
  qoz: {
    title: "Qualified Opportunity Zone (QOZ)",
    benefits: [
      {
        name: "Capital Gains Deferral",
        description: "Defer capital gains taxes until 2026 or until investment is sold"
      },
      {
        name: "Step-Up Basis (5 years)",
        description: "10% reduction in deferred capital gains after 5 years"
      },
      {
        name: "Step-Up Basis (7 years)",
        description: "15% reduction in deferred capital gains after 7 years"
      },
      {
        name: "Permanent Exclusion (10 years)",
        description: "100% exemption on new appreciation if held for 10+ years"
      },
      {
        name: "Rolling Designation",
        description: "QOZ status permanent through program, providing long-term certainty"
      },
      {
        name: "Flexible Investment",
        description: "Wide range of qualifying real estate and business investments"
      }
    ]
  },
  residential: {
    title: "Residential Development Benefits",
    benefits: [
      {
        name: "10-Year Hold + Tax-Free Gains",
        description: "QOZ investors who hold for 10+ years pay zero capital gains tax on the appreciation of the Residential Village"
      },
      {
        name: "LIHTC-Enhanced Returns",
        description: "Up to 9% Low-Income Housing Tax Credits improve overall project economics and attract institutional equity at lower cost of capital"
      },
      {
        name: "Steady Cash Flow",
        description: "Rental income from ~2,000 units stabilizes returns and reduces downside volatility"
      },
      {
        name: "Exit Flexibility",
        description: "The project can evolve from rental to for-sale units over time, unlocking realized gains as the market appreciates"
      },
      {
        name: "Workforce Synergy",
        description: "Industrial park employment ensures high occupancy and minimal vacancy risk for residential units"
      }
    ]
  }
};

// Investment Opportunities
export const benefits = [
  {
    icon: DollarSign,
    title: "FTZ + QOZ Dual Benefits",
    description: "The only project in the U.S. combining Foreign Trade Zone duty savings with Qualified Opportunity Zone tax incentives—reducing operational costs and capital gains taxes."
  },
  {
    icon: Globe,
    title: "Strategic Global Gateway",
    description: "Located near Port of Houston (#1 U.S. port) on I-10, connecting Pacific to Atlantic. Ideal for manufacturers serving North American and global markets."
  },
  {
    icon: TrendingUp,
    title: "Unprecedented Demand",
    description: "Tariff policies and reshoring trends driving surge in manufacturer relocations. Hundreds of global companies actively seeking FTZ solutions."
  },
  {
    icon: Shield,
    title: "Diversified Development Model",
    description: "Stable revenue from diversified sources: industrial leases, commercial rents, residential sales, and tenant services across 646+ acres of development."
  },
  {
    icon: Zap,
    title: "Cost Advantages",
    description: "29% lower electricity, $7.25 minimum wage, no city/state taxes, plus government incentive programs—significantly reducing operating expenses."
  },
  {
    icon: Building2,
    title: "Integrated Ecosystem",
    description: "Master-planned community combining work, live, and shop—enhancing employee retention and creating sustainable long-term value."
  }
];

export const opportunities = [
  {
    title: "Industrial Park Investment",
    description: "Invest in FTZ #171 manufacturing facilities—9.8M sq ft serving international manufacturers",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    metrics: {
      sqft: "9,800,000",
      capacity: "500+ tenant spaces",
      targetTenants: "Asia-Pacific manufacturers"
    }
  },
  {
    title: "Commercial Real Estate",
    description: "High-traffic I-10 corridor retail and service centers—700K sq ft with 30,000+ daily vehicles",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    metrics: {
      sqft: "700,000",
      location: "I-10 Exit 822",
      traffic: "30,000+ vehicles/day"
    }
  },
  {
    title: "Residential Development",
    description: "Affordable workforce housing—3,000 units supporting industrial park employees and local community",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    metrics: {
      units: "3,000 units",
      phase1: "1,500 build-to-lease",
      phase2: "1,500 build-to-sell"
    }
  },
  {
    title: "QOZ Fund Participation",
    description: "Invest through Qualified Opportunity Fund for maximum tax advantages and long-term appreciation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    metrics: {
      deferral: "Until 2026",
      reduction: "Up to 15%",
      exclusion: "100% after 10 years"
    }
  }
];

// Financial Projections - 5 Year Revenue Forecast
export const FINANCIAL_PROJECTIONS = {
  title: "Five-Year Financial Projections",
  subtitle: "Phase One Development (436 acres) - Annual Revenue Growth",
  projections: [
    {
      year: 2026,
      industrial: { sqft: 400000, revenue: 0 },
      commercial: { sqft: 0, revenue: 0 },
      residential: { units: 100, revenue: 0 },
      otherIncome: 1000000,
      totalRevenue: 1000000,
      note: "Stage 1: 3 buildings (400K sq ft total)"
    },
    {
      year: 2027,
      industrial: { sqft: 2400000, revenue: 7200000 },
      commercial: { sqft: 100000, revenue: 0 },
      residential: { units: 300, revenue: 1800000 },
      otherIncome: 2500000,
      totalRevenue: 11500000,
      note: "10 buildings + 200 residential units"
    },
    {
      year: 2028,
      industrial: { sqft: 5400000, revenue: 43200000 },
      commercial: { sqft: 500000, revenue: 3000000 },
      residential: { units: 700, revenue: 5400000 },
      otherIncome: 5000000,
      totalRevenue: 56600000,
      note: "15 buildings + 400 residential units"
    },
    {
      year: 2029,
      industrial: { sqft: 7400000, revenue: 97200000 },
      commercial: { sqft: 600000, revenue: 15000000 },
      residential: { units: 1000, revenue: 12600000 },
      otherIncome: 8000000,
      totalRevenue: 132800000,
      note: "10 buildings + 300 residential units"
    },
    {
      year: 2030,
      industrial: { sqft: 9800000, revenue: 133200000 },
      commercial: { sqft: 700000, revenue: 18000000 },
      residential: { units: 1500, revenue: 18000000 },
      otherIncome: 9000000,
      totalRevenue: 178200000,
      note: "12 buildings + 500 residential units"
    },
    {
      year: "2030+",
      industrial: { sqft: 9800000, revenue: 176400000 },
      commercial: { sqft: 700000, revenue: 21000000 },
      residential: { units: 1500, revenue: 27000000 },
      otherIncome: 10000000,
      totalRevenue: 234400000,
      note: "Full buildout - stabilized operations"
    }
  ],
  rentalRates: {
    industrial: "$1.50/sq ft/month ($1.00 base + $0.50 TICAM)",
    commercial: "$2.50/sq ft/month ($2.00 base + $0.50 TICAM)",
    residential: "$1,500/unit/month ($18,000/year per unit)"
  },
  fullBuildout: {
    industrialArea: "9,800,000 sq ft",
    commercialArea: "700,000 sq ft",
    residentialUnits: "1,500 units",
    annualRevenue: "$234,400,000",
    description: "Combined rental income from industrial, commercial, and residential at full capacity"
  }
};

// SWOT Analysis
export const SWOT_ANALYSIS = {
  title: "Strategic Analysis",
  subtitle: "Comprehensive SWOT Assessment",
  
  strengths: [
    {
      title: "Only FTZ + QOZ Dual Status in U.S.",
      description: "Unique position as the nation's sole business park combining Foreign Trade Zone #171 and Qualified Opportunity Zone benefits—delivering unmatched tariff savings and tax advantages.",
      icon: Shield
    },
    {
      title: "Prime Strategic Location",
      description: "Adjacent to I-10 in center of Sun Belt states, near Port of Houston (#1 U.S. marine port), connecting Pacific Ocean, Gulf of America, and Atlantic Ocean. Links top 3 U.S. states: CA, TX, FL.",
      icon: Globe
    },
    {
      title: "Superior Business Environment",
      description: "Electricity 29% cheaper than national average, minimum wage $7.25/hour, no city tax, no state income tax. Multiple government incentives available (Enterprise Fund, Skills Development, JETI Act, TSIF).",
      icon: TrendingUp
    },
    {
      title: "Powerful Tax Benefits",
      description: "QOZ capital gains: 10% reduction at 5 years, 15% at 7 years, 100% exclusion at 10 years. FTZ duty deferral and reduction significantly improve cash flow and working capital.",
      icon: DollarSign
    }
  ],
  
  weaknesses: [
    {
      title: "New Development Timeline",
      description: "As a brand-new master planned development, APOZ will require approximately 3 years to reach mature status with full local amenities and infrastructure.",
      icon: Zap
    },
    {
      title: "Distance from Houston Center",
      description: "Located 30 miles from downtown Houston (45-minute drive), requiring travel for premium dining, shopping, cultural activities, and entertainment.",
      icon: Building2
    }
  ],
  
  opportunities: [
    {
      title: "Unprecedented Tariff War Demand",
      description: "Current reciprocal tariff policies creating massive surge in inquiries. Hundreds of foreign companies from Taiwan, China, Cambodia, Mexico, Canada, Malaysia, Vietnam relocating to U.S. to avoid tariff burden—APOZ is the ideal solution.",
      highlight: true
    },
    {
      title: "$500M+ Foreign Direct Investment",
      description: "Strong interest from Asia-Pacific manufacturers and even domestic U.S. companies from NY, CA, NJ seeking FTZ+QOZ advantages. Multiple confirmed Letters of Intent from publicly-traded companies.",
      highlight: true
    },
    {
      title: "Multiple Revenue Streams",
      description: "11+ income sources: rental income, direct operations, joint ventures, affordable home sales, IPO incubation fees, visa services, FTZ admin fees, QOZ fund income, HOA/CAM, tenant services, solar farm.",
      highlight: false
    },
    {
      title: "Future Incorporated City",
      description: "Master plan designed to become self-governed incorporated city 'APOZ City' by 2030 through resident vote, creating long-term sustainability and governance control.",
      highlight: false
    }
  ],
  
  threats: [
    {
      title: "Potential Competing Parks",
      description: "Risk of another FTZ+QOZ dual-status park emerging in Texas, though currently APOZ maintains unique monopoly position.",
      severity: "low"
    },
    {
      title: "Policy Changes",
      description: "Potential cancellation of tariff measures (extremely unlikely) or FTZ/QOZ programs by U.S. government could reduce competitive advantages.",
      severity: "low"
    }
  ]
};

// Use of Funds Breakdown
export const USE_OF_FUNDS = {
  title: "Use of Funds",
  subtitle: "Investment Allocation & Project Costs",
  
  phaseOne: {
    title: "Phase One - Stage One (31 acres)",
    landAndSoft: {
      label: "Land Acquisition & Soft Costs",
      items: [
        { name: "Land Acquisition", amount: 7200000 },
        { name: "Architectural, Design, Engineering & Others", amount: 600000 }
      ],
      subtotal: 7800000
    },
    hardCosts: {
      label: "Hard Costs - Construction & Infrastructure",
      items: [
        { name: "Building Construction (3 buildings, 400K sq ft)", amount: 20000000 },
        { name: "Water & Sewer Connections", amount: 550000 },
        { name: "Parking Lot, Green Belts, Retention Ponds", amount: 2000000 },
        { name: "Miscellaneous Expenses", amount: 250000 }
      ],
      subtotal: 22800000
    },
    total: 30600000,
    note: "Initial 3 buildings (400K sq ft) establishing FTZ operations and management offices"
  },
  
  phaseOneStageTwo: {
    title: "Phase One - Stage Two (405 acres)",
    costs: {
      label: "Full Development Costs",
      items: [
        { name: "Soft Costs (Architect, Survey, Engineering)", amount: 5000000 },
        { name: "Industrial Space (9.4M sq ft @ $50/sq ft)", amount: 470000000 },
        { name: "Commercial Space (700K sq ft @ $50/sq ft)", amount: 35000000 },
        { name: "Residential Units (1,500 units @ $88K/unit)", amount: 132000000 },
        { name: "Miscellaneous (Parking, Green Belt, etc.)", amount: 2500000 }
      ],
      subtotal: 644500000
    },
    total: 644500000,
    note: "Complete buildout of industrial, commercial, and residential components"
  },
  
  phaseTwo: {
    title: "Phase Two (210 acres) - Build-to-Sell",
    residential: {
      label: "Affordable Housing Sales",
      units: 800,
      costPerUnit: 88000,
      salesPricePerUnit: 188000,
      profitPerUnit: 100000,
      totalCost: 70400000,
      totalRevenue: 150400000,
      grossProfit: 80000000
    },
    breakdown: {
      homeSiteCost: 5000,
      softCost: 3000,
      hardCost: 70000,
      miscExpenses: 10000,
      totalPerUnit: 88000
    },
    note: "High-end modular homes (3BR, 1,200 sq ft) on 10,000 sq ft lots"
  },
  
  totalInvestment: {
    phaseOneStageOne: 30600000,
    phaseOneStageTwo: 644500000,
    phaseTwo: 70400000,
    grandTotal: 745500000
  }
};

export const INFRASTRUCTURE_INVESTMENT_DATA = {
  title: "Infrastructure Investment",
  backgroundImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Investment", href: "/investment" },
    { label: "Infrastructure" }
  ],
  content: {
    intro: [
      "The Asia Pacific Opportunity Zone (APOZ) in Winnie, Texas is designed as a fully integrated industrial, logistics, residential, and commercial hub.",
      "Infrastructure development underpins the success of Phase 1 industrial facilities and Phase 2 affordable housing, ensuring APOZ becomes a world-class trade and manufacturing ecosystem."
    ],
    scope: [
      {
        category: "Transportation",
        components: "Internal roads, highway connectors, truck corridors, EV charging stations",
        purpose: "Ensures smooth tenant operations & last-mile delivery"
      },
      {
        category: "Utilities",
        components: "Power grid, renewable energy integration, water, wastewater, natural gas",
        purpose: "Supports manufacturing & residential demand"
      },
      {
        category: "Digital Connectivity",
        components: "Fiber optic backbone, 5G-enabled industrial zones, smart IoT integration",
        purpose: "Enables \"smart zone\" logistics & AI-driven operations"
      },
      {
        category: "FTZ Facilities",
        components: "Bonded warehouses, customs inspection zones, cargo processing",
        purpose: "Unlocks APOZ's FTZ-171 benefits"
      },
      {
        category: "Residential Infrastructure",
        components: "Affordable housing utilities, community parks, schools, clinics",
        purpose: "Supports APOZ's Phase 2 2,000-home development"
      },
      {
        category: "Environmental Systems",
        components: "Stormwater drainage, sustainable landscaping, recycling facilities",
        purpose: "ESG-aligned development strategy"
      }
    ],
    timeline: [
      {
        phase: "Phase 1 (2025–2026)",
        scope: "Industrial Park site prep, bonded warehouses, initial utilities",
        milestones: "Power, roads, FTZ-ready logistics"
      },
      {
        phase: "Phase 2 (2026–2027)",
        scope: "Affordable homes, schools, community facilities",
        milestones: "Residential water, gas, telecom integration"
      }
    ],
    funding: {
      heading: "Investment & Funding Structure",
      sources: [
        "<strong>Private Capital via QOF:</strong> Leverage Qualified Opportunity Zone (QOZ) tax benefits.",
        "<strong>Infrastructure Financing:</strong> Partnerships with Texas development authorities.",
        "<strong>Tenant Participation:</strong> Built-to-suit facilities include partial cost-sharing.",
        "<strong>Public-Private Grants:</strong> Potential HUD and DOE programs for sustainable energy and housing."
      ]
    },
    benefits: {
      tenants: [
        "Reliable bonded logistics infrastructure",
        "Duty-free imports & exports under FTZ-171",
        "High-speed connectivity for Industry 4.0 manufacturing"
      ],
      investors: [
        "Increased APOZ valuation via infrastructure improvements"
      ]
    }
  }
};
