import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { stories } from '../data';

function StoryCard({ story }: { story: typeof stories[0]; key?: React.Key }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden"
    >
      <img src={story.img} alt={story.title} className="w-full h-56 object-cover" referrerPolicy="no-referrer" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{story.title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {story.desc}
        </p>
        <Link 
          to={`/story/${story.id}`}
          className="text-green-700 font-bold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </motion.div>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="pt-32 pb-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Impact Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
