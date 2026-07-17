import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7784b9?q=80&w=600', category: 'Outreach', title: 'Community Mission' },
  { id: 2, src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600', category: 'Wellness', title: 'Health Camp' },
  { id: 3, src: 'https://images.unsplash.com/photo-1544716279-191a3297598c?q=80&w=600', category: 'School', title: 'Community School' },
  { id: 4, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600', category: 'Outreach', title: 'Feeding Program' },
  { id: 5, src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600', category: 'Wellness', title: 'Wellness Workshop' },
  { id: 6, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600', category: 'School', title: 'Classroom Session' },
];

const categories = ['All', 'Outreach', 'School', 'Wellness'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="pt-32 pb-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Gallery</h2>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition ${filter === cat ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredImages.map(img => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg h-80"
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xl font-bold text-white">{img.title}</p>
                  <p className="text-sm text-gray-200">{img.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
