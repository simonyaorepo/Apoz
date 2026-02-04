import styled from "styled-components";
import type { ButtonHTMLAttributes } from "react";

const StyledButton = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.pill};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: none;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.goldAccentHover};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const Button = StyledButton;
