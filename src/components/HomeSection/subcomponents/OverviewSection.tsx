import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import { WhiteSection, GreySection } from "../../ui/Sections";
import { ContentGrid, GreyContentGrid } from "../../ui/Grids";
import { IllustrationBox, ImageBox } from "../../ui/Media";
import { TextContent, TealSection, TealBox } from "./SharedStyles";

const OverviewSection: React.FC<{ onNavigate?: (page: string) => void }> = () => {
  const { t } = useTranslation('home');
  const { t: tCommon } = useTranslation('common');
  
  return (
    <>
      <TextHero
        title={t('overview.title')}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: tCommon('breadcrumbs.home'), href: '/' },
          { label: t('overview.title') }
        ]}
      />
      
      <WhiteSection>
        <ContentGrid>
            <TextContent>
              <p>{t('overview.intro1')}</p>
              <p>{t('overview.intro2')}</p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="currentColor" strokeWidth="2"/>
                
                {/* Factory/Manufacturing Building */}
                <rect x="50" y="180" width="180" height="130" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="65" y="200" width="35" height="45" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="115" y="200" width="35" height="45" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="165" y="200" width="35" height="45" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="65" y="260" width="35" height="50" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="115" y="260" width="35" height="50" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="165" y="260" width="35" height="50" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                
                {/* Smokestacks */}
                <rect x="85" y="130" width="18" height="50" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="130" y="110" width="18" height="70" stroke="currentColor" strokeWidth="2" fill="none"/>
                <ellipse cx="94" cy="125" rx="11" ry="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <ellipse cx="139" cy="105" rx="11" ry="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                
                {/* USA Flag */}
                <rect x="270" y="160" width="70" height="45" stroke="currentColor" strokeWidth="2" fill="none"/>
                <line x1="270" y1="170" x2="340" y2="170" stroke="currentColor" strokeWidth="1"/>
                <line x1="270" y1="180" x2="340" y2="180" stroke="currentColor" strokeWidth="1"/>
                <line x1="270" y1="190" x2="340" y2="190" stroke="currentColor" strokeWidth="1"/>
                <rect x="270" y="160" width="25" height="18" stroke="currentColor" strokeWidth="1" fill="none"/>
                
                {/* Cargo/Shipping Container */}
                <rect x="370" y="245" width="110" height="65" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="380" y="230" width="25" height="15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="415" y="230" width="25" height="15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="450" y="230" width="25" height="15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="395" cy="310" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="455" cy="310" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
                
                {/* Globe/World Trade */}
                <circle cx="540" cy="180" r="55" stroke="currentColor" strokeWidth="2" fill="none"/>
                <ellipse cx="540" cy="180" rx="55" ry="22" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <line x1="540" y1="125" x2="540" y2="235" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M512 150 Q540 168 568 150" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M512 210 Q540 192 568 210" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <p>{t('overview.highlight')}</p>
        </TealBox>
      </TealSection>

      <GreySection>
        <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Strategic business partnership"
              />
            </ImageBox>
            <TextContent>
              <p>{t('overview.saudiPartnership1')}</p>
              <p>{t('overview.saudiPartnership2')}</p>
            </TextContent>
        </GreyContentGrid>
      </GreySection>
    </>
  );
};

export default OverviewSection;
