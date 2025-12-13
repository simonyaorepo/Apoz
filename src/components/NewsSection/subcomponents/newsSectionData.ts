// Modular data for NewsSection

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  image: string;
  paragraphs: string[];
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: "Momentum Builds for APOZ: Groundbreaking Set for Fall 2025 Amid Global Investor Interest",
    date: "June 4, 2025",
    location: "Asian Pacific Industrial Park",
    category: "Press Release",
    image: "https://images.unsplash.com/photo-1613928270169-4e4462c75a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGV2ZWxvcG1lbnQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0NjU4ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    paragraphs: [
      "As global awareness of the Asia Pacific Opportunity Zone (APOZ) grows, Token Communities Ltd. (OTC: TKCM) and its subsidiary ASC Global Inc. are preparing for the next major milestone — the official groundbreaking ceremony, scheduled for September 2025 in Greater Houston.",
      "Following successful presentations at the International Trade Center in Houston and the first overseas APOZ conference in Shanghai, interest from both domestic and international investors has surged.",
      "Developers, fund managers, and institutional investors from the U.S., China, Singapore, and beyond are engaging with the APOZ team to explore participation in residential, commercial, and industrial phases of the master-planned project.",
      "David Champ, CEO of Token Communities Ltd., noted: 'What started as a bold vision is rapidly becoming reality. The interest we've received — especially from Asia-Pacific partners — shows that APOZ is positioned to become a global hub for opportunity, investment, and innovation.'",
      "The APOZ site plan includes affordable housing starting at $188,000, logistics and business zones, and green innovation spaces.",
      "With support from local government agencies and international stakeholders, the project is moving swiftly through final planning stages.",
      "Stay tuned for more announcements about investor tours, groundbreaking details, and upcoming events in Taiwan and Singapore.",
      "For partnership and investment inquiries, please contact: info@apoz.us",
    ],
  },
  {
    id: 2,
    title: "APOZ Project Unveiled at ITC Conference: Affordable Housing and Economic Growth in Houston",
    date: "May 24, 2025",
    location: "Asian Pacific Industrial Park",
    category: "Event",
    image: "https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    paragraphs: [
      "On May 23, 2025, Token Communities Ltd. (OTC PINK: TKCM), through its subsidiary ASC Global Inc., presented the Asia Pacific Opportunity Zone (APOZ) Project at the International Trade Center (ITC) Board of Directors Inauguration Ceremony in Houston.",
      "The APOZ Project is a master-planned community set to commence construction in Q4 2025.",
      "It will feature an industrial park, business center, commercial section, and residential subdivisions.",
      "Notably, the development aims to offer high-quality, modern single-family homes starting at $188,000 for three-bedroom units, with multi-family homes also in the planning stages.",
      "The initiative addresses the significant demand for affordable housing in the Greater Houston area.",
      "ASC Global Inc. is committed to collaborating with the City of Houston and the ITC to meet this growing need.",
    ],
  },
  // ...add remaining articles as needed
];
