import React, { useState, useRef, useEffect } from 'react';
import MYPHOTO from '../assets/myphoto.png'
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
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

  return (
    <div className='pt-20 relative bg-black text-white text-center' id='home'>
      {showSuccess && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-blue-400 text-white px-6 py-2 rounded-full shadow-lg transition-opacity duration-300">
          ✅ Message send successfully!
        </div>
      )}
      <div className='p-5'>

        <div className="w-fit mx-auto mt- rounded-full transition-all duration-300 hover:shadow-[0_0_15px_8px_rgba(20,191,255,0.6)]">
          <img
            src={MYPHOTO}
            alt="Profile"
            className="mx-auto mb-6 
            w-28 h-28     // Mobile size
            sm:w-36 sm:h-36 // Small screens
            md:w-44 md:h-44 // Medium screens
            lg:w-52 lg:h-52 // Large screens
            rounded-full object-cover
              transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
        Hello, I'm{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600'>
          <Typewriter
            words={['Goutam Patra']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorColor='white'
          />
        </span>{' '}
        a Full-stack developer
      </h1>

      <p className='mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto'>
        I specialize in building modern and responsive web applications.
      </p>

      <div className='mt-8 space-x-4'>
        <button
          onClick={togglePopup}
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
                    inline-block transform transition-transform duration-300 hover:scale-105 
                    px-3 py-2 rounded-full text-sm md:text-base'
        >
          Contact With Me
        </button>

        <a
          href="/Goutam-Resume.pdf"
          download="Goutam-Resume.pdf"
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
                    inline-block transform transition-transform duration-300 hover:scale-105 
                    px-3 py-2 rounded-full text-sm md:text-base'
        >
          Resume
        </a>
      </div>

      <div>
        <h2 className='mt-50 pl-20 flex justify-start mx-30 mt-20 text-3xl font-bold'>
          I have knowledge about ,
        </h2>
      </div>
      <div className='ml-20 text-left text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 px-4 md:px-0 mt-2'>
        <Typewriter
          words={['Open-source. ', 'Real-world projects.', 'Hands-on experience.', 'Open-source repositories on GitHub.']}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
          cursorColor='white'
        />
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div
            ref={popupRef}
            className="bg-blue-300 text-black rounded-lg shadow-lg p-8 w-full max-w-md relative"
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
    </div>
  );
};

export default Hero;
