import styled from "styled-components";

interface GoldButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.goldAccent};
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 12px 32px;
  border: none;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  
  &::after {
    content: '→';
    font-size: 1em;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    background: ${({ theme }) => theme.colors.goldAccentHover};
    transform: translateX(3px);
  }
  
  &:hover::after {
    transform: translateX(3px);
  }
`;

const GoldButton: React.FC<GoldButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default GoldButton;
