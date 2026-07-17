import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl z-50 w-full max-w-md shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" aria-label="Close modal">
              <X />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-green-700">Volunteer With Us</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-gray-200" required />
              <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border border-gray-200" required />
              <textarea placeholder="Tell us how you'd like to help" rows={4} className="w-full p-4 rounded-xl border border-gray-200"></textarea>
              <button type="submit" className="w-full bg-green-700 text-white font-bold py-3 rounded-full hover:bg-green-800">
                Submit Application
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
