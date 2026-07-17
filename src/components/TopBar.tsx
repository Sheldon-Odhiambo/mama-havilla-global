import { MapPin, Mail, Phone, Heart } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white text-xs py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <span className="flex items-center"><MapPin size={14} className="mr-1" /> Ongata Rongai, Opposite PCEA Church Ongata Rongai</span>
          <span className="flex items-center"><Mail size={14} className="mr-1" /> mdindi91@gmail.com</span>
          <span className="flex items-center"><Phone size={14} className="mr-1" /> +254 717 096 392</span>
        </div>
        <div className="flex items-center">
          <span className="flex items-center font-bold"><Heart size={14} className="mr-1" /> Become a Volunteer</span>
        </div>
      </div>
    </div>
  );
}
