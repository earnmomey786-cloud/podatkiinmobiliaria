import React from 'react';
import { Calendar, Clock, Tag, ArrowRight, User, Share2 } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import InternalLinks from '../components/InternalLinks';
import NAP from '../components/NAP';

const BlogPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Blog', href: '/blog', current: true }
  ];

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
    hours: []
  };

  const featuredArticles = [
    {
      id: 'guia-comprar-casa-espana',
      title: "Guía Completa para Comprar Casa en España 2024",
      excerpt: "Aprende paso a paso cómo comprar casa en España. Descubre los requisitos legales y fiscales. Evita errores costosos con nuestra guía completa actualizada para 2024.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Guías de Compra",
      readTime: "8 min",
      date: "15 Dic 2024",
      author: "Paula Kowalski",
      featured: true,
      tags: ["compra", "españa", "legal", "fiscal"]
    },
    {
      id: 'impuestos-inmobiliarios-espana',
      title: "Impuestos Inmobiliarios en España: Guía Fiscal Completa",
      excerpt: "Conoce todos los impuestos inmobiliarios en España. Calcula IVA, ITP, plusvalía municipal y IRPF. Optimiza tu carga fiscal con estrategias legales probadas.",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Fiscalidad",
      readTime: "12 min",
      date: "12 Dic 2024",
      author: "Carlos Mendez",
      tags: ["impuestos", "fiscal", "IVA", "ITP"]
    },
    {
      id: 'mejores-zonas-madrid-inversion',
      title: "Las Mejores Zonas de Madrid para Invertir en 2024",
      excerpt: "Descubre los barrios de Madrid con mayor rentabilidad. Analiza precios, tendencias y proyecciones. Invierte en las zonas con mejor potencial de revalorización.",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Inversión",
      readTime: "10 min",
      date: "10 Dic 2024",
      author: "Gabriel Martinez",
      tags: ["madrid", "inversión", "barrios", "rentabilidad"]
    },
    {
      id: 'hipotecas-extranjeros-espana',
      title: "Cómo Conseguir Hipoteca en España Siendo Extranjero",
      excerpt: "Obtén hipoteca en España siendo extranjero. Conoce los requisitos bancarios específicos. Descubre qué documentos necesitas y cómo mejorar tu perfil crediticio.",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Financiación",
      readTime: "7 min",
      date: "8 Dic 2024",
      author: "Ana Rodriguez",
      tags: ["hipoteca", "extranjeros", "financiación", "bancos"]
    },
    {
      id: 'mercado-inmobiliario-barcelona-2024',
      title: "Análisis del Mercado Inmobiliario en Barcelona 2024",
      excerpt: "Análisis completo del mercado inmobiliario barcelonés. Precios por barrios, tendencias de compra y alquiler. Proyecciones para inversores y compradores.",
      image: "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Análisis de Mercado",
      readTime: "9 min",
      date: "5 Dic 2024",
      author: "Paula Kowalski",
      tags: ["barcelona", "mercado", "precios", "tendencias"]
    },
    {
      id: 'reforma-vivienda-permisos-espana',
      title: "Permisos y Licencias para Reformar tu Vivienda en España",
      excerpt: "Guía completa sobre permisos de reforma en España. Qué licencias necesitas según el tipo de obra. Evita multas y problemas legales con esta guía práctica.",
      image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Legal",
      readTime: "6 min",
      date: "2 Dic 2024",
      author: "Carlos Mendez",
      tags: ["reforma", "permisos", "licencias", "legal"]
    }
  ];

  const categories = [
    { name: "Todos", count: featuredArticles.length, active: true },
    { name: "Guías de Compra", count: 1 },
    { name: "Fiscalidad", count: 1 },
    { name: "Inversión", count: 1 },
    { name: "Financiación", count: 1 },
    { name: "Análisis de Mercado", count: 1 },
    { name: "Legal", count: 1 }
  ];

  const relatedLinks = [
    {
      text: "Servicios de Consultoría Fiscal",
      href: "#servicios-fiscales",
      description: "Asesoramiento especializado en impuestos inmobiliarios"
    },
    {
      text: "Calculadora de Gastos de Compra",
      href: "#calculadora-gastos",
      description: "Estima todos los costes asociados a tu compra"
    },
    {
      text: "Contactar con Nuestros Expertos",
      href: "#contacto",
      description: "Consulta personalizada gratuita"
    }
  ];

  return (
    <div className="min-h-screen text-white font-light" style={{ backgroundColor: '#282e32' }}>
      {/* Header Spacing */}
      <div className="h-20"></div>
      
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} className="mb-8" />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif text-white mb-6 font-light">
            Blog{' '}
            <span className="block font-serif italic" style={{ color: '#917a52' }}>Inmobiliario</span>
          </h1>
          <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: '#917a52' }}></div>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Descubre guías prácticas para comprar en España. Lee análisis de mercado actualizados. 
            Obtén consejos fiscales de nuestros expertos. Todo lo que necesitas saber sobre inversión inmobiliaria.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category.active
                  ? 'text-white border-2'
                  : 'text-gray-400 border border-gray-600 hover:border-bronze-500 hover:text-bronze-500'
              }`}
              style={category.active ? { borderColor: '#917a52', backgroundColor: '#917a52' } : {}}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <article className="group cursor-pointer block border-2 border-transparent hover:border-bronze-500 rounded-xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-bronze-500/20 hover:bg-gray-800/20 grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={featuredArticles[0].image}
                alt={featuredArticles[0].title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-bronze-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Destacado
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <Tag size={14} />
                  <span>{featuredArticles[0].category}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{featuredArticles[0].date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>{featuredArticles[0].readTime}</span>
                </span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-serif text-white leading-tight">
                <a 
                  href={`/blog/${featuredArticles[0].id}`}
                  className="group-hover:text-bronze-500 transition-colors duration-300"
                >
                  {featuredArticles[0].title}
                </a>
              </h2>
              
              <p className="text-gray-300 leading-relaxed">
                {featuredArticles[0].excerpt}
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <User size={14} />
                  <span>{featuredArticles[0].author}</span>
                </span>
                <div className="flex space-x-2">
                  {featuredArticles[0].tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-gray-700 px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <a
                href={`/blog/${featuredArticles[0].id}`}
                className="inline-flex items-center space-x-2 text-bronze-500 group-hover:text-bronze-400 transition-colors duration-300 font-medium"
              >
                <span>Leer artículo completo</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </article>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredArticles.slice(1).map((article) => (
            <a
              href={`/blog/${article.id}`}
              key={article.id}
              className="group cursor-pointer block border-2 border-transparent hover:border-bronze-500 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-bronze-500/20 hover:bg-gray-800/20"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-900/80 text-bronze-500 px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <User size={12} />
                    <span>{article.author}</span>
                  </span>
                </div>
                
                <h3 className="text-lg font-serif text-white leading-tight group-hover:text-bronze-500 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="inline-flex items-center space-x-2 text-bronze-500 group-hover:text-bronze-400 transition-colors duration-300 text-sm font-medium">
                  <span>Leer más</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Internal Links Section */}
        <InternalLinks 
          links={relatedLinks}
          title="Recursos Relacionados"
          className="mb-16"
        />

        {/* Newsletter Subscription */}
        <div className="bg-gray-800/30 rounded-lg p-8 text-center mb-16">
          <h3 className="text-2xl font-serif text-white mb-4">
            Suscríbete a Nuestro Newsletter
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Recibe las últimas noticias del mercado inmobiliario español, guías exclusivas y consejos de nuestros expertos directamente en tu email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-bronze-500 focus:outline-none transition-colors duration-300"
            />
            <button
              className="px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#917a52' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7d6847'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#917a52'}
            >
              Suscribirse
            </button>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <NAP data={napData} variant="inline" className="justify-center mb-6" />
          <p className="text-gray-300 mb-6">
            ¿Tienes preguntas sobre el mercado inmobiliario español? Nuestros expertos están aquí para ayudarte.
          </p>
          <a
            href="#contacto"
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
            <span>Contactar con Expertos</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;