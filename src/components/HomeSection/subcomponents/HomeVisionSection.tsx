import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import {
  WhiteSection,
  GreySection,
  Container,
  ContentGrid,
  GreyContentGrid,
  TextContent,
  TealSection,
  TealBox,
  IllustrationBox,
  ImageBox,
} from "./SharedStyles";

interface VisionSectionProps {
  onNavigate: (page: string) => void;
}

const VisionSection: React.FC<VisionSectionProps> = ({ onNavigate: _onNavigate }) => {
  const { t } = useTranslation('home');
  const { t: tCommon } = useTranslation('common');
  
  return (
    <>
      <TextHero
        title={t('visionPage.title')}
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: tCommon('breadcrumbs.home'), href: '/' },
          { label: t('visionPage.title') }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              <p>{t('visionPage.intro')}</p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Building skyline */}
                <rect x="70" y="255" width="38" height="55" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="118" y="230" width="32" height="80" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="160" y="245" width="28" height="65" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="198" y="220" width="40" height="90" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                
                {/* Windows */}
                <rect x="79" y="268" width="7" height="9" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="93" y="268" width="7" height="9" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="127" y="245" width="7" height="9" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="168" y="258" width="7" height="9" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="210" y="238" width="9" height="11" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                
                {/* Growth chart */}
                <polyline points="70,275 130,230 185,255 245,185 300,210 360,145" stroke="#0a3a3f" strokeWidth="3" fill="none"/>
                <circle cx="70" cy="275" r="5" fill="#0a3a3f"/>
                <circle cx="130" cy="230" r="5" fill="#0a3a3f"/>
                <circle cx="185" cy="255" r="5" fill="#0a3a3f"/>
                <circle cx="245" cy="185" r="5" fill="#0a3a3f"/>
                <circle cx="300" cy="210" r="5" fill="#0a3a3f"/>
                <circle cx="360" cy="145" r="5" fill="#0a3a3f"/>
                
                {/* Upward arrow */}
                <path d="M 360 145 L 385 122 L 410 145" stroke="#0a3a3f" strokeWidth="3" fill="none"/>
                <line x1="385" y1="122" x2="385" y2="185" stroke="#0a3a3f" strokeWidth="3"/>
                
                {/* Innovation network */}
                <circle cx="480" cy="165" r="28" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="480" cy="250" r="28" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="535" cy="207" r="28" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="480" y1="193" x2="480" y2="222" stroke="#0a3a3f" strokeWidth="1.5"/>
                <line x1="502" y1="177" x2="516" y2="197" stroke="#0a3a3f" strokeWidth="1.5"/>
                <line x1="502" y1="237" x2="516" y2="217" stroke="#0a3a3f" strokeWidth="1.5"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <p>{t('visionPage.highlight')}</p>
        </TealBox>
      </TealSection>

      <GreySection>
        <Container>
          <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Vision and growth"
              />
            </ImageBox>
            <TextContent>
              <p>{t('visionPage.objectives_description')}</p>
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>
    </>
  );
};

export default VisionSection;
