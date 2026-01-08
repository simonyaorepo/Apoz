import React from "react";
import TextHero from "../../TextHero";
import styled from "styled-components";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import GoldDivider from "../../ui/GoldDivider";
import { ContentWrapper } from "../../ui/Containers";
import { IntroText, SectionTitle } from "../../ui/Typography";
import { StyledTable } from "../../ui/Table";
import { RequirementsList, RequirementTitle, RequirementText } from "../../ui/Requirements";

interface IndustryZoneInvestmentSectionProps {
  onNavigate: (page: string) => void;
}



const TealTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h5};
  }
`;

const ExampleBox = styled.div`
  background: white;
  padding: 2rem;
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  margin: 2rem 0;
`;

const ExampleTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const ExampleText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 0.75rem;
`;

const HighlightBox = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
`;

const IndustryZoneInvestmentSection: React.FC<IndustryZoneInvestmentSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title="Industry Zone Investment Opportunities"
        backgroundImage="https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investment", href: "/investment" },
          { label: "Industry Zone" }
        ]}
      />
      
      <WhiteSection>
        <ContentWrapper>
          <IntroText>
            APOZ's industrial zone leverages Foreign Trade Zone (FTZ-171) designation to provide significant cost advantages for manufacturing, logistics, and import/export operations. Combined with strategic location along the Houston Gulf Coast Corridor, this creates compelling investment opportunities in advanced manufacturing and global trade infrastructure.
          </IntroText>

          <SectionTitle>Foreign Trade Zone (FTZ-171) Advantages</SectionTitle>
          <IntroText>
            A Foreign Trade Zone (FTZ) is a designated secure area within the U.S., considered outside of U.S. Customs territory for duty purposes. Companies can import, store, assemble, manufacture, and re-export goods without paying U.S. customs duties until they enter U.S. commerce.
          </IntroText>

          <StyledTable>
            <thead>
              <tr>
                <th>Step</th>
                <th>Process</th>
                <th>Who's Involved</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Apply for FTZ Designation</strong></td>
                <td>File with the U.S. Foreign-Trade Zones Board for activation</td>
                <td>Project developer, FTZ consultant</td>
              </tr>
              <tr>
                <td><strong>2. Activate the Zone</strong></td>
                <td>Coordinate with U.S. Customs and Border Protection (CBP) for site inspection & approval</td>
                <td>Developer, CBP</td>
              </tr>
              <tr>
                <td><strong>3. Operate Under FTZ Status</strong></td>
                <td>Tenants import raw materials or finished goods into the zone duty-free</td>
                <td>Tenants, customs brokers</td>
              </tr>
              <tr>
                <td><strong>4. Manufacturing & Storage</strong></td>
                <td>Goods can be processed, assembled, packaged, or stored within the zone</td>
                <td>Manufacturers, logistics firms</td>
              </tr>
              <tr>
                <td><strong>5. Entry to U.S. Commerce</strong></td>
                <td>Duties are paid only when goods leave FTZ into U.S. markets</td>
                <td>Importers, CBP</td>
              </tr>
              <tr>
                <td><strong>6. Re-export Without Duty</strong></td>
                <td>Goods shipped overseas incur zero U.S. customs duties</td>
                <td>Exporters</td>
              </tr>
            </tbody>
          </StyledTable>
        </ContentWrapper>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <TealTitle>Key FTZ Benefits for Investors & Tenants</TealTitle>
          <div style={{ color: 'white', fontSize: '0.9375rem', lineHeight: '1.7' }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Duty Deferral:</strong> Pay customs duties only when products enter the U.S. market, improving cash flow.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Duty Elimination:</strong> No duties on re-exported goods, ideal for global supply chains.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Inverted Tariffs:</strong> If components have higher duties than finished products, pay the lower finished-product duty rate.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Cash Flow Improvement:</strong> Lower upfront costs improve working capital and investor ROI.
            </p>
            <p style={{ marginBottom: '0' }}>
              <strong>QOZ + FTZ Synergy:</strong> Combine capital gains tax deferral with customs savings for maximum returns.
            </p>
          </div>
        </TealBox>
      </TealSection>

      <GreySection>
        <ContentWrapper>
          <SectionTitle>Target Industries & Investment Opportunities</SectionTitle>
          
          <HighlightBox>
            <SectionTitle>Renewable Energy & Clean Tech</SectionTitle>
            <RequirementsList>
              <div>
                <RequirementTitle>Solar panel manufacturing and assembly</RequirementTitle>
                <RequirementText>Import components duty-free and assemble in APOZ for domestic distribution.</RequirementText>
              </div>
              <div>
                <RequirementTitle>EV battery production</RequirementTitle>
                <RequirementText>Leverage FTZ for cost-effective battery cell imports and assembly operations.</RequirementText>
              </div>
              <div>
                <RequirementTitle>Hydrogen fuel cell manufacturing</RequirementTitle>
                <RequirementText>Process components for both domestic and export markets.</RequirementText>
              </div>
              <div>
                <RequirementTitle>Energy storage systems</RequirementTitle>
                <RequirementText>Serve as assembly and distribution hub for North America.</RequirementText>
              </div>
            </RequirementsList>
          </HighlightBox>

          <HighlightBox>
            <SectionTitle>Advanced Manufacturing</SectionTitle>
            <RequirementsList>
              <div>
                <RequirementTitle>Electronics & semiconductors</RequirementTitle>
                <RequirementText>Assembly operations with duty advantages for components.</RequirementText>
              </div>
              <div>
                <RequirementTitle>Smart manufacturing & IoT</RequirementTitle>
                <RequirementText>Robotics and automation systems production.</RequirementText>
              </div>
              <div>
                <RequirementTitle>Consumer goods</RequirementTitle>
                <RequirementText>Final assembly and packaging for U.S. distribution networks.</RequirementText>
              </div>
              <div>
                <RequirementTitle>Medical devices</RequirementTitle>
                <RequirementText>Manufacturing with regulatory compliance support.</RequirementText>
              </div>
            </RequirementsList>
          </HighlightBox>

          <HighlightBox>
            <SectionTitle>Logistics & E-Commerce</SectionTitle>
            <RequirementsList>
              <div>
                <RequirementTitle>Cross-border fulfillment centers</RequirementTitle>
                <RequirementText>Bonded warehousing for Asia-Pacific goods.</RequirementText>
              </div>
              <div>
                <RequirementTitle>Last-mile distribution hubs</RequirementTitle>
                <RequirementText>Strategic Houston metro access for rapid delivery.</RequirementText>
              </div>
              <div>
                <RequirementTitle>Cold storage facilities</RequirementTitle>
                <RequirementText>Temperature-controlled logistics for specialized goods.</RequirementText>
              </div>
              <div>
                <RequirementTitle>Transloading operations</RequirementTitle>
                <RequirementText>Container-to-truck transfer with duty deferral benefits.</RequirementText>
              </div>
            </RequirementsList>
          </HighlightBox>
        </ContentWrapper>
      </GreySection>

      <GoldDivider />

      <GreySection>
        <ContentWrapper>
          <SectionTitle>Investment Returns & Tenant Advantages</SectionTitle>
          
          <ExampleBox>
            <ExampleTitle>ROI Enhancement Through FTZ</ExampleTitle>
            <ExampleText>
              Example: A solar panel assembly operation importing $10M in components annually
            </ExampleText>
            <ExampleText>
              <strong>Without FTZ:</strong> Pays $2.5M in customs duties upfront (25% tariff on certain components)
            </ExampleText>
            <ExampleText>
              <strong>With FTZ:</strong> Defers duties until finished panels enter U.S. commerce, or pays $0 on re-exported panels
            </ExampleText>
            <ExampleText>
              <strong>Cash flow improvement:</strong> $2.5M working capital retained annually
            </ExampleText>
            <ExampleText>
              <strong>Investor benefit:</strong> Higher NOI and property value due to tenant cost savings
            </ExampleText>
          </ExampleBox>

          <SectionTitle>Asia-Pacific Manufacturing Partnerships</SectionTitle>
          <RequirementsList>
            <div>
              <RequirementText>APOZ specifically targets manufacturers from China, ASEAN, Korea, Japan, and India seeking "friend-shoring" alternatives and U.S. market access.</RequirementText>
            </div>
            <div>
              <RequirementText>FTZ status makes APOZ ideal for companies establishing U.S. manufacturing footprints while maintaining Asia-Pacific supply chains.</RequirementText>
            </div>
            <div>
              <RequirementText>The zone supports joint ventures between U.S. and Asia-Pacific firms requiring duty-efficient operations.</RequirementText>
            </div>
            <div>
              <RequirementText>Export-oriented manufacturers serving both U.S. and global markets benefit from the strategic positioning.</RequirementText>
            </div>
            <div>
              <RequirementText>Firms seeking to diversify away from single-country manufacturing risk find APOZ an attractive option.</RequirementText>
            </div>
          </RequirementsList>
        </ContentWrapper>
      </GreySection>

      <GoldDivider />

      <GreySection>
        <ContentWrapper>
          <SectionTitle>Combined QOZ + FTZ Investment Benefits</SectionTitle>
          
          <StyledTable>
            <thead>
              <tr>
                <th>Incentive Structure</th>
                <th>Tax/Duty Benefit</th>
                <th>Impact on Investment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>QOZ (Investor Side)</strong></td>
                <td>Capital gains tax deferral + tax-free growth</td>
                <td>Attracts equity investors with 15-20% IRR boost</td>
              </tr>
              <tr>
                <td><strong>FTZ (Tenant Side)</strong></td>
                <td>Eliminates or defers customs duties</td>
                <td>Attracts import/export tenants, higher rents</td>
              </tr>
              <tr>
                <td><strong>Combined Effect</strong></td>
                <td>Lower overall project costs + higher returns</td>
                <td>Premium property valuations and exits</td>
              </tr>
            </tbody>
          </StyledTable>

          <SectionTitle>Exit Strategies</SectionTitle>
          <RequirementsList>
            <div>
              <RequirementText>Exit pathways include sale to industrial REITs specializing in logistics and manufacturing properties.</RequirementText>
            </div>
            <div>
              <RequirementText>Portfolio securitization of stabilized FTZ assets offers another attractive option.</RequirementText>
            </div>
            <div>
              <RequirementText>Strategic sale to foreign investors seeking U.S. industrial exposure provides international exit opportunities.</RequirementText>
            </div>
            <div>
              <RequirementText>Refinancing after the 10-year QOZ hold period allows investors to realize tax-free appreciation.</RequirementText>
            </div>
          </RequirementsList>

          <SectionTitle>Best Practices for FTZ Investment Success</SectionTitle>
          <RequirementsList>
            <div>
              <RequirementTitle>Early Engagement</RequirementTitle>
              <RequirementText>Bring FTZ specialists and customs brokers into project planning from the outset.</RequirementText>
            </div>
            <div>
              <RequirementTitle>Integrated Incentives</RequirementTitle>
              <RequirementText>Layer FTZ, QOZ, and state/local incentives to maximize ROI.</RequirementText>
            </div>
            <div>
              <RequirementTitle>Digital Inventory Systems</RequirementTitle>
              <RequirementText>Use ERP systems to manage bonded inventory and avoid CBP penalties.</RequirementText>
            </div>
            <div>
              <RequirementTitle>Tenant Education</RequirementTitle>
              <RequirementText>Provide training and legal support to maximize tenant FTZ utilization.</RequirementText>
            </div>
            <div>
              <RequirementTitle>Marketing to Asia-Pacific</RequirementTitle>
              <RequirementText>Highlight duty savings in bilingual investor and tenant materials.</RequirementText>
            </div>
          </RequirementsList>
        </ContentWrapper>
      </GreySection>

      <GoldDivider />
    </>
  );
};

export default IndustryZoneInvestmentSection;
