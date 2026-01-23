import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface InstitutionalFooterProps {
  onNavigate: (page: string) => void;
}

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.muted};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: ${({ theme }) => theme.spacing.xxxl};
`;

const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  width: 100%;
  overflow-x: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.2fr 1.5fr;
  gap: 4rem;
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
  height: 4rem;
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
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  box-shadow: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ theme }) => theme.colors.white};
  
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.gold};
    transform: translateY(-2px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 3.5rem;
    height: 3.5rem;
    
    svg {
      width: 2.2rem;
      height: 2.2rem;
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
    font-size: ${({ theme }) => theme.fontSizes['1.1']};
    margin-bottom: 0.8rem;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  padding: 0;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    transform: translateX(2px);
  }
  &.active {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes['0.97']};
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
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.sm};
  }
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
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
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
  const { t } = useTranslation('common');
  
  const footerSections: FooterSection[] = [
    {
      title: t('footer.navigation'),
      links: [
        { label: t('nav.home'), page: "home" },
        { label: t('nav.masterPlan'), page: "master-plan" },
        { label: t('nav.services'), page: "services" },
        { label: t('nav.investment'), page: "investment" },
        { label: t('nav.development'), page: "development" },
        { label: t('nav.news'), page: "news" },
      ],
    },
    {
      title: t('footer.contact'),
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
              <LogoIcon src="/assets/images/logo-transparent-light.png" alt="APOZ Logo" />
              <div>
                <LogoText>APOZ</LogoText>
                <LogoSubText>Asia Pacific Opportunity Zone</LogoSubText>
              </div>
            </LogoRow>
            <Description>
              {t('footer.description')}
            </Description>
            <SocialRow>
              <SocialIcon><FaFacebookF /></SocialIcon>
              <SocialIcon><FaXTwitter /></SocialIcon>
              <SocialIcon><FaLinkedinIn /></SocialIcon>
              <SocialIcon><FaInstagram /></SocialIcon>
            </SocialRow>
          </Brand>
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
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
          <Copyright>{t('footer.copyright')}</Copyright>
          <LegalLinks>
            <LinkButton>{t('footer.privacy')}</LinkButton>
            <LinkButton>{t('footer.terms')}</LinkButton>
            <LinkButton>{t('footer.legal')}</LinkButton>
          </LegalLinks>
        </BottomBar>
      </FooterContainer>
    </FooterWrapper>
  );
}
