
import React from "react";
import PageHero from "../PageHero";
import { Section, Container, Grid } from "./ContactSection.styles";
import SectionHeader from "./subcomponents/SectionHeader";
import InfoList from "./subcomponents/InfoList";
import ContactForm from "./subcomponents/ContactForm";
import MapView from "./subcomponents/MapView";


const ContactSection: React.FC = () => {
  // ...existing code...
  return (
    <>
      <PageHero
        backgroundImage="https://images.unsplash.com/photo-1758799073949-0547a39c12f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidXNpbmVzcyUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Section>
        <Container>
          <SectionHeader
            tag="Get In Touch"
            title="Contact Us"
            subtitle="Ready to invest or learn more about APOZ? Our team is here to answer your questions and provide detailed information about opportunities."
          />
          <Grid>
            <InfoList />
            <ContactForm />
          </Grid>
        </Container>
      </Section>
      <MapView />
    </>
  );
};

export default ContactSection;
