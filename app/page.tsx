import StatsSection from '@/components/Home/StatsSection';
import SimpleSteps from '@/components/Home/SimpleSteps';
import CustomerReviewCard from '@/components/Home/CustomerReviewCard';
import HeroSection from '@/components/Home/HeroSection';
import InstagramSection from '@/components/Home/InstagramSection';
import AboutPage from '@/components/About/AboutSection';
import LocationPage from '@/components/Location/LocationSection';
import ContactPage from '@/components/Contact/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPage />
      <SimpleSteps />
      <CustomerReviewCard />
      <InstagramSection />
      <LocationPage />
      <ContactPage />
    </>
  );
}
