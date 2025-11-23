import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import UseCases from './pages/UseCases';
import UseCaseDetail from './pages/UseCaseDetail';
import SaaS from './pages/SaaS';
import SaasCategory from './pages/SaasCategory';
import SaasProductDetail from './pages/SaasProductDetail';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import Integrations from './pages/Integrations';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import ROICalculator from './pages/ROICalculator';
import Pricing from './pages/Pricing';
import Docs from './pages/Docs';
import DocDetail from './pages/DocDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import ChatWidget from './components/ChatWidget';
import ScrollToTop from './components/ScrollToTop';

// Scroll to top on route change
const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTopOnRouteChange />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/use-cases/:id" element={<UseCaseDetail />} />
            <Route path="/saas" element={<SaaS />} />
            <Route path="/saas/:categoryId" element={<SaasCategory />} />
            <Route path="/saas/:categoryId/:productId" element={<SaasProductDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:industryId" element={<IndustryDetail />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/roi-calculator" element={<ROICalculator />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/:slug" element={<DocDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 redirect to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
        {/* Fixed UI Components */}
        <ChatWidget />
        <ScrollToTop />
      </Router>
    </ThemeProvider>
  );
}

export default App;
