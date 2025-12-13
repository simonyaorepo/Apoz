

import ContactSection from "../components/ContactSection/ContactSection";

import type { ComponentProps } from "react";
type ContactSectionProps = ComponentProps<typeof ContactSection>;

export default function ContactPage(props: ContactSectionProps) {
  return <ContactSection {...props} />;
}
