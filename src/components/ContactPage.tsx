import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../theme";

// ============================================
// CONTACT PAGE CONTENT BLOCKS
// ============================================
// ...existing content blocks...
const CONTACT_HERO = {
  tag: "Get In Touch",
  heroBlock: "Contact Us",
  descriptionBlock:
    "Ready to invest or learn more about APOZ? Our team is here to answer your questions and provide detailed information about opportunities.",
};

const HOUSTON_OFFICE = {
  titleBlock: "Houston Headquarters",
  addressBlock1: "Asia Pacific Opportunity Zone (APOZ)",
  addressBlock2: "123 Innovation Park Drive, Suite 400",
  addressBlock3: "Houston, TX 77001",
  emailBlock: "info@apoz.us",
};

const DC_OFFICE = {
  titleBlock: "Washington D.C. Office",
  addressBlock1: "58 Global Trade Avenue, Apt 12B",
  addressBlock2: "Washington, D.C. 20001",
  emailBlock: "dc@apoz.us",
};

const OFFICE_HOURS = {
  titleBlock: "Office Hours",
  hoursBlock1: "Monday - Friday: 9:00 AM - 5:00 PM (CST)",
  hoursBlock2: "Saturday - Sunday: By Appointment",
};

const CONTACT_FORM = {
  titleBlock: "Send Us a Message",
  nameLabel: "Full Name *",
  namePlaceholder: "Enter your name",
  emailLabel: "Email Address *",
  emailPlaceholder: "your.email@example.com",
  phoneLabel: "Phone Number",
  phonePlaceholder: "+1 (555) 123-4567",
  interestLabel: "Area of Interest",
  interestOptions: [
    { value: "", label: "Select an option" },
    { value: "residential", label: "Residential Investment" },
    { value: "commercial", label: "Commercial Investment" },
    { value: "industrial", label: "Industrial Investment" },
    { value: "partnership", label: "Partnership Opportunities" },
    { value: "general", label: "General Inquiry" },
  ],
  messageLabel: "Message *",
  messagePlaceholder: "Tell us about your inquiry...",
  submitButton: "Send Message",
};

const PARTNERSHIP_CTA = {
  titleBlock: "Partnership Opportunities",
  descriptionBlock:
    "Whether you're a developer, investor, or community leader, there's a place for you in the APOZ vision. Contact us to learn about active bids, investment opportunities, or how to get involved in shaping the next chapter of APOZ.",
  button1: "Download Prospectus",
  button2: "Schedule a Meeting",
};

// =====================
// Styled Components
// =====================
const Section = styled.section`
  position: relative;
  padding: 6rem 0;
  background: ${({ theme }) => theme.gradients.hero};
`;

const Container = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: ${breakpoints.sm}) {
    padding: 0 1.5rem;
  }
  @media (min-width: ${breakpoints.lg}) {
    padding: 0 2rem;
  }
`;

const HeroTag = styled.div`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.accent};
  backdrop-filter: blur(4px);
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  margin-bottom: 2rem;
`;

const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const Divider = styled.div`
  width: 4rem;
  height: 0.25rem;
  background: ${({ theme }) => theme.colors.accent};
  margin: 0 auto 2rem auto;
  border-radius: 2px;
`;

const HeroParagraph = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  max-width: 48rem;
  margin: 0 auto 1.5rem auto;
  line-height: 1.7;
`;


// Contact Info Card
const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 2rem;
`;

const InfoIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: ${({ theme }) => theme.gradients.hero};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const InfoTitle = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const InfoText = styled.div`
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;
`;

const InfoEmail = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  &:hover {
    color: #AA8A2E;
  }
`;

const OfficeHoursCard = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.foreground};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: 2rem;
`;

const OfficeHoursTitle = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const OfficeHoursText = styled.div`
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;
`;

// Form Section
const FormSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 6rem 0;
`;

const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
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
  height: 3rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-radius: ${({ theme }) => theme.radii.lg};
  &:hover {
    background: #AA8A2E;
    color: ${({ theme }) => theme.colors.background};
  }
`;

// Partnership CTA Section
const PartnershipSection = styled.section`
  background: ${({ theme }) => theme.colors.card};
  padding: 6rem 0;
`;

const PartnershipTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const PartnershipDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 2rem;
  line-height: 1.7;
`;

interface PartnershipButtonProps {
  $variant: 'primary' | 'secondary';
}
const PartnershipButton = styled.button<PartnershipButtonProps>`
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme, $variant }) =>
    $variant === "primary"
      ? theme.colors.primary
      : "transparent"};
  color: ${({ theme, $variant }) =>
    $variant === "primary"
      ? theme.colors.background
      : theme.colors.primary};
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.background};
  }
  margin-right: 1rem;
`;

export function ContactPage() {
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
    <div>
      {/* Hero Section */}
      <Section>
        <Container>
          <HeroTag>
            <span>{CONTACT_HERO.tag}</span>
          </HeroTag>
          <HeroTitle>{CONTACT_HERO.heroBlock}</HeroTitle>
          <Divider />
          <HeroParagraph>{CONTACT_HERO.descriptionBlock}</HeroParagraph>
        </Container>
      </Section>

      {/* Contact Section */}
      <FormSection>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            {/* Contact Information */}
            <div>
              <FormTitle>Our Offices</FormTitle>
              <InfoCard>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  <InfoIcon>
                    <MapPin size={28} color="#D4AF37" />
                  </InfoIcon>
                  <div>
                    <InfoTitle>{HOUSTON_OFFICE.titleBlock}</InfoTitle>
                    <InfoText>
                      <p>{HOUSTON_OFFICE.addressBlock1}</p>
                      <p>{HOUSTON_OFFICE.addressBlock2}</p>
                      <p>{HOUSTON_OFFICE.addressBlock3}</p>
                    </InfoText>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <InfoIcon>
                    <Mail size={28} color="#D4AF37" />
                  </InfoIcon>
                  <div>
                    <InfoTitle>Email</InfoTitle>
                    <InfoEmail href={`mailto:${HOUSTON_OFFICE.emailBlock}`}>{HOUSTON_OFFICE.emailBlock}</InfoEmail>
                  </div>
                </div>
              </InfoCard>
              <InfoCard>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  <InfoIcon>
                    <MapPin size={28} color="#D4AF37" />
                  </InfoIcon>
                  <div>
                    <InfoTitle>{DC_OFFICE.titleBlock}</InfoTitle>
                    <InfoText>
                      <p>{DC_OFFICE.addressBlock1}</p>
                      <p>{DC_OFFICE.addressBlock2}</p>
                    </InfoText>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <InfoIcon>
                    <Mail size={28} color="#D4AF37" />
                  </InfoIcon>
                  <div>
                    <InfoTitle>Email</InfoTitle>
                    <InfoEmail href={`mailto:${DC_OFFICE.emailBlock}`}>{DC_OFFICE.emailBlock}</InfoEmail>
                  </div>
                </div>
              </InfoCard>
              <OfficeHoursCard>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <Phone size={24} color="#D4AF37" />
                  <OfficeHoursTitle>{OFFICE_HOURS.titleBlock}</OfficeHoursTitle>
                </div>
                <OfficeHoursText>
                  <p>{OFFICE_HOURS.hoursBlock1}</p>
                  <p>{OFFICE_HOURS.hoursBlock2}</p>
                </OfficeHoursText>
              </OfficeHoursCard>
            </div>

            {/* Contact Form */}
            <div>
              <FormTitle>{CONTACT_FORM.titleBlock}</FormTitle>
              <StyledForm onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name">{CONTACT_FORM.nameLabel}</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={CONTACT_FORM.namePlaceholder}
                  />
                </div>
                <div>
                  <Label htmlFor="email">{CONTACT_FORM.emailLabel}</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={CONTACT_FORM.emailPlaceholder}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{CONTACT_FORM.phoneLabel}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={CONTACT_FORM.phonePlaceholder}
                  />
                </div>
                <div>
                  <Label htmlFor="interest">{CONTACT_FORM.interestLabel}</Label>
                  <StyledSelect
                    id="interest"
                    value={formData.interest}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, interest: e.target.value })}
                  >
                    {CONTACT_FORM.interestOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </StyledSelect>
                </div>
                <div>
                  <Label htmlFor="message">{CONTACT_FORM.messageLabel}</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={CONTACT_FORM.messagePlaceholder}
                    rows={6}
                  />
                </div>
                <StyledButton type="submit">
                  {CONTACT_FORM.submitButton}
                  <Send style={{ marginLeft: "0.5rem" }} size={16} />
                </StyledButton>
              </StyledForm>
            </div>
          </div>
        </Container>
      </FormSection>

      {/* Partnership CTA Section */}
      <PartnershipSection>
        <Container style={{ textAlign: "center" }}>
          <PartnershipTitle>{PARTNERSHIP_CTA.titleBlock}</PartnershipTitle>
          <PartnershipDesc>{PARTNERSHIP_CTA.descriptionBlock}</PartnershipDesc>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <PartnershipButton $variant="primary">
              {PARTNERSHIP_CTA.button1}
            </PartnershipButton>
            <PartnershipButton $variant="secondary">
              {PARTNERSHIP_CTA.button2}
            </PartnershipButton>
          </div>
        </Container>
      </PartnershipSection>
    </div>
  );
}
