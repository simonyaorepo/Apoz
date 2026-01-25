import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import GoldDivider from "../../ui/GoldDivider";
import styled from "styled-components";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { TealText } from "../../ui/TealComponents";
import { Container } from "../../ui/Containers";
import { ContentGrid, GreyContentGrid } from "../../ui/Grids";
import { TextContent, SectionTitle, SubsectionTitle } from "../../ui/Typography";
import { IllustrationBox, ImageBox } from "../../ui/Media";
import { StyledTable } from "../../ui/Table";

const IntroTextContent = styled(TextContent)`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const IndustryCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.goldAccent};
  
  h4 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: 0;
  }
`;

interface InternationalHubSectionProps {
  onNavigate: (page: string) => void;
}

const InternationalHubSection: React.FC<InternationalHubSectionProps> = ({ onNavigate: _onNavigate }) => {
  const { t } = useTranslation(['masterPlan', 'common']);
  
  return (
    <>
      <TextHero
        title={t('internationalHub.title')}
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.masterPlan'), href: "/master-plan" },
          { label: t('internationalHub.title') }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <IntroTextContent>
            <p>{t('internationalHub.intro1')}</p>
            <p>{t('internationalHub.intro2')}</p>
          </IntroTextContent>
          <ContentGrid>
            <TextContent>
              <SubsectionTitle>{t('internationalHub.targetPartners_title', 'Target Partners')}</SubsectionTitle>
              <p>
                {t('internationalHub.targetPartners_description')}
              </p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Globe/World connectivity */}
                <circle cx="150" cy="200" r="60" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <ellipse cx="150" cy="200" rx="60" ry="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <line x1="150" y1="140" x2="150" y2="260" stroke="#0a3a3f" strokeWidth="1.5"/>
                <path d="M120 170 Q150 185 180 170" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <path d="M120 230 Q150 215 180 230" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Connection arrows */}
                <line x1="210" y1="200" x2="280" y2="200" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M265 190 L280 200 L265 210" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                
                {/* Trade/Hub center */}
                <rect x="300" y="160" width="120" height="80" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <text x="360" y="205" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0a3a3f">HUB</text>
                
                {/* Outgoing connections */}
                <line x1="420" y1="180" x2="480" y2="150" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M470 145 L480 150 L470 157" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                
                <line x1="420" y1="200" x2="480" y2="200" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M465 190 L480 200 L465 210" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                
                <line x1="420" y1="220" x2="480" y2="250" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M470 243 L480 250 L470 255" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                
                {/* Destination nodes */}
                <rect x="490" y="130" width="80" height="40" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="490" y="180" width="80" height="40" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="490" y="230" width="80" height="40" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <TealText>
            {t('internationalHub.teal_description')}
          </TealText>
        </TealBox>
      </TealSection>
      
      <GreySection $reducedTopPadding>
        <Container>
          <TextContent>
            <SectionTitle>{t('internationalHub.core_functions_title')}</SectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>{t('internationalHub.function_header', 'Function')}</th>
                  <th>{t('internationalHub.description_header', 'Description')}</th>
                  <th>{t('internationalHub.impact_header', 'Impact')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label={t('internationalHub.function_header', 'Function')}><strong>{t('internationalHub.coreFunction1_function')}</strong></td>
                  <td data-label={t('internationalHub.description_header', 'Description')}>{t('internationalHub.coreFunction1_description')}</td>
                  <td data-label={t('internationalHub.impact_header', 'Impact')}>{t('internationalHub.coreFunction1_impact')}</td>
                </tr>
                <tr>
                  <td data-label={t('internationalHub.function_header', 'Function')}><strong>{t('internationalHub.coreFunction2_function')}</strong></td>
                  <td data-label={t('internationalHub.description_header', 'Description')}>{t('internationalHub.coreFunction2_description')}</td>
                  <td data-label={t('internationalHub.impact_header', 'Impact')}>{t('internationalHub.coreFunction2_impact')}</td>
                </tr>
                <tr>
                  <td data-label={t('internationalHub.function_header', 'Function')}><strong>{t('internationalHub.coreFunction3_function')}</strong></td>
                  <td data-label={t('internationalHub.description_header', 'Description')}>{t('internationalHub.coreFunction3_description')}</td>
                  <td data-label={t('internationalHub.impact_header', 'Impact')}>{t('internationalHub.coreFunction3_impact')}</td>
                </tr>
                <tr>
                  <td data-label={t('internationalHub.function_header', 'Function')}><strong>{t('internationalHub.coreFunction4_function')}</strong></td>
                  <td data-label={t('internationalHub.description_header', 'Description')}>{t('internationalHub.coreFunction4_description')}</td>
                  <td data-label={t('internationalHub.impact_header', 'Impact')}>{t('internationalHub.coreFunction4_impact')}</td>
                </tr>
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
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Strategic advantages"
              />
            </ImageBox>
            <TextContent>
              <SubsectionTitle>{t('internationalHub.advantages_heading')}</SubsectionTitle>
              <p dangerouslySetInnerHTML={{ __html: t('internationalHub.advantage1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('internationalHub.advantage2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('internationalHub.advantage3') }} />
              <p dangerouslySetInnerHTML={{ __html: t('internationalHub.advantage4') }} />
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>

      <WhiteSection>
        <Container>
          <TextContent>
            <SubsectionTitle>{t('internationalHub.industries_heading')}</SubsectionTitle>
            <IndustryGrid>
              <IndustryCard>
                <h4>{t('internationalHub.industry1_name')}</h4>
                <p>{t('internationalHub.industry1_description')}</p>
              </IndustryCard>
              <IndustryCard>
                <h4>{t('internationalHub.industry2_name')}</h4>
                <p>{t('internationalHub.industry2_description')}</p>
              </IndustryCard>
              <IndustryCard>
                <h4>{t('internationalHub.industry3_name')}</h4>
                <p>{t('internationalHub.industry3_description')}</p>
              </IndustryCard>
              <IndustryCard>
                <h4>{t('internationalHub.industry4_name')}</h4>
                <p>{t('internationalHub.industry4_description')}</p>
              </IndustryCard>
            </IndustryGrid>
          </TextContent>
        </Container>
      </WhiteSection>

      <GoldDivider />

      <GreySection>
        <Container>
          <TextContent>
            <SubsectionTitle>{t('sustainability.title')}</SubsectionTitle>
            <p>{t('sustainability.intro')}</p>
            <p>{t('sustainability.leed_description')}</p>
            
            <IndustryGrid>
              <IndustryCard>
                <h4>{t('sustainability.leed_title')}</h4>
                <p>{t('sustainability.leed_features')}</p>
              </IndustryCard>
              <IndustryCard>
                <h4>{t('sustainability.stormwater_title')}</h4>
                <p>{t('sustainability.stormwater_description')}</p>
                <p><strong>{t('sustainability.stormwater_benefit')}</strong></p>
              </IndustryCard>
              <IndustryCard>
                <h4>{t('sustainability.renewable_title')}</h4>
                <p>{t('sustainability.renewable_description')}</p>
                <p>{t('sustainability.renewable_target')}</p>
                <p><strong>{t('sustainability.renewable_benefit')}</strong></p>
              </IndustryCard>
              <IndustryCard>
                <h4>{t('sustainability.netZero_title')}</h4>
                <p>{t('sustainability.netZero_description')}</p>
                <p><strong>{t('sustainability.netZero_pathway')}</strong></p>
              </IndustryCard>
              <IndustryCard>
                <h4>{t('sustainability.waste_title')}</h4>
                <p>{t('sustainability.waste_description')}</p>
                <p><strong>{t('sustainability.waste_target')}</strong></p>
              </IndustryCard>
              <IndustryCard>
                <h4>{t('sustainability.green_title')}</h4>
                <p>{t('sustainability.green_description')}</p>
                <p><strong>{t('sustainability.green_features')}</strong></p>
              </IndustryCard>
              <IndustryCard>
                <h4>{t('sustainability.esg_title')}</h4>
                <p>{t('sustainability.esg_description')}</p>
                <p><strong>{t('sustainability.esg_benefit')}</strong></p>
              </IndustryCard>
            </IndustryGrid>
          </TextContent>
        </Container>
      </GreySection>

      <WhiteSection>
        <Container>
          <TextContent>
            <SubsectionTitle>{t('acreageBreakdown.title')}</SubsectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>Zone</th>
                  <th>Acres</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Zone">{t('acreageBreakdown.industrial_title')}</td>
                  <td data-label="Acres"><strong>{t('acreageBreakdown.industrial_acres')}</strong></td>
                  <td data-label="Description">{t('acreageBreakdown.industrial_description')}</td>
                </tr>
                <tr>
                  <td data-label="Zone">{t('acreageBreakdown.logistics_title')}</td>
                  <td data-label="Acres"><strong>{t('acreageBreakdown.logistics_acres')}</strong></td>
                  <td data-label="Description">{t('acreageBreakdown.logistics_description')}</td>
                </tr>
                <tr>
                  <td data-label="Zone">{t('acreageBreakdown.support_title')}</td>
                  <td data-label="Acres"><strong>{t('acreageBreakdown.support_acres')}</strong></td>
                  <td data-label="Description">{t('acreageBreakdown.support_description')}</td>
                </tr>
                <tr>
                  <td data-label="Zone">{t('acreageBreakdown.residential_title')}</td>
                  <td data-label="Acres"><strong>{t('acreageBreakdown.residential_acres')}</strong></td>
                  <td data-label="Description">{t('acreageBreakdown.residential_description')}</td>
                </tr>
                <tr>
                  <td data-label="Zone">{t('acreageBreakdown.commercial_title')}</td>
                  <td data-label="Acres"><strong>{t('acreageBreakdown.commercial_acres')}</strong></td>
                  <td data-label="Description">{t('acreageBreakdown.commercial_description')}</td>
                </tr>
                <tr>
                  <td data-label="Zone">{t('acreageBreakdown.exhibition_title')}</td>
                  <td data-label="Acres"><strong>{t('acreageBreakdown.exhibition_acres')}</strong></td>
                  <td data-label="Description">{t('acreageBreakdown.exhibition_description')}</td>
                </tr>
              </tbody>
            </StyledTable>
            <p style={{ fontStyle: 'italic', marginTop: '2rem' }}>{t('acreageBreakdown.flexibility_note')}</p>
          </TextContent>
        </Container>
      </WhiteSection>
    </>
  );
};

export default InternationalHubSection;
