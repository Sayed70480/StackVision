import React from "react";
import {
  Code,
  PenTool,
  Smartphone,
  Monitor,
} from "lucide-react";

const teamMembers = [
  {
    name: "Syed Sikandar Shah",
    role: "Full Stack Developer & Graphic Designer",
    icon: <Code className="w-6 h-6 text-teal-500" />,
  },
  {
    name: "Atif Khan",
    role: "Frontend Developer (React)",
    icon: <PenTool className="w-6 h-6 text-teal-500" />,
  },
  {
    name: "Faisal Imran",
    role: "Mobile App Developer (React Native)",
    icon: <Smartphone className="w-6 h-6 text-teal-500" />,
  },
  {
    name: "Roman Khan",
    role: "WordPress Developer",
    icon: <Monitor className="w-6 h-6 text-teal-500" />,
  },
];

function TeamSec() {
  return (
    <section id="team" className=" px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-teal-50 p-3 rounded-full">
                {member.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#0A2540]">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSec;
