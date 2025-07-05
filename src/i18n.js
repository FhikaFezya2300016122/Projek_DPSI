import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Memuat terjemahan dari server/file publik
  .use(LanguageDetector) // Mendeteksi bahasa pengguna
  .use(initReactI18next) // Mengikat i18next dengan react
  .init({
    supportedLngs: ['en', 'id'], // Bahasa yang didukung
    fallbackLng: 'en', // Bahasa default jika deteksi gagal
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path ke file terjemahan
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;