import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

const Contact = ({ onSuccess }) => {
  const [state, handleSubmit] = useForm("myzjyobe");

  // ✅ Trigger success logic and reload after short delay
  useEffect(() => {
    if (state.succeeded) {
      onSuccess();

      // Auto-refresh after 2 seconds
      const timer = setTimeout(() => {
        window.location.reload();
      }, 2000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [state.succeeded, onSuccess]);

  return (
    <div className='bg-black text-white py-13' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-9'>Get in touch</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <div className='flex-1'>
            <h3 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500 mb-1'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>

            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:goutampatra570@gmail.com">goutampatra570@gmail.com</a>
            </div>

            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>+91 7857944180</span>
            </div>

            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>
                Vill+Post-Domjuri,<br />
                Baharagora, East Singhbhum,<br />
                Jharkhand, 832101
              </span>
            </div>
          </div>

          <div className='flex-1 w-full'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name'
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Example@gmail.com'
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  rows={5}
                  placeholder='Enter Your Message'
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className='bg-gradient-to-r from-green-400 to-blue-600 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 my- rounded-full'
              >
                {state.submitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
