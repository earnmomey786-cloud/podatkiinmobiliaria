import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Acerca de Nosotros', href: '#about' },
    { name: 'Nuestro Equipo', href: '#team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <nav className="relative">
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
          >
            {item.name}
          </a>
        ))}
      </div>
      
      {/* Mobile menu button */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-12 right-0 bg-gray-800 rounded-lg shadow-lg p-4 min-w-48 md:hidden z-50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;