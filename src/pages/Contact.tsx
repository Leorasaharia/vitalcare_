
import React, { useState } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Building, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@medithera.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91-XXX-XXX-XXXX",
      subtitle: "Mon-Fri, 9AM-6PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "NIT Raipur, Chhattisgarh, India",
      subtitle: "Academic Institution Campus"
    },
    {
      icon: Building,
      title: "Headquarters",
      details: "Medithera Startup",
      subtitle: "Biomedical Engineering Dept."
    }
  ];

  const team = [
    {
      name: "Leora Saharia",
      role: "Founder & CEO",
      email: "leora@medithera.com",
      department: "Leadership & Vision"
    },
    {
      name: "Dr. Mainak Basu",
      role: "Biomedical Mentor",
      email: "mainak@nitraipur.ac.in",
      department: "Biomedical Applications"
    },
    {
      name: "Dr. Saurabh Gupta",
      role: "AI & Data Science Mentor",
      email: "saurabh@nitraipur.ac.in",
      department: "Technical Development"
    }
  ];

  return (
    <SidebarLayout>
      <div className="min-h-screen p-6 pt-20 bg-gradient-to-br from-vital-dark via-purple-900 to-vital-dark">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="p-6 rounded-full bg-vital-vibrant/20 border border-vital-vibrant animate-pulse">
                  <MessageSquare className="w-16 h-16 text-vital-vibrant" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-vital-vibrant/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-2 border-vital-muted/20 animate-ping delay-500" style={{ transform: 'scale(1.2)' }}></div>
              </div>
            </div>
            <h1 className="font-orbitron text-5xl font-bold text-vital-light mb-4 animate-fade-in">
              Contact Medithera
            </h1>
            <p className="font-exo text-xl text-vital-light/70 max-w-3xl mx-auto animate-fade-in delay-300">
              Get in touch with our team. We're here to help with questions about VitalCare, 
              partnerships, or healthcare innovation opportunities.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 hover:border-vital-vibrant hover:scale-105 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-vital-vibrant/20 group-hover:bg-vital-vibrant/30 transition-colors">
                    <info.icon className="w-6 h-6 text-vital-vibrant" />
                  </div>
                </div>
                <h3 className="font-orbitron text-lg font-bold text-vital-light mb-2 group-hover:text-vital-vibrant transition-colors">
                  {info.title}
                </h3>
                <p className="font-exo text-vital-light/80 mb-1">{info.details}</p>
                <p className="font-exo text-sm text-vital-light/60">{info.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-vital-dark/50 backdrop-blur-sm rounded-xl border border-vital-vibrant/30 p-8 animate-fade-in">
              <h2 className="font-orbitron text-2xl font-bold text-vital-light mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-exo text-vital-light/80 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-vital-dark border border-vital-vibrant/30 text-vital-light placeholder-vital-light/50 focus:outline-none focus:border-vital-vibrant transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-exo text-vital-light/80 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-vital-dark border border-vital-vibrant/30 text-vital-light placeholder-vital-light/50 focus:outline-none focus:border-vital-vibrant transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-exo text-vital-light/80 mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-vital-dark border border-vital-vibrant/30 text-vital-light placeholder-vital-light/50 focus:outline-none focus:border-vital-vibrant transition-colors"
                      placeholder="Message subject"
                    />
                  </div>
                  <div>
                    <label className="block font-exo text-vital-light/80 mb-2">Inquiry Type</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-vital-dark border border-vital-vibrant/30 text-vital-light focus:outline-none focus:border-vital-vibrant transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="media">Media & Press</option>
                      <option value="investment">Investment Opportunity</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-exo text-vital-light/80 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-vital-dark border border-vital-vibrant/30 text-vital-light placeholder-vital-light/50 focus:outline-none focus:border-vital-vibrant transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-vital-vibrant to-vital-muted rounded-lg font-exo font-semibold text-vital-light hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-vital-vibrant/30"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Team Directory */}
            <div className="space-y-6">
              <div className="bg-vital-dark/50 backdrop-blur-sm rounded-xl border border-vital-vibrant/30 p-6 animate-fade-in">
                <h3 className="font-orbitron text-xl font-bold text-vital-light mb-6">
                  Team Directory
                </h3>
                
                <div className="space-y-4">
                  {team.map((member, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-vital-vibrant/10 border border-vital-vibrant/20 hover:border-vital-vibrant/40 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="font-orbitron text-sm font-bold text-vital-light">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-orbitron text-sm font-bold text-vital-light group-hover:text-vital-vibrant transition-colors">
                            {member.name}
                          </h4>
                          <p className="font-exo text-xs text-vital-vibrant">{member.role}</p>
                        </div>
                      </div>
                      <p className="font-exo text-xs text-vital-light/60 mb-2">{member.department}</p>
                      <a
                        href={`mailto:${member.email}`}
                        className="font-exo text-xs text-vital-muted hover:text-vital-vibrant transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-vital-dark/50 backdrop-blur-sm rounded-xl border border-vital-vibrant/30 p-6 animate-fade-in">
                <h3 className="font-orbitron text-xl font-bold text-vital-light mb-4">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-vital-vibrant" />
                    <div>
                      <p className="font-exo text-vital-light/80 text-sm">Monday - Friday</p>
                      <p className="font-exo text-vital-light/60 text-xs">9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-vital-muted" />
                    <div>
                      <p className="font-exo text-vital-light/80 text-sm">Weekend</p>
                      <p className="font-exo text-vital-light/60 text-xs">Emergency Support Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Quick Links */}
          <div className="bg-gradient-to-r from-vital-vibrant/10 to-vital-muted/10 border border-vital-vibrant/30 rounded-xl p-8 text-center animate-fade-in">
            <h2 className="font-orbitron text-2xl font-bold text-vital-light mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-exo text-vital-light/70 mb-6 max-w-2xl mx-auto">
              Before reaching out, you might find answers to common questions about VitalCare, 
              our services, and partnership opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-vital-vibrant/20 hover:bg-vital-vibrant/30 border border-vital-vibrant/30 rounded-lg font-exo text-vital-vibrant hover:scale-105 transition-all duration-300">
                Technical Support
              </button>
              <button className="px-6 py-3 bg-vital-muted/20 hover:bg-vital-muted/30 border border-vital-muted/30 rounded-lg font-exo text-vital-muted hover:scale-105 transition-all duration-300">
                Partnership Info
              </button>
              <button className="px-6 py-3 bg-vital-pastel/20 hover:bg-vital-pastel/30 border border-vital-pastel/30 rounded-lg font-exo text-vital-pastel hover:scale-105 transition-all duration-300">
                Platform Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Contact;
