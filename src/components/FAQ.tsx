import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How can I support Mama Havillah Global?",
    answer: "You can support us through donations, volunteering, or partnering with our community outreach and education initiatives."
  },
  {
    question: "Where does my donation go?",
    answer: "Your donations directly fund our programs, including the Havillah Hope Orphanage, community schools, health wellness centers, and clean water initiatives."
  },
  {
    question: "Can I volunteer internationally?",
    answer: "Yes! Through our PhilanthroTravels program, you can travel with a purpose and engage in direct community support."
  },
  {
    question: "How do you ensure transparency?",
    answer: "We are committed to integrity and transparency in all our operations, regularly sharing updates and impact stories with our community."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-32 pb-20 bg-gray-50 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-gray-900"
              >
                {faq.question}
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                  <ChevronDown className="text-green-700" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
