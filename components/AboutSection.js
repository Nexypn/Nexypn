function AboutSection({ currentLanguage }) {
  try {
    const translations = {
      es: {
        title: 'Nexypn',
        subtitle: 'Tu centro de conocimiento tecnológico',
        description: 'Somos una plataforma dedicada a proporcionar información actualizada y análisis profundos sobre tecnología, blockchain y criptomonedas. Nuestro equipo de expertos trabaja para ofrecerte contenido de calidad que te ayude a mantenerte al día en el mundo digital.',
        mission: 'Nuestra Misión',
        missionText: 'Democratizar el acceso al conocimiento tecnológico y cripto, facilitando la comprensión de temas complejos a través de artículos claros y bien documentados.',
        vision: 'Nuestra Visión',
        visionText: 'Ser la fuente de referencia en español para información sobre tecnología emergente y criptomonedas, construyendo una comunidad educada y bien informada.'
      },
      en: {
        title: 'Nexypn',
        subtitle: 'Your technology knowledge center',
        description: 'We are a platform dedicated to providing updated information and deep analysis on technology, blockchain and cryptocurrencies. Our team of experts works to offer you quality content that helps you stay up to date in the digital world.',
        mission: 'Our Mission',
        missionText: 'Democratize access to technological and crypto knowledge, facilitating understanding of complex topics through clear and well-documented articles.',
        vision: 'Our Vision',
        visionText: 'To be the reference source for information on emerging technology and cryptocurrencies, building an educated and well-informed community.'
      },
      fr: {
        title: 'Nexypn',
        subtitle: 'Votre centre de connaissances technologiques',
        description: 'Nous sommes une plateforme dédiée à fournir des informations mises à jour et des analyses approfondies sur la technologie, la blockchain et les cryptomonnaies. Notre équipe d\'experts travaille pour vous offrir un contenu de qualité qui vous aide à rester à jour dans le monde numérique.',
        mission: 'Notre Mission',
        missionText: 'Démocratiser l\'accès aux connaissances technologiques et crypto, facilitant la compréhension de sujets complexes à travers des articles clairs et bien documentés.',
        vision: 'Notre Vision',
        visionText: 'Être la source de référence pour l\'information sur les technologies émergentes et les cryptomonnaies, construisant une communauté éduquée et bien informée.'
      },
      ru: {
        title: 'Nexypn',
        subtitle: 'Ваш центр знаний о технологиях',
        description: 'Мы — платформа, предоставляющая актуальную информацию и глубокие аналитические материалы о технологиях, блокчейне и криптовалютах.',
        mission: 'Наша миссия',
        missionText: 'Демократизировать доступ к технологическим и крипто знаниям через понятные и качественные материалы.',
        vision: 'Наша визия',
        visionText: 'Стать надежным источником информации о новых технологиях и криптовалютах, создавая образованное сообщество.'
      },
      ar: {
        title: 'نيكسيبن',
        subtitle: 'مركز المعرفة التكنولوجية الخاص بك',
        description: 'نحن منصة مخصصة لتوفير معلومات محدثة وتحليلات عميقة حول التكنولوجيا والبلوك تشين والعملات المشفرة. يعمل فريق خبرائنا على تقديم محتوى عالي الجودة يساعدك على البقاء محدثًا في العالم الرقمي.',
        mission: 'مهمتنا',
        missionText: 'إضفاء الطابع الديمقراطي على الوصول إلى المعرفة التكنولوجية والمشفرة، وتسهيل فهم المواضيع المعقدة من خلال مقالات واضحة وموثقة جيداً.',
        vision: 'رؤيتنا',
        visionText: 'أن نكون المصدر المرجعي للمعلومات حول التكنولوجيا الناشئة والعملات المشفرة، وبناء مجتمع متعلم ومطلع جيداً.'
      }
    };

    const t = translations[currentLanguage];

    return (
      <div className="py-20" style={{backgroundColor: 'var(--surface-color)'}} data-name="about-section" data-file="components/AboutSection.js">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${currentLanguage === 'ar' ? 'text-right' : 'text-center'}`} style={{color: 'var(--text-primary)'}}>
              {t.title}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${currentLanguage === 'ar' ? 'text-right' : 'text-center'}`} style={{color: 'var(--text-secondary)'}}>
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className={currentLanguage === 'ar' ? 'text-right' : 'text-left'}>
              <p className="text-lg mb-8 leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                {t.description}
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop" 
                alt="Technology team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className={`text-2xl font-bold mb-4 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`} style={{color: 'var(--primary-color)'}}>
                {t.mission}
              </h3>
              <p className={`text-lg ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`} style={{color: 'var(--text-secondary)'}}>
                {t.missionText}
              </p>
            </div>
            <div className="card p-8">
              <h3 className={`text-2xl font-bold mb-4 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`} style={{color: 'var(--primary-color)'}}>
                {t.vision}
              </h3>
              <p className={`text-lg ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`} style={{color: 'var(--text-secondary)'}}>
                {t.visionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AboutSection component error:', error);
    return null;
  }
}