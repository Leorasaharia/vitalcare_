
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowRight, Shield, Zap, Users, Globe, Stethoscope, Phone, Brain } from 'lucide-react';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced ML algorithms provide precise medical diagnoses using comprehensive medical databases"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Healthcare assistance in 50+ languages using advanced NLP technology for inclusive access"
    },
    {
      icon: Phone,
      title: "Toll-Free Access",
      description: "Accessible via smartphones, computers, or toll-free phone lines for users without internet"
    },
    {
      icon: Stethoscope,
      title: "Comprehensive Care",
      description: "From diagnostics to nutrition advice, genetic predictions, and local healthcare connections"
    }
  ];

  const handleGetStarted = () => {
    navigate('/auth');
  };

  const handleLearnMore = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-vital-dark via-purple-900 to-vital-dark overflow-hidden relative">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(154,72,208,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(154,72,208,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-vital-vibrant rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-vital-muted rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-vital-pastel rounded-full animate-ping delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Hero Icon */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="p-8 rounded-full bg-vital-vibrant/20 backdrop-blur-sm border border-vital-vibrant animate-pulse">
                <Heart className="w-24 h-24 text-vital-vibrant" />
              </div>
              {/* Concentric Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-vital-vibrant/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-vital-muted/20 animate-ping delay-700" style={{ transform: 'scale(1.3)' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-vital-pastel/10 animate-ping delay-1000" style={{ transform: 'scale(1.6)' }}></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-8 text-vital-light leading-tight">
            <span className="inline-block animate-fade-in">Revolutionizing</span>
            <br />
            <span className="bg-gradient-to-r from-vital-vibrant via-vital-muted to-vital-pastel bg-clip-text text-transparent animate-fade-in delay-300">
              Healthcare Access
            </span>
            <br />
            <span className="inline-block animate-fade-in delay-500">with AI</span>
          </h1>

          {/* Subheadline */}
          <p className="font-exo text-xl md:text-2xl mb-12 text-vital-light/80 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-700">
            VitalCare by Medithera provides immediate, multilingual medical assistance to underserved communities worldwide. 
            Breaking down language barriers and making healthcare accessible to everyone, everywhere.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in delay-1000">
            <button
              onClick={handleGetStarted}
              className="group px-10 py-5 bg-gradient-to-r from-vital-vibrant to-vital-muted rounded-lg font-exo font-semibold text-vital-light text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-vital-vibrant/40 flex items-center transform hover:-translate-y-1"
            >
              Get Started Free
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              onClick={handleLearnMore}
              className="px-10 py-5 border-2 border-vital-vibrant text-vital-vibrant rounded-lg font-exo font-semibold text-lg transition-all duration-300 hover:bg-vital-vibrant hover:text-vital-dark hover:scale-105 transform hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in delay-1200">
            {[
              { number: "24/7", label: "Available Support" },
              { number: "50+", label: "Languages Supported" },
              { number: "AI", label: "Powered Diagnostics" },
              { number: "Free", label: "Basic Access" }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="font-orbitron text-3xl md:text-4xl font-bold text-vital-vibrant mb-2 group-hover:text-vital-muted transition-colors">
                  {stat.number}
                </div>
                <div className="font-exo text-sm text-vital-light/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4 text-vital-light animate-fade-in">
            Core Features
          </h2>
          <p className="font-exo text-xl text-center mb-16 text-vital-light/70 max-w-3xl mx-auto animate-fade-in delay-300">
            Comprehensive AI-powered healthcare platform designed for underserved communities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 transition-all duration-500 hover:scale-105 hover:border-vital-vibrant hover:shadow-2xl hover:shadow-vital-vibrant/20 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 200 + 500}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-vital-light" />
                  </div>
                </div>
                <h3 className="font-orbitron text-xl font-bold mb-4 text-center text-vital-light group-hover:text-vital-vibrant transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-exo text-sm text-vital-light/70 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Medithera Section */}
      <section className="py-20 px-4 bg-vital-dark/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-orbitron text-4xl font-bold text-vital-light mb-8 animate-fade-in">
            About Medithera
          </h2>
          <p className="font-exo text-lg text-vital-light/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
            A pioneering seed-stage startup founded by Leora Saharia, a Biomedical Engineering student at NIT Raipur. 
            Medithera is revolutionizing healthcare accessibility through innovative AI solutions, with mentorship from 
            leading experts in biomedical engineering and AI.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { name: "Leora Saharia", role: "Founder & CEO", desc: "B.Tech Biomedical Engineering, NIT Raipur" },
              { name: "Dr. Mainak Basu", role: "Mentor", desc: "Associate Professor, Biomedical Engineering" },
              { name: "Dr. Saurabh Gupta", role: "Mentor", desc: "Assistant Professor, AI & Data Science" }
            ].map((member, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-vital-vibrant/10 border border-vital-vibrant/30 hover:border-vital-vibrant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 200 + 600}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted mx-auto mb-4 flex items-center justify-center">
                  <span className="font-orbitron text-xl font-bold text-vital-light">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-orbitron text-lg font-bold text-vital-light mb-2">{member.name}</h3>
                <p className="font-exo text-vital-vibrant text-sm font-semibold mb-2">{member.role}</p>
                <p className="font-exo text-vital-light/60 text-xs">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-vital-vibrant/30 bg-vital-dark/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-orbitron text-3xl font-bold text-vital-light mb-6 md:mb-0">
              VitalCare
              <span className="block text-sm font-exo text-vital-light/60 font-normal">by Medithera</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <button onClick={() => navigate('/privacy-policy')} className="text-vital-light/60 hover:text-vital-vibrant transition-colors font-exo hover:scale-105 transform">
                Privacy Policy
              </button>
              <button onClick={() => navigate('/terms-of-service')} className="text-vital-light/60 hover:text-vital-vibrant transition-colors font-exo hover:scale-105 transform">
                Terms of Service
              </button>
              <button onClick={() => navigate('/cookie-policy')} className="text-vital-light/60 hover:text-vital-vibrant transition-colors font-exo hover:scale-105 transform">
                Cookie Policy
              </button>
              <button onClick={() => navigate('/disclaimer')} className="text-vital-light/60 hover:text-vital-vibrant transition-colors font-exo hover:scale-105 transform">
                Disclaimer
              </button>
              <button onClick={() => navigate('/contact')} className="text-vital-light/60 hover:text-vital-vibrant transition-colors font-exo hover:scale-105 transform">
                Contact
              </button>
            </div>
          </div>
          <div className="mt-8 text-center text-vital-light/40 font-exo text-sm">
            © 2024 VitalCare by Medithera. All rights reserved. | Founded by Leora Saharia, NIT Raipur
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
