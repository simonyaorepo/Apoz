# Content Additions Summary

## Overview
Added high-priority content from investment proposal PDF to enhance existing pages. All new content maintains confidentiality (no specific IRR numbers, equity multiples, or proprietary terms).

## Files Modified

### ✅ English Content Added (Complete)

#### 1. **investment.json** - 4 New Sections
- **targetIndustries**: Details on 5 target sectors (EV, Solar, Electronics, Modular Construction, Medical Devices) with tariff rates and opportunities
- **dualProduction**: Explanation of Asia-Pacific + USA manufacturing integration model with 4-step process and 4 key benefits
- **marketContext**: "Why Now?" section covering Section 301 tariffs, trade data, reshoring trends, and strategic timing
- **eb5Program**: Complete EB-5 immigration investment details including $800K Rural TEA threshold, Green Card pathway, process timeline, and dual EB-5+QOZ benefits

**Total Keys Added:** 80 keys

---

#### 2. **masterPlan.json** - 2 New Sections  
- **sustainability**: Comprehensive ESG section covering LEED Silver certification, low-impact development, renewable energy (2MW-10MW solar), net-zero vision 2035, waste reduction, green spaces, and ESG reporting
- **acreageBreakdown**: Corrected site breakdown - 434.23 total acres split into Industrial (347), Logistics (22), Support (75), Residential (29), Commercial (10), Exhibition (10)

**Total Keys Added:** 47 keys

---

#### 3. **services.json** - 2 New Sections
- **softLandingServices**: Tiered service packages for Asia-Pacific companies - Baseline (included), Enhanced (fee-based), Premier (white-glove) with detailed service items
- **infrastructureServices**: Enterprise utilities including electrical power (on-site substation), water/wastewater (WWTP), telecommunications (carrier-neutral fiber), and transportation access

**Total Keys Added:** 56 keys

---

#### 4. **home.json** - 1 New Section
- **whyNow**: Market urgency section covering Section 301 tariffs ($370B impacted), manufacturing reshoring (364K jobs), government incentives ($400B+), and strategic window closing

**Total Keys Added:** 19 keys

---

## Chinese Translations Status

### ⚠️ Translation Placeholders Added

All English content has been mirrored to Chinese files with `[TRANSLATE]` markers. You need to provide Chinese translations for:

- **home.json**: 19 keys  
- **services.json**: 56 keys
- **masterPlan.json**: 47 keys
- **investment.json**: 80 keys

**Total Translation Work: 202 keys**

---

## Next Steps

### Option 1: Manual Translation
Review the Chinese files and replace `[TRANSLATE]` markers with proper translations:
- `public/locales/zh/investment.json`
- `public/locales/zh/masterPlan.json`
- `public/locales/zh/services.json`
- `public/locales/zh/home.json`

### Option 2: Batch Translation
Use translation helper script for individual keys:
```bash
npm run translate:add investment targetIndustries.title "Target Industries" "目标行业"
```

### Option 3: Professional Translation Service
Export the 202 untranslated keys to a spreadsheet, send to professional translator, then update files.

---

## Implementation Requirements

To display this new content on your website, you'll need to:

### 1. Create New Components (if desired)

**For Investment Page:**
```tsx
// src/components/InvestmentSection/subcomponents/TargetIndustriesSection.tsx
// src/components/InvestmentSection/subcomponents/DualProductionSection.tsx
// src/components/InvestmentSection/subcomponents/MarketContextSection.tsx
// src/components/InvestmentSection/subcomponents/EB5ProgramSection.tsx
```

**For Master Plan Page:**
```tsx
// src/components/MasterPlanSection/subcomponents/SustainabilitySection.tsx
// src/components/MasterPlanSection/subcomponents/AcreageBreakdownSection.tsx
```

**For Services Page:**
```tsx
// src/components/ServicesSection/subcomponents/SoftLandingServicesSection.tsx
// src/components/ServicesSection/subcomponents/InfrastructureServicesSection.tsx
```

**For Home Page:**
```tsx
// src/components/HomeSection/subcomponents/WhyNowSection.tsx
```

### 2. Update Section Routing

Example for Investment Page:
```tsx
// src/components/InvestmentSection/InvestmentSection.tsx

if (section === 'target-industries') {
  return <TargetIndustriesSection onNavigate={onNavigate} />;
}

if (section === 'dual-production') {
  return <DualProductionSection onNavigate={onNavigate} />;
}

// ... etc
```

### 3. Add Navigation Links

Update preview components to link to new sections:
```tsx
<InvestmentPreview
  title="Target Industries"
  description="Five high-growth sectors optimized for dual production"
  route="/investment/target-industries"
/>
```

---

## Content Structure Overview

### Target Industries Section
**Format:** 5 industry cards with tariff rates and market opportunities
**Suggested UI:** Grid layout with icon cards (similar to your existing services grid)

### Dual Production Model
**Format:** 4-step process + 4 benefits
**Suggested UI:** Step-by-step flow diagram or numbered process cards

### Market Context (Why Now?)
**Format:** 4 data-driven sections with statistics
**Suggested UI:** Stats cards with large numbers and trend indicators

### EB-5 Program
**Format:** Investment requirements + benefits + process timeline
**Suggested UI:** Info cards with accordion for process details

### Sustainability & ESG
**Format:** 7 sustainability categories with features
**Suggested UI:** Icon-based feature grid or tabbed content

### Acreage Breakdown
**Format:** 6 zones with acreage and descriptions
**Suggested UI:** Table or card grid with zone visualizations

### Soft Landing Services
**Format:** 3-tier service packages with feature lists
**Suggested UI:** Pricing-style comparison table or expandable cards

### Infrastructure Services
**Format:** 4 utility categories with specs
**Suggested UI:** Icon-based service cards with technical details

---

## Validation

Run validation to check translation status:
```bash
npm run translate:validate
```

You should see warnings for 202 `[TRANSLATE]` markers until Chinese translations are complete.

---

## Key Benefits of Added Content

1. **Target Industries** - Helps prospects understand if APOZ is right for their business
2. **Dual Production Model** - Explains the core value proposition (tariff avoidance)
3. **Market Context** - Creates urgency with data-driven "why now?" messaging
4. **EB-5 Program** - Adds immigration investment pathway (unique to Rural TEA)
5. **Sustainability** - Attracts ESG-conscious investors and Fortune 500 tenants
6. **Acreage Breakdown** - Provides accurate site details aligned with master plan
7. **Soft Landing Services** - Differentiates APOZ with comprehensive tenant support
8. **Infrastructure Services** - Demonstrates enterprise-ready utilities

All content integrates seamlessly into existing page structure - no new pages required!
