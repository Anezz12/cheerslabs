import StatsSection from '@/components/Home/StatsSection';
import SimpleSteps from '@/components/Home/SimpleSteps';
import CustomerReviewCard from '@/components/Home/CustomerReviewCard';
import HeroSection from '@/components/Home/HeroSection';
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SimpleSteps />
      <CustomerReviewCard />
    </>
  );
}
