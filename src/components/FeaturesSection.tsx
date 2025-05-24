
import { useEffect, useRef, useState } from "react";
import { 
  Globe, 
  Mic, 
  Stethoscope, 
  Heart, 
  Pill, 
  Apple, 
  AlertTriangle,
  Dna
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Communicate in 20+ languages with advanced NLP technology for inclusive healthcare access."
  },
  {
    icon: Mic,
    title: "Voice & Text Input",
    description: "Supports both voice recordings and text input, perfect for users with varying literacy levels."
  },
  {
    icon: Stethoscope,
    title: "Accurate Diagnoses",
    description: "AI-powered medical database provides precise diagnoses using advanced algorithms."
  },
  {
    icon: Heart,
    title: "Doctor Recommendations",
    description: "Connect with local healthcare providers and get assistance with appointment scheduling."
  },
  {
    icon: Pill,
    title: "Prescription Assistance",
    description: "Get recommendations for over-the-counter medications and treatment options."
  },
  {
    icon: Apple,
    title: "Nutrition Advice",
    description: "Receive tailored dietary recommendations based on your regional practices and needs."
  },
  {
    icon: AlertTriangle,
    title: "Virus Updates",
    description: "Stay informed about new viruses, preventive measures, and public health alerts."
  },
  {
    icon: Dna,
    title: "Genetic Insights",
    description: "Get preventive care insights based on family health history and genetic predispositions."
  }
];

const FeaturesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6 neon-text">
            Powerful Features
          </h2>
          <p className="font-exo text-lg md:text-xl text-vital-light/80 max-w-3xl mx-auto">
            Comprehensive healthcare assistance designed for accessibility, accuracy, and inclusivity
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`
                group p-6 rounded-xl neon-border bg-vital-dark/50 backdrop-blur-sm
                transition-all duration-500 hover:scale-105 hover:neon-glow cursor-pointer
                ${visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-vital-light" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-orbitron text-xl font-bold mb-3 text-center text-vital-light group-hover:text-vital-vibrant transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-exo text-sm text-vital-light/70 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-exo text-lg text-vital-light/60 mb-4">
            Ready to experience the future of healthcare?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("chat");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-6 py-3 text-lg font-exo font-semibold text-vital-dark bg-gradient-to-r from-vital-vibrant to-vital-muted rounded-lg hover:scale-105 transition-all duration-300 neon-glow"
          >
            Try VitalCare Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
