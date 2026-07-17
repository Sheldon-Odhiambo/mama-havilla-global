import { motion } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onDonateClick, onVolunteerClick }: { onDonateClick: () => void, onVolunteerClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'About', href: '#about-details' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white shadow-md z-40 border-b border-gray-100" aria-label="Main Navigation">
      <div className="max-w-7xal mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center ml-26">
  <a href="/" className="flex items-center">
    <img
      src="/assets/logo1.png"
      alt="Mama Havillah Global Logo"
      className="h-20 md:h-24 w-auto"
    />
  </a>
</div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-900 hover:text-green-700 text-sm font-semibold tracking-wide focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300 rounded-sm">
                {link.name}
              </a>
            ))}
            <button onClick={onVolunteerClick} className="text-green-700 font-bold text-sm hover:underline">
              Volunteer
            </button>
            <button onClick={onDonateClick} className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-full text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300">
              Donate
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300 rounded-sm" aria-label="Toggle navigation menu">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white px-4 pt-2 pb-6 space-y-1"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-900 block py-3 border-b border-gray-100 font-medium focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300 rounded-sm">
              {link.name}
            </a>
          ))}
          <button onClick={onVolunteerClick} className="text-green-700 block py-3 border-b border-gray-100 font-bold">
            Volunteer
          </button>
        </motion.div>
      )}
    </nav>
  );
}
