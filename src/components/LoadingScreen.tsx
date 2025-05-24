
import { useEffect, useState } from 'react';
import { Stethoscope } from 'lucide-react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-vital-dark via-vital-dark to-purple-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vital-vibrant to-transparent animate-pulse"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vital-muted to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vital-pastel to-transparent animate-pulse delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="text-center z-10">
        {/* Stethoscope with zoom animation */}
        <div className="mb-8 relative">
          <div className="animate-bounce">
            <div className="p-8 rounded-full bg-vital-vibrant/20 backdrop-blur-sm border border-vital-vibrant animate-pulse">
              <Stethoscope className="w-24 h-24 text-vital-vibrant animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>
          
          {/* Concentric circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-vital-vibrant/30 rounded-full animate-ping"></div>
            <div className="absolute w-40 h-40 border-2 border-vital-muted/20 rounded-full animate-ping delay-500"></div>
            <div className="absolute w-48 h-48 border-2 border-vital-pastel/10 rounded-full animate-ping delay-1000"></div>
          </div>
        </div>

        {/* VitalCare text */}
        <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4 text-vital-light animate-fade-in">
          VitalCare
        </h1>
        <p className="font-exo text-lg text-vital-light/80 mb-8 animate-fade-in delay-500">
          Initializing AI Healthcare Platform...
        </p>

        {/* Progress bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-exo text-vital-light/60">Loading</span>
            <span className="text-sm font-exo text-vital-light/60">{progress}%</span>
          </div>
          <div className="w-full bg-vital-dark/50 rounded-full h-2 border border-vital-vibrant/30">
            <div 
              className="bg-gradient-to-r from-vital-vibrant to-vital-muted h-2 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
