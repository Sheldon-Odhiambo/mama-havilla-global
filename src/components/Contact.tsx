import { Mail, Phone, MapPin, MessageCircle, Copy } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "mdindi91@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-32 pb-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-gray-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-gray-200" />
              <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border border-gray-200" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-4 rounded-xl border border-gray-200"></textarea>
              <button className="w-full bg-green-700 text-white font-bold py-4 rounded-full">Send Message</button>
            </form>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="flex items-center gap-4"><MapPin className="text-green-700" /> Ongata Rongai, Opposite PCEA Church Ongata Rongai</p>
            <p className="flex items-center gap-4"><Phone className="text-green-700" /> +254 717 096 392</p>
            <a href="https://wa.me/254717096392" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-green-600 transition-colors">
              <MessageCircle className="text-green-700" /> WhatsApp: +254 717 096 392
            </a>
            <div className="flex items-center gap-4">
              <Mail className="text-green-700" />
              <span>{email}</span>
              <button onClick={copyToClipboard} className="text-gray-400 hover:text-green-700">
                <Copy size={16} />
              </button>
              {copied && <span className="text-xs text-green-700">Copied!</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
