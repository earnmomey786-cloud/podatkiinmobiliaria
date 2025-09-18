import React from 'react';
import { MapPin, TrendingUp, Home, Building } from 'lucide-react';

interface LocationData {
  name: string;
  region: string;
  description: string;
  marketTrends: {
    averagePrice: string;
    priceChange: string;
    trend: 'up' | 'down' | 'stable';
  };
  neighborhoods: Array<{
    name: string;
    description: string;
    averagePrice: string;
    highlights: string[];
  }>;
  propertyTypes: Array<{
    type: string;
    count: number;
    averagePrice: string;
  }>;
}

interface LocationContentProps {
  location: LocationData;
  className?: string;
}

const LocationContent: React.FC<LocationContentProps> = ({ location, className = '' }) => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={16} className="text-green-500" />;
      case 'down':
        return <TrendingUp size={16} className="text-red-500 rotate-180" />;
      default:
        return <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>;
    }
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Location Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <MapPin size={24} className="text-bronze-500" />
          <h1 className="text-3xl lg:text-4xl font-serif text-white">
            Propiedades en {location.name}
          </h1>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {location.description}
        </p>
      </div>

      {/* Market Trends */}
      <div className="bg-gray-800/30 rounded-lg p-6">
        <h2 className="text-xl font-serif text-white mb-4 flex items-center">
          <span className="w-1 h-6 bg-bronze-500 mr-3"></span>
          Tendencias del Mercado en {location.name}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              {getTrendIcon(location.marketTrends.trend)}
              <span className="text-2xl font-bold text-white">
                {location.marketTrends.averagePrice}
              </span>
            </div>
            <p className="text-gray-400 text-sm">Precio Promedio</p>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-bronze-500 mb-2">
              {location.marketTrends.priceChange}
            </div>
            <p className="text-gray-400 text-sm">Cambio Anual</p>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">
              {location.propertyTypes.reduce((sum, type) => sum + type.count, 0)}
            </div>
            <p className="text-gray-400 text-sm">Propiedades Disponibles</p>
          </div>
        </div>
      </div>

      {/* Neighborhoods */}
      <div>
        <h2 className="text-2xl font-serif text-white mb-6 flex items-center">
          <span className="w-1 h-6 bg-bronze-500 mr-3"></span>
          Barrios Destacados en {location.name}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {location.neighborhoods.map((neighborhood, index) => (
            <div key={index} className="bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-colors duration-300">
              <h3 className="text-lg font-serif text-bronze-500 mb-2">
                {neighborhood.name}
              </h3>
              <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                {neighborhood.description}
              </p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">{neighborhood.averagePrice}</span>
                <span className="text-gray-400 text-sm">Precio promedio</span>
              </div>
              <div className="space-y-1">
                {neighborhood.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm">
                    <div className="w-1 h-1 bg-bronze-500 rounded-full"></div>
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Property Types */}
      <div>
        <h2 className="text-2xl font-serif text-white mb-6 flex items-center">
          <span className="w-1 h-6 bg-bronze-500 mr-3"></span>
          Tipos de Propiedades en {location.name}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {location.propertyTypes.map((type, index) => (
            <div key={index} className="bg-gray-800/30 rounded-lg p-4 text-center hover:bg-gray-800/50 transition-colors duration-300">
              <div className="flex items-center justify-center mb-3">
                {type.type === 'Apartamentos' && <Home size={24} className="text-bronze-500" />}
                {type.type === 'Casas' && <Building size={24} className="text-bronze-500" />}
                {type.type === 'Oficinas' && <Building size={24} className="text-bronze-500" />}
              </div>
              <h3 className="text-white font-medium mb-1">{type.type}</h3>
              <p className="text-gray-400 text-sm mb-2">{type.count} disponibles</p>
              <p className="text-bronze-500 font-medium">{type.averagePrice}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Local SEO Content */}
      <div className="bg-gray-800/30 rounded-lg p-6">
        <h2 className="text-xl font-serif text-white mb-4">
          ¿Por qué invertir en {location.name}?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300 text-sm leading-relaxed">
          <div>
            <h3 className="text-bronze-500 font-medium mb-2">Ventajas de la ubicación:</h3>
            <ul className="space-y-1">
              <li>• Excelente conectividad con transporte público</li>
              <li>• Proximidad a centros comerciales y servicios</li>
              <li>• Zonas verdes y espacios recreativos</li>
              <li>• Crecimiento constante del valor inmobiliario</li>
            </ul>
          </div>
          <div>
            <h3 className="text-bronze-500 font-medium mb-2">Servicios disponibles:</h3>
            <ul className="space-y-1">
              <li>• Colegios y universidades de prestigio</li>
              <li>• Centros de salud y hospitales</li>
              <li>• Restaurantes y vida nocturna</li>
              <li>• Centros culturales y deportivos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationContent;