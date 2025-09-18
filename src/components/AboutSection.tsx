import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32" style={{ backgroundColor: '#282e32' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Decorative dots pattern */}
            <div className="absolute -left-8 top-1/3 grid grid-cols-6 gap-2 opacity-30">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full" style={{ backgroundColor: '#917a52' }}></div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Modern Property Interior" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" 
                alt="Property Exterior" 
                className="w-full h-64 object-cover rounded-lg mt-16"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 font-light">
                Acerca de{' '}
                <span className="block font-serif italic" style={{ color: '#917a52' }}>Nosotros</span>
              </h2>
              <div className="w-20 h-px" style={{ backgroundColor: '#917a52' }}></div>
            </div>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Ofrecemos servicios inmobiliarios de lujo en España. Nuestro equipo cuenta con 
                más de 10 años de experiencia. Nos especializamos en propiedades premium y 
                asesoría fiscal especializada.
              </p>
              
              <p>
                Trabajamos con propiedades residenciales, oficinas y locales comerciales. 
                También gestionamos espacios de hospitalidad y hoteles boutique. Hemos recibido 
                múltiples premios por nuestra excelencia en el servicio al cliente.
              </p>
              
              <p>
                Nuestro enfoque es minimalista y urbano. Utilizamos materiales sostenibles 
                en todos nuestros proyectos. Creamos espacios únicos que combinan funcionalidad 
                y diseño contemporáneo.
              </p>
              
              <div className="pt-4">
                <a 
                  href="#team"
                  className="inline-flex items-center space-x-2 text-bronze-500 hover:text-bronze-400 transition-colors duration-300 font-medium"
                >
                  <span>Conoce a nuestro equipo</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;