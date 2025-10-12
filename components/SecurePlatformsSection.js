function SecurePlatformsSection({ currentLanguage }) {
  try {
    const texts = {
      es: {
        title: 'Plataformas seguras para comprar criptomonedas',
        subtitle: 'Qué comprobar y cómo elegir un exchange o servicio de confianza',
        points: [
          { title: 'Licencia y regulación', desc: 'Verifica si la plataforma está regulada en su jurisdicción y si publica información legal clara.' },
          { title: 'Reputación y reseñas', desc: 'Busca opiniones, historial de incidentes y tiempos de respuesta del soporte.' },
          { title: 'Seguridad técnica', desc: 'Preferir plataformas con 2FA, cold storage para fondos y auditorías públicas.' },
          { title: 'Comisiones y liquidez', desc: 'Compara comisiones de trading, depósitos y retiros; más liquidez reduce spreads.' }
        ],
        more: 'En esta sección también explicamos custodia (custodial vs non-custodial), cómo usar wallets y recomendaciones para principiantes.'
      },
      en: {
        title: 'Secure platforms to buy cryptocurrencies',
        subtitle: 'What to check and how to choose a trusted exchange or service',
        points: [
          { title: 'License & regulation', desc: 'Check if the platform is regulated and publishes clear legal information.' },
          { title: 'Reputation & reviews', desc: 'Look for reviews, incident history and support responsiveness.' },
          { title: 'Technical security', desc: 'Prefer platforms with 2FA, cold storage and public audits.' },
          { title: 'Fees & liquidity', desc: 'Compare trading, deposit and withdrawal fees; higher liquidity lowers spreads.' }
        ],
        more: 'This section also explains custody (custodial vs non-custodial), wallet usage and beginner recommendations.'
      },
      fr: {
        title: 'Plateformes sécurisées pour acheter des cryptos',
        subtitle: 'Que vérifier et comment choisir un exchange ou service fiable',
        points: [
          { title: 'Licence & réglementation', desc: 'Vérifiez si la plateforme est régulée et publie des informations légales claires.' },
          { title: 'Réputation & avis', desc: 'Cherchez des avis, l\'historique des incidents et la réactivité du support.' },
          { title: 'Sécurité technique', desc: 'Privilégiez les plateformes avec 2FA, cold storage et audits publics.' },
          { title: 'Frais & liquidité', desc: 'Comparez les frais de trading, dépôts et retraits ; plus de liquidité réduit les spreads.' }
        ],
        more: 'Cette section explique aussi la garde (custodial vs non-custodial), l\'utilisation des wallets et des recommandations pour débutants.'
      },
      ru: {
        title: 'Безопасные платформы для покупки криптовалют',
        subtitle: 'Что проверять и как выбрать надёжную биржу или сервис',
        points: [
          { title: 'Лицензии и регулирование', desc: 'Проверьте, регулируется ли платформа и публикует ли юридическую информацию.' },
          { title: 'Репутация и отзывы', desc: 'Ищите отзывы, историю инцидентов и оперативность поддержки.' },
          { title: 'Техническая безопасность', desc: 'Отдавайте предпочтение с 2FA, cold storage и публичными аудитами.' },
          { title: 'Комиссии и ликвидность', desc: 'Сравнивайте комиссии за торговлю, депозиты и выводы; большая ликвидность снижает спреды.' }
        ],
        more: 'Раздел также объясняет кастодиальные и некостодиальные решения, работу кошельков и рекомендации для новичков.'
      },
      ar: {
        title: 'منصات آمنة لشراء العملات المشفرة',
        subtitle: 'ما الذي يجب التحقق منه وكيف تختار منصة موثوقة',
        points: [
          { title: 'التراخيص والتنظيم', desc: 'تحقق مما إذا كانت المنصة خاضعة للتنظيم وتنشر معلومات قانونية واضحة.' },
          { title: 'السمعة والمراجعات', desc: 'ابحث عن التقييمات وتاريخ الحوادث واستجابة الدعم.' },
          { title: 'الأمان الفني', desc: 'اختر منصات تدعم 2FA، التخزين البارد والتدقيقات العامة.' },
          { title: 'الرسوم والسيولة', desc: 'قارن الرسوم على التداول والإيداع والسحب؛ السيولة الأعلى تقلل الفروقات.' }
        ],
        more: 'تشرح هذه الفقرة أيضاً الحفظ custody (مخزن أم لا)، واستخدام المحافظ، وتوصيات للمبتدئين.'
      }
    };

    const t = texts[currentLanguage] || texts.es;

    return (
      <section className="py-16" style={{backgroundColor:'var(--surface-color)'}} data-name="secure-platforms" data-file="components/SecurePlatformsSection.js">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{color:'var(--text-primary)'}}>{t.title}</h2>
            <p className="text-sm max-w-2xl mx-auto" style={{color:'var(--text-secondary)'}}>{t.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.points.map((p, i) => (
              <div key={i} className="p-4 border rounded" style={{borderColor:'var(--border-color)', backgroundColor:'transparent'}}>
                <h4 className="font-semibold mb-2" style={{color:'var(--text-primary)'}}>{p.title}</h4>
                <p className="text-sm" style={{color:'var(--text-secondary)'}}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 max-w-3xl mx-auto text-sm" style={{color:'var(--text-secondary)'}}>
            <p>{t.more}</p>
          </div>
        </div>
      </section>
    );
  } catch (err) {
    console.error('SecurePlatformsSection error:', err);
    return null;
  }
}
