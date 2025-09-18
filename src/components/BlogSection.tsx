import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import InternalLinks from './InternalLinks';

const BlogSection: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Blog', href: '/blog', current: true }
  ];

  const featuredArticles = [
    {
      id: 'guia-comprar-casa-espana',
      title: "Guía Completa para Comprar Casa en España 2024",
      excerpt: "Aprende paso a paso cómo comprar casa en España. Descubre los requisitos legales y fiscales. Evita errores costosos con nuestra guía completa actualizada para 2024.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Guías de Compra",
      readTime: "8 min",
      date: "15 Dic 2024",
      featured: true
    },
    {
      id: 'impuestos-inmobiliarios-espana',
      title: "Impuestos Inmobiliarios en España: Guía Fiscal Completa",
      excerpt: "Conoce todos los impuestos inmobiliarios en España. Calcula IVA, ITP, plusvalía municipal y IRPF. Optimiza tu carga fiscal con estrategias legales probadas.",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Fiscalidad",
      readTime: "12 min",
      date: "12 Dic 2024"
    },
    {
      id: 'mejores-zonas-madrid-inversion',
      title: "Las Mejores Zonas de Madrid para Invertir en 2024",
      excerpt: "Descubre los barrios de Madrid con mayor rentabilidad. Analiza precios, tendencias y proyecciones. Invierte en las zonas con mejor potencial de revalorización.",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Inversión",
      readTime: "10 min",
      date: "10 Dic 2024"
    },
    {
      id: 'hipotecas-extranjeros-espana',
      title: "Cómo Conseguir Hipoteca en España Siendo Extranjero",
      excerpt: "Obtén hipoteca en España siendo extranjero. Conoce los requisitos bancarios específicos. Descubre qué documentos necesitas y cómo mejorar tu perfil crediticio.",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Financiación",
      readTime: "7 min",
      date: "8 Dic 2024"
    }
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
    <section id="blog" className="py-20 lg:py-32" style={{ backgroundColor: '#282e32' }}>
      <div className="container mx-auto px-6 lg:px-12">
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
                  href={`#blog/${featuredArticles[0].id}`}
                  className="group-hover:text-bronze-500 transition-colors duration-300"
                >
                  {featuredArticles[0].title}
                </a>
              </h2>
              
              <p className="text-gray-300 leading-relaxed">
                {featuredArticles[0].excerpt}
              </p>
              
              <a
                href={`#blog/${featuredArticles[0].id}`}
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
              href={`#blog/${article.id}`}
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
                </div>
                
                <h3 className="text-lg font-serif text-white leading-tight group-hover:text-bronze-500 transition-colors duration-300">
                  <a href={`#blog/${article.id}`}>
                    {article.title}
                  </a>
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
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

        {/* Load More Button */}
        <div className="text-center">
          <a href="/blog">
            <button className="group inline-flex items-center space-x-3 border-2 px-8 py-4 hover:text-white transition-all duration-300 font-light rounded-lg hover:shadow-lg hover:shadow-bronze-500/20"
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
              <span>Cargar más artículos</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;