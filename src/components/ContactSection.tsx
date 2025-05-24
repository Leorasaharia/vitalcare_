
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your interest in VitalCare. We'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6 neon-text">
            Get in Touch
          </h2>
          <p className="font-exo text-lg md:text-xl text-vital-light/80 max-w-3xl mx-auto">
            Have questions about VitalCare? Want to partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-vital-vibrant">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted">
                    <Mail className="w-6 h-6 text-vital-light" />
                  </div>
                  <div>
                    <p className="font-exo font-semibold text-vital-light">Email</p>
                    <p className="font-exo text-vital-light/70">contact@medithera.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted">
                    <Phone className="w-6 h-6 text-vital-light" />
                  </div>
                  <div>
                    <p className="font-exo font-semibold text-vital-light">Toll-Free</p>
                    <p className="font-exo text-vital-light/70">1-800-VITAL-CARE</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted">
                    <MapPin className="w-6 h-6 text-vital-light" />
                  </div>
                  <div>
                    <p className="font-exo font-semibold text-vital-light">Location</p>
                    <p className="font-exo text-vital-light/70">NIT Raipur, Chhattisgarh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 rounded-xl neon-border bg-vital-dark/30 backdrop-blur-sm">
              <h4 className="font-orbitron text-lg font-bold mb-3 text-vital-vibrant">
                Partnership Opportunities
              </h4>
              <p className="font-exo text-vital-light/70 text-sm leading-relaxed mb-4">
                We're actively seeking partnerships with healthcare providers, NGOs, and technology companies 
                to expand VitalCare's reach and impact in underserved communities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-exo bg-vital-vibrant/20 text-vital-vibrant rounded-full border border-vital-vibrant/30">
                  Healthcare Providers
                </span>
                <span className="px-3 py-1 text-xs font-exo bg-vital-vibrant/20 text-vital-vibrant rounded-full border border-vital-vibrant/30">
                  NGOs
                </span>
                <span className="px-3 py-1 text-xs font-exo bg-vital-vibrant/20 text-vital-vibrant rounded-full border border-vital-vibrant/30">
                  Tech Companies
                </span>
                <span className="px-3 py-1 text-xs font-exo bg-vital-vibrant/20 text-vital-vibrant rounded-full border border-vital-vibrant/30">
                  Investors
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-exo font-semibold text-vital-light mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-vital-dark/50 border border-vital-vibrant/50 rounded-lg text-vital-light placeholder-vital-light/50 font-exo focus:outline-none focus:border-vital-vibrant focus:ring-2 focus:ring-vital-vibrant/20"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-exo font-semibold text-vital-light mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-vital-dark/50 border border-vital-vibrant/50 rounded-lg text-vital-light placeholder-vital-light/50 font-exo focus:outline-none focus:border-vital-vibrant focus:ring-2 focus:ring-vital-vibrant/20"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-exo font-semibold text-vital-light mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-vital-dark/50 border border-vital-vibrant/50 rounded-lg text-vital-light placeholder-vital-light/50 font-exo focus:outline-none focus:border-vital-vibrant focus:ring-2 focus:ring-vital-vibrant/20 resize-none"
                  placeholder="Tell us about your inquiry, partnership interest, or how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 text-lg font-exo font-semibold text-vital-dark bg-gradient-to-r from-vital-vibrant to-vital-muted rounded-lg hover:scale-105 transition-all duration-300 neon-glow disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-vital-dark mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-vital-vibrant/30 text-center">
          <p className="font-exo text-vital-light/60 text-sm">
            © 2024 Medithera. All rights reserved. | VitalCare - Revolutionizing Healthcare Access with AI
          </p>
          <p className="font-exo text-vital-light/40 text-xs mt-2">
            Made with ❤️ at NIT Raipur
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
