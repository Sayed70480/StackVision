import React, { useState } from 'react';
import { 
  Code, 
  Paintbrush, 
  Smartphone, 
  Globe, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Users, 
  MessageSquare, 
  Headphones, 
 
} from 'lucide-react';
import { Link } from 'react-router-dom'
import PagesHeading from '../PagesHeading';


const ServicesCard = () => {
  const [activeTab, setActiveTab] = useState('why-choose-us');
  
  const services = [
    {
      id: 'full-stack',
      title: 'Full Stack Development',
      icon: <Code className="w-6 h-6 text-emerald-500" />,
      description: 'Transform your ideas into powerful digital solutions with our comprehensive full stack development expertise. We architect seamless experiences from server to browser, building robust applications that scale with your business.',
      details: [
        'Custom web applications with intuitive interfaces',
        'Optimized backends for maximum performance',
        'RESTful API development and integration',
        'Database design and optimization',
        'Secure authentication systems'
      ],
      tech: 'React, Node.js, Express, MongoDB, PostgreSQL, GraphQL'
    },
    {
      id: 'frontend',
      title: 'Front-End Excellence',
      icon: <Layers className="w-6 h-6 text-emerald-500" />,
      description: 'Create immersive user experiences with cutting-edge front-end development. We craft pixel-perfect interfaces that captivate users and drive engagement, ensuring your brand stands out in the digital landscape.',
      details: [
        'Responsive websites that work flawlessly across all devices',
        'Interactive UI components with smooth animations',
        'Performance-optimized code for lightning-fast load times',
        'Accessible interfaces that comply with WCAG standards',
        'State-of-the-art SPA and PWA implementations'
      ],
      tech: 'React, Redux, Next.js, Tailwind CSS, Material UI, Framer Motion'
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
      description: 'Extend your digital reach with native-feeling mobile applications that users love. We develop cross-platform solutions that deliver consistent experiences across iOS and Android, maximizing your market potential.',
      details: [
        'Cross-platform mobile apps with native performance',
        'Intuitive navigation and user flows',
        'Offline functionality and data synchronization',
        'Push notification integration',
        'App store optimization and deployment'
      ],
      tech: 'React Native, Expo, Redux, Firebase, Native APIs'
    },
    {
      id: 'wordpress',
      title: 'WordPress Excellence',
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      description: 'Launch and scale content-rich websites quickly with our WordPress expertise. We create custom WordPress solutions that combine powerful functionality with easy content management, giving you complete control.',
      details: [
        'Custom theme development tailored to your brand',
        'Performance-optimized WordPress installations',
        'Custom plugin development for unique functionality',
        'E-commerce integration with WooCommerce',
        'Security hardening and maintenance solutions'
      ],
      tech: 'Custom WordPress themes, Advanced Custom Fields, Elementor Pro, WooCommerce'
    },
    {
      id: 'design',
      title: 'Graphic Design & Branding',
      icon: <Paintbrush className="w-6 h-6 text-emerald-500" />,
      description: 'Elevate your brand with stunning visuals that communicate your unique story. Our graphic design services create cohesive brand identities that resonate with your audience and strengthen your market position.',
      details: [
        'Brand identity development (logos, color schemes, typography)',
        'Marketing materials and social media assets',
        'UI design systems and component libraries',
        'Illustrations and custom graphics',
        'Print-ready designs for all marketing needs'
      ],
      tech: 'Adobe Creative Suite, Figma, Sketch'
    }
  ];

  const whyChooseUs = [
    {
      id: 'expertise',
      title: 'End-to-End Expertise',
      icon: <Layers className="w-8 h-8 text-emerald-500" />,
      description: 'From concept to deployment, our full-service team handles every aspect of your digital presence, ensuring cohesive experiences across all platforms.'
    },
    {
      id: 'technology',
      title: 'Future-Proof Technology',
      icon: <Zap className="w-8 h-8 text-emerald-500" />,
      description: 'We build with scalability in mind, using the latest technologies that adapt to evolving digital landscapes and business needs.'
    },
    {
      id: 'results',
      title: 'Results-Driven Approach',
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      description: 'Every pixel and line of code serves a purpose – to drive user engagement, increase conversions, and deliver measurable business results.'
    },
    {
      id: 'communication',
      title: 'Transparent Communication',
      icon: <MessageSquare className="w-8 h-8 text-emerald-500" />,
      description: 'Enjoy regular updates, clear timelines, and open communication throughout your project journey.'
    },
    {
      id: 'support',
      title: 'Post-Launch Support',
      icon: <Headphones className="w-8 h-8 text-emerald-500" />,
      description: "Our relationship doesn't end at launch – we provide ongoing maintenance and support to ensure your digital assets continue to perform excellently."
    }
  ];
const servicesHeaidng = {
  title : "Services",
  description : " Comprehensive digital solutions tailored to your unique needs. Our expert team delivers exceptional results across web, mobile, and design."
}
  return (
    <section>
        {/* Section Header */}
       
        
        <PagesHeading title={servicesHeaidng.title} description={servicesHeaidng.description}/>
      <div className="container mx-auto ">
      
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-16">
          {/* Left Column - Services List */}
          <div className="lg:col-span-1 space-y-4">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-emerald-500"
                onClick={() => setActiveTab(service.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <p className="text-sm text-emerald-600 font-medium">View Details</p>
                  <div className={`w-2 h-2 rounded-full ${activeTab === service.id ? 'bg-emerald-500' : 'bg-gray-300'}`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Detail Panel */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 border border-gray-100 min-h-[500px]">
            {activeTab === 'why-choose-us' ? (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-amber-50 p-3 rounded-full">
                    <Users className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Why Choose Us?</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {whyChooseUs.map((reason) => (
                    <div key={reason.id} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all">
                      <div className="flex-shrink-0 mt-1">
                        {reason.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{reason.title}</h4>
                        <p className="text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              services.find(s => s.id === activeTab) && (
                <div className="animate-fadeIn">
                  <div className="flex items-center gap-4 mb-6">
                    {services.find(s => s.id === activeTab).icon}
                    <h3 className="text-2xl font-bold text-gray-800">{services.find(s => s.id === activeTab).title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {services.find(s => s.id === activeTab).description}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">What we deliver:</h4>
                  <ul className="mb-6 space-y-2">
                    {services.find(s => s.id === activeTab).details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="text-emerald-500 mt-1 flex-shrink-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies & Tools</h4>
                    <p className="text-gray-600 text-sm">{services.find(s => s.id === activeTab).tech}</p>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                  
                  <Link to={'/'}>    <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                      Go Back
                    </button></Link>
                       <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                      Get Started
                    </button>
               
                   
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;