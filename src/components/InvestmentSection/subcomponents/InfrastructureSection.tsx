import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import styled from "styled-components";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { TealText } from "../../ui/TealComponents";
import { Container } from "../../ui/Containers";
import { ContentGrid, GreyContentGrid } from "../../ui/Grids";
import { TextContent, SubsectionTitle, SectionTitle } from "../../ui/Typography";
import { IllustrationBox, ImageBox } from "../../ui/Media";
import { RequirementsList, RequirementTitle, RequirementText } from "../../ui/Requirements";
import { StyledTable } from "../../ui/Table";
import GoldDivider from "../../ui/GoldDivider";

const TimelineCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.goldAccent};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  h4 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  .scope {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.foreground};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  
  .milestones {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.teal};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

interface InfrastructureSectionProps {
  onNavigate: (page: string) => void;
}

const InfrastructureSection: React.FC<InfrastructureSectionProps> = ({ onNavigate: _onNavigate }) => {
  const { t } = useTranslation(['investment', 'common']);
  const { t: tCommon } = useTranslation('common');
  
  const scopeItems = [
    { category: t('infrastructure.scope_transportation_category'), components: t('infrastructure.scope_transportation_components'), purpose: t('infrastructure.scope_transportation_purpose') },
    { category: t('infrastructure.scope_utilities_category'), components: t('infrastructure.scope_utilities_components'), purpose: t('infrastructure.scope_utilities_purpose') },
    { category: t('infrastructure.scope_digital_category'), components: t('infrastructure.scope_digital_components'), purpose: t('infrastructure.scope_digital_purpose') },
    { category: t('infrastructure.scope_ftz_category'), components: t('infrastructure.scope_ftz_components'), purpose: t('infrastructure.scope_ftz_purpose') },
    { category: t('infrastructure.scope_residential_category'), components: t('infrastructure.scope_residential_components'), purpose: t('infrastructure.scope_residential_purpose') },
    { category: t('infrastructure.scope_environmental_category'), components: t('infrastructure.scope_environmental_components'), purpose: t('infrastructure.scope_environmental_purpose') }
  ];
  
  const timeline = [
    { phase: t('infrastructure.timeline_phase1_phase'), scope: t('infrastructure.timeline_phase1_scope'), milestones: t('infrastructure.timeline_phase1_milestones') },
    { phase: t('infrastructure.timeline_phase2_phase'), scope: t('infrastructure.timeline_phase2_scope'), milestones: t('infrastructure.timeline_phase2_milestones') }
  ];
  
  return (
    <>
      <TextHero
        title={t('infrastructure.title')}
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: tCommon('breadcrumbs.home'), href: '/' },
          { label: t('hero.title'), href: '/investment' },
          { label: t('infrastructure.title') }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              <p>{t('infrastructure.intro1')}</p>
              <p>{t('infrastructure.intro2')}</p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Road/Transportation */}
                <rect x="60" y="250" width="150" height="60" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="80" y1="280" x2="190" y2="280" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="100" y1="273" x2="120" y2="273" stroke="#0a3a3f" strokeWidth="1.5"/>
                <line x1="150" y1="273" x2="170" y2="273" stroke="#0a3a3f" strokeWidth="1.5"/>
                
                {/* Power/Utilities */}
                <line x1="240" y1="200" x2="240" y2="310" stroke="#0a3a3f" strokeWidth="3"/>
                <line x1="230" y1="220" x2="250" y2="220" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="230" y1="250" x2="250" y2="250" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="230" y1="280" x2="250" y2="280" stroke="#0a3a3f" strokeWidth="2"/>
                <circle cx="240" cy="190" r="15" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                
                {/* Digital/Connectivity */}
                <circle cx="340" cy="240" r="40" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="340" cy="240" r="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <line x1="315" y1="215" x2="305" y2="205" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="365" y1="215" x2="375" y2="205" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="365" y1="265" x2="375" y2="275" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Building/Facilities */}
                <rect x="430" y="220" width="80" height="90" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="445" y="240" width="18" height="22" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="475" y="240" width="18" height="22" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="445" y="275" width="18" height="22" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="475" y="275" width="18" height="22" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Environmental/Green */}
                <circle cx="560" cy="265" r="25" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <path d="M 550 255 Q 560 245 570 255" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="560" y1="255" x2="555" y2="260" stroke="#0a3a3f" strokeWidth="1.5"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <TealText>
            {t('infrastructure.tealIntro')}
          </TealText>
        </TealBox>
      </TealSection>
      
      <GreySection>
        <Container>
          <TextContent>
            <SectionTitle>{t('infrastructure.scope_title')}</SectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>{t('infrastructure.scope_category_header')}</th>
                  <th>{t('infrastructure.scope_components_header')}</th>
                  <th>{t('infrastructure.scope_purpose_header')}</th>
                </tr>
              </thead>
              <tbody>
                {scopeItems.map((item, idx) => (
                  <tr key={idx}>
                    <td data-label={t('infrastructure.scope_category_header')}><strong>{item.category}</strong></td>
                    <td data-label={t('infrastructure.scope_components_header')}>{item.components}</td>
                    <td data-label={t('infrastructure.scope_purpose_header')}>{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TextContent>
        </Container>
      </GreySection>

      <GoldDivider />

      <GreySection>
        <Container>
          <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Construction and development"
              />
            </ImageBox>
            <TextContent>
              <SubsectionTitle>{t('infrastructure.timeline_title')}</SubsectionTitle>
              {timeline.map((item, idx) => (
                <TimelineCard key={idx}>
                  <h4>{item.phase}</h4>
                  <p className="scope"><strong>{t('infrastructure.timeline_scope_header')}:</strong> {item.scope}</p>
                  <p className="milestones"><strong>{t('infrastructure.timeline_milestones_header')}:</strong> {item.milestones}</p>
                </TimelineCard>
              ))}
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>

      <WhiteSection>
        <Container>
          <TextContent>
            <SubsectionTitle>{t('infrastructure.funding_title')}</SubsectionTitle>
            <RequirementsList>
              <div>
                <RequirementTitle>{t('labels.privateCapitalQOF')}</RequirementTitle>
                <RequirementText>{t('infrastructure.funding_source1')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('labels.infrastructureFinancing')}</RequirementTitle>
                <RequirementText>{t('infrastructure.funding_source2')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('labels.tenantParticipation')}</RequirementTitle>
                <RequirementText>{t('infrastructure.funding_source3')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('labels.publicPrivateGrants')}</RequirementTitle>
                <RequirementText>{t('infrastructure.funding_source4')}</RequirementText>
              </div>
            </RequirementsList>
          </TextContent>
        </Container>
      </WhiteSection>
    </>
  );
};

export default InfrastructureSection;
