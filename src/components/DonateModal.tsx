import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
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
            <h2 className="text-2xl font-bold mb-6 text-green-700">Support Our Mission</h2>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl text-white shadow-lg shadow-green-200">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">M-Pesa</h3>
                  <div className="w-10 h-6 bg-white rounded-sm flex items-center justify-center font-black text-green-700 text-[10px]">LIPA</div>
                </div>
                <p className="text-3xl font-mono font-bold tracking-widest">XXXXXX</p>
                <p className="text-xs text-green-100 mt-2 uppercase tracking-wider">Paybill Number</p>
              </div>
              <div className="p-4 border-2 border-gray-100 rounded-xl">
                <h3 className="font-bold text-gray-900">Bank Donation</h3>
                <p className="text-sm text-gray-600">Account: XXX-XXX-XXX</p>
              </div>
            </div>
            <button onClick={onClose} className="w-full mt-6 bg-green-700 text-white font-bold py-3 rounded-full hover:bg-green-800">
              Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
