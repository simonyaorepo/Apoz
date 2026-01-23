import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface InstitutionalNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const NavBar = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ $scrolled }) => $scrolled ? "0 8px 32px rgba(0,0,0,0.15)" : "none"};
  min-height: 5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 4rem;
  }
`;

const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

const NavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 4rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 3.5rem;
  }
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const LogoIcon = styled.img`
  height: 4rem;
  width: auto;
  object-fit: contain;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 3rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 2.5rem;
  }
`;

const LogoText = styled.div`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
  font-size: ${({ theme }) => theme.fontSizes.base};
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes['0.85']};
  }
`;

const LogoSubText = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  letter-spacing: 0.05em;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes['0.65']};
  }
`;

const NavLinks = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 0.75rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding: ${({ theme }) => theme.spacing.lg};
    overflow-y: auto;
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    box-shadow: -4px 0 8px rgba(0,0,0,0.1);
  }
`;

const LanguageSwitcherWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding-top: ${({ theme }) => theme.spacing.md};
    border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;

const MobileNavRow = styled.div`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: ${({ theme }) => theme.spacing.sm};
  }
  
  @media (min-width: calc(${({ theme }) => theme.breakpoints.md} + 1px)) {
    display: none !important;
  }
`;

const ChevronButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const NavButton = styled.button<{ $active?: boolean }>`
  position: relative;
  background: none;
  border: none;
  color: ${({ theme, $active }) => $active ? theme.colors.gold : theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 400;
  letter-spacing: 0.03em;
  padding: 0.25rem 0;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transition.button};
  text-transform: capitalize;
  width: auto;
  
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $active }) => $active ? "100%" : "0"};
    height: 2px;
    background: ${({ theme }) => theme.colors.gold};
    transition: width 0.3s;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes['0.9']};
    padding: 0.15rem 0;
  }
  
  &.desktop-nav {
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['1.1']};
    width: 100%;
    text-align: left;
    
    &::after {
      display: none;
    }
  }
`;

const MegaMenu = styled.div<{ $left: number | null }>`
  position: fixed;
  top: 5rem;
  left: ${({ $left }) => ($left !== null ? `${$left}px` : '0')};
  transform: ${({ $left }) => $left !== null ? 'translateX(-50%)' : 'none'};
  min-width: 8rem;
  max-width: 10rem;
  background: rgba(11, 28, 45, 0.92); /* slightly see-through */
  border: none;
  border-radius: 0;
  padding: 0;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  z-index: 100;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 6.5rem;
    max-width: 8rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MegaMenuButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes['0.95']};
  font-weight: 400;
  padding: 0.85rem 1rem;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transition.button}, background 0.2s;
  border-bottom: 1px solid rgba(255,255,255,0.12);
  border-radius: 0;
  text-transform: none;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    background: rgba(255,255,255,0.04);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes['0.8']};
    padding: 0.6rem 0.7rem;
  }
`;

const NavLinkWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* Increase hoverable area above and below */
  padding-top: 0.75rem;
  padding-bottom: 1.5rem;
  margin-top: -0.75rem;
  margin-bottom: -1.5rem;
`;

const NavItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    align-items: flex-start;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileSubmenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ $isOpen }) => $isOpen ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    padding-left: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`;

const MobileSubmenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.foreground};
  text-align: left;
  font-size: 0.9rem;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export function InstitutionalNav({ currentPage, onNavigate }: InstitutionalNavProps) {
  const { t } = useTranslation('common');
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [dropdownLeft, setDropdownLeft] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const navLinkRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { 
      id: "home", 
      label: t('nav.home'),
      submenu: [
        { label: t('nav.overview'), id: "home/overview" },
        { label: t('nav.whoWeAre'), id: "home/who-are-we" },
        { label: t('nav.vision'), id: "home/vision" },
        { label: t('nav.mission'), id: "home/mission" },
        { label: t('nav.management'), id: "home/management" },
      ]
    },
    { 
      id: "master-plan", 
      label: t('nav.masterPlan'),
      submenu: [
        { label: t('nav.industryZone'), id: "master-plan/industry-zone" },
        { label: t('nav.affordableLivingZone'), id: "master-plan/affordable-living-zone" },
        { label: t('nav.internationalHub'), id: "master-plan/international-hub" },
        { label: t('nav.ftzZone'), id: "master-plan/ftz-zone" },
        { label: t('nav.qozZone'), id: "master-plan/qoz-zone" },
        { label: t('nav.qofZone'), id: "master-plan/qof-zone" },
      ]
    },
    { 
      id: "services", 
      label: t('nav.services'),
      submenu: [
        { label: t('nav.overview'), id: "services/overview" },
        { label: t('nav.communityManagement'), id: "services/community-management" },
        { label: t('nav.industryZoneManagement'), id: "services/industry-zone-management" },
        { label: t('nav.residentialManagement'), id: "services/residential-management" },
      ]
    },
    { 
      id: "investment", 
      label: t('nav.investment'),
      submenu: [
        { label: t('nav.overview'), id: "investment/overview" },
        { label: t('nav.industryZone'), id: "investment/industry-zone" },
        { label: t('nav.residentialZone'), id: "investment/residential-zone" },
        { label: t('nav.infrastructure'), id: "investment/infrastructure" },
      ]
    },
    { 
      id: "development", 
      label: t('nav.development'),
      submenu: [
        { label: t('nav.phase1'), id: "development/phase1" },
        { label: t('nav.phase2'), id: "development/phase2" },
        { label: t('nav.phase3'), id: "development/phase3" },
      ]
    },
    { id: "news", label: t('nav.news') },
  ];

  return (
    <NavBar $scrolled={scrolled}>
      <NavContainer>
        <NavRow>
          {/* Logo */}
          <LogoRow onClick={() => onNavigate("home")}>
            <LogoIcon src="/assets/images/logo-transparent-light.png" alt="APOZ Logo" />
            <div>
              <LogoText>APOZ</LogoText>
              <LogoSubText>Asia Pacific Opportunity Zone</LogoSubText>
            </div>
          </LogoRow>
          
          {/* Hamburger Button */}
          <HamburgerButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </HamburgerButton>
          
          {/* Navigation */}
          <NavLinks $isOpen={mobileMenuOpen}>
            {menuItems.map((item) => {
              const handleEnter = () => {
                if (closeTimeout.current) clearTimeout(closeTimeout.current);
                if (item.submenu) {
                  setMegaMenuOpen(item.id);
                  const rect = navLinkRefs.current[item.id]?.getBoundingClientRect();
                  if (rect) {
                    setDropdownLeft(rect.left + rect.width / 2);
                  }
                }
              };
              const handleLeave = () => {
                closeTimeout.current = setTimeout(() => {
                  setMegaMenuOpen(null);
                  setDropdownLeft(null);
                }, 180);
              };
              
              const handleMobileClick = () => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
                setMobileSubmenuOpen(null);
              };
              
              const handleMobileToggleSubmenu = (e: React.MouseEvent) => {
                e.stopPropagation();
                setMobileSubmenuOpen(mobileSubmenuOpen === item.id ? null : item.id);
              };
              
              const handleMobileSubmenuClick = (subItemId: string) => {
                onNavigate(subItemId);
                setMobileMenuOpen(false);
                setMobileSubmenuOpen(null);
              };
              
              return (
                <NavItemWrapper
                  key={item.id}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  <NavLinkWrapper
                    ref={el => { navLinkRefs.current[item.id] = el; }}
                  >
                    {/* Desktop: NavButton with label and chevron */}
                    <NavButton 
                      $active={currentPage === item.id} 
                      onClick={() => onNavigate(item.id)}
                      className="desktop-nav"
                    >
                      {item.label}
                      {item.submenu && <ChevronDown size={16} style={{ marginLeft: 4, verticalAlign: 'middle' }} />}
                    </NavButton>
                    
                    {/* Mobile: Separate clickable areas */}
                    <MobileNavRow>
                      <NavButton 
                        $active={currentPage === item.id} 
                        onClick={handleMobileClick}
                        style={{ flex: 1, padding: '0.75rem 0' }}
                      >
                        {item.label}
                      </NavButton>
                      {item.submenu && (
                        <ChevronButton onClick={handleMobileToggleSubmenu}>
                          <ChevronDown 
                            size={20} 
                            style={{ 
                              transform: mobileSubmenuOpen === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s'
                            }} 
                          />
                        </ChevronButton>
                      )}
                    </MobileNavRow>
                  </NavLinkWrapper>
                  
                  {/* Desktop Mega Menu */}
                  {item.submenu && megaMenuOpen === item.id && (
                    <MegaMenu $left={dropdownLeft}>
                      {item.submenu.map((subItem) => (
                        <MegaMenuButton key={subItem.id} onClick={() => onNavigate(subItem.id)}>
                          {subItem.label}
                        </MegaMenuButton>
                      ))}
                    </MegaMenu>
                  )}
                  
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <MobileSubmenu $isOpen={mobileSubmenuOpen === item.id}>
                      {item.submenu.map((subItem) => (
                        <MobileSubmenuButton 
                          key={subItem.id} 
                          onClick={() => handleMobileSubmenuClick(subItem.id)}
                        >
                          {subItem.label}
                        </MobileSubmenuButton>
                      ))}
                    </MobileSubmenu>
                  )}
                </NavItemWrapper>
              );
            })}
            <LanguageSwitcherWrapper>
              <LanguageSwitcher />
            </LanguageSwitcherWrapper>
          </NavLinks>
        </NavRow>
      </NavContainer>
    </NavBar>
  );
}
