import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Globe } from 'lucide-react';

const LangButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.foreground};
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.2s;
  padding: 0.5rem;
  
  & > svg {
    color: ${props => props.theme.colors.gold};
  }
  
  &:hover {
    color: ${props => props.theme.colors.gold};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    justify-content: flex-start;
    padding: 0.75rem 0;
  }
`;

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <LangButton onClick={toggleLanguage}>
      <Globe size={16} />
      <span>EN / 中文</span>
    </LangButton>
  );
};
