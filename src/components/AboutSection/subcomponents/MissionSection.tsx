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

interface MissionSectionProps {
  onNavigate: (page: string) => void;
}

const MissionSection: React.FC<MissionSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title="Our Mission"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Mission" }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              <p>
                APOZ (Asia Pacific Opportunity Zone) is dedicated to creating a dynamic, sustainable, and innovation-driven industrial and residential community in Southeast Texas. Our mission goes beyond simple development—we're architecting the future of economic opportunity in one of America's fastest-growing regions.
              </p>
              <p>
                By integrating smart infrastructure, affordable housing solutions, and strategic global partnerships, APOZ aims to become the premier hub for advanced manufacturing, international trade, and inclusive community development. We bridge continents, connecting Asian Pacific investment with North American opportunity while creating lasting value for local communities and regional economies.
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
              Every APOZ project is evaluated through the lens of people, planet, and profit. We prioritize affordable housing starting at $188,000 for working families, sustainable development practices that protect environmental resources, and economic structures that generate lasting value. Our mission extends beyond construction—we're building vibrant communities where businesses flourish, families thrive, and future generations inherit a legacy of opportunity.
            </p>
          </TealBox>
      </TealSection>
      
      <GreySection>
        <Container>
          <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Strategic business meeting"
              />
            </ImageBox>
            <TextContent>
              <p>
                APOZ integrates multiple development pillars: industrial parks designed to attract Fortune 500 manufacturers with Free Trade Zone advantages, commercial districts featuring retail, healthcare, and essential services, and residential communities that provide quality affordable housing for the workforce powering our industrial zones.
              </p>
              <p>
                Our strategic positioning in Southeast Texas leverages Houston's global port access, existing transportation infrastructure, and status as an international trade gateway. This creates unique competitive advantages for companies seeking to establish North American operations while maintaining efficient supply chain connections to Asian Pacific markets.
              </p>
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>
    </>
  );
};

export default MissionSection;
