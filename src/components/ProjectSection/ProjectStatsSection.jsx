import { Code, Smartphone, Brush, Globe, Layers, Settings } from "lucide-react";

export default function ProjectStatsSection() {
  const stats = [
    { icon: <Code className="w-8 h-8 text-teal-500" />, title: "Full Stack Projects", count: "12+" },
    { icon: <Smartphone className="w-8 h-8 text-teal-500" />, title: "Mobile Apps", count: "10+" },
    { icon: <Brush className="w-8 h-8 text-teal-500" />, title: "Design Projects", count: "30+" },
    { icon: <Globe className="w-8 h-8 text-teal-500" />, title: "WordPress Sites", count: "40+" },
    { icon: <Layers className="w-8 h-8 text-teal-500" />, title: "UI/UX Designs", count: "20+" },
    { icon: <Settings className="w-8 h-8 text-teal-500" />, title: "Custom Solutions", count: "15+" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Work Speaks for Itself</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-base sm:text-lg">
          With a growing portfolio of completed projects, our team delivers quality across every service we offer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 min-h-[200px]"
            >
              <div className="bg-teal-50 p-3 rounded-lg mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-3xl font-bold text-primary">{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
