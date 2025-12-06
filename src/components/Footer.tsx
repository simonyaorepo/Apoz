import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Mail, Globe } from "lucide-react";
import styled, { useTheme } from "styled-components";

interface FooterProps {
  onNavigate: (page: string) => void;
}

const FOOTER_CONTENT = {
  logoText1: "APOZ",
  logoText2: "Asia Pacific Opportunity Zone",
  descriptionBlock:
    "Building sustainable communities and fostering economic growth through master-planned development and international trade in Greater Houston.",
  quickLinksTitle: "Quick Links",
  quickLinks: [
    { label: "Home", page: "home" },
    { label: "About Us", page: "about" },
    { label: "Projects", page: "projects" },
    { label: "News", page: "news" },
    { label: "Contact", page: "contact" },
  ],
  contactTitle: "Contact",
  email1: "info@apoz.us",
  email2: "dc@apoz.us",
  languageToggle: "English / 简体中文",
  copyrightBlock: "© 2025 Asia Pacific Opportunity Zone. All rights reserved.",
  legalLinks: ["Privacy Policy", "Terms of Service", "Legal"],
};

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.foreground};
`;

const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.section} ${({ theme }) => theme.spacing.md};
`;

const Grid = styled.div`
  display: grid;
  gap: 3rem;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const CompanyInfo = styled.div`
  grid-column: span 2;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const LogoIcon = styled.div`
  width: ${({ theme }) => theme.spacing.card};
  height: ${({ theme }) => theme.spacing.card};
  background: ${({ theme }) => theme.colors.goldGradient};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.div`
  color: ${({ theme }) => theme.colors.gold};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.logo};
  letter-spacing: 0.05em;
`;

const LogoSubText = styled.div`
  color: ${({ theme }) => theme.colors.goldSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  letter-spacing: 0.05em;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 1.5rem;
  max-width: 32rem;
  line-height: 1.6;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  width: ${({ theme }) => theme.spacing.card};
  height: ${({ theme }) => theme.spacing.card};
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.foreground};
  transition: background ${({ theme }) => theme.transition.button}, color ${({ theme }) => theme.transition.button};
  &:hover {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transition.button};
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.muted};
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  transition: color ${({ theme }) => theme.transition.button};
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const BottomBar = styled.div`
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;


export function Footer({ onNavigate }: FooterProps) {
  const theme = useTheme();
  return (
    <FooterWrapper>
      <FooterContainer>
        <Grid>
          {/* Company Info */}
          <CompanyInfo>
            <LogoRow>
              <LogoIcon>
                <span>{FOOTER_CONTENT.logoText1}</span>
              </LogoIcon>
              <div>
                <LogoText>{FOOTER_CONTENT.logoText1}</LogoText>
                <LogoSubText>{FOOTER_CONTENT.logoText2}</LogoSubText>
              </div>
            </LogoRow>
            <Description>{FOOTER_CONTENT.descriptionBlock}</Description>
            <SocialRow>
              <SocialIcon href="#"><FaFacebookF size={20} color={theme.colors.gold} /></SocialIcon>
              <SocialIcon href="#"><FaTwitter size={20} color={theme.colors.gold} /></SocialIcon>
              <SocialIcon href="#"><FaLinkedinIn size={20} color={theme.colors.gold} /></SocialIcon>
              <SocialIcon href="#"><FaInstagram size={20} color={theme.colors.gold} /></SocialIcon>
            </SocialRow>
          </CompanyInfo>
          {/* Quick Links */}
          <div>
            <SectionTitle>{FOOTER_CONTENT.quickLinksTitle}</SectionTitle>
            <LinkList>
              {FOOTER_CONTENT.quickLinks.map((link, index) => (
                <li key={index}>
                  <LinkButton onClick={() => onNavigate(link.page)}>{link.label}</LinkButton>
                </li>
              ))}
            </LinkList>
          </div>
          {/* Contact */}
          <div>
            <SectionTitle>{FOOTER_CONTENT.contactTitle}</SectionTitle>
            <LinkList>
              <li>
                <ContactLink href={`mailto:${FOOTER_CONTENT.email1}`}><Mail size={16} color={theme.colors.gold} />{FOOTER_CONTENT.email1}</ContactLink>
              </li>
              <li>
                <ContactLink href={`mailto:${FOOTER_CONTENT.email2}`}><Mail size={16} color={theme.colors.gold} />{FOOTER_CONTENT.email2}</ContactLink>
              </li>
              <li>
                <LanguageButton><Globe size={16} color={theme.colors.gold} /><span>{FOOTER_CONTENT.languageToggle}</span></LanguageButton>
              </li>
            </LinkList>
          </div>
        </Grid>
        <BottomBar>
          <Copyright>{FOOTER_CONTENT.copyrightBlock}</Copyright>
          <LegalLinks>
            {FOOTER_CONTENT.legalLinks.map((link, index) => (
              <LinkButton key={index}>{link}</LinkButton>
            ))}
          </LegalLinks>
        </BottomBar>
      </FooterContainer>
    </FooterWrapper>
  );
}
