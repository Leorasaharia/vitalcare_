
import React from 'react';
import SidebarLayout from '../components/SidebarLayout';
import { FileCheck, Scale, AlertTriangle, Users } from 'lucide-react';

const TermsOfService = () => {
  return (
    <SidebarLayout>
      <div className="min-h-screen p-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-vital-vibrant/20 border border-vital-vibrant">
                <FileCheck className="w-12 h-12 text-vital-vibrant" />
              </div>
            </div>
            <h1 className="font-orbitron text-4xl font-bold text-vital-light mb-2">
              Terms of Service
            </h1>
            <p className="font-exo text-lg text-vital-light/70">
              Please read these terms carefully before using VitalCare
            </p>
          </div>

          <div className="space-y-8">
            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>
                  By accessing and using VitalCare, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">Medical Disclaimer</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p className="text-vital-vibrant font-semibold">
                  VitalCare is not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p>
                  Always seek the advice of your physician or other qualified health provider with any 
                  questions you may have regarding a medical condition. Never disregard professional 
                  medical advice or delay in seeking it because of something you have read on VitalCare.
                </p>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">User Responsibilities</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>As a user of VitalCare, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and truthful health information</li>
                  <li>Use the service for lawful purposes only</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Not share your account with others</li>
                  <li>Report any security breaches immediately</li>
                </ul>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h2 className="font-orbitron text-2xl font-bold text-vital-light mb-4">Service Availability</h2>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>
                  We strive to provide 24/7 service availability, but we do not guarantee uninterrupted 
                  access. We reserve the right to modify, suspend, or discontinue the service at any time 
                  without prior notice.
                </p>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h2 className="font-orbitron text-2xl font-bold text-vital-light mb-4">Limitation of Liability</h2>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>
                  VitalCare shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, including without limitation, loss of profits, data, use, 
                  goodwill, or other intangible losses.
                </p>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <h2 className="font-orbitron text-2xl font-bold text-vital-light mb-4">Changes to Terms</h2>
              <div className="font-exo text-vital-light/80">
                <p>
                  We reserve the right to modify these terms at any time. Users will be notified 
                  of significant changes via email or through the platform.
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

export default TermsOfService;
