function NexypnApp() {
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

    const texts = {
      es: { title: 'Nexypn', subtitle: 'Tu plataforma de confianza para el conocimiento tecnológico y las criptomonedas' },
      en: { title: 'Nexypn', subtitle: 'Your trusted platform for technology and cryptocurrency knowledge' },
      fr: { title: 'Nexypn', subtitle: 'Votre plateforme de confiance pour les connaissances technologiques et cryptos' },
      ar: { title: 'نيكسيبن', subtitle: 'منصتك الموثوقة لمعرفة التكنولوجيا والعملات المشفرة' }
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
              <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--primary-color)'}}>
                {t.title}
              </h1>
              <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-secondary)'}}>
                {t.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
                  Nuestra Plataforma
                </h2>
                <p className="text-lg leading-relaxed mb-6" style={{color: 'var(--text-secondary)'}}>
                  Nexypn es más que un blog: somos una plataforma integral que combina educación, 
                  análisis y herramientas prácticas para navegar el mundo de las criptomonedas y 
                  la tecnología blockchain.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card p-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'var(--primary-color)'}}>
                      <div className="icon-book-open text-xl text-white"></div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Educación</h3>
                    <p className="text-sm" style={{color: 'var(--text-secondary)'}}>Contenido educativo de calidad</p>
                  </div>
                  <div className="card p-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'var(--accent-color)'}}>
                      <div className="icon-chart-bar text-xl text-white"></div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Análisis</h3>
                    <p className="text-sm" style={{color: 'var(--text-secondary)'}}>Análisis detallados del mercado</p>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop" 
                  alt="Nexypn Platform" 
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
    console.error('Nexypn page error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NexypnApp />);