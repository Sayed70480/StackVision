import React from 'react';
import { 
  Code, 
  Palette, 
  User, 
  Award, 
  Briefcase, 
  GraduationCap,
  Coffee,
  Star,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Download,
  Lightbulb,
  Target,
  Heart,
  Users,
  Shield,
  Zap,
  MessageCircle,
  Smartphone,
  Monitor,
  Layers,
  TrendingUp,
  Eye,
  Calendar,
  Building,
  FileText
} from 'lucide-react';
// import Resume from "./Resume.pdf"
export default function Aboutmesections() {
  const skills = [
    { name: 'React.js & Next.js', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'Node.js & Express.js', level: 88, icon: <Monitor className="w-5 h-5" /> },
    { name: 'JavaScript & TypeScript', level: 92, icon: <Code className="w-5 h-5" /> },
    { name: 'MongoDB & APIs', level: 85, icon: <Smartphone className="w-5 h-5" /> },
    { name: 'Tailwind CSS & UI Libraries', level: 90, icon: <Palette className="w-5 h-5" /> },
    { name: 'PhotoShop & Illustrator & Canva', level: 80, icon: <Zap className="w-5 h-5" /> }
  ];

  const experiences = [
    {
      company: 'NIC (National Incubation Center Swat)',
      position: 'Web Developer',
      period: 'November 2023 - April 2024',
      project: 'Touch Tally - IoT Fingerprint Attendance System',
      achievements: [
        'Led UI development for innovative IoT attendance management system',
        'Collaborated with backend and IoT specialists on cutting-edge technology',
        'Implemented responsive interfaces using Next.js, TypeScript, and Tailwind CSS',
        'Integrated complex APIs for seamless data management'
      ],
      icon: <Building className="w-6 h-6 text-teal-500" />
    },
    {
      company: 'Ford9 Solutions (Pvt) Ltd',
      position: 'Web Developer Intern',
      period: 'May 2023 - October 2023',
      project: 'Full Stack Web Development',
      achievements: [
        'Developed and managed React applications for enterprise clients',
        'Mastered modern web technologies including ES6, RESTful APIs, and JWT',
        'Collaborated with cross-functional teams on complex business requirements',
        'Gained expertise in professional development tools and version control'
      ],
      icon: <Code className="w-6 h-6 text-teal-500" />
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8 text-teal-500" />,
      title: 'Full Stack Development',
      description: 'Complete web solutions using MERN stack (MongoDB, Express.js, React.js, Node.js) with modern practices.'
    },
    {
      icon: <Monitor className="w-8 h-8 text-teal-500" />,
      title: 'Frontend Excellence',
      description: 'Responsive user interfaces with React.js, Next.js, TypeScript, and modern CSS frameworks.'
    },
    
    {
      icon: <Globe className="w-8 h-8 text-teal-500" />,
      title: 'WordPress Development',
      description: ' WordPress solutions with performance optimization and modern design principles.'
    },
    {
      icon: <Palette className="w-8 h-8 text-teal-500" />,
      title: 'UI/UX Design',
      description: 'User-centered design approach using Figma and modern design principles for optimal user experience.'
    },
    {
      icon: <Eye className="w-8 h-8 text-teal-500" />,
      title: 'API Development',
      description: 'RESTful API development and integration with secure authentication and data management.'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-teal-500" />,
      title: 'IoT System Integration',
      description: 'Experience in IoT projects and system integration for innovative tech solutions.'
    },
  ];

  const whyChooseMe = [
    { icon: <GraduationCap className="w-6 h-6" />, title: 'Graduated Software Engineer', description: 'University of Swat - Strong technical foundation' },
    { icon: <Briefcase className="w-6 h-6" />, title: 'Real Industry Experience', description: 'Proven track record at Ford9Solutions & NIC' },
    { icon: <Zap className="w-6 h-6" />, title: 'Modern Tech Stack', description: 'MERN stack expertise with latest technologies' },
    { icon: <Users className="w-6 h-6" />, title: 'Team Collaboration', description: 'Experience working with cross-functional teams' },
    { icon: <Award className="w-6 h-6" />, title: 'Innovation Focus', description: 'Contributed to cutting-edge IoT projects' },
    { icon: <Target className="w-6 h-6" />, title: 'Results-Driven', description: 'Strong recommendations from industry leaders' }
  ];

  const achievements = [
    { icon: <GraduationCap className="w-8 h-8" />, number: '2023', text: ' Graduate Software Engineer ' },
    { icon: <Briefcase className="w-8 h-8" />, number: '3+', text: 'Years Professional Experience' },
    { icon: <CheckCircle className="w-8 h-8" />, number: '20+', text: 'Major Projects Completed' },
    { icon: <Star className="w-8 h-8" />, number: '100%', text: 'Client Satisfaction Rate' }
  ];

  const projects = [
    'Password Generator Website',
    'Business Portfolio Websites',
    'Blog Management System',
    'E-commerce Platform',
    'Touch Tally Management System',
    'Professional Portfolio Sites'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
   
      

      {/* Hero Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
         
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl">
               <img src="images/profile.jpg " alt="" className='rounded-2xl w-75 h-75' />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg border-4 border-teal-100">
                  <Code className="w-8 h-8 text-teal-600" />
                </div>
                <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg border-4 border-teal-100">
                  <Zap className="w-6 h-6 text-teal-600" />
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="bg-teal-50 p-6 rounded-xl mb-8 border-l-4 border-teal-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Bio</h3>
                <p className="text-gray-700 leading-relaxed">
                  I am a passionate Software Engineer with proven expertise in full-stack development and innovative 
                  technology solutions. My professional journey includes significant contributions at Ford9Solutions 
                  and the National Incubation Center Swat, where I've developed cutting-edge web applications and 
                  IoT systems. With a strong foundation in the MERN stack and modern development practices, I excel 
                  at transforming complex business requirements into elegant, scalable digital solutions that drive 
                  real-world impact.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  View My Work
                </button>
               {/* <a href={Resume} download={Resume}> <button type='download' className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-teal-500 hover:text-teal-500 transition-colors flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </button></a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-teal-500 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</div>
                <p className="text-gray-600 font-medium">{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border-l-4 border-teal-500">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    {exp.icon}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                      <p className="text-teal-600 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="md:ml-auto">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Project: {exp.project}</h4>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Education & Training</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-teal-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-teal-50 p-3 rounded-full">
                  <GraduationCap className="w-8 h-8 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Bachelor of Software Engineering</h3>
                  <p className="text-teal-600 font-medium">University of Swat</p>
                  <p className="text-gray-600 text-sm">August 2019 - August 2023 | CGPA: 3.11</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Specialized Training</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Youth Leadership & Entrepreneurship</li>
                    <li>• B.E.S.T Boot Camp (Build Entrepreneurship Skills)</li>
                    <li>• National Financial Literacy Program</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Projects</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {projects.slice(0, 4).map((project, index) => (
                      <li key={index}>• {project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Services</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Full Stack Development & Creative Technology Solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-teal-500">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Me?</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseMe.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="bg-teal-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-teal-500">{item.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Expertise</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technologies and frameworks I've mastered through professional experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-teal-500">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                  <span className="ml-auto text-teal-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-teal-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gray-50 p-6 rounded-xl max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'Material UI', 'Next UI', 'ShadCN UI','JWT', 'Bcrypt', 'Git/Github', 'Figma', 'C++','Python Basic', 'SQL','Adobe PhotoShop','Adobe Illustrator','Canva'].map((tech, index) => (
                  <span key={index} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to transform your ideas into powerful digital solutions? Let's collaborate and create something extraordinary.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-teal-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400">syedsikandars4@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+92 341 927 0480</p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Mingora, Pakistan</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Sayed70480" className="bg-gray-700 p-3 rounded-full hover:bg-teal-500 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/syed-sikandar-shah-abc/" className="bg-gray-700 p-3 rounded-full hover:bg-teal-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:syedsikandars4@gmail.com" className="bg-gray-700 p-3 rounded-full hover:bg-teal-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}