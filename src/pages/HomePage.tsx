import FaqsSection from '@/components/FaqsSection/FaqsSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import IntroSection from '@/components/IntroSection/IntroSection';
import PrizesSection from '@/components/PrizesSection/PrizesSection';
import TradingGainSection from '@/components/TradingGainSection/TradingGainSection';
import type { FC } from 'react';

const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <PrizesSection className="bg-white" />
      <TradingGainSection />
      <FaqsSection className="!pt-0" />
    </>
  );
};

export default HomePage;
