import styled from "styled-components";

interface GoldDividerProps {
  fullWidth?: boolean;
  maxWidth?: string;
}

const GreyBackground = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.grey};
  padding: 0;
`;

const DividerWrapper = styled.div<{ $fullWidth?: boolean; $maxWidth?: string }>`
  position: relative;
  width: 100%;
  height: 2px;
  max-width: ${({ $fullWidth, $maxWidth }) => $fullWidth ? 'none' : ($maxWidth || '1400px')};
  margin: 0 auto;
  padding: 0 5vw;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.goldAccent};
`;

const GoldDivider = ({ fullWidth = false, maxWidth }: GoldDividerProps) => {
  return (
    <GreyBackground>
      <DividerWrapper $fullWidth={fullWidth} $maxWidth={maxWidth}>
        <Divider />
      </DividerWrapper>
    </GreyBackground>
  );
};

export default GoldDivider;
