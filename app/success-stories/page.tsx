'use client';

import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

export default function SuccessStoriesPage() {
  const stories = [
    { 
      name: "Amara Okafor", 
      brand: "Amara Couture", 
      achievement: "Grew revenue by 300% in 18 months after implementing our pricing and production systems.",
      quote: "For the first time, I actually understand my numbers and feel confident about the future of my brand.",
      image: "/Amara Okafor.jpg"
    },
    { 
      name: "Kofi Mensah", 
      brand: "Kofi Atelier", 
      achievement: "Built a team of 8 tailors and scaled from 5 to 50+ custom orders per month.",
      quote: "The community support and practical advice helped me systemize my production in ways I never thought possible.",
      image: "/Kofi Mensah.jpg"
    },
    { 
      name: "Zara Ibrahim", 
      brand: "Zara Luxe", 
      achievement: "Increased average order value by 150% through better client management and positioning.",
      quote: "Learning to set boundaries and price appropriately completely transformed my relationship with my clients and my business.",
      image: "/Zara Ibrahim.jpg"
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
                Success Stories
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Real designers, real results. See how our community has transformed their businesses.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Success Stories Grid Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {stories.map((story, index) => (
              <StaggerContainer key={index} delay={index * 0.15}>
                <StaggerItem>
                  <div className="bg-[#0F0F0F] border border-white/10 rounded-3xl overflow-hidden">
                    <div className="h-[350px] overflow-hidden">
                      <img 
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="font-serif text-2xl mb-2">{story.name}</h3>
                      <p className="text-[#D4AF37] mb-4">{story.brand}</p>
                      <p className="text-gray-300 mb-6 italic">"{story.quote}"</p>
                      <p className="text-gray-400 text-sm">{story.achievement}</p>
                    </div>
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
