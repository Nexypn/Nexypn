function Header({ darkMode, toggleDarkMode, currentLanguage, setCurrentLanguage }) {
  try {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = React.useState(false);

    const languages = [
      { code: 'es', name: 'Español', flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAflBMVEX/AAD9AAD3AADxAADrAAD/eXn9bGz8YWH8WVn6UVH5SEj5Pz/3NDT0Kir9/QD+/nL+/lT18lDt4Uf6+j/39zD39yf19R3n5wDxflXsZ1Pt4Y3x8zr0wbLs1NXz8xPj4wD37t3jmkvsUU/Bz6nrykm3vJ72IiL0FBTyDAvhAABEt4UZAAAAX0lEQVR4AQXBQUrFQBBAwXqTDkYE94Jb73+qfwVRcYxVQRBRToiUfoaVpGTrtdS9SO0Z9FR9lVy/g5c99+dKl30N5uxPuviexXEc9/msC7TOkd4kHu/Dlh4itCJ8AP4B0w4Qwmm7CFQAAAAASUVORK5CYII=' },
      { code: 'en', name: 'English', flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=' },
      { code: 'fr', name: 'Français', flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAbFBMVEVzldTg4ODS0tLxDwDtAwDjAADD0uz39/fy8vL3k4nzgna4yOixwuXu7u7s6+zn5+fyd2rvcGPtZljYAABrjNCpvOHrWkxegsqfs93NAADpUUFRd8THAABBa7wnVbERRKa8vLyxsLCoqKigoKClCvcsAAAAXklEQVR4AS3JxUEAQQAEwZo13Mk/R9w5/7UERJCIGIgj5qfRJZEpPyNfCgJTjMR1eRRnJiExFJz5Mf1PokWr/UztIjRGQ3V486u0HO55m634U6dMcf0RNPfkVCTvKjO16xHA8miowAAAAABJRU5ErkJggg==' },
      { code: 'ru', name: 'Русский', flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAKklEQVQoU2NkYGD4z0AEYBxVSFJgYGBg+M8wMDAw/2Bg4GJgYGBgYABBgAAdEQa3gx2q9YAAAAASUVORK5CYII=' },
      { code: 'ar', name: 'العربية', flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAAuklEQVR4AWOYCQDjRBPMiAKGGYwNFVqzgKlWoZV1FKhF4xN8///+/C8qFGCrYk1l6gcPFELEYsFZZF7yauD/+fe/z19+mJsJcjp4OZAN8BBqEAGEWhUAAAAASUVORK5CYII=' }
    ];

    const translations = {
      es: {
        home: 'Inicio',
        categories: 'Categorías',
        buyBlog: 'Guía de compra',
        faqs: 'FAQS',
        technology: 'Tecnología',
        cryptocurrency: 'Criptomonedas',
        blockchain: 'Blockchain',
        nexypn: 'Nexypn'
      },
      en: {
        home: 'Home',
        categories: 'Categories',
        buyBlog: 'Buying Guide',
        faqs: 'FAQS',
        technology: 'Technology',
        cryptocurrency: 'Cryptocurrencies',
        blockchain: 'Blockchain',
        nexypn: 'Nexypn'
      },
      fr: {
        home: 'Accueil',
        categories: 'Catégories',
        buyBlog: 'Guide d\'achat',
        faqs: 'FAQ',
        technology: 'Technologie',
        cryptocurrency: 'Cryptomonnaies',
        blockchain: 'Blockchain',
        nexypn: 'Nexypn'
      },
      ru: {
        home: 'Главная',
        categories: 'Категории',
        buyBlog: 'Руководство по покупке',
        faqs: 'Вопросы',
        technology: 'Технологии',
        cryptocurrency: 'Криптовалюты',
        blockchain: 'Блокчейн',
        nexypn: 'Nexypn'
      },
      ar: {
        home: 'الرئيسية',
        categories: 'الفئات',
        buyBlog: 'دليل الشراء',
        faqs: 'الأسئلة الشائعة',
        technology: 'التكنولوجيا',
        cryptocurrency: 'العملات المشفرة',
        blockchain: 'البلوك تشين',
        nexypn: 'نيكسيبن'
      }
    };

    const t = translations[currentLanguage];
    const currentLang = languages.find(lang => lang.code === currentLanguage);

    const handleLanguageChange = (langCode) => {
      // call parent setter (which persists and sets html lang/dir)
      setCurrentLanguage(langCode);
      setLanguageMenuOpen(false);
    };

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <header className="sticky top-0 z-50 border-b" style={{backgroundColor: 'var(--background-color)', borderColor: 'var(--border-color)'}} data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <a href="index.html" className="flex items-center">
                <div className="text-2xl font-bold" style={{color: 'var(--primary-color)'}}>
                  Nexypn
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-primary)'}}>{t.home}</button>
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-primary)'}}>
                  <span>{t.categories}</span>
                  <div className="icon-chevron-down text-sm"></div>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" style={{backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)'}}>
                  <div className="py-2">
                    <a href="nexypn.html" className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:bg-opacity-10" style={{color: 'var(--text-primary)'}}>{t.nexypn}</a>
                    <a href="cryptocurrency.html" className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:bg-opacity-10" style={{color: 'var(--text-primary)'}}>{t.cryptocurrency}</a>
                    <a href="blockchain.html" className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:bg-opacity-10" style={{color: 'var(--text-primary)'}}>{t.blockchain}</a>
                    <a href="technology.html" className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:bg-opacity-10" style={{color: 'var(--text-primary)'}}>{t.technology}</a>
                  </div>
                </div>
              </div>
              <button onClick={() => scrollToSection('comprar')} className="hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-primary)'}}>{t.buyBlog}</button>
              <button onClick={() => scrollToSection('faqs')} className="hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-primary)'}}>{t.faqs}</button>
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button 
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded hover:bg-[var(--surface-color)] transition-colors"
                >
                  <img src={currentLang.flag} alt={currentLang.code} className="w-4 h-3" />
                  <span className="text-sm font-medium" style={{color: 'var(--text-primary)'}}>{currentLang.code.toUpperCase()}</span>
                  <div className="icon-chevron-down text-xs" style={{color: 'var(--text-secondary)'}}></div>
                </button>
                {languageMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-40 rounded-lg shadow-lg border z-50" style={{backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)'}}>
                    <div className="py-2">
                      {languages.map((lang) => (
                        <button 
                          key={lang.code} 
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`flex items-center space-x-3 w-full px-3 py-2 hover:bg-[var(--primary-color)] hover:bg-opacity-10 transition-colors ${currentLanguage === lang.code ? 'bg-[var(--primary-color)] bg-opacity-10' : ''}`} 
                          style={{color: 'var(--text-primary)'}}
                        >
                          <img src={lang.flag} alt={lang.code} className="w-4 h-3" />
                          <span className="text-sm">{lang.name}</span>
                          {currentLanguage === lang.code && (
                            <div className="icon-check text-xs ml-auto" style={{color: 'var(--primary-color)'}}></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-[var(--surface-color)] transition-colors"
                style={{color: 'var(--text-primary)'}}
              >
                <div className={`icon-${darkMode ? 'sun' : 'moon'} text-lg`}></div>
              </button>

              {/* Twitter */}
              <a href="" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-primary)'}}>
                <div className="icon-twitter text-lg"></div>
              </a>

              {/* Mobile menu button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-[var(--surface-color)]"
                style={{color: 'var(--text-primary)'}}
              >
                <div className="icon-menu text-lg"></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t" style={{borderColor: 'var(--border-color)'}}>
              <nav className="flex flex-col space-y-4">
                <button onClick={() => {scrollToSection('inicio'); setMobileMenuOpen(false);}} style={{color: 'var(--text-primary)', textAlign: 'left'}}>{t.home}</button>
                <button onClick={() => {scrollToSection('sobre-nosotros'); setMobileMenuOpen(false);}} style={{color: 'var(--text-primary)', textAlign: 'left'}}>{t.categories}</button>
                <button onClick={() => {scrollToSection('comprar'); setMobileMenuOpen(false);}} style={{color: 'var(--text-primary)', textAlign: 'left'}}>{t.buyBlog}</button>
                <button onClick={() => {scrollToSection('faqs'); setMobileMenuOpen(false);}} style={{color: 'var(--text-primary)', textAlign: 'left'}}>{t.faqs}</button>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}