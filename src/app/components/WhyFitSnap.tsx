// components/WhyFitSnap.tsx
import React from "react";

const features = [
  {
    icon: "🔍",
    title: "Personalized Meal Plans",
    description:
      "Tailored meal plans based on your dietary preferences and goals.",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Track your nutrition and fitness progress effortlessly.",
  },
  {
    icon: "🍎",
    title: "Healthy Recipes",
    description: "Discover delicious and healthy recipes curated by experts.",
  },
  {
    icon: "⏰",
    title: "Smart Reminders",
    description: "Get reminders for meals, workouts, and hydration.",
  },
];

export default function WhyFitSnap() {
  return (
    <section className="text-center py-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-white mb-12">Why FitSnap?</h2>
      <div className="flex justify-center items-center space-x-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
