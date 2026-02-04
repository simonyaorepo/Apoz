import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import { WhiteSection, GreySection } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { ContentGrid, GreyContentGrid } from "../../ui/Grids";
import { IllustrationBox, ImageBox } from "../../ui/Media";
import { TextContent, TealSection, TealBox } from "./SharedStyles";

interface WhoWeAreSectionProps {
  onNavigate: (page: string) => void;
}

const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({ onNavigate: _onNavigate }) => {
  const { t } = useTranslation('home');
  const { t: tCommon } = useTranslation('common');
  
  return (
    <>
      <TextHero
        title={t('whoWeAre.title')}
        backgroundImage="/assets/images/home/whoWeAre/hero.jpeg"
        breadcrumbs={[
          { label: tCommon('breadcrumbs.home'), href: '/' },
          { label: t('whoWeAre.title') }
        ]}
      />
      
      <WhiteSection>
        <ContentGrid>
            <TextContent>
              <p>{t('whoWeAre.intro1')}</p>
              <p>{t('whoWeAre.intro2')}</p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Large Industrial Building 1 */}
                <rect x="80" y="190" width="130" height="120" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="95" y="210" width="25" height="30" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="130" y="210" width="25" height="30" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="165" y="210" width="25" height="30" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="95" y="250" width="25" height="30" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="130" y="250" width="25" height="30" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="165" y="250" width="25" height="30" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Large Industrial Building 2 */}
                <rect x="230" y="170" width="140" height="140" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="245" y="190" width="28" height="35" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="285" y="190" width="28" height="35" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="325" y="190" width="28" height="35" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="245" y="240" width="28" height="35" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="285" y="240" width="28" height="35" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="325" y="240" width="28" height="35" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* FTZ Sign */}
                <rect x="390" y="200" width="85" height="60" rx="4" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <text x="432" y="235" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#0a3a3f">FTZ</text>
                
                {/* Location Pin */}
                <circle cx="515" cy="180" r="35" stroke="#0a3a3f" strokeWidth="2.5" fill="none"/>
                <circle cx="515" cy="180" r="12" fill="#0a3a3f"/>
                <path d="M 515 215 L 515 250" stroke="#0a3a3f" strokeWidth="2.5"/>
                
                {/* Highway/Road */}
                <line x1="30" y1="280" x2="380" y2="280" stroke="#0a3a3f" strokeWidth="3"/>
                <line x1="30" y1="287" x2="380" y2="287" stroke="#0a3a3f" strokeWidth="3"/>
                <line x1="100" y1="273" x2="120" y2="273" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="160" y1="273" x2="180" y2="273" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="220" y1="273" x2="240" y2="273" stroke="#0a3a3f" strokeWidth="2"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <p>{t('whoWeAre.highlight')}</p>
        </TealBox>
      </TealSection>

      <GreySection>
        <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Strategic location"
              />
            </ImageBox>
            <TextContent>
              <p>{t('whoWeAre.location_description')}</p>
              <p>{t('whoWeAre.location_details')}</p>
            </TextContent>
        </GreyContentGrid>
      </GreySection>
    </>
  );
};

export default WhoWeAreSection;
