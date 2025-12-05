import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
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
  background: ${({ scrolled }) => scrolled ? "#0B1C2D" : "transparent"};
  box-shadow: ${({ scrolled }) => scrolled ? "0 8px 32px rgba(0,0,0,0.15)" : "none"};
`;

const NavContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const NavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
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

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const NavButton = styled.button<{ active?: boolean }>`
  position: relative;
  background: none;
  border: none;
  color: ${({ active }) => active ? "#C9A24D" : "#fff"};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #C9A24D;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => active ? "100%" : "0"};
    height: 2px;
    background: #C9A24D;
    transition: width 0.3s;
  }
`;

const MegaMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 1rem;
  width: 16rem;
  background: #0B1C2D;
  border: 1px solid rgba(201,162,77,0.2);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  z-index: 100;
`;

const MegaMenuButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: #fff;
  text-align: left;
  font-size: 0.95rem;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #C9A24D;
  }
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(201,162,77,0.4);
  border-radius: 999px;
  color: #fff;
  background: none;
  font-size: 0.95rem;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
  &:hover {
    color: #C9A24D;
    border-color: #C9A24D;
  }
`;

export function InstitutionalNav({ currentPage, onNavigate }: InstitutionalNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);

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
            {menuItems.map((item) => (
              <div
                key={item.id}
                style={{ position: "relative" }}
                onMouseEnter={() => item.submenu && setMegaMenuOpen(item.id)}
                onMouseLeave={() => setMegaMenuOpen(null)}
              >
                <NavButton active={currentPage === item.id} onClick={() => onNavigate(item.id)}>
                  {item.label}
                </NavButton>
                {/* Mega Menu */}
                {item.submenu && megaMenuOpen === item.id && (
                  <MegaMenu>
                    {item.submenu.map((subItem) => (
                      <MegaMenuButton key={subItem.id} onClick={() => onNavigate(subItem.id)}>
                        {subItem.label}
                      </MegaMenuButton>
                    ))}
                  </MegaMenu>
                )}
              </div>
            ))}
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
