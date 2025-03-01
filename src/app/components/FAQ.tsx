import { FAQItem } from "../types";

interface FAQProps {
  faqItems: FAQItem[];
  activeFAQIndex: number | null;
  toggleFAQ: (index: number) => void;
}

export default function FAQ({ faqItems, activeFAQIndex, toggleFAQ }: FAQProps) {
  return (
    <section id="faq" className="container mx-auto p-6 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b-2 border-gray-200">
            <button
              className="w-full text-left p-4 font-semibold text-gray-800 hover:text-green-600 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <span>{item.question}</span>
                <span className="transform transition-all duration-300">
                  {activeFAQIndex === index ? "▲" : "▼"}
                </span>
              </div>
            </button>
            {activeFAQIndex === index && (
              <p className="p-4 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
