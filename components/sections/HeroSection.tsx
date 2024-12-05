import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../LanguageSwitcher';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center">
      <LanguageSwitcher />
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {t('title')}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {t('subtitle')}
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {t('cta')}
        </button>
      </div>
    </section>
  );
}
