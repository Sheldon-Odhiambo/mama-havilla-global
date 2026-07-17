import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Success Stories</h2>
        <div className="flex overflow-x-auto gap-8 pb-8 snap-x">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-[300px] md:min-w-[400px] p-8 bg-gray-50 rounded-2xl shadow-md snap-start border border-gray-100">
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
