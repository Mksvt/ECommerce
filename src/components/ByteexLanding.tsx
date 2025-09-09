import { Navigation } from './landing/Navigation';
import { HeroSection } from './landing/HeroSection';
import { ProductFeaturesSection } from './landing/ProductFeaturesSection';
import { AboutSection } from './landing/AboutSection';
import { BenefitsSection } from './landing/BenefitsSection';
import { TestimonialsSection } from './landing/TestimonialsSection';
import { FAQSection } from './landing/FAQSection';
import { ImpactSection } from './landing/ImpactSection';
import { useLandingContent } from '../hooks/useLandingContent';

export default function ByteexLanding() {
  const { document, loading, error } = useLandingContent();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!document) {
    return <div>No content available</div>;
  }

  const data = document.data;

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection
        title={data.hero_title}
        subtitle={data.hero_subtitle}
        description={data.hero_description}
        buttonText={data.hero_button_text}
        image={data.hero_image}
      />
      <ProductFeaturesSection features={data.features} />
      <AboutSection
        title={data.about_title}
        description={data.about_description}
        image={data.about_image}
      />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection faqTitle={data.faq_title} faqItems={data.faq_items} />
      <ImpactSection impactItems={data.impact_items} />
    </div>
  );
}

export { ByteexLanding };
