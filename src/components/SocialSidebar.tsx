import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-6">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-700 rounded-full"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
      
      <div className="w-px h-20 bg-gray-600 mx-auto mt-8"></div>
      
      <div className="transform -rotate-90 origin-center">
        <span className="text-sm tracking-wider" style={{ color: '#917a52' }}>@pgk.inmobiliario</span>
      </div>
    </div>
  );
};

export default SocialSidebar;