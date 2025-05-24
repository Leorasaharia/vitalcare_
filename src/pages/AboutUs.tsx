
import React from 'react';
import SidebarLayout from '../components/SidebarLayout';
import { Users, Award, Target, Heart, BookOpen, Lightbulb, Globe, Shield } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Leora Saharia",
      role: "Founder & CEO",
      description: "Second-year B.Tech student in Biomedical Engineering at NIT Raipur with one year of experience in programming and biomedical studies. Visionary leader driving VitalCare's mission to revolutionize healthcare accessibility.",
      expertise: ["Biomedical Engineering", "AI in Healthcare", "Healthcare Innovation", "Leadership"],
      education: "B.Tech Biomedical Engineering, NIT Raipur",
      experience: "1+ years in programming and biomedical studies"
    },
    {
      name: "Dr. Mainak Basu",
      role: "Mentor - Biomedical Applications",
      description: "Associate Professor in Biomedical Engineering at NIT Raipur, providing expert guidance on biomedical applications, research methodologies, and clinical implementation strategies.",
      expertise: ["Biomedical Engineering", "Medical Device Research", "Clinical Applications", "Academic Research"],
      education: "Ph.D. in Biomedical Engineering",
      experience: "15+ years in biomedical research and education"
    },
    {
      name: "Dr. Saurabh Gupta",
      role: "Mentor - AI & Data Science",
      description: "Assistant Professor in AI and Data Science at NIT Raipur, advising on artificial intelligence strategies, machine learning implementations, and data-driven healthcare solutions.",
      expertise: ["Artificial Intelligence", "Machine Learning", "Data Science", "Healthcare AI"],
      education: "Ph.D. in Computer Science & AI",
      experience: "10+ years in AI research and development"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Medithera Founded",
      description: "Leora Saharia establishes Medithera with the vision to revolutionize healthcare accessibility through AI innovation."
    },
    {
      year: "2024",
      title: "VitalCare Development",
      description: "Begin development of VitalCare platform with multilingual AI chatbot capabilities and comprehensive healthcare features."
    },
    {
      year: "2024",
      title: "Expert Mentorship",
      description: "Partnership with NIT Raipur faculty members Dr. Mainak Basu and Dr. Saurabh Gupta for academic and technical guidance."
    },
    {
      year: "2024",
      title: "Platform Launch",
      description: "Official launch of VitalCare platform with 50+ language support and comprehensive healthcare assistance features."
    }
  ];

  return (
    <SidebarLayout>
      <div className="min-h-screen p-6 pt-20 bg-gradient-to-br from-vital-dark via-purple-900 to-vital-dark">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="p-6 rounded-full bg-vital-vibrant/20 border border-vital-vibrant animate-pulse">
                  <Users className="w-16 h-16 text-vital-vibrant" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-vital-vibrant/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-2 border-vital-muted/20 animate-ping delay-500" style={{ transform: 'scale(1.2)' }}></div>
              </div>
            </div>
            <h1 className="font-orbitron text-5xl font-bold text-vital-light mb-4 animate-fade-in">
              About Medithera
            </h1>
            <p className="font-exo text-xl text-vital-light/70 max-w-4xl mx-auto animate-fade-in delay-300">
              A pioneering seed-stage startup revolutionizing healthcare accessibility through innovative AI solutions, 
              founded by visionary student Leora Saharia at NIT Raipur
            </p>
          </div>

          {/* Mission, Vision, Impact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 hover:border-vital-vibrant hover:scale-105 transition-all duration-300 animate-fade-in group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-vital-light" />
                </div>
              </div>
              <h3 className="font-orbitron text-xl font-bold mb-4 text-vital-vibrant">Our Mission</h3>
              <p className="font-exo text-vital-light/70 leading-relaxed">
                To bridge healthcare disparities by providing immediate, multilingual medical assistance to remote and 
                underserved communities worldwide, making quality healthcare accessible to everyone.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 hover:border-vital-vibrant hover:scale-105 transition-all duration-300 animate-fade-in delay-200 group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-vital-light" />
                </div>
              </div>
              <h3 className="font-orbitron text-xl font-bold mb-4 text-vital-vibrant">Our Vision</h3>
              <p className="font-exo text-vital-light/70 leading-relaxed">
                A world where healthcare access is not limited by geography, language, or economic status - making 
                quality medical guidance universally available through innovative AI technology.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 hover:border-vital-vibrant hover:scale-105 transition-all duration-300 animate-fade-in delay-400 group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-vital-light" />
                </div>
              </div>
              <h3 className="font-orbitron text-xl font-bold mb-4 text-vital-vibrant">Our Impact</h3>
              <p className="font-exo text-vital-light/70 leading-relaxed">
                Empowering communities with 24/7 healthcare assistance, reducing costs, promoting health equity, 
                and improving health outcomes through accessible AI-driven medical guidance.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="font-orbitron text-4xl font-bold text-center mb-12 text-vital-light animate-fade-in">
              Our Team
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="p-8 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 hover:border-vital-vibrant hover:scale-105 transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Avatar */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-orbitron text-2xl font-bold text-vital-light">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h4 className="font-orbitron text-xl font-bold mb-2 text-vital-light text-center group-hover:text-vital-vibrant transition-colors">
                    {member.name}
                  </h4>
                  <p className="font-exo text-vital-vibrant font-semibold mb-4 text-center">
                    {member.role}
                  </p>

                  {/* Education & Experience */}
                  <div className="mb-4 space-y-2">
                    <div className="text-sm">
                      <span className="font-exo font-semibold text-vital-muted">Education: </span>
                      <span className="font-exo text-vital-light/70">{member.education}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-exo font-semibold text-vital-muted">Experience: </span>
                      <span className="font-exo text-vital-light/70">{member.experience}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-exo text-sm text-vital-light/70 mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-xs font-exo bg-vital-vibrant/20 text-vital-vibrant rounded-full border border-vital-vibrant/30 hover:bg-vital-vibrant/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Journey Timeline */}
          <div className="mb-16">
            <h2 className="font-orbitron text-4xl font-bold text-center mb-12 text-vital-light animate-fade-in">
              Our Journey
            </h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-vital-vibrant to-vital-muted"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center animate-fade-in ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="p-6 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 hover:border-vital-vibrant hover:scale-105 transition-all duration-300 group">
                        <div className="font-orbitron text-2xl font-bold text-vital-vibrant mb-2 group-hover:text-vital-muted transition-colors">
                          {milestone.year}
                        </div>
                        <h4 className="font-orbitron text-lg font-bold text-vital-light mb-3">
                          {milestone.title}
                        </h4>
                        <p className="font-exo text-vital-light/70 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-4 h-4 bg-vital-vibrant rounded-full border-4 border-vital-dark"></div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="text-center p-8 rounded-xl bg-gradient-to-r from-vital-vibrant/10 to-vital-muted/10 border border-vital-vibrant/30 animate-fade-in">
            <h2 className="font-orbitron text-3xl font-bold text-vital-light mb-8">
              Medithera by the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="font-orbitron text-4xl font-bold text-vital-vibrant mb-2">2023</div>
                <div className="font-exo text-sm text-vital-light/60">Founded</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="font-orbitron text-4xl font-bold text-vital-vibrant mb-2">50+</div>
                <div className="font-exo text-sm text-vital-light/60">Languages</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="font-orbitron text-4xl font-bold text-vital-vibrant mb-2">NIT</div>
                <div className="font-exo text-sm text-vital-light/60">Raipur Based</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="font-orbitron text-4xl font-bold text-vital-vibrant mb-2">AI</div>
                <div className="font-exo text-sm text-vital-light/60">Powered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default AboutUs;
