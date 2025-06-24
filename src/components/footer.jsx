import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <footer className="bg-slate-800 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h2 className="text-white text-2xl font-bold">Estate</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text.
            </p>
          </div>

          {/* Company Links Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">Company</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                About us
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Contact us
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy policy
              </a>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">Subscribe to our newsletter</h3>
            <p className="text-gray-400">
              The latest news, articles, and resources, sent 
              to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-700 pt-6">
          <p className="text-center text-gray-500 text-sm">
            Copyright 2024 © GreatStack. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;