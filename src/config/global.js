export default {
  global: {
    Name: 'Plan de mercadeo',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos de la formulación del plan de mercadeo estratégico. Explora los objetivos organizacionales, metodologías de planeación, programación de recursos y criterios de optimización para estructurar actividades basadas en el mercado potencial. Permite al aprendiz aplicar herramientas estratégicas y de mejora continua para diseñar planes de mercadeo coherentes y eficientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Objetivos estratégicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Misión',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Visión',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Objetivos organizacionales',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Metodologías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Programación de recursos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Secuenciación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Criterios de optimización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Eficiencia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Eficacia',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Costo-beneficio',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Priorización',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Indicadores',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Indicadores',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Evaluación',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Criterios de optimización',
      referencia:
        'Rodríguez-Aguilera, A., & García-Vidal, G. (2012). <em>Eficacia y eficiencia, premisas para la competitividad</em>. Ciencias Holguín, 18(3), 1–14.',
      tipo: 'Artículo científico',
      link: 'https://www.redalyc.org/pdf/1815/181524363002.pdf',
    },
    {
      tema: 'Secuenciación',
      referencia:
        'Delgado, F. (2019, julio 16). <em>Cómo hacer un diagrama de red: ejemplo paso a paso</em> [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1eYq217CrDg',
    },
    {
      tema: 'Metodologías',
      referencia:
        'Posgrados y Educación Continua. (2020). <em>Análisis PESTEL para Definir el Plan de Acción de tu Empresa</em> - Tec de Monterrey [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=R5VOC2A47ms',
    },
    {
      tema: 'Metodologías',
      referencia:
        'Excelencia. (2018). <em>Análisis FODA</em> [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zyMsLd9XZ6U',
    },
    {
      tema: 'Metodologías',
      referencia:
        'HubSpot Español. (2022). <em>MODELO CANVAS explicado paso a paso con ejemplos</em> [Plan de negocios] [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=t63DFWn7hy8',
    },
    {
      tema: 'Metodologías',
      referencia:
        'Mr.Enciso. (2020). <em>Las 5 fuerzas de Porter</em> (explicación sencilla) [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kNOfOmjgOik',
    },
  ],
  glosario: [
    {
      termino: 'Análisis FODA',
      significado:
        'Herramienta estratégica que permite identificar fortalezas, oportunidades, debilidades y amenazas de una organización, facilitando la toma de decisiones informadas.',
    },
    {
      termino: 'Canvas',
      significado:
        'Modelo visual que describe los elementos clave de un negocio en nueve bloques para diseñar, analizar y comunicar propuestas de valor.',
    },
    {
      termino: 'Costo-beneficio',
      significado:
        'Método de evaluación que compara los costos invertidos con los beneficios obtenidos, utilizado para justificar decisiones estratégicas.',
    },
    {
      termino: 'Cronograma',
      significado:
        'Instrumento de planificación que organiza actividades en función del tiempo, permitiendo visualizar la duración y secuencia de tareas.',
    },
    {
      termino: 'Eficacia',
      significado:
        'Capacidad de una acción para alcanzar los objetivos propuestos, independientemente del uso de recursos.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'Capacidad de ejecutar una acción utilizando la menor cantidad de recursos posible, sin comprometer la calidad del resultado.',
    },
    {
      termino: 'Indicador (KPI)',
      significado:
        'Métrica clave que permite medir el desempeño de una actividad o proceso, alineado con los objetivos estratégicos.',
    },
    {
      termino: 'Matriz de Eisenhower',
      significado:
        'Técnica de priorización que clasifica tareas según su urgencia e importancia, optimizando la gestión del tiempo y el enfoque estratégico.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Enfoque sistemático que busca perfeccionar procesos y resultados mediante ajustes constantes basados en evaluación y retroalimentación.',
    },
    {
      termino: 'Objetivo estratégico',
      significado:
        'Declaración que define una meta organizacional de largo plazo, alineada con la misión, visión y propósito institucional.',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
