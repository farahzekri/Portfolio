// src/components/Header.tsx

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`transition-colors duration-300 ${scrolling
      ? 'bg-gradient-to-r from-amber-400/30 via-amber-500/30 to-amber-600/20'
      : 'bg-gradient-to-r from-amber-600/20 via-amber-400/30 to-amber-500/30'
      } backdrop-blur-md text-amber-500 sticky top-0 z-50 border-b border-amber-400`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            Farah Zekri
          </div>

          <div className="hidden md:flex space-x-8 mr-8">
            <a href="#hero" className="hover:text-amber-400 transition-colors font-medium">Accueil</a>
            <a href="#about" className="hover:text-amber-400 transition-colors font-medium">À propos</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors font-medium">Expérience</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors font-medium">Projets</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors font-medium">Contact</a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-teal-400/30">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#hero" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-400 transition-colors font-medium">Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-400 transition-colors font-medium">About</a>
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-400 transition-colors font-medium">Experience</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-400 transition-colors font-medium">Projects</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-400 transition-colors font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

