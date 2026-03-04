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
    { name: "Equipo", href: "/equipo" },
    { name: "Contacto", href: "/contacto" },
  ],
  en: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/proyectos" },
    { name: "Reports", href: "/reportes" },
    { name: "Team", href: "/equipo" },
    { name: "Contact", href: "/contacto" },
  ],
};

export const heroContent = {
  es: {
    headline: "Aceleramos la adopción de IA en América Latina",
    subtext:
      "Acompañamos a organizaciones públicas y privadas en su transformación con inteligencia artificial — desde la estrategia hasta la implementación",
    cta: "Conoce nuestros proyectos",
  },
  en: {
    headline: "Accelerating AI Adoption in Latin America",
    subtext:
      "We guide public and private organizations through their AI transformation — from strategy to implementation",
    cta: "Explore our projects",
  },
};

export const stats = [
  { value: "7+", label: { es: "Países", en: "Countries" } },
  { value: "20+", label: { es: "Proyectos", en: "Projects" } },
  { value: "6000+", label: { es: "Participantes", en: "Participants" } },
];

export const services = {
  es: [
    {
      title: "Estrategia e Implementación de IA",
      description:
        "Diseñamos hojas de ruta para integrar inteligencia artificial en organizaciones públicas y privadas, desde el diagnóstico de madurez hasta la adopción operativa",
      icon: "Rocket",
    },
    {
      title: "Evaluaciones y Diagnósticos",
      description:
        "Diagnósticos integrales de preparación en IA: metodología RAM UNESCO, Índice Latinoamericano de IA, evaluaciones sectoriales y análisis de madurez organizacional",
      icon: "BarChart3",
    },
    {
      title: "Transformación Organizacional",
      description:
        "Acompañamos a empresas y entidades públicas en su transformación digital con IA, incluyendo gestión del cambio, capacitación y gobernanza interna",
      icon: "Building2",
    },
    {
      title: "Investigación y Reportes",
      description:
        "Estudios de impacto económico, análisis de mercado y reportes estratégicos sobre adopción de IA en la región",
      icon: "FileSearch",
    },
  ],
  en: [
    {
      title: "AI Strategy & Implementation",
      description:
        "We design roadmaps to integrate artificial intelligence into public and private organizations, from maturity assessments to operational adoption",
      icon: "Rocket",
    },
    {
      title: "Assessments & Diagnostics",
      description:
        "Comprehensive AI readiness diagnostics: UNESCO RAM methodology, Latin American AI Index, sector evaluations and organizational maturity analysis",
      icon: "BarChart3",
    },
    {
      title: "Organizational Transformation",
      description:
        "We guide companies and public entities through their digital transformation with AI, including change management, training and internal governance",
      icon: "Building2",
    },
    {
      title: "Research & Reports",
      description:
        "Economic impact studies, market analysis and strategic reports on AI adoption in the region",
      icon: "FileSearch",
    },
  ],
};

export const clients = [
  { name: "UNESCO", logo: "/images/clients/unesco.svg" },
  { name: "Google", logo: "/images/clients/google.svg" },
  { name: "BID", logo: "/images/clients/bid.svg" },
  { name: "CENIA", logo: "/images/clients/cenia.svg" },
  { name: "Ministerio de Ciencia", logo: "/images/clients/minciencia.svg" },
  { name: "CAF", logo: "/images/clients/caf.svg" },
  { name: "Ministerio de Economía", logo: "/images/clients/mineconomia.svg" },
  { name: "CChC", logo: "/images/clients/cchc.svg" },
  { name: "UNAB", logo: "/images/clients/unab.svg" },
  { name: "Municipalidad de Las Condes", logo: "/images/clients/lascondes.svg" },
  { name: "Conecta Logística", logo: "/images/clients/conecta.svg" },
  { name: "Centro de Innovación UC", logo: "/images/clients/innovacionuc.svg" },
];

export const projects = [
  // ── 2025–2026 | En desarrollo ──────────────────────────────────
  {
    id: "ram-el-salvador",
    title: {
      es: "Implementación RAM El Salvador",
      en: "RAM Implementation El Salvador",
    },
    description: {
      es: "Aplicación de la metodología RAM desarrollada por UNESCO en El Salvador para apoyar el desarrollo de sus políticas de inteligencia artificial.",
      en: "Application of UNESCO's RAM methodology in El Salvador to support the development of its artificial intelligence policies.",
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
      es: "Aplicación de la metodología RAM desarrollada por UNESCO en Honduras para apoyar el desarrollo de sus políticas de inteligencia artificial.",
      en: "Application of UNESCO's RAM methodology in Honduras to support the development of its artificial intelligence policies.",
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
      es: "Aplicación de la metodología RAM desarrollada por UNESCO en Guatemala para apoyar el desarrollo de sus políticas de inteligencia artificial.",
      en: "Application of UNESCO's RAM methodology in Guatemala to support the development of its artificial intelligence policies.",
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
      es: "Estudio encargado por Google que analiza 10 países de Hispanoamérica para estimar el potencial impacto de la IA y generar recomendaciones de política pública.",
      en: "Google-commissioned study analyzing 10 Hispanic American countries to estimate AI's potential impact and generate public policy recommendations.",
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
      es: "Aplicación de la metodología RAM de UNESCO en Camboya para apoyar el desarrollo de su primera Estrategia Nacional de Inteligencia Artificial.",
      en: "Application of UNESCO's RAM methodology in Cambodia to support the development of its first National Artificial Intelligence Strategy.",
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
      es: "Análisis comparativo y recomendaciones del estado de legislación en IA en América Latina y el Caribe, considerando su impacto potencial en el desarrollo de sistemas de IA.",
      en: "Comparative analysis and recommendations on the state of AI legislation in Latin America and the Caribbean, considering its potential impact on AI systems development.",
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
      es: "Desarrollo de proceso de participación ciudadana y elaboración de Política Municipal de IA para la Municipalidad de Las Condes, en colaboración con CENIA.",
      en: "Development of citizen participation process and drafting of Municipal AI Policy for Las Condes Municipality, in collaboration with CENIA.",
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
      es: "Diseño y medición de índice de I+D+i del sector logístico, con revisión y validación de comité académico.",
      en: "Design and measurement of the logistics sector R&D&I index, with review and validation by an academic committee.",
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
      es: "Diseño e implementación de grupos focales participativos para ejercicios de prospección y construcción de escenarios sobre regulación de IA.",
      en: "Design and implementation of participatory focus groups for foresight exercises and scenario building on AI regulation.",
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
      es: "Levantamiento de casos de sandboxes regulatorios de IA a nivel internacional y recomendaciones para la implementación de la agenda nacional.",
      en: "International survey of AI regulatory sandbox cases and recommendations for implementing Chile's national agenda.",
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
      es: "Recopilación de información sobre proyectos de investigación en IA para proporcionar una visión estratégica de las capacidades y oportunidades del país.",
      en: "Compilation of information on AI research projects to provide a strategic overview of the country's capabilities and opportunities.",
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
      es: "Primer país de Centroamérica y el Caribe en aplicar la metodología RAM, profundizando en desafíos y oportunidades con recomendaciones incorporadas en su Estrategia Nacional de IA.",
      en: "First country in Central America and the Caribbean to apply the RAM methodology, analyzing challenges and opportunities with recommendations incorporated into its National AI Strategy.",
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
      es: "Profundización en desafíos y oportunidades de la adopción de IA, con un conjunto de recomendaciones para la política nacional de inteligencia artificial.",
      en: "In-depth analysis of AI adoption challenges and opportunities, with a set of recommendations for the national artificial intelligence policy.",
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
      es: "Apoyo en la revisión de la política y plan de acción de 2021, generando una propuesta actualizada basada en las recomendaciones de la RAM UNESCO.",
      en: "Support in reviewing the 2021 policy and action plan, generating an updated proposal based on UNESCO RAM recommendations.",
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
      es: "Evaluación de la preparación del país para la adopción ética de la IA, destacando cambios institucionales y regulatorios necesarios, con más de 300 participantes.",
      en: "Assessment of the country's readiness for ethical AI adoption, highlighting necessary institutional and regulatory changes, with over 300 participants.",
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
      es: "Evaluación de prácticas de innovación del sector de la construcción para elaborar indicadores y recomendaciones.",
      en: "Evaluation of innovation practices in the construction sector to develop indicators and recommendations.",
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
      es: "Metodología usando procesamiento de lenguaje natural para el análisis de deliberaciones y entrevistas a nuevos votantes en el segundo proceso constitucional.",
      en: "Methodology using natural language processing for analyzing deliberations and interviews with new voters in the second constitutional process.",
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
      es: "Primer instrumento para medir la preparación de los municipios en impulsar e implementar sistemas de IA, identificando brechas y oportunidades.",
      en: "First instrument to measure municipal readiness to promote and implement AI systems, identifying gaps and opportunities.",
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
      es: "Estudio encargado por APEC sobre sesgos peligrosos en sistemas de inteligencia artificial, en colaboración con CENIA.",
      en: "APEC-commissioned study on dangerous biases in artificial intelligence systems, in collaboration with CENIA.",
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
      es: "Diseño de metodología y levantamiento de datos para el primer Índice Latinoamericano de IA, incluyendo encuesta para futuros levantamientos con apoyo de CAF y UNESCO.",
      en: "Methodology design and data collection for the first Latin American AI Index, including surveys for future editions with CAF and UNESCO support.",
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
      es: "Apoyo en diseño de metodología de discusión y análisis automatizado con algoritmos de IA de jornada deliberativa sobre equidad de género y movilidad.",
      en: "Support in designing discussion methodology and automated AI analysis of deliberative workshop on gender equity and mobility.",
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
      es: "Diseño e implementación de procesos de participación ciudadana para la creación de la Estrategia Nacional de IA de República Dominicana y la actualización de la de Uruguay.",
      en: "Design and implementation of citizen participation processes for the creation of the Dominican Republic's National AI Strategy and Uruguay's strategy update.",
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
      es: "Desarrollo conceptual de Climate Tech y benchmark del estado de la industria y emprendimiento en la región de América Latina y el Caribe.",
      en: "Conceptual development of Climate Tech and benchmark of the industry and entrepreneurship landscape in Latin America and the Caribbean.",
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
      es: "Diseño de metodología y análisis automatizado con algoritmos de IA de sesiones de participación, entregando panel de visualizaciones comparativas.",
      en: "Methodology design and automated AI analysis of participation sessions, delivering a comparative visualization dashboard.",
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
    role: { es: "Socio", en: "Partner" },
    bio: {
      es: "Ph.D. en Engineering Systems (MIT). Profesor en la Escuela de Ingeniería de la PUC Chile. Ex Subsecretario de Economía y Pequeñas Empresas. Especialista en estrategias de desarrollo público y privado.",
      en: "Ph.D. in Engineering Systems (MIT). Professor at PUC Chile's School of Engineering. Former Undersecretary of Economy and Small Businesses. Specialist in public and private development strategies.",
    },
    image: "/images/team/julio-pertuze.jpg",
    linkedin: "https://www.linkedin.com/in/julio-pertuzé-1458124/",
  },
  {
    id: "jose-guridi",
    name: "José A. Guridi",
    role: { es: "Socio", en: "Partner" },
    bio: {
      es: "Candidato a Ph.D. en Information Science (Cornell). Creador de la Política Nacional de IA de Chile. Miembro de UNESCO AI Ethics Experts Without Borders. Ex líder de la unidad FAST en el Ministerio de Economía.",
      en: "Ph.D. candidate in Information Science (Cornell). Creator of Chile's National AI Policy. Member of UNESCO AI Ethics Experts Without Borders. Former leader of the FAST unit at the Ministry of Economy.",
    },
    image: "/images/team/jose-guridi.jpg",
    linkedin: "https://www.linkedin.com/in/jaguridi/",
  },
  {
    id: "sandra-peralta",
    name: "Sandra Peralta",
    role: { es: "Socia", en: "Partner" },
    bio: {
      es: "Ingeniera Comercial con mención en Economía (Universidad de Chile). Economista senior en la Comisión Nacional de Evaluación y Productividad. Experiencia en regulación de telecomunicaciones y evaluación de políticas públicas.",
      en: "Commercial Engineer with Economics focus (University of Chile). Senior economist at the National Commission of Evaluation and Productivity. Experience in telecommunications regulation and public policy evaluation.",
    },
    image: "/images/team/sandra-peralta.jpg",
    linkedin: "https://www.linkedin.com/in/sandra-peralta-alvarez-23580a252/",
  },
  {
    id: "sebastian-adasme",
    name: "Sebastián Adasme",
    role: { es: "Socio", en: "Partner" },
    bio: {
      es: "Cientista social con especialización en Economía y Ciencia Política (PUC Chile). Asesor de la Presidencia y del Ministerio de Economía. Especialista en economía digital y política tecnológica multilateral.",
      en: "Social scientist specializing in Economics and Political Science (PUC Chile). Advisor to the Presidency and Ministry of Economy. Specialist in digital economy and multilateral technology policy.",
    },
    image: "/images/team/sebastian-adasme.jpg",
    linkedin: "https://www.linkedin.com/in/sebastián-adasme-toro-18465b201/",
  },
  {
    id: "pilar-trivelli",
    name: "Pilar Trivelli",
    role: { es: "Socia", en: "Partner" },
    bio: {
      es: "Abogada (Universidad de Chile), M.Sc. en Food Studies (NYU). Ex asesora senior de INAPI y directora de SERCOTEC e INNOVA. Lideró programas de recuperación de pymes durante la pandemia.",
      en: "Lawyer (University of Chile), M.Sc. in Food Studies (NYU). Former senior advisor at INAPI and board director at SERCOTEC and INNOVA. Led SME recovery programs during the pandemic.",
    },
    image: "/images/team/pilar-trivelli.jpg",
    linkedin: "https://www.linkedin.com/in/pilar-trivelli-98823b69/",
  },
  {
    id: "nicole-rabba",
    name: "Nicole Rabba",
    role: { es: "Socia", en: "Partner" },
    bio: {
      es: "Economista (Universidad de Chile). Ex analista financiera en Fundación País Digital y asesora en la unidad FAST. Investigadora asistente en el Centro de Innovación y Economía Circular.",
      en: "Economist (University of Chile). Former financial analyst at País Digital Foundation and advisor at the FAST unit. Assistant researcher at the Innovation and Circular Economy Center.",
    },
    image: "/images/team/nicole-rabba.jpg",
    linkedin: "https://www.linkedin.com/in/prabba/",
  },
];

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
