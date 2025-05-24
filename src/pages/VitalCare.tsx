
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ChatSection from "@/components/ChatSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const VitalCare = () => {
  return (
    <div className="min-h-screen bg-vital-dark text-vital-light overflow-x-hidden">
      <div className="animated-grid fixed inset-0 z-0"></div>
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <ChatSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default VitalCare;
