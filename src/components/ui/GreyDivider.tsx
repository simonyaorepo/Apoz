import styled from "styled-components";

interface GreyDividerProps {
  fullWidth?: boolean;
  maxWidth?: string;
}

const DividerWrapper = styled.div<{ $fullWidth?: boolean; $maxWidth?: string }>`
  position: relative;
  width: 100%;
  height: 1px;
  max-width: ${({ $fullWidth, $maxWidth }) => $fullWidth ? 'none' : ($maxWidth || '1400px')};
  margin: 0 auto;
  padding: 0 5vw;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
`;

const GreyDivider = ({ fullWidth = false, maxWidth }: GreyDividerProps) => {
  return (
    <DividerWrapper $fullWidth={fullWidth} $maxWidth={maxWidth}>
      <Divider />
    </DividerWrapper>
  );
};

export default GreyDivider;
