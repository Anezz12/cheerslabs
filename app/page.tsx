import StatsSection from '@/components/StatsSection';
import SimpleSteps from '@/components/SimpleSteps';
import CustomerReviewCard from '@/components/CustomerReviewCard';
import HeroSection from '@/components/HeroSection';
import Team from '@/components/Team';
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SimpleSteps />
      <CustomerReviewCard />
      <Team />
    </>
  );
}
