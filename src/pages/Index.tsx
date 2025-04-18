import { HeroSection } from "@/components/HeroSection";
import { StepsSection } from "@/components/StepsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AudienceSection } from "@/components/AudienceSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StepsSection />
      <FeaturesSection />
      <AudienceSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
