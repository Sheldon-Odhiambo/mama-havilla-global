import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer({ onVolunteerClick }: { onVolunteerClick: () => void }) {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-20 pb-10" aria-label="Footer">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544716279-191a3297598c?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gray-900/80"></div>
      
      <div className="relative z-10">
        {/* Testimonial Section */}
        <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
          <h3 className="text-white text-lg font-bold mb-4">Donation Holders say <span className="text-yellow-400">Read Below</span></h3>
          <p className="italic text-lg mb-6 max-w-2xl mx-auto">"Mama Havillah has completely transformed our community, providing hope where there was once despair. We are forever grateful."</p>
          <p className="text-white font-bold">Milly</p>
          <p className="text-sm">(Community Leader)</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 border-t border-gray-700 pt-16">
          {/* Charity Info */}
          <div>
            <div className="mb-6">
                  <img
                    src="/assets/mh2logo-r.png"
                    alt="Mama Havillah Logo"
                    className="h-20 w-auto"
                  />
                </div>
            <p className="mb-6 text-sm">Empowering communities through sustainable development, education, and compassionate care.</p>
            <div className="space-y-3 text-sm">
              <p className="flex items-center"><MapPin size={16} className="mr-2 text-yellow-400" /> Ongata Rongai, Opposite PCEA Church Ongata Rongai</p>
              <p className="flex items-center"><Phone size={16} className="mr-2 text-yellow-400" /> +254 717 096 392</p>
              <p className="flex items-center"><Mail size={16} className="mr-2 text-yellow-400" /> mdindi91@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-yellow-400">{link.name}</a>
                </li>
              ))}
              <li>
                <button onClick={onVolunteerClick} className="hover:text-yellow-400">Volunteer</button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Newsletter Signup</h4>
            <p className="text-sm mb-6">Get the latest updates on our impact and projects.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="bg-gray-800 p-3 w-full text-sm focus:outline-none" />
              <button className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 text-sm">SUBMIT</button>
            </div>
            <h4 className="text-white font-bold text-lg mt-10 mb-4">Follow us</h4>
            <div className="flex space-x-4 text-gray-400">
              <Facebook size={20} className="hover:text-yellow-400 cursor-pointer" />
              {/* <Twitter size={20} className="hover:text-yellow-400 cursor-pointer" />
              <Instagram size={20} className="hover:text-yellow-400 cursor-pointer" />
              <Linkedin size={20} className="hover:text-yellow-400 cursor-pointer" /> */}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-16 text-center text-sm border-t border-gray-700 pt-8">
          &copy; 2026 Mama Havillah Global. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
