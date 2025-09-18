import React from 'react';
import { Calendar, Clock, User, Share2, ArrowLeft, ArrowRight, Tag, Eye } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import InternalLinks from '../components/InternalLinks';
import NAP from '../components/NAP';

interface BlogArticleProps {
  articleId?: string;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ articleId = 'guia-comprar-casa-espana' }) => {
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

  // Datos del artículo (en una app real vendría de una API o base de datos)
  const article = {
    id: 'guia-comprar-casa-espana',
    title: "Guía Completa para Comprar Casa en España 2024",
    excerpt: "Aprende paso a paso cómo comprar casa en España. Descubre los requisitos legales y fiscales. Evita errores costosos con nuestra guía completa actualizada para 2024.",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    category: "Guías de Compra",
    readTime: "8 min",
    date: "15 Dic 2024",
    author: "Paula Kowalski",
    authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    views: "2,847",
    tags: ["compra", "españa", "legal", "fiscal", "extranjeros", "hipoteca"],
    content: `
      <p>Comprar una casa en España puede ser una experiencia emocionante y gratificante. Sin embargo, el proceso puede parecer complejo, especialmente para compradores extranjeros. Esta guía completa te llevará paso a paso a través de todo el proceso.</p>

      <h2>1. Preparación Financiera</h2>
      <p>Antes de comenzar tu búsqueda, es crucial tener tus finanzas en orden. Necesitarás:</p>
      <ul>
        <li><strong>Entrada del 20-30%</strong> del precio de compra</li>
        <li><strong>Gastos adicionales</strong> del 10-15% (impuestos, notario, registro)</li>
        <li><strong>Preaprobación hipotecaria</strong> si necesitas financiación</li>
        <li><strong>Prueba de ingresos</strong> de los últimos 2-3 años</li>
      </ul>

      <h2>2. Documentación Necesaria</h2>
      <p>Para comprar propiedades en España, necesitarás obtener un NIE (Número de Identificación de Extranjero). Este documento es obligatorio para todas las transacciones inmobiliarias.</p>
      
      <h3>Documentos requeridos:</h3>
      <ul>
        <li>Pasaporte válido</li>
        <li>NIE (Número de Identificación de Extranjero)</li>
        <li>Certificado de ingresos</li>
        <li>Extractos bancarios</li>
        <li>Declaración de la renta (si aplica)</li>
      </ul>

      <h2>3. Proceso de Compra</h2>
      <p>El proceso de compra en España sigue estos pasos principales:</p>
      
      <h3>Paso 1: Búsqueda y Selección</h3>
      <p>Trabaja con un agente inmobiliario local que conozca el mercado. Visita múltiples propiedades y compara precios en la zona.</p>
      
      <h3>Paso 2: Oferta y Contrato de Arras</h3>
      <p>Una vez encontrada la propiedad ideal, harás una oferta. Si es aceptada, firmarás un contrato de arras y pagarás una señal del 5-10%.</p>
      
      <h3>Paso 3: Due Diligence</h3>
      <p>Es crucial verificar que la propiedad esté libre de cargas y tenga todos los permisos en orden. Un abogado especializado puede ayudarte con esta verificación.</p>
      
      <h3>Paso 4: Firma ante Notario</h3>
      <p>La compraventa se formaliza ante notario. Aquí pagarás el resto del precio y recibirás las llaves de tu nueva propiedad.</p>

      <h2>4. Impuestos y Gastos</h2>
      <p>Los gastos asociados a la compra incluyen:</p>
      <ul>
        <li><strong>IVA (10%)</strong> para obra nueva</li>
        <li><strong>ITP (6-10%)</strong> para segunda mano</li>
        <li><strong>Notario</strong> (0.1-0.5%)</li>
        <li><strong>Registro</strong> (0.1-0.3%)</li>
        <li><strong>Gestoría</strong> (300-600€)</li>
        <li><strong>Abogado</strong> (1-2%)</li>
      </ul>

      <h2>5. Consejos Importantes</h2>
      <p>Para una compra exitosa, ten en cuenta estos consejos:</p>
      <ul>
        <li>Siempre contrata un abogado independiente</li>
        <li>Verifica que la propiedad tenga cédula de habitabilidad</li>
        <li>Revisa que no haya deudas pendientes</li>
        <li>Considera la ubicación y servicios cercanos</li>
        <li>Negocia el precio basándote en el mercado local</li>
      </ul>

      <h2>Conclusión</h2>
      <p>Comprar casa en España es un proceso que requiere preparación y conocimiento. Con la documentación correcta, asesoramiento profesional y paciencia, puedes encontrar la propiedad perfecta. Nuestro equipo de expertos está aquí para guiarte en cada paso del proceso.</p>
    `
  };

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: article.category, href: `/blog/categoria/${article.category.toLowerCase()}` },
    { label: article.title, href: `/blog/${article.id}`, current: true }
  ];

  const relatedArticles = [
    {
      id: 'impuestos-inmobiliarios-espana',
      title: "Impuestos Inmobiliarios en España: Guía Fiscal Completa",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "Fiscalidad",
      readTime: "12 min"
    },
    {
      id: 'hipotecas-extranjeros-espana',
      title: "Cómo Conseguir Hipoteca en España Siendo Extranjero",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "Financiación",
      readTime: "7 min"
    },
    {
      id: 'mejores-zonas-madrid-inversion',
      title: "Las Mejores Zonas de Madrid para Invertir en 2024",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "Inversión",
      readTime: "10 min"
    }
  ];

  const internalLinks = [
    {
      text: "Servicios de Asesoría Legal",
      href: "#servicios-legales",
      description: "Acompañamiento legal completo en tu compra"
    },
    {
      text: "Calculadora de Gastos de Compra",
      href: "#calculadora-gastos",
      description: "Calcula todos los costes de tu compra"
    },
    {
      text: "Contactar con Nuestros Expertos",
      href: "#contacto",
      description: "Consulta gratuita personalizada"
    }
  ];

  return (
    <div className="min-h-screen text-white font-light" style={{ backgroundColor: '#282e32' }}>
      {/* Header Spacing */}
      <div className="h-20"></div>
      
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} className="mb-8" />
        
        {/* Back to Blog */}
        <div className="mb-8">
          <a
            href="/blog"
            className="inline-flex items-center space-x-2 text-bronze-500 hover:text-bronze-400 transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            <span>Volver al Blog</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Header */}
            <article className="space-y-8">
              {/* Featured Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-bronze-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Meta */}
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-serif text-white leading-tight">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <img 
                      src={article.authorImage}
                      alt={article.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>Por {article.author}</span>
                  </div>
                  <span className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Eye size={14} />
                    <span>{article.views} vistas</span>
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Share Buttons */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                  <span className="text-gray-400 text-sm">Compartir:</span>
                  <button className="text-gray-400 hover:text-bronze-500 transition-colors duration-300">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-invert prose-bronze max-w-none"
                style={{
                  '--tw-prose-body': '#d1d5db',
                  '--tw-prose-headings': '#ffffff',
                  '--tw-prose-links': '#917a52',
                  '--tw-prose-bold': '#ffffff',
                  '--tw-prose-bullets': '#917a52',
                  '--tw-prose-quotes': '#d1d5db'
                }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Article Footer */}
              <div className="border-t border-gray-700 pt-8 space-y-6">
                {/* Author Bio */}
                <div className="bg-gray-800/30 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={article.authorImage}
                      alt={article.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-serif text-lg mb-2">{article.author}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Paula lidera nuestro equipo con más de 15 años de experiencia en el mercado inmobiliario español. 
                        Se especializa en propiedades de lujo y asesoramiento a compradores internacionales.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <a
                    href="/blog/articulo-anterior"
                    className="flex items-center space-x-2 text-gray-400 hover:text-bronze-500 transition-colors duration-300"
                  >
                    <ArrowLeft size={16} />
                    <span>Artículo Anterior</span>
                  </a>
                  <a
                    href="/blog/articulo-siguiente"
                    className="flex items-center space-x-2 text-gray-400 hover:text-bronze-500 transition-colors duration-300"
                  >
                    <span>Siguiente Artículo</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact CTA */}
            <div className="bg-gray-800/30 rounded-lg p-6">
              <h3 className="text-xl font-serif text-white mb-4">¿Necesitas Ayuda?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Nuestros expertos están listos para ayudarte con tu compra inmobiliaria en España.
              </p>
              <NAP data={napData} variant="inline" className="mb-4" />
              <a
                href="#contacto"
                className="block w-full text-center px-4 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#917a52' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7d6847'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#917a52'}
              >
                Consulta Gratuita
              </a>
            </div>

            {/* Internal Links */}
            <InternalLinks 
              links={internalLinks}
              title="Recursos Relacionados"
            />

            {/* Related Articles */}
            <div className="bg-gray-800/30 rounded-lg p-6">
              <h3 className="text-xl font-serif text-white mb-6">Artículos Relacionados</h3>
              <div className="space-y-4">
                {relatedArticles.map((relatedArticle) => (
                  <a
                    key={relatedArticle.id}
                    href={`/blog/${relatedArticle.id}`}
                    className="group block"
                  >
                    <div className="flex space-x-4">
                      <img 
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-20 h-16 object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
                      />
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-medium leading-tight group-hover:text-bronze-500 transition-colors duration-300 line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                        <div className="flex items-center space-x-2 mt-2 text-xs text-gray-400">
                          <span>{relatedArticle.category}</span>
                          <span>•</span>
                          <span>{relatedArticle.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-800/30 rounded-lg p-6">
              <h3 className="text-xl font-serif text-white mb-4">Newsletter</h3>
              <p className="text-gray-300 text-sm mb-4">
                Recibe las últimas guías y análisis del mercado inmobiliario español.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-bronze-500 focus:outline-none transition-colors duration-300 text-sm"
                />
                <button
                  className="w-full px-4 py-2 text-white font-medium rounded transition-all duration-300 text-sm"
                  style={{ backgroundColor: '#917a52' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7d6847'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#917a52'}
                >
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;