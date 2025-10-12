function FaqSection({ currentLanguage }) {
  try {
    const [openFaq, setOpenFaq] = React.useState(null);

    const translations = {
      es: {
        title: 'Preguntas Frecuentes',
        subtitle: 'Encuentra respuestas a las dudas más comunes',
        faqs: [
          {
            question: '¿Qué es una criptomoneda?',
            answer: 'Una criptomoneda es una moneda digital que utiliza criptografía para asegurar las transacciones y controlar la creación de nuevas unidades. Bitcoin fue la primera criptomoneda, creada en 2009.'
          },
          {
            question: '¿Cómo puedo empezar a invertir en criptomonedas?',
            answer: 'Para empezar, necesitas crear una cuenta en una plataforma de intercambio confiable, verificar tu identidad, depositar fondos y luego puedes comprar las criptomonedas que desees.'
          },
          {
            question: '¿Qué es blockchain?',
            answer: 'Blockchain es una tecnología de registro distribuido que mantiene una lista de registros (bloques) que están enlazados y asegurados usando criptografía. Es la tecnología que sustenta las criptomonedas.'
          },
          {
            question: '¿Es seguro invertir en criptomonedas?',
            answer: 'Las inversiones en criptomonedas conllevan riesgos debido a su volatilidad. Es importante educarse, diversificar las inversiones y solo invertir lo que puedes permitirte perder.'
          }
        ]
      },
      en: {
        title: 'Frequently Asked Questions',
        subtitle: 'Find answers to the most common questions',
        faqs: [
          {
            question: 'What is a cryptocurrency?',
            answer: 'A cryptocurrency is a digital currency that uses cryptography to secure transactions and control the creation of new units. Bitcoin was the first cryptocurrency, created in 2009.'
          },
          {
            question: 'How can I start investing in cryptocurrencies?',
            answer: 'To get started, you need to create an account on a trusted exchange platform, verify your identity, deposit funds, and then you can buy the cryptocurrencies you want.'
          },
          {
            question: 'What is blockchain?',
            answer: 'Blockchain is a distributed ledger technology that maintains a list of records (blocks) that are linked and secured using cryptography. It\'s the technology that underpins cryptocurrencies.'
          },
          {
            question: 'Is it safe to invest in cryptocurrencies?',
            answer: 'Cryptocurrency investments carry risks due to their volatility. It\'s important to educate yourself, diversify investments, and only invest what you can afford to lose.'
          }
        ]
      },
      fr: {
        title: 'Questions Fréquemment Posées',
        subtitle: 'Trouvez des réponses aux questions les plus courantes',
        faqs: [
          {
            question: 'Qu\'est-ce qu\'une cryptomonnaie?',
            answer: 'Une cryptomonnaie est une monnaie numérique qui utilise la cryptographie pour sécuriser les transactions et contrôler la création de nouvelles unités. Bitcoin fut la première cryptomonnaie, créée en 2009.'
          },
          {
            question: 'Comment puis-je commencer à investir dans les cryptomonnaies?',
            answer: 'Pour commencer, vous devez créer un compte sur une plateforme d\'échange fiable, vérifier votre identité, déposer des fonds, puis vous pouvez acheter les cryptomonnaies souhaitées.'
          },
          {
            question: 'Qu\'est-ce que la blockchain?',
            answer: 'La blockchain est une technologie de registre distribué qui maintient une liste d\'enregistrements (blocs) liés et sécurisés par cryptographie. C\'est la technologie qui sous-tend les cryptomonnaies.'
          },
          {
            question: 'Est-il sûr d\'investir dans les cryptomonnaies?',
            answer: 'Les investissements en cryptomonnaies comportent des risques en raison de leur volatilité. Il est important de s\'éduquer, de diversifier les investissements et d\'investir seulement ce que vous pouvez vous permettre de perdre.'
          }
        ]
      },
      ru: {
        title: 'Часто задаваемые вопросы',
        subtitle: 'Найдите ответы на самые распространённые вопросы',
        faqs: [
          {
            question: 'Что такое криптовалюта?',
            answer: 'Криптовалюта — это цифровая валюта, использующая криптографию для обеспечения безопасности транзакций и контроля за созданием новых единиц. Биткойн стал первой криптовалютой, созданной в 2009 году.'
          },
          {
            question: 'Как начать инвестировать в криптовалюты?',
            answer: 'Чтобы начать, создайте аккаунт на надёжной бирже, пройдите проверку личности, внесите средства, а затем вы сможете купить интересующие вас криптовалюты.'
          },
          {
            question: 'Что такое блокчейн?',
            answer: 'Блокчейн — это распределённый реестр, который ведёт список записей (блоков), связанных и защищённых с помощью криптографии. Это технология, лежащая в основе криптовалют.'
          },
          {
            question: 'Опасно ли инвестировать в криптовалюты?',
            answer: 'Инвестиции несут риски из‑за волатильности криптовалют. Важно получать образование, диверсифицировать инвестиции и вкладывать только те средства, которые вы готовы потерять.'
          }
        ]
      },
      ar: {
        title: 'الأسئلة الشائعة',
        subtitle: 'اعثر على إجابات للأسئلة الأكثر شيوعاً',
        faqs: [
          {
            question: 'ما هي العملة المشفرة؟',
            answer: 'العملة المشفرة هي عملة رقمية تستخدم التشفير لتأمين المعاملات والتحكم في إنشاء وحدات جديدة. البيتكوين كانت أول عملة مشفرة، تم إنشاؤها في 2009.'
          },
          {
            question: 'كيف يمكنني البدء في الاستثمار في العملات المشفرة؟',
            answer: 'للبدء، تحتاج لإنشاء حساب على منصة تداول موثوقة، التحقق من هويتك، إيداع الأموال، ثم يمكنك شراء العملات المشفرة التي تريدها.'
          },
          {
            question: 'ما هو البلوك تشين؟',
            answer: 'البلوك تشين هو تقنية دفتر موزع يحتفظ بقائمة من السجلات (الكتل) المترابطة والمؤمنة باستخدام التشفير. إنها التقنية التي تدعم العملات المشفرة.'
          },
          {
            question: 'هل الاستثمار في العملات المشفرة آمن؟',
            answer: 'استثمارات العملات المشفرة تحمل مخاطر بسبب تقلباتها. من المهم التعلم وتنويع الاستثمارات والاستثمار فقط بما يمكنك تحمل خسارته.'
          }
        ]
      }
    };

    const t = translations[currentLanguage];

    return (
      <div className="py-20" style={{backgroundColor: 'var(--surface-color)'}} data-name="faq-section" data-file="components/FaqSection.js">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${currentLanguage === 'ar' ? 'text-right' : 'text-center'}`} style={{color: 'var(--text-primary)'}}>
              {t.title}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${currentLanguage === 'ar' ? 'text-right' : 'text-center'}`} style={{color: 'var(--text-secondary)'}}>
              {t.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {t.faqs.map((faq, index) => (
              <div key={index} className="card mb-4">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full p-6 text-left flex items-center justify-between ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  <h3 className={`text-lg font-semibold ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`} style={{color: 'var(--text-primary)'}}>
                    {faq.question}
                  </h3>
                  <div className={`icon-${openFaq === index ? 'minus' : 'plus'} text-xl flex-shrink-0 ml-4`} style={{color: 'var(--primary-color)'}}></div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className={`text-lg leading-relaxed ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`} style={{color: 'var(--text-secondary)'}}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('FaqSection component error:', error);
    return null;
  }
}
