
import React, { useState } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import { FileText, Upload, Activity, Calendar, User, Heart, AlertTriangle, TrendingUp, Download } from 'lucide-react';

const HealthRecords = () => {
  const [selectedRecord, setSelectedRecord] = useState<number | null>(null);

  const healthRecords = [
    {
      id: 1,
      date: '2024-01-15',
      type: 'Blood Test',
      doctor: 'Dr. Sarah Johnson',
      status: 'Normal',
      bloodPressure: '120/80',
      sugarLevel: '95 mg/dL',
      weight: '70 kg'
    },
    {
      id: 2,
      date: '2024-01-10',
      type: 'Cardiology Checkup',
      doctor: 'Dr. Michael Chen',
      status: 'Good',
      bloodPressure: '118/75',
      sugarLevel: '92 mg/dL',
      weight: '69.5 kg'
    },
    {
      id: 3,
      date: '2024-01-05',
      type: 'General Checkup',
      doctor: 'Dr. Emily Brown',
      status: 'Excellent',
      bloodPressure: '115/70',
      sugarLevel: '88 mg/dL',
      weight: '69 kg'
    }
  ];

  return (
    <SidebarLayout>
      <div className="min-h-screen p-6 pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-orbitron text-4xl font-bold text-vital-light mb-2">
              Health Records
            </h1>
            <p className="font-exo text-lg text-vital-light/70">
              Digital health data analysis and tracking
            </p>
          </div>

          {/* Upload Section */}
          <div className="mb-8 p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 hover:border-vital-vibrant transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-orbitron text-xl font-bold text-vital-light mb-2">
                  Upload New Record
                </h3>
                <p className="font-exo text-vital-light/60">
                  Upload medical reports for AI analysis and digitization
                </p>
              </div>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-vital-vibrant to-vital-muted rounded-lg font-exo font-semibold text-vital-light hover:scale-105 transition-all duration-300">
                <Upload className="w-5 h-5" />
                <span>Upload Report</span>
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-vital-vibrant/20">
                  <Activity className="w-6 h-6 text-vital-vibrant" />
                </div>
                <div>
                  <h3 className="font-orbitron text-lg font-bold text-vital-light">120/80</h3>
                  <p className="font-exo text-sm text-vital-light/60">Latest BP</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-vital-muted/20">
                  <Heart className="w-6 h-6 text-vital-muted" />
                </div>
                <div>
                  <h3 className="font-orbitron text-lg font-bold text-vital-light">95 mg/dL</h3>
                  <p className="font-exo text-sm text-vital-light/60">Blood Sugar</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-vital-pastel/20">
                  <TrendingUp className="w-6 h-6 text-vital-pastel" />
                </div>
                <div>
                  <h3 className="font-orbitron text-lg font-bold text-vital-light">70 kg</h3>
                  <p className="font-exo text-sm text-vital-light/60">Weight</p>
                </div>
              </div>
            </div>
          </div>

          {/* Records List */}
          <div className="space-y-4">
            <h2 className="font-orbitron text-2xl font-bold text-vital-light mb-4">
              Medical History
            </h2>
            
            {healthRecords.map((record, index) => (
              <div
                key={record.id}
                className={`p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 hover:border-vital-vibrant transition-all duration-300 cursor-pointer hover:scale-[1.02] animate-fade-in ${selectedRecord === record.id ? 'ring-2 ring-vital-vibrant' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedRecord(selectedRecord === record.id ? null : record.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-vital-vibrant/20">
                      <FileText className="w-6 h-6 text-vital-vibrant" />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-lg font-bold text-vital-light">
                        {record.type}
                      </h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-vital-light/60" />
                          <span className="font-exo text-sm text-vital-light/60">{record.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4 text-vital-light/60" />
                          <span className="font-exo text-sm text-vital-light/60">{record.doctor}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-exo ${
                      record.status === 'Normal' || record.status === 'Good' || record.status === 'Excellent'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {record.status}
                    </span>
                    <button className="p-2 rounded-lg bg-vital-vibrant/20 hover:bg-vital-vibrant/30 transition-colors">
                      <Download className="w-4 h-4 text-vital-vibrant" />
                    </button>
                  </div>
                </div>

                {selectedRecord === record.id && (
                  <div className="mt-6 pt-6 border-t border-vital-vibrant/30 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-vital-vibrant/10 border border-vital-vibrant/20">
                        <h4 className="font-orbitron text-sm font-bold text-vital-vibrant mb-2">Blood Pressure</h4>
                        <p className="font-exo text-lg text-vital-light">{record.bloodPressure}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-vital-muted/10 border border-vital-muted/20">
                        <h4 className="font-orbitron text-sm font-bold text-vital-muted mb-2">Sugar Level</h4>
                        <p className="font-exo text-lg text-vital-light">{record.sugarLevel}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-vital-pastel/10 border border-vital-pastel/20">
                        <h4 className="font-orbitron text-sm font-bold text-vital-pastel mb-2">Weight</h4>
                        <p className="font-exo text-lg text-vital-light">{record.weight}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default HealthRecords;
