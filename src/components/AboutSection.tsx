
import { useEffect, useRef, useState } from "react";
import { Users, Award, Target } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Leora Saharia",
      role: "Founder & CEO",
      description: "Second-year B.Tech student in Biomedical Engineering at NIT Raipur with one year of experience in programming and biomedical studies.",
      expertise: "Biomedical Engineering, AI in Healthcare"
    },
    {
      name: "Dr. Mainak Basu",
      role: "Mentor - Biomedical Applications",
      description: "Associate Professor in Biomedical Engineering at NIT Raipur, providing guidance on biomedical applications and research.",
      expertise: "Biomedical Engineering, Research"
    },
    {
      name: "Dr. Saurabh Gupta",
      role: "Mentor - AI & Data Science",
      description: "Assistant Professor in AI and Data Science at NIT Raipur, advising on AI strategies and technical development.",
      expertise: "Artificial Intelligence, Data Science"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6 neon-text">
            About Medithera
          </h2>
          <p className="font-exo text-lg md:text-xl text-vital-light/80 max-w-3xl mx-auto">
            A pioneering seed-stage startup revolutionizing healthcare accessibility through innovative AI solutions
          </p>
        </div>

        {/* Mission & Vision */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center p-6 rounded-xl neon-border bg-vital-dark/30 backdrop-blur-sm">
            <div className="mb-4 flex justify-center">
              <div className="p-3 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted">
                <Target className="w-8 h-8 text-vital-light" />
              </div>
            </div>
            <h3 className="font-orbitron text-xl font-bold mb-3 text-vital-vibrant">Our Mission</h3>
            <p className="font-exo text-vital-light/70 leading-relaxed">
              To bridge healthcare disparities by providing immediate, multilingual medical assistance to remote and underserved communities worldwide.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl neon-border bg-vital-dark/30 backdrop-blur-sm">
            <div className="mb-4 flex justify-center">
              <div className="p-3 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted">
                <Award className="w-8 h-8 text-vital-light" />
              </div>
            </div>
            <h3 className="font-orbitron text-xl font-bold mb-3 text-vital-vibrant">Our Vision</h3>
            <p className="font-exo text-vital-light/70 leading-relaxed">
              A world where healthcare access is not limited by geography, language, or economic status - making quality medical guidance universally available.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl neon-border bg-vital-dark/30 backdrop-blur-sm">
            <div className="mb-4 flex justify-center">
              <div className="p-3 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted">
                <Users className="w-8 h-8 text-vital-light" />
              </div>
            </div>
            <h3 className="font-orbitron text-xl font-bold mb-3 text-vital-vibrant">Our Impact</h3>
            <p className="font-exo text-vital-light/70 leading-relaxed">
              Empowering communities with 24/7 healthcare assistance, reducing costs, and promoting health equity through innovative AI technology.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-12 text-vital-vibrant">
            Our Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl neon-border bg-vital-dark/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:neon-glow"
              >
                {/* Avatar Placeholder */}
                <div className="mb-4 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted flex items-center justify-center">
                    <span className="font-orbitron text-2xl font-bold text-vital-light">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <h4 className="font-orbitron text-xl font-bold mb-2 text-vital-light">
                  {member.name}
                </h4>
                <p className="font-exo text-vital-vibrant font-semibold mb-3">
                  {member.role}
                </p>

                {/* Description */}
                <p className="font-exo text-sm text-vital-light/70 mb-4 leading-relaxed">
                  {member.description}
                </p>

                {/* Expertise */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.split(', ').map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-exo bg-vital-vibrant/20 text-vital-vibrant rounded-full border border-vital-vibrant/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="font-orbitron text-3xl font-bold text-vital-vibrant mb-2">2023</div>
              <div className="font-exo text-sm text-vital-light/60">Founded</div>
            </div>
            <div>
              <div className="font-orbitron text-3xl font-bold text-vital-vibrant mb-2">50+</div>
              <div className="font-exo text-sm text-vital-light/60">Languages</div>
            </div>
            <div>
              <div className="font-orbitron text-3xl font-bold text-vital-vibrant mb-2">NIT</div>
              <div className="font-exo text-sm text-vital-light/60">Raipur Based</div>
            </div>
            <div>
              <div className="font-orbitron text-3xl font-bold text-vital-vibrant mb-2">AI</div>
              <div className="font-exo text-sm text-vital-light/60">Powered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
