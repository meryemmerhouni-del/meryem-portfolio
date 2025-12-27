import React from 'react';
import { projects } from '../data/projects';
import { experiences } from '../data/experiences';
import { ExternalLink, Github, Star, Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceAndProjects = () => {
  return (
    <section id="experience-projects" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-6 py-2 rounded-full mb-6">
            <Briefcase size={18} />
            <span className="font-semibold">Experience & Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Experience</span> & <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            A combination of my professional internships and personal projects that showcase my skills in data science, AI, and web development.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Experience Column - 1/3 width */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div 
                  key={exp.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-6 border-l-4 border-blue-500 hover:shadow-xl dark:hover:shadow-gray-900 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{exp.position}</h4>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin size={14} />
                      <span>{exp.location} • {exp.workMode}</span>
                    </div>
                  </div>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.slice(0, 3).map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {exp.skills.length > 3 && (
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm">
                        +{exp.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Projects Column - 2/3 width */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-3">
              <Star className="text-purple-600 dark:text-purple-400" size={24} />
              Featured Projects
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden hover:shadow-2xl dark:hover:shadow-gray-900 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Project Type Badge */}
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-5 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-purple-100 dark:border-purple-800/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Buttons - Only show if project has github link */}
                    {project.github && (
                      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium group/link"
                        >
                          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover/link:bg-blue-100 dark:group-hover/link:bg-blue-900/30 transition-colors">
                            <Github size={18} className="dark:text-gray-300" />
                          </div>
                          Code
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* View More Projects */}
            <div className="text-center mt-12">
              <a 
                href="https://github.com/meryemmerhouni-del?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 px-10 py-3 rounded-xl text-lg font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 inline-flex items-center gap-3"
              >
                View All Projects on GitHub
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndProjects;