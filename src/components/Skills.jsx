import React, { useState } from 'react';
import { 
  Cpu, 
  Brain, 
  Database, 
  Code, 
  LineChart,
  Palette,
  Server,
  Layers,
  TrendingUp,
  Award,
  FileText,
  Eye,
  Shield,
  BookOpen,
  Download,
  ExternalLink,
  X
} from 'lucide-react';

const Skills = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // AI/ML Skills
  const aiMlSkills = [
    { name: "Python Programming", icon: <Code className="text-blue-500" />, color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "Machine Learning", icon: <Brain className="text-purple-500" />, color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" },
    { name: "Deep Learning", icon: <Cpu className="text-green-500" />, color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
    { name: "Natural Language Processing (NLP)", icon: <FileText className="text-yellow-500" />, color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
    { name: "Computer Vision", icon: <Eye className="text-red-500" />, color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" },
    { name: "Unsupervised Learning", icon: <Brain className="text-indigo-500" />, color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300" },
    { name: "Object Detection", icon: <Eye className="text-teal-500" />, color: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300" },
    { name: "Convolutional Neural Networks (CNN)", icon: <Layers className="text-purple-500" />, color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" },
  ];

  // Data & Development Skills
  const dataDevSkills = [
    { name: "Data Analysis", icon: <LineChart className="text-blue-600" />, color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "SQL", icon: <Database className="text-orange-500" />, color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" },
    { name: "React.js", icon: <Code className="text-cyan-500" />, color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300" },
    { name: "JavaScript", icon: <Code className="text-yellow-500" />, color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
    { name: "HTML/CSS", icon: <Palette className="text-pink-500" />, color: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300" },
    { name: "Flask", icon: <Server className="text-gray-500" />, color: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300" },
    { name: "MySQL", icon: <Database className="text-blue-500" />, color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "Power BI", icon: <LineChart className="text-yellow-600" />, color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
  ];

  // Tools & Technologies
  const technologies = [
    { name: "Python", icon: "🐍", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "PyTorch", icon: "🔥", color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" },
    { name: "TensorFlow", icon: "⚡", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" },
    { name: "Scikit-learn", icon: "🤖", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
    { name: "Hugging Face", icon: "🤗", color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" },
    { name: "XGBoost", icon: "📈", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
    { name: "Dask", icon: "⚙️", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300" },
    { name: "React", icon: "⚛️", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300" },
    { name: "JavaScript", icon: "📜", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
    { name: "MySQL", icon: "🐬", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "Git", icon: "📊", color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" },
    { name: "MATLAB", icon: "🔬", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" },
    { name: "AutoCAD", icon: "✏️", color: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300" },
    { name: "SOLIDWORKS", icon: "🔧", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "Simulink", icon: "📐", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
    { name: "DAX", icon: "📊", color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" },
  ];

  // Engineering & Technical Skills
  const engineeringSkills = [
    { name: "Object-Oriented Programming", icon: "🔄" },
    { name: "Data Processing & Feature Engineering", icon: "⚙️" },
    { name: "Model Training Pipelines", icon: "📦" },
    { name: "Evaluation Metrics (AUC)", icon: "📈" },
    { name: "Distributed Computing", icon: "🌐" },
    { name: "GPU-Accelerated ML", icon: "⚡" },
    { name: "Data Visualization", icon: "📊" },
    { name: "Frontend Development", icon: "💻" },
  ];

  // Certificates
  const certificates = [
    {
      id: 1,
      title: "Enhancing Data Science Outcomes With Efficient Workflow",
      issuer: "NVIDIA Deep Learning Institute",
      date: "December 2025",
      skills: ["Dask & Dask-cuDF", "XGBoost", "Feature Engineering", "MLOps", "AUC Evaluation"],
      icon: <Shield className="text-blue-500" />,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      certificateUrl: "/certificates/nvidia_certificate.pdf", // Replace with actual file path
      certificateId: "NVIDIA-DLI-2025-1234"
    },
    {
      id: 2,
      title: "Natural Language Processing (NLP) in Python",
      issuer: "DataCamp",
      date: "2024",
      skills: ["Text Processing", "Feature Extraction", "Text Classification", "Token Classification", "Text Generation"],
      icon: <BookOpen className="text-green-500" />,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      certificateUrl: "/certificates/NLP.pdf", // Replace with actual file path
      certificateId: "DC-NLP-2024-5678"
    },
    {
      id: 3,
      title: "Data Analyst in Power BI",
      issuer: "DataCamp",
      date: "2024",
      skills: ["Data Preparation", "Data Transformation", "Data Modeling", "Data Visualization", "DAX"],
      icon: <LineChart className="text-yellow-500" />,
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      certificateUrl: "/certificates/powerbi_ANALYST.pdf", // Replace with actual file path
      certificateId: "DC-PowerBI-2024-91011"
    },
    {
      id: 4,
      title: "Data Exploratory Analysis",
      issuer: "DataCamp",
      date: "2024",
      skills: ["Data Exploration", "Statistical Analysis", "Data Cleaning", "Visualization"],
      icon: <Database className="text-purple-500" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      certificateUrl: "/certificates/data_explo.pdf", // Replace with actual file path
      certificateId: "DC-Exploratory-2024-1213"
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-6 py-2.5 rounded-full mb-6">
            <TrendingUp size={20} />
            <span className="font-semibold">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Skills</span> & Certificates
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive skill set in AI/ML, Data Science, and Full-Stack Development with recognized certifications.
          </p>
        </div>

        {/* Show Certificates Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowCertificates(true)}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:shadow-xl transition-all group"
          >
            <Award size={20} />
            View My Certificates
            <span className="group-hover:translate-y-1 transition-transform">↓</span>
          </button>
        </div>

        {/* Certificates Modal */}
        {showCertificates && (
          <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                  <Award className="text-yellow-500" />
                  My Certificates
                </h3>
                <button
                  onClick={() => {
                    setShowCertificates(false);
                    setSelectedCertificate(null);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <X size={24} className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Certificates Grid */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                  <div key={cert.id} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                    {/* Certificate Header */}
                    <div className={`${cert.color} text-white p-6`}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                            {cert.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">{cert.title}</h4>
                            <p className="text-white/90 text-sm">{cert.issuer}</p>
                          </div>
                        </div>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                    
                    {/* Certificate Content */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <a
                          href={cert.certificateUrl}
                          download
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                        >
                          <Download size={16} />
                          Download PDF
                        </a>
                        <button
                          onClick={() => setSelectedCertificate(cert)}
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                          <ExternalLink size={16} />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Certificate Detail Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {selectedCertificate.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Certificate ID: {selectedCertificate.certificateId}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <X size={24} className="text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                {/* Content */}
                <div className={`${selectedCertificate.color} text-white p-6 rounded-xl mb-6`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center">
                      {selectedCertificate.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">{selectedCertificate.issuer}</h4>
                      <p className="text-white/90">Issued: {selectedCertificate.date}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Skills Acquired:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4">Download Certificate:</h4>
                    <a
                      href={selectedCertificate.certificateUrl}
                      download
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all"
                    >
                      <Download size={20} />
                      Download PDF Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - AI/ML Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Brain size={22} className="text-blue-600 dark:text-blue-400" />
              </div>
              AI/ML & Data Science
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {aiMlSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`${skill.color} p-4 rounded-xl hover:scale-105 transition-transform group`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-bold">{skill.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering Skills */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Cpu size={22} className="text-purple-600 dark:text-purple-400" />
                </div>
                Engineering & Technical Skills
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {engineeringSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{skill.icon}</div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Development Skills & Technologies */}
          <div className="space-y-12">
            
            {/* Development Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Code size={22} className="text-green-600 dark:text-green-400" />
                </div>
                Development & Data
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {dataDevSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`${skill.color} p-4 rounded-xl hover:scale-105 transition-transform group`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-bold">{skill.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Grid */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Layers size={22} className="text-orange-600 dark:text-orange-400" />
                </div>
                Technologies & Tools
              </h3>
              
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                {technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className={`${tech.color} p-3 rounded-xl text-center hover:scale-110 transition-transform`}
                    title={tech.name}
                  >
                    <div className="text-2xl mb-1">
                      {tech.icon}
                    </div>
                    <div className="text-xs font-medium truncate">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl">
                <div className="text-3xl font-bold">DSAI</div>
                <div className="text-blue-100">Specialization</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl">
                <div className="text-3xl font-bold">Frontend</div>
                <div className="text-purple-100">Development</div>
              </div>
            </div>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Brain size={24} className="text-cyan-400" />
            Currently Exploring & Learning
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-700 dark:bg-gray-600 px-4 py-2 rounded-full">🔗 Large Language Models (LLMs)</span>
            <span className="bg-gray-700 dark:bg-gray-600 px-4 py-2 rounded-full">🤖 Reinforcement Learning</span>
            <span className="bg-gray-700 dark:bg-gray-600 px-4 py-2 rounded-full">⚡ MLOps & Model Deployment</span>
            <span className="bg-gray-700 dark:bg-gray-600 px-4 py-2 rounded-full">📊 Time Series Analysis</span>
            <span className="bg-gray-700 dark:bg-gray-600 px-4 py-2 rounded-full">☁️ Cloud AI Services</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;