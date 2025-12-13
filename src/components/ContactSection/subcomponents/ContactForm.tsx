
import React, { useState } from "react";
import { Send } from "lucide-react";
import styled, { useTheme } from "styled-components";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button as BaseButton } from "../../ui/button";
import { FormTitle, StyledForm, Label, StyledSelect } from "../ContactSection.styles";

const SubmitButton = styled(BaseButton)`
  width: 100%;
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

const SendIcon = styled(Send)`
  margin-left: ${({ theme }) => theme.spacing.xs};
`;

const ContactForm: React.FC = () => {
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
    // TODO: handle form submission
    console.log("Form submitted:", formData);
  };

  return (
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
        <SubmitButton type="submit">
          Send Message
          <SendIcon size={16} />
        </SubmitButton>
      </StyledForm>
    </div>
  );
};

export default ContactForm;
