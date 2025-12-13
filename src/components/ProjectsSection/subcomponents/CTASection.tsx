import styled, { useTheme } from "styled-components";


const CTASectionStyled = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: ${({ theme }) => theme.colors.white};
`;
const CTATitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;
const CTADesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
const CTAButtonRow = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;
const CTAButton = styled.button`
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xxxl};
  background: ${({ theme }) => theme.colors.goldAccent};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  border: none;
  transition: ${({ theme }) => theme.transition.button};
  &:hover {
    background: ${({ theme }) => theme.colors.goldAccentHover};
  }
`;

const CTASection: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const theme = useTheme();
  return (
    <CTASectionStyled>
      <CTATitle>Ready to Get Involved?</CTATitle>
      <CTADesc>
        Whether you're interested in residential investment, commercial opportunities, or industrial development, APOZ offers diverse pathways for participation in this transformative project.
      </CTADesc>
      <CTAButtonRow>
        <CTAButton onClick={() => onNavigate("contact")}>Contact Us</CTAButton>
        <CTAButton as="a" href="/brochure.pdf" target="_blank">Download Brochure</CTAButton>
      </CTAButtonRow>
    </CTASectionStyled>
  );
};

export default CTASection;
