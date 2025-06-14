import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin,  FaYoutube, } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='bg-black text-white py-2'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-2xl font-bold mb-2'>Goutam Patra</h3>
                <p className='text-gray-400'>
                    Full-Stack Developer based in India, specializing in web and
                    software development.
                </p>
                </div>
                <div className='flex-1 w-full'>
                   <form className='flex items-center justify-center'>
                    <input type="email" 
                    placeholder='Enter Your Email'
                    className='w-full p-2 rounded-1-lg bg-gray-800 border border-gray-600
                    focus:outline-none focus:boder-green-400' />
                    <button
                    type='submit'
                    className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
                    px-4 py-2 rounded-r-lg transform transition-transform duration-300 hover:scale-106'
                    >Subscribe
                    </button>
                    </form> 
                </div>

            </div>

            <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row
            justify-between items-center'>
                <p className='text-gray-400'>Goutam Patra
                   &copy; {new Date().getFullYear()}
                </p>
                <div className='flex space-x-4 my-4 md:0'>
                    <a href="https://github.com/GoutamPatra" className='text-gray-400 hover:text-white hover:scale-120'>
                        <FaGithub />
                    </a>
                    <a href="https://www.facebook.com/" className='text-gray-400 hover:text-white hover:scale-120'>
                        <FaFacebook />
                    </a>
                    <a href="https://www.linkedin.com/in/goutam-patra-1b7b45253/" className='text-gray-400 hover:text-white hover:scale-120'>
                        <FaLinkedin />
                    </a>
                    <a href="https://www.youtube.com/" className='text-gray-400 hover:text-white hover:scale-120'>
                        <FaYoutube />
                    </a>
                    <a href="https://www.instagram.com/_goutampatra_/?next=%2F" className='text-gray-400 hover:text-white hover:scale-120'>
                        <FaInstagram />
                    </a>
                    <a href="https://x.com/" className='text-gray-400 hover:text-white hover:scale-120'>
                        <FaSquareXTwitter />
                    </a>

                </div>
                <div className='flex space-x-5'>
                    <a href="#" className='text-gray-400 hover:text-white'>
                        Privicy
                    </a>
                    <a href="" className='text-gray-400 hover:text-white'>
                        Terms of Services
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
