import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import NAP from './NAP';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyType: '',
    budget: '',
    location: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 lg:py-32" style={{ backgroundColor: '#282e32' }}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 font-light">
            Contacta{' '}
            <span className="block font-serif italic" style={{ color: '#917a52' }}>Con Nosotros</span>
          </h2>
          <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: '#917a52' }}></div>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            ¿Buscas comprar, vender o invertir en España? Nuestros expertos te ayudan en cada paso. 
            Contacta hoy mismo para una consulta gratuita. Respuesta garantizada en 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-bronze-500 focus:outline-none transition-colors duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-bronze-500 focus:outline-none transition-colors duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2 text-sm font-medium">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-bronze-500 focus:outline-none transition-colors duration-300"
                    placeholder="+34 123 456 789"
                  />
                </div>
                
                <div>
                  <label htmlFor="propertyType" className="block text-gray-300 mb-2 text-sm font-medium">
                    Tipo de Propiedad
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-bronze-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Seleccionar tipo</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="casa">Casa</option>
                    <option value="oficina">Oficina</option>
                    <option value="local">Local Comercial</option>
                    <option value="terreno">Terreno</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-gray-300 mb-2 text-sm font-medium">
                    Presupuesto
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-bronze-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Seleccionar rango</option>
                    <option value="0-100k">Hasta €100,000</option>
                    <option value="100k-300k">€100,000 - €300,000</option>
                    <option value="300k-500k">€300,000 - €500,000</option>
                    <option value="500k-1m">€500,000 - €1,000,000</option>
                    <option value="1m+">Más de €1,000,000</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-gray-300 mb-2 text-sm font-medium">
                    Ubicación Preferida
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-bronze-500 focus:outline-none transition-colors duration-300"
                    placeholder="Madrid, Barcelona, etc."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm font-medium">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-bronze-500 focus:outline-none transition-colors duration-300"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-bronze-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Cuéntanos más detalles sobre lo que necesitas..."
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center space-x-3 border-2 px-8 py-4 hover:text-white transition-all duration-300 font-medium rounded-lg hover:shadow-lg hover:shadow-bronze-500/20"
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
                <Send size={20} />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <NAP data={napData} variant="contact" showHours={true} />
            
            {/* Map Placeholder */}
            <div className="bg-gray-800/30 rounded-lg p-6">
              <h3 className="text-xl font-serif text-white mb-4">Nuestra Ubicación</h3>
              <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin size={48} className="mx-auto mb-4 text-bronze-500" />
                  <p>Mapa interactivo</p>
                  <p className="text-sm">Calle Gran Vía 45, Madrid</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-4">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('Calle Gran Vía 45, Madrid, España')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze-500 hover:text-bronze-400 text-sm font-medium"
                >
                  Ver en Google Maps →
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Calle Gran Vía 45, Madrid, España')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze-500 hover:text-bronze-400 text-sm font-medium"
                >
                  Cómo llegar →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;