'use client';

import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

export default function ProgramsPage() {
  const programs = [
    { 
      title: "Monthly Q&A Sessions", 
      desc: "Live sessions with Damilola and industry experts where you can ask any question about running your fashion business.",
      duration: "Monthly",
      level: "All Levels"
    },
    { 
      title: "Pricing Masterclass", 
      desc: "Learn how to price your garments correctly to ensure profitability without compromising your creativity.",
      duration: "4 Weeks",
      level: "Beginner - Advanced"
    },
    { 
      title: "Staffing & Production Systems", 
      desc: "Build reliable systems for hiring, training, and managing tailors, pattern makers, and production teams.",
      duration: "6 Weeks",
      level: "Intermediate - Advanced"
    },
    { 
      title: "Client Management Bootcamp", 
      desc: "Master the art of managing high-ticket clients, setting clear boundaries, and delivering exceptional service.",
      duration: "5 Weeks",
      level: "All Levels"
    },
    { 
      title: "Business Strategy Intensive", 
      desc: "Develop a comprehensive business strategy tailored to your fashion brand's unique goals and challenges.",
      duration: "8 Weeks",
      level: "Advanced"
    },
    { 
      title: "Peer Accountability Groups", 
      desc: "Small groups of designers who meet regularly to support each other, share progress, and hold each other accountable.",
      duration: "Ongoing",
      level: "All Levels"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <StaggerContainer>
            <StaggerItem>
              <h1 className="font-serif font-luxury text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                Our Programs
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Comprehensive programs designed to address the real challenges fashion designers face every day.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <StaggerContainer key={index} delay={index * 0.1}>
                <StaggerItem>
                  <div className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif text-2xl">{program.title}</h3>
                      <div className="text-right">
                        <p className="text-[#D4AF37] text-sm">{program.duration}</p>
                        <p className="text-gray-500 text-sm">{program.level}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-6">{program.desc}</p>
                    <button className="text-[#D4AF37] hover:text-[#E5C048] transition-colors font-medium">
                      Learn More →
                    </button>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
