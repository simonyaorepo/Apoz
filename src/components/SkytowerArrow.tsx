import { ArrowUpRight } from "lucide-react";
import styled from "styled-components";

interface SkytowerArrowProps {
  className?: string;
  onClick?: () => void;
}

const ArrowButton = styled.button`
  position: relative;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1.5px solid ${({ theme }) => theme.colors.gold};
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.12s, transform 0.12s;
  &:hover {
    background: ${({ theme }) => theme.colors.gold};
    transform: scale(1.05);
  }
`;

const StyledArrow = styled(ArrowUpRight)`
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.gold};
  transition: color 0.12s, transform 0.12s;
  ${ArrowButton}:hover & {
    color: ${({ theme }) => theme.colors.white};
    transform: rotate(45deg);
  }
`;

export function SkytowerArrow({ className = "", onClick }: SkytowerArrowProps) {
  return (
    <ArrowButton onClick={onClick} className={className}>
      <StyledArrow strokeWidth={2} />
    </ArrowButton>
  );
}
