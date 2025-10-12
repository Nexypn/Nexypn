function BlockchainApp() {
  try {
    const [darkMode, setDarkMode] = React.useState(() => localStorage.getItem('darkMode') === 'true');
    const [currentLanguage, setCurrentLanguage] = React.useState(() => localStorage.getItem('currentLanguage') || 'es');
    const setLanguage = (lang) => {
      setCurrentLanguage(lang);
      localStorage.setItem('currentLanguage', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    };

    React.useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }, [darkMode]);

    const toggleDarkMode = () => {
      setDarkMode(prev => {
        const next = !prev;
        localStorage.setItem('darkMode', next);
        return next;
      });
    };

    const blockchainApps = [
      {
        title: 'Smart Contracts',
        description: 'Contratos inteligentes que se ejecutan automáticamente',
        icon: 'file-text',
        color: 'var(--primary-color)'
      },
      {
        title: 'DeFi',
        description: 'Finanzas descentralizadas sin intermediarios',
        icon: 'coins',
        color: 'var(--accent-color)'
      },
      {
        title: 'NFTs',
        description: 'Tokens no fungibles para arte y coleccionables',
        icon: 'image',
        color: '#8b5cf6'
      },
      {
        title: 'DAOs',
        description: 'Organizaciones autónomas descentralizadas',
        icon: 'users',
        color: '#ef4444'
      }
    ];

    const texts = {
      es: { title: 'Blockchain', subtitle: 'Explora la tecnología que está revolucionando el mundo: desde conceptos básicos hasta aplicaciones avanzadas como DeFi, NFTs y contratos inteligentes.' },
      en: { title: 'Blockchain', subtitle: 'Explore the technology revolutionizing the world: from basics to advanced applications like DeFi, NFTs and smart contracts.' },
      fr: { title: 'Blockchain', subtitle: 'Explorez la technologie qui révolutionne le monde : des bases aux applications avancées comme DeFi, NFTs et smart contracts.' },
      ar: { title: 'البلوك تشين', subtitle: 'استكشف التكنولوجيا التي تحدث ثورة في العالم: من الأساسيات إلى التطبيقات المتقدمة مثل DeFi وNFTs والعقود الذكية.' }
    };
    const t = texts[currentLanguage] || texts.es;

    return (
      <div className="min-h-screen" style={{backgroundColor: 'var(--background-color)'}}>
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          currentLanguage={currentLanguage}
          setCurrentLanguage={setLanguage}
        />
        
        <main className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
                {t.title}
              </h1>
              <p className="text-xl max-w-4xl mx-auto" style={{color: 'var(--text-secondary)'}}>
                {t.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {blockchainApps.map((app, index) => (
                <div key={index} className="card p-6 text-center hover:shadow-lg transition-all">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                       style={{backgroundColor: app.color}}>
                    <div className={`icon-${app.icon} text-2xl text-white`}></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{color: 'var(--text-primary)'}}>
                    {app.title}
                  </h3>
                  <p style={{color: 'var(--text-secondary)'}}>{app.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="card p-8">
                <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
                  ¿Cómo funciona Blockchain?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" 
                         style={{backgroundColor: 'var(--primary-color)'}}>
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Transacción</h4>
                      <p className="text-sm" style={{color: 'var(--text-secondary)'}}>
                        Se inicia una transacción entre dos partes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" 
                         style={{backgroundColor: 'var(--primary-color)'}}>
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Verificación</h4>
                      <p className="text-sm" style={{color: 'var(--text-secondary)'}}>
                        La red verifica la transacción mediante consenso
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&h=400&fit=crop" 
                  alt="Blockchain Technology" 
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </main>
        
        <Footer currentLanguage={currentLanguage} />
      </div>
    );
  } catch (error) {
    console.error('Blockchain page error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BlockchainApp />);