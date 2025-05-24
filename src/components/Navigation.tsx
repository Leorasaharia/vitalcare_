
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const languages = ["English", "Hindi", "Spanish", "French", "Mandarin", "Arabic"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-vital-dark/90 backdrop-blur-md border-b border-vital-vibrant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-orbitron text-2xl font-bold neon-text">
              VitalCare
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-exo hover:text-vital-vibrant transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="font-exo hover:text-vital-vibrant transition-colors duration-300"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("chat")}
              className="font-exo hover:text-vital-vibrant transition-colors duration-300"
            >
              Chat
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-exo hover:text-vital-vibrant transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-exo hover:text-vital-vibrant transition-colors duration-300"
            >
              Contact
            </button>

            {/* Language Selector */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-vital-dark border border-vital-vibrant rounded-lg px-3 py-1 text-sm font-exo focus:outline-none focus:border-vital-muted appearance-none cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang} className="bg-vital-dark">
                    {lang}
                  </option>
                ))}
              </select>
              <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-vital-light hover:text-vital-vibrant"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-vital-dark/95 backdrop-blur-md border-t border-vital-vibrant/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left px-3 py-2 font-exo hover:text-vital-vibrant transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-3 py-2 font-exo hover:text-vital-vibrant transition-colors duration-300"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("chat")}
                className="block w-full text-left px-3 py-2 font-exo hover:text-vital-vibrant transition-colors duration-300"
              >
                Chat
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 font-exo hover:text-vital-vibrant transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 font-exo hover:text-vital-vibrant transition-colors duration-300"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-vital-dark border border-vital-vibrant rounded-lg px-3 py-2 text-sm font-exo focus:outline-none focus:border-vital-muted"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang} className="bg-vital-dark">
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
