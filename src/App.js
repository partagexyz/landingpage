import React from 'react';
import './App.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import backgroundImage from './assets/background.png';

function App() {
  const formUrl = 'https://forms.gle/Ab2gczbBNaH3eBQe6';

  return (
    <div className="App min-h-screen bg-backgroundDark text-white flex flex-col">
      
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-backgroundDark fixed w-full z-10">
        <h1 className="text-2xl font-bold" style={{ color: '#C5F801' }}>Partage</h1>
        <div className="flex space-x-4">
          <a href="https://x.com/partagexyz" target="_blank" rel="noopener noreferrer" style={{ color: '#C5F801' }}>
            <FaTimes size={24} />
          </a>
          <a href="https://t.me/partagexyz" target="_blank" rel="noopener noreferrer" style={{ color: '#C5F801' }}>
            <FaTelegramPlane size={24} />
          </a>
        </div>
      </header>

      <main>     
        {/* Hero Section */}
        <div 
          className="text-center hero-section"
          style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            minHeight: '70vh'
          }}
          >

          {/* Overlay */}
          <div className="overlay absolute top-0 left-0 w-full h-full"></div>
        
          {/* Content */}
          <div className="relative z-10 py-16">
            {/* Email Form */}
            <div className="flex flex-col justify-center items-center relative z-10 mb-8">
              <p className="text-lg mb-4" style={{ color: '#FC5600' }}>New App Coming Soon</p>
              <h2 className="text-3xl mb-4" style={{ color: '#C5F801' }}>Don't miss our launch!</h2>
              {/* Button now changes to redirect to Google Form */}
              <button 
                onClick={() => window.open(formUrl, '_blank')} // Opens in new tab
                className="mt-4 px-8 py-3 text-black font-bold rounded-lg transition-colors duration-300 ease-in-out hover:bg-partageGreen hover:text-white"
                style={{ backgroundColor: '#FC5600' }}>
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-backgroundDark text-center py-4">
        <p style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#C5F801' }}>Keyless Solutions for Seamless Sharing</p>
        <p className="text-sm" style={{ color: '#E1EED6' }}>© All rights reserved CivicTech OÜ, 2024.</p>
      </footer>
    </div>
  );
}

export default App;