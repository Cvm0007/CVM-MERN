import { Routes, Route } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

// Context Providers
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

// Home Page Sections
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Workflow from './components/Workflow';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

// Full Page Components
import Projects from './pages/Project';
import Blogs from './pages/Blog';
import ContactPage from './pages/Contactme';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProjectDetail from './pages/ProjectDetail';
import BlogDetail from './pages/BlogDetail';
import PrivacyPolicy from "./legal/PrivacyPolicy";
import TermsAndConditions from "./legal/TermsAndConditions";
import Disclaimer from "./legal/Disclaimer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Workflow />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="scroll-smooth pt-20 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
