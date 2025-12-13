import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { useTheme } from "styled-components";
import {
  InfoTitle,
  InfoCard,
  InfoIcon,
  InfoLabel,
  InfoText,
  OfficeHoursCard,
  OfficeHoursTitle,
  OfficeHoursText
} from "../ContactSection.styles";

const offices = [
  {
    label: "Houston Headquarters",
    address: [
      "Asia Pacific Opportunity Zone (APOZ)",
      "123 Innovation Park Drive, Suite 400",
      "Houston, TX 77001"
    ],
    emails: ["info@apoz.us"],
  },
  {
    label: "Washington D.C. Office",
    address: [
      "58 Global Trade Avenue, Apt 12B",
      "Washington, D.C. 20001"
    ],
    emails: ["dc@apoz.us"],
  }
];

const InfoList: React.FC = () => {
  const theme = useTheme();
  return (
    <div>
      <InfoTitle>Get in Touch</InfoTitle>
      {offices.map((office, idx) => (
        <InfoCard key={office.label}>
          <InfoIcon>
            <MapPin size={24} color={theme.colors.primary} />
          </InfoIcon>
          <div>
            <InfoLabel>{office.label}</InfoLabel>
            <InfoText>
              {office.address.map((line, i) => (
                <React.Fragment key={i}>{line}<br /></React.Fragment>
              ))}
            </InfoText>
            {office.emails.map((email, i) => (
              <InfoText key={i}>{email}</InfoText>
            ))}
          </div>
        </InfoCard>
      ))}
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
  );
};

export default InfoList;
