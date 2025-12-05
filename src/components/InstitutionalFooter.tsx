import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import styled from "styled-components";

interface InstitutionalFooterProps {
  onNavigate: (page: string) => void;
}

const FooterWrapper = styled.footer`
  background: #0B1C2D;
  color: #8B95A5;
  border-top: 1px solid rgba(201,162,77,0.2);
`;

const FooterContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-bottom: 4rem;
`;

const Brand = styled.div``;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const LogoIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #C9A24D 0%, #A68A3E 100%);
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.div`
  color: #fff;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

const LogoSubText = styled.div`
  color: #C9A24D;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  letter-spacing: 0.05em;
`;

const Description = styled.p`
  color: #8B95A5;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  border: 1px solid rgba(201,162,77,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8B95A5;
  background: none;
  transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
  &:hover {
    color: #C9A24D;
    border-color: #C9A24D;
    box-shadow: 0 0 20px rgba(201,162,77,0.3);
  }
`;

const SectionTitle = styled.h3`
  color: #fff;
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: #8B95A5;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #C9A24D;
  }
`;

const ItemRow = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

const ItemIcon = styled.span`
  color: #C9A24D;
  margin-top: 0.25rem;
  flex-shrink: 0;
`;

const ItemText = styled.span`
  color: #8B95A5;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
`;

const BottomBar = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(201,162,77,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.p`
  color: #8B95A5;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
  color: #8B95A5;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export function InstitutionalFooter({ onNavigate }: InstitutionalFooterProps) {
  const footerSections = [
    {
      title: "Navigation",
      links: [
        { label: "Home", page: "home" },
        { label: "About Us", page: "about" },
        { label: "Projects", page: "projects" },
        { label: "News", page: "news" },
        { label: "Contact", page: "contact" },
      ],
    },
    {
      title: "Projects",
      links: [
        { label: "Residential Communities" },
        { label: "Commercial Zones" },
        { label: "Industrial Parks" },
        { label: "Free Trade Zone" },
      ],
    },
    {
      title: "Contact",
      items: [
        { icon: MapPin, text: "123 Innovation Park Drive, Houston, TX 77001" },
        { icon: Mail, text: "info@apoz.us" },
      ],
    },
  ];

  return (
    <FooterWrapper>
      <FooterContainer>
        <Grid>
          {/* Brand */}
          <Brand>
            <LogoRow>
              <LogoIcon>
                <span>APOZ</span>
              </LogoIcon>
              <div>
                <LogoText>APOZ</LogoText>
                <LogoSubText>Asia Pacific Opportunity Zone</LogoSubText>
              </div>
            </LogoRow>
            <Description>
              Building sustainable communities and fostering economic growth through master-planned development in Greater Houston.
            </Description>
            <SocialRow>
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <SocialIcon key={index}>
                  <Icon size={16} />
                </SocialIcon>
              ))}
            </SocialRow>
          </Brand>
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <SectionTitle>{section.title}</SectionTitle>
              <LinkList>
                {section.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {"page" in link ? (
                      <LinkButton onClick={() => onNavigate(link.page)}>{link.label}</LinkButton>
                    ) : (
                      <LinkButton>{link.label}</LinkButton>
                    )}
                  </li>
                ))}
                {section.items?.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <ItemRow key={itemIndex}>
                      <ItemIcon><Icon size={16} /></ItemIcon>
                      <ItemText>{item.text}</ItemText>
                    </ItemRow>
                  );
                })}
              </LinkList>
            </div>
          ))}
        </Grid>
        <BottomBar>
          <Copyright>© 2025 Asia Pacific Opportunity Zone. All rights reserved.</Copyright>
          <LegalLinks>
            <LinkButton>Privacy Policy</LinkButton>
            <LinkButton>Terms of Service</LinkButton>
            <LinkButton>Legal</LinkButton>
          </LegalLinks>
        </BottomBar>
      </FooterContainer>
    </FooterWrapper>
  );
}
