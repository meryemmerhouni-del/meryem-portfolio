import React from 'react';
import { 
  Users, 
  Calendar, 
  Award, 
  Briefcase,
  GraduationCap,
  Handshake,
  Users2,
  Building,
  Image // Add Image icon
} from 'lucide-react';

const Extracurricular = () => {
  // Extracurricular activities data with logos
  const activities = [
    {
      id: 1,
      title: "Project Lead – IEC Discover Project",
      organization: "Industrial Engineers Club (IEC)",
      period: "Feb 2025 - Present · 11 months",
      description: "Leading an initiative bridging students and professional world through company visits and industrial discovery events. Responsible for planning, coordination, and communication with partner companies.",
      icon: <Briefcase className="text-blue-500" size={24} />,
      logo: "/logos/iec-logo.png", // Placeholder for IEC logo
      skills: ["Project Management", "Coordination", "Industry Relations", "Communication"],
      type: "leadership",
      details: [
        "Plan and organize company visits for students",
        "Coordinate with industrial partners",
        "Facilitate professional exposure opportunities",
        "Manage project timelines and resources"
      ]
    },
    {
      id: 2,
      title: "UI/UX Design Member",
      organization: "School of AI Algiers",
      period: "Oct 2025 - Present · 3 months",
      description: "Contribute to UI/UX design projects focusing on AI applications and user-centered design solutions.",
      icon: <GraduationCap className="text-purple-500" size={24} />,
      logo: "/logos/school-ai-logo.png", // Placeholder for School of AI logo
      skills: ["UI/UX Design", "User Research", "Wireframing", "Prototyping"],
      type: "technical"
    },
    {
      id: 3,
      title: "External Relations Member",
      organization: "Industrial Engineers Club (IEC)",
      period: "Dec 2024 - Present · 1 year 1 month",
      description: "Participate in building and maintaining relationships with external partners, sponsors, and industry contacts.",
      icon: <Handshake className="text-green-500" size={24} />,
      logo: "/logos/iec-logo.png", // Placeholder for IEC logo
      skills: ["Networking", "Partnership Building", "Communication", "Sponsorship"],
      type: "professional"
    },
    {
      id: 4,
      title: "Training & Development Unit Member",
      organization: "Industrial Engineers Club (IEC)",
      period: "Dec 2024 - Present · 1 year 1 month",
      description: "Involved in developing and delivering training programs for club members, focusing on skill development.",
      icon: <Users className="text-yellow-500" size={24} />,
      logo: "/logos/iec-logo.png", // Placeholder for IEC logo
      skills: ["Training Development", "Workshop Facilitation", "Skill Assessment", "Team Development"],
      type: "development"
    },
    {
      id: 5,
      title: "Human Resources Team Member",
      organization: "IEEE Ecole Nationale Polytechnique Student Branch",
      period: "Dec 2025 - Present · 1 month",
      description: "Contribute to HR operations within IEEE student branch, supporting member management and organizational development.",
      icon: <Users2 className="text-pink-500" size={24} />,
      logo: "/logos/ieee-logo.png", // Placeholder for IEEE logo
      skills: ["HR Management", "Member Engagement", "Team Coordination", "Organizational Support"],
      type: "professional"
    }
  ];

  // Activity types with colors
  const activityTypes = {
    leadership: { 
      label: "Leadership", 
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" 
    },
    technical: { 
      label: "Technical", 
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" 
    },
    professional: { 
      label: "Professional", 
      color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" 
    },
    development: { 
      label: "Development", 
      color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" 
    }
  };

  // Calculate stats
  const totalActivities = activities.length;
  const currentRoles = activities.filter(a => a.period.includes("Present")).length;
  const longestDuration = "1 year 1 month";
  const monthsInvolvement = 15;

  // Club logos data for the overview
  const clubs = [
    {
      name: "Industrial Engineers Club (IEC)",
      logo: "/logos/iec-logo.png",
      roles: ["Project Lead", "External Relations", "Training & Development"],
      color: "blue"
    },
    {
      name: "School of AI Algiers",
      logo: "/logos/school-ai-logo.png",
      roles: ["UI/UX Design Member"],
      color: "purple"
    },
    {
      name: "IEEE ENP Student Branch",
      logo: "/logos/ieee-logo.png",
      roles: ["HR Team Member"],
      color: "pink"
    }
  ];

  return (
    <section id="extracurricular" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-6 py-2.5 rounded-full mb-6">
            <Building size={20} />
            <span className="font-semibold">Student Leadership & Activities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Club <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Involvement</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Active participation in student organizations and leadership roles that complement my engineering education with practical experience.
          </p>
        </div>

        {/* Clubs Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Active Clubs & Organizations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/50 flex flex-col items-center text-center hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-white dark:border-gray-800 shadow-lg">
                  <img 
                    src={club.logo} 
                    alt={`${club.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{club.name}</h4>
                <div className="mt-4 space-y-2">
                  {club.roles.map((role, idx) => (
                    <span 
                      key={idx}
                      className={`block px-3 py-1 rounded-full text-sm font-medium ${
                        club.color === 'blue' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                        club.color === 'purple' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                        'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300'
                      }`}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg dark:shadow-gray-900/50">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{totalActivities}</div>
            <div className="text-gray-600 dark:text-gray-400">Active Roles</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg dark:shadow-gray-900/50">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{currentRoles}</div>
            <div className="text-gray-600 dark:text-gray-400">Current Positions</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg dark:shadow-gray-900/50">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">{monthsInvolvement}+</div>
            <div className="text-gray-600 dark:text-gray-400">Months Involvement</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg dark:shadow-gray-900/50">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{clubs.length}</div>
            <div className="text-gray-600 dark:text-gray-400">Clubs</div>
          </div>
        </div>

        {/* Activities Grid with Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900 transition-all duration-300 hover:-translate-y-2 ${activity.id === 1 ? 'md:col-span-2 lg:col-span-3 md:grid md:grid-cols-2' : ''}`}
            >
              {/* Activity Header with Logo */}
              <div className={`p-6 border-b border-gray-100 dark:border-gray-700 ${activity.id === 1 ? 'md:border-r md:border-b-0' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        {activity.icon}
                      </div>
                      {/* Club logo badge */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-md">
                        <img 
                          src={activity.logo} 
                          alt="Club logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${activityTypes[activity.type].color}`}>
                    {activityTypes[activity.type].label}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {activity.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                  <Calendar size={16} />
                  <span className="text-sm">{activity.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {activity.organization}
                </p>
              </div>

              {/* Activity Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {activity.description}
                </p>
                
                {/* Additional details for Project Lead role */}
                {activity.id === 1 && activity.details && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {activity.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Skills Gained */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Skills Developed:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Club Involvement Impact</h3>
              <p className="text-blue-100 mb-4">
                Through active participation in multiple student organizations, I've developed a diverse skill set that bridges academic theory with practical application. Each club has provided unique opportunities for leadership, technical development, and professional networking.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {clubs.map((club, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full overflow-hidden">
                      <img 
                        src={club.logo} 
                        alt={`${club.name} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm font-medium">{club.name.split(' ')[0]}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">Industry</div>
                <div className="text-sm">Bridge Building</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">Leadership</div>
                <div className="text-sm">Development</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">Technical</div>
                <div className="text-sm">Skills</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">Professional</div>
                <div className="text-sm">Network</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Interested in student club collaboration, industry partnerships, or project initiatives?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:shadow-xl transition-all group"
          >
            Connect for Collaboration
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;