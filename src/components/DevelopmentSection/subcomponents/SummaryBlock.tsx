import React from "react";
import styled from "styled-components";

const Block = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $reverse }) => $reverse ? '1fr 1fr' : '1fr 1fr'};
  gap: ${({ theme }) => theme.spacing.xxxl};
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ImageWrapper = styled.div<{ $reverse?: boolean }>`
  order: ${({ $reverse }) => $reverse ? 2 : 1};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const TextContent = styled.div<{ $reverse?: boolean }>`
  order: ${({ $reverse }) => $reverse ? 1 : 2};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

interface SummaryBlockProps {
  content: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const SummaryBlock: React.FC<SummaryBlockProps> = ({ content, imageSrc, imageAlt, reverse = false }) => {
  return (
    <Block $reverse={reverse}>
      <ImageWrapper $reverse={reverse}>
        <Image src={imageSrc} alt={imageAlt} />
      </ImageWrapper>
      <TextContent $reverse={reverse}>
        {content.map((paragraph, idx) => (
          <Paragraph key={idx}>{paragraph}</Paragraph>
        ))}
      </TextContent>
    </Block>
  );
};

export default SummaryBlock;
