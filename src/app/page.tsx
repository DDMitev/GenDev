import HeroSection from '../components/sections/home/HeroSection';
import ServicesSection from '../components/sections/home/ServicesSection';
import FeaturedProjectSection from '../components/sections/home/FeaturedProjectSection';
import CTASection from '../components/sections/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjectSection />
      <CTASection />
    </>
  );
}
