import styled, { useTheme } from "styled-components";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";



const HOUSTON_OFFICE = {
  title: "Houston Headquarters",
  line1: "Asia Pacific Opportunity Zone (APOZ)",
  line2: "123 Innovation Park Drive, Suite 400",
  line3: "Houston, TX 77001",
  email: "info@apoz.us",
};

const DC_OFFICE = {
  title: "Washington D.C. Office",
  line1: "58 Global Trade Avenue, Apt 12B",
  line2: "Washington, D.C. 20001",
  email: "dc@apoz.us",
};

const HeroSection = styled.section`
  position: relative;
  min-height: ${({ theme }) => theme.spacing.xxxl};
  height: 60vh;
  background: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  align-items: center;
`;
const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1758799073949-0547a39c12f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidXNpbmVzcyUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080');
  background-size: cover;
  background-position: center;
  opacity: ${({ theme }) => theme.opacity.low};
`;
const HeroContent = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;
const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.hero};
  line-height: 1.05;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
const HeroDivider = styled.div`
  width: ${({ theme }) => theme.spacing.dividerW};
  height: ${({ theme }) => theme.spacing.dividerH};
  background: ${({ theme }) => theme.colors.gold};
`;
const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
`;
const SectionContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
`;
const OfficeCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: ${({ theme }) => theme.spacing.card};
  border-radius: ${({ theme }) => theme.radii.card};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
const OfficeIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
const OfficeTitle = styled.h3`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
const OfficeText = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
`;
const OfficeEmailRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.grayBorder};
`;
const OfficeEmail = styled.a`
  color: ${({ theme }) => theme.colors.goldAccent};
  transition: color ${({ theme }) => theme.transition.fast};
  &:hover {
    color: ${({ theme }) => theme.colors.goldAccentHover};
  }
`;
const OfficeHoursCard = styled.div`
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.card};
  border-radius: ${({ theme }) => theme.radii.card};
`;
const OfficeHoursTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
const OfficeHoursText = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
`;
const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
const MapSection = styled.section`
  height: ${({ theme }) => theme.spacing.xxxl};
  background: ${({ theme }) => theme.colors.mutedForeground}1A;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MapContent = styled.div`
  text-align: center;
`;

export function ContactPage() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      {/* HERO */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Contact Us</HeroTitle>
          <HeroDivider />
        </HeroContent>
      </HeroSection>

      {/* CONTACT SECTION */}
      <Section style={{ background: theme.colors.white }}>
        <SectionContainer>
          <Grid>
            {/* Left: Office Info */}
            <div>
              <FormTitle>Our Offices</FormTitle>
              <OfficeCard>
                <div style={{ display: "flex", alignItems: "flex-start", gap: theme.spacing.md, marginBottom: theme.spacing.lg }}>
                  <OfficeIcon><MapPin size={28} color={theme.colors.darkBlueAlt} /></OfficeIcon>
                  <div>
                    <OfficeTitle>{HOUSTON_OFFICE.title}</OfficeTitle>
                    <OfficeText>{HOUSTON_OFFICE.line1}</OfficeText>
                    <OfficeText>{HOUSTON_OFFICE.line2}</OfficeText>
                    <OfficeText>{HOUSTON_OFFICE.line3}</OfficeText>
                  </div>
                </div>
                <OfficeEmailRow>
                  <Mail size={20} color={theme.colors.goldAccent} />
                  <OfficeEmail href={`mailto:${HOUSTON_OFFICE.email}`}>{HOUSTON_OFFICE.email}</OfficeEmail>
                </OfficeEmailRow>
              </OfficeCard>
              <OfficeCard>
                <div style={{ display: "flex", alignItems: "flex-start", gap: theme.spacing.md, marginBottom: theme.spacing.lg }}>
                  <OfficeIcon><MapPin size={28} color={theme.colors.darkBlueAlt} /></OfficeIcon>
                  <div>
                    <OfficeTitle>{DC_OFFICE.title}</OfficeTitle>
                    <OfficeText>{DC_OFFICE.line1}</OfficeText>
                    <OfficeText>{DC_OFFICE.line2}</OfficeText>
                  </div>
                </div>
                <OfficeEmailRow>
                  <Mail size={20} color={theme.colors.goldAccent} />
                  <OfficeEmail href={`mailto:${DC_OFFICE.email}`}>{DC_OFFICE.email}</OfficeEmail>
                </OfficeEmailRow>
              </OfficeCard>
              <OfficeHoursCard>
                <div style={{ display: "flex", alignItems: "center", gap: theme.spacing.sm, marginBottom: theme.spacing.md }}>
                  <Phone size={24} color={theme.colors.goldAccent} />
                  <OfficeHoursTitle>Office Hours</OfficeHoursTitle>
                </div>
                <OfficeHoursText>Monday - Friday: 9:00 AM - 5:00 PM (CST)</OfficeHoursText>
                <OfficeHoursText>Saturday - Sunday: By Appointment</OfficeHoursText>
              </OfficeHoursCard>
            </div>
            {/* Right: Contact Form */}
            <div>
              <FormTitle>Send Us a Message</FormTitle>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: theme.spacing.xl }}>
                <div>
                  <label style={{ display: "block", color: theme.colors.darkBlueAlt, marginBottom: theme.spacing.xs, fontSize: theme.fontSizes.md }}>Full Name *</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: theme.colors.darkBlueAlt, marginBottom: theme.spacing.xs, fontSize: theme.fontSizes.md }}>Email Address *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: theme.colors.darkBlueAlt, marginBottom: theme.spacing.xs, fontSize: theme.fontSizes.md }}>Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: theme.colors.darkBlueAlt, marginBottom: theme.spacing.xs, fontSize: theme.fontSizes.md }}>Message *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your inquiry..."
                    rows={8}
                  />
                </div>
                <Button type="submit" style={{ width: "100%", height: theme.spacing.xxxl, background: theme.colors.goldAccent, color: theme.colors.darkBlueAlt, fontSize: theme.fontSizes.lg }}>
                  Send Message
                  <Send style={{ marginLeft: theme.spacing.sm }} size={20} />
                </Button>
              </form>
            </div>
          </Grid>
        </SectionContainer>
      </Section>

      {/* MAP PLACEHOLDER */}
      <MapSection>
        <MapContent>
          <MapPin size={64} color={theme.colors.goldAccent} style={{ marginBottom: theme.spacing.lg }} />
          <p style={{ color: theme.colors.grayAccent, fontSize: theme.fontSizes.lg }}>Map View</p>
        </MapContent>
      </MapSection>
    </div>
  );
}
