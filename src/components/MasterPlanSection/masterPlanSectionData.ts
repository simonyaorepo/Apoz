// Master Plan Section data objects

export const INTERNATIONAL_HUB_DATA = {
  title: "International Hub",
  backgroundImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Master Plan", href: "/master-plan" },
    { label: "International Hub" }
  ],
  content: {
    intro: [
      "APOZ International Hub is strategically positioned along the Houston Gulf Coast Corridor in Winnie, Texas, with designation within both Qualified Opportunity Zone (QOZ) and Foreign Trade Zone (FTZ-171).",
      "The purpose is to create a cross-border trade and innovation hub connecting Asia-Pacific manufacturers, U.S. markets, and global logistics networks."
    ],
    targetPartners: [
      "Asia-Pacific manufacturing firms seeking U.S. market entry",
      "Logistics and e-commerce fulfillment operators",
      "Energy and green technology enterprises",
      "Investment funds leveraging QOZ & FTZ incentives"
    ],
    coreFunctions: [
      {
        function: "Global Trade Gateway",
        description: "APOZ serves as an international logistics platform for Asia-Pacific companies importing/exporting goods.",
        impact: "Expands U.S. market access for Asia-based manufacturers."
      },
      {
        function: "Cross-Border E-commerce",
        description: "Dedicated bonded warehouses & last-mile distribution for online retail fulfillment.",
        impact: "Reduces costs and shipping times for global sellers."
      },
      {
        function: "Innovation & Manufacturing Hub",
        description: "High-tech industrial clusters for clean energy, EV components, hydrogen, and electronics.",
        impact: "Attracts advanced manufacturing tenants."
      },
      {
        function: "International Investment Platform",
        description: "Offers tax-advantaged entry for global investors through Qualified Opportunity Funds (QOFs).",
        impact: "Maximizes investor returns and increases APOZ competitiveness."
      }
    ],
    advantages: {
      heading: "Strategic Advantages",
      items: [
        "<strong>FTZ-171 Status:</strong> Duty-free imports/exports for global supply chains.",
        "<strong>QOZ Tax Benefits:</strong> Attracts global capital through capital gains tax deferral and tax-free growth.",
        "<strong>Proximity to Houston Port:</strong> Seamless integration with one of the busiest shipping hubs in the U.S.",
        "<strong>Asia-Pacific Connectivity:</strong> Focused on serving Chinese, ASEAN, Korean, Japanese, and Indian manufacturers seeking 'friend-shoring' options."
      ]
    },
    industries: {
      heading: "Key Industries Targeted",
      sectors: [
        {
          name: "Renewable Energy & Hydrogen Economy",
          description: "Solar panels, EV batteries, hydrogen fuel cells, energy storage."
        },
        {
          name: "Advanced Water Technologies",
          description: "Industrial & residential water treatment solutions."
        },
        {
          name: "Consumer Goods & Cross-Border Logistics",
          description: "Ideal for Asia-Pacific exporters leveraging APOZ's bonded facilities."
        },
        {
          name: "Smart Manufacturing & AI Automation",
          description: "Robotics, IoT integration, and predictive logistics."
        }
      ]
    },
    investorBenefits: {
      heading: "Investor Benefits",
      combinedIncentives: [
        "Zero U.S. federal capital gains tax after 10 years.",
        "Lower operational costs via duty elimination."
      ],
      roiPotential: [
        "Strong demand from Asia-Pacific manufacturers relocating to the U.S.",
        "Integrated affordable workforce housing (Phase 2: 2,000 homes) supports stable tenant retention."
      ],
      exitOpportunities: [
        "REIT securitization",
        "U.S. IPO",
        "Strategic portfolio sale to institutional funds"
      ]
    }
  }
};

export const FTZ_ZONE_DATA = {
  title: "Foreign Trade Zone (FTZ-171)",
  backgroundImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Master Plan", href: "/master-plan" },
    { label: "FTZ Zone" }
  ],
  content: {
    intro: [
      "A Foreign Trade Zone (FTZ) is a designated secure area within the U.S., considered outside of U.S. Customs territory for duty purposes.",
      "Companies can import, store, assemble, manufacture, and re-export goods without paying U.S. customs duties until they enter U.S. commerce.",
      "APOZ's planned FTZ-171 designation in Texas allows investors and tenants to enjoy these benefits."
    ],
    process: [
      {
        step: "1. Apply for FTZ Designation",
        process: "File with the U.S. Foreign-Trade Zones Board for activation.",
        stakeholders: "Project developer, FTZ consultant"
      },
      {
        step: "2. Activate the Zone",
        process: "Coordinate with U.S. Customs and Border Protection (CBP) for site inspection & approval.",
        stakeholders: "Developer, CBP"
      },
      {
        step: "3. Operate Under FTZ Status",
        process: "Tenants import raw materials or finished goods into the zone duty-free.",
        stakeholders: "Tenants, customs brokers"
      },
      {
        step: "4. Manufacturing & Storage",
        process: "Goods can be processed, assembled, packaged, or stored within the zone.",
        stakeholders: "Manufacturers, logistics firms"
      },
      {
        step: "5. Entry to U.S. Commerce",
        process: "Duties are paid only when goods leave FTZ into U.S. markets.",
        stakeholders: "Importers, CBP"
      },
      {
        step: "6. Re-export Without Duty",
        process: "Goods shipped overseas incur zero U.S. customs duties.",
        stakeholders: "Exporters"
      }
    ],
    benefits: [
      {
        benefit: "Duty Deferral",
        impact: "Pay customs duties only when products enter the U.S. market."
      },
      {
        benefit: "Duty Elimination",
        impact: "No duties on re-exported goods."
      },
      {
        benefit: "Inverted Tariffs",
        impact: "If components have higher duties than finished products, pay the lower finished-product duty rate."
      },
      {
        benefit: "Cash Flow Improvement",
        impact: "Lower upfront costs improve working capital and investor ROI."
      },
      {
        benefit: "QOZ + FTZ Synergy",
        impact: "If your project is also in a Qualified Opportunity Zone (QOZ), you combine capital gains tax deferral with customs savings."
      }
    ],
    challenges: [
      {
        challenge: "Complex Activation",
        explanation: "Requires federal and CBP approvals, which can take 6–12 months.",
        bestPractice: "Hire an experienced FTZ consultant early."
      },
      {
        challenge: "Compliance Burden",
        explanation: "Must maintain inventory tracking and reporting to CBP.",
        bestPractice: "Use specialized FTZ compliance software."
      },
      {
        challenge: "Tenant Onboarding",
        explanation: "Tenants may lack FTZ knowledge.",
        bestPractice: "Provide tenant training & legal support."
      },
      {
        challenge: "Coordination with QOZ",
        explanation: "Structuring both FTZ & QOZ benefits can be complicated.",
        bestPractice: "Use tax counsel to maximize combined incentives."
      }
    ],
    bestPractices: {
      earlyEngagement: "Bring FTZ specialists and customs brokers into the project planning stage.",
      integratedIncentives: "Combine FTZ + QOZ + State & Local Incentives to maximize investor ROI.",
      digitalInventory: "Use ERP systems to manage bonded inventory and avoid CBP penalties.",
      investorPitch: "Highlight FTZ benefits in financing decks — especially duty savings and IRR improvements.",
      tenantAttraction: [
        "Solar & EV components",
        "Electronics & semiconductors",
        "Consumer goods",
        "E-commerce fulfillment hubs"
      ]
    }
  }
};

export const QOF_ZONE_DATA = {
  title: "Qualified Opportunity Fund (QOF)",
  backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Master Plan", href: "/master-plan" },
    { label: "QOF Zone" }
  ],
  content: {
    intro: [
      "A QOF stands for Qualified Opportunity Fund — it's a special investment vehicle created under the 2017 U.S. Tax Cuts and Jobs Act to channel private capital into Qualified Opportunity Zones (QOZs) and unlock major tax incentives for investors.",
      "Since your APOZ project sits in a QOZ, setting up or partnering with a QOF can significantly boost investor participation."
    ],
    definition: [
      "A QOF is a corporation or partnership formed specifically to invest in qualified projects inside designated QOZs.",
      "Investors must put their capital gains into a QOF — not directly into the project — to receive the full QOZ tax benefits."
    ],
    process: [
      {
        step: "1. Capital Gain Event",
        process: "Investor sells stock, crypto, business, or property and realizes gains.",
        stakeholders: "Investor"
      },
      {
        step: "2. Invest into QOF",
        process: "Within 180 days, investor contributes gains into a QOF.",
        stakeholders: "Investor + QOF"
      },
      {
        step: "3. QOF Deploys Funds",
        process: "QOF invests at least 90% of assets into QOZ projects like APOZ.",
        stakeholders: "QOF Manager + Developer"
      },
      {
        step: "4. Hold Investment",
        process: "Investors hold their QOF shares for 5, 7, or 10+ years to unlock tax breaks.",
        stakeholders: "Investor"
      },
      {
        step: "5. Exit & Tax-Free Growth",
        process: "After 10+ years, any appreciation on the QOF investment is tax-free.",
        stakeholders: "Investor"
      }
    ],
    requirements: [
      {
        requirement: "90% Asset Test",
        rule: "At least 90% of QOF assets must be in QOZ property or businesses.",
        impact: "Ensures funds support the intended community."
      },
      {
        requirement: "180-Day Reinvestment Window",
        rule: "Investors must invest capital gains into the QOF within 180 days of realizing them.",
        impact: "Timing is critical."
      },
      {
        requirement: "Substantial Improvement",
        rule: "If buying existing property, QOF must double the investment basis within 30 months.",
        impact: "Encourages redevelopment, not passive ownership."
      }
    ],
    benefits: [
      {
        benefit: "Capital Gains Deferral",
        description: "Taxes on reinvested gains are deferred until Dec 31, 2026.",
        impact: "Improves investor liquidity."
      },
      {
        benefit: "Tax-Free Growth",
        description: "If held 10+ years, any appreciation on QOF shares is 100% tax-free.",
        impact: "Boosts IRR & ROI significantly."
      },
      {
        benefit: "Investor Attraction",
        description: "QOF status can unlock a pool of high-net-worth individuals, family offices, and institutions looking for tax-advantaged investments.",
        impact: "Makes fundraising easier."
      }
    ],
    example: {
      scenario: "Let's say an investor has a $2M capital gain from selling tech stocks:",
      withoutQOF: {
        description: "Without QOF",
        result: "Pays ~$480K federal capital gains tax (assuming 24%)."
      },
      withQOF: {
        description: "With QOF (invested in APOZ)",
        details: [
          "Defers tax until 2026",
          "If APOZ investment appreciates to $5M after 10 years:",
          "$3M growth = 100% tax-free",
          "Investor keeps significantly more profit."
        ]
      }
    },
    criticalReasons: [
      "Many institutional & high-net-worth investors require a QOF structure to access QOZ tax benefits.",
      "Makes your bilingual APOZ investor deck more attractive.",
      "Combined with FTZ status, this creates a dual-incentive model:",
      "QOZ: Capital gains tax benefits for investors.",
      "FTZ: Duty-free advantages for APOZ tenants."
    ]
  }
};

export const QOZ_ZONE_DATA = {
  title: "Qualified Opportunity Zone (QOZ)",
  backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Master Plan", href: "/master-plan" },
    { label: "QOZ Zone" }
  ],
  content: {
    intro: [
      "A QOZ is a geographically designated area where investors can receive special federal tax benefits when they invest through a Qualified Opportunity Fund (QOF) into real estate, business developments, or industrial projects within that zone."
    ],
    process: [
      {
        step: "1. Capital Gains Event",
        process: "An investor sells stock, real estate, or another asset, creating a capital gain.",
        stakeholders: "Investor"
      },
      {
        step: "2. Invest Through a QOF",
        process: "Within 180 days, invest those gains into a Qualified Opportunity Fund.",
        stakeholders: "Investor + Fund Manager"
      },
      {
        step: "3. QOF Invests in QOZ Project",
        process: "The QOF deploys capital into QOZ-approved projects like APOZ.",
        stakeholders: "Developer"
      },
      {
        step: "4. Hold Investment",
        process: "Keep the investment 5, 7, or 10+ years to unlock tax incentives.",
        stakeholders: "Investor"
      },
      {
        step: "5. Exit",
        process: "Sell the project or shares after 10+ years tax-free on appreciation.",
        stakeholders: "Investor"
      }
    ],
    benefits: [
      {
        benefit: "Capital Gains Deferral",
        details: "Pay no federal tax on reinvested gains until Dec 31, 2026.",
        timeline: "Up to ~2 years (if invested now)"
      },
      {
        benefit: "Step-Up in Basis (Expired for new investors)",
        details: "Previously reduced taxable gains by up to 15% after 7 years, but ended in 2021.",
        timeline: "N/A"
      },
      {
        benefit: "Tax-Free Growth",
        details: "After 10+ years, pay zero federal capital gains tax on profits from the QOZ investment.",
        timeline: "10+ years"
      }
    ],
    example: {
      scenario: "If an investor sells stock for a $1M gain and invests into APOZ via a QOF:",
      points: [
        "No tax now → money keeps compounding.",
        "After 10 years → 100% of new profits are tax-free."
      ]
    },
    whyMatters: [
      "Your Asia Pacific Opportunity Zone (APOZ) project in Winnie, Texas, is strategically positioned within a designated QOZ.",
      "This creates a double incentive for investors:",
      "Higher IRR & ROI due to capital gains tax deferral + tax-free growth.",
      "Boosts valuation and investor appetite, especially for REIT exits or IPO conversion.",
      "Enhances long-term tenant attraction and capital inflows."
    ],
    synergy: [
      {
        structure: "QOZ",
        taxBenefit: "Capital gains tax deferral + tax-free growth",
        impact: "Attracts equity investors"
      },
      {
        structure: "FTZ (Foreign Trade Zone)",
        taxBenefit: "Eliminates or defers customs duties",
        impact: "Attracts import/export tenants"
      },
      {
        structure: "Combined Effect",
        taxBenefit: "Lower overall project costs + higher returns",
        impact: "Makes APOZ more competitive for both investors & tenants"
      }
    ],
    bestPractices: [
      "Set Up a Qualified Opportunity Fund (QOF) — Required to unlock investor tax benefits.",
      "Market to High-Gain Investors — Target those selling stock, crypto, or real estate.",
      "Integrate in Pitch Decks — Show IRR improvements from tax savings.",
      "Align with FTZ Incentives — Combine QOZ + FTZ benefits for maximum attractiveness."
    ]
  }
};
