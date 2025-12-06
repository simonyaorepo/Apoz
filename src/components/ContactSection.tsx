import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import styled, { useTheme } from "styled-components";
import { breakpoints } from "../theme";

const SendIcon = styled(Send)`
  margin-left: ${({ theme }) => theme.spacing.xs};
`;

const Section = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  @media (min-width: ${breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
  @media (min-width: ${breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Tag = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 600;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  max-width: 40rem;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  gap: 3rem;
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const InfoTitle = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const InfoCard = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const InfoIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const InfoLabel = styled.div`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 0.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const InfoText = styled.div`
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;
`;

const OfficeHoursCard = styled.div`
  background: ${({ theme }) => theme.colors.gold};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.xl};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const OfficeHoursTitle = styled.div`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 0.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const OfficeHoursText = styled.div`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const FormTitle = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.md};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent};
  }
`;


const StyledButton = styled(Button)`
  width: 100%;
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-radius: ${({ theme }) => theme.radii.lg};
  transition: background ${({ theme }) => theme.transition.button};
  &:hover {
    background: ${({ theme }) => theme.colors.goldSecondary};
    color: ${({ theme }) => theme.colors.background};
  }
`;



export function ContactSection() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Section>
      <Container>
        <Header>
          <Tag>Get In Touch</Tag>
          <Title>Contact Us</Title>
          <Subtitle>
            Ready to invest or learn more about APOZ? Our team is here to answer
            your questions and provide detailed information about opportunities.
          </Subtitle>
        </Header>
        <Grid>
          {/* Contact Information */}
          <div>
            <InfoTitle>Get in Touch</InfoTitle>
            <InfoCard>
              <InfoIcon>
                <MapPin size={24} color={theme.colors.primary} />
              </InfoIcon>
              <div>
                <InfoLabel>Houston Headquarters</InfoLabel>
                <InfoText>
                  Asia Pacific Opportunity Zone (APOZ)<br />
                  123 Innovation Park Drive, Suite 400<br />
                  Houston, TX 77001
                </InfoText>
              </div>
            </InfoCard>
            <InfoCard>
              <InfoIcon>
                <MapPin size={24} color={theme.colors.primary} />
              </InfoIcon>
              <div>
                <InfoLabel>Washington D.C. Office</InfoLabel>
                <InfoText>
                  58 Global Trade Avenue, Apt 12B<br />
                  Washington, D.C. 20001
                </InfoText>
              </div>
            </InfoCard>
            <InfoCard>
              <InfoIcon>
                <Mail size={24} color={theme.colors.primary} />
              </InfoIcon>
              <div>
                <InfoLabel>Email</InfoLabel>
                <InfoText>
                  info@apoz.us<br />
                  dc@apoz.us
                </InfoText>
              </div>
            </InfoCard>
            <InfoCard>
              <InfoIcon>
                <Phone size={24} color={theme.colors.primary} />
              </InfoIcon>
              <div>
                <InfoLabel>Phone</InfoLabel>
                <InfoText>Available upon request</InfoText>
              </div>
            </InfoCard>
            <OfficeHoursCard>
              <OfficeHoursTitle>Office Hours</OfficeHoursTitle>
              <OfficeHoursText>
                Monday - Friday: 9:00 AM - 5:00 PM (CST)<br />
                Saturday - Sunday: By Appointment
              </OfficeHoursText>
            </OfficeHoursCard>
          </div>
          {/* Contact Form */}
          <div>
            <FormTitle>Send Us a Message</FormTitle>
            <StyledForm onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="interest">Area of Interest</Label>
                <StyledSelect
                  id="interest"
                  value={formData.interest}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, interest: e.target.value })}
                >
                  <option value="">Select an option</option>
                  <option value="residential">Residential Investment</option>
                  <option value="commercial">Commercial Investment</option>
                  <option value="industrial">Industrial Investment</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="general">General Inquiry</option>
                </StyledSelect>
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your inquiry..."
                  rows={5}
                />
              </div>
              <StyledButton type="submit">
                Send Message
                <SendIcon size={16} />
              </StyledButton>
            </StyledForm>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
