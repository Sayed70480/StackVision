import React from "react";
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
  Monitor,
  BarChart2,
  Palette,
  GitMerge,
} from "lucide-react";

const Card = () => {
  const services = [
    {
      id: "full-stack",
      title: "Full Stack Development",
      icon: <Code className="w-6 h-6 text-teal-500" />,
    },
    {
      id: "frontend",
      title: "Front-End Excellence",
      icon: <Layers className="w-6 h-6 text-teal-500" />,
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      icon: <Smartphone className="w-6 h-6 text-teal-500" />,
    },
    {
      id: "wordpress",
      title: "WordPress Excellence",
      icon: <Globe className="w-6 h-6 text-teal-500" />,
    },
    {
      id: "design",
      title: "Graphic Design & Branding",
      icon: <Paintbrush className="w-6 h-6 text-teal-500" />,
    },
  ];

  const whyChooseUs = [
    {
      id: "expertise",
      title: "End-to-End Expertise",
      icon: <Layers className="w-8 h-8 text-teal-500" />,
    },
    {
      id: "technology",
      title: "Future-Proof Technology",
      icon: <Zap className="w-8 h-8 text-teal-500" />,
    },
    {
      id: "results",
      title: "Results-Driven Approach",
      icon: <ShieldCheck className="w-8 h-8 text-teal-500" />,
    },
    {
      id: "communication",
      title: "Transparent Communication",
      icon: <MessageSquare className="w-8 h-8 text-teal-500" />,
    },
    {
      id: "support",
      title: "Post-Launch Support",
      icon: <Headphones className="w-8 h-8 text-teal-500" />,
    },
    {
      id: "fullstack-integration",
      title: "Seamless Stack Integration",
      icon: <GitMerge className="w-8 h-8 text-teal-500" />,
    },
    {
      id: "responsive-design",
      title: "Responsive UI/UX Design",
      icon: <Monitor className="w-8 h-8 text-teal-500" />,
    },
    {
      id: "cross-platform",
      title: "Cross-Platform Mobile Solutions",
      icon: <Smartphone className="w-8 h-8 text-teal-500" />,
    },
    {
      id: "cms-optimization",
      title: "WordPress Performance Optimization",
      icon: <BarChart2 className="w-8 h-8 text-teal-500" />,
    },
    {
      id: "brand-strategy",
      title: "Strategic Brand Identity",
      icon: <Palette className="w-8 h-8 text-teal-500" />,
    },
  ];

  return (
    <section className="px-8  ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services List */}
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-teal-500 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-teal-50 p-3 rounded-lg">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100 min-h-[500px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-amber-50 p-3 rounded-full">
                <Users className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Why Choose Us?</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((reason) => (
                <div
                  key={reason.id}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all"
                >
                  <div className="mt-1">{reason.icon}</div>
                  <div>
                    <h4 className="text-md font-semibold text-gray-800">
                      {reason.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
