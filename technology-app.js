function TechnologyApp() {
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

    const translations = {
      es: { title: 'Tecnología', subtitle: 'Descubre las innovaciones tecnológicas que están moldeando nuestro futuro: desde inteligencia artificial hasta computación cuántica.' },
      en: { title: 'Technology', subtitle: 'Discover the technological innovations shaping our future: from AI to quantum computing.' },
      fr: { title: 'Technologie', subtitle: 'Découvrez les innovations technologiques qui façonnent notre avenir : de l\'IA à l\'informatique quantique.' },
      ar: { title: 'التكنولوجيا', subtitle: 'اكتشف الابتكارات التكنولوجية التي تشكل مستقبلنا: من الذكاء الاصطناعي إلى الحوسبة الكمومية.' }
    };
    const t = translations[currentLanguage] || translations.es;

    const technologies = [
      {
        title: 'Inteligencia Artificial',
        description: 'Sistemas que pueden aprender y tomar decisiones',
        icon: 'brain',
        trends: ['ChatGPT', 'Machine Learning', 'Deep Learning']
      },
      {
        title: 'Ciberseguridad',
        description: 'Protección de sistemas y datos frente a amenazas',
        icon: 'shield',
        trends: ['Zero Trust', 'SASE', 'Threat Intelligence']
      },
      {
        title: 'Edge Computing',
        description: 'Procesamiento cercano a la fuente de datos',
        icon: 'cpu',
        trends: ['5G Edge', 'IoT Edge', 'Latency Reduction']
      },
      {
        title: 'Sostenibilidad Tech',
        description: 'Diseño y operaciones con menor huella energética',
        icon: 'leaf',
        trends: ['Green Cloud', 'Energy-efficient AI', 'Circular HW']
      },
      {
        title: 'Internet de las Cosas',
        description: 'Dispositivos conectados que mejoran nuestras vidas',
        icon: 'wifi',
        trends: ['Smart Homes', 'Wearables', 'Industrial IoT']
      },
      {
        title: 'Computación Cuántica',
        description: 'La próxima revolución en procesamiento de datos',
        icon: 'cpu',
        trends: ['Qubits', 'Supremacía Cuántica', 'IBM Q']
      },
      {
        title: 'Realidad Virtual/AR',
        description: 'Experiencias inmersivas que transforman industrias',
        icon: 'eye',
        trends: ['Metaverso', 'Apple Vision', 'Gaming VR']
      }
    ];

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {technologies.map((tech, index) => (
                <div key={index} className="card p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" 
                         style={{backgroundColor: 'var(--primary-color)'}}>
                      <div className={`icon-${tech.icon} text-xl text-white`}></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{color: 'var(--text-primary)'}}>
                        {tech.title}
                      </h3>
                      <p style={{color: 'var(--text-secondary)'}}>{tech.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.trends.map((trend, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full" 
                            style={{backgroundColor: 'var(--surface-color)', color: 'var(--text-primary)'}}>
                        {trend}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-8 text-center">
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
                Tecnologías Emergentes 2025
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2" style={{color: 'var(--primary-color)'}}>AI</div>
                  <p className="text-sm" style={{color: 'var(--text-secondary)'}}>Inteligencia Artificial</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2" style={{color: 'var(--accent-color)'}}>5G</div>
                  <p className="text-sm" style={{color: 'var(--text-secondary)'}}>Conectividad Ultra Rápida</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2" style={{color: '#8b5cf6'}}>AR</div>
                  <p className="text-sm" style={{color: 'var(--text-secondary)'}}>Realidad Aumentada</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2" style={{color: '#ef4444'}}>Q</div>
                  <p className="text-sm" style={{color: 'var(--text-secondary)'}}>Computación Cuántica</p>
                </div>
              </div>
            </div>

            {/* Deep Dive section: diseño más profundo con dos columnas */}
            <section className="mt-12">
              <div className="card p-8">
                <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>Deep Dive: Inteligencia Artificial</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <p style={{color: 'var(--text-secondary)'}}>Análisis detallado sobre arquitecturas, coste energético y casos de negocio para 2025. Incluye recomendaciones prácticas para equipos técnicos y managers.</p>
                    <h4 className="mt-4 font-semibold" style={{color: 'var(--primary-color)'}}>Arquitecturas y costes</h4>
                    <p style={{color: 'var(--text-secondary)'}}>Comparativa entre modelos on-premise vs cloud, estrategias de pruning y optimización de inferencia.</p>
                    <h4 className="mt-4 font-semibold" style={{color: 'var(--primary-color)'}}>Checklist para despliegues</h4>
                    <ul className="list-disc pl-6" style={{color: 'var(--text-secondary)'}}>
                      <li>Evaluar latencia y coste por inferencia</li>
                      <li>Definir métricas de fairness y explainability</li>
                      <li>Plan de rollback y monitorización</li>
                    </ul>
                  </div>
                  <div className="col-span-1 border-l pl-6 hidden lg:block" style={{borderColor: 'var(--border-color)'}}>
                    <h5 className="font-medium mb-2" style={{color: 'var(--text-primary)'}}>Recursos rápidos</h5>
                    <ul className="space-y-2 text-sm" style={{color: 'var(--text-secondary)'}}>
                      <li><a href="#" className="hover:text-[var(--primary-color)]">Guía de optimización</a></li>
                      <li><a href="#" className="hover:text-[var(--primary-color)]">Lista de benchmarks</a></li>
                      <li><a href="#" className="hover:text-[var(--primary-color)]">Auditorías recomendadas</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Case Studies / Professional Resources */}
            <section className="mt-8">
              <div className="card p-8">
                <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>Case Studies & Recursos Profesionales</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border rounded">
                    <h4 className="font-semibold" style={{color:'var(--text-primary)'}}>Case Study: Optimización de modelos AI</h4>
                    <p className="text-sm" style={{color:'var(--text-secondary)'}}>Resultados reales de reducción de coste por inferencia en producción.</p>
                    <a href="#" className="inline-block mt-3 text-sm text-[var(--primary-color)]">Descargar informe (PDF)</a>
                  </div>
                  <div className="p-4 border rounded">
                    <h4 className="font-semibold" style={{color:'var(--text-primary)'}}>Guía: Arquitecturas Edge para IoT</h4>
                    <p className="text-sm" style={{color:'var(--text-secondary)'}}>Checklist técnico para despliegues a escala.</p>
                    <a href="#" className="inline-block mt-3 text-sm text-[var(--primary-color)]">Ver guía</a>
                  </div>
                  <div className="p-4 border rounded">
                    <h4 className="font-semibold" style={{color:'var(--text-primary)'}}>Benchmark: Cloud vs On-prem</h4>
                    <p className="text-sm" style={{color:'var(--text-secondary)'}}>Comparativa de costes y latencias.</p>
                    <a href="#" className="inline-block mt-3 text-sm text-[var(--primary-color)]">Ver resultados</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        
        <Footer currentLanguage={currentLanguage} />
      </div>
    );
  } catch (error) {
    console.error('Technology page error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TechnologyApp />);