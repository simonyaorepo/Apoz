
import styled from "styled-components";

interface FinalContactProps {
  onNavigate: (page: string) => void;
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.darkBlueAlt};
  border-top: 1px solid ${({ theme }) => theme.colors.goldAccent}20;
  padding: 6rem 0;
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 36px;
  margin-bottom: 24px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: 20px;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactButton = styled.button`
  font-size: 20px;
  padding: 1.5rem 3rem;
  background: ${({ theme }) => theme.colors.goldAccent};
  color: ${({ theme }) => theme.colors.darkBlueAlt};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 12px ${({ theme }) => theme.colors.goldAccent}44;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.goldAccentHover || theme.colors.goldAccent};
  }
`;

const FinalContact: React.FC<FinalContactProps> = ({ onNavigate }) => (
  <Wrapper>
    <Title>Ready to Get Involved?</Title>
    <Description>
      Contact us to learn about investment opportunities and partnership possibilities
    </Description>
    <ContactButton onClick={() => onNavigate('contact')}>
      Contact Us
    </ContactButton>
  </Wrapper>
);

export default FinalContact;
