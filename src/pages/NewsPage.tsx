import { useTheme } from "styled-components";
import { useState } from "react";
import { Calendar, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PremiumCard } from "../components/PremiumCard";



const NEWS_ARTICLES = [
  // ...existing articles...
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
  {
    id: 3,
    title: "Token Communities Ltd. Hosts First Overseas APOZ Conference in Shanghai",
    date: "May 20, 2025",
    location: "Asian Pacific Industrial Park",
    category: "Event",
    image: "https://images.unsplash.com/photo-1505624198937-c704aff72608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjQ2NTg4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    paragraphs: [
      "On May 20, 2025, Token Communities Ltd. (OTC: TKCM), through its subsidiary ASC Global Inc., hosted its inaugural overseas APOZ conference at the Westin Bund Center in Shanghai.",
      "The event aimed to introduce the APOZ initiative to the Asia Pacific business community, highlighting investment opportunities and fostering regional engagement.",
      "CEO David Champ announced plans for additional conferences in Taiwan, Singapore, and other Asian cities, citing significant interest from the region.",
      "These events are part of the company's strategy to expand the APOZ initiative within the Asia Pacific markets.",
      "Project director Leo Lei indicated that final site-plan modifications are underway with assistance from local government agencies.",
      "A groundbreaking ceremony is anticipated for September 2025, marking a significant milestone in the project's development and implementation.",
    ],
  },
];

export function NewsPage() {
  const theme = useTheme();
  const [selectedArticle, setSelectedArticle] = useState<typeof NEWS_ARTICLES[0] | null>(null);
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Press Release", "Event"];

  const handleNext = () => {
    if (!selectedArticle) return;
    const currentIndex = NEWS_ARTICLES.findIndex(a => a.id === selectedArticle.id);
    const nextIndex = (currentIndex + 1) % NEWS_ARTICLES.length;
    setSelectedArticle(NEWS_ARTICLES[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedArticle) return;
    const currentIndex = NEWS_ARTICLES.findIndex(a => a.id === selectedArticle.id);
    const prevIndex = (currentIndex - 1 + NEWS_ARTICLES.length) % NEWS_ARTICLES.length;
    setSelectedArticle(NEWS_ARTICLES[prevIndex]);
  };

  // For brevity, the modal and grid are not fully styled with styled-components, but you can expand as needed.

  if (selectedArticle) {
    return (
      <div style={{ position: "fixed", inset: 0, zIndex: 50, background: theme.colors.white, overflowY: "auto" }}>
        {/* Article Modal */}
        <div style={{ minHeight: "100vh" }}>
          {/* Header */}
          <div style={{ position: "sticky", top: 0, background: theme.colors.white, borderBottom: `1px solid ${theme.colors.grayBorder}`, zIndex: 10 }}>
            <div style={{ maxWidth: theme.maxWidth.home, margin: "0 auto", padding: theme.spacing.lg, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <button
                onClick={() => setSelectedArticle(null)}
                style={{ display: "flex", alignItems: "center", gap: theme.spacing.sm, color: theme.colors.darkBlueAlt }}
              >
                <X size={24} />
                <span>Close</span>
              </button>
              <div style={{ display: "flex", gap: theme.spacing.md }}>
                <button
                  onClick={handlePrevious}
                  style={{ padding: theme.spacing.sm, border: `1px solid ${theme.colors.grayBorder}`, borderRadius: theme.radii.full, color: theme.colors.darkBlueAlt }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  style={{ padding: theme.spacing.sm, border: `1px solid ${theme.colors.grayBorder}`, borderRadius: theme.radii.full, color: theme.colors.darkBlueAlt }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article style={{ maxWidth: 900, margin: "0 auto", padding: `${theme.spacing.xxxl} ${theme.spacing.lg}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: theme.spacing.md, marginBottom: theme.spacing.lg, fontSize: theme.fontSizes.md }}>
              <span style={{ display: "flex", alignItems: "center", gap: theme.spacing.sm, color: theme.colors.goldAccent }}>
                <Calendar size={16} />
                {selectedArticle.date}
              </span>
              <span style={{ color: theme.colors.grayBorder }}>•</span>
              <span style={{ display: "flex", alignItems: "center", gap: theme.spacing.sm, color: theme.colors.grayAccent }}>
                <MapPin size={16} />
                {selectedArticle.location}
              </span>
            </div>
            <h1 style={{ color: theme.colors.darkBlueAlt, fontSize: theme.fontSizes.h2, lineHeight: 1.1, marginBottom: theme.spacing.xl }}>{selectedArticle.title}</h1>
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              style={{ width: "100%", aspectRatio: theme.aspect.wide, objectFit: "cover", borderRadius: theme.radii.card, marginBottom: theme.spacing.xxl }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {selectedArticle.paragraphs.map((paragraph, index) => (
                <p key={index} style={{ color: theme.colors.darkBlueAlt, fontSize: theme.fontSizes.lg, lineHeight: 1.8 }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: theme.spacing.xxxl, height: "60vh", background: theme.colors.darkBlueAlt, display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1758799073949-0547a39c12f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidXNpbmVzcyUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080')", backgroundSize: "cover", backgroundPosition: "center", opacity: theme.opacity.low }} />
        <div style={{ position: "relative", maxWidth: theme.maxWidth.home, margin: "0 auto", padding: `0 ${theme.spacing.lg}` }}>
          <h1 style={{ color: theme.colors.white, fontSize: theme.fontSizes.hero, lineHeight: 1.05, marginBottom: theme.spacing.mb2 }}>News</h1>
          <div style={{ width: theme.spacing.dividerW, height: theme.spacing.dividerH, background: theme.colors.goldAccent }} />
        </div>
      </section>

      {/* FILTER TABS */}
      <section style={{ padding: `${theme.spacing.xl} 0`, background: theme.colors.white, borderBottom: `1px solid ${theme.colors.grayBorder}` }}>
        <div style={{ maxWidth: theme.maxWidth.home, margin: "0 auto", padding: `0 ${theme.spacing.lg}` }}>
          <div style={{ display: "flex", gap: theme.spacing.xl, justifyContent: "center" }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{ padding: `${theme.spacing.md} ${theme.spacing.xl}`, borderRadius: theme.radii.full, background: filter === f ? theme.colors.goldAccent : theme.colors.white, color: filter === f ? theme.colors.darkBlueAlt : theme.colors.grayAccent, border: filter === f ? "none" : `1px solid ${theme.colors.grayBorder}`, transition: theme.transition.button }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS GRID */}
      <section style={{ padding: `${theme.spacing.section} 0`, background: theme.colors.backgroundAlt }}>
        <div style={{ maxWidth: theme.maxWidth.home, margin: "0 auto", padding: `0 ${theme.spacing.lg}` }}>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(3, 1fr)`, gap: theme.spacing.xxl }}>
            {NEWS_ARTICLES.filter(a => filter === "All" || a.category === filter).map((article) => (
              <PremiumCard
                key={article.id}
                image={article.image}
                title={article.title}
                meta={article.date}
                onClick={() => setSelectedArticle(article)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
