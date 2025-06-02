import React from 'react';
import { 
  Users, 
  Award, 
  Target, 
  Star,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Camera,
  Code,
  Palette,
  TrendingUp,
  Monitor,
  Smartphone,
  Edit3,
  Database,
  Globe,
  Zap
} from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Syed Sikandar Shah",
      position: "Full Stack Developer | Graphic Designer",
      department: "Leadership & Development",
      image: "images/profile-pic.png",
      bio: "Leading StackVision with expertise in full-stack development and creative graphic design. Passionate about transforming ideas into digital experiences that drive business growth.",
      linkedin: "www.linkedin.com/in/syed-sikandar-shah-abc",
      github : "github.com/Sayed70480",
      skills: ["Full Stack Development", "Leadership", "Project Management", "Graphic designing"],
      experience: "3+ years",
      location: "Pakistan",
      hobbies: ["Coding", "Design", "Innovation"],
      projects: 20,
      achievements: ["Founded StackVision", "20+ Successful Projects", "Expert Developer"]
    },
    {
      id: 2,
      name: "Atif Khan",
      position: "Frontend Developer (React)",
      department: "Development",
      image: "/atif-profile.jpg",
      bio: "React specialist focused on creating seamless user interfaces and exceptional user experiences. Expert in modern frontend technologies and responsive design.",
      linkedin: "www.linkedin.com/in/aatif-khan-software-engineer/",
      github: "github.com/atifkhan",
      skills: ["React.js", "Next.js", "JavaScript", "UI/UX Design", "Scrum", "Kanban", "Jest"],
      experience: "2+ years",
      location: "Pakistan",
      hobbies: ["Frontend Development", "UI Design", "Technology"],
      projects: 30,
      achievements: ["React Expert", "UI/UX Specialist", "Performance Optimizer"]
    },
    {
      id: 3,
      name: "Faisal Imran",
      position: "Mobile App Developer (React Native)",
      department: "Mobile Development",
      image: "images/Faisalimran-profile.jpg",
      bio: "Mobile app development expert specializing in React Native. Creates high-performance cross-platform mobile applications that deliver native-like experiences.",
      linkedin: "www.linkedin.com/in/faisal-imran15",
      github: "github.com/faisalimran",
      skills: ["React Native", "Mobile Development", "Cross-Platform Apps"],
      experience: "3+ years",
      location: "Pakistan",
      hobbies: ["Mobile Tech", "App Design", "Innovation"],
      projects: 10,
      achievements: ["React Native Expert", "10+ Mobile Apps", "Cross-Platform Specialist"]
    },
    {
      id: 4,
      name: "Roman Khan",
      position: "WordPress Developer",
      department: "Web Development",
      image: "images/RomanKhan-profile.jpg",
      bio: "WordPress expert who creates powerful, scalable websites and custom solutions. Specialized in theme development, plugin customization, and performance optimization.",
      linkedin: "linkedin.com/in/romankhan",
      skills: ["WordPress", "PHP", "Custom Themes"],
      experience: "4+ years",
      location: "Pakistan",
      hobbies: ["Web Development", "Blogging", "Technology"],
      projects: 40,
      achievements: ["WordPress Expert", "40+ Websites", "Performance Specialist"]
    }
  ];

  const departments = [
    { name: "Leadership", icon: Users, color: "bg-teal-500", count: 1 },
    { name: "Frontend Development", icon: Monitor, color: "bg-teal-500", count: 1 },
    { name: "Mobile Development", icon: Smartphone, color: "bg-teal-500", count: 1 },
    { name: "WordPress Development", icon: Globe, color: "bg-teal-500", count: 1 },
    { name: "Graphic Design", icon: Palette, color: "bg-teal-500", count: 1 },
    { name: "Full Stack", icon: Code, color: "bg-teal-500", count: 1 }
  ];

  const teamStats = [
    { label: "Team Members", value: "4+", icon: Users },
    { label: "Projects Completed", value: "95+", icon: Target },
    { label: "Years Experience", value: "4+", icon: Award },
    { label: "Client Satisfaction", value: "100%", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Team Profiles */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Get to Know Our Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Detailed profiles of the passionate individuals behind StackVision's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Mobile Layout - Stacked */}
                  <div className="block sm:hidden">
                    <div className="text-center mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <p className="text-teal-500 font-semibold mb-2 text-sm">{member.position}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">{member.bio}</p>
                  </div>

                  {/* Desktop/Tablet Layout - Side by side */}
                  <div className="hidden sm:flex items-start gap-4 lg:gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <p className="text-teal-500 font-semibold mb-2 text-sm lg:text-base">{member.position}</p>
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm lg:text-base">{member.bio}</p>
                    </div>
                  </div>
                  
                  {/* Stats Grid - Responsive */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-600 truncate">{member.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-600 truncate">{member.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-3 h-3 sm:w-4 sm:h-4 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-600 truncate">{member.projects}+ projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-600 truncate">Expert Level</span>
                    </div>
                  </div>
                  
                  {/* Skills Section */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Core Skills</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {member.skills.map((skill, index) => (
                        <span key={index} className="px-2 sm:px-3 py-1 bg-teal-100 text-teal-700 text-xs sm:text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievements Section */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Key Achievements</h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t">
                    <a href={`https://${member.github}`} className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors text-xs sm:text-sm">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Github</span>
                    </a>
                  
                    {member.linkedin && (
                      <a href={`https://${member.linkedin}`} className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors text-xs sm:text-sm">
                        <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Speaks Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Work Speaks for Itself</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              With a growing portfolio of completed projects, our team delivers quality across every service we offer
            </p>
          </div>
          
          {/* Responsive Grid - 2 cols on mobile, 3 on tablet, 6 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Code className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm lg:text-base">Full Stack Projects</h3>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-500">12+</div>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm lg:text-base">Mobile Apps</h3>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-500">10+</div>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Edit3 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm lg:text-base">Design Projects</h3>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-500">30+</div>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm lg:text-base">WordPress Sites</h3>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-500">40+</div>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Monitor className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm lg:text-base">UI/UX Designs</h3>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-500">20+</div>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm lg:text-base">Custom Solutions</h3>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-500">15+</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Ready to Work with Our Team?</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
              Let's transform your ideas into digital experiences. Get in touch with our expert team today.
            </p>
            <button className="bg-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors text-base sm:text-lg w-full sm:w-auto">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;