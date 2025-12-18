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

interface VisionSectionProps {
  onNavigate: (page: string) => void;
}

const VisionSection: React.FC<VisionSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title="Our Vision"
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Vision" }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              <p>
                APOZ envisions becoming the premier Asia Pacific-North American economic bridge in Southeast Texas—a world-class development zone where international commerce, advanced manufacturing, and thriving residential communities converge to create unprecedented regional prosperity.
              </p>
              <p>
                We see a future where underdeveloped Texas land transforms into vibrant economic hubs attracting Fortune 500 companies, supporting thousands of quality jobs, and providing affordable housing for working families. Our vision extends beyond economic metrics to community vitality, environmental sustainability, and creating a model for how 21st-century development can benefit all stakeholders.
              </p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="340" x2="620" y2="340" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Tree */}
                <ellipse cx="80" cy="260" rx="25" ry="40" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <line x1="80" y1="300" x2="80" y2="340" stroke="#0a3a3f" strokeWidth="1.5"/>
                
                {/* EV Charging Station */}
                <rect x="130" y="250" width="45" height="70" rx="4" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="140" y="265" width="25" height="35" rx="2" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <path d="M 147 285 L 152 280 L 150 285 L 155 280" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <circle cx="152" cy="310" r="3" fill="#0a3a3f"/>
                <line x1="152" y1="320" x2="152" y2="340" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Wind Turbine 1 */}
                <line x1="210" y1="340" x2="210" y2="180" stroke="#0a3a3f" strokeWidth="2"/>
                <circle cx="210" cy="175" r="8" fill="#0a3a3f"/>
                <path d="M 210 175 L 190 145" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M 210 175 L 230 150" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M 210 175 L 215 205" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Wind Turbine 2 */}
                <line x1="280" y1="340" x2="280" y2="200" stroke="#0a3a3f" strokeWidth="2"/>
                <circle cx="280" cy="195" r="8" fill="#0a3a3f"/>
                <path d="M 280 195 L 265 170" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M 280 195 L 298 175" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M 280 195 L 282 220" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Electric Car */}
                <ellipse cx="365" cy="310" rx="45" ry="30" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="335" cy="335" r="12" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="395" cy="335" r="12" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <path d="M 325 310 L 335 290 L 385 290 L 395 310" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="340" y="292" width="15" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="360" y="292" width="15" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                
                {/* Cloud */}
                <path d="M 430 150 Q 440 140 455 145 Q 470 135 485 145 Q 500 140 505 155 Q 510 165 500 170 Q 430 170 430 150" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Tree 2 */}
                <circle cx="470" cy="275" r="20" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <line x1="470" y1="295" x2="470" y2="340" stroke="#0a3a3f" strokeWidth="1.5"/>
                
                {/* Bench */}
                <line x1="510" y1="315" x2="580" y2="315" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="520" y1="315" x2="520" y2="340" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="570" y1="315" x2="570" y2="340" stroke="#0a3a3f" strokeWidth="2"/>
                <rect x="515" y="305" width="60" height="8" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Trash Can */}
                <rect x="590" y="315" width="20" height="25" rx="2" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <line x1="588" y1="318" x2="612" y2="318" stroke="#0a3a3f" strokeWidth="1.5"/>
                
                {/* Bicycle */}
                <circle cx="535" cy="270" r="15" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="575" cy="270" r="15" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <path d="M 535 270 L 555 245 L 565 245 L 575 270" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="555" y1="245" x2="550" y2="235" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M 555 245 L 560 265" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>
      
      <TealSection>
        <TealBox>
          <p>
            APOZ will serve as the primary destination for Asian Pacific companies establishing North American operations, leveraging Houston's strategic port access, Free Trade Zone benefits, and established international trade networks. We envision industrial zones buzzing with advanced manufacturing, logistics centers connecting continents, commercial districts serving diverse communities, and residential neighborhoods providing quality affordable housing—all working in harmony to demonstrate that economic growth and community well-being are complementary outcomes of thoughtful development.
          </p>
        </TealBox>
      </TealSection>
      
      <GreySection>
        <Container>
          <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Business collaboration"
              />
            </ImageBox>
            <TextContent>
              <p>
                Our vision is creating a lasting legacy that transforms how development happens—proving that large-scale industrial and residential projects can prioritize affordability, sustainability, and community benefit while delivering strong returns for investors and partners.
              </p>
              <p>
                APOZ will demonstrate that strategic international partnerships, government collaboration, and community-focused planning create better outcomes than traditional development models. We envision setting new standards for how economic zones integrate housing affordability, environmental stewardship, and job creation into core development frameworks.
              </p>
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>
    </>
  );
};

export default VisionSection;
