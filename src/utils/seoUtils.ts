// SEO and Internal Linking Utilities

export interface SEOLink {
  href: string;
  text: string;
  title?: string;
  rel?: string;
  'aria-label'?: string;
}

// Anchor text variations for different contexts
export const anchorTextVariations = {
  // Property-related anchor texts
  property: [
    'propiedades en España',
    'inmuebles españoles',
    'bienes raíces en España',
    'propiedades de lujo',
    'inversión inmobiliaria'
  ],
  
  // Tax-related anchor texts
  taxes: [
    'impuestos inmobiliarios',
    'fiscalidad española',
    'tributación de propiedades',
    'asesoría fiscal inmobiliaria',
    'impuestos de compraventa'
  ],
  
  // Service-related anchor texts
  services: [
    'servicios inmobiliarios',
    'consultoría inmobiliaria',
    'asesoramiento profesional',
    'gestión de propiedades',
    'servicios fiscales'
  ],
  
  // Location-based anchor texts
  locations: [
    'Madrid centro',
    'Barcelona inmobiliario',
    'Costa del Sol propiedades',
    'Valencia inversión',
    'Sevilla bienes raíces'
  ]
};

// Generate SEO-friendly internal links
export const generateInternalLink = (
  href: string, 
  text: string, 
  options: {
    title?: string;
    rel?: string;
    ariaLabel?: string;
    nofollow?: boolean;
  } = {}
): SEOLink => {
  const link: SEOLink = {
    href,
    text,
  };
  
  if (options.title) link.title = options.title;
  if (options.ariaLabel) link['aria-label'] = options.ariaLabel;
  
  // Set rel attributes for SEO
  let relValues: string[] = [];
  if (options.rel) relValues.push(options.rel);
  if (options.nofollow) relValues.push('nofollow');
  
  if (relValues.length > 0) {
    link.rel = relValues.join(' ');
  }
  
  return link;
};

// URL structure best practices
export const urlStructure = {
  // Clean, hierarchical URLs
  blog: {
    base: '/blog',
    category: '/blog/categoria',
    article: '/blog/articulo',
    tag: '/blog/etiqueta'
  },
  
  services: {
    base: '/servicios',
    fiscal: '/servicios/asesoria-fiscal',
    investment: '/servicios/inversion-inmobiliaria',
    management: '/servicios/gestion-propiedades'
  },
  
  properties: {
    base: '/propiedades',
    sale: '/propiedades/venta',
    rent: '/propiedades/alquiler',
    luxury: '/propiedades/lujo',
    location: '/propiedades/ubicacion'
  }
};

// Link attributes for different link types
export const linkAttributes = {
  // Internal navigation links
  internal: {
    rel: undefined, // No rel needed for internal links
    target: undefined
  },
  
  // External links
  external: {
    rel: 'noopener noreferrer',
    target: '_blank'
  },
  
  // Sponsored/affiliate links
  sponsored: {
    rel: 'sponsored noopener noreferrer',
    target: '_blank'
  },
  
  // User-generated content links
  ugc: {
    rel: 'ugc noopener noreferrer',
    target: '_blank'
  }
};

// Priority pages that need more internal links
export const priorityPages = [
  {
    url: '/',
    title: 'Página Principal',
    needsLinks: [
      'servicios inmobiliarios',
      'blog inmobiliario',
      'equipo de expertos',
      'contacto'
    ]
  },
  {
    url: '/servicios',
    title: 'Servicios',
    needsLinks: [
      'asesoría fiscal',
      'gestión de inversiones',
      'propiedades de lujo',
      'casos de éxito'
    ]
  },
  {
    url: '/blog',
    title: 'Blog',
    needsLinks: [
      'guías de compra',
      'análisis de mercado',
      'consejos fiscales',
      'tendencias inmobiliarias'
    ]
  }
];

// Generate contextual internal links
export const getContextualLinks = (currentPage: string, category?: string) => {
  const baseLinks = [
    generateInternalLink('/', 'inicio', { title: 'Volver al inicio' }),
    generateInternalLink('#about', 'acerca de nosotros', { title: 'Conoce nuestro equipo' }),
    generateInternalLink('#services', 'nuestros servicios', { title: 'Servicios inmobiliarios' }),
    generateInternalLink('#blog', 'blog inmobiliario', { title: 'Artículos y guías' }),
    generateInternalLink('#contact', 'contacto', { title: 'Contacta con nosotros' })
  ];
  
  // Add category-specific links
  if (category === 'fiscal') {
    baseLinks.push(
      generateInternalLink('/blog/impuestos-inmobiliarios', 'guía de impuestos', { 
        title: 'Guía completa de impuestos inmobiliarios' 
      })
    );
  }
  
  if (category === 'investment') {
    baseLinks.push(
      generateInternalLink('/blog/mejores-zonas-inversion', 'zonas de inversión', { 
        title: 'Mejores zonas para invertir' 
      })
    );
  }
  
  return baseLinks.filter(link => link.href !== currentPage);
};