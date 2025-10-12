function HeroSection({ currentLanguage }) {
  try {
    const translations = {
      es: {
        title: 'Bienvenido al centro de conocimiento más completo sobre tecnología y criptomonedas',
        subtitle: 'Explora artículos profesionales, análisis detallados y navega fácilmente por nuestro contenido especializado'
      },
      en: {
        title: 'Welcome to the most comprehensive knowledge center about technology and cryptocurrencies',
        subtitle: 'Explore professional articles, detailed analysis and easily navigate through our specialized content'
      },
      fr: {
        title: 'Bienvenue au centre de connaissances le plus complet sur la technologie et les cryptomonnaies',
        subtitle: 'Explorez des articles professionnels, des analyses détaillées et naviguez facilement dans notre contenu spécialisé'
      },
      ru: {
        title: 'Добро пожаловать в центр знаний о технологиях и криптовалютах',
        subtitle: 'Изучайте профессиональные статьи, подробные обзоры и легко ориентируйтесь в нашем специализированном контенте'
      },
      ar: {
        title: 'مرحباً بك في أشمل مركز معرفة حول التكنولوجيا والعملات المشفرة',
        subtitle: 'استكشف المقالات المهنية والتحليلات المفصلة وتصفح بسهولة محتوانا المتخصص'
      }
    };

    const t = translations[currentLanguage];

    return (
      <section 
        className="relative py-20 px-4 text-center"
        style={{
          backgroundImage: 'url(https://www.bitnovo.com/blog/wp-content/uploads/2022/05/Bg.d604993a.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'var(--surface-color)'
        }}
        data-name="hero-section" 
        data-file="components/HeroSection.js"
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold text-shadow mb-6 max-w-4xl mx-auto leading-tight ${currentLanguage === 'ar' ? 'text-right' : 'text-center'}`} style={{color: 'var(--text-primary)'}}>
            {t.title}
          </h1>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto opacity-90 ${currentLanguage === 'ar' ? 'text-right' : 'text-center'}`} style={{color: 'var(--text-secondary)'}}>
            {t.subtitle}
          </p>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HeroSection component error:', error);
    return null;
  }
}