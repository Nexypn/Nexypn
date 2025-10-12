function CategoryTabs({ selectedCategory, onCategoryChange, currentLanguage }) {
  try {
    const translations = {
      es: {
        all: 'Todo',
        cryptocurrency: 'Criptomonedas',
        blockchain: 'Blockchain',
        nexypn: 'Nexypn'
      },
      en: {
        all: 'All',
        cryptocurrency: 'Cryptocurrencies',
        blockchain: 'Blockchain',
        nexypn: 'Nexypn'
      },
      fr: {
        all: 'Tout',
        cryptocurrency: 'Cryptomonnaies',
        blockchain: 'Blockchain',
        nexypn: 'Nexypn'
      },
      ru: {
        all: 'Все',
        cryptocurrency: 'Криптовалюты',
        blockchain: 'Блокчейн',
        nexypn: 'Nexypn'
      },
      ar: {
        all: 'الكل',
        cryptocurrency: 'العملات المشفرة',
        blockchain: 'البلوك تشين',
        nexypn: 'نيكسيبن'
      }
    };

    const t = translations[currentLanguage];

    const categories = [
      { id: 'All', name: t.all, count: null },
      { id: 'Criptomonedas', name: t.cryptocurrency, count: 1 },
      { id: 'Blockchain', name: t.blockchain, count: 146 },
      { id: 'Bitnovo', name: t.nexypn, count: 330 }
    ];

    return (
      <div className="mb-8" data-name="category-tabs" data-file="components/CategoryTabs.js">
        {/* Desktop Tabs */}
        <div className="hidden md:flex space-x-1 bg-[var(--surface-color)] rounded-lg p-1 max-w-md">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'text-white shadow-sm'
                  : 'hover:bg-[var(--border-color)]'
              }`}
              style={{
                backgroundColor: selectedCategory === category.id ? 'var(--primary-color)' : 'transparent',
                color: selectedCategory === category.id ? 'white' : 'var(--text-primary)'
              }}
            >
              {category.name}
              {category.count && (
                <span className="ml-1 text-xs opacity-75">#{category.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            style={{
              backgroundColor: 'var(--surface-color)',
              color: 'var(--text-primary)',
              borderColor: 'var(--border-color)'
            }}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name} {category.count && `#${category.count}`}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile Tab Buttons */}
        <div className="md:hidden mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'text-white'
                  : 'border hover:border-[var(--primary-color)]'
              }`}
              style={{
                backgroundColor: selectedCategory === category.id ? 'var(--primary-color)' : 'transparent',
                color: selectedCategory === category.id ? 'white' : 'var(--text-primary)',
                borderColor: selectedCategory === category.id ? 'var(--primary-color)' : 'var(--border-color)'
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('CategoryTabs component error:', error);
    return null;
  }
}