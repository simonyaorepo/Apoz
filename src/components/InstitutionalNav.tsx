import { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown } from "lucide-react";
import styled from "styled-components";

interface InstitutionalNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const NavBar = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ scrolled }) => scrolled ? "0 8px 32px rgba(0,0,0,0.15)" : "none"};
  min-height: 3.5rem;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (max-width: 900px) {
    max-width: 100vw;
    padding: 0 0.5rem;
  }
`;

const NavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  @media (max-width: 600px) {
    height: 2.5rem;
  }
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const LogoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${({ theme }) => theme.colors.goldGradient};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

const LogoText = styled.div`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
  font-size: 1rem;
  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

const LogoSubText = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  @media (max-width: 600px) {
    font-size: 0.65rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 900px) {
    gap: 0.75rem;
  }
`;

const NavButton = styled.button<{ active?: boolean }>`
  position: relative;
  background: none;
  border: none;
  color: ${({ theme, active }) => active ? theme.colors.gold : theme.colors.foreground};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.03em;
  padding: 0.25rem 0;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transition.button};
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => active ? "100%" : "0"};
    height: 2px;
    background: ${({ theme }) => theme.colors.gold};
    transition: width 0.3s;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 0.15rem 0;
  }
`;

const MegaMenu = styled.div<{ left: number | null }>`
  position: fixed;
  top: 3.5rem;
  left: ${({ left }) => (left !== null ? `${left}px` : '50%')};
  transform: translateX(-50%);
  min-width: 8rem;
  max-width: 10rem;
  background: ${({ theme }) => theme.colors.darkBlueAlt};
  border: none;
  border-radius: 0;
  padding: 0;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  z-index: 100;
  @media (max-width: 600px) {
    min-width: 6.5rem;
    max-width: 8rem;
  }
`;

const MegaMenuButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
  font-size: 0.95rem;
  padding: 0.4rem 0.75rem;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transition.button}, background 0.2s;
  border-bottom: 1px solid rgba(255,255,255,0.12);
  border-radius: 0;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    background: rgba(255,255,255,0.04);
  }
  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 0.3rem 0.5rem;
  }
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.goldAccent};
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.foreground};
  background: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  transition: color ${({ theme }) => theme.transition.button}, border-color ${({ theme }) => theme.transition.button};
  & > svg {
    color: ${({ theme }) => theme.colors.gold};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    border-color: ${({ theme }) => theme.colors.gold};
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
`;
export function InstitutionalNav({ currentPage, onNavigate }: InstitutionalNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [dropdownLeft, setDropdownLeft] = useState<number | null>(null);
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
    { id: "home", label: "Home" },
    { 
      id: "about", 
      label: "About Us",
      submenu: [
        { label: "Mission & Vision", id: "mission" },
        { label: "Leadership", id: "leadership" },
        { label: "Partners", id: "partners" },
      ]
    },
    { 
      id: "projects", 
      label: "Projects",
      submenu: [
        { label: "Residential", id: "residential" },
        { label: "Commercial", id: "commercial" },
        { label: "Industrial", id: "industrial" },
      ]
    },
    { id: "news", label: "News" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <NavBar scrolled={scrolled}>
      <NavContainer>
        <NavRow>
          {/* Logo */}
          <LogoRow onClick={() => onNavigate("home")}> 
            <LogoIcon>
              <span>APOZ</span>
            </LogoIcon>
            <div>
              <LogoText>APOZ</LogoText>
              <LogoSubText>Asia Pacific Opportunity Zone</LogoSubText>
            </div>
          </LogoRow>
          {/* Navigation */}
          <NavLinks>
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
              return (
                <NavItemWrapper
                  key={item.id}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  <NavLinkWrapper
                    ref={el => { navLinkRefs.current[item.id] = el; }}
                  >
                    <NavButton active={currentPage === item.id} onClick={() => onNavigate(item.id)}>
                      {item.label}
                      {item.submenu && <ChevronDown size={16} style={{ marginLeft: 4, verticalAlign: 'middle' }} />}
                    </NavButton>
                  </NavLinkWrapper>
                  {/* Mega Menu */}
                  {item.submenu && megaMenuOpen === item.id && (
                    <MegaMenu left={dropdownLeft}>
                      {item.submenu.map((subItem) => (
                        <MegaMenuButton key={subItem.id} onClick={() => onNavigate(subItem.id)}>
                          {subItem.label}
                        </MegaMenuButton>
                      ))}
                    </MegaMenu>
                  )}
                </NavItemWrapper>
              );
            })}
            <LanguageButton>
              <Globe size={16} />
              <span>EN / 中文</span>
            </LanguageButton>
          </NavLinks>
        </NavRow>
      </NavContainer>
    </NavBar>
  );
}
