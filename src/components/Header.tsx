import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import Navigation from './Navigation';
import NAP from './NAP';

const napData = {
  name: "PGK Hiszpaniia Podatki",
  address: {
    street: "Calle Gran Vía 45, 3º Planta",
    city: "Madrid",
    region: "Comunidad de Madrid", 
    postalCode: "28013",
    country: "España"
  },
  phone: "+34 91 123 45 67",
  email: "info@pgk-hiszpaniia-podatki.com",
  hours: []
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ backgroundColor: 'rgba(40, 46, 50, 0.95)' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity duration-300">
              <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#917a52' }}>
                <span className="text-white font-bold text-lg">A&H</span>
              </div>
              <div>
                <h1 className="text-white text-xl font-serif tracking-wider">
                  PGK Hiszpaniia Podatki
                </h1>
              </div>
            </a>
          </div>
          
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          
          <div className="hidden lg:block">
            <NAP data={napData} variant="header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;