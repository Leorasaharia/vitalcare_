import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Menu, 
  X, 
  Home, 
  FileText, 
  Mic, 
  Heart,
  LogOut,
  User,
  HelpCircle,
  Shield,
  Cookie,
  FileCheck,
  AlertTriangle,
  Activity,
  Brain,
  Settings
} from 'lucide-react';

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard', action: () => handleNavigation('/dashboard') },
    { icon: FileText, label: 'Health Records', path: '/health-records', action: () => handleNavigation('/health-records') },
    { icon: Mic, label: 'Voice Chat', path: '/voice-chat', action: () => handleNavigation('/voice-chat') },
    { icon: Settings, label: 'Settings', path: '/settings', action: () => handleNavigation('/settings') },
    { icon: Brain, label: 'Features', path: '/features', action: () => handleNavigation('/features') },
    { icon: HelpCircle, label: 'About Us', path: '/about', action: () => handleNavigation('/about') },
    { icon: User, label: 'Contact', path: '/contact', action: () => handleNavigation('/contact') },
  ];

  const legalItems = [
    { icon: Shield, label: 'Privacy Policy', path: '/privacy-policy', action: () => handleNavigation('/privacy-policy') },
    { icon: FileCheck, label: 'Terms of Service', path: '/terms-of-service', action: () => handleNavigation('/terms-of-service') },
    { icon: Cookie, label: 'Cookie Policy', path: '/cookie-policy', action: () => handleNavigation('/cookie-policy') },
    { icon: AlertTriangle, label: 'Disclaimer', path: '/disclaimer', action: () => handleNavigation('/disclaimer') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-vital-dark via-purple-900 to-vital-dark relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(154,72,208,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(154,72,208,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-3 rounded-lg bg-vital-dark/80 backdrop-blur-sm border border-vital-vibrant/30 text-vital-light hover:bg-vital-vibrant/20 hover:scale-110 transition-all duration-300 group"
      >
        {isOpen ? (
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        )}
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-80 bg-vital-dark/95 backdrop-blur-md border-r border-vital-vibrant/30 transform transition-all duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-vital-vibrant/30">
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="p-2 rounded-full bg-vital-vibrant/20 border border-vital-vibrant animate-pulse">
                <Heart className="w-8 h-8 text-vital-vibrant" />
              </div>
              <div>
                <h2 className="font-orbitron text-xl font-bold text-vital-light">VitalCare</h2>
                <p className="font-exo text-sm text-vital-light/60">by Medithera</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-vital-vibrant/10 rounded-lg border border-vital-vibrant/20">
              <p className="font-exo text-sm text-vital-light">Welcome back,</p>
              <p className="font-orbitron text-vital-vibrant font-semibold">{user?.name || 'Leora Saharia'}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <div className="mb-6">
              <h3 className="font-exo text-xs uppercase text-vital-light/50 mb-3 tracking-wider">Main Menu</h3>
              {menuItems.map((item, index) => (
                <button
                  key={item.path}
                  onClick={item.action}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group animate-fade-in ${
                    location.pathname === item.path
                      ? 'bg-vital-vibrant/20 text-vital-vibrant border border-vital-vibrant/30 shadow-lg shadow-vital-vibrant/20'
                      : 'text-vital-light/70 hover:bg-vital-vibrant/10 hover:text-vital-vibrant hover:scale-105'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-exo">{item.label}</span>
                  {location.pathname === item.path && (
                    <div className="ml-auto w-2 h-2 bg-vital-vibrant rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="font-exo text-xs uppercase text-vital-light/50 mb-3 tracking-wider">Legal & Policies</h3>
              {legalItems.map((item, index) => (
                <button
                  key={item.path}
                  onClick={item.action}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group animate-fade-in ${
                    location.pathname === item.path
                      ? 'bg-vital-vibrant/20 text-vital-vibrant border border-vital-vibrant/30'
                      : 'text-vital-light/70 hover:bg-vital-vibrant/10 hover:text-vital-vibrant hover:scale-105'
                  }`}
                  style={{ animationDelay: `${(menuItems.length + index) * 50}ms` }}
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-exo text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-vital-vibrant/30">
            <div className="mb-4 p-3 bg-vital-dark/50 rounded-lg border border-vital-vibrant/20">
              <p className="font-exo text-xs text-vital-light/60 mb-1">Founded by</p>
              <p className="font-orbitron text-sm text-vital-vibrant">Leora Saharia</p>
              <p className="font-exo text-xs text-vital-light/50">NIT Raipur</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 p-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-300 group hover:scale-105"
            >
              <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-exo">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="min-h-screen relative z-10">
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
