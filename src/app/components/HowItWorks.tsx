// components/HowItWorks.tsx
import React from "react";

const steps = [
  {
    title: "Sign Up & Set Your Profile",
    description:
      "Create your free account in seconds. Choose your dietary preferences, goals, and lifestyle.",
  },
  {
    title: "Get Your Personalized Plan",
    description:
      "Receive a customized meal plan tailored to your needs. Whether you want to lose weight, gain muscles, or simply eat healthier, FitSnap has you covered.",
  },
  {
    title: "Enjoy Healthy, Delicious Meals",
    description:
      "Follow easy-to-make recipes, track your progress, and stay motivated with smart reminders.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
