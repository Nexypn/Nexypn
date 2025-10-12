function Footer({ currentLanguage }) {
  try {
    const translations = {
      es: {
        description: 'El centro de conocimiento más completo sobre tecnología y criptomonedas. Navega fácilmente por artículos profesionales y análisis detallados.',
        quickLinks: 'Enlaces rápidos',
        aboutUs: 'Sobre nosotros',
        contact: 'Contacto',
        terms: 'Términos de servicio',
        privacy: 'Política de privacidad',
        categories: 'Categorías',
        technology: 'Tecnología',
        cryptocurrency: 'Criptomonedas',
        blockchain: 'Blockchain',
        nexypn: 'Nexypn',
        copyright: '© 2025 Nexypn. Todos los derechos reservados.',
        cookies: 'Política de cookies',
        legal: 'Aviso legal'
      },
      en: {
        description: 'The most comprehensive knowledge center about technology and cryptocurrencies. Easily navigate through professional articles and detailed analysis.',
        quickLinks: 'Quick Links',
        aboutUs: 'About Us',
        contact: 'Contact',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        categories: 'Categories',
        technology: 'Technology',
        cryptocurrency: 'Cryptocurrencies',
        blockchain: 'Blockchain',
        nexypn: 'Nexypn',
        copyright: '© 2025 Nexypn. All rights reserved.',
        cookies: 'Cookie Policy',
        legal: 'Legal Notice'
      },
      fr: {
        description: 'Le centre de connaissances le plus complet sur la technologie et les cryptomonnaies. Naviguez facilement parmi les articles professionnels et analyses détaillées.',
        quickLinks: 'Liens Rapides',
        aboutUs: 'À Propos',
        contact: 'Contact',
        terms: 'Conditions de Service',
        privacy: 'Politique de Confidentialité',
        categories: 'Catégories',
        technology: 'Technologie',
        cryptocurrency: 'Cryptomonnaies',
        blockchain: 'Blockchain',
        nexypn: 'Nexypn',
        copyright: '© 2025 Nexypn. Tous droits réservés.',
        cookies: 'Politique des Cookies',
        legal: 'Mentions Légales'
      },
      ru: {
        description: 'Самый полный центр знаний о технологиях и криптовалютах. Легко находите профессиональные статьи и подробные аналитические материалы.',
        quickLinks: 'Быстрые ссылки',
        aboutUs: 'О нас',
        contact: 'Контакты',
        terms: 'Условия обслуживания',
        privacy: 'Политика конфиденциальности',
        categories: 'Категории',
        technology: 'Технологии',
        cryptocurrency: 'Криптовалюты',
        blockchain: 'Блокчейн',
        nexypn: 'Nexypn',
        copyright: '© 2025 Nexypn. Все права защищены.',
        cookies: 'Политика cookie',
        legal: 'Юридическая информация'
      },
      ar: {
        description: 'أشمل مركز معرفة حول التكنولوجيا والعملات المشفرة. تصفح بسهولة المقالات المهنية والتحليلات المفصلة.',
        quickLinks: 'روابط سريعة',
        aboutUs: 'من نحن',
        contact: 'اتصل بنا',
        terms: 'شروط الخدمة',
        privacy: 'سياسة الخصوصية',
        categories: 'الفئات',
        technology: 'التكنولوجيا',
        cryptocurrency: 'العملات المشفرة',
        blockchain: 'البلوك تشين',
        nexypn: 'نيكسيبن',
        copyright: '© 2025 نيكسيبن. جميع الحقوق محفوظة.',
        cookies: 'سياسة ملفات تعريف الارتباط',
        legal: 'إشعار قانوني'
      }
    };

    const t = translations[currentLanguage];

    // Newsletter state
    const [email, setEmail] = React.useState('');
    const [msg, setMsg] = React.useState(null);

    const handleSubscribe = (e) => {
      e.preventDefault();
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) {
        setMsg({ type: 'error', text: { es:'Email no válido', en:'Invalid email', fr:'E-mail invalide', ru:'Неверный email', ar:'بريد إلكتروني غير صالح' }[currentLanguage] });
        return;
      }
      // store in localStorage (simple demo)
      const subs = JSON.parse(localStorage.getItem('nexypn_subscribers') || '[]');
      if (!subs.includes(email)) subs.push(email);
      localStorage.setItem('nexypn_subscribers', JSON.stringify(subs));
      setMsg({ type: 'success', text: { es:'Gracias por suscribirte', en:'Thanks for subscribing', fr:'Merci pour votre inscription', ru:'Спасибо за подписку', ar:'شكراً لاشتراكك' }[currentLanguage] });
      setEmail('');
    };

    return (
      <footer className="mt-16 border-t" style={{backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)'}} data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold mb-4" style={{color: 'var(--primary-color)'}}>
                Nexypn
              </div>
              <p className={`text-sm mb-4 max-w-md ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`} style={{color: 'var(--text-secondary)'}}>
                {t.description}
              </p>
              <div className="flex space-x-4">
                <a href="" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-[var(--border-color)] transition-colors" style={{color: 'var(--text-secondary)'}}>
                  <div className="icon-twitter text-lg"></div>
                </a>
                <a href="#" className="p-2 rounded-lg hover:bg-[var(--border-color)] transition-colors" style={{color: 'var(--text-secondary)'}}>
                  <div className="icon-linkedin text-lg"></div>
                </a>
                <a href="#" className="p-2 rounded-lg hover:bg-[var(--border-color)] transition-colors" style={{color: 'var(--text-secondary)'}}>
                  <div className="icon-youtube text-lg"></div>
                </a>
              </div>

              {/* Newsletter */}
              <form onSubmit={handleSubscribe} className="mt-6 flex items-center space-x-2">
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder={{ es:'Tu email', en:'Your email', fr:'Votre e-mail', ru:'Ваш email', ar:'بريدك الإلكتروني' }[currentLanguage]} className="px-3 py-2 rounded-l-lg border" style={{borderColor:'var(--border-color)'}} />
                <button type="submit" className="btn-primary rounded-r-lg">{ { es:'Suscribirse', en:'Subscribe', fr:'S\'inscrire', ru:'Подписаться', ar:'اشترك' }[currentLanguage] }</button>
              </form>
              {msg && <div className={`mt-3 text-sm ${msg.type==='error' ? 'text-red-500' : 'text-green-500'}`}>{msg.text}</div>}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className={`font-semibold mb-4 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`} style={{color: 'var(--text-primary)'}}>{t.quickLinks}</h3>
              <ul className={`space-y-2 text-sm ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
                <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-secondary)'}}>{t.aboutUs}</a></li>
                <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-secondary)'}}>{t.contact}</a></li>
                <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-secondary)'}}>{t.terms}</a></li>
                <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-secondary)'}}>{t.privacy}</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className={`font-semibold mb-4 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`} style={{color: 'var(--text-primary)'}}>{t.categories}</h3>
              <ul className={`space-y-2 text-sm ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
                <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-secondary)'}}>{t.technology}</a></li>
                <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-secondary)'}}>{t.cryptocurrency}</a></li>
                <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-secondary)'}}>{t.blockchain}</a></li>
                <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-secondary)'}}>{t.nexypn}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center" style={{borderColor: 'var(--border-color)'}}>
            <p className={`text-sm ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`} style={{color: 'var(--text-secondary)'}}>
              {t.copyright}
            </p>
            <div className={`flex space-x-6 mt-4 md:mt-0 ${currentLanguage === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <a href="#" className="text-sm hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-secondary)'}}>
                {t.cookies}
              </a>
              <a href="#" className="text-sm hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-secondary)'}}>
                {t.legal}
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}