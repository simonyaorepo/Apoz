
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { InstitutionalNav } from "./components/InstitutionalNav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LeadershipPage from "./pages/LeadershipPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import NewsPage from "./pages/NewsPage";
import NewsArticlePage from "./pages/NewsArticlePage";
import InvestmentPage from "./pages/InvestmentPage";
import { InstitutionalFooter } from "./components/InstitutionalFooter";

const NAV_PAGES = [
  { id: "home", path: "/", element: HomePage },
  { id: "about", path: "/about", element: AboutPage },
  { id: "leadership", path: "/leadership", element: LeadershipPage },
  { id: "projects", path: "/projects", element: ProjectsPage },
  { id: "investment", path: "/investment", element: InvestmentPage },
  { id: "news", path: "/news", element: NewsPage },
];

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Determine current page id from path
  const currentPage = NAV_PAGES.find(p => p.path === location.pathname)?.id || "home";

  // Navigation handler for nav/footer
  const handleNavigate = (page: string) => {
    // If it's a path (contains /), navigate directly
    if (page.includes('/')) {
      navigate(page);
      return;
    }
    // Otherwise, look up in NAV_PAGES
    const found = NAV_PAGES.find(p => p.id === page);
    if (found) navigate(found.path);
  };

  return (
    <>
      <InstitutionalNav currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        <Routes>
          {NAV_PAGES.map(({ id, path, element: Element }) => (
            <Route key={id} path={path} element={<Element onNavigate={handleNavigate} />} />
          ))}
          <Route path="/news/:id" element={<NewsArticlePage />} />
          <Route path="/about/:section" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="/projects/:section" element={<ProjectsPage onNavigate={handleNavigate} />} />
        </Routes>
      </main>
      <InstitutionalFooter onNavigate={handleNavigate} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
