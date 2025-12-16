
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { InstitutionalNav } from "./components/InstitutionalNav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import NewsPage from "./pages/NewsPage";
import NewsArticlePage from "./pages/NewsArticlePage";
import ContactPage from "./pages/ContactPage";
import { InstitutionalFooter } from "./components/InstitutionalFooter";

const NAV_PAGES = [
  { id: "home", path: "/", element: HomePage },
  { id: "about", path: "/about", element: AboutPage },
  { id: "projects", path: "/projects", element: ProjectsPage },
  { id: "news", path: "/news", element: NewsPage },
  { id: "contact", path: "/contact", element: ContactPage },
];

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  // Determine current page id from path
  const currentPage = NAV_PAGES.find(p => p.path === location.pathname)?.id || "home";

  // Navigation handler for nav/footer
  const handleNavigate = (page: string) => {
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
