function BuySection({ currentLanguage }) {
  try {
    const translations = {
      es: {
        title: 'Guía: Cómo comprar criptomonedas de forma segura',
        subtitle: 'Información práctica y pasos para principiantes',
        description: 'Esta guía explica cómo elegir plataformas fiables, qué comprobar antes de operar y buenas prácticas de seguridad. No promovemos la compra directa en esta web; ofrecemos información y recursos.',
        features: [
          { title: 'Verificación de plataforma', desc: 'Cómo comprobar licencias y reputación' },
          { title: 'Seguridad', desc: 'Custodia, 2FA y prácticas recomendadas' },
          { title: 'Métodos de pago', desc: 'Diferencias entre transferencias, tarjetas y efectivo' },
          { title: 'Costes y comisiones', desc: 'Cómo comparar tasas y spreads' }
        ],
        cta: 'Leer guía'
      },
      en: {
        title: 'Guide: How to buy cryptocurrencies safely',
        subtitle: 'Practical information and steps for beginners',
        description: 'This guide explains how to choose reliable platforms, what to check before trading and best security practices. We do not promote direct buying here; we provide information and resources.',
        features: [
          { title: 'Platform verification', desc: 'How to check licenses and reputation' },
          { title: 'Security', desc: 'Custody, 2FA and recommended practices' },
          { title: 'Payment methods', desc: 'Differences between transfers, cards and cash' },
          { title: 'Costs and fees', desc: 'How to compare fees and spreads' }
        ],
        cta: 'Read guide'
      },
      fr: {
        title: 'Guide : Comment acheter des cryptomonnaies en sécurité',
        subtitle: 'Informations pratiques et étapes pour débutants',
        description: 'Ce guide explique comment choisir des plateformes fiables, quoi vérifier avant de trader et les meilleures pratiques de sécurité. Nous ne promouvons pas l\'achat direct ici ; nous fournissons des informations et ressources.',
        features: [
          { title: 'Vérification de la plateforme', desc: 'Comment vérifier licences et réputation' },
          { title: 'Sécurité', desc: 'Custody, 2FA et bonnes pratiques' },
          { title: 'Méthodes de paiement', desc: 'Transferts, cartes et espèces' },
          { title: 'Coûts et frais', desc: 'Comparer frais et spreads' }
        ],
        cta: 'Lire le guide'
      },
      ru: {
        title: 'Руководство: Как безопасно купить криптовалюту',
        subtitle: 'Практическая информация и шаги для новичков',
        description: 'В этом руководстве описано, как выбирать надёжные площадки, что проверять перед торгами и лучшие практики безопасности. Мы не продвигаем прямые покупки — предоставляем информацию и ресурсы.',
        features: [
          { title: 'Проверка площадки', desc: 'Как проверять лицензии и репутацию' },
          { title: 'Безопасность', desc: 'Кастоди, 2FA и рекомендуемые практики' },
          { title: 'Методы оплаты', desc: 'Переводы, карты и наличные' },
          { title: 'Стоимость и комиссии', desc: 'Как сравнивать комиссии и спреды' }
        ],
        cta: 'Читать руководство'
      },
      ar: {
        title: 'دليل: كيفية شراء العملات المشفرة بأمان',
        subtitle: 'معلومات عملية وخطوات للمبتدئين',
        description: 'يشرح هذا الدليل كيفية اختيار منصات موثوقة، وما الذي يجب التحقق منه قبل التداول، وأفضل ممارسات الأمن. لا نروّج للشراء المباشر هنا؛ نحن نقدم معلومات وموارد.',
        features: [
          { title: 'التحقق من المنصة', desc: 'كيفية التحقق من التراخيص والسمعة' },
          { title: 'الأمان', desc: 'الحماية، 2FA والممارسات الموصى بها' },
          { title: 'طرق الدفع', desc: 'التحويلات، البطاقات والنقد' },
          { title: 'التكاليف والرسوم', desc: 'كيفية مقارنة الرسوم والفروقات' }
        ],
        cta: 'اقرأ الدليل'
      }
    };

    const t = translations[currentLanguage];

    return (
      <div className="py-20" style={{backgroundColor: 'var(--background-color)'}} data-name="buy-section" data-file="components/BuySection.js">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${currentLanguage === 'ar' ? 'text-right' : 'text-center'}`} style={{color: 'var(--text-primary)'}}>
              {t.title}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto mb-8 ${currentLanguage === 'ar' ? 'text-right' : 'text-center'}`} style={{color: 'var(--text-secondary)'}}>
              {t.subtitle}
            </p>
            <p className={`text-lg max-w-4xl mx-auto ${currentLanguage === 'ar' ? 'text-right' : 'text-center'}`} style={{color: 'var(--text-secondary)'}}>
              {t.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {t.features.map((feature, index) => (
              <div key={index} className="card p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center`} style={{backgroundColor: 'var(--primary-color)'}}>
                  <div className="icon-shield text-2xl text-white"></div>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${currentLanguage === 'ar' ? 'text-right' : 'text-center'}`} style={{color: 'var(--text-primary)'}}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${currentLanguage === 'ar' ? 'text-right' : 'text-center'}`} style={{color: 'var(--text-secondary)'}}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
              <button className="btn-primary text-lg px-8 py-4">
                {t.cta}
              </button>
            </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('BuySection component error:', error);
    return null;
  }
}