
import React, { useState } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import { 
  User, 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Sun, 
  Smartphone, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Save,
  Trash2,
  Download,
  Upload,
  Heart,
  Mic,
  Camera
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '../contexts/AuthContext';

const Settings = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || 'Leora Saharia',
    email: user?.email || 'leora@medithera.com',
    phone: '+91 98765 43210',
    location: 'NIT Raipur, Chhattisgarh',
    dateOfBirth: '2004-03-15',
    gender: 'Female',
    bloodType: 'O+',
    emergencyContact: '+91 98765 43211',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [preferences, setPreferences] = useState({
    language: 'English',
    notifications: true,
    emailAlerts: true,
    smsAlerts: false,
    voiceReminders: true,
    darkMode: false,
    dataSharing: true,
    locationServices: true,
    biometricAuth: false
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePreferenceChange = (field: string, value: boolean | string) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    console.log('Saving profile:', formData);
    // TODO: Implement profile save functionality
  };

  const handleSavePreferences = () => {
    console.log('Saving preferences:', preferences);
    // TODO: Implement preferences save functionality
  };

  const handleExportData = () => {
    console.log('Exporting user data...');
    // TODO: Implement data export functionality
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Deleting account...');
      // TODO: Implement account deletion
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'preferences', label: 'Preferences', icon: SettingsIcon },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'data', label: 'Data & Export', icon: Download },
  ];

  return (
    <SidebarLayout>
      <div className="min-h-screen p-6 pt-20 bg-gradient-to-br from-vital-dark via-purple-900 to-vital-dark">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-vital-vibrant/20 border border-vital-vibrant animate-pulse">
                <SettingsIcon className="w-12 h-12 text-vital-vibrant" />
              </div>
            </div>
            <h1 className="font-orbitron text-4xl font-bold text-vital-light mb-2 animate-fade-in">
              Account Settings
            </h1>
            <p className="font-exo text-lg text-vital-light/70 animate-fade-in delay-300">
              Manage your VitalCare account and preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="bg-vital-dark/50 backdrop-blur-sm border-vital-vibrant/30">
                <CardContent className="p-4">
                  <nav className="space-y-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 text-left ${
                          activeTab === tab.id
                            ? 'bg-vital-vibrant/20 text-vital-vibrant border border-vital-vibrant/30'
                            : 'text-vital-light/70 hover:bg-vital-vibrant/10 hover:text-vital-vibrant'
                        }`}
                      >
                        <tab.icon className="w-5 h-5" />
                        <span className="font-exo">{tab.label}</span>
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <Card className="bg-vital-dark/50 backdrop-blur-sm border-vital-vibrant/30 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-vital-light flex items-center space-x-2">
                      <User className="w-6 h-6 text-vital-vibrant" />
                      <span>Profile Information</span>
                    </CardTitle>
                    <CardDescription className="text-vital-light/60">
                      Update your personal information and medical details
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Profile Picture */}
                    <div className="flex items-center space-x-6">
                      <Avatar className="w-24 h-24 border-2 border-vital-vibrant/30">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-vital-vibrant/20 text-vital-vibrant font-orbitron text-xl">
                          LS
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <Button className="bg-vital-vibrant hover:bg-vital-vibrant/80">
                          <Camera className="w-4 h-4 mr-2" />
                          Change Photo
                        </Button>
                        <p className="text-sm text-vital-light/60 font-exo">
                          JPG, PNG or GIF. Max size 2MB.
                        </p>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-exo text-vital-light/80 mb-2">Full Name</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="bg-vital-dark/50 border-vital-vibrant/30 text-vital-light"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-exo text-vital-light/80 mb-2">Email</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-vital-dark/50 border-vital-vibrant/30 text-vital-light"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-exo text-vital-light/80 mb-2">Phone</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-vital-dark/50 border-vital-vibrant/30 text-vital-light"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-exo text-vital-light/80 mb-2">Location</label>
                        <Input
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="bg-vital-dark/50 border-vital-vibrant/30 text-vital-light"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-exo text-vital-light/80 mb-2">Date of Birth</label>
                        <Input
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                          className="bg-vital-dark/50 border-vital-vibrant/30 text-vital-light"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-exo text-vital-light/80 mb-2">Gender</label>
                        <select
                          value={formData.gender}
                          onChange={(e) => handleInputChange('gender', e.target.value)}
                          className="w-full p-2 rounded-md bg-vital-dark/50 border border-vital-vibrant/30 text-vital-light"
                        >
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                          <option value="Other">Other</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-exo text-vital-light/80 mb-2">Blood Type</label>
                        <select
                          value={formData.bloodType}
                          onChange={(e) => handleInputChange('bloodType', e.target.value)}
                          className="w-full p-2 rounded-md bg-vital-dark/50 border border-vital-vibrant/30 text-vital-light"
                        >
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-exo text-vital-light/80 mb-2">Emergency Contact</label>
                        <Input
                          value={formData.emergencyContact}
                          onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                          className="bg-vital-dark/50 border-vital-vibrant/30 text-vital-light"
                        />
                      </div>
                    </div>

                    <Button onClick={handleSaveProfile} className="bg-vital-vibrant hover:bg-vital-vibrant/80">
                      <Save className="w-4 h-4 mr-2" />
                      Save Profile
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Preferences Tab */}
              {activeTab === 'preferences' && (
                <Card className="bg-vital-dark/50 backdrop-blur-sm border-vital-vibrant/30 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-vital-light flex items-center space-x-2">
                      <SettingsIcon className="w-6 h-6 text-vital-vibrant" />
                      <span>App Preferences</span>
                    </CardTitle>
                    <CardDescription className="text-vital-light/60">
                      Customize your VitalCare experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Language Settings */}
                    <div>
                      <label className="block text-sm font-exo text-vital-light/80 mb-2">Preferred Language</label>
                      <select
                        value={preferences.language}
                        onChange={(e) => handlePreferenceChange('language', e.target.value)}
                        className="w-full p-2 rounded-md bg-vital-dark/50 border border-vital-vibrant/30 text-vital-light"
                      >
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Marathi">Marathi</option>
                      </select>
                    </div>

                    {/* Toggle Preferences */}
                    <div className="space-y-4">
                      {[
                        { key: 'darkMode', label: 'Dark Mode', description: 'Use dark theme throughout the app', icon: Moon },
                        { key: 'voiceReminders', label: 'Voice Reminders', description: 'Enable voice-based medication and appointment reminders', icon: Mic },
                        { key: 'locationServices', label: 'Location Services', description: 'Allow location access for nearby healthcare providers', icon: Globe },
                        { key: 'dataSharing', label: 'Anonymous Data Sharing', description: 'Help improve VitalCare by sharing anonymous usage data', icon: Heart },
                        { key: 'biometricAuth', label: 'Biometric Authentication', description: 'Use fingerprint or face ID to secure your account', icon: Smartphone },
                      ].map((pref) => (
                        <div key={pref.key} className="flex items-center justify-between p-4 rounded-lg bg-vital-dark/30 border border-vital-vibrant/20">
                          <div className="flex items-center space-x-3">
                            <pref.icon className="w-5 h-5 text-vital-vibrant" />
                            <div>
                              <p className="font-exo text-vital-light font-medium">{pref.label}</p>
                              <p className="text-sm text-vital-light/60">{pref.description}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handlePreferenceChange(pref.key, !preferences[pref.key as keyof typeof preferences])}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              preferences[pref.key as keyof typeof preferences] ? 'bg-vital-vibrant' : 'bg-gray-600'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                preferences[pref.key as keyof typeof preferences] ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>

                    <Button onClick={handleSavePreferences} className="bg-vital-vibrant hover:bg-vital-vibrant/80">
                      <Save className="w-4 h-4 mr-2" />
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Privacy & Security Tab */}
              {activeTab === 'privacy' && (
                <Card className="bg-vital-dark/50 backdrop-blur-sm border-vital-vibrant/30 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-vital-light flex items-center space-x-2">
                      <Shield className="w-6 h-6 text-vital-vibrant" />
                      <span>Privacy & Security</span>
                    </CardTitle>
                    <CardDescription className="text-vital-light/60">
                      Manage your password and security settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Password Change */}
                    <div className="space-y-4">
                      <h3 className="font-orbitron text-lg text-vital-light">Change Password</h3>
                      <div>
                        <label className="block text-sm font-exo text-vital-light/80 mb-2">Current Password</label>
                        <div className="relative">
                          <Input
                            type={showPassword ? 'text' : 'password'}
                            value={formData.currentPassword}
                            onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                            className="bg-vital-dark/50 border-vital-vibrant/30 text-vital-light pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-vital-light/60"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-exo text-vital-light/80 mb-2">New Password</label>
                        <Input
                          type="password"
                          value={formData.newPassword}
                          onChange={(e) => handleInputChange('newPassword', e.target.value)}
                          className="bg-vital-dark/50 border-vital-vibrant/30 text-vital-light"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-exo text-vital-light/80 mb-2">Confirm New Password</label>
                        <Input
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className="bg-vital-dark/50 border-vital-vibrant/30 text-vital-light"
                        />
                      </div>
                      <Button className="bg-vital-vibrant hover:bg-vital-vibrant/80">
                        <Lock className="w-4 h-4 mr-2" />
                        Update Password
                      </Button>
                    </div>

                    {/* Security Features */}
                    <div className="space-y-4">
                      <h3 className="font-orbitron text-lg text-vital-light">Security Features</h3>
                      <div className="p-4 rounded-lg bg-vital-dark/30 border border-vital-vibrant/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-exo text-vital-light font-medium">Two-Factor Authentication</p>
                            <p className="text-sm text-vital-light/60">Add an extra layer of security to your account</p>
                          </div>
                          <Button variant="outline" className="border-vital-vibrant text-vital-vibrant hover:bg-vital-vibrant hover:text-white">
                            Enable 2FA
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-vital-dark/30 border border-vital-vibrant/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-exo text-vital-light font-medium">Login Activity</p>
                            <p className="text-sm text-vital-light/60">View recent login attempts and active sessions</p>
                          </div>
                          <Button variant="outline" className="border-vital-vibrant text-vital-vibrant hover:bg-vital-vibrant hover:text-white">
                            View Activity
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <Card className="bg-vital-dark/50 backdrop-blur-sm border-vital-vibrant/30 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-vital-light flex items-center space-x-2">
                      <Bell className="w-6 h-6 text-vital-vibrant" />
                      <span>Notification Settings</span>
                    </CardTitle>
                    <CardDescription className="text-vital-light/60">
                      Control how and when you receive notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { key: 'notifications', label: 'Push Notifications', description: 'Receive push notifications on your device', icon: Bell },
                      { key: 'emailAlerts', label: 'Email Alerts', description: 'Get important updates via email', icon: Mail },
                      { key: 'smsAlerts', label: 'SMS Alerts', description: 'Receive critical health alerts via SMS', icon: Smartphone },
                    ].map((notif) => (
                      <div key={notif.key} className="flex items-center justify-between p-4 rounded-lg bg-vital-dark/30 border border-vital-vibrant/20">
                        <div className="flex items-center space-x-3">
                          <notif.icon className="w-5 h-5 text-vital-vibrant" />
                          <div>
                            <p className="font-exo text-vital-light font-medium">{notif.label}</p>
                            <p className="text-sm text-vital-light/60">{notif.description}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handlePreferenceChange(notif.key, !preferences[notif.key as keyof typeof preferences])}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            preferences[notif.key as keyof typeof preferences] ? 'bg-vital-vibrant' : 'bg-gray-600'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              preferences[notif.key as keyof typeof preferences] ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Data & Export Tab */}
              {activeTab === 'data' && (
                <Card className="bg-vital-dark/50 backdrop-blur-sm border-vital-vibrant/30 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-vital-light flex items-center space-x-2">
                      <Download className="w-6 h-6 text-vital-vibrant" />
                      <span>Data Management</span>
                    </CardTitle>
                    <CardDescription className="text-vital-light/60">
                      Export your data or manage your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Data Export */}
                    <div className="space-y-4">
                      <h3 className="font-orbitron text-lg text-vital-light">Export Your Data</h3>
                      <div className="p-4 rounded-lg bg-vital-dark/30 border border-vital-vibrant/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-exo text-vital-light font-medium">Download Health Records</p>
                            <p className="text-sm text-vital-light/60">Export all your health data in PDF format</p>
                          </div>
                          <Button onClick={handleExportData} className="bg-vital-vibrant hover:bg-vital-vibrant/80">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-vital-dark/30 border border-vital-vibrant/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-exo text-vital-light font-medium">Import Health Data</p>
                            <p className="text-sm text-vital-light/60">Upload existing health records or reports</p>
                          </div>
                          <Button variant="outline" className="border-vital-vibrant text-vital-vibrant hover:bg-vital-vibrant hover:text-white">
                            <Upload className="w-4 h-4 mr-2" />
                            Import
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Dangerous Actions */}
                    <div className="space-y-4">
                      <h3 className="font-orbitron text-lg text-red-400">Danger Zone</h3>
                      <div className="p-4 rounded-lg bg-red-950/30 border border-red-500/30">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-exo text-red-400 font-medium">Delete Account</p>
                            <p className="text-sm text-red-400/60">Permanently delete your account and all data</p>
                          </div>
                          <Button 
                            onClick={handleDeleteAccount}
                            variant="destructive"
                            className="bg-red-600 hover:bg-red-700"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete Account
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Settings;
