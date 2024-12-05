import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CarbonometerSection from './sections/CarbonometerSection';

export default function MainSection() {
  return (
    <main className="bg-gray-50">
      <HeroSection />
      <AboutSection />
      <CarbonometerSection />
    </main>
  );
}
