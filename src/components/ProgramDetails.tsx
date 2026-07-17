import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { programCategories } from '../data';
import { ArrowLeft } from 'lucide-react';

export default function ProgramDetails() {
  const { id } = useParams();
  const program = programCategories
    .flatMap(c => c.items)
    .find(p => p.id === id);

  if (!program) return <div>Program not found</div>;

  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <Helmet>
        <title>{program.title} | Mama Havillah Global</title>
        <meta name="description" content={program.desc} />
        <meta property="og:title" content={program.title} />
        <meta property="og:image" content={program.img} />
      </Helmet>
      <Link to="/" className="flex items-center gap-2 text-green-700 mb-8 hover:underline">
        <ArrowLeft size={20} /> Back to Home
      </Link>
      <img src={program.img} alt={program.title} className="w-full h-96 object-cover rounded-3xl mb-8" referrerPolicy="no-referrer" />
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{program.title}</h1>
      <p className="text-gray-700 leading-relaxed text-lg mb-8">{program.desc}</p>
      
      <div className="bg-gray-100 p-8 rounded-3xl mb-8">
          <h3 className="text-2xl font-bold mb-4">Detailed Information</h3>
          <p className="text-gray-600 mb-4">This program is designed to create a meaningful impact on the community by {program.desc.toLowerCase()}. We focus on sustainable solutions, education, and direct support.</p>
          <p className="text-gray-600">Our team works tirelessly to ensure that resources reach those who need them most.</p>
      </div>

      <div className="bg-green-700 p-8 rounded-3xl text-white">
        <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
        <p className="mb-6">Join us in making a difference by supporting our programs.</p>
        <button className="bg-white text-green-700 font-bold py-3 px-6 rounded-full">Donate Now</button>
      </div>
    </div>
  );
}
