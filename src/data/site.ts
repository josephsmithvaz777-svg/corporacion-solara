export const brand = {
  name: 'Solara Corporación',
  legalName: 'Solara Corporación',
  ruc: '20615949648',
  tagline: 'Inversión con seguridad, respaldo y visión de futuro',
  region: 'Virú · La Libertad · Norte del Perú',
};

export const nav = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Por qué invertir', href: '#por-que-invertir' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export const benefits = [
  {
    title: 'Financiamiento accesible',
    description: 'Planes pensados para emprendedores, familias e inversionistas.',
    icon: 'lucide:hand-coins',
  },
  {
    title: 'Documentación en regla',
    description: 'Procesos claros y transparentes para que inviertas con seguridad.',
    icon: 'lucide:file-check-2',
  },
  {
    title: 'Ubicaciones estratégicas',
    description: 'Zonas con alto potencial de crecimiento y valorización.',
    icon: 'lucide:map-pin',
  },
  {
    title: 'Acompañamiento real',
    description: 'Te guiamos en cada paso, de la consulta a la entrega.',
    icon: 'lucide:handshake',
  },
];

export const projects = [
  {
    slug: 'mall-viru',
    name: 'Mall Virú',
    type: 'Lotes comerciales',
    location: 'Frente a la Panamericana · Puente Virú',
    summary: 'El primer mall de la provincia de Virú. Una oportunidad para tu negocio en la zona de mayor crecimiento.',
    highlights: ['Locales desde 25 m²', 'Alto flujo peatonal y vehicular', 'Luz, agua, pistas y veredas'],
    image: 'img-card-mall-viru',
    logo: '/images/logo-mall-viru.png',
    featured: true,
  },
  {
    slug: 'oasis-residencial-ii',
    name: 'Oasis Residencial II',
    type: 'Lotes residenciales',
    location: 'Puente Virú',
    summary: 'Lotes para vivienda e inversión en una urbanización pensada para crecer con tu familia.',
    highlights: ['Ideal para vivienda', 'Ubicación estratégica', 'Proyección de plusvalía'],
    image: 'img-card-oasis',
    logo: '/images/logo-oasis.png',
    featured: false,
  },
  {
    slug: 'costa-verde',
    name: 'Costa Verde',
    type: 'Lotes residenciales',
    location: 'Nueva Panamericana · Puente Virú',
    summary: 'Terrenos para vivir o invertir en una zona conectada y con visión de futuro.',
    highlights: ['Acceso privilegiado', 'Para vivir o invertir', 'Crecimiento de la zona'],
    image: 'img-card-costa-verde',
    logo: null,
    featured: false,
  },
];

export const reasons = [
  {
    title: 'Plusvalía real',
    description: 'Invertimos en zonas con proyección, no en promesas vacías.',
  },
  {
    title: 'Desarrollo regional',
    description: 'Cada proyecto busca impulsar el crecimiento económico de Virú.',
  },
  {
    title: 'Patrimonio familiar',
    description: 'Más que un terreno: una oportunidad para proteger y hacer crecer tu patrimonio.',
  },
];

export const steps = [
  { n: '01', title: 'Contáctanos', description: 'Cuéntanos tu objetivo: vivir, emprender o invertir.' },
  { n: '02', title: 'Conoce el proyecto', description: 'Te mostramos opciones, ubicación y beneficios con claridad.' },
  { n: '03', title: 'Cotiza y separa', description: 'Elige tu lote con financiamiento accesible y respaldo.' },
  { n: '04', title: 'Acompañamiento', description: 'Te acompañamos hasta cerrar con documentación en regla.' },
];

export const testimonials = [
  {
    quote: 'Encontré una forma clara de invertir cerca de casa, con acompañamiento en todo el proceso.',
    name: 'Cliente Solara',
    project: 'Mall Virú',
    focus: 'Inversión con visión de futuro',
    image: 'testimonios-1',
  },
  {
    quote: 'Lo que más valoré fue la transparencia: me explicaron cada paso sin presión.',
    name: 'Cliente Solara',
    project: 'Mall Virú',
    focus: 'Compra con seguridad',
    image: 'testimonios-2',
  },
  {
    quote: 'Buscaba un espacio para mi familia. Oasis Residencial me dio la tranquilidad que necesitaba.',
    name: 'Cliente Solara',
    project: 'Oasis Residencial',
    focus: 'Tu hogar comienza aquí',
    image: 'testimonios-3',
  },
  {
    quote: 'Me sentí acompañado desde el primer contacto. Hoy tengo un lote con proyección real.',
    name: 'Cliente Solara',
    project: 'Oasis Residencial',
    focus: 'Cercanía y respaldo',
    image: 'testimonios-4',
  },
  {
    quote: 'Elegí Solara por la claridad del proceso y la ubicación estratégica de sus proyectos.',
    name: 'Cliente Solara',
    project: 'Oasis Residencial',
    focus: 'Decisión con confianza',
    image: 'testimonios-5',
  },
  {
    quote: 'Invertí en Mall Virú para hacer crecer mi negocio en una zona con alto movimiento.',
    name: 'Cliente Solara',
    project: 'Mall Virú',
    focus: 'Oportunidad comercial',
    image: 'testimonios-6',
  },
];

export const faqs = [
  {
    q: '¿Qué tipo de proyectos desarrolla Solara?',
    a: 'Lotes comerciales, lotes residenciales, urbanizaciones y centros comerciales, con identidad propia pero coherencia de marca.',
  },
  {
    q: '¿Puedo financiar mi lote?',
    a: 'Sí. Ofrecemos financiamiento accesible y te explicamos las opciones según tu perfil y el proyecto elegido.',
  },
  {
    q: '¿Dónde están ubicados los proyectos?',
    a: 'Principalmente en Virú y zonas estratégicas del norte del Perú, con acceso a vías de alto tránsito como la Panamericana.',
  },
  {
    q: '¿Cómo agendo una visita?',
    a: 'Completa el formulario o escríbenos por WhatsApp. Un asesor te contactará para coordinar fecha y horario.',
  },
];

export const ctas = {
  primary: 'Solicita información',
  visit: 'Agenda una visita',
  quote: 'Cotiza tu lote',
  advisor: 'Habla con un asesor',
};

export const heroSlides = [
  {
    image: '/images/banners/banner-home-1.webp',
    eyebrow: 'Solara Corporación',
    title: 'Invierte hoy.',
    highlight: 'Crece mañana.',
    text: 'Inversión con seguridad, respaldo y visión de futuro. Lotes residenciales y comerciales en Virú.',
    ctaPrimary: { label: 'Agenda una visita', href: '#contacto' },
    ctaSecondary: { label: 'Conoce el proyecto', href: '#proyectos' },
    badge: 'Mall Virú',
    location: 'Frente a la Panamericana · Puente Virú',
  },
  {
    image: '/images/banners/banner-home-2.webp',
    eyebrow: 'Oportunidad de inversión',
    title: 'Tu negocio',
    highlight: 'comienza aquí.',
    text: 'Lotes comerciales en zonas estratégicas con alto flujo y proyección de plusvalía.',
    ctaPrimary: { label: 'Cotiza tu lote', href: '#contacto' },
    ctaSecondary: { label: 'Ver proyectos', href: '#proyectos' },
    badge: 'Lotes comerciales',
    location: 'Virú · La Libertad',
  },
  {
    image: '/images/banners/banner-home-3.webp',
    eyebrow: 'Patrimonio familiar',
    title: 'Haz crecer',
    highlight: 'tu futuro.',
    text: 'Urbanizaciones y lotes residenciales pensados para familias e inversionistas del norte del Perú.',
    ctaPrimary: { label: 'Solicita información', href: '#contacto' },
    ctaSecondary: { label: 'Por qué invertir', href: '#por-que-invertir' },
    badge: 'Lotes residenciales',
    location: 'Virú · Zona de crecimiento',
  },
];
