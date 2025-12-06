
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { NewsPage } from "./pages/NewsPage";
import { ContactPage } from "./pages/ContactPage";
import { Footer } from "./components/Footer";

const PAGES = {
  home: HomePage,
  about: AboutPage,
  projects: ProjectsPage,
  news: NewsPage,
  contact: ContactPage,
};

function App() {
  const [page, setPage] = useState<"home" | "about" | "projects" | "news" | "contact">("home");
  const PageComponent = PAGES[page];

  return (
    <>
      <Navigation currentPage={page} onNavigate={p => setPage(p as typeof page)} />
      <main style={{ marginTop: "5rem" }}>
        <PageComponent onNavigate={p => setPage(p as typeof page)} />
      </main>
      <Footer onNavigate={p => setPage(p as typeof page)} />
    </>
  );
}

export default App;
