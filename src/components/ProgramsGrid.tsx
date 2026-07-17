import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { programCategories } from '../data';

export default function ProgramsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="programs"
      className="bg-gray-50 px-4 pt-32 pb-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
          Our Programs
        </h2>

        {programCategories.map((category) => (
          <motion.div
            key={category.name}
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="mb-8 border-l-4 border-red-600 pl-4 text-2xl font-bold text-green-700">
              {category.name}
            </h3>

            <div className="grid gap-8 md:grid-cols-3">
              {category.items.map((prog) => (
                <motion.div
                  key={prog.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="flex w-full flex-col overflow-hidden rounded-2xl border-b-4 border-green-700 bg-white shadow-lg"
                >
                  {/* Program Image */}
                  <div className="h-56 overflow-hidden">
                    <img
                      src={prog.img}
                      alt={prog.title}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-grow flex-col p-6">
                    <h4 className="mb-2 text-xl font-bold text-gray-900">
                      {prog.title}
                    </h4>

                    <p className="mb-4 flex-grow text-gray-600">
                      {prog.desc}
                    </p>

                    <Link
                      to={`/program/${prog.id}`}
                      className="block font-semibold text-green-700 hover:underline"
                    >
                      {'cta' in prog ? prog.cta : 'Read more →'}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}