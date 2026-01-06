
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { InstitutionalNav } from "./components/InstitutionalNav";
import HomePage from "./pages/HomePage";
import { DevelopmentPage } from "./pages/DevelopmentPage";
import MasterPlanPage from "./pages/MasterPlanPage";
import ServicesPage from "./pages/ServicesPage";
import NewsPage from "./pages/NewsPage";
import NewsArticlePage from "./pages/NewsArticlePage";
import InvestmentPage from "./pages/InvestmentPage";
import { InstitutionalFooter } from "./components/InstitutionalFooter";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const NAV_PAGES = [
  { id: "home", path: "/", element: HomePage },
  { id: "master-plan", path: "/master-plan", element: MasterPlanPage },
  { id: "services", path: "/services", element: ServicesPage },
  { id: "investment", path: "/investment", element: InvestmentPage },
  { id: "development", path: "/development", element: DevelopmentPage },
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
  // Handle both exact matches and subsection paths (e.g., /investment/overview)
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPage = pathSegments.length > 0 ? pathSegments[0] : "home";

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
    <AppContainer>
      <InstitutionalNav currentPage={currentPage} onNavigate={handleNavigate} />
      <MainContent>
        <Routes>
          {NAV_PAGES.map(({ id, path, element: Element }) => (
            <Route key={id} path={path} element={<Element onNavigate={handleNavigate} />} />
          ))}
          <Route path="/news/:id" element={<NewsArticlePage />} />
          <Route path="/home/:section" element={<HomePage onNavigate={handleNavigate} />} />
          <Route path="/master-plan/:section" element={<MasterPlanPage onNavigate={handleNavigate} />} />
          <Route path="/services/:section" element={<ServicesPage onNavigate={handleNavigate} />} />
          <Route path="/investment/:section" element={<InvestmentPage onNavigate={handleNavigate} />} />
          <Route path="/development/:section" element={<DevelopmentPage onNavigate={handleNavigate} />} />
          {/* Legacy redirect for old projects path */}
          <Route path="/projects/:section" element={<DevelopmentPage onNavigate={handleNavigate} />} />
        </Routes>
      </MainContent>
      <InstitutionalFooter onNavigate={handleNavigate} />
    </AppContainer>
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
