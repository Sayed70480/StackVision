import {
  Target,
  Rocket,
  ShieldCheck,
  Lightbulb,
  Brain,
  ThumbsUp,
} from "lucide-react";

export default function GoalsSection() {
  const goals = [
    {
      icon: <Rocket className="text-blue-600 w-10 h-10" />,
      title: "Drive Digital Growth",
      description:
        "We strive to help our clients grow with powerful, scalable, and modern digital products.",
    },
    {
      icon: <ShieldCheck className="text-teal-500 w-10 h-10" />,
      title: "Ensure Quality & Security",
      description:
        "Every line of code and every pixel is crafted with performance and security in mind.",
    },
    {
      icon: <Lightbulb className="text-yellow-500 w-10 h-10" />,
      title: "Innovate Continuously",
      description:
        "We embrace new technologies and creative solutions to stay ahead and innovate.",
    },
    {
      icon: <ThumbsUp className="text-purple-600 w-10 h-10" />,
      title: "Deliver Client Satisfaction",
      description:
        "Our success is measured by how satisfied our clients are with our work and support.",
    },
    {
      icon: <Target className="text-red-500 w-10 h-10" />,
      title: "Stay Focused & Committed",
      description:
        "Every project is approached with dedication and clear attention to your business goals.",
    },
    {
      icon: <Brain className="text-yellow-500 w-10 h-10" />,
      title: "Think Creatively & Strategically",
      description:
        "We approach every challenge with innovative thinking and a clear strategy to maximize impact and value.",
    },
  ];

  return (
    <section className="bg-white pb-16" id="goals">
      <div className="max-w-5xl mx-auto w-[90%] text-center">
        <Target className="mx-auto text-teal-500 w-10 h-10 mb-3" />
        <h2 className="text-3xl sm:text-4xl text-[#0A2540] font-extrabold mb-4">
          Our Goals
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-base sm:text-lg">
          We aim to empower businesses with top-tier digital solutions by combining creativity, technology, and a client-first mindset. Our mission is to deliver products that drive results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {goals.map((goal, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1 shrink-0">{goal.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-[#0A2540] mb-1">
                  {goal.title}
                </h3>
                <p className="text-sm text-gray-600">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
