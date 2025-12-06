import { useState } from "react";
import { InstitutionalNav } from "./components/InstitutionalNav";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { NewsPage } from "./pages/NewsPage";
import { ContactPage } from "./pages/ContactPage";
import { InstitutionalFooter } from "./components/InstitutionalFooter";

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
      <InstitutionalNav currentPage={page} onNavigate={p => setPage(p as typeof page)} />
      <main>
        <PageComponent onNavigate={p => setPage(p as typeof page)} />
      </main>
      <InstitutionalFooter onNavigate={p => setPage(p as typeof page)} />
    </>
  );
}

export default App;
