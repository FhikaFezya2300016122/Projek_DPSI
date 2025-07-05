import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LanguagePage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Bahasa Indonesia' },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <Link to="/settings" className="p-2 rounded-full hover:bg-gray-200 mr-3">&larr;</Link>
        <div>
          <p className="text-sm text-gray-500">{t('settings_title')} &gt; {t('language')}</p>
          <h1 className="text-3xl font-bold">{t('language')}</h1>
        </div>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">{t('select_language')}</p>
        <div className="space-y-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left p-4 font-semibold rounded-lg border-2 transition-colors ${
                i18n.language === lang.code
                  ? 'bg-teal-50 border-teal-500 text-teal-600'
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-400'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}