import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative">
      {/* Social sidebar vertical text */}
      <div className="absolute left-8 bottom-8 transform -rotate-90 origin-left z-10">
        <span className="text-sm tracking-[0.3em] font-light" style={{ color: '#917a52' }}>@pgk.inmobiliario</span>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-0 items-center h-full min-h-screen">
          <div className="space-y-8 pr-12">
            {/* Top buttons */}
            <div className="flex space-x-4 mb-12">
              <button className="flex items-center space-x-2 text-white px-4 py-2 text-sm" style={{ backgroundColor: '#917a52' }}>
                <span>📷</span>
                <span>Más similares</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 text-sm">
                <span>💾</span>
                <span>Guardar</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 text-sm">
                <span>🔗</span>
                <span>Enlace permanente</span>
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="tracking-[0.3em] text-sm font-light uppercase" style={{ color: '#917a52' }}>
                REAL ESTATE ————————
              </p>
              <h1 className="text-6xl lg:text-8xl font-serif text-white leading-tight font-light">
                Tu Negocio{' '}
                <span className="block font-serif italic">Inmobiliario</span>
              </h1>
            </div>
            
            <p className="text-gray-400 text-base leading-relaxed max-w-lg font-light">
              Creamos oportunidades inmobiliarias únicas en España. Nuestro equipo especializado 
              te ayuda a encontrar la propiedad perfecta. Adaptamos cada servicio a tus necesidades 
              específicas de inversión y residencia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#servicios"
                className="group inline-flex items-center space-x-3 border px-8 py-3 hover:text-gray-900 transition-all duration-300 font-light" 
                style={{ borderColor: '#917a52', color: '#917a52' }} 
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#917a52'} 
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span>Nuestros Servicios</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a 
                href="/blog"
                className="group inline-flex items-center space-x-3 bg-transparent border border-gray-500 text-gray-300 px-8 py-3 hover:border-bronze-500 hover:text-bronze-500 transition-all duration-300 font-light"
              >
                <span>Leer Blog</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          {/* Right side image */}
          <div className="relative h-full min-h-screen">
            <img 
              src="/images/Generated Image September 05, 2025 - 4_17PM.jpeg" 
              alt="Luxury Real Estate Interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-6 flex space-x-16 text-gray-400 z-20">
        <button className="hover:text-white transition-colors duration-300 tracking-wider font-light">PREV</button>
        <div className="w-px h-6 bg-gray-500"></div>
        <button className="hover:text-white transition-colors duration-300 tracking-wider font-light">NEXT</button>
      </div>
    </section>
  );
};

export default HeroSection;