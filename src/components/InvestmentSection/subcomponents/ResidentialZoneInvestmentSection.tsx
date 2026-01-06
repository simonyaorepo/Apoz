import React from "react";
import TextHero from "../../TextHero";
import styled from "styled-components";
import { Section } from "../../ui/Section";
import GoldDivider from "../../ui/GoldDivider";
import {  ContentWrapper,
  IntroText,
  SectionTitle,
  StyledTable,
  TealSection,
  TealBox,
} from "./SharedStyles";

interface ResidentialZoneInvestmentSectionProps {
  onNavigate: (page: string) => void;
}



const TealTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
`;

const BenefitsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  th {
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    font-weight: 600;
  }

  td {
    color: white;
  }
`;

const WhiteText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white;
  margin-bottom: 1rem;
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

const ExampleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
`;

const ExampleItem = styled.li`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "→";
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
    position: absolute;
    left: 0;
  }
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

const HighlightBox = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
`;

const ResidentialZoneInvestmentSection: React.FC<ResidentialZoneInvestmentSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title="Residential Zone Investment Opportunities"
        backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investment", href: "/investment" },
          { label: "Residential Zone" }
        ]}
      />
      
      <Section>
        <ContentWrapper>
          <IntroText>
            APOZ's residential zone combines affordable housing development with powerful tax incentives through Qualified Opportunity Zone (QOZ) and Qualified Opportunity Fund (QOF) structures, plus Low-Income Housing Tax Credit (LIHTC) financing.
          </IntroText>
          <IntroText>
            This creates a unique investment opportunity where capital gains tax benefits meet community impact, delivering both financial returns and social value.
          </IntroText>

          <SectionTitle>Qualified Opportunity Zone (QOZ) Benefits</SectionTitle>
          <IntroText>
            The APOZ residential zone is strategically positioned within a federally designated Qualified Opportunity Zone, offering investors significant federal tax advantages when they invest through a Qualified Opportunity Fund (QOF).
          </IntroText>

          <StyledTable>
            <thead>
              <tr>
                <th>Benefit</th>
                <th>Details</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Capital Gains Deferral</strong></td>
                <td>Pay no federal tax on reinvested gains until Dec 31, 2026</td>
                <td>Up to ~2 years (if invested now)</td>
              </tr>
              <tr>
                <td><strong>Tax-Free Growth</strong></td>
                <td>After 10+ years, pay zero federal capital gains tax on profits from the QOZ investment</td>
                <td>10+ years</td>
              </tr>
              <tr>
                <td><strong>Step-Up in Basis</strong></td>
                <td>Previously reduced taxable gains by up to 15% after 7 years (expired for new investors in 2021)</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </StyledTable>
        </ContentWrapper>
      </Section>

      <TealSection>
        <TealBox>
          <TealTitle>Investment Example: $1M Capital Gain</TealTitle>
          <WhiteText>
            If an investor sells stock for a $1M gain and invests into APOZ residential development via a QOF:
          </WhiteText>
          <BenefitsTable>
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Tax Treatment</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Without QOF</strong></td>
                <td>Pays ~$240K federal capital gains tax (24%)</td>
                <td>$760K to invest</td>
              </tr>
              <tr>
                <td><strong>With QOF Investment</strong></td>
                <td>Tax deferred until 2026; full $1M compounds</td>
                <td>$1M to invest now</td>
              </tr>
              <tr>
                <td><strong>After 10 Years</strong></td>
                <td>If investment grows to $3M</td>
                <td>$2M appreciation = 100% tax-free</td>
              </tr>
            </tbody>
          </BenefitsTable>
          <WhiteText>
            <strong>Net Result:</strong> Investor keeps significantly more profit through tax deferral and tax-free growth.
          </WhiteText>
        </TealBox>
      </TealSection>

      <Section>
        <ContentWrapper>
          <SectionTitle>How Qualified Opportunity Funds (QOFs) Work</SectionTitle>
          <IntroText>
            A QOF is a special investment vehicle created under the 2017 U.S. Tax Cuts and Jobs Act to channel private capital into Qualified Opportunity Zones and unlock major tax incentives for investors.
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
                <td><strong>1. Capital Gain Event</strong></td>
                <td>Investor sells stock, crypto, business, or property and realizes gains</td>
                <td>Investor</td>
              </tr>
              <tr>
                <td><strong>2. Invest into QOF</strong></td>
                <td>Within 180 days, investor contributes gains into a QOF</td>
                <td>Investor + QOF</td>
              </tr>
              <tr>
                <td><strong>3. QOF Deploys Funds</strong></td>
                <td>QOF invests at least 90% of assets into QOZ projects like APOZ</td>
                <td>QOF Manager + Developer</td>
              </tr>
              <tr>
                <td><strong>4. Hold Investment</strong></td>
                <td>Investors hold their QOF shares for 5, 7, or 10+ years to unlock tax breaks</td>
                <td>Investor</td>
              </tr>
              <tr>
                <td><strong>5. Exit & Tax-Free Growth</strong></td>
                <td>After 10+ years, any appreciation on the QOF investment is tax-free</td>
                <td>Investor</td>
              </tr>
            </tbody>
          </StyledTable>

          <HighlightBox>
            <SectionTitle>QOF Requirements</SectionTitle>
            <BenefitsList>
              <BenefitsItem>
                <strong>90% Asset Test:</strong> At least 90% of QOF assets must be in QOZ property or businesses
              </BenefitsItem>
              <BenefitsItem>
                <strong>180-Day Reinvestment Window:</strong> Investors must invest capital gains into the QOF within 180 days of realizing them
              </BenefitsItem>
              <BenefitsItem>
                <strong>Substantial Improvement:</strong> If buying existing property, QOF must double the investment basis within 30 months
              </BenefitsItem>
            </BenefitsList>
          </HighlightBox>
        </ContentWrapper>
      </Section>

      <Section>
        <ContentWrapper>
          <SectionTitle>LIHTC Financing for Affordable Housing</SectionTitle>
          <IntroText>
            The Low-Income Housing Tax Credit (LIHTC) program provides federal tax credits to developers who build or rehabilitate affordable rental housing. APOZ residential projects can layer LIHTC financing with QOZ/QOF incentives.
          </IntroText>

          <BenefitsList>
            <BenefitsItem>
              <strong>Federal Tax Credits:</strong> Dollar-for-dollar reduction in federal tax liability over 10 years
            </BenefitsItem>
            <BenefitsItem>
              <strong>Equity Investment:</strong> LIHTC syndicators provide upfront equity in exchange for tax credits
            </BenefitsItem>
            <BenefitsItem>
              <strong>Affordability Requirements:</strong> Units must remain affordable for 30+ years, ensuring community impact
            </BenefitsItem>
            <BenefitsItem>
              <strong>Combined QOZ + LIHTC:</strong> Maximize capital stack with both federal incentive programs
            </BenefitsItem>
          </BenefitsList>
        </ContentWrapper>
      </Section>

      <Section>
        <ContentWrapper>
          <SectionTitle>Investment Structure & Returns</SectionTitle>
          
          <ExampleBox>
            <ExampleTitle>Target Returns (Illustrative)</ExampleTitle>
            <ExampleList>
              <ExampleItem>8-12% Stabilized Yield on affordable housing portfolio</ExampleItem>
              <ExampleItem>15-20% IRR with QOZ tax benefits factored in</ExampleItem>
              <ExampleItem>Zero federal capital gains tax on exit after 10 years</ExampleItem>
              <ExampleItem>Strong ESG profile attracts institutional investors</ExampleItem>
            </ExampleList>
          </ExampleBox>

          <SectionTitle>Target Investor Profile</SectionTitle>
          <BenefitsList>
            <BenefitsItem>High-net-worth individuals with recent capital gains</BenefitsItem>
            <BenefitsItem>Family offices seeking tax-advantaged real estate investments</BenefitsItem>
            <BenefitsItem>Impact investors focused on affordable housing and community development</BenefitsItem>
            <BenefitsItem>Institutional funds with LIHTC investment mandates</BenefitsItem>
            <BenefitsItem>Asia-Pacific investors seeking U.S. market entry with tax benefits</BenefitsItem>
          </BenefitsList>

          <SectionTitle>Exit Strategies</SectionTitle>
          <BenefitsList>
            <BenefitsItem>REIT conversion and securitization of stabilized assets</BenefitsItem>
            <BenefitsItem>Portfolio sale to institutional affordable housing funds</BenefitsItem>
            <BenefitsItem>Refinancing after 10-year hold for tax-free gains</BenefitsItem>
            <BenefitsItem>Strategic sale to public housing authorities or non-profits</BenefitsItem>
          </BenefitsList>
        </ContentWrapper>
      </Section>

      <GoldDivider />
    </>
  );
};

export default ResidentialZoneInvestmentSection;

