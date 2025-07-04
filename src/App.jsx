import { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // 👈 NEW

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <>
      {/* Contact Form Popup stays outside of blur */}
      <Navbar
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />

      {/* Page content is blurred when popup is open */}
      <div className={`${isPopupOpen ? 'blur-sm pointer-events-none select-none' : ''}`}>
        {showSuccess && (
          <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-blue-400 text-white px-6 py-2 rounded-full shadow-lg transition-opacity duration-300">
            ✅ Message sent successfully!
          </div>
        )}
        <Hero onSuccess={() => setShowSuccess(true)} />
        <About />
        <Skills />
        <Projects />
        <Contact onSuccess={() => setShowSuccess(true)} />
        <Footer />
      </div>
    </>
  );
}

export default App;
