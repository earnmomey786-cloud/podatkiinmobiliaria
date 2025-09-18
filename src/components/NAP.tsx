import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface NAPData {
  name: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  email: string;
  hours: string[];
}

interface NAPProps {
  data: NAPData;
  variant?: 'header' | 'footer' | 'contact' | 'inline';
  showHours?: boolean;
  className?: string;
}

const NAP: React.FC<NAPProps> = ({ 
  data, 
  variant = 'inline', 
  showHours = false,
  className = '' 
}) => {
  const formatAddress = () => {
    return `${data.address.street}, ${data.address.city}, ${data.address.region} ${data.address.postalCode}, ${data.address.country}`;
  };

  if (variant === 'header') {
    return (
      <div className={`flex items-center space-x-6 ${className}`}>
        <a 
          href={`tel:${data.phone}`}
          className="flex items-center space-x-2 text-gray-300 hover:text-bronze-500 transition-colors duration-300"
        >
          <Phone size={16} />
          <span className="text-sm">{data.phone}</span>
        </a>
        <a 
          href={`mailto:${data.email}`}
          className="flex items-center space-x-2 text-gray-300 hover:text-bronze-500 transition-colors duration-300"
        >
          <Mail size={16} />
          <span className="text-sm">{data.email}</span>
        </a>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`space-y-4 ${className}`}>
        <h3 className="text-white font-serif text-lg mb-4">{data.name}</h3>
        
        <div className="space-y-3 text-gray-300">
          <div className="flex items-start space-x-3">
            <MapPin size={18} className="text-bronze-500 mt-1 flex-shrink-0" />
            <address className="not-italic leading-relaxed">
              {data.address.street}<br />
              {data.address.city}, {data.address.region} {data.address.postalCode}<br />
              {data.address.country}
            </address>
          </div>
          
          <a 
            href={`tel:${data.phone}`}
            className="flex items-center space-x-3 hover:text-bronze-500 transition-colors duration-300"
          >
            <Phone size={18} className="text-bronze-500" />
            <span>{data.phone}</span>
          </a>
          
          <a 
            href={`mailto:${data.email}`}
            className="flex items-center space-x-3 hover:text-bronze-500 transition-colors duration-300"
          >
            <Mail size={18} className="text-bronze-500" />
            <span>{data.email}</span>
          </a>
          
          {showHours && (
            <div className="flex items-start space-x-3">
              <Clock size={18} className="text-bronze-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium mb-2">Horarios de Atención:</p>
                <div className="space-y-1 text-sm">
                  {data.hours.map((hour, index) => (
                    <p key={index}>{hour}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div className={`bg-gray-800/30 rounded-lg p-6 ${className}`}>
        <h3 className="text-xl font-serif text-white mb-6">Información de Contacto</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <MapPin size={20} className="text-bronze-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-medium mb-1">Dirección</h4>
              <address className="text-gray-300 not-italic leading-relaxed">
                {formatAddress()}
              </address>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(formatAddress())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bronze-500 hover:text-bronze-400 text-sm mt-2 inline-block"
              >
                Ver en Google Maps →
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Phone size={20} className="text-bronze-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-medium mb-1">Teléfono</h4>
              <a 
                href={`tel:${data.phone}`}
                className="text-gray-300 hover:text-bronze-500 transition-colors duration-300"
              >
                {data.phone}
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Mail size={20} className="text-bronze-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-medium mb-1">Email</h4>
              <a 
                href={`mailto:${data.email}`}
                className="text-gray-300 hover:text-bronze-500 transition-colors duration-300"
              >
                {data.email}
              </a>
            </div>
          </div>
          
          {showHours && (
            <div className="flex items-start space-x-4">
              <Clock size={20} className="text-bronze-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-medium mb-2">Horarios</h4>
                <div className="space-y-1 text-gray-300 text-sm">
                  {data.hours.map((hour, index) => (
                    <p key={index}>{hour}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Inline variant (default)
  return (
    <div className={`flex items-center space-x-4 text-sm ${className}`}>
      <span className="text-gray-400">{data.address.city}, {data.address.region}</span>
      <span className="text-gray-500">•</span>
      <a 
        href={`tel:${data.phone}`}
        className="text-bronze-500 hover:text-bronze-400 transition-colors duration-300"
      >
        {data.phone}
      </a>
    </div>
  );
};

export default NAP;