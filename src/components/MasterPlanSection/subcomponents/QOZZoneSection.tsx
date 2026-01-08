import React from "react";
import TextHero from "../../TextHero";
import { Section } from "../../ui/Section";
import GoldDivider from "../../ui/GoldDivider";
import { ContentWrapper, GreyContent } from "../../ui/Containers";
import { IntroText, SectionTitle } from "../../ui/Typography";
import { StyledTable } from "../../ui/Table";
import { GreySection } from "../../ui/Sections";
import { RequirementsList, RequirementTitle, RequirementText } from "../../ui/Requirements";

interface QOZZoneSectionProps {
  onNavigate: (page: string) => void;
}

const QOZZoneSection: React.FC<QOZZoneSectionProps> = () => {
  return (
    <>
      <TextHero
        title="Qualified Opportunity Zone (QOZ)"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Master Plan", href: "/master-plan" },
          { label: "QOZ" }
        ]}
      />

      <Section>
        <ContentWrapper>
          <IntroText>
            Qualified Opportunity Zones (QOZs) are economically distressed census tracts designated by the U.S. Treasury to incentivize long-term investment through tax benefits. The APOZ property is located within a federally certified QOZ, making it eligible for significant tax advantages when invested through a Qualified Opportunity Fund.
          </IntroText>
        </ContentWrapper>
      </Section>

      <GoldDivider />

      <GreySection>
        <GreyContent>
          <SectionTitle>QOZ Designation Criteria</SectionTitle>
          <StyledTable>
            <thead>
              <tr>
                <th>Criterion</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Census Tract Poverty Rate</strong></td>
                <td>Poverty rate ≥20% or median family income ≤80% of area median</td>
              </tr>
              <tr>
                <td><strong>Adjacent Tracts</strong></td>
                <td>Low-income tracts adjacent to qualified tracts may be designated</td>
              </tr>
              <tr>
                <td><strong>Federal Certification</strong></td>
                <td>Nominated by states/territories, certified by U.S. Treasury</td>
              </tr>
              <tr>
                <td><strong>Designation Period</strong></td>
                <td>Remains QOZ designation through December 31, 2028 (or later)</td>
              </tr>
            </tbody>
          </StyledTable>
        </GreyContent>
      </GreySection>

      <GoldDivider />

      <Section>
        <ContentWrapper>
          <SectionTitle>APOZ QOZ Compliance Requirements</SectionTitle>
          <RequirementsList>
            <div>
              <RequirementTitle>Property Location</RequirementTitle>
              <RequirementText>All development must occur within the designated QOZ census tract boundaries</RequirementText>
            </div>
            <div>
              <RequirementTitle>Substantial Improvement</RequirementTitle>
              <RequirementText>Acquired property must be substantially improved (investment ≥ purchase price) within 30 months</RequirementText>
            </div>
            <div>
              <RequirementTitle>Original Use or Rehabilitation</RequirementTitle>
              <RequirementText>Property must be new construction or substantially rehabilitated existing property</RequirementText>
            </div>
            <div>
              <RequirementTitle>Trade or Business Use</RequirementTitle>
              <RequirementText>Property must be used in active trade or business (not investment holding)</RequirementText>
            </div>
            <div>
              <RequirementTitle>Documentation</RequirementTitle>
              <RequirementText>Maintain records demonstrating QOZ property qualification and ongoing use</RequirementText>
            </div>
          </RequirementsList>
        </ContentWrapper>
      </Section>
    </>
  );
};

export default QOZZoneSection;
