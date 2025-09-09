import { Navigation } from './landing/Navigation';
import { HeroSection } from './landing/HeroSection';
import { ProductFeaturesSection } from './landing/ProductFeaturesSection';
import { AboutSection } from './landing/AboutSection';
import { BenefitsSection } from './landing/BenefitsSection';
import { TestimonialsSection } from './landing/TestimonialsSection';
import { FAQSection } from './landing/FAQSection';
import { ImpactSection } from './landing/ImpactSection';


export default function ByteexLanding() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductFeaturesSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <ImpactSection />
    </div>
  );
}

export { ByteexLanding };
