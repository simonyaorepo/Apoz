import { Facebook, Twitter, Linkedin, Instagram, Mail, Globe } from "lucide-react";
import styled from "styled-components";

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
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const FooterContainer = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 4rem 1rem;
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
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #D4AF37 0%, #AA8A2E 100%);
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.div`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

const LogoSubText = styled.div`
  color: #D4AF37;
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
  width: 2.5rem;
  height: 2.5rem;
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.foreground};
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #D4AF37;
    color: #0A1628;
  }
`;

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
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
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #D4AF37;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #D4AF37;
  }
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.muted};
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #D4AF37;
  }
`;

const BottomBar = styled.div`
  padding-top: 2rem;
  border-top: 1px solid #1a2942;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export function Footer({ onNavigate }: FooterProps) {
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
              <SocialIcon href="#"><Facebook size={20} /></SocialIcon>
              <SocialIcon href="#"><Twitter size={20} /></SocialIcon>
              <SocialIcon href="#"><Linkedin size={20} /></SocialIcon>
              <SocialIcon href="#"><Instagram size={20} /></SocialIcon>
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
                <ContactLink href={`mailto:${FOOTER_CONTENT.email1}`}><Mail size={16} />{FOOTER_CONTENT.email1}</ContactLink>
              </li>
              <li>
                <ContactLink href={`mailto:${FOOTER_CONTENT.email2}`}><Mail size={16} />{FOOTER_CONTENT.email2}</ContactLink>
              </li>
              <li>
                <LanguageButton><Globe size={16} /><span>{FOOTER_CONTENT.languageToggle}</span></LanguageButton>
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
