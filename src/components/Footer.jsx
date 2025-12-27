import React from 'react';
import { Heart, Coffee, Code, Mail, Github, Linkedin, School } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <School size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Meryem Merhouni</h3>
                <p className="text-gray-400 text-sm">AI & Data Science Engineer</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Engineering student specializing in Artificial Intelligence and Data Science 
              at the National Polytechnic School of Algiers.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/meryemmerhouni-del" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/meryem-merhouni-6b1648333/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:meryem.merhouni@g.enp.edu.dz" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#experience-projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="/CV_Meryem_Merhouni.pdf" download className="block text-gray-400 hover:text-white transition-colors">Download CV</a>
            </div>
          </div>

          {/* Column 3: Education & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Education & Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <School size={20} className="text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">National Polytechnic School</p>
                  <p className="text-gray-400 text-sm">Algiers, Algeria</p>
                  <p className="text-gray-400 text-sm">AI & Data Science Specialization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-green-400 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-400 text-sm">meryem.merhouni@g.enp.edu.dz</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm flex items-center  gap-2">
              Always learning • Passionate about AI • Open to opportunities
              <Heart className="inline w-4 h-4 text-red-500" />
            </p>
            
          </div>
          
        </div>

        {/* Attribution */}
        <div className="text-center mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-600 text-sm">
            <span>© {currentYear} Meryem Merhouni. All rights reserved.</span>
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;