import React from "react";
import TextHero from "../../TextHero";
import { Section } from "../../ui/Section";
import GoldDivider from "../../ui/GoldDivider";
import { ContentWrapper, GreyContent } from "../../ui/Containers";
import { IntroText, SectionTitle } from "../../ui/Typography";
import { StyledTable } from "../../ui/Table";
import { GreySection } from "../../ui/Sections";
import { RequirementsList, RequirementTitle, RequirementText } from "../../ui/Requirements";
import { GreyContentGrid } from "../../ui/Grids";
import { ImageBox } from "../../ui/Media";
import { Container } from "../../ui/Containers";

interface FTZZoneSectionProps {
  onNavigate: (page: string) => void;
}

const FTZZoneSection: React.FC<FTZZoneSectionProps> = () => {
  return (
    <>
      <TextHero
        title="Foreign Trade Zone (FTZ-171)"
        backgroundImage="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Master Plan", href: "/master-plan" },
          { label: "FTZ-171" }
        ]}
      />

      <Section>
        <ContentWrapper>
          <IntroText>
            Foreign Trade Zone 171 (FTZ-171) is a designated U.S. Customs and Border Protection territory that allows businesses to defer, reduce, or eliminate customs duties on foreign goods. The APOZ property operates under FTZ-171 activation, enabling international trade advantages for industrial tenants.
          </IntroText>
        </ContentWrapper>
      </Section>

      <GoldDivider />

      <GreySection>
        <GreyContent>
          <SectionTitle>FTZ Activation Process</SectionTitle>
          <StyledTable>
            <thead>
              <tr>
                <th>Step</th>
                <th>Process</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Site Application</strong></td>
                <td>Submit FTZ site activation application to grantee (Guam Economic Development Authority)</td>
              </tr>
              <tr>
                <td><strong>2. CBP Review</strong></td>
                <td>U.S. Customs and Border Protection reviews application and conducts site inspection</td>
              </tr>
              <tr>
                <td><strong>3. Approval & Bonding</strong></td>
                <td>CBP approves activation; operator obtains FTZ activity bond</td>
              </tr>
              <tr>
                <td><strong>4. Inventory System</strong></td>
                <td>Implement CBP-approved inventory tracking system (RFID/digital)</td>
              </tr>
              <tr>
                <td><strong>5. Operations Start</strong></td>
                <td>Begin FTZ operations under CBP supervision with admitted foreign merchandise</td>
              </tr>
              <tr>
                <td><strong>6. Annual Reporting</strong></td>
                <td>Submit annual reports to CBP and grantee on FTZ activities</td>
              </tr>
            </tbody>
          </StyledTable>
        </GreyContent>
      </GreySection>

      <GoldDivider />

      <GreySection>
        <Container>
          <GreyContentGrid style={{ gridTemplateColumns: '1.5fr 1.25fr', alignItems: 'center' }}>
            <div>
              <SectionTitle>FTZ Compliance Requirements</SectionTitle>
              <RequirementsList>
                <div>
                  <RequirementTitle>Security & Fencing</RequirementTitle>
                  <RequirementText>Secure perimeter with controlled access points monitored by CBP</RequirementText>
                </div>
                <div>
                  <RequirementTitle>Inventory Tracking</RequirementTitle>
                  <RequirementText>Real-time digital system tracking all admitted, manipulated, and removed merchandise</RequirementText>
                </div>
                <div>
                  <RequirementTitle>Record Keeping</RequirementTitle>
                  <RequirementText>Maintain detailed records of all FTZ transactions for CBP audit (5 years minimum)</RequirementText>
                </div>
                <div>
                  <RequirementTitle>CBP Access</RequirementTitle>
                  <RequirementText>Provide 24/7 CBP access to FTZ facilities for inspection and supervision</RequirementText>
                </div>
                <div>
                  <RequirementTitle>Prohibited Activities</RequirementTitle>
                  <RequirementText>No retail trade, domestic merchandise storage (except for export), or activities violating CBP regulations</RequirementText>
                </div>
                <div>
                  <RequirementTitle>Annual Certification</RequirementTitle>
                  <RequirementText>Submit annual FTZ activity reports and pay grantee fees</RequirementText>
                </div>
              </RequirementsList>
            </div>
            <ImageBox style={{ maxWidth: '100%', marginLeft: 'auto' }}>
              <img 
                src="/assets/images/masterPlan/FTZ/1.png" 
                alt="FTZ Compliance"
                style={{ objectFit: 'contain' }}
              />
            </ImageBox>
          </GreyContentGrid>
        </Container>
      </GreySection>

      <GoldDivider />

      <GreySection>
        <GreyContent>
          <SectionTitle>Permitted FTZ Activities</SectionTitle>
          <StyledTable>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Storage</strong></td>
                <td>Indefinite storage of foreign merchandise without duty payment</td>
              </tr>
              <tr>
                <td><strong>Manufacturing</strong></td>
                <td>Processing, assembly, manufacturing using foreign and domestic components</td>
              </tr>
              <tr>
                <td><strong>Exhibition</strong></td>
                <td>Display of foreign merchandise for trade shows or demonstrations</td>
              </tr>
              <tr>
                <td><strong>Sampling & Testing</strong></td>
                <td>Product testing, quality control, and sample distribution</td>
              </tr>
              <tr>
                <td><strong>Destruction</strong></td>
                <td>Destruction of defective or obsolete merchandise without duty</td>
              </tr>
              <tr>
                <td><strong>Re-Export</strong></td>
                <td>Export of foreign merchandise to third countries duty-free</td>
              </tr>
            </tbody>
          </StyledTable>
        </GreyContent>
      </GreySection>
    </>
  );
};

export default FTZZoneSection;
