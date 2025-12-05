import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import AudienceSection from "@/components/AudienceSection";
import HostsSection from "@/components/HostsSection";
import BonusSection from "@/components/BonusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <BenefitsSection />
      <AudienceSection />
      <HostsSection />
      <BonusSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
};

export default Index;
