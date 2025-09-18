import React from 'react';
import { Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Paula Kowalski",
      role: "Directora General",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Paula es una profesional dinámica cuyo trabajo es invariablemente moderno con un toque ecléctico. Ejecuta proyectos inmobiliarios con igual confianza.",
      description: "Paula lidera nuestro equipo con más de 15 años de experiencia. Se especializa en propiedades de lujo y inversiones estratégicas. Ha cerrado más de 500 transacciones exitosas.",
      socialLinks: [
        { icon: Facebook, href: '#' },
        { icon: Instagram, href: '#' },
        { icon: Twitter, href: '#' }
      ]
    },
    {
      name: "Gabriel Martinez",
      role: "Director de Inversiones",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Gabriel dirige inversiones inteligentes pero sutilmente glamorosas. Su trabajo produce desarrollos inmobiliarios clásicos contemporáneos.",
      description: "Gabriel gestiona carteras de inversión inmobiliaria por valor de €50M. Experto en análisis de mercado y oportunidades de alta rentabilidad. Habla español, inglés y polaco.",
      socialLinks: [
        { icon: Facebook, href: '#' },
        { icon: Instagram, href: '#' },
        { icon: Twitter, href: '#' }
      ]
    },
    {
      name: "Ana Rodriguez",
      role: "Especialista en Lujo",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Ana se especializa en propiedades de lujo y tiene un ojo excepcional para los detalles que marcan la diferencia en el mercado premium.",
      description: "Ana domina el mercado de lujo en Madrid y Barcelona. Trabaja con propiedades desde €1M. Sus clientes incluyen empresarios, deportistas y celebridades internacionales.",
      socialLinks: [
        { icon: Facebook, href: '#' },
        { icon: Instagram, href: '#' },
        { icon: Twitter, href: '#' }
      ]
    },
    {
      name: "Carlos Mendez",
      role: "Consultor Fiscal",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Carlos es experto en aspectos fiscales y legales del mercado inmobiliario español, garantizando transacciones seguras y eficientes.",
      description: "Carlos es abogado especializado en derecho inmobiliario. Gestiona todos los aspectos fiscales y legales. Garantiza transacciones 100% seguras y optimización fiscal.",
      socialLinks: [
        { icon: Facebook, href: '#' },
        { icon: Instagram, href: '#' },
        { icon: Twitter, href: '#' }
      ]
    }
  ];

  return (
    <section id="team" className="py-20 lg:py-32" style={{ backgroundColor: '#282e32' }}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 font-light">
            Nuestros{' '}
            <span className="block font-serif italic" style={{ color: '#917a52' }}>Expertos</span>
          </h2>
          <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: '#917a52' }}></div>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Conoce a nuestro equipo de expertos inmobiliarios. Cada profesional aporta años de experiencia 
            en el mercado español. Te ofrecemos asesoramiento personalizado y resultados garantizados.
          </p>
        </div>

        {/* Grid de 4 artículos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <a 
              key={member.name}
              href={`#blog-article-${member.name.toLowerCase().replace(' ', '-')}`}
              className="group cursor-pointer block border-2 border-transparent hover:border-bronze-500 rounded-xl p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-bronze-500/20 hover:bg-gray-800/20"
            >
              <div className="space-y-4">
                {/* Imagen */}
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Contenido */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-light mb-1 group-hover:text-white transition-colors duration-300" style={{ color: '#917a52' }}>
                      {member.name}
                    </h3>
                    <div className="w-12 h-px mb-2 group-hover:w-16 transition-all duration-500" style={{ backgroundColor: '#917a52' }}></div>
                    <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300 line-clamp-3">
                    {member.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex space-x-3">
                      {member.socialLinks.slice(0, 3).map(({ icon: Icon }, i) => (
                        <span
                          key={i}
                          className="text-gray-400 group-hover:text-bronze-500 transition-colors duration-300"
                        >
                          <Icon size={16} />
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-400 group-hover:text-bronze-500 transition-colors duration-300 text-sm font-medium">
                      Leer más →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Botón Ver más artículos */}
        <div className="text-center">
          <a
            href="#blog"
            className="group inline-flex items-center space-x-3 border-2 px-8 py-4 hover:text-white transition-all duration-300 font-light rounded-lg hover:shadow-lg hover:shadow-bronze-500/20"
            style={{ borderColor: '#917a52', color: '#917a52' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#917a52';
              e.currentTarget.style.borderColor = '#917a52';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#917a52';
            }}
          >
            <span>Ver todos los artículos</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;