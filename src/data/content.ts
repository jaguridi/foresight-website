export const siteConfig = {
  name: "Foresight",
  url: "https://foresight.cl",
  email: "consultoria@foresight.cl",
  description: "Consultoría estratégica en inteligencia artificial para organizaciones públicas y privadas en América Latina",
  linkedIn: "https://www.linkedin.com/company/foresightcl",
};

export const navigation = {
  es: [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Reportes", href: "/reportes" },
    { name: "Noticias", href: "/noticias" },
    { name: "Equipo", href: "/equipo" },
    { name: "Contacto", href: "/contacto" },
  ],
  en: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/proyectos" },
    { name: "Reports", href: "/reportes" },
    { name: "News", href: "/noticias" },
    { name: "Team", href: "/equipo" },
    { name: "Contact", href: "/contacto" },
  ],
};

export const heroContent = {
  es: {
    headline: "Diseñamos la estrategia de IA para gobiernos y empresas líderes en América Latina",
    subtext:
      "De la política nacional de IA de Chile a estudios de impacto para Google — ayudamos a las organizaciones más ambiciosas a tomar decisiones informadas sobre inteligencia artificial",
    cta: "Conoce nuestros proyectos",
  },
  en: {
    headline: "We Design AI Strategy for Leading Governments and Companies in Latin America",
    subtext:
      "From Chile's national AI policy to impact studies for Google — we help the most ambitious organizations make informed decisions about artificial intelligence",
    cta: "Explore our projects",
  },
};

export const heroStats = [
  { value: "10+", label: { es: "Países asesorados", en: "Countries advised" } },
  { value: "20+", label: { es: "Proyectos entregados", en: "Projects delivered" } },
  { value: "6", label: { es: "Socios especialistas", en: "Specialist partners" } },
];

export const stats = [
  { value: "7+", label: { es: "Países", en: "Countries" } },
  { value: "20+", label: { es: "Proyectos", en: "Projects" } },
];

export const services = {
  es: [
    {
      title: "Estrategia e Implementación de IA",
      description:
        "Tu organización obtiene una hoja de ruta concreta con prioridades claras, plazos definidos y casos de uso validados para adoptar IA — no un documento genérico, sino un plan ejecutable",
      icon: "Rocket",
    },
    {
      title: "Evaluaciones y Diagnósticos",
      description:
        "Sabrás exactamente dónde está tu país u organización en su preparación para la IA, con brechas identificadas y recomendaciones priorizadas. Usamos la metodología RAM de UNESCO y el ILIA",
      icon: "BarChart3",
    },
    {
      title: "Transformación Organizacional",
      description:
        "Tu equipo adquiere las capacidades para adoptar IA de forma sostenible: desde la gobernanza interna hasta la capacitación práctica para que los cambios perduren",
      icon: "Building2",
    },
    {
      title: "Investigación y Reportes",
      description:
        "Obtienes evidencia rigurosa para tomar decisiones estratégicas: estudios de impacto económico, análisis sectoriales y reportes que posicionan tu visión en la conversación pública",
      icon: "FileSearch",
    },
  ],
  en: [
    {
      title: "AI Strategy & Implementation",
      description:
        "Your organization gets a concrete roadmap with clear priorities, defined timelines and validated use cases to adopt AI — not a generic document, but an executable plan",
      icon: "Rocket",
    },
    {
      title: "Assessments & Diagnostics",
      description:
        "You'll know exactly where your country or organization stands in AI readiness, with identified gaps and prioritized recommendations. We use UNESCO's RAM methodology and ILIA",
      icon: "BarChart3",
    },
    {
      title: "Organizational Transformation",
      description:
        "Your team acquires the capabilities to adopt AI sustainably: from internal governance to hands-on training so that changes last",
      icon: "Building2",
    },
    {
      title: "Research & Reports",
      description:
        "You get rigorous evidence for strategic decision-making: economic impact studies, sector analyses and reports that position your vision in the public conversation",
      icon: "FileSearch",
    },
  ],
};

export const clients = [
  { name: "UNESCO", logo: "/images/clients/unesco.svg" },
  { name: "Google", logo: "/images/clients/Google_2015_logo.svg.png" },
  { name: "BID", logo: "/images/clients/960px-Logo_BID_Español.png" },
  { name: "CENIA", logo: "/images/clients/CENIA.png" },
  { name: "Ministerio de Ciencia", logo: "/images/clients/Logo_del_Ministerio_de_Ciencia,_Tecnología,_Conocimiento_y_Innovación_de_Chile.png" },
  { name: "CAF", logo: "/images/clients/Logotipo_CAF_-_Banco_de_Desarrollo_de_América_Latina_y_el_Caribe.png" },
  { name: "Ministerio de Economía", logo: "/images/clients/Ministerioeconomia.png" },
  { name: "CChC", logo: "/images/clients/ccchc.png" },
  { name: "UNAB", logo: "/images/clients/Logo-unab.svg.png" },
  { name: "Municipalidad de Las Condes", logo: "/images/clients/las-condes.jpg" },
  { name: "Conecta Logística", logo: "/images/clients/conecta.webp" },
  { name: "Centro de Innovación UC", logo: "/images/clients/centroinnovacion.png" },
];

export const clientLogos: Record<string, string> = {
  UNESCO: "/images/clients/unesco.svg",
  Google: "/images/clients/google.svg",
  CENIA: "/images/clients/cenia.svg",
  "Municipalidad de Las Condes": "/images/clients/lascondes.svg",
  "Conecta Logística": "/images/clients/conecta.svg",
  "Centro de Innovación UC": "/images/clients/innovacionuc.svg",
  BID: "/images/clients/bid.svg",
  "Ministerio de Ciencia": "/images/clients/minciencia.svg",
  CChC: "/images/clients/cchc.svg",
  UNAB: "/images/clients/unab.svg",
  "Ministerio de Economía": "/images/clients/mineconomia.svg",
  CAF: "/images/clients/caf.svg",
};

export const projects = [
  // ── 2025–2026 | En desarrollo ──────────────────────────────────
  {
    id: "ram-el-salvador",
    title: {
      es: "Implementación RAM El Salvador",
      en: "RAM Implementation El Salvador",
    },
    description: {
      es: "Diagnóstico integral de las capacidades y desafíos de El Salvador para la adopción de IA, aplicando la metodología RAM de UNESCO. Los resultados orientan el diseño de las primeras políticas nacionales de inteligencia artificial del país.",
      en: "Comprehensive assessment of El Salvador's capabilities and challenges for AI adoption, applying UNESCO's RAM methodology. The results guide the design of the country's first national artificial intelligence policies.",
    },
    client: "UNESCO",
    year: 2025,
    yearEnd: 2026,
    region: "Centroamérica y Caribe",
    type: "assessment",
    status: "in_progress" as const,
  },
  {
    id: "ram-honduras",
    title: {
      es: "Implementación RAM Honduras",
      en: "RAM Implementation Honduras",
    },
    description: {
      es: "Evaluación del ecosistema de IA en Honduras mediante la metodología RAM de UNESCO, identificando brechas institucionales y oportunidades. Las recomendaciones alimentan el diseño de la hoja de ruta nacional en inteligencia artificial.",
      en: "Assessment of Honduras' AI ecosystem using UNESCO's RAM methodology, identifying institutional gaps and opportunities. The recommendations inform the design of the national artificial intelligence roadmap.",
    },
    client: "UNESCO",
    year: 2025,
    yearEnd: 2026,
    region: "Centroamérica y Caribe",
    type: "assessment",
    status: "in_progress" as const,
  },
  {
    id: "ram-guatemala",
    title: {
      es: "Implementación RAM Guatemala",
      en: "RAM Implementation Guatemala",
    },
    description: {
      es: "Aplicación de la metodología RAM de UNESCO en Guatemala para mapear capacidades tecnológicas, talento y gobernanza de IA. El diagnóstico sienta las bases para la formulación de políticas públicas de inteligencia artificial en el país.",
      en: "Application of UNESCO's RAM methodology in Guatemala to map technological capabilities, talent, and AI governance. The assessment lays the groundwork for formulating public artificial intelligence policies in the country.",
    },
    client: "UNESCO",
    year: 2025,
    region: "Centroamérica y Caribe",
    type: "assessment",
    status: "in_progress" as const,
  },
  // ── 2024–2025 ──────────────────────────────────────────────────
  {
    id: "ai-sprinters",
    title: {
      es: "AI Sprinters: Impacto de la IA en Hispanoamérica",
      en: "AI Sprinters: AI Impact in Hispanic America",
    },
    description: {
      es: "Estudio regional encargado por Google que cuantifica el impacto potencial de la IA en 10 economías hispanoamericanas. Entrega un conjunto de recomendaciones de política pública para maximizar los beneficios de la adopción tecnológica en la región.",
      en: "Regional study commissioned by Google quantifying AI's potential impact across 10 Hispanic American economies. Delivers a set of public policy recommendations to maximize the benefits of technology adoption in the region.",
    },
    client: "Google",
    year: 2024,
    yearEnd: 2025,
    region: "Latinoamérica",
    type: "research",
    status: "completed" as const,
    featuredStat: { value: "10", label: { es: "Países analizados", en: "Countries analyzed" } },
    reportSlug: "ai-sprinters-chile",
  },
  {
    id: "ram-camboya",
    title: {
      es: "Implementación RAM Camboya",
      en: "RAM Implementation Cambodia",
    },
    description: {
      es: "Primera aplicación de la metodología RAM de UNESCO en el sudeste asiático, evaluando la preparación de Camboya para la adopción de IA. Los hallazgos contribuyeron directamente al diseño de la primera Estrategia Nacional de Inteligencia Artificial del país.",
      en: "First application of UNESCO's RAM methodology in Southeast Asia, assessing Cambodia's readiness for AI adoption. The findings directly contributed to the design of the country's first National Artificial Intelligence Strategy.",
    },
    client: "UNESCO",
    year: 2024,
    yearEnd: 2025,
    region: "Asia-Pacífico",
    type: "assessment",
    status: "completed" as const,
    externalUrl: "https://www.unesco.org/ethics-ai/en/cambodia",
  },
  // ── 2024 ───────────────────────────────────────────────────────
  {
    id: "marcos-regulatorios-ia-lac",
    title: {
      es: "Análisis Comparativo de Marcos Regulatorios de IA en ALC",
      en: "Comparative Analysis of AI Regulatory Frameworks in LAC",
    },
    description: {
      es: "Mapeo y análisis comparativo de la legislación de IA en más de 12 países de América Latina y el Caribe. Generamos recomendaciones concretas para armonizar marcos regulatorios y fomentar la innovación responsable en la región.",
      en: "Mapping and comparative analysis of AI legislation across 12+ Latin American and Caribbean countries. We delivered concrete recommendations to harmonize regulatory frameworks and foster responsible innovation in the region.",
    },
    client: "CENIA",
    year: 2024,
    region: "Latinoamérica",
    type: "research",
    status: "completed" as const,
    featuredStat: { value: "12+", label: { es: "Países analizados", en: "Countries analyzed" } },
  },
  {
    id: "politica-municipal-ia-lascondes",
    title: {
      es: "Política Municipal de Inteligencia Artificial",
      en: "Municipal Artificial Intelligence Policy",
    },
    description: {
      es: "Diseño y facilitación de un proceso de participación ciudadana que culminó en la primera Política Municipal de IA en Chile. Elaborada en colaboración con CENIA, establece lineamientos para el uso responsable de IA en la gestión municipal.",
      en: "Design and facilitation of a citizen participation process that culminated in Chile's first Municipal AI Policy. Developed in collaboration with CENIA, it establishes guidelines for the responsible use of AI in municipal governance.",
    },
    client: "Municipalidad de Las Condes",
    year: 2024,
    region: "Chile",
    type: "policy",
    status: "completed" as const,
  },
  {
    id: "indice-idi-logistica",
    title: {
      es: "Índice de Investigación, Desarrollo e Innovación en Logística",
      en: "Logistics Research, Development & Innovation Index",
    },
    description: {
      es: "Creación del primer índice de I+D+i del sector logístico chileno, con metodología validada por un comité académico. Permite al sector medir su madurez en innovación y priorizar inversiones estratégicas.",
      en: "Creation of the first R&D&I index for Chile's logistics sector, with methodology validated by an academic committee. Enables the sector to measure its innovation maturity and prioritize strategic investments.",
    },
    client: "Conecta Logística",
    year: 2024,
    region: "Chile",
    type: "research",
    status: "completed" as const,
  },
  {
    id: "prospeccion-regulacion-ia",
    title: {
      es: "Prospección sobre la Regulación de IA",
      en: "AI Regulation Foresight",
    },
    description: {
      es: "Facilitación de grupos focales participativos para construir escenarios prospectivos sobre regulación de IA en Chile. Los resultados orientan la toma de decisiones frente a un entorno regulatorio en rápida evolución.",
      en: "Facilitation of participatory focus groups to build foresight scenarios on AI regulation in Chile. The results guide decision-making in a rapidly evolving regulatory environment.",
    },
    client: "Centro de Innovación UC",
    year: 2024,
    region: "Chile",
    type: "consulting",
    status: "completed" as const,
    externalUrl: "https://centrodeinnovacion.uc.cl",
  },
  {
    id: "sandboxes-ia-chile",
    title: {
      es: "Levantamiento de Casos y Recomendaciones para Sandboxes de IA en Chile",
      en: "AI Regulatory Sandboxes: Cases & Recommendations for Chile",
    },
    description: {
      es: "Investigación de experiencias internacionales de sandboxes regulatorios de IA y desarrollo de recomendaciones adaptadas a Chile. Entregamos una hoja de ruta para la implementación de entornos de prueba que aceleren la innovación con supervisión regulatoria.",
      en: "Research of international AI regulatory sandbox experiences and development of recommendations tailored to Chile. We delivered a roadmap for implementing testing environments that accelerate innovation with regulatory oversight.",
    },
    client: "BID",
    year: 2024,
    region: "Chile",
    type: "policy",
    status: "completed" as const,
  },
  {
    id: "levantamiento-proyectos-ia-chile",
    title: {
      es: "Levantamiento de Proyectos de IA en Chile",
      en: "Mapping of AI Projects in Chile",
    },
    description: {
      es: "Mapeo exhaustivo de los proyectos de investigación en IA del país, identificando capacidades, brechas y oportunidades de colaboración. El resultado entrega una visión estratégica para orientar la inversión pública en I+D de inteligencia artificial.",
      en: "Comprehensive mapping of the country's AI research projects, identifying capabilities, gaps, and collaboration opportunities. The result provides a strategic vision to guide public investment in artificial intelligence R&D.",
    },
    client: "BID",
    year: 2024,
    region: "Chile",
    type: "research",
    status: "completed" as const,
  },
  // ── 2023–2024 ──────────────────────────────────────────────────
  {
    id: "ram-republica-dominicana",
    title: {
      es: "Implementación RAM República Dominicana",
      en: "RAM Implementation Dominican Republic",
    },
    description: {
      es: "Lideramos la primera implementación de la metodología RAM en Centroamérica y el Caribe, evaluando desafíos y oportunidades para la adopción de IA. Las recomendaciones fueron incorporadas directamente en la Estrategia Nacional de Inteligencia Artificial del país.",
      en: "We led the first RAM methodology implementation in Central America and the Caribbean, assessing challenges and opportunities for AI adoption. The recommendations were directly incorporated into the country's National Artificial Intelligence Strategy.",
    },
    client: "UNESCO",
    year: 2023,
    yearEnd: 2024,
    region: "Centroamérica y Caribe",
    type: "assessment",
    status: "completed" as const,
    externalUrl: "https://www.unesco.org/ethics-ai/en/dominicanrepublic",
  },
  {
    id: "ram-cuba",
    title: {
      es: "Implementación RAM Cuba",
      en: "RAM Implementation Cuba",
    },
    description: {
      es: "Evaluación de los desafíos y oportunidades de Cuba para la adopción de IA mediante la metodología RAM de UNESCO. Entregamos recomendaciones concretas que alimentan la formulación de la política nacional de inteligencia artificial.",
      en: "Assessment of Cuba's challenges and opportunities for AI adoption using UNESCO's RAM methodology. We delivered concrete recommendations that inform the formulation of the national artificial intelligence policy.",
    },
    client: "UNESCO",
    year: 2023,
    yearEnd: 2024,
    region: "Centroamérica y Caribe",
    type: "assessment",
    status: "completed" as const,
    externalUrl: "https://www.unesco.org/ethics-ai/en/cuba",
  },
  // ── 2023 ───────────────────────────────────────────────────────
  {
    id: "actualizacion-politica-ia-chile",
    title: {
      es: "Actualización Política de Inteligencia Artificial de Chile",
      en: "Chile's AI Policy Update",
    },
    description: {
      es: "Revisión integral de la Política Nacional de IA de Chile y su plan de acción, generando una propuesta actualizada alineada con las recomendaciones de la RAM UNESCO. El resultado informó la nueva versión de la política publicada por el Ministerio de Ciencia.",
      en: "Comprehensive review of Chile's National AI Policy and its action plan, generating an updated proposal aligned with UNESCO RAM recommendations. The result informed the new policy version published by the Ministry of Science.",
    },
    client: "Ministerio de Ciencia",
    year: 2023,
    region: "Chile",
    type: "policy",
    status: "completed" as const,
    externalUrl: "https://minciencia.gob.cl",
  },
  {
    id: "ram-chile",
    title: {
      es: "Implementación RAM Chile",
      en: "RAM Implementation Chile",
    },
    description: {
      es: "Evaluación de la preparación de Chile para la adopción ética de IA, convocando a más de 300 actores del ecosistema. Identificamos los cambios institucionales y regulatorios necesarios para una gobernanza de IA responsable.",
      en: "Assessment of Chile's readiness for ethical AI adoption, convening over 300 ecosystem stakeholders. We identified the institutional and regulatory changes needed for responsible AI governance.",
    },
    client: "Ministerio de Ciencia",
    year: 2023,
    region: "Chile",
    type: "assessment",
    status: "completed" as const,
    featuredStat: { value: "300+", label: { es: "Participantes", en: "Participants" } },
    externalUrl: "https://www.unesco.org/ethics-ai/en/chile",
  },
  {
    id: "innovacion-construccion",
    title: {
      es: "Análisis de Prácticas de Innovación en la Construcción",
      en: "Innovation Practices Analysis in Construction",
    },
    description: {
      es: "Diagnóstico de las prácticas de innovación del sector de la construcción, desarrollando indicadores medibles y recomendaciones accionables. El estudio permite a las empresas del rubro compararse y priorizar sus esfuerzos de innovación.",
      en: "Assessment of innovation practices in the construction sector, developing measurable indicators and actionable recommendations. The study enables companies in the industry to benchmark themselves and prioritize their innovation efforts.",
    },
    client: "CChC",
    year: 2023,
    region: "Chile",
    type: "research",
    status: "completed" as const,
  },
  {
    id: "voz-nuevos-votantes",
    title: {
      es: "La Voz de los Nuevos Votantes",
      en: "The Voice of New Voters",
    },
    description: {
      es: "Desarrollo de metodología de procesamiento de lenguaje natural para analizar las deliberaciones de nuevos votantes en el proceso constitucional. Transformamos grandes volúmenes de conversaciones en hallazgos accionables sobre preferencias ciudadanas.",
      en: "Development of natural language processing methodology to analyze new voters' deliberations in the constitutional process. We transformed large volumes of conversations into actionable insights on citizen preferences.",
    },
    client: "UNAB",
    year: 2023,
    region: "Chile",
    type: "consulting",
    status: "completed" as const,
    externalUrl: "https://ipp.unab.cl",
  },
  {
    id: "indice-municipal-ia",
    title: {
      es: "Índice Municipal de Inteligencia Artificial",
      en: "Municipal Artificial Intelligence Index",
    },
    description: {
      es: "Diseñamos el primer instrumento para medir la preparación de los municipios chilenos para adoptar IA, identificando brechas y oportunidades concretas. Una herramienta pionera que permite priorizar inversiones en transformación digital local.",
      en: "We designed the first instrument to measure Chilean municipalities' readiness to adopt AI, identifying concrete gaps and opportunities. A pioneering tool that enables prioritizing investments in local digital transformation.",
    },
    client: "Municipalidad de Las Condes",
    year: 2023,
    region: "Chile",
    type: "research",
    status: "completed" as const,
  },
  {
    id: "sesgos-ia-apec",
    title: {
      es: "Estudio sobre Sesgos Dañinos de Sistemas de IA",
      en: "Study on Harmful Biases in AI Systems",
    },
    description: {
      es: "Investigación para APEC sobre sesgos dañinos en sistemas de inteligencia artificial, desarrollada en colaboración con CENIA. El estudio identifica riesgos concretos y propone marcos de mitigación aplicables a las economías del Asia-Pacífico.",
      en: "Research for APEC on harmful biases in artificial intelligence systems, developed in collaboration with CENIA. The study identifies concrete risks and proposes mitigation frameworks applicable to Asia-Pacific economies.",
    },
    client: "Ministerio de Economía",
    year: 2023,
    region: "Global",
    type: "research",
    status: "completed" as const,
    externalUrl: "https://www.apec.org",
  },
  {
    id: "ilia-2023",
    title: {
      es: "Índice Latinoamericano de Inteligencia Artificial 2023",
      en: "Latin American Artificial Intelligence Index 2023",
    },
    description: {
      es: "Diseñamos la metodología y lideramos el levantamiento de datos del primer Índice Latinoamericano de IA, con apoyo de CAF y UNESCO. Un instrumento de referencia regional que permite comparar el avance de los países en adopción y gobernanza de IA.",
      en: "We designed the methodology and led the data collection for the first Latin American AI Index, with CAF and UNESCO support. A regional benchmark instrument that enables comparing countries' progress in AI adoption and governance.",
    },
    client: "CENIA",
    year: 2023,
    region: "Latinoamérica",
    type: "research",
    status: "completed" as const,
    featuredStat: { value: "1°", label: { es: "Índice de IA en Latam", en: "AI Index in LatAm" } },
    externalUrl: "https://indicelatam.cl/",
  },
  {
    id: "equidad-genero-movilidad",
    title: {
      es: "Jornada Participativa sobre Equidad de Género y Movilidad",
      en: "Participatory Workshop on Gender Equity and Mobility",
    },
    description: {
      es: "Diseño de metodología deliberativa y análisis automatizado con IA de una jornada participativa sobre equidad de género y movilidad. Convertimos las opiniones de los participantes en hallazgos estructurados para informar políticas de transporte inclusivo.",
      en: "Design of deliberative methodology and automated AI analysis of a participatory workshop on gender equity and mobility. We transformed participant opinions into structured findings to inform inclusive transportation policies.",
    },
    client: "UNAB",
    year: 2023,
    region: "Chile",
    type: "consulting",
    status: "completed" as const,
    externalUrl: "https://ipp.unab.cl",
  },
  // ── 2022–2023 ──────────────────────────────────────────────────
  {
    id: "participacion-ciudadana-lac",
    title: {
      es: "Apoyo en Procesos de Participación Ciudadana en ALC",
      en: "Citizen Participation Support in LAC",
    },
    description: {
      es: "Diseñamos y facilitamos los procesos de participación ciudadana para la creación de la Estrategia Nacional de IA de República Dominicana y la actualización de la de Uruguay. Cientos de actores aportaron a políticas que reflejan las necesidades reales de cada país.",
      en: "We designed and facilitated citizen participation processes for the creation of the Dominican Republic's National AI Strategy and Uruguay's strategy update. Hundreds of stakeholders contributed to policies that reflect each country's real needs.",
    },
    client: "CAF",
    year: 2022,
    yearEnd: 2023,
    region: "Latinoamérica",
    type: "consulting",
    status: "completed" as const,
    externalUrl: "https://scioteca.caf.com",
  },
  // ── 2022 ───────────────────────────────────────────────────────
  {
    id: "climate-tech-lac",
    title: {
      es: "Análisis de Emprendimientos en Climate Tech en ALC",
      en: "Climate Tech Startups Analysis in LAC",
    },
    description: {
      es: "Definición del marco conceptual de Climate Tech para América Latina y benchmark del ecosistema de emprendimiento en la región. Entregamos al BID un diagnóstico que identifica oportunidades de inversión y brechas del ecosistema climático regional.",
      en: "Definition of the Climate Tech conceptual framework for Latin America and benchmark of the regional entrepreneurship ecosystem. We delivered to the IDB an assessment identifying investment opportunities and gaps in the regional climate ecosystem.",
    },
    client: "BID",
    year: 2022,
    region: "Latinoamérica",
    type: "research",
    status: "completed" as const,
  },
  {
    id: "analisis-participacion-unab",
    title: {
      es: "Análisis Automático de Participación",
      en: "Automated Participation Analysis",
    },
    description: {
      es: "Desarrollo de metodología y análisis automatizado con IA de sesiones de participación ciudadana, entregando un panel de visualizaciones comparativas. Permitimos a los investigadores procesar grandes volúmenes de deliberaciones en tiempo real.",
      en: "Development of methodology and automated AI analysis of citizen participation sessions, delivering a comparative visualization dashboard. We enabled researchers to process large volumes of deliberations in real time.",
    },
    client: "UNAB",
    year: 2022,
    region: "Chile",
    type: "consulting",
    status: "completed" as const,
  },
];

export const reports = [
  {
    slug: "ai-sprinters-chile",
    title: {
      es: "Una oportunidad histórica",
      en: "A Historic Opportunity",
    },
    subtitle: {
      es: "Inteligencia artificial para desatar el potencial económico de Chile",
      en: "Artificial intelligence to unlock Chile's economic potential",
    },
    client: "Google",
    year: 2025,
    featuredStat: {
      value: "10,9–20%",
      label: { es: "Del PIB de Chile podría representar el impacto económico de la IA", en: "Of Chile's GDP could represent AI's economic impact" },
    },
    executiveSummary: {
      es: "Al analizar la matriz productiva de Chile, se estima que la IA podría generar entre USD 36.432 y USD 67.224 millones anuales, equivalentes al 10,9% y 20% del PIB. Los sectores con mayor impacto proyectado son las actividades financieras y de seguros, el comercio y la manufactura, que en conjunto representarían más del 65% del efecto económico total. Sin embargo, según datos de PwC, solo el 5% de las empresas chilenas ha integrado IA en sus operaciones. Este reporte es parte de la serie IA Digital Sprinters de Google.",
      en: "Analyzing Chile's productive matrix, AI could generate between USD 36.432 and USD 67.224 billion annually, equivalent to 10.9% and 20% of GDP. The sectors with the highest projected impact are financial activities and insurance, commerce and manufacturing, which together would represent more than 65% of the total economic effect. However, according to PwC data, only 5% of Chilean companies have integrated AI into their operations. This report is part of Google's AI Digital Sprinters series.",
    },
    keyStats: [
      { value: "10,9–20%", label: { es: "Impacto potencial en PIB", en: "Potential GDP Impact" } },
      { value: "$36–67B", label: { es: "USD millones anuales", en: "USD Billion Annual" } },
      { value: "5%", label: { es: "Empresas con IA adoptada", en: "Companies with AI Adopted" } },
      { value: "45", label: { es: "Centros de datos en Chile", en: "Data Centers in Chile" } },
    ],
    sectors: [
      { name: { es: "Servicios Financieros y Seguros", en: "Financial Services & Insurance" }, percentage: 38 },
      { name: { es: "Comercio", en: "Commerce" }, percentage: 20 },
      { name: { es: "Manufactura", en: "Manufacturing" }, percentage: 10 },
      { name: { es: "Minería", en: "Mining" }, percentage: 6 },
      { name: { es: "Agricultura", en: "Agriculture" }, percentage: 4 },
      { name: { es: "Electricidad y Gas", en: "Electricity & Gas" }, percentage: 4 },
    ],
    pillars: [
      {
        title: { es: "Políticas Públicas Habilitantes", en: "Enabling Public Policies" },
        icon: "Scale",
        content: {
          es: "Chile ha tomado un rol de liderazgo en el diseño de políticas para impulsar la IA. Publicó su Política Nacional de IA en 2021 y la actualizó en 2024. Adoptó los principios de IA de la OCDE y fue el primero en usar la Metodología RAM de UNESCO. Recomendaciones: promover un enfoque regulatorio equilibrado y basado en evidencia, priorizar la fiscalización sectorial y aclarar el marco legal para minería de datos.",
          en: "Chile has taken a leadership role in designing policies to promote AI. It published its National AI Policy in 2021 and updated it in 2024. It adopted the OECD AI principles and was the first to use UNESCO's RAM Methodology. Recommendations: promote a balanced, evidence-based regulatory approach, prioritize sectoral oversight, and clarify the legal framework for data mining.",
        },
      },
      {
        title: { es: "Infraestructura", en: "Infrastructure" },
        icon: "Server",
        content: {
          es: "Chile se perfila como un nodo digital clave en Hispanoamérica con 45 centros de datos (incluido el de Google en Quilicura) y cables submarinos como Humboldt y Curie. El 96,5% de los hogares tiene acceso a internet y posee las redes móviles más rápidas de la región. Recomendaciones: alinear inversiones con desarrollo sostenible, expandir adopción Cloud First y crear plataformas de datos abiertos.",
          en: "Chile is positioning itself as a key digital node in Hispanic America with 45 data centers (including Google's in Quilicura) and submarine cables like Humboldt and Curie. 96.5% of households have internet access and it has the fastest mobile networks in the region. Recommendations: align investments with sustainable development, expand Cloud First adoption, and create open data platforms.",
        },
      },
      {
        title: { es: "Fomento a la Innovación", en: "Innovation Promotion" },
        icon: "Lightbulb",
        content: {
          es: "Chile necesita conectar mejor la academia, la industria y el gobierno para traducir conocimiento en soluciones concretas de IA. El ecosistema emprendedor es dinámico pero se requiere mayor financiamiento y colaboración entre actores del ecosistema para escalar soluciones de IA.",
          en: "Chile needs to better connect academia, industry, and government to translate knowledge into concrete AI solutions. The entrepreneurial ecosystem is dynamic but more funding and collaboration between ecosystem actors is needed to scale AI solutions.",
        },
      },
      {
        title: { es: "Fortalecimiento del Capital Humano", en: "Human Capital Development" },
        icon: "GraduationCap",
        content: {
          es: "El desarrollo del capital humano es el pilar que sostiene la transformación digital y la adopción de IA. Fortalecer la formación en habilidades digitales, integrar la IA en el sistema educativo y promover programas de capacitación continua permitirá a las personas adaptarse a los cambios del mercado laboral y liderar la creación de nuevas oportunidades.",
          en: "Human capital development is the pillar that sustains digital transformation and AI adoption. Strengthening digital skills training, integrating AI into the educational system, and promoting continuous training programs will enable people to adapt to labor market changes and lead the creation of new opportunities.",
        },
      },
    ],
    downloadUrl: "/reports/ai-sprinters-chile.pdf",
  },
  {
    slug: "ai-sprinters-mexico",
    title: {
      es: "Desbloqueando el potencial de la IA en México",
      en: "Unlocking AI's Potential in Mexico",
    },
    subtitle: {
      es: "Velocistas de la IA: el impacto económico de la inteligencia artificial en México",
      en: "AI Sprinters: the economic impact of artificial intelligence in Mexico",
    },
    client: "Google",
    year: 2025,
    featuredStat: {
      value: "3–5,6%",
      label: { es: "Del PIB podría provenir del crecimiento impulsado por IA", en: "Of GDP could come from AI-driven growth" },
    },
    executiveSummary: {
      es: "La inteligencia artificial está redefiniendo el panorama económico global y, si México aprovecha su potencial, puede aumentar entre un 3% y un 5.6% el PIB. En México, se podrían generar entre USD $54.770 y $102.525 millones anuales de crecimiento económico, concentrándose en sectores clave como la manufactura, el comercio minorista y los servicios financieros. Este reporte presenta hallazgos y recomendaciones en cuatro factores habilitantes del marco Digital Sprinters.",
      en: "Artificial intelligence is redefining the global economic landscape and, if Mexico leverages its potential, it can increase GDP by between 3% and 5.6%. Mexico could generate between USD $54.770 and $102.525 billion in annual economic growth, concentrated in key sectors such as manufacturing, retail and financial services. This report presents findings and recommendations across four enabling factors of the Digital Sprinters framework.",
    },
    keyStats: [
      { value: "3–5,6%", label: { es: "Impacto potencial en PIB", en: "Potential GDP Impact" } },
      { value: "$55–103B", label: { es: "USD millones anuales", en: "USD Billion Annual" } },
      { value: "3", label: { es: "Sectores clave", en: "Key Sectors" } },
      { value: "4", label: { es: "Pilares estratégicos", en: "Strategic Pillars" } },
    ],
    sectors: [
      { name: { es: "Manufactura", en: "Manufacturing" }, percentage: 35 },
      { name: { es: "Comercio Minorista", en: "Retail" }, percentage: 30 },
      { name: { es: "Servicios Financieros", en: "Financial Services" }, percentage: 20 },
      { name: { es: "Sector Público", en: "Public Sector" }, percentage: 15 },
    ],
    pillars: [
      {
        title: { es: "Políticas Públicas Efectivas", en: "Effective Public Policies" },
        icon: "Scale",
        content: {
          es: "Crear una estrategia nacional de IA con visión a largo plazo, objetivos claros y métricas medibles. Diseñar un marco regulatorio equilibrado que fomente el uso ético y responsable sin restricciones excesivas. Promover la colaboración estratégica entre gobierno, industria y academia.",
          en: "Create a national AI strategy with long-term vision, clear objectives and measurable metrics. Design a balanced regulatory framework that promotes ethical and responsible use without excessive restrictions. Promote strategic collaboration between government, industry and academia.",
        },
      },
      {
        title: { es: "Infraestructura Tecnológica Sólida", en: "Solid Technological Infrastructure" },
        icon: "Server",
        content: {
          es: "Reforzar las políticas enfocadas en expandir el acceso a infraestructura digital, incluyendo fibra óptica, redes 5G e internet satelital. Reforzar el rol del Estado en la curaduría y apertura de datos públicos. Facilitar el acceso de mipymes a infraestructura tecnológica y servicios en la nube.",
          en: "Strengthen policies focused on expanding access to digital infrastructure, including fiber optics, 5G networks and satellite internet. Strengthen the State's role in curating and opening public data. Facilitate SME access to technological infrastructure and cloud services.",
        },
      },
      {
        title: { es: "Innovación Tecnológica", en: "Technological Innovation" },
        icon: "Lightbulb",
        content: {
          es: "Establecer laboratorios regionales de IA en universidades que aprovechen las ventajas comparativas de cada estado. Crear fondos de financiamiento para startups de base tecnológica. Fomentar una cultura de innovación y emprendimiento en todos los niveles educativos, empresariales y gubernamentales.",
          en: "Establish regional AI labs in universities that leverage each state's comparative advantages. Create funding for technology-based startups. Foster a culture of innovation and entrepreneurship at all educational, business and governmental levels.",
        },
      },
      {
        title: { es: "Personas", en: "People" },
        icon: "GraduationCap",
        content: {
          es: "Implementar programas de formación en habilidades digitales y en IA, integrándolos al sistema educativo en todos los niveles. Desarrollar estrategias de divulgación y educación pública sobre los beneficios y riesgos de la IA. Organizar talleres prácticos para mipymes y el sector público mostrando aplicaciones concretas.",
          en: "Implement digital and AI skills training programs, integrating them into the educational system at all levels. Develop public education and outreach strategies about AI's benefits and risks. Organize practical workshops for SMEs and the public sector showing concrete applications.",
        },
      },
    ],
    downloadUrl: "/reports/ai-sprinters-mexico-es.pdf",
  },
];

export const team = [
  {
    id: "julio-pertuze",
    name: "Julio Pertuzé",
    role: { es: "", en: "" },
    bio: {
      es: "Ph.D. en Engineering Systems (MIT) y Profesor en la Escuela de Ingeniería de la PUC Chile. Como Subsecretario de Economía, impulsó la agenda de transformación digital y apoyo a pymes del país. Especialista en diseño de estrategias de desarrollo tecnológico para el sector público y privado.",
      en: "Ph.D. in Engineering Systems (MIT) and Professor at PUC Chile's School of Engineering. As Undersecretary of Economy, he drove the digital transformation agenda and SME support nationwide. Specialist in designing technology development strategies for the public and private sectors.",
    },
    image: "/images/team/julio-pertuze.jpg",
    linkedin: "https://www.linkedin.com/in/julio-pertuzé-1458124/",
  },
  {
    id: "jose-guridi",
    name: "José A. Guridi",
    role: { es: "", en: "" },
    bio: {
      es: "Candidato a Ph.D. en Information Science (Cornell) y miembro de UNESCO AI Ethics Experts Without Borders. Lideró la creación de la Política Nacional de IA de Chile y la unidad FAST del Ministerio de Economía. Especialista en política pública de inteligencia artificial y gobernanza tecnológica.",
      en: "Ph.D. candidate in Information Science (Cornell) and member of UNESCO AI Ethics Experts Without Borders. Led the creation of Chile's National AI Policy and the FAST unit at the Ministry of Economy. Specialist in artificial intelligence public policy and technology governance.",
    },
    image: "/images/team/jose-guridi.png",
    linkedin: "https://www.linkedin.com/in/jaguridi/",
  },
  {
    id: "sandra-peralta",
    name: "Sandra Peralta",
    role: { es: "", en: "" },
    bio: {
      es: "Ingeniera Comercial con mención en Economía (Universidad de Chile). Ex Jefa de Estudios del Ministerio de Economía y economista senior en la Comisión Nacional de Evaluación y Productividad. Especialista en análisis regulatorio, telecomunicaciones y evaluación de políticas públicas.",
      en: "Commercial Engineer with Economics focus (University of Chile). Former Head of Studies at the Ministry of Economy and senior economist at the National Commission of Evaluation and Productivity. Specialist in regulatory analysis, telecommunications, and public policy evaluation.",
    },
    image: "/images/team/sandra-peralta.jpg",
    linkedin: "https://www.linkedin.com/in/sandra-peralta-alvarez-23580a252/",
  },
  {
    id: "sebastian-adasme",
    name: "Sebastián Adasme",
    role: { es: "", en: "" },
    bio: {
      es: "Cientista social con especialización en Economía y Ciencia Política (PUC Chile). Asesoró directamente a la Presidencia y al Ministerio de Economía en la agenda de transformación digital. Especialista en economía digital y negociación de política tecnológica multilateral.",
      en: "Social scientist specializing in Economics and Political Science (PUC Chile). Directly advised the Presidency and the Ministry of Economy on the digital transformation agenda. Specialist in digital economy and multilateral technology policy negotiation.",
    },
    image: "/images/team/sebastian-adasme.jpg",
    linkedin: "https://www.linkedin.com/in/sebastián-adasme-toro-18465b201/",
  },
  {
    id: "pilar-trivelli",
    name: "Pilar Trivelli",
    role: { es: "", en: "" },
    bio: {
      es: "Abogada (Universidad de Chile) con M.Sc. en Food Studies (NYU). Ex Jefa de la División de Empresas de Menor Tamaño del Ministerio de Economía y asesora senior de INAPI. Especialista en propiedad intelectual, innovación y marcos regulatorios para pymes.",
      en: "Lawyer (University of Chile) with M.Sc. in Food Studies (NYU). Former Head of the Small Business Division at the Ministry of Economy and senior advisor at INAPI. Specialist in intellectual property, innovation, and regulatory frameworks for SMEs.",
    },
    image: "/images/team/pilar-trivelli.jpg",
    linkedin: "https://www.linkedin.com/in/pilar-trivelli-98823b69/",
  },
  {
    id: "nicole-rabba",
    name: "Nicole Rabba",
    role: { es: "", en: "" },
    bio: {
      es: "Economista (Universidad de Chile). Trabajó en la unidad FAST del Ministerio de Economía y en Fundación País Digital, contribuyendo a la agenda de transformación digital del país. Especialista en análisis económico, innovación y economía circular.",
      en: "Economist (University of Chile). Worked at the FAST unit of the Ministry of Economy and at País Digital Foundation, contributing to the country's digital transformation agenda. Specialist in economic analysis, innovation, and circular economy.",
    },
    image: "/images/team/nicole-rabba.jpg",
    linkedin: "https://www.linkedin.com/in/prabba/",
  },
];

export const contactContent = {
  es: {
    title: "Contacto",
    subtitle: "¿Quieres integrar IA en tu organización? Conversemos",
    nameLabel: "Tu nombre",
    emailLabel: "Tu email",
    organizationLabel: "Tu organización",
    messageLabel: "Cuéntanos sobre tu proyecto o consulta",
    submit: "Enviar mensaje",
    directContact: "Contacto directo",
    locationLabel: "Ubicación",
    location: "Santiago, Chile",
  },
  en: {
    title: "Contact",
    subtitle: "Want to integrate AI into your organization? Let's talk",
    nameLabel: "Your name",
    emailLabel: "Your email",
    organizationLabel: "Your organization",
    messageLabel: "Tell us about your project or inquiry",
    submit: "Send message",
    directContact: "Direct contact",
    locationLabel: "Location",
    location: "Santiago, Chile",
  },
};

export const newsItems = [
  {
    id: "ram-centroamerica-2025",
    title: {
      es: "Inicio de evaluaciones RAM en El Salvador, Honduras y Guatemala",
      en: "Launch of RAM assessments in El Salvador, Honduras and Guatemala",
    },
    summary: {
      es: "Foresight inicia la implementación de la metodología RAM de UNESCO en tres nuevos países de Centroamérica, expandiendo nuestro trabajo a 10+ países evaluados.",
      en: "Foresight launches the implementation of UNESCO's RAM methodology in three new Central American countries, expanding our work to 10+ countries assessed.",
    },
    date: "2025-09-15",
    category: "alianza" as const,
  },
  {
    id: "ai-sprinters-mexico-2025",
    title: {
      es: "Lanzamiento del reporte AI Sprinters México",
      en: "Launch of AI Sprinters Mexico report",
    },
    summary: {
      es: "Publicamos junto a Google el estudio de impacto económico de la IA en México, estimando un potencial de crecimiento de USD $55–103 mil millones anuales.",
      en: "We published with Google the AI economic impact study for Mexico, estimating a growth potential of USD $55–103 billion annually.",
    },
    date: "2025-06-01",
    category: "publicacion" as const,
  },
  {
    id: "google-impacto-ia-chile",
    title: {
      es: "Estudio pionero: la IA podría aportar hasta un 20% al PIB de Chile",
      en: "Pioneering study: AI could contribute up to 20% to Chile's GDP",
    },
    summary: {
      es: "Como parte de la serie AI Sprinters de Google, estimamos que la IA podría generar entre USD 36.000 y USD 67.000 millones anuales en Chile, transformando sectores como finanzas, comercio y manufactura.",
      en: "As part of Google's AI Sprinters series, we estimated AI could generate between USD 36 and USD 67 billion annually in Chile, transforming sectors like finance, commerce and manufacturing.",
    },
    date: "2025-03-10",
    category: "publicacion" as const,
  },
  {
    id: "politica-ia-lascondes",
    title: {
      es: "Primera Política Municipal de IA en Chile",
      en: "First Municipal AI Policy in Chile",
    },
    summary: {
      es: "En colaboración con CENIA, desarrollamos la primera política municipal de inteligencia artificial del país para la Municipalidad de Las Condes, incluyendo un proceso de participación ciudadana.",
      en: "In collaboration with CENIA, we developed the country's first municipal artificial intelligence policy for the Municipality of Las Condes, including a citizen participation process.",
    },
    date: "2024-06-20",
    category: "logro" as const,
  },
  {
    id: "ilia-2024",
    title: {
      es: "Publicación del Índice Latinoamericano de Inteligencia Artificial 2024",
      en: "Publication of the Latin American Artificial Intelligence Index 2024",
    },
    summary: {
      es: "Se lanzó la tercera edición del ILIA, el estudio más completo sobre el estado de la IA en América Latina, cubriendo 12 países con más de 200 indicadores.",
      en: "The third edition of ILIA was launched, the most comprehensive study on the state of AI in Latin America, covering 12 countries with over 200 indicators.",
    },
    date: "2024-11-15",
    category: "publicacion" as const,
  },
];

export const newsCategoryLabels = {
  publicacion: { es: "Publicación", en: "Publication" },
  logro: { es: "Logro", en: "Achievement" },
  evento: { es: "Evento", en: "Event" },
  alianza: { es: "Alianza", en: "Partnership" },
};

export const footerContent = {
  es: {
    description: "Consultoría estratégica en inteligencia artificial. Acompañamos a organizaciones públicas y privadas en su adopción de IA en América Latina.",
    links: "Enlaces",
    contact: "Contacto",
    followUs: "Síguenos",
    rights: "Todos los derechos reservados.",
  },
  en: {
    description: "Strategic AI consultancy. We guide public and private organizations through AI adoption in Latin America.",
    links: "Links",
    contact: "Contact",
    followUs: "Follow us",
    rights: "All rights reserved.",
  },
};
