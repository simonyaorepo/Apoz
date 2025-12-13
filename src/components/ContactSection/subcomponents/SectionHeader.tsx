import React from "react";
import { Header, Tag, Title, Subtitle } from "../ContactSection.styles";

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ tag, title, subtitle }) => (
  <Header>
    <Tag>{tag}</Tag>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Header>
);

export default SectionHeader;
