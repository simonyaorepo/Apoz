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
  z-index: 50;
  background: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
`;
const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayBorder};
  z-index: 10;
`;
const ModalHeaderInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
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
          <button onClick={onClose} style={{ display: "flex", alignItems: "center", gap: theme.spacing.sm, color: theme.colors.darkBlueAlt }}>
            <X size={24} />
            <span>Close</span>
          </button>
          <div style={{ display: "flex", gap: theme.spacing.md }}>
            <button onClick={onPrevious} style={{ padding: theme.spacing.sm, border: `1px solid ${theme.colors.grayBorder}`, borderRadius: theme.radii.full, color: theme.colors.darkBlueAlt }}>
              <ChevronLeft size={20} />
            </button>
            <button onClick={onNext} style={{ padding: theme.spacing.sm, border: `1px solid ${theme.colors.grayBorder}`, borderRadius: theme.radii.full, color: theme.colors.darkBlueAlt }}>
              <ChevronRight size={20} />
            </button>
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
