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
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Recargar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
      const [darkMode, setDarkMode] = React.useState(() => localStorage.getItem('darkMode') === 'true');
    const [selectedCategory, setSelectedCategory] = React.useState('All');
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

    return (
      <div className="min-h-screen" style={{backgroundColor: 'var(--background-color)'}} data-name="app" data-file="app.js">
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          currentLanguage={currentLanguage}
          setCurrentLanguage={setLanguage}
        />
        
        <section id="inicio">
          <HeroSection currentLanguage={currentLanguage} />
          <main className="container mx-auto px-4 py-8">
            <CategoryTabs 
              selectedCategory={selectedCategory} 
              onCategoryChange={setSelectedCategory}
              currentLanguage={currentLanguage}
            />
            <BlogGrid 
              selectedCategory={selectedCategory}
              currentLanguage={currentLanguage}
            />
          </main>
        </section>

        <section id="sobre-nosotros">
          <AboutSection currentLanguage={currentLanguage} />
        </section>

        <section id="comprar">
          <SecurePlatformsSection currentLanguage={currentLanguage} />
        </section>

        <section id="faqs">
          <FaqSection currentLanguage={currentLanguage} />
        </section>

        <Footer currentLanguage={currentLanguage} />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);