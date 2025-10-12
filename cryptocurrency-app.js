function CryptocurrencyApp() {
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

    const cryptocurrencies = [
      {
        name: 'Bitcoin',
        symbol: 'BTC',
        description: 'La primera y más conocida criptomoneda del mundo',
        image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=300&h=200&fit=crop'
      },
      {
        name: 'Ethereum', 
        symbol: 'ETH',
        description: 'Plataforma para contratos inteligentes y aplicaciones descentralizadas',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop'
      },
      {
        name: 'Binance Coin',
        symbol: 'BNB', 
        description: 'Token nativo del exchange más grande del mundo',
        image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=300&h=200&fit=crop'
      }
    ];

    const texts = {
      es: { title: 'Criptomonedas', subtitle: 'Descubre el fascinante mundo de las monedas digitales, desde Bitcoin hasta las últimas altcoins. Aprende a invertir, tradear y usar criptomonedas de forma segura.' },
      en: { title: 'Cryptocurrencies', subtitle: 'Discover the world of digital currencies, from Bitcoin to the latest altcoins. Learn how to invest and use crypto safely.' },
      fr: { title: 'Cryptomonnaies', subtitle: 'Découvrez le monde des monnaies numériques, du Bitcoin aux altcoins. Apprenez à investir et utiliser les cryptos en toute sécurité.' },
      ar: { title: 'العملات المشفرة', subtitle: 'اكتشف عالم العملات الرقمية من البيتكوين إلى العملات البديلة. تعلّم الاستثمار واستخدام العملات المشفرة بأمان.' }
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {cryptocurrencies.map((crypto, index) => (
                <div key={index} className="card p-6 text-center">
                  <img src={crypto.image} alt={crypto.name} className="w-full h-32 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold mb-2" style={{color: 'var(--text-primary)'}}>
                    {crypto.name} ({crypto.symbol})
                  </h3>
                  <p style={{color: 'var(--text-secondary)'}}>{crypto.description}</p>
                </div>
              ))}
            </div>

            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
                ¿Por qué las Criptomonedas?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{color: 'var(--primary-color)'}}>Descentralización</h3>
                  <p className="mb-4" style={{color: 'var(--text-secondary)'}}>
                    No dependen de bancos centrales o gobiernos, ofreciendo mayor libertad financiera.
                  </p>
                  <h3 className="text-xl font-semibold mb-4" style={{color: 'var(--primary-color)'}}>Transparencia</h3>
                  <p style={{color: 'var(--text-secondary)'}}>
                    Todas las transacciones son públicas y verificables en la blockchain.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{color: 'var(--primary-color)'}}>Innovación</h3>
                  <p className="mb-4" style={{color: 'var(--text-secondary)'}}>
                    Tecnología revolucionaria que está transformando el sistema financiero global.
                  </p>
                  <h3 className="text-xl font-semibold mb-4" style={{color: 'var(--primary-color)'}}>Accesibilidad</h3>
                  <p style={{color: 'var(--text-secondary)'}}>
                    Acceso global a servicios financieros sin restricciones geográficas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer currentLanguage={currentLanguage} />
      </div>
    );
  } catch (error) {
    console.error('Cryptocurrency page error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CryptocurrencyApp />);