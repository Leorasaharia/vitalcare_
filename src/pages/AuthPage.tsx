
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Heart, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });
      } else {
        if (formData.password !== formData.confirmPassword) {
          toast({
            title: "Error",
            description: "Passwords do not match.",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }
        await register(formData.name, formData.email, formData.password);
        toast({
          title: "Account created!",
          description: "Welcome to VitalCare.",
        });
      }
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-vital-dark via-purple-900 to-vital-dark flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vital-vibrant to-transparent animate-pulse"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vital-muted to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vital-pastel to-transparent animate-pulse delay-2000"></div>
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 p-3 rounded-full bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 text-vital-light hover:bg-vital-vibrant/20 transition-all duration-300 group"
      >
        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-vital-vibrant/20 backdrop-blur-sm border border-vital-vibrant">
              <Heart className="w-12 h-12 text-vital-vibrant animate-pulse" />
            </div>
          </div>
          <h1 className="font-orbitron text-3xl font-bold text-vital-light mb-2">
            {isLogin ? 'Welcome Back' : 'Join VitalCare'}
          </h1>
          <p className="font-exo text-vital-light/70">
            {isLogin ? 'Sign in to access your health dashboard' : 'Create your account to get started'}
          </p>
        </div>

        {/* Form */}
        <div className="bg-vital-dark/50 backdrop-blur-sm rounded-2xl border border-vital-vibrant/30 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-vital-light font-exo font-semibold mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-vital-vibrant" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-vital-dark/50 border border-vital-vibrant/50 rounded-lg text-vital-light placeholder-vital-light/50 font-exo focus:outline-none focus:border-vital-vibrant focus:ring-2 focus:ring-vital-vibrant/20 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-vital-light font-exo font-semibold mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-vital-vibrant" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-vital-dark/50 border border-vital-vibrant/50 rounded-lg text-vital-light placeholder-vital-light/50 font-exo focus:outline-none focus:border-vital-vibrant focus:ring-2 focus:ring-vital-vibrant/20 transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-vital-light font-exo font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-vital-vibrant" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-vital-dark/50 border border-vital-vibrant/50 rounded-lg text-vital-light placeholder-vital-light/50 font-exo focus:outline-none focus:border-vital-vibrant focus:ring-2 focus:ring-vital-vibrant/20 transition-all"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-vital-light font-exo font-semibold mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-vital-vibrant" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-vital-dark/50 border border-vital-vibrant/50 rounded-lg text-vital-light placeholder-vital-light/50 font-exo focus:outline-none focus:border-vital-vibrant focus:ring-2 focus:ring-vital-vibrant/20 transition-all"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-vital-vibrant to-vital-muted rounded-lg font-exo font-semibold text-vital-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-vital-vibrant/30 disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-vital-light mr-2"></div>
                  Processing...
                </div>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-vital-light/70 font-exo">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-vital-vibrant hover:text-vital-muted transition-colors font-semibold"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
