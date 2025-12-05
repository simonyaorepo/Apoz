import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import styled from "styled-components";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border || "#1a2942"};
  z-index: 50;
`;

const Container = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoBox = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #D4AF37 0%, #AA8A2E 100%);
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.span`
  color: #0A1628;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

const Brand = styled.div`
  color: ${({ theme }) => theme.colors.foreground};
  letter-spacing: 0.05em;
`;

const SubBrand = styled.div`
  font-size: 0.75rem;
  color: #D4AF37;
  letter-spacing: 0.05em;
`;

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

const MenuButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 0;
  transition: color 0.2s, border-color 0.2s;
  letter-spacing: 0.05em;
  color: ${({ active }) => (active ? "#D4AF37" : "#fff")};
  border-bottom: ${({ active }) => (active ? "2px solid #D4AF37" : "none")};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: #D4AF37;
  }
`;

const LangButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.2s;
  &:hover {
    color: #D4AF37;
  }
`;

const MobileMenuBtn = styled.button`
  display: block;
  padding: 0.5rem;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
  &:hover {
    color: #D4AF37;
  }
`;

const MobileMenu = styled.div`
  display: block;
  border-top: 1px solid ${({ theme }) => theme.colors.border || "#1a2942"};
  padding: 1rem 0;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenuItem = styled.button<{ active?: boolean }>`
  width: 100%;
  text-align: left;
  padding: 0.75rem 1rem;
  color: ${({ active }) => (active ? "#D4AF37" : "#fff")};
  background: ${({ active }) => (active ? "#1a2942" : "none")};
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #1a2942;
  }
`;

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "projects", label: "Projects" },
    { id: "news", label: "News" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <Nav>
      <Container>
        <Flex>
          {/* Logo */}
          <LogoGroup onClick={() => onNavigate("home")}> 
            <LogoBox>
              <LogoText>APOZ</LogoText>
            </LogoBox>
            <div style={{ marginLeft: "0.75rem" }}>
              <Brand>APOZ</Brand>
              <SubBrand>Asia Pacific Opportunity Zone</SubBrand>
            </div>
          </LogoGroup>

          {/* Desktop Menu */}
          <DesktopMenu>
            {menuItems.map((item) => (
              <MenuButton
                key={item.id}
                active={currentPage === item.id}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </MenuButton>
            ))}
            <LangButton>
              <Globe size={16} />
              <span>EN / 中文</span>
            </LangButton>
          </DesktopMenu>

          {/* Mobile Menu Button */}
          <MobileMenuBtn onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuBtn>
        </Flex>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <MobileMenu>
            {menuItems.map((item) => (
              <MobileMenuItem
                key={item.id}
                active={currentPage === item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </MobileMenuItem>
            ))}
          </MobileMenu>
        )}
      </Container>
    </Nav>
  );
}
