import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import NAP from './NAP';

const Footer: React.FC = () => {
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
    hours: [
      "Lunes - Viernes: 9:00 - 18:00",
      "Sábados: 10:00 - 14:00",
      "Domingos: Cerrado"
    ]
  };

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Acerca de Nosotros', href: '#about' },
    { name: 'Nuestro Equipo', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    { name: 'Asesoría Fiscal Inmobiliaria', href: '#servicios-fiscales' },
    { name: 'Gestión de Inversiones', href: '#inversiones' },
    { name: 'Propiedades de Lujo', href: '#propiedades-lujo' },
    { name: 'Consultoría Legal', href: '#consultoria-legal' },
    { name: 'Valoraciones', href: '#valoraciones' }
  ];

  const locations = [
    { name: 'Madrid Centro', href: '#madrid-centro' },
    { name: 'Barcelona', href: '#barcelona' },
    { name: 'Valencia', href: '#valencia' },
    { name: 'Sevilla', href: '#sevilla' },
    { name: 'Costa del Sol', href: '#costa-del-sol' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/pgk.inmobiliario', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/pgk.inmobiliario', label: 'Instagram' },
    { icon: Twitter, href: 'https://www.twitter.com/pgk_inmobiliario', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/pgk-hiszpaniia-podatki', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info & NAP */}
          <div className="lg:col-span-1">
            <NAP data={napData} variant="footer" showHours={true} />
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-bronze-500 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-bronze-500 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-bronze-500 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Ubicaciones</h3>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.name}>
                  <a
                    href={location.href}
                    className="text-gray-300 hover:text-bronze-500 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {location.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 PGK Hiszpaniia Podatki. Todos los derechos reservados.</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-bronze-500 transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#terms" className="text-gray-400 hover:text-bronze-500 transition-colors duration-300">
                Términos de Uso
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-bronze-500 transition-colors duration-300">
                Política de Cookies
              </a>
            </div>
          </div>
          
          {/* Schema.org markup for footer */}
          <div className="hidden">
            <div itemScope itemType="https://schema.org/RealEstateAgent">
              <span itemProp="name">PGK Hiszpaniia Podatki</span>
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">Calle Gran Vía 45, 3º Planta</span>
                <span itemProp="addressLocality">Madrid</span>
                <span itemProp="addressRegion">Comunidad de Madrid</span>
                <span itemProp="postalCode">28013</span>
                <span itemProp="addressCountry">España</span>
              </div>
              <span itemProp="telephone">+34 91 123 45 67</span>
              <span itemProp="email">info@pgk-hiszpaniia-podatki.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;