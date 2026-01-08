import React from "react";
import TextHero from "../../TextHero";
import GoldDivider from "../../ui/GoldDivider";
import { ContentWrapper, GreyContent } from "../../ui/Containers";
import { IntroText, SectionTitle } from "../../ui/Typography";
import { StyledTable } from "../../ui/Table";
import { WhiteSection, GreySection } from "../../ui/Sections";
import { RequirementsList, RequirementTitle, RequirementText } from "../../ui/Requirements";

interface QOFZoneSectionProps {
  onNavigate: (page: string) => void;
}

const QOFZoneSection: React.FC<QOFZoneSectionProps> = () => {
  return (
    <>
      <TextHero
        title="Qualified Opportunity Fund (QOF)"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Master Plan", href: "/master-plan" },
          { label: "QOF" }
        ]}
      />

      <WhiteSection>
        <ContentWrapper>
          <IntroText>
            A Qualified Opportunity Fund (QOF) is an investment vehicle organized as a corporation or partnership for the purpose of investing in Qualified Opportunity Zone property. QOFs must hold at least 90% of their assets in QOZ property to maintain qualified status.
          </IntroText>
        </ContentWrapper>
      </WhiteSection>

      <GoldDivider />

      <GreySection>
        <GreyContent>
          <SectionTitle>QOF Qualification Requirements</SectionTitle>
          <StyledTable>
            <thead>
              <tr>
                <th>Requirement</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>90% Asset Test</strong></td>
                <td>At least 90% of fund assets must be invested in QOZ property</td>
              </tr>
              <tr>
                <td><strong>Self-Certification</strong></td>
                <td>Fund must self-certify to the IRS using Form 8996</td>
              </tr>
              <tr>
                <td><strong>Annual Reporting</strong></td>
                <td>Submit compliance certification annually with federal tax return</td>
              </tr>
              <tr>
                <td><strong>180-Day Investment</strong></td>
                <td>Investors must invest capital gains within 180 days of realization</td>
              </tr>
              <tr>
                <td><strong>Substantial Improvement</strong></td>
                <td>Must improve existing QOZ property by amount equal to purchase price within 30 months</td>
              </tr>
            </tbody>
          </StyledTable>
        </GreyContent>
      </GreySection>

      <GoldDivider />

      <WhiteSection>
        <ContentWrapper>
          <SectionTitle>QOF Formation Process</SectionTitle>
          <RequirementsList>
            <div>
              <RequirementTitle>1. Entity Formation</RequirementTitle>
              <RequirementText>Organize as corporation or partnership for investment purposes</RequirementText>
            </div>
            <div>
              <RequirementTitle>2. Self-Certification</RequirementTitle>
              <RequirementText>File IRS Form 8996 to certify QOF status</RequirementText>
            </div>
            <div>
              <RequirementTitle>3. Acquire QOZ Property</RequirementTitle>
              <RequirementText>Purchase or develop qualifying property within designated zones</RequirementText>
            </div>
            <div>
              <RequirementTitle>4. Maintain Compliance</RequirementTitle>
              <RequirementText>Meet 90% asset test measured semi-annually, file annual certifications</RequirementText>
            </div>
            <div>
              <RequirementTitle>5. Documentation</RequirementTitle>
              <RequirementText>Maintain records of all QOZ property investments and improvements</RequirementText>
            </div>
          </RequirementsList>
        </ContentWrapper>
      </WhiteSection>
    </>
  );
};

export default QOFZoneSection;
