import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import { WhiteSection, GreySection } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { ContentGrid, GreyContentGrid } from "../../ui/Grids";
import { IllustrationBox, ImageBox } from "../../ui/Media";
import { TextContent, TealSection, TealBox } from "./SharedStyles";

interface MissionSectionProps {
  onNavigate: (page: string) => void;
}

const MissionSection: React.FC<MissionSectionProps> = ({ onNavigate: _onNavigate }) => {
  const { t } = useTranslation('home');
  const { t: tCommon } = useTranslation('common');
  
  return (
    <>
      <TextHero
        title={t('missionPage.title')}
        backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: tCommon('breadcrumbs.home'), href: '/' },
          { label: t('missionPage.title') }
        ]}
      />
      
      <WhiteSection>
        <ContentGrid>
            <TextContent>
              <p>{t('missionPage.intro')}</p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Wind Turbine 1 */}
                <line x1="120" y1="310" x2="120" y2="160" stroke="#0a3a3f" strokeWidth="2.5"/>
                <circle cx="120" cy="155" r="10" fill="#0a3a3f"/>
                <path d="M 120 155 L 95 120" stroke="#0a3a3f" strokeWidth="2.5"/>
                <path d="M 120 155 L 145 125" stroke="#0a3a3f" strokeWidth="2.5"/>
                <path d="M 120 155 L 123 190" stroke="#0a3a3f" strokeWidth="2.5"/>
                
                {/* Wind Turbine 2 */}
                <line x1="210" y1="310" x2="210" y2="140" stroke="#0a3a3f" strokeWidth="2.5"/>
                <circle cx="210" cy="135" r="10" fill="#0a3a3f"/>
                <path d="M 210 135 L 188 105" stroke="#0a3a3f" strokeWidth="2.5"/>
                <path d="M 210 135 L 235 108" stroke="#0a3a3f" strokeWidth="2.5"/>
                <path d="M 210 135 L 212 168" stroke="#0a3a3f" strokeWidth="2.5"/>
                
                {/* Solar Panels */}
                <rect x="280" y="240" width="100" height="50" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="305" y1="240" x2="305" y2="290" stroke="#0a3a3f" strokeWidth="1.5"/>
                <line x1="330" y1="240" x2="330" y2="290" stroke="#0a3a3f" strokeWidth="1.5"/>
                <line x1="355" y1="240" x2="355" y2="290" stroke="#0a3a3f" strokeWidth="1.5"/>
                <line x1="280" y1="257" x2="380" y2="257" stroke="#0a3a3f" strokeWidth="1.5"/>
                <line x1="280" y1="273" x2="380" y2="273" stroke="#0a3a3f" strokeWidth="1.5"/>
                
                {/* Industrial Building with Green Roof */}
                <rect x="410" y="200" width="120" height="110" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="425" y="220" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="455" y="220" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="485" y="220" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="425" y="260" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="455" y="260" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="485" y="260" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Leaf icon on roof */}
                <path d="M 470 185 Q 480 175 490 185 Q 485 195 470 185" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="480" y1="185" x2="475" y2="190" stroke="#0a3a3f" strokeWidth="1.5"/>
                
                {/* Sun rays */}
                <circle cx="560" cy="120" r="25" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="560" y1="80" x2="560" y2="90" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="600" y1="120" x2="590" y2="120" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="585" y1="95" x2="578" y2="102" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="585" y1="145" x2="578" y2="138" stroke="#0a3a3f" strokeWidth="2"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <p>{t('missionPage.highlight')}</p>
        </TealBox>
      </TealSection>

      <GreySection>
        <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Mission and collaboration"
              />
            </ImageBox>
            <TextContent>
              <p>{t('missionPage.pillars_description')}</p>
            </TextContent>
        </GreyContentGrid>
      </GreySection>
    </>
  );
};

export default MissionSection;
