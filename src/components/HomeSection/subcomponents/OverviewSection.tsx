import React from "react";
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
import { OVERVIEW_DATA } from "./homeSectionData";

interface OverviewSectionProps {
  onNavigate: (page: string) => void;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title={OVERVIEW_DATA.title}
        backgroundImage={OVERVIEW_DATA.backgroundImage}
        breadcrumbs={OVERVIEW_DATA.breadcrumbs}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              {OVERVIEW_DATA.content.intro.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Factory/Manufacturing Building */}
                <rect x="50" y="180" width="180" height="130" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="65" y="200" width="35" height="45" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="115" y="200" width="35" height="45" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="165" y="200" width="35" height="45" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="65" y="260" width="35" height="50" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="115" y="260" width="35" height="50" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="165" y="260" width="35" height="50" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Smokestacks */}
                <rect x="85" y="130" width="18" height="50" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="130" y="110" width="18" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <ellipse cx="94" cy="125" rx="11" ry="7" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <ellipse cx="139" cy="105" rx="11" ry="7" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* USA Flag */}
                <rect x="270" y="160" width="70" height="45" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="270" y1="170" x2="340" y2="170" stroke="#0a3a3f" strokeWidth="1"/>
                <line x1="270" y1="180" x2="340" y2="180" stroke="#0a3a3f" strokeWidth="1"/>
                <line x1="270" y1="190" x2="340" y2="190" stroke="#0a3a3f" strokeWidth="1"/>
                <rect x="270" y="160" width="25" height="18" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                
                {/* Cargo/Shipping Container */}
                <rect x="370" y="245" width="110" height="65" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="380" y="230" width="25" height="15" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="415" y="230" width="25" height="15" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="450" y="230" width="25" height="15" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <circle cx="395" cy="310" r="12" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="455" cy="310" r="12" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                
                {/* Globe/World Trade */}
                <circle cx="540" cy="180" r="55" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <ellipse cx="540" cy="180" rx="55" ry="22" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <line x1="540" y1="125" x2="540" y2="235" stroke="#0a3a3f" strokeWidth="1.5"/>
                <path d="M512 150 Q540 168 568 150" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <path d="M512 210 Q540 192 568 210" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <p>{OVERVIEW_DATA.content.highlight}</p>
        </TealBox>
      </TealSection>

      <GreySection>
        <Container>
          <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Strategic business partnership"
              />
            </ImageBox>
            <TextContent>
              {OVERVIEW_DATA.content.saudiPartnership.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>
    </>
  );
};

export default OverviewSection;
