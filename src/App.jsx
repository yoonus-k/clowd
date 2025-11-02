import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import UseCases from './pages/UseCases';
import UseCaseDetail from './pages/UseCaseDetail';
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
