function BlogGrid({ selectedCategory, currentLanguage }) {
  try {
    const blogPosts = [
      {
        id: 1,
        title: {
          es: "¿Se puede comprar Bitcoin (BTC) en efectivo? Sí, con Nexypn",
          en: "Can you buy Bitcoin (BTC) with cash? Yes, with Nexypn",
          fr: "Peut-on acheter du Bitcoin (BTC) en espèces ? Oui, avec Nexypn",
          ru: "Можно ли купить Bitcoin (BTC) за наличные? Да, с Nexypn",
          ar: "هل يمكنك شراء بيتكوين نقدًا؟ نعم، مع Nexypn"
        },
        excerpt: {
          es: "Guía práctica: métodos para comprar Bitcoin en efectivo, mejores prácticas de seguridad y cómo comparar tarifas entre proveedores.",
          en: "Practical guide: methods to buy Bitcoin with cash, safety best practices and how to compare fees between providers.",
          fr: "Guide pratique : méthodes pour acheter du Bitcoin en espèces, bonnes pratiques de sécurité et comparaison des frais.",
          ru: "Практическое руководство: способы покупки биткоина за наличные, безопасность и сравнение комиссий.",
          ar: "دليل عملي: طرق شراء البيتكوين نقدًا، أفضل ممارسات الأمان وكيفية مقارنة الرسوم بين المزودين."
        },
        image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&h=300&fit=crop",
        category: "Bitnovo",
        date: "10 Oct",
        readTime: 30,
        author: {
          name: "Equipo Nexypn",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
        }
      },
      {
        id: 2,
        title: {
          es: "El futuro de las criptomonedas en 2025",
          en: "The Future of Cryptocurrencies in 2025",
          fr: "L'avenir des cryptomonnaies en 2025",
          ru: "Будущее криптовалют в 2025 году",
          ar: "مستقبل العملات المشفرة في 2025"
        },
        excerpt: {
          es: "Análisis profundo sobre regulación, adopción institucional, DeFi y las tecnologías que marcarán 2025.",
          en: "In-depth analysis on regulation, institutional adoption, DeFi and the technologies shaping 2025.",
          fr: "Analyse approfondie sur la réglementation, l'adoption institutionnelle, DeFi et les technologies de 2025.",
          ru: "Глубокий анализ регулирования, институционального принятия, DeFi и технологий, формирующих 2025 год.",
          ar: "تحليل متعمق حول التنظيم، تبني المؤسسات، DeFi والتقنيات التي ستشكل 2025."
        },
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop",
        category: "Criptomonedas",
        date: "8 Oct",
        readTime: 30,
        author: {
          name: "María González",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
        }
      },
      {
        id: 3,
        title: {
          es: "Blockchain: La tecnología que está revolucionando el mundo",
          en: "Blockchain: The Technology Revolutionizing the World",
          fr: "Blockchain : la technologie qui révolutionne le monde",
          ru: "Блокчейн: технология, революционизирующая мир",
          ar: "البلوك تشين: التكنولوجيا التي تحدث ثورة في العالم"
        },
        excerpt: {
          es: "Fundamentos y casos de uso reales de blockchain: trazabilidad, smart contracts y retos técnicos actuales.",
          en: "Foundations and real use cases of blockchain: traceability, smart contracts and current technical challenges.",
          fr: "Fondements et cas d'utilisation réels de la blockchain : traçabilité, smart contracts et défis techniques.",
          ru: "Основы и реальные примеры использования блокчейна: отслеживаемость, смарт-контракты и текущие технические проблемы.",
          ar: "الأساسيات وحالات الاستخدام الحقيقية للبلوكتشين: التتبع، العقود الذكية والتحديات التقنية."
        },
        image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&h=300&fit=crop",
        category: "Blockchain",
        date: "5 Oct",
        readTime: 30,
        author: {
          name: "Carlos Ruiz",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
        }
      },
      {
        id: 4,
        title: {
          es: "Inteligencia Artificial: Transformando el futuro digital",
          en: "Artificial Intelligence: Transforming the Digital Future",
          fr: "Intelligence Artificielle : Transformer l'avenir numérique",
          ru: "Искусственный интеллект: трансформация цифрового будущего",
          ar: "الذكاء الاصطناعي: تحويل المستقبل الرقمي"
        },
        excerpt: {
          es: "Impacto de la IA en negocios, salud y productos de consumo: casos prácticos y consideraciones éticas.",
          en: "Impact of AI on business, health, and consumer products: practical cases and ethical considerations.",
          fr: "Impact de l'IA sur les entreprises, la santé et les produits de consommation : cas pratiques et considérations éthiques.",
          ru: "Влияние ИИ на бизнес, здравоохранение и потребительские товары: практические примеры и этические соображения.",
          ar: "أثر الذكاء الاصطناعي على الأعمال التجارية والصحة والمنتجات الاستهلاكية: حالات عملية واعتبارات أخلاقية."
        },
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
        category: "Tecnología",
        date: "7 Oct",
        readTime: 30,
        author: {
          name: "Dr. Patricia Vega",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
        }
      },
      {
        id: 5,
        title: {
          es: "DeFi: El futuro de las finanzas descentralizadas",
          en: "DeFi: The Future of Decentralized Finance",
          fr: "DeFi : l'avenir de la finance décentralisée",
          ru: "DeFi: Будущее децентрализованных финансов",
          ar: "DeFi: مستقبل التمويل اللامركزي"
        },
        excerpt: {
          es: "Conceptos clave de DeFi, riesgos asociados y cómo evaluar protocolos antes de participar.",
          en: "Key DeFi concepts, associated risks, and how to evaluate protocols before participating.",
          fr: "Concepts clés de DeFi, risques associés et comment évaluer les protocoles avant de participer.",
          ru: "Ключевые концепции DeFi, связанные риски и как оценивать протоколы перед участием.",
          ar: "المفاهيم الأساسية لـ DeFi، المخاطر المرتبطة، وكيفية تقييم البروتوكولات قبل المشاركة."
        },
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=300&fit=crop",
        category: "Blockchain",
        date: "4 Oct",
        readTime: 30,
        author: {
          name: "Roberto Silva",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
        }
      },
      {
        id: 6,
        title: {
          es: "Guía completa para principiantes: Cómo empezar en crypto",
          en: "Complete Guide for Beginners: How to Start in Crypto",
          fr: "Guide complet pour les débutants : Comment commencer dans la crypto",
          ru: "Полный гид для начинающих: Как начать работать с криптовалютой",
          ar: "الدليل الشامل للمبتدئين: كيفية البدء في العملات المشفرة"
        },
        excerpt: {
          es: "Pasos prácticos para crear wallets, comprar tus primeras monedas y proteger tus activos digitales.",
          en: "Practical steps to create wallets, buy your first coins, and protect your digital assets.",
          fr: "Étapes pratiques pour créer des portefeuilles, acheter vos premières pièces et protéger vos actifs numériques.",
          ru: "Практические шаги по созданию кошельков, покупке первых монет и защите цифровых активов.",
          ar: "خطوات عملية لإنشاء المحافظ، شراء عملاتك الأولى، وحماية أصولك الرقمية."
        },
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=300&fit=crop",
        category: "Criptomonedas",
        date: "3 Oct",
        readTime: 30,
        author: {
          name: "Ana López",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
        }
      },
      {
        id: 7,
        title: {
          es: "Internet of Things: Conectando el mundo físico y digital",
          en: "Internet of Things: Connecting the Physical and Digital World",
          fr: "Internet des Objets : Connecter le monde physique et numérique",
          ru: "Интернет вещей: соединение физического и цифрового миров",
          ar: "إنترنت الأشياء: ربط العالمين المادي والرقمي"
        },
        excerpt: {
          es: "Casos de uso reales de IoT, desafíos de seguridad y mejores prácticas para implementaciones a escala.",
          en: "Real IoT use cases, security challenges, and best practices for large-scale deployments.",
          fr: "Cas d'utilisation réels de l'IoT, défis de sécurité et meilleures pratiques pour les déploiements à grande échelle.",
          ru: "Реальные примеры использования IoT, проблемы безопасности и лучшие практики для развертывания в большом масштабе.",
          ar: "حالات استخدام إنترنت الأشياء الحقيقية، التحديات الأمنية، وأفضل الممارسات للتنفيذ على نطاق واسع."
        },
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop",
        category: "Tecnología",
        date: "2 Oct",
        readTime: 30,
        author: {
          name: "Luis Fernández",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
        }
      },
      {
        id: 8,
        title: {
          es: "NFTs y el Arte Digital: Una nueva era creativa",
          en: "NFTs and Digital Art: A New Creative Era",
          fr: "NFT et Art Numérique : Une Nouvelle Ère Créative",
          ru: "NFT и цифровое искусство: новая креативная эра",
          ar: "الرموز غير القابلة للاستبدال والفن الرقمي: عصر إبداعي جديد"
        },
        excerpt: {
          es: "Qué son los NFTs, cómo funcionan los mercados y consideraciones para artistas y coleccionistas.",
          en: "What NFTs are, how marketplaces work, and considerations for artists and collectors.",
          fr: "Ce que sont les NFTs, comment fonctionnent les marchés et considérations pour les artistes et les collectionneurs.",
          ru: "Что такое NFT, как работают рынки и что нужно учитывать художникам и коллекционерам.",
          ar: "ما هي الرموز غير القابلة للاستبدال، كيف تعمل الأسواق، والاعتبارات الفنية وجامعي القطع."
        },
        image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=600&h=300&fit=crop",
        category: "Blockchain",
        date: "30 Sep",
        readTime: 30,
        author: {
          name: "Isabella Torres",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
        }
      },
      {
        id: 9,
        title: {
          es: "Nexypn Academy: Cursos gratuitos de blockchain",
          en: "Nexypn Academy: Free Blockchain Courses",
          fr: "Nexypn Academy : Cours de blockchain gratuits",
          ru: "Академия Nexypn: бесплатные курсы по блокчейну",
          ar: "أكاديمية Nexypn: دورات مجانية في البلوك تشين"
        },
        excerpt: {
          es: "Cursos gratuitos y materiales para aprender blockchain: temario, duración y certificaciones disponibles.",
          en: "Free courses and materials to learn about blockchain: syllabus, duration, and available certifications.",
          fr: "Cours gratuits et matériels pour apprendre la blockchain : programme, durée et certifications disponibles.",
          ru: "Бесплатные курсы и материалы для изучения блокчейна: учебный план, продолжительность и доступные сертификаты.",
          ar: "دورات مجانية ومواد لتعلم البلوك تشين: المنهج الدراسي، المدة، والشهادات المتاحة."
        },
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
        category: "Bitnovo",
        date: "28 Sep",
        readTime: 30,
        author: {
          name: "Equipo Nexypn",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
        }
      }
    ];

    const filteredPosts = selectedCategory === 'All' 
      ? blogPosts 
      : blogPosts.filter(post => post.category === selectedCategory);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-name="blog-grid" data-file="components/BlogGrid.js">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} currentLanguage={currentLanguage} />
        ))}
      </div>
    );
  } catch (error) {
    console.error('BlogGrid component error:', error);
    return null;
  }
}
