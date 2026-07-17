import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const values = ['Compassion', 'Hope', 'Integrity', 'Community', 'Empowerment', 'Sustainability'];
  
  return (
    <section id="about" className="pt-32 pb-20 bg-gray-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Collage-style Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <img src="/assets/about1.jpg" alt="Children" className="rounded-3xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
          <img src="/assets/about2.jpg" alt="Community" className="rounded-3xl w-full h-64 object-cover mt-12" referrerPolicy="no-referrer" />
        </div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-green-700 font-bold mb-2">ABOUT US</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">United in compassion, changing lives</h2>
          <p className="text-gray-700 mb-6">
            Driven by compassion and a shared vision, we work hand-in-hand with communities to create meaningful change.
          </p>
          
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm mb-6">
            <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                <CheckCircle />
            </div>
            <div>
                <h4 className="font-bold text-gray-900">Healthcare Support</h4>
                <p className="text-sm text-gray-600">Providing essential healthcare services and resources to communities.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t pt-6">
            <img src="/assets/about3.jpg" alt="Avatar" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
            <div>
                <h4 className="font-bold text-orange-600">75,958</h4>
                <p className="text-sm font-bold">Helped Fund</p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#about-details"
            className="mt-8 bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block text-center"
          >
            About Us →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
