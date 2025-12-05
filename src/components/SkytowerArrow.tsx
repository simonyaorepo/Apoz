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
  border-radius: 999px;
  border: 1.5px solid #C9A24D;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.12s, transform 0.12s;
  &:hover {
    background: #C9A24D;
    transform: scale(1.05);
  }
`;

const StyledArrow = styled(ArrowUpRight)`
  width: 1.25rem;
  height: 1.25rem;
  color: #C9A24D;
  transition: color 0.12s, transform 0.12s;
  ${ArrowButton}:hover & {
    color: #fff;
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
