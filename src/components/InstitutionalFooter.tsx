import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import styled from "styled-components";

interface InstitutionalFooterProps {
  onNavigate: (page: string) => void;
}

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.muted};
  border-top: 1px solid ${({ theme }) => theme.colors.goldGradient};
`;

const FooterContainer = styled.div`
  max-width: 82.5rem;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
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
  background: ${({ theme }) => theme.colors.goldGradient};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

const LogoSubText = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  letter-spacing: 0.05em;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
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
  border: 1px solid ${({ theme }) => theme.colors.goldAccent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grayAccent};
  & > svg {
    color: ${({ theme }) => theme.colors.gold};
  }
  background: none;
  transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.goldAccent};
    border-color: ${({ theme }) => theme.colors.goldAccent};
    box-shadow: ${({ theme }) => theme.colors.boxShadowGoldGlow};
  }
`;

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
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
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  transition: color ${({ theme }) => theme.transition.button};
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const ItemRow = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const ItemIcon = styled.span`
  color: ${({ theme }) => theme.colors.gold};
  margin-top: ${({ theme }) => theme.spacing.xxs};
  flex-shrink: 0;
`;

const ItemText = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
`;

const BottomBar = styled.div`
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.goldAccent};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const LegalLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.muted};
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
