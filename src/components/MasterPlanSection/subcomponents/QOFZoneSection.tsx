import React from "react";
import TextHero from "../../TextHero";
import { Section } from "../../ui/Section";
import GoldDivider from "../../ui/GoldDivider";
import {
  ContentWrapper,
  IntroText,
  SectionTitle,
  StyledTable,
  GreySection,
  GreyContent,
} from "./SharedStyles";

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

      <Section>
        <ContentWrapper>
          <IntroText>
            A Qualified Opportunity Fund (QOF) is an investment vehicle organized as a corporation or partnership for the purpose of investing in Qualified Opportunity Zone property. QOFs must hold at least 90% of their assets in QOZ property to maintain qualified status.
          </IntroText>
        </ContentWrapper>
      </Section>

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

      <Section>
        <ContentWrapper>
          <SectionTitle>QOF Formation Process</SectionTitle>
          <IntroText>
            <strong>1. Entity Formation:</strong> Organize as corporation or partnership for investment purposes
          </IntroText>
          <IntroText>
            <strong>2. Self-Certification:</strong> File IRS Form 8996 to certify QOF status
          </IntroText>
          <IntroText>
            <strong>3. Acquire QOZ Property:</strong> Purchase or develop qualifying property within designated zones
          </IntroText>
          <IntroText>
            <strong>4. Maintain Compliance:</strong> Meet 90% asset test measured semi-annually, file annual certifications
          </IntroText>
          <IntroText>
            <strong>5. Documentation:</strong> Maintain records of all QOZ property investments and improvements
          </IntroText>
        </ContentWrapper>
      </Section>
    </>
  );
};

export default QOFZoneSection;
