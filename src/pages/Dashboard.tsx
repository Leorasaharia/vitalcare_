
import SidebarLayout from '../components/SidebarLayout';
import { Heart, Activity, FileText, TrendingUp, Calendar, Clock, Users, BarChart3 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const { user } = useAuth();

  const healthStats = [
    { label: 'Last Recorded BP', value: '125/80', unit: 'mmHg', icon: Heart, color: 'vital-vibrant' },
    { label: 'Blood Sugar Quantity', value: '120', unit: 'mg/dL', icon: Activity, color: 'vital-muted' },
    { label: 'Blood Oxygen Percentage', value: '98%', unit: '', icon: TrendingUp, color: 'vital-pastel' },
    { label: 'Last Appointment', value: '24th April, 2025', unit: '', icon: Calendar, color: 'green-400' }
  ];

  const weightData = [
    { month: 'Sep', weight: 48 },
    { month: 'Oct', weight: 49 },
    { month: 'Nov', weight: 49.5 },
    { month: 'Dec', weight: 45 },
    { month: 'Jan', weight: 46.5 },
    { month: 'Feb', weight: 47 }
  ];

  const sleepData = [
    { day: '17', light: 2, deep: 4, rem: 2 },
    { day: '18', light: 3, deep: 5, rem: 1 },
    { day: '19', light: 2.5, deep: 4.5, rem: 2 },
    { day: '20', light: 3, deep: 4, rem: 2.5 },
    { day: '21', light: 2, deep: 5, rem: 1.5 },
    { day: '22', light: 2.5, deep: 4.5, rem: 2 },
    { day: '23', light: 3, deep: 4, rem: 2 },
    { day: '24', light: 2, deep: 5, rem: 2.5 },
    { day: '25', light: 3, deep: 4.5, rem: 1.5 }
  ];

  const trafficData = [
    { hour: '00', visitors: 120 },
    { hour: '04', visitors: 200 },
    { hour: '08', visitors: 800 },
    { hour: '12', visitors: 1200 },
    { hour: '14', visitors: 1500 },
    { hour: '16', visitors: 1800 },
    { hour: '18', visitors: 1200 }
  ];

  const healthStatusData = [
    { name: 'Daily Health Checkups', value: 63, color: '#3B82F6' },
    { name: 'Previous Records', value: 25, color: '#8B5CF6' },
    { name: 'Others', value: 12, color: '#06B6D4' }
  ];

  const patients = [
    { name: 'Leora Saharia', bmi: 22.5, diet: 'Low Carb', consultation: '2023-07-01', followUp: true },
    { name: 'Leora Saharia', bmi: 26.1, diet: 'Keto', consultation: '2023-06-15', followUp: false },
    { name: 'Leora Saharia', bmi: 31, diet: 'Mediterranean', consultation: '2023-07-20', followUp: true },
    { name: 'Leora Saharia', bmi: 24.7, diet: 'Paleo', consultation: '2023-08-30', followUp: false }
  ];

  return (
    <SidebarLayout>
      <div className="p-6 pt-20 min-h-screen bg-gradient-to-br from-vital-dark via-purple-900 to-vital-dark">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vital-vibrant to-transparent animate-pulse"></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vital-muted to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vital-pastel to-transparent animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-orbitron text-4xl font-bold text-vital-light mb-2">
                  Main Dashboard
                </h1>
                <p className="font-exo text-vital-light/70 text-lg">
                  Welcome back, {user?.name || 'Leora Saharia'}!
                </p>
              </div>
              <div className="text-right">
                <div className="text-vital-light text-sm font-exo mb-1">Upcoming Appointment</div>
                <div className="text-vital-vibrant text-lg font-orbitron font-bold">30th September, 2025</div>
                <div className="flex items-center mt-2">
                  <Clock className="w-4 h-4 text-vital-muted mr-2" />
                  <span className="text-vital-muted text-sm">New Lab Results: 12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {healthStats.map((stat, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 transition-all duration-300 hover:scale-105 hover:border-vital-vibrant hover:shadow-lg hover:shadow-vital-vibrant/20 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-${stat.color}/20 group-hover:bg-${stat.color}/30 transition-colors`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                </div>
                <div className="text-xl font-orbitron font-bold text-vital-light mb-1 group-hover:text-vital-vibrant transition-colors">
                  {stat.value}
                  {stat.unit && <span className="text-sm ml-1">{stat.unit}</span>}
                </div>
                <div className="text-sm font-exo text-vital-light/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Weight Chart */}
            <div className="lg:col-span-1 bg-vital-dark/50 backdrop-blur-sm rounded-xl border border-vital-vibrant/30 p-6 animate-fade-in hover:border-vital-vibrant transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-orbitron text-lg font-bold text-vital-light">Weight Record</h3>
                  <p className="text-vital-light/60 text-sm font-exo">This month</p>
                </div>
                <BarChart3 className="w-5 h-5 text-vital-vibrant" />
              </div>
              <div className="mb-4">
                <div className="text-3xl font-orbitron font-bold text-vital-light">48kg</div>
                <div className="text-sm text-green-400 font-exo">+2.45% ↗ On track</div>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={weightData}>
                  <Line type="monotone" dataKey="weight" stroke="#9A48D0" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Sleep Record */}
            <div className="lg:col-span-1 bg-vital-dark/50 backdrop-blur-sm rounded-xl border border-vital-vibrant/30 p-6 animate-fade-in hover:border-vital-vibrant transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-orbitron text-lg font-bold text-vital-light">Sleep Record</h3>
                <BarChart3 className="w-5 h-5 text-vital-vibrant" />
              </div>
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={sleepData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#AC9FBB', fontSize: 12 }} />
                  <Bar dataKey="light" stackId="sleep" fill="#06B6D4" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="deep" stackId="sleep" fill="#3B82F6" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="rem" stackId="sleep" fill="#8B5CF6" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Health Status Pie Chart */}
            <div className="lg:col-span-1 bg-vital-dark/50 backdrop-blur-sm rounded-xl border border-vital-vibrant/30 p-6 animate-fade-in hover:border-vital-vibrant transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-orbitron text-lg font-bold text-vital-light">User Health Status</h3>
                  <p className="text-vital-light/60 text-sm font-exo">Monthly</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <PieChart>
                  <Pie
                    data={healthStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {healthStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {healthStatusData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <span className="text-vital-light/70 font-exo">{item.name}</span>
                    </div>
                    <span className="text-vital-light font-exo">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Patient Records Table */}
            <div className="lg:col-span-2 bg-vital-dark/50 backdrop-blur-sm rounded-xl border border-vital-vibrant/30 p-6 animate-fade-in hover:border-vital-vibrant transition-all duration-300">
              <h3 className="font-orbitron text-xl font-bold text-vital-light mb-6">Patient E-Records</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-vital-vibrant/30">
                      <th className="text-left font-exo text-vital-light/60 text-xs uppercase tracking-wider pb-3">Patient</th>
                      <th className="text-left font-exo text-vital-light/60 text-xs uppercase tracking-wider pb-3">BMI</th>
                      <th className="text-left font-exo text-vital-light/60 text-xs uppercase tracking-wider pb-3">Diet Plan</th>
                      <th className="text-left font-exo text-vital-light/60 text-xs uppercase tracking-wider pb-3">Consultation Date</th>
                      <th className="text-left font-exo text-vital-light/60 text-xs uppercase tracking-wider pb-3">Follow-up Needed</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-4">
                    {patients.map((patient, index) => (
                      <tr key={index} className="border-b border-vital-vibrant/10 hover:bg-vital-vibrant/5 transition-colors">
                        <td className="py-4 font-exo text-vital-light">{patient.name}</td>
                        <td className="py-4 font-exo text-vital-light">{patient.bmi}</td>
                        <td className="py-4 font-exo text-vital-light">{patient.diet}</td>
                        <td className="py-4 font-exo text-vital-light">{patient.consultation}</td>
                        <td className="py-4">
                          <div className={`w-4 h-4 rounded ${patient.followUp ? 'bg-vital-vibrant' : 'bg-vital-light/30'}`}></div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Daily Traffic */}
            <div className="lg:col-span-1 bg-vital-dark/50 backdrop-blur-sm rounded-xl border border-vital-vibrant/30 p-6 animate-fade-in hover:border-vital-vibrant transition-all duration-300">
              <div className="mb-6">
                <h3 className="font-orbitron text-xl font-bold text-vital-light mb-2">Daily Traffic</h3>
                <div className="text-2xl font-orbitron font-bold text-vital-vibrant">2,579 <span className="text-sm text-green-400">+24%</span></div>
                <div className="text-sm text-vital-light/60 font-exo">Visitors</div>
              </div>
              
              <ResponsiveContainer width="100%" height={120}>
                <BarChart data={trafficData}>
                  <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fill: '#AC9FBB', fontSize: 12 }} />
                  <Bar dataKey="visitors" fill="#9A48D0" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Dashboard;
