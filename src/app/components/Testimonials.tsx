import React from "react";

const testimonials = [
  {
    text: "“FitSnap completely changed the way I eat! The personalized meal plans are easy to follow and actually delicious.”",
    name: "Emily R.",
  },
  {
    text: "“I used to struggle with what to cook every day. Now I just check my plan and enjoy healthy meals without overthinking.”",
    name: "James L.",
  },
  {
    text: "“Finally, a health app that understands my needs! I love how I can choose my diet preferences and get tailored recipes.”",
    name: "Sofia M.",
  },
  {
    text: "“Thanks to FitSnap, I’ve lost 10 pounds in 2 months while still enjoying my favorite foods in moderation.”",
    name: "Daniel K.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-wide">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 transform hover:-translate-y-2 transition-all duration-300"
            >
              <p className="text-gray-700 italic">{testimonial.text}</p>
              <p className="text-blue-600 font-bold mt-4">
                – {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
