
import React from 'react';
import SidebarLayout from '../components/SidebarLayout';
import { AlertTriangle, Stethoscope, Shield, Info } from 'lucide-react';

const Disclaimer = () => {
  return (
    <SidebarLayout>
      <div className="min-h-screen p-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-red-500/20 border border-red-500">
                <AlertTriangle className="w-12 h-12 text-red-500" />
              </div>
            </div>
            <h1 className="font-orbitron text-4xl font-bold text-vital-light mb-2">
              Medical Disclaimer
            </h1>
            <p className="font-exo text-lg text-vital-light/70">
              Important information about VitalCare's limitations and proper use
            </p>
          </div>

          <div className="space-y-8">
            <section className="p-6 rounded-xl bg-red-500/10 backdrop-blur-sm border border-red-500/30 animate-fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h2 className="font-orbitron text-2xl font-bold text-red-400">IMPORTANT NOTICE</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p className="text-red-400 font-semibold text-lg">
                  VitalCare is NOT a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p>
                  The information provided by VitalCare is for educational and informational purposes only. 
                  It should not be used as a replacement for professional medical consultation, diagnosis, 
                  or treatment.
                </p>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Stethoscope className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">Always Consult Healthcare Professionals</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>You should ALWAYS:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Consult with qualified healthcare professionals for medical concerns</li>
                  <li>Seek immediate medical attention for emergencies</li>
                  <li>Verify any health information with licensed medical practitioners</li>
                  <li>Follow your doctor's prescribed treatment plans</li>
                  <li>Discuss any changes to medication or treatment with your physician</li>
                </ul>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Info className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">AI Limitations</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>Our AI technology:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provides general health information, not personalized medical advice</li>
                  <li>Cannot replace clinical examination and professional judgment</li>
                  <li>May not detect all medical conditions or symptoms</li>
                  <li>Should not be used for self-diagnosis or self-treatment</li>
                  <li>Cannot guarantee accuracy for all individual cases</li>
                </ul>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">Emergency Situations</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/30">
                  <p className="text-red-400 font-semibold mb-2">IN CASE OF MEDICAL EMERGENCY:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Call emergency services immediately (911, 999, 112, etc.)</li>
                    <li>Do NOT rely on VitalCare for emergency medical advice</li>
                    <li>Seek immediate professional medical attention</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h2 className="font-orbitron text-2xl font-bold text-vital-light mb-4">Liability Limitation</h2>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>
                  VitalCare and its developers, partners, and affiliates are not liable for any health 
                  outcomes, medical decisions, or consequences resulting from the use of this platform. 
                  Users assume full responsibility for their health decisions and medical care.
                </p>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <h2 className="font-orbitron text-2xl font-bold text-vital-light mb-4">Data Accuracy</h2>
              <div className="font-exo text-vital-light/80">
                <p>
                  While we strive for accuracy, we cannot guarantee that all information provided 
                  is complete, current, or error-free. Always verify health information with 
                  qualified healthcare professionals.
                </p>
                <p className="mt-4 text-sm">Last updated: January 2024</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Disclaimer;
