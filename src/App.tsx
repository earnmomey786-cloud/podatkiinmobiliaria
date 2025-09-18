import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import StructuredData from './components/StructuredData';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogArticle from './pages/BlogArticle';
import { businessData } from './data/businessData';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen text-white font-light" style={{ backgroundColor: '#282e32' }}>
          <StructuredData businessData={businessData} pageType="home" />
          <Header />
          <SocialSidebar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:articleId" element={<BlogArticle />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;