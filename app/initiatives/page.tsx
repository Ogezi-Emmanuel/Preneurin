'use client';

import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

export default function InitiativesPage() {
  const initiatives = [
    { 
      title: "Designer Spotlight Series", 
      desc: "Showcasing emerging and established designers who are building successful, sustainable fashion businesses. Their stories inspire and educate our community.",
      image: "/Designer Spotlight.jpg"
    },
    { 
      title: "Industry Partnerships", 
      desc: "Collaborations with fabric suppliers, manufacturers, and industry professionals to provide our members with exclusive resources and opportunities.",
      image: "/Industry Partnership.jpg"
    },
    { 
      title: "Scholarship Program", 
      desc: "Providing access to our programs for talented designers who might not otherwise have the means to invest in their business education.",
      image: "/Scholarship.jpg"
    },
    { 
      title: "Resource Library", 
      desc: "A growing collection of templates, checklists, and guides for everything from pricing calculators to production schedules.",
      image: "/Resource Library.jpg"
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
                Our Initiatives
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Beyond our core programs, we're building initiatives that support the broader fashion design community.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Initiatives Grid Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {initiatives.map((initiative, index) => (
              <StaggerContainer key={index} delay={index * 0.15}>
                <StaggerItem>
                  <div className="group">
                    <div className="rounded-3xl overflow-hidden border border-white/10 mb-6">
                      <img 
                        src={initiative.image}
                        alt={initiative.title}
                        className="w-full h-[300px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-serif text-2xl mb-4">{initiative.title}</h3>
                    <p className="text-gray-400">{initiative.desc}</p>
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
