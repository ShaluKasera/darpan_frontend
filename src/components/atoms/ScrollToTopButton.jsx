'use client';

import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-5 right-5 
        w-12 h-12 
        bg-[#FF7043] 
        text-white 
        rounded-full 
        flex items-center justify-center 
        shadow-lg 
        hover:bg-[#e35a2d] 
        transition-colors 
        duration-300
        z-50
      "
      aria-label="Scroll to top"
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTopButton;
