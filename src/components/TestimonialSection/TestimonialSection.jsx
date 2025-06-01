import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Hammad khan",
    role: "CEO, Ford9Solution",
    message:
      "Absolutely loved working with this team! They delivered exactly what I needed — on time and with incredible attention to detail.",
  },
  {
    name: "Ahmed Raza",
    role: "Co-founder, WebGo",
    message:
      "Professional, responsive, and highly skilled. From UI to backend, they nailed every detail and exceeded our expectations.",
  },
  {
    name: "Fatima Khan",
    role: "Founder, StyleCart",
    message:
      "Their creativity and work ethic are unmatched. They helped me build my online store from scratch and it looks amazing!",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-16" id="testimonials">
      <div className="max-w-6xl mx-auto w-[90%] text-center">
        <Quote className="mx-auto text-teal-500 w-10 h-10 mb-3" />
        <h2 className="text-3xl sm:text-4xl text-[#0A2540] font-extrabold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-base sm:text-lg">
          Real words from real people we’ve worked with. We focus on quality,
          creativity, and results — and our clients agree.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.message}"</p>
              <h4 className="font-semibold text-[#0A2540]">{testimonial.name}</h4>
              <span className="text-sm text-gray-500">{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
