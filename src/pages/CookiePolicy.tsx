
import React from 'react';
import SidebarLayout from '../components/SidebarLayout';
import { Cookie, Settings, Info, Shield } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <SidebarLayout>
      <div className="min-h-screen p-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-vital-vibrant/20 border border-vital-vibrant">
                <Cookie className="w-12 h-12 text-vital-vibrant" />
              </div>
            </div>
            <h1 className="font-orbitron text-4xl font-bold text-vital-light mb-2">
              Cookie Policy
            </h1>
            <p className="font-exo text-lg text-vital-light/70">
              How we use cookies to enhance your VitalCare experience
            </p>
          </div>

          <div className="space-y-8">
            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <Info className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">What are Cookies?</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>
                  Cookies are small text files stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences 
                  and analyzing how you use our service.
                </p>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">Types of Cookies We Use</h2>
              </div>
              <div className="space-y-6 font-exo text-vital-light/80">
                <div>
                  <h3 className="text-vital-vibrant font-semibold mb-2">Essential Cookies</h3>
                  <p>Required for the website to function properly. These cannot be disabled.</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Authentication and security</li>
                    <li>Session management</li>
                    <li>Load balancing</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-vital-muted font-semibold mb-2">Performance Cookies</h3>
                  <p>Help us understand how visitors interact with our website.</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Google Analytics</li>
                    <li>Page load times</li>
                    <li>Error tracking</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-vital-pastel font-semibold mb-2">Functional Cookies</h3>
                  <p>Remember your preferences and settings.</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Language preferences</li>
                    <li>Theme settings</li>
                    <li>Dashboard layout</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-vital-vibrant" />
                <h2 className="font-orbitron text-2xl font-bold text-vital-light">Cookie Management</h2>
              </div>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>You can control cookies through:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browser settings - disable or delete cookies</li>
                  <li>Our cookie consent banner - customize preferences</li>
                  <li>Account settings - manage functional cookies</li>
                </ul>
                <div className="mt-6 p-4 rounded-lg bg-vital-vibrant/10 border border-vital-vibrant/20">
                  <p className="text-vital-vibrant font-semibold">
                    Note: Disabling essential cookies may affect website functionality.
                  </p>
                </div>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h2 className="font-orbitron text-2xl font-bold text-vital-light mb-4">Third-Party Cookies</h2>
              <div className="space-y-4 font-exo text-vital-light/80">
                <p>We may use third-party services that set their own cookies:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Google Analytics for usage statistics</li>
                  <li>Security providers for fraud protection</li>
                  <li>CDN providers for faster content delivery</li>
                </ul>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h2 className="font-orbitron text-2xl font-bold text-vital-light mb-4">Contact Us</h2>
              <div className="font-exo text-vital-light/80">
                <p>Questions about our cookie policy? Contact us at:</p>
                <p className="mt-2 text-vital-vibrant">cookies@vitalcare.com</p>
                <p className="mt-4 text-sm">Last updated: January 2024</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default CookiePolicy;
