export const businessData = {
  name: "PGK Hiszpaniia Podatki",
  address: {
    streetAddress: "Calle Gran Vía 45, 3º Planta",
    addressLocality: "Madrid",
    addressRegion: "Comunidad de Madrid",
    postalCode: "28013",
    addressCountry: "ES"
  },
  phone: "+34 91 123 45 67",
  email: "info@pgk-hiszpaniia-podatki.com",
  website: "https://pgk-hiszpaniia-podatki.com",
  openingHours: [
    "Monday: 09:00-18:00",
    "Tuesday: 09:00-18:00", 
    "Wednesday: 09:00-18:00",
    "Thursday: 09:00-18:00",
    "Friday: 09:00-18:00",
    "Saturday: 10:00-14:00",
    "Sunday: Closed"
  ],
  geo: {
    latitude: 40.4168,
    longitude: -3.7038
  },
  services: [
    "Asesoría Fiscal Inmobiliaria",
    "Gestión de Inversiones Inmobiliarias",
    "Consultoría Legal Inmobiliaria",
    "Valoraciones de Propiedades",
    "Gestión de Propiedades de Lujo",
    "Asesoramiento en Compraventa",
    "Tramitación de Hipotecas",
    "Gestión de Alquileres"
  ],
  areaServed: [
    "Madrid",
    "Barcelona", 
    "Valencia",
    "Sevilla",
    "Bilbao",
    "Málaga",
    "Zaragoza",
    "Murcia",
    "Palma de Mallorca",
    "Las Palmas de Gran Canaria"
  ]
};

export const locationData = {
  madrid: {
    name: "Madrid",
    region: "Comunidad de Madrid",
    description: "Madrid es la capital económica de España. Ofrece excelentes oportunidades de inversión inmobiliaria. Encuentra apartamentos modernos, casas históricas y oficinas premium. El mercado crece un 5% anual.",
    marketTrends: {
      averagePrice: "€4,200/m²",
      priceChange: "+5.2%",
      trend: "up" as const
    },
    neighborhoods: [
      {
        name: "Salamanca",
        description: "Salamanca es el barrio más exclusivo de Madrid. Alberga boutiques de lujo internacional. Su arquitectura clásica atrae a inversores premium. Los precios suben constantemente.",
        averagePrice: "€8,500/m²",
        highlights: [
          "Zona premium con alta revalorización",
          "Excelente conectividad con metro",
          "Comercios y restaurantes de alta gama"
        ]
      },
      {
        name: "Malasaña",
        description: "Malasaña es el corazón cultural de Madrid. Atrae a jóvenes profesionales y artistas. Ofrece vida nocturna vibrante y cafeterías únicas. Ideal para inversión en alquiler.",
        averagePrice: "€5,200/m²", 
        highlights: [
          "Vida nocturna vibrante",
          "Cafeterías y espacios culturales",
          "Creciente demanda de alquiler"
        ]
      },
      {
        name: "Chamberí",
        description: "Chamberí es una zona residencial premium. Ofrece tranquilidad y excelentes servicios. Perfecto para familias y profesionales. Cuenta con parques y colegios de prestigio.",
        averagePrice: "€6,100/m²",
        highlights: [
          "Ambiente familiar y seguro",
          "Parques y zonas verdes",
          "Buena conexión con el centro"
        ]
      }
    ],
    propertyTypes: [
      { type: "Apartamentos", count: 1250, averagePrice: "€450,000" },
      { type: "Casas", count: 320, averagePrice: "€850,000" },
      { type: "Oficinas", count: 180, averagePrice: "€3,200/m²" }
    ]
  },
  barcelona: {
    name: "Barcelona", 
    region: "Cataluña",
    description: "La ciudad condal combina historia, cultura y modernidad, siendo uno de los destinos más atractivos para la inversión inmobiliaria en el Mediterráneo.",
    marketTrends: {
      averagePrice: "€3,800/m²",
      priceChange: "+4.1%", 
      trend: "up" as const
    },
    neighborhoods: [
      {
        name: "Eixample",
        description: "El corazón de Barcelona con su característico diseño urbano y arquitectura modernista.",
        averagePrice: "€5,500/m²",
        highlights: [
          "Arquitectura modernista única",
          "Excelente transporte público",
          "Zona comercial y de negocios"
        ]
      },
      {
        name: "Gràcia",
        description: "Barrio con personalidad propia, lleno de plazas encantadoras y ambiente local auténtico.",
        averagePrice: "€4,200/m²",
        highlights: [
          "Ambiente bohemio y cultural",
          "Plazas y terrazas únicas",
          "Comunidad local vibrante"
        ]
      }
    ],
    propertyTypes: [
      { type: "Apartamentos", count: 980, averagePrice: "€380,000" },
      { type: "Casas", count: 210, averagePrice: "€720,000" },
      { type: "Oficinas", count: 150, averagePrice: "€2,800/m²" }
    ]
  }
};