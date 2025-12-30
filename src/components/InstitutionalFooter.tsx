import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";
import styled from "styled-components";

interface InstitutionalFooterProps {
  onNavigate: (page: string) => void;
}

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.muted};
  border-top: 1px solid ${({ theme }) => theme.colors.goldGradient};
  margin-top: ${({ theme }) => theme.spacing.xxxl};
`;

const FooterContainer = styled.div`
  max-width: 82.5rem;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  padding-top: 2rem;
  align-items: start;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const Brand = styled.div`
  margin-top: 0.7rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
    margin-top: 0.3rem;
    margin-bottom: 1.2rem;
  }
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
    gap: 0.7rem;
  }
`;

const LogoIcon = styled.img`
  height: 3rem;
  width: auto;
  object-fit: contain;
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
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
    gap: 0.7rem;
  }
`;

const SocialIcon = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.goldAccent};
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  box-shadow: none;
  transition: border-color 0.2s, color 0.2s;
  & > svg {
    color: ${({ theme }) => theme.colors.gold};
    fill: ${({ theme }) => theme.colors.gold};
    width: 2.5rem;
    height: 2.5rem;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
  }
  &:hover > svg {
    color: ${({ theme }) => theme.colors.goldAccent};
    fill: ${({ theme }) => theme.colors.goldAccent};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 2.2rem;
    height: 2.2rem;
    & > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
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
  font-weight: 400;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transition.button}, font-weight 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    font-weight: 500;
  }
  &.active {
    color: ${({ theme }) => theme.colors.gold};
    font-weight: 500;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
    font-size: 0.97rem;
    margin-bottom: 0.5rem;
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

// Add types for footer sections
interface FooterLink {
  label: string;
  page?: string;
}
interface FooterSection {
  title: string;
  links?: FooterLink[];
  items?: { icon: React.ElementType; text: string }[];
}

export function InstitutionalFooter({ onNavigate }: InstitutionalFooterProps) {
  const footerSections: FooterSection[] = [
    {
      title: "Navigation",
      links: [
        { label: "Home", page: "home" },
        { label: "About", page: "about" },
        { label: "Investment", page: "investment" },
        { label: "Projects", page: "projects" },
        { label: "News", page: "news" },
        { label: "Contact", page: "contact" },
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
              <LogoIcon src="/assets/images/transparent-light-logo.png" alt="APOZ Logo" />
              <div>
                <LogoText>APOZ</LogoText>
                <LogoSubText>Asia Pacific Opportunity Zone</LogoSubText>
              </div>
            </LogoRow>
            <Description>
              Building sustainable communities and fostering economic growth through master-planned development in Greater Houston.
            </Description>
            <SocialRow>
              <SocialIcon><FaFacebookF size={40} /></SocialIcon>
              <SocialIcon><FaXTwitter size={40} /></SocialIcon>
              <SocialIcon><FaLinkedinIn size={40} /></SocialIcon>
              <SocialIcon><FaInstagram size={40} /></SocialIcon>
            </SocialRow>
          </Brand>
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div
              key={index}
              style={{
                gridColumn:
                  footerSections.length === 2 && index === 0
                    ? '3 / span 1'
                    : undefined
              }}
            >
              <SectionTitle>{section.title}</SectionTitle>
              <LinkList>
                {section.links && section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {"page" in link && link.page ? (
                      <LinkButton onClick={() => onNavigate(link.page!)}>{link.label}</LinkButton>
                    ) : (
                      <LinkButton>{link.label}</LinkButton>
                    )}
                  </li>
                ))}
                {section.items && section.items.map((item, itemIndex) => {
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
