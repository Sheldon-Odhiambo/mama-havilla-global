import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Hero({
  onDonateClick,
}: {
  onDonateClick: () => void;
}) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-4 pt-24 pb-16 md:px-8 md:pt-32"
    >
      {/* Background accent */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-yellow-400 opacity-20 blur-3xl md:h-96 md:w-96" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Left Side */}
        <div className="z-10 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-7xl"
          >
            Turning Pain Into Purpose,
            <br className="hidden md:block" />
            Hope Into Action.
          </motion.h1>

          <p className="mx-auto mb-8 max-w-lg text-base text-gray-600 sm:text-lg md:mx-0 md:text-xl">
            We are building a world where everyone has the power to shape
            their lives, rooted in compassion and community.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={onDonateClick}
                    className="rounded-full bg-black px-5 py-2 text-sm font-bold text-white shadow-md transition hover:bg-gray-800 sm:px-8 sm:py-4 sm:text-lg"
                  >
                    Donate Now
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#programs"
                    className="rounded-full border-2 border-black px-5 py-2 text-center text-sm font-bold transition hover:bg-black hover:text-white sm:px-8 sm:py-4 sm:text-lg"
                  >
                    Discover +
                  </motion.a>
                </div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex h-[350px] w-full items-center justify-center sm:h-[450px] md:h-[600px]"
        >
          {/* Africa map image */}
          <div
            className="h-[320px] w-[320px] sm:h-[450px] sm:w-[450px] md:h-[650px] md:w-[650px]"
            style={{
              backgroundImage: "url('/assets/landing page.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',

              WebkitMaskImage: "url('/assets/africa.svg')",
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              WebkitMaskSize: 'contain',

              maskImage: "url('/assets/africa.svg')",
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain',
            }}
          />

          {/* Stats card */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="absolute bottom-0 left-2 flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-white bg-yellow-400 shadow-xl sm:h-28 sm:w-28 md:-bottom-6 md:-left-6 md:h-32 md:w-32"
          >
            <Heart className="mb-1 text-gray-900" size={20} />

            <span className="text-2xl font-bold text-gray-900 md:text-3xl">
              288
            </span>

            <span className="px-1 text-center text-[10px] font-bold text-gray-900 md:text-xs">
              Children in need
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}