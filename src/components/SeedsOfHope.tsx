import { useState } from 'react';
import { motion } from 'motion/react';
import DonateModal from './DonateModal';

export default function SeedsOfHope() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <section id="seeds" className="pt-32 pb-20 bg-green-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Seeds of Hope</h2>
        <p className="text-lg text-gray-700 mb-8">
          A women's empowerment revolving fund program that provides women with capital, mentorship, community support, and economic opportunities.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsDonateOpen(true)}
          className="bg-red-600 text-white font-bold py-3 px-8 rounded-full"
        >
          Support Seeds of Hope
        </motion.button>
      </div>
      <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
    </section>
  );
}
