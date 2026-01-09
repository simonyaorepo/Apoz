import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import styled from "styled-components";

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
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100vw;
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
  font-size: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.85rem;
  }
`;

const LogoSubText = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.65rem;
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
  font-size: 1rem;
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
    font-size: 0.9rem;
    padding: 0.15rem 0;
  }
  
  &.desktop-nav {
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
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
  font-size: 0.95rem;
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
    font-size: 0.8rem;
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
      label: "Home",
      submenu: [
        { label: "Overview", id: "home/overview" },
        { label: "Who Are We", id: "home/who-are-we" },
        { label: "Our Vision", id: "home/vision" },
        { label: "Our Mission", id: "home/mission" },
        { label: "Management", id: "home/management" },
      ]
    },
    { 
      id: "master-plan", 
      label: "Master Plan",
      submenu: [
        { label: "Industry Zone", id: "master-plan/industry-zone" },
        { label: "Affordable Living Zone", id: "master-plan/affordable-living-zone" },
        { label: "International Hub", id: "master-plan/international-hub" },
        { label: "FTZ Zone", id: "master-plan/ftz-zone" },
        { label: "QOZ Zone", id: "master-plan/qoz-zone" },
        { label: "QOF Zone", id: "master-plan/qof-zone" },
      ]
    },
    { 
      id: "services", 
      label: "Our Services",
      submenu: [
        { label: "Overview", id: "services/overview" },
        { label: "Community Management", id: "services/community-management" },
        { label: "Industry Zone Management", id: "services/industry-zone-management" },
        { label: "Residential Management", id: "services/residential-management" },
      ]
    },
    { 
      id: "investment", 
      label: "Investment",
      submenu: [
        { label: "Overview", id: "investment/overview" },
        { label: "Industry Zone", id: "investment/industry-zone" },
        { label: "Residential Zone", id: "investment/residential-zone" },
        { label: "Infrastructure", id: "investment/infrastructure" },
      ]
    },
    { 
      id: "development", 
      label: "Development",
      submenu: [
        { label: "Phase 1", id: "development/phase1" },
        { label: "Phase 2", id: "development/phase2" },
        { label: "Phase 3", id: "development/phase3" },
      ]
    },
    { id: "news", label: "News" },
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
          <NavLinks $isOpen={mobileMenuOpen}>{menuItems.map((item) => {
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
          </NavLinks>
        </NavRow>
      </NavContainer>
    </NavBar>
  );
}
