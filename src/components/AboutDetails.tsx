import { motion } from 'motion/react';

export default function AboutDetails() {
  return (
    <section id="about-details" className="py-20 bg-white px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">About Mama Havillah</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img src="/assets/about6.jpg" alt="Mama Havillah mission" className="rounded-3xl shadow-xl" referrerPolicy="no-referrer" />
            <div>
                <h3 className="text-3xl font-bold text-green-700 mb-6">Our Story</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Founded on the principles of compassion and community, Mama Havillah Global has been at the forefront of transformative change. What started as a small initiative to support a handful of children has grown into a comprehensive support network.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    We believe that every child deserves a safe place to learn, every woman deserves the opportunity to thrive, and every community deserves access to basic needs like clean water and healthcare.
                </p>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            <img src="/assets/about5.jpg" alt="School" className="rounded-2xl h-64 object-cover w-full shadow-lg" referrerPolicy="no-referrer" />
            <img src="/assets/about7.jpg" alt="Health" className="rounded-2xl h-64 object-cover w-full shadow-lg" referrerPolicy="no-referrer" />
            <img src="/assets/about9.jpg" alt="Outreach" className="rounded-2xl h-64 object-cover w-full shadow-lg" referrerPolicy="no-referrer" />
        </div>

        <div className="bg-green-50 p-10 rounded-3xl">
            <h3 className="text-3xl font-bold text-green-900 mb-6">Our Core Values</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-800">
                <li className="flex items-center gap-2">✔ Compassion in all actions</li>
                <li className="flex items-center gap-2">✔ Community empowerment</li>
                <li className="flex items-center gap-2">✔ Sustainable impact</li>
                <li className="flex items-center gap-2">✔ Transparency and integrity</li>
            </ul>
        </div>
      </div>
    </section>
  );
}
