
import React, { useState, useRef, useEffect } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import { 
  Heart, 
  Mic, 
  Database, 
  Brain, 
  Shield, 
  Globe, 
  Phone, 
  FileText,
  TrendingUp,
  Users,
  Clock,
  Activity,
  Stethoscope,
  Languages,
  MapPin
} from 'lucide-react';

const Features = () => {
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

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced machine learning algorithms analyze health patterns to provide precise medical diagnoses using comprehensive medical databases",
      color: "vital-vibrant"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Uses advanced NLP technology to interpret symptoms and provide healthcare assistance in 50+ languages for global accessibility",
      color: "vital-muted"
    },
    {
      icon: Mic,
      title: "Voice & Text Input",
      description: "Supports both voice recordings and text input, accommodating users with limited literacy levels and diverse communication preferences",
      color: "vital-pastel"
    },
    {
      icon: Stethoscope,
      title: "Accurate Medical Analysis",
      description: "Provides precise diagnoses using advanced algorithms and comprehensive medical database with continuous expert validation",
      color: "vital-vibrant"
    },
    {
      icon: MapPin,
      title: "Local Healthcare Integration",
      description: "Connects users with nearby healthcare providers and assists with appointment scheduling for seamless care transitions",
      color: "vital-muted"
    },
    {
      icon: Phone,
      title: "Toll-Free Access",
      description: "Ensures accessibility through toll-free phone lines for users without smartphones or reliable internet connectivity",
      color: "vital-pastel"
    },
    {
      icon: Heart,
      title: "Genetic Disease Prediction",
      description: "Offers preventive care insights based on family health history and genetic predispositions for early intervention",
      color: "vital-vibrant"
    },
    {
      icon: TrendingUp,
      title: "Health Analytics",
      description: "Comprehensive health insights with trends, predictions, and personalized recommendations based on your health data",
      color: "vital-muted"
    },
    {
      icon: Shield,
      title: "Secure Data Protection",
      description: "Enterprise-grade encryption and HIPAA compliance ensures your sensitive health information remains private and secure",
      color: "vital-pastel"
    },
    {
      icon: FileText,
      title: "Digital Health Records",
      description: "Complete digitization of physical medical reports with AI-powered data extraction and structured digital formatting",
      color: "vital-vibrant"
    },
    {
      icon: Activity,
      title: "Real-time Health Monitoring",
      description: "Continuous health monitoring with instant alerts for critical health changes and proactive care recommendations",
      color: "vital-muted"
    },
    {
      icon: Clock,
      title: "24/7 Healthcare Support",
      description: "Round-the-clock AI assistance for health queries, emergency guidance, and immediate medical consultation",
      color: "vital-pastel"
    }
  ];

  return (
    <SidebarLayout>
      <div className="min-h-screen p-6 pt-20 bg-gradient-to-br from-vital-dark via-purple-900 to-vital-dark">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="p-6 rounded-full bg-vital-vibrant/20 border border-vital-vibrant animate-pulse">
                  <Heart className="w-16 h-16 text-vital-vibrant" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-vital-vibrant/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-2 border-vital-muted/20 animate-ping delay-500" style={{ transform: 'scale(1.2)' }}></div>
              </div>
            </div>
            <h1 className="font-orbitron text-5xl font-bold text-vital-light mb-4 animate-fade-in">
              VitalCare Features
            </h1>
            <p className="font-exo text-xl text-vital-light/70 max-w-4xl mx-auto animate-fade-in delay-300">
              Comprehensive AI-powered healthcare platform designed to revolutionize healthcare accessibility 
              for underserved communities worldwide through innovative technology solutions
            </p>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "AI", label: "Powered Diagnostics", icon: Brain },
              { number: "50+", label: "Languages Supported", icon: Languages },
              { number: "24/7", label: "Available Support", icon: Clock },
              { number: "100%", label: "Data Security", icon: Shield }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 hover:scale-105 hover:border-vital-vibrant transition-all duration-300 animate-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-vital-vibrant group-hover:scale-110 transition-transform" />
                </div>
                <div className="font-orbitron text-3xl font-bold text-vital-vibrant mb-2 group-hover:text-vital-muted transition-colors">{stat.number}</div>
                <div className="font-exo text-sm text-vital-light/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`
                  group p-8 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30
                  hover:border-vital-vibrant hover:scale-105 transition-all duration-500 cursor-pointer
                  relative overflow-hidden hover:shadow-2xl hover:shadow-vital-vibrant/20
                  ${visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                  }
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-vital-vibrant/5 to-vital-muted/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated top border */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-vital-vibrant to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="mb-6 flex justify-center relative z-10">
                  <div className={`p-4 rounded-full bg-${feature.color}/20 border border-${feature.color}/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-orbitron text-xl font-bold mb-4 text-center text-vital-light group-hover:text-vital-vibrant transition-colors duration-300 relative z-10">
                  {feature.title}
                </h3>

                <p className="font-exo text-vital-light/70 text-center leading-relaxed relative z-10 group-hover:text-vital-light/90 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Animated bottom border */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-vital-vibrant to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mt-20 text-center p-8 rounded-xl bg-gradient-to-r from-vital-vibrant/10 to-vital-muted/10 border border-vital-vibrant/30 animate-fade-in">
            <h2 className="font-orbitron text-3xl font-bold text-vital-light mb-4">
              Our Mission
            </h2>
            <p className="font-exo text-lg text-vital-light/70 mb-6 max-w-4xl mx-auto leading-relaxed">
              To bridge healthcare disparities by providing immediate, multilingual medical assistance to remote and 
              underserved communities worldwide. VitalCare by Medithera is committed to making quality healthcare 
              accessible to everyone, everywhere, regardless of language, location, or economic status.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="px-4 py-2 bg-vital-vibrant/20 rounded-lg border border-vital-vibrant/30">
                <span className="font-exo text-vital-vibrant font-semibold">Founded by Leora Saharia</span>
              </div>
              <div className="px-4 py-2 bg-vital-muted/20 rounded-lg border border-vital-muted/30">
                <span className="font-exo text-vital-muted font-semibold">NIT Raipur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Features;
