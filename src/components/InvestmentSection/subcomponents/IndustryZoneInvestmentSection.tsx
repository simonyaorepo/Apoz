import React from "react";
import TextHero from "../../TextHero";
import styled from "styled-components";
import { Section } from "../../ui/Section";
import GoldDivider from "../../ui/GoldDivider";
import {
  ContentWrapper,
  IntroText,
  SectionTitle,
  StyledTable,
  TealSection,
  TealBox,
} from "./SharedStyles";

interface IndustryZoneInvestmentSectionProps {
  onNavigate: (page: string) => void;
}



const TealTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const BenefitsItem = styled.li`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "•";
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
  }
`;

const WhiteBenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const WhiteBenefitsItem = styled.li`
  font-size: 1.125rem;
  line-height: 1.8;
  color: white;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "•";
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
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
      
      <Section>
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
      </Section>

      <TealSection>
        <TealBox>
          <TealTitle>Key FTZ Benefits for Investors & Tenants</TealTitle>
          <WhiteBenefitsList>
            <WhiteBenefitsItem>
              <strong>Duty Deferral:</strong> Pay customs duties only when products enter the U.S. market, improving cash flow
            </WhiteBenefitsItem>
            <WhiteBenefitsItem>
              <strong>Duty Elimination:</strong> No duties on re-exported goods, ideal for global supply chains
            </WhiteBenefitsItem>
            <WhiteBenefitsItem>
              <strong>Inverted Tariffs:</strong> If components have higher duties than finished products, pay the lower finished-product duty rate
            </WhiteBenefitsItem>
            <WhiteBenefitsItem>
              <strong>Cash Flow Improvement:</strong> Lower upfront costs improve working capital and investor ROI
            </WhiteBenefitsItem>
            <WhiteBenefitsItem>
              <strong>QOZ + FTZ Synergy:</strong> Combine capital gains tax deferral with customs savings for maximum returns
            </WhiteBenefitsItem>
          </WhiteBenefitsList>
        </TealBox>
      </TealSection>

      <Section>
        <ContentWrapper>
          <SectionTitle>Target Industries & Investment Opportunities</SectionTitle>
          
          <HighlightBox>
            <SectionTitle>Renewable Energy & Clean Tech</SectionTitle>
            <BenefitsList>
              <BenefitsItem><strong>Solar panel manufacturing and assembly</strong> - Import components duty-free, assemble in APOZ</BenefitsItem>
              <BenefitsItem><strong>EV battery production</strong> - Leverage FTZ for cost-effective battery cell imports</BenefitsItem>
              <BenefitsItem><strong>Hydrogen fuel cell manufacturing</strong> - Process components for domestic and export markets</BenefitsItem>
              <BenefitsItem><strong>Energy storage systems</strong> - Assembly and distribution hub for North America</BenefitsItem>
            </BenefitsList>
          </HighlightBox>

          <HighlightBox>
            <SectionTitle>Advanced Manufacturing</SectionTitle>
            <BenefitsList>
              <BenefitsItem><strong>Electronics & semiconductors</strong> - Assembly operations with duty advantages</BenefitsItem>
              <BenefitsItem><strong>Smart manufacturing & IoT</strong> - Robotics and automation systems production</BenefitsItem>
              <BenefitsItem><strong>Consumer goods</strong> - Final assembly and packaging for U.S. distribution</BenefitsItem>
              <BenefitsItem><strong>Medical devices</strong> - Manufacturing with regulatory compliance support</BenefitsItem>
            </BenefitsList>
          </HighlightBox>

          <HighlightBox>
            <SectionTitle>Logistics & E-Commerce</SectionTitle>
            <BenefitsList>
              <BenefitsItem><strong>Cross-border fulfillment centers</strong> - Bonded warehousing for Asia-Pacific goods</BenefitsItem>
              <BenefitsItem><strong>Last-mile distribution hubs</strong> - Strategic Houston metro access</BenefitsItem>
              <BenefitsItem><strong>Cold storage facilities</strong> - Temperature-controlled logistics for specialized goods</BenefitsItem>
              <BenefitsItem><strong>Transloading operations</strong> - Container-to-truck transfer with duty deferral</BenefitsItem>
            </BenefitsList>
          </HighlightBox>
        </ContentWrapper>
      </Section>

      <Section>
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
          <IntroText>
            APOZ specifically targets manufacturers from China, ASEAN, Korea, Japan, and India seeking "friend-shoring" alternatives and U.S. market access. FTZ status makes APOZ ideal for:
          </IntroText>

          <BenefitsList>
            <BenefitsItem>Companies establishing U.S. manufacturing footprint while maintaining Asia-Pacific supply chains</BenefitsItem>
            <BenefitsItem>Joint ventures between U.S. and Asia-Pacific firms requiring duty-efficient operations</BenefitsItem>
            <BenefitsItem>Export-oriented manufacturers serving both U.S. and global markets</BenefitsItem>
            <BenefitsItem>Firms seeking to diversify away from single-country manufacturing risk</BenefitsItem>
          </BenefitsList>
        </ContentWrapper>
      </Section>

      <Section>
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
          <BenefitsList>
            <BenefitsItem>Sale to industrial REITs specializing in logistics and manufacturing properties</BenefitsItem>
            <BenefitsItem>Portfolio securitization of stabilized FTZ assets</BenefitsItem>
            <BenefitsItem>Strategic sale to foreign investors seeking U.S. industrial exposure</BenefitsItem>
            <BenefitsItem>Refinancing after 10-year QOZ hold for tax-free appreciation</BenefitsItem>
          </BenefitsList>

          <SectionTitle>Best Practices for FTZ Investment Success</SectionTitle>
          <BenefitsList>
            <BenefitsItem><strong>Early Engagement:</strong> Bring FTZ specialists and customs brokers into project planning</BenefitsItem>
            <BenefitsItem><strong>Integrated Incentives:</strong> Layer FTZ + QOZ + state/local incentives to maximize ROI</BenefitsItem>
            <BenefitsItem><strong>Digital Inventory Systems:</strong> Use ERP systems to manage bonded inventory and avoid CBP penalties</BenefitsItem>
            <BenefitsItem><strong>Tenant Education:</strong> Provide training and legal support to maximize tenant FTZ utilization</BenefitsItem>
            <BenefitsItem><strong>Marketing to Asia-Pacific:</strong> Highlight duty savings in bilingual investor/tenant materials</BenefitsItem>
          </BenefitsList>
        </ContentWrapper>
      </Section>

      <GoldDivider />
    </>
  );
};

export default IndustryZoneInvestmentSection;
