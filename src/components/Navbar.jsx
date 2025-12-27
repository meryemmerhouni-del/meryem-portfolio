import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'ExperienceAndProjects', href: '#experience-projects' },
    { name: 'Extracurricular', href: '#extracurricular' }, // Added Extracurricular
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 shadow-lg border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-3"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              Meryem's Portfolio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 font-medium transition-all hover:scale-105"
              >
                {item.name}
              </a>
            ))}
            
            {/* Dark Mode Toggle */}
            <ThemeToggle />
            
            {/* CV Download Button */}
            <a 
              href="/CV_Meryem_Merhouni.pdf"
              download="CV_Meryem_Merhouni.pdf"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all dark:from-blue-500 dark:to-purple-500"
              onClick={(e) => {
                console.log('CV download initiated');
              }}
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="/CV_Meryem_Merhouni.pdf"
              download="CV_Meryem_Merhouni.pdf"
              className="block w-full mt-4 mx-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;