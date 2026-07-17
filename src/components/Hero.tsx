import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Hero({ onDonateClick }: { onDonateClick: () => void }) {
  return (
    <section id="home" className="pt-32 pb-16 px-4 md:px-8 bg-white overflow-hidden relative">
      {/* Background shape accent */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left z-10">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tighter"
          >
            Turning Pain Into Purpose, Hope Into Action.
          </motion.h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            We are building a world where everyone has the power to shape their lives, rooted in compassion and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={onDonateClick}
              className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-full text-lg shadow-md"
            >
              Donate Now
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#programs"
              className="bg-transparent border-2 border-black hover:bg-black hover:text-white font-bold py-4 px-10 rounded-full text-lg text-center"
            >
              Discover +
            </motion.a>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] w-full"
        >
          {/* Main Photo Masked - Using a simple blob clip-path as a substitute for Africa map */}
          <div className="flex h-full w-full items-center justify-center">
                <div
                  className="h-[700px] w-[700px] shadow-2xl"
                  style={{
                    backgroundImage: "url('/assets/landing page.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                    WebkitMaskImage: "url('/assets/africa.svg')",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "contain",

                    maskImage: "url('/assets/africa.svg')",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "contain",
                  }}
                />
              </div>
          {/* Stats Blob */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="absolute -bottom-10 -left-10 bg-yellow-400 w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white"
          >
            <Heart className="text-gray-900 mb-1" size={24} />
            <span className="text-3xl font-bold text-gray-900">288</span>
            <span className="text-xs font-bold text-center px-2 text-gray-900">children in need</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
