import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 min-h-screen flex items-center dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full mb-6">
              <Sparkles size={16} />
              <span className="font-semibold">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Meryem</span>
              <br />
              <span className="text-4xl md:text-6xl text-gray-700 dark:text-gray-300">AI & Data Science Engineering Student</span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl">
              Engineering student at the National Polytechnic School of Algiers, specializing in 
              Artificial Intelligence and Data Science. Passionate about technological innovation 
              and solving complex problems through data-driven solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#experience-projects" className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-3 rounded-xl text-lg font-semibold flex items-center gap-3 hover:shadow-xl transition-all hover:scale-105 dark:hover:shadow-blue-500/20">
                View My Projects
                <ArrowDown size={20} />
              </a>
              <a href="#contact" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl text-lg font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                Contact Me
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6">
              <a href="https://github.com/meryemmerhouni-del" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/meryem-merhouni-6b1648333/" className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="mailto:meryem.merhouni@g.enp.edu.dz" className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-red-600 dark:hover:text-red-400 transition-all">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Column - Photo Section */}
          <div className="relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              {/* Background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 rounded-full animate-pulse"></div>
              
              {/* Photo Container - REPLACE WITH YOUR PHOTO */}
              <div className="absolute inset-8 bg-white dark:bg-gray-800 rounded-full overflow-hidden shadow-2xl dark:shadow-gray-900/50">
                {/* Photo Placeholder - Change src to your photo filename */}
                <img 
                  src="/meryem-photo.jpg"  // ← CHANGE THIS TO YOUR PHOTO FILENAME
                  alt="Meryem Merhouni"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-800">
                        <div class="text-center p-8">
                          <div class="text-6xl mb-4">👩‍💻</div>
                          <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Meryem Merhouni</h3>
                          <p class="text-gray-600 dark:text-gray-400">AI & Data Engineer</p>
                          <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">ENP Algiers</p>
                          <p class="text-xs text-gray-400 mt-4">Add your photo as "meryem-photo.jpg" in public folder</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 dark:bg-yellow-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-400 dark:bg-green-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center p-2 bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">GI</div>
                <div className="text-gray-600 dark:text-gray-400">Data Science & AI</div>
              </div>
              <div className="text-center p-2 bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">ENP</div>
                <div className="text-gray-600 dark:text-gray-400">School</div>
              </div>
              <div className="text-center p-2 bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">AI</div>
                <div className="text-gray-600 dark:text-gray-400"> Enthusiast</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;