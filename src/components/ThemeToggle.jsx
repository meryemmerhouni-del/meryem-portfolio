import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [ripple, setRipple] = useState(false);

  const handleClick = () => {
    setRipple(true);
    setIsTransitioning(true);
    
    // Start theme change after ripple
    setTimeout(() => {
      toggleTheme();
    }, 300);
    
    // Reset states
    setTimeout(() => {
      setRipple(false);
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <>
      {/* Ripple Effect */}
      {ripple && (
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          <div className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-blue-900/0 via-purple-900/0 to-gray-900/0 animate-ripple-dark'
              : 'bg-gradient-to-br from-blue-100/0 via-purple-100/0 to-gray-100/0 animate-ripple-light'
          }`}></div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={handleClick}
        disabled={isTransitioning}
        className="relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
        
        {/* Icons container */}
        <div className="relative w-6 h-6">
          <Sun 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              theme === 'light' 
                ? 'opacity-100 rotate-0 scale-100 text-yellow-500' 
                : 'opacity-0 -rotate-180 scale-0'
            }`}
            size={20}
          />
          
          <Moon 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              theme === 'dark' 
                ? 'opacity-100 rotate-0 scale-100 text-blue-300' 
                : 'opacity-0 rotate-180 scale-0'
            }`}
            size={20}
          />

          {/* Orbiting particles */}
          {theme === 'light' && (
            <>
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-orbit-fast"></div>
              <div className="absolute top-1/2 right-0 w-0.5 h-0.5 bg-orange-400 rounded-full animate-orbit-medium"></div>
            </>
          )}
          
          {theme === 'dark' && (
            <>
              <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-orbit-slow"></div>
              <div className="absolute top-1/2 left-0 w-0.5 h-0.5 bg-purple-400 rounded-full animate-orbit-reverse"></div>
            </>
          )}
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900/90 dark:bg-gray-700/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
          {theme === 'light' ? 'Activate Dark Mode' : 'Activate Light Mode'}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/90 dark:bg-gray-700/90 rotate-45"></div>
        </div>
        
        {/* Transition indicator */}
        {isTransitioning && (
          <div className="absolute -inset-1 border-2 border-dashed border-blue-500/30 dark:border-purple-500/30 rounded-full animate-pulse"></div>
        )}
      </button>
    </>
  );
};

export default ThemeToggle;