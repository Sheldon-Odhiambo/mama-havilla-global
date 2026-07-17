import { motion } from 'motion/react';
import { Droplets, GraduationCap, Utensils, HeartPulse } from 'lucide-react';

const features = [
  { icon: Utensils, title: 'Healthy Food', desc: 'Feeding families and children in need.', color: 'bg-white' },
  { icon: GraduationCap, title: 'Education', desc: 'Supporting education for vulnerable children.', color: 'bg-white' },
  { icon: Droplets, title: 'Pure Water', desc: 'Providing sustainable water solutions.', color: 'bg-white' },
  { icon: HeartPulse, title: 'Medical', desc: 'Holistic health and wellness.', color: 'bg-white' },
];

export default function Features() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {features.map((feat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className={`${feat.color} p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center`}
          >
            <feat.icon size={40} className="mb-4 text-green-700" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">{feat.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
