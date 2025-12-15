import styled, { useTheme } from "styled-components";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import NewsArticle from "./NewsArticle";

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  image: string;
  paragraphs: string[];
}

interface NewsModalProps {
  article: NewsArticle;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}


const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  background: rgba(255,255,255,0.98);
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayBorder};
  z-index: ${({ theme }) => theme.zIndex.overlay + 1};
`;

const ModalHeaderInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
`;

const ModalButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.darkBlueAlt};
  background: ${({ theme }) => theme.colors.white};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  transition: ${({ theme }) => theme.transition.button};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const NavButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.darkBlueAlt};
  color: ${({ theme }) => theme.colors.white};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.button};
  &:hover {
    background: ${({ theme }) => theme.colors.goldAccent};
    color: ${({ theme }) => theme.colors.darkBlueAlt};
  }
  &:last-child {
    margin-right: 0;
  }
`;

const ModalContent = styled.article`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.lg};
`;

const NewsModal = ({ article, onClose, onNext, onPrevious }: NewsModalProps) => {
  const theme = useTheme();
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, onNext, onPrevious]);

  return (
    <ModalOverlay>
      <ModalHeader>
        <ModalHeaderInner>
          <ModalButton onClick={onClose}>
            <X size={24} color="inherit" />
            <span>Close</span>
          </ModalButton>
          <div style={{ display: "flex", gap: 0 }}>
            <NavButton onClick={onPrevious}>
              <ChevronLeft size={20} color="inherit" />
            </NavButton>
            <NavButton onClick={onNext}>
              <ChevronRight size={20} color="inherit" />
            </NavButton>
          </div>
        </ModalHeaderInner>
      </ModalHeader>
      <ModalContent>
        <NewsArticle article={article} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default NewsModal;
