import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

function Header() {
  return (
    <div
      className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
      style={{ backgroundImage: "url('/header_img.png')" }}
      id='Header'
    >
      <Navbar />

      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'
      >
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'
        >
          Explore homes that fit your dreams
        </motion.h2>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className='space-x-6 mt-16'
        >
          <a href="#Projects" className='border border-white px-8 py-3 rounded'>
            Projects
          </a>
          <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Header;
