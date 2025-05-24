import React from 'react';
import SidebarLayout from '../components/SidebarLayout';
import { Shield, Lock, Eye, Database, FileText, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <SidebarLayout>
      <div className="min-h-screen p-6 pt-20 bg-gradient-to-br from-vital-dark via-purple-900 to-vital-dark">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-vital-vibrant/20 border border-vital-vibrant animate-pulse">
                <Shield className="w-12 h-12 text-vital-vibrant" />
              </div>
            </div>
            <h1 className="font-orbitron text-4xl font-bold text-vital-light mb-2 animate-fade-in">
              Privacy Policy
            </h1>
            <p className="font-exo text-lg text-vital-light/70 animate-fade-in delay-300">
              Your privacy and data security are our top priorities at Medithera
            </p>
            <p className="font-exo text-sm text-vital-light/50 mt-2">
              Last updated: January 2024 | Effective from VitalCare platform launch
            </p>
          </div>

          <div className="space-y-8">
            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in hover:border-vital-vibrant transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">Data Collection & Purpose</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>VitalCare by Medithera collects information you provide directly to us for healthcare assistance:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Health symptoms and medical information you share via voice or text</li>
                  <li>Personal information including name, age, gender, and location for localized care</li>
                  <li>Voice recordings when using our multilingual voice chat feature</li>
                  <li>Family health history for genetic disease prediction and preventive care</li>
                  <li>Usage data to improve our AI algorithms and healthcare recommendations</li>
                  <li>Contact information for appointment scheduling and follow-up care</li>
                </ul>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in hover:border-vital-vibrant transition-all duration-300" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">Data Protection & Security</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>We implement industry-leading security measures to protect your health information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for all health data transmission and storage</li>
                  <li>HIPAA-compliant secure cloud storage with regular automated backups</li>
                  <li>Multi-factor authentication and role-based access controls</li>
                  <li>Regular security audits and penetration testing by third-party experts</li>
                  <li>Data anonymization for research and AI model improvement</li>
                  <li>Secure API connections with healthcare providers and institutions</li>
                </ul>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in hover:border-vital-vibrant transition-all duration-300" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">Data Usage & Sharing</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>Your health data is used exclusively for legitimate healthcare purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing personalized healthcare insights and medical recommendations</li>
                  <li>Improving our AI diagnostic capabilities and machine learning models</li>
                  <li>Generating comprehensive health reports and risk assessments</li>
                  <li>Facilitating connections with local healthcare providers when needed</li>
                  <li>Research purposes only with anonymized, de-identified data</li>
                  <li>Emergency situations where immediate medical attention is required</li>
                </ul>
                <div className="p-4 bg-vital-vibrant/10 border border-vital-vibrant/30 rounded-lg">
                  <p className="text-vital-vibrant font-semibold">
                    <strong>Important:</strong> We never sell your personal health information to third parties, 
                    pharmaceutical companies, or insurance providers.
                  </p>
                </div>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in hover:border-vital-vibrant transition-all duration-300" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">Your Rights & Control</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>You have complete control over your health data and privacy:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and download all your personal health data at any time</li>
                  <li>Correct or update inaccurate health information in your profile</li>
                  <li>Delete your account and all associated data permanently</li>
                  <li>Export your health records in standard medical formats</li>
                  <li>Opt-out of data processing for research purposes</li>
                  <li>Control sharing preferences with healthcare providers</li>
                  <li>Receive notifications about how your data is being used</li>
                </ul>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in hover:border-vital-vibrant transition-all duration-300" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">Compliance & Regulations</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>VitalCare complies with international healthcare privacy regulations:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>HIPAA (Health Insurance Portability and Accountability Act) - USA</li>
                  <li>GDPR (General Data Protection Regulation) - European Union</li>
                  <li>Personal Data Protection Act - India</li>
                  <li>ISO 27001 certification for information security management</li>
                  <li>FDA guidelines for AI-powered medical devices</li>
                </ul>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in hover:border-vital-vibrant transition-all duration-300" style={{ animationDelay: '500ms' }}>
              <h2 className="font-orbitron text-2xl font-bold text-vital-light mb-4">Contact Our Privacy Team</h2>
              <div className="font-exo text-vital-light/80">
                <p>For privacy-related questions, data requests, or concerns:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> <span className="text-vital-vibrant">privacy@medithera.com</span></p>
                  <p><strong>Data Protection Officer:</strong> <span className="text-vital-vibrant">dpo@medithera.com</span></p>
                  <p><strong>Founder Contact:</strong> <span className="text-vital-vibrant">leora@medithera.com</span></p>
                  <p><strong>Address:</strong> Medithera Privacy Team, NIT Raipur, Chhattisgarh, India</p>
                </div>
                <p className="mt-6 text-sm text-vital-light/60">
                  This Privacy Policy was last updated in January 2024. We will notify users of any significant 
                  changes via email and platform notifications. Continued use of VitalCare after changes 
                  constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default PrivacyPolicy;
