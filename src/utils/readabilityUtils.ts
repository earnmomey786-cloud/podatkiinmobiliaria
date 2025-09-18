// Readability and SEO Content Optimization Utilities

export interface ReadabilityMetrics {
  averageSentenceLength: number;
  averageWordsPerParagraph: number;
  passiveVoicePercentage: number;
  readingLevel: 'Elementary' | 'Middle School' | 'High School' | 'College' | 'Graduate';
  fleschScore: number;
}

// Analyze text readability
export const analyzeReadability = (text: string): ReadabilityMetrics => {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
  
  const averageSentenceLength = words.length / sentences.length;
  const averageWordsPerParagraph = words.length / paragraphs.length;
  
  // Simple passive voice detection (Spanish)
  const passiveIndicators = ['fue', 'fueron', 'es', 'son', 'está', 'están', 'se'];
  const passiveCount = sentences.filter(sentence => 
    passiveIndicators.some(indicator => sentence.toLowerCase().includes(indicator))
  ).length;
  const passiveVoicePercentage = (passiveCount / sentences.length) * 100;
  
  // Simplified Flesch Reading Ease for Spanish
  const avgSentenceLength = averageSentenceLength;
  const avgSyllablesPerWord = 1.5; // Approximation for Spanish
  const fleschScore = 206.835 - (1.015 * avgSentenceLength) - (84.6 * avgSyllablesPerWord);
  
  let readingLevel: ReadabilityMetrics['readingLevel'];
  if (fleschScore >= 90) readingLevel = 'Elementary';
  else if (fleschScore >= 80) readingLevel = 'Middle School';
  else if (fleschScore >= 70) readingLevel = 'High School';
  else if (fleschScore >= 60) readingLevel = 'College';
  else readingLevel = 'Graduate';
  
  return {
    averageSentenceLength,
    averageWordsPerParagraph,
    passiveVoicePercentage,
    readingLevel,
    fleschScore
  };
};

// SEO-optimized content guidelines
export const contentGuidelines = {
  // Optimal metrics for Spanish content
  idealSentenceLength: { min: 8, max: 20 },
  idealParagraphLength: { min: 40, max: 150 },
  maxPassiveVoice: 20, // percentage
  targetReadingLevel: 'High School',
  
  // SEO content structure
  headingStructure: {
    h1: { count: 1, length: { min: 30, max: 60 } },
    h2: { count: { min: 2, max: 6 }, length: { min: 20, max: 40 } },
    h3: { count: { min: 0, max: 10 }, length: { min: 15, max: 35 } }
  },
  
  // Content density
  keywordDensity: { min: 0.5, max: 2.5 }, // percentage
  contentLength: { min: 300, max: 2000 }, // words per page section
  
  // User engagement
  callToActionFrequency: 1, // per 300 words
  internalLinksFrequency: 2, // per 300 words
};

// Generate content improvements
export const generateContentSuggestions = (text: string, targetKeywords: string[]) => {
  const metrics = analyzeReadability(text);
  const suggestions: string[] = [];
  
  // Sentence length suggestions
  if (metrics.averageSentenceLength > contentGuidelines.idealSentenceLength.max) {
    suggestions.push('Reduce la longitud promedio de las oraciones. Divide oraciones largas en dos o más oraciones cortas.');
  }
  
  // Paragraph structure
  if (metrics.averageWordsPerParagraph > contentGuidelines.idealParagraphLength.max) {
    suggestions.push('Acorta los párrafos. Usa párrafos de 2-4 oraciones para mejorar la legibilidad.');
  }
  
  // Passive voice
  if (metrics.passiveVoicePercentage > contentGuidelines.maxPassiveVoice) {
    suggestions.push('Reduce el uso de voz pasiva. Usa verbos activos para hacer el contenido más dinámico.');
  }
  
  // Reading level
  if (metrics.readingLevel === 'Graduate' || metrics.readingLevel === 'College') {
    suggestions.push('Simplifica el vocabulario. Usa palabras más comunes para llegar a más lectores.');
  }
  
  return {
    metrics,
    suggestions,
    score: calculateContentScore(metrics)
  };
};

// Calculate overall content score
const calculateContentScore = (metrics: ReadabilityMetrics): number => {
  let score = 100;
  
  // Sentence length penalty
  if (metrics.averageSentenceLength > 20) score -= 20;
  else if (metrics.averageSentenceLength > 15) score -= 10;
  
  // Passive voice penalty
  if (metrics.passiveVoicePercentage > 30) score -= 25;
  else if (metrics.passiveVoicePercentage > 20) score -= 15;
  
  // Reading level adjustment
  if (metrics.readingLevel === 'Graduate') score -= 30;
  else if (metrics.readingLevel === 'College') score -= 15;
  else if (metrics.readingLevel === 'High School') score += 10;
  
  return Math.max(0, Math.min(100, score));
};

// Content optimization templates
export const contentTemplates = {
  // Hero section template
  heroSection: {
    headline: "Verbo + Beneficio + Ubicación",
    subheadline: "Problema + Solución + Resultado",
    cta: "Verbo de acción + Beneficio inmediato"
  },
  
  // Service description template
  serviceDescription: {
    opening: "Beneficio principal en una oración corta.",
    features: "Lista de 3-5 características clave.",
    proof: "Estadística o testimonio de credibilidad.",
    closing: "Llamada a la acción específica."
  },
  
  // Blog post structure
  blogPost: {
    introduction: "Problema + Promesa de solución (50-100 palabras)",
    body: "Subtítulos H2 cada 200-300 palabras",
    conclusion: "Resumen + Próximos pasos + CTA"
  }
};

// Spanish-specific SEO keywords for real estate
export const spanishRealEstateKeywords = {
  primary: [
    'comprar casa España',
    'propiedades Madrid',
    'inmobiliaria Barcelona',
    'inversión inmobiliaria',
    'asesoría fiscal inmobiliaria'
  ],
  secondary: [
    'apartamentos lujo Madrid',
    'casas venta Barcelona',
    'oficinas alquiler',
    'impuestos compraventa',
    'hipoteca extranjeros España'
  ],
  longTail: [
    'cómo comprar casa España siendo extranjero',
    'mejores barrios Madrid inversión',
    'impuestos comprar vivienda España',
    'requisitos hipoteca no residente',
    'asesor fiscal inmobiliario Madrid'
  ],
  local: [
    'inmobiliaria Madrid centro',
    'propiedades Salamanca Madrid',
    'apartamentos Eixample Barcelona',
    'casas Costa del Sol',
    'oficinas Gran Vía Madrid'
  ]
};

// Content optimization checklist
export const seoContentChecklist = [
  'Título H1 incluye palabra clave principal',
  'Subtítulos H2 incluyen palabras clave secundarias',
  'Primer párrafo menciona palabra clave principal',
  'Densidad de palabra clave entre 0.5% y 2.5%',
  'Oraciones promedio de 8-20 palabras',
  'Párrafos de 2-4 oraciones',
  'Uso de voz activa >80%',
  'Enlaces internos cada 200-300 palabras',
  'Llamadas a la acción claras y específicas',
  'Meta descripción de 150-160 caracteres',
  'URL amigable con palabra clave',
  'Imágenes con alt text descriptivo'
];