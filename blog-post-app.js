class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: 'var(--surface-color)'}}>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>Algo salió mal</h1>
            <p className="mb-4" style={{color: 'var(--text-secondary)'}}>Lo sentimos, ocurrió un error inesperado.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function BlogPostApp() {
  try {
    const [darkMode, setDarkMode] = React.useState(() => localStorage.getItem('darkMode') === 'true');
    const [currentLanguage, setCurrentLanguage] = React.useState(() => localStorage.getItem('currentLanguage') || 'es');
    const setLanguage = (lang) => {
      setCurrentLanguage(lang);
      localStorage.setItem('currentLanguage', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    };
    const [post, setPost] = React.useState(null);
    const [actionMsg, setActionMsg] = React.useState(null);

    const handlePrint = () => {
      window.print();
    };

    const handleCopyCitation = () => {
      try {
        const title = (post && post.title && typeof post.title === 'object') ? (post.title[currentLanguage] || post.title.es) : (post && post.title);
        const cite = `${title} — Nexypn. ${post.date}.`;
        navigator.clipboard?.writeText(cite);
        setActionMsg({ type: 'info', text: { es:'Cita copiada', en:'Citation copied', fr:'Citation copiée', ru:'Цитата скопирована', ar:'تم نسخ الاقتباس' }[currentLanguage] });
        setTimeout(()=>setActionMsg(null), 3000);
      } catch(e){
        setActionMsg({ type:'error', text: 'Error' });
      }
    };

    React.useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }, [darkMode]);

    React.useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const postId = urlParams.get('id');
      
      const blogPosts = {
        1: {
          title: {
            es: "¿Se puede comprar Bitcoin (BTC) en efectivo? Sí, con Nexypn",
            en: "Can you buy Bitcoin (BTC) with cash? Yes, with Nexypn",
            fr: "Peut-on acheter du Bitcoin (BTC) en espèces ? Oui, avec Nexypn",
            ru: "Можно ли купить Bitcoin (BTC) за наличные? Да, с Nexypn",
            ar: "هل يمكنك شراء بيتكوين نقدًا؟ نعم، مع Nexypn"
          },
          content: {
            es: "Bitcoin ha revolucionado el mundo financiero desde 2009. Muchas personas se preguntan si es posible comprar Bitcoin usando efectivo — la respuesta es sí.\n\nEn este artículo profundizamos en los métodos (OTC, cajeros, agentes), comparamos tarifas y analizamos las mejores prácticas de seguridad. Además añadimos una sección práctica con pasos y checklist.\n\nMétodos comunes:\n• Cajeros de Bitcoin: rapidez y privacidad.\n• OTC/puntos de venta: límites mayores y soporte personalizado.\n• Agentes y tiendas asociadas: accesibilidad local.\n\nChecklist de seguridad:\n1) Verificar reputación del proveedor.\n2) Usar wallets seguras (preferible hardware para grandes cantidades).\n3) Revisar comisiones y tipo de cambio antes de confirmar.\n\nConclusión: comprar con efectivo es viable si se toman precauciones. Nexypn proporciona guías paso a paso, comparativas de tarifas y recursos para verificar proveedores.",
            en: "Bitcoin has transformed finance since 2009. Many ask whether Bitcoin can be bought with cash — the answer is yes.\n\nThis article goes deeper into methods (OTC, ATMs, agents), fee comparisons and security best practices. It includes a practical checklist for safe purchases.\n\nCommon methods:\n- Bitcoin ATMs: quick and private.\n- OTC desks: higher limits and personalized support.\n- Local agent/deposit services: accessible locally.\n\nSecurity checklist:\n1) Verify provider reputation.\n2) Use secure wallets (hardware for large holdings).\n3) Check fees and rates before confirming.\n\nSummary: buying with cash is feasible when precautions are taken. Nexypn offers step-by-step guides and fee comparisons.",
            fr: "Le Bitcoin a transformé la finance depuis 2009. Beaucoup se demandent s'il est possible d'acheter du Bitcoin en espèces — la réponse est oui.\n\nCet article approfondit les méthodes (OTC, guichets, agents), la comparaison des frais et les bonnes pratiques de sécurité, avec une checklist pratique.\n\nMéthodes courantes:\n• Guichets Bitcoin : rapidité et confidentialité.\n• OTC : limites supérieures et support personnalisé.\n• Agents locaux : accessibilité.\n\nChecklist sécurité:\n1) Vérifier la réputation du fournisseur.\n2) Utiliser des wallets sécurisés.\n3) Vérifier les frais et taux.\n\nConclusion : l'achat en espèces est viable avec des précautions. Nexypn fournit des guides et comparatifs.",
            ru: "Биткоин изменил финансовый мир с 2009 года. Многие задаются вопросом, можно ли купить Биткоин за наличные — ответ: да.\n\nВ этой статье даётся подробный разбор методов (OTC, банкоматы, агенты), сравнение комиссий и рекомендации по безопасности. Также есть практический чек‑лист.\n\nРаспространённые методы:\n- Банкоматы Bitcoin: быстро и приватно.\n- OTC: большие лимиты, персональная поддержка.\n- Агенты/партнёрские магазины: локальная доступность.\n\nЧек‑лист безопасности:\n1) Проверить репутацию поставщика.\n2) Использовать безопасные кошельки (hardware для крупных сумм).\n3) Сравнить комиссии и курс.\n\nВывод: покупка за наличные возможна при соблюдении мер предосторожности. Nexypn предлагает пошаговые руководства и сравнения комиссий.",
            ar: "لقد غيّر البيتكوين العالم المالي منذ 2009. يتساءل الكثيرون عما إذا كان يمكن شراء البيتكوين نقدًا — الجواب نعم.\n\nتتناول هذه المقالة الطرق (OTC، أجهزة الصراف الآلي، الوكلاء)، مقارنة الرسوم وأفضل ممارسات الأمان، وتقدّم قائمة تحقق عملية.\n\nالطرق الشائعة:\n• أجهزة الصراف للبيتكوين: سريعة وخاصة.\n• OTC: حدود أعلى ودعم شخصي.\n• خدمات الإيداع عبر الوكلاء: إمكانية محلية.\n\nقائمة التحقق للأمان:\n1) تحقق من سمعة البائع.\n2) استخدم محافظ آمنة (هاردوير للمبالغ الكبيرة).\n3) تحقق من الرسوم والسعر.\n\nالخلاصة: الشراء نقدًا ممكن مع اتخاذ الاحتياطات. تقدم Nexypn دلائل مقارنة ورسوم.",
          },
          toc: [
            { id: 'intro', label: { es: 'Introducción', en: 'Introduction', fr: 'Introduction', ru: 'Введение', ar: 'المقدمة' } },
            { id: 'methods', label: { es: 'Métodos', en: 'Methods', fr: 'Méthodes', ru: 'Методы', ar: 'الطرق' } },
            { id: 'risks', label: { es: 'Riesgos', en: 'Risks', fr: 'Risques', ru: 'Риски', ar: 'المخاطر' } },
            { id: 'checklist', label: { es: 'Checklist', en: 'Checklist', fr: 'Checklist', ru: 'Чеклист', ar: 'قائمة التحقق' } },
            { id: 'resources', label: { es: 'Recursos', en: 'Resources', fr: 'Ressources', ru: 'Ресурсы', ar: 'الموارد' } }
          ],
          tags: ['Bitcoin','Compra','Seguridad'],
          image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=400&fit=crop",
          category: "Nexypn",
          date: "10 Oct 2025",
          readTime: 30,
          author: { name: "Equipo Nexypn", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" }
        },
        2: {
          title: {
            es: "El futuro de las criptomonedas en 2025",
            en: "The Future of Cryptocurrencies in 2025",
            fr: "L'avenir des cryptomonnaies en 2025",
            ru: "Будущее криптовалют в 2025",
            ar: "مستقبل العملات المشفرة في 2025"
          },
          content: {
            es: "El mercado de criptomonedas continúa evolucionando a un ritmo acelerado. En 2025, esperamos ver desarrollos significativos en regulación, adopción institucional y nuevas tecnologías blockchain. Este análisis examina las tendencias clave que definirán el panorama cripto en los próximos años.\n\nLa regulación se ha convertido en un factor decisivo: una mayor claridad legal impulsa la adopción institucional, mientras que cambios abruptos pueden impactar la liquidez. Además, la integración de soluciones de escalabilidad y el auge de L2 (layer 2) posibilitarán transacciones más baratas y rápidas.\n\nPor otro lado, la tokenización de activos y el crecimiento de infraestructuras DeFi continuarán creando nuevos productos financieros. Los inversores deben prestar atención a la seguridad, la descentralización y la sostenibilidad de redes antes de comprometer capital.",
            en: "The crypto market keeps evolving rapidly. By 2025, significant developments in regulation, institutional adoption, and new blockchain technologies are expected. This analysis examines key trends that will define the crypto landscape in the coming years.\n\nRegulation has become a decisive factor: greater legal clarity boosts institutional adoption, while abrupt changes can impact liquidity. Additionally, the integration of scalability solutions and the rise of L2 (layer 2) will enable cheaper and faster transactions.\n\nOn the other hand, asset tokenization and the growth of DeFi infrastructures will continue to create new financial products. Investors should pay attention to security, decentralization, and network sustainability before committing capital.",
            fr: "Le marché des cryptomonnaies évolue rapidement. En 2025, nous prévoyons des développements significatifs en matière de réglementation, d'adoption institutionnelle et de nouvelles technologies blockchain. Cette analyse examine les tendances clés qui définiront le paysage des cryptos dans les années à venir.\n\nLa réglementation est devenue un facteur décisif : une plus grande clarté juridique stimule l'adoption institutionnelle, tandis que des changements brusques peuvent impacter la liquidité. De plus, l'intégration de solutions de scalabilité et l'essor des L2 (layer 2) permettront des transactions moins chères et plus rapides.\n\nD'autre part, la tokenisation d'actifs et la croissance des infrastructures DeFi continueront à créer de nouveaux produits financiers. Les investisseurs doivent prêter attention à la sécurité, à la décentralisation et à la durabilité des réseaux avant d'engager des capitaux.",
            ru: "Рынок криптовалют продолжает быстро развиваться. К 2025 году ожидаются значительные изменения в регулировании, институциональном принятии и новых технологиях блокчейн. Этот анализ рассматривает ключевые тенденции, которые определят крипто-ландшафт в ближайшие годы.\n\nРегулирование стало решающим фактором: большая юридическая ясность способствует институциональному принятию, в то время как резкие изменения могут повлиять на ликвидность. Кроме того, интеграция решений по масштабируемости и рост L2 (второго уровня) позволят проводить более дешевые и быстрые транзакции.\n\nС другой стороны, токенизация активов и рост инфраструктуры DeFi продолжат создавать новые финансовые продукты. Инвесторы должны обращать внимание на безопасность, децентрализацию и устойчивость сети, прежде чем вкладывать капитал.",
            ar: "يستمر سوق العملات المشفرة في التطور بسرعة. بحلول عام 2025، من المتوقع حدوث تطورات كبيرة في التنظيم، اعتماد المؤسسات، وتقنيات البلوك تشين الجديدة. تحلل هذه الدراسة الاتجاهات الرئيسية التي ستحدد مشهد العملات المشفرة في السنوات القادمة.\n\nأصبح التنظيم عاملًا حاسمًا: الوضوح القانوني الأكبر يعزز من اعتماد المؤسسات، في حين أن التغييرات المفاجئة يمكن أن تؤثر على السيولة. بالإضافة إلى ذلك، سيمكن دمج حلول القابلية للتوسع وارتفاع طبقة 2 (layer 2) من إجراء معاملات أرخص وأسرع.\n\nمن ناحية أخرى، ستستمر رموز الأصول ونمو بنى DeFi التحتية في خلق منتجات مالية جديدة. يجب على المستثمرين الانتباه إلى الأمان، اللامركزية، واستدامة الشبكات قبل الالتزام برأس المال."
          },
          image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
          category: "Criptomonedas",
          date: "8 Oct 2025",
          readTime: 30,
          author: { name: "María González", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" }
        },
        3: {
          title: {
            es: "Blockchain: La tecnología que está revolucionando el mundo",
            en: "Blockchain: The technology revolutionizing the world",
            fr: "Blockchain : la technologie qui révolutionne le monde",
            ru: "Блокчейн: технология, меняющая мир",
            ar: "البلوك تشين: التكنولوجيا التي تحدث ثورة في العالم"
          },
          content: {
            es: "La tecnología blockchain va mucho más allá de las criptomonedas. Desde la gestión de cadenas de suministro hasta la verificación de identidad digital, blockchain está transformando industrias enteras. Descubre cómo esta tecnología descentralizada está creando nuevas oportunidades de negocio.\n\nEn aplicaciones empresariales, blockchain permite trazabilidad completa, reducción de fraudes y automatización mediante smart contracts. Sectores como logística, salud y finanzas ya exploran pruebas de concepto y despliegues piloto. Sin embargo, desafíos como la interoperabilidad entre cadenas y la escalabilidad todavía requieren soluciones técnicas y acuerdos de estándares.\n\nPara evaluar proyectos blockchain, considera el caso de uso real, el nivel de descentralización, la economía del token y las auditorías de seguridad. Estos criterios ayudan a distinguir proyectos con impacto a largo plazo de aquellos con fundamentos débiles.",
            en: "Blockchain technology goes far beyond cryptocurrencies. From supply chain management to digital identity verification, blockchain is transforming entire industries. Discover how this decentralized technology is creating new business opportunities.\n\nIn business applications, blockchain enables complete traceability, fraud reduction, and automation through smart contracts. Sectors like logistics, healthcare, and finance are already exploring proof of concept and pilot deployments. However, challenges like interoperability between chains and scalability still require technical solutions and standard agreements.\n\nTo evaluate blockchain projects, consider the real use case, the level of decentralization, the token economics, and security audits. These criteria help distinguish projects with long-term impact from those with weak fundamentals.",
            fr: "La technologie blockchain va bien au-delà des cryptomonnaies. De la gestion de la chaîne d'approvisionnement à la vérification de l'identité numérique, la blockchain transforme des industries entières. Découvrez comment cette technologie décentralisée crée de nouvelles opportunités d'affaires.\n\nDans les applications professionnelles, la blockchain permet une traçabilité complète, une réduction des fraudes et une automatisation grâce aux contrats intelligents. Des secteurs comme la logistique, la santé et les finances explorent déjà des preuves de concept et des déploiements pilotes. Cependant, des défis comme l'interopérabilité между цепочками и масштабируемость nécessitent encore des solutions технические и стандартные соглашения.\n\nPour évaluer les projets blockchain, considérez le cas d'utilisation réel, le niveau de décentralisation, l'économie du token et les audits de sécurité. Ces critères aident à distinguer les projets ayant un impact à long terme de ceux ayant des fondamentaux faibles.",
            ru: "Технология блокчейн выходит далеко за рамки криптовалют. От управления цепочками поставок до проверки цифровой идентичности, блокчейн трансформирует целые отрасли. Узнайте, как эта децентрализованная технология создает новые бизнес-возможности.\n\nВ бизнес-приложениях блокчейн обеспечивает полную прослеживаемость, снижение мошенничества и автоматизацию с помощью смарт-контрактов. Такие сектора, как логистика, здравоохранение и финансы, уже исследуют доказательства концепции и пилотные развертывания. Однако такие проблемы, как совместимость между цепочками и масштабируемость, все еще требуют технических решений и стандартных соглашений.\n\nЧтобы оценить проекты блокчейн, учитывайте реальный случай использования, уровень децентрализации, экономику токенов и аудиты безопасности. Эти критерии помогают отличить проекты с долгосрочным воздействием от проектов с слабыми фундаментами.",
            ar: "تتجاوز تقنية البلوك تشين العملات المشفرة. من إدارة سلسلة التوريد إلى التحقق من الهوية الرقمية، تحدث البلوك تشين ثورة في صناعات بأكملها. اكتشف كيف تخلق هذه التقنية اللامركزية فرص عمل جديدة.\n\nفي التطبيقات التجارية، تتيح البلوك تشين تتبعًا كاملاً، وتقليل الاحتيال، وأتمتة من خلال العقود الذكية. تستكشف قطاعات مثل اللوجستيات والرعاية الصحية والتمويل بالفعل إثباتات المفهوم والنشر التجريبي. ومع ذلك، لا تزال التحديات مثل قابلية التشغيل البيني بين السلاسل وقابلية التوسع تتطلب حلولًا تقنية واتفاقيات معيارية.\n\nلتقييم مشاريع البلوك تشين، ضع في اعتبارك حالة الاستخدام الحقيقية، ومستوى اللامركزية، واقتصاديات الرمز، وعمليات تدقيق الأمان. تساعد هذه المعايير في تمييز المشاريع ذات التأثير الطويل الأجل عن تلك ذات الأسس الضعيفة."
          },
          image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&h=400&fit=crop",
          category: "Blockchain",
          date: "5 Oct 2025",
          readTime: 30,
          author: { name: "Carlos Ruiz", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" }
        },
        4: {
          title: "Inteligencia Artificial: Transformando el futuro digital",
          content: "La inteligencia artificial (IA) está redefiniendo productos y procesos en todos los sectores. Desde sistemas de recomendación hasta modelos generativos, la IA aumenta eficiencia y posibilita nuevas experiencias de usuario.\n\nCasos prácticos incluyen diagnóstico médico asistido por IA, optimización de cadenas logísticas y automatización de procesos en servicios financieros. También hay retos: sesgos en datos, coste computacional y necesidad de regulación responsable.\n\nRecomendaciones: comprender los datos y métricas de rendimiento, auditar modelos periódicamente y priorizar enfoques explicables cuando estén en juego decisiones críticas.",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
          category: "Tecnología",
          date: "7 Oct 2025",
          readTime: 30,
          author: { name: "Dr. Patricia Vega", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" }
        },
        5: {
          title: "DeFi: El futuro de las finanzas descentralizadas",
          content: "DeFi propone servicios financieros sin intermediarios centralizados usando smart contracts. Esto permite préstamos, exchanges y productos derivados en protocolos abiertos.\n\nSi bien DeFi abre oportunidades (rendimientos, accesibilidad), también presenta riesgos: bugs en contratos, ejecuciones front-running y problemas de liquidez. Evaluar TVL, auditorías y modelos de gobernanza es clave antes de participar.\n\nConsejo práctico: diversificar exposiciones, usar auditorías reconocidas y limitar posiciones en protocolos nuevos.",
          image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop",
          category: "Blockchain",
          date: "4 Oct 2025",
          readTime: 30,
          author: { name: "Roberto Silva", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" }
        },
        6: {
          title: "Guía completa para principiantes: Cómo empezar en crypto",
          content: "Empezar en crypto requiere comprender wallets, custodio versus no custodio, y buenas prácticas de seguridad. Este artículo ofrece pasos claros para principiantes.\n\n1) Configura una wallet segura (hardware o software) y guarda las seed phrases offline. 2) Aprende sobre exchanges y cómo verificar su reputación. 3) Practica con pequeñas cantidades antes de aumentar inversiones.\n\nAdemás, estudia la gestión de riesgos y evita esquemas de alto rendimiento sin transparencia. La educación continua reduce errores costosos.",
          image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
          category: "Criptomonedas",
          date: "3 Oct 2025",
          readTime: 30,
          author: { name: "Ana López", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" }
        },
        7: {
          title: "Internet of Things: Conectando el mundo físico y digital",
          content: "IoT integra sensores y conectividad para crear sistemas inteligentes en hogares y ciudades. Aplicaciones incluyen monitoreo ambiental, gestión energética y mantenimiento predictivo.\n\nConsideraciones: seguridad de dispositivos, gestión de datos y escalabilidad de la infraestructura. Implementaciones exitosas combinan estándares abiertos y políticas de privacidad robustas.\n\nMejor práctica: segmentar redes IoT, cifrar comunicaciones y aplicar تحديثات تلقائية لتقليل سطح الهجوم.",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
          category: "Tecnología",
          date: "2 Oct 2025",
          readTime: 30,
          author: { name: "Luis Fernández", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" }
        },
        8: {
          title: "NFTs y el Arte Digital: Una nueva era creativa",
          content: "Los NFTs (tokens no fungibles) permiten certificar propiedad y procedencia de activos digitales. Han transformado el mercado del arte al ofrecer royalties integrados y mayor visibilidad para creadores.\n\nSin embargo, hay puntos a evaluar: derechos de autor, impacto ambiental de algunas blockchains y riesgos de mercado. Para artistas, es crucial seleccionar mercados con buenas prácticas y entender las tarifas de minting.\n\nRecomendación: documentar claramente derechos transferidos con cada NFT y educar a la comunidad sobre autenticidad.",
          image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=800&h=400&fit=crop",
          category: "Blockchain",
          date: "30 Sep 2025",
          readTime: 30,
          author: { name: "Isabella Torres", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" }
        },
        9: {
          title: "Nexypn Academy: Cursos gratuitos de blockchain",
          content: "Nexypn Academy ofrece cursos estructurados para aprender blockchain desde cero: fundamentos técnicos, desarrollo de smart contracts y casos de uso empresariales.\n\nLos cursos incluyen ejercicios prácticos, material descargable y certificaciones al completar módulos. Recomendamos comenzar por la teoría de consenso y luego pasar a implementaciones en testnets.\n\nInscribirte a la academia te da acceso a una comunidad y proyectos guiados para aplicar lo aprendido en casos reales.",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
          category: "Bitnovo",
          date: "28 Sep 2025",
          readTime: 30,
          author: { name: "Equipo Nexypn", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" }
        }
      };
      
      setPost(blogPosts[postId] || blogPosts[1]);
    }, []);

    const toggleDarkMode = () => {
      setDarkMode(prev => {
        const next = !prev;
        localStorage.setItem('darkMode', next);
        return next;
      });
    };

    if (!post) return <div>Cargando...</div>;

    return (
      <div className="min-h-screen" style={{backgroundColor: 'var(--background-color)'}}>
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          currentLanguage={currentLanguage}
          setCurrentLanguage={setLanguage}
        />
        
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" 
                  style={{backgroundColor: 'var(--primary-color)', color: 'white'}}>
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{color: 'var(--text-primary)'}}>
              { (post.title && typeof post.title === 'object') ? (post.title[currentLanguage] || post.title.es) : post.title }
            </h1>
            <div className="flex items-center" style={{color: 'var(--text-secondary)'}}>
              <span>{post.date}</span>
            </div>
          </div>
          
          {/* Table of Contents (if available) */}
          {post.toc && (
            <nav className="mb-8 p-4 rounded-lg border" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface-color)'}}>
              <strong style={{color:'var(--text-primary)'}}>{{
                es: 'Tabla de contenidos', en: 'Table of contents', fr: 'Table des matières', ru: 'Оглавление', ar: 'فهرس المحتوى'
              }[currentLanguage] || 'Table of contents'}</strong>
              <ul className="mt-3 list-inside list-decimal" style={{color: 'var(--text-secondary)'}}>
                {post.toc.map((item, i) => (
                  <li key={i}>
                    <a href={`#${item.id}`} className="hover:text-[var(--primary-color)]" style={{color: 'var(--text-secondary)'}}>
                      { (item.label && item.label[currentLanguage]) ? item.label[currentLanguage] : item.label?.es || item.label }
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          
          <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />
          
          {/* Action buttons (Print / PDF / Cite) */}
          <div className="flex items-center justify-end gap-3 mb-4">
            <button onClick={handlePrint} className="px-3 py-1 rounded border" style={{borderColor:'var(--border-color)'}}>{ { es:'Imprimir', en:'Print', fr:'Imprimer', ru:'Печать', ar:'طباعة' }[currentLanguage] }</button>
            <button onClick={handlePrint} className="px-3 py-1 rounded border" style={{borderColor:'var(--border-color)'}}>{ { es:'Guardar como PDF', en:'Save as PDF', fr:'Enregistrer en PDF', ru:'Сохранить в PDF', ar:'حفظ كـ PDF' }[currentLanguage] }</button>
            <button onClick={handleCopyCitation} className="px-3 py-1 rounded border" style={{borderColor:'var(--border-color)'}}>{ { es:'Copiar cita', en:'Copy citation', fr:'Copier la citation', ru:'Копировать цитату', ar:'نسخ الاقتباس' }[currentLanguage] }</button>
          </div>

          <div className="prose prose-lg max-w-none" style={{color: 'var(--text-primary)'}}>
            <div className="text-xl leading-relaxed mb-6">
              { (post.content && typeof post.content === 'object') ? (post.content[currentLanguage] || post.content.es) : post.content }
            </div>
          </div>
          
          {/* Tags and Share */}
          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <strong style={{color:'var(--text-primary)'}}>{
                { es:'Tags', en:'Tags', fr:'Tags', ru:'Теги', ar:'الوسوم' }[currentLanguage]
              }</strong>
              <div className="mt-2 flex flex-wrap gap-2">
                {post.tags && post.tags.map((tag,i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full border" style={{backgroundColor:'transparent', borderColor:'var(--border-color)', color:'var(--text-primary)'}}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span style={{color:'var(--text-secondary)'}}>{
                { es:'Compartir', en:'Share', fr:'Partager', ru:'Поделиться', ar:'مشاركة' }[currentLanguage]
              }:</span>
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(location.href)}`,'_blank')} className="p-2 rounded hover:bg-[var(--surface-color)]" title="Twitter">
                <div className="icon-twitter text-lg" style={{color:'var(--text-primary)'}}></div>
              </button>
              <button onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(location.href)}`,'_blank')} className="p-2 rounded hover:bg-[var(--surface-color)]" title="LinkedIn">
                <div className="icon-linkedin text-lg" style={{color:'var(--text-primary)'}}></div>
              </button>
            </div>
          </div>
          
          {/* Extra section example: Practical tips (only for post 1) */}
          {post.id === 1 && (
            <>
              <h3 style={{color: 'var(--text-primary)'}}>Checklist de compra segura</h3>
              <ul className="list-disc pl-6 mb-6" style={{color: 'var(--text-secondary)'}}>
                <li>Verificar reputación del proveedor</li>
                <li>Confirmar tasas y comisiones antes de operar</li>
                <li>Usar wallet con control de claves privadas</li>
                <li>Evitar transacciones grandes en entornos inseguros</li>
              </ul>
              <h3 style={{color: 'var(--text-primary)'}}>Recursos</h3>
              <p style={{color: 'var(--text-secondary)'}}>En Nexypn encontrarás guías, comparativas de cajeros y listados verificados de OTCs.</p>
            </>
          )}

          {/* References / Downloads */}
          <div className="mt-8">
            <h4 style={{color:'var(--text-primary)'}}>{ { es:'Referencias y descargas', en:'References & downloads', fr:'Références & téléchargements', ru:'Ссылки и загрузки', ar:'المراجع والتنزيلات' }[currentLanguage] }</h4>
            <ul className="list-disc pl-6" style={{color:'var(--text-secondary)'}}>
              <li><a href="#" className="hover:text-[var(--primary-color)]">{ { es:'Informe técnico (PDF)', en:'Technical report (PDF)', ru:'Технический отчёт (PDF)' }[currentLanguage] }</a></li>
              <li><a href="#" className="hover:text-[var(--primary-color)]">{ { es:'Guía práctica', en:'Practical guide', ru:'Практическое руководство' }[currentLanguage] }</a></li>
            </ul>
          </div>
          
          <div className="mt-12 pt-8 border-t" style={{borderColor: 'var(--border-color)'}}>
            <button 
              onClick={() => window.location.href = 'index.html'} 
              className="inline-flex items-center space-x-2 text-lg font-medium hover:text-[var(--primary-color)] transition-colors"
              style={{color: 'var(--text-primary)'}}
            >
              <div className="icon-arrow-left"></div>
              <span>Volver al Blog</span>
            </button>
          </div>
        </article>
        
        <Footer currentLanguage={currentLanguage} />
      </div>
    );
  } catch (error) {
    console.error('BlogPost component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <BlogPostApp />
  </ErrorBoundary>
);
