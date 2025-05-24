
import { useEffect, useState } from "react";
import { Heart, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToChat = () => {
    const element = document.getElementById("chat");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-full neon-border animate-neon-pulse">
              <Heart className="w-16 h-16 text-vital-vibrant" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 neon-text leading-tight">
            Revolutionizing
            <br />
            <span className="gradient-text">Healthcare Access</span>
            <br />
            with AI
          </h1>

          {/* Subheadline */}
          <p className="font-exo text-lg md:text-xl lg:text-2xl mb-8 text-vital-light/80 max-w-3xl mx-auto leading-relaxed">
            VitalCare provides instant, multilingual medical assistance to underserved communities worldwide. 
            Breaking down language barriers and making healthcare accessible to everyone, everywhere.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToChat}
            className="group relative inline-flex items-center px-8 py-4 text-lg font-exo font-semibold text-vital-dark bg-gradient-to-r from-vital-vibrant to-vital-muted rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl neon-glow"
          >
            <span className="relative z-10 flex items-center">
              Start Chatting Now
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-vital-muted to-vital-vibrant opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-vital-vibrant">24/7</div>
              <div className="font-exo text-sm text-vital-light/60">Available</div>
            </div>
            <div className="text-center">
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-vital-vibrant">50+</div>
              <div className="font-exo text-sm text-vital-light/60">Languages</div>
            </div>
            <div className="text-center">
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-vital-vibrant">AI</div>
              <div className="font-exo text-sm text-vital-light/60">Powered</div>
            </div>
            <div className="text-center">
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-vital-vibrant">Free</div>
              <div className="font-exo text-sm text-vital-light/60">Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
