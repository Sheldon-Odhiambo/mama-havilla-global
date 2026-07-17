import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { stories } from '../data';
import { ArrowLeft } from 'lucide-react';

export default function StoryDetails() {
  const { id } = useParams();
  const story = stories.find(s => s.id === id);

  if (!story) return <div>Story not found</div>;

  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <Helmet>
        <title>{story.title} | Mama Havillah Global</title>
        <meta name="description" content={story.desc} />
        <meta property="og:title" content={story.title} />
        <meta property="og:image" content={story.img} />
      </Helmet>
      <Link to="/" className="flex items-center gap-2 text-green-700 mb-8 hover:underline">
        <ArrowLeft size={20} /> Back to Home
      </Link>
      <img src={story.img} alt={story.title} className="w-full h-96 object-cover rounded-3xl mb-8" referrerPolicy="no-referrer" />
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{story.title}</h1>
      <p className="text-gray-700 leading-relaxed text-lg mb-8">{story.fullDesc}</p>
      
      <div className="bg-gray-50 p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-4">More about this journey</h3>
        <p className="text-gray-600">This is a placeholder for more detailed information about the impact story. You can add more text, images, or testimonials here to provide a deeper understanding of the transformation achieved.</p>
      </div>
    </div>
  );
}
