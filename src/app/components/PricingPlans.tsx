import React from "react";

const plans = [
  {
    title: "Free Plan (Forever Free)!",
    features: [
      "Access to basic meal plans",
      "Healthy recipe suggestions",
      "Progress tracking",
      "Work intake reminders",
    ],
    buttonText: "Start for Free!",
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "Premium Plan (Best Value)",
    features: [
      "Everything in Free Plan",
      "Exclusive premium recipes",
      "Advanced progress tracking",
      "Smart grocery lists",
      "Priority support",
    ],
    buttonText: "Start Your Free Trial!",
    gradient: "from-blue-500 to-blue-700",
  },
];

export default function PricingPlans() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-purple-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-wide">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gray-300 transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {plan.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full text-white font-bold py-3 rounded-lg bg-gradient-to-r ${plan.gradient} hover:opacity-90 transition-all`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
