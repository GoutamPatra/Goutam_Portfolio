import React, { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const popupRef = useRef();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };
    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/myzjyobe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setIsPopupOpen(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Error submitting form. Try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section, div[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const linkClass = (id) =>
    `block md:inline hover:text-blue-400 transition-colors duration-200 ${activeSection === id ? 'text-blue-400 font-semibold' : 'text-white'
    }`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 shadow-md text-white">
      {showSuccess && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-blue-400 text-white px-6 py-2 rounded-full shadow-lg transition-opacity duration-300">
          ✅ Message sent successfully!
        </div>
      )}

      {/* Contact Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 pt-20 z-50 flex items-start justify-center backdrop-blur-sm bg-black/30">
          <div
            ref={popupRef}
            className="bg-blue-300 text-black rounded-lg shadow-lg p-8 w-full max-w-md max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={togglePopup}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl text-blue-600/100 font-bold mb-4 text-center">Contact Me</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="p-2 border rounded bg-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="p-2 border rounded bg-white"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                required
                className="p-2 border rounded bg-white"
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 rounded hover:scale-105 transition-transform"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          Goutam Patra
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className={linkClass('home')}>Home</a>
          <a href="#aboutme" className={linkClass('aboutme')}>About Me</a>
          <a href="#skills" className={linkClass('skills')}>Skills</a>
          <a href="#projects" className={linkClass('projects')}>Projects</a>
          <a href="#contact" className={linkClass('contact')}>Contact</a>
          <button
            onClick={togglePopup}
            className="ml-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Reach Out
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-black/90 text-white space-y-4">
          <a href="#home" className={linkClass('home')} onClick={closeMenu}>Home</a>
          <a href="#aboutme" className={linkClass('aboutme')} onClick={closeMenu}>About Me</a>
          <a href="#skills" className={linkClass('skills')} onClick={closeMenu}>Skills</a>
          <a href="#projects" className={linkClass('projects')} onClick={closeMenu}>Projects</a>
          <a href="#contact" className={linkClass('contact')} onClick={closeMenu}>Contact</a>
          {/* Reach Out button removed from mobile menu */}
          <button
            onClick={togglePopup}
            className=" bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Reach Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
