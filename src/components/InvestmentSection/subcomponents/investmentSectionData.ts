import { DollarSign, Globe, TrendingUp, Shield, Zap, Building2 } from "lucide-react";

// Investment Overview
export const INVESTMENT_OVERVIEW = {
  title: "Investment Overview",
  description: "The Asia Pacific Opportunity Zone (APOZ) in Winnie, Texas, is a master-planned development business park uniquely positioned at the forefront of America's re-industrialization initiative.",
  highlights: [
    "Only FTZ + QOZ dual-status business park in the U.S.",
    "Enables manufacturers to localize production and reduce tariffs",
    "$500M+ in projected foreign direct investment (FDI)",
    "$234.4M projected annual revenue at full buildout",
    "5,000-7,000 jobs created across sectors"
  ],
  ecosystem: "APOZ provides a full-service ecosystem—integrating industrial, commercial, and residential components—that connects global investors to growth opportunities, delivering strong returns while supporting workforce development and community growth in Greater Houston."
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
  }
};

// Financial Projections
export const FINANCIAL_PROJECTIONS = {
  phaseOne: {
    title: "Phase One: 436 Acres (Build-to-Lease)",
    industrial: {
      sqft: "9,800,000",
      rate: "$1.50/sq ft/month",
      annualIncome: "$176,400,000"
    },
    commercial: {
      sqft: "700,000",
      rate: "$2.50/sq ft/month",
      annualIncome: "$21,000,000"
    },
    residential: {
      units: 1500,
      rate: "$1,500/unit/month",
      annualIncome: "$27,000,000"
    },
    other: {
      annualIncome: "$10,000,000"
    },
    total: {
      annualIncome: "$234,400,000"
    }
  },
  phaseTwo: {
    title: "Phase Two: 210 Acres (Build-to-Sale)",
    residential: {
      units: 1500,
      salesPrice: "$188,000",
      totalCost: "$132,000,000",
      totalRevenue: "$282,000,000",
      grossProfit: "$150,000,000"
    }
  },
  timeline: {
    2026: "$1,000,000",
    2027: "$11,500,000",
    2028: "$56,600,000",
    2029: "$132,800,000",
    2030: "$178,200,000",
    "End of 2030": "$234,400,000"
  }
};

// Use of Funds
export const USE_OF_FUNDS = {
  phaseOneStageOne: {
    title: "Phase One Stage One: 31 Acres",
    landAcquisition: "$7,200,000",
    softCosts: "$600,000",
    hardCosts: {
      construction: "$20,000,000",
      waterSewer: "$550,000",
      sitework: "$2,000,000",
      misc: "$250,000",
      total: "$22,800,000"
    },
    totalCost: "$30,600,000",
    deliverables: "3 buildings totaling 400,000 sq ft"
  },
  phaseOneStageTwo: {
    title: "Phase One Stage Two: 405 Acres",
    softCosts: "$5,000,000",
    hardCosts: {
      industrial: "$470,000,000",
      commercial: "$35,000,000",
      residential: "$132,000,000",
      sitework: "$2,500,000",
      total: "$639,500,000"
    },
    totalCost: "$644,500,000",
    deliverables: "9.4M sq ft industrial, 700K sq ft commercial, 1,500 residential units"
  }
};

// Economic Impact
export const ECONOMIC_IMPACT = {
  title: "Economic & Social Impact",
  description: "APOZ delivers broad benefits to the Greater Houston region by combining industrial growth with community development.",
  impacts: [
    {
      category: "Job Creation",
      value: "5,000-7,000",
      description: "Jobs across construction, manufacturing, and service sectors"
    },
    {
      category: "Foreign Direct Investment",
      value: "$500M+",
      description: "From Asia-Pacific firms expanding into U.S. market"
    },
    {
      category: "Land Revitalization",
      value: "646+ acres",
      description: "Underutilized QOZ land transformed into productive assets"
    },
    {
      category: "Affordable Housing",
      value: "3,000 units",
      description: "Quality homes starting at $188,000 for working families"
    }
  ],
  regionalBenefits: [
    "Strengthens regional economy through industrial development",
    "Enhances livability and workforce stability",
    "Provides workforce housing in growing metropolitan area",
    "Creates sustainable, self-sufficient community model"
  ]
};

// SWOT Analysis
export const SWOT_ANALYSIS = {
  strengths: [
    "Only FTZ + QOZ dual-status park in the U.S.",
    "Strategic location near Port of Houston (#1 U.S. marine port)",
    "Interstate I-10 accessibility across sun belt states",
    "29% lower electricity costs than national average",
    "No city tax, no state tax",
    "Access to multiple government incentive programs"
  ],
  weaknesses: [
    "New development requiring 3 years to reach maturity",
    "30 miles from downtown Houston (45-minute drive)",
    "Reliant on Winnie school district and public services"
  ],
  opportunities: [
    "Unprecedented demand from tariff war and reshoring trends",
    "Hundreds of inquiries from global manufacturers",
    "Multiple confirmed LOIs from public companies",
    "Diverse revenue streams (rental, sales, fees, services)",
    "Potential to become incorporated APOZ City by 2030",
    "First Asia-Pacific focused business park in U.S."
  ],
  threats: [
    "Potential competing dual-status parks in Texas",
    "Elimination of tariff policies (unlikely)",
    "Cancellation of FTZ or QOZ programs (unlikely)"
  ]
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
    title: "Stable Revenue Model",
    description: "$234M+ projected annual income from diversified sources: industrial leases, commercial rents, residential sales, and tenant services."
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
    description: "Invest in FTZ #171 manufacturing facilities—9.8M sq ft generating $176M+ annual revenue",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    metrics: {
      sqft: "9,800,000",
      annualRevenue: "$176,400,000",
      targetTenants: "500+ manufacturers"
    }
  },
  {
    title: "Commercial Real Estate",
    description: "High-traffic I-10 corridor retail and service centers—700K sq ft with 30,000+ daily vehicles",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    metrics: {
      sqft: "700,000",
      annualRevenue: "$21,000,000",
      traffic: "30,000+ vehicles/day"
    }
  },
  {
    title: "Residential Development",
    description: "Affordable workforce housing—3,000 units generating rental income and sales profits",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    metrics: {
      units: 3000,
      rentalIncome: "$27,000,000/year",
      salesProfit: "$150,000,000"
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
