'use client';

import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <StaggerContainer>
            <StaggerItem>
              <h1 className="font-serif font-luxury text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                About Preneurin
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Empowering fashion designers with practical knowledge, community, and resources to build sustainable, successful businesses.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <StaggerContainer>
              <StaggerItem>
                <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-8">
                  Our Story
                </h2>
              </StaggerItem>
              
              <StaggerItem>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Preneurin was born from the frustration of seeing talented fashion designers struggle with the operational side of their businesses—problems that have nothing to do with creativity.
                  </p>
                  <p>
                    After years of witnessing designers face the same challenges in secret, we created a safe space where they could talk openly, learn from each other, and get real solutions.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.2}>
              <StaggerItem>
                <div className="rounded-3xl overflow-hidden border border-white/10">
                  <img 
                    src="/Our Story.jpg" 
                    alt="Our Story"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-12 text-center">
                Our Mission & Values
              </h2>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Community First", 
                desc: "We believe in the power of designers supporting each other through shared experiences and collective wisdom."
              },
              { 
                title: "Practical Knowledge", 
                desc: "Focus on real-world solutions, not just theory. Everything we teach has been tested in real fashion businesses."
              },
              { 
                title: "Transparency", 
                desc: "We talk about the parts of fashion design that nobody discusses openly—because that's where the real growth happens."
              },
              { 
                title: "Inclusivity", 
                desc: "Welcoming designers from all backgrounds, experience levels, and locations. Your story matters here."
              },
              { 
                title: "Excellence", 
                desc: "Striving for the highest standards in everything we do, from our community guidelines to our educational content."
              },
              { 
                title: "Sustainability", 
                desc: "Building businesses that are not just profitable, but also sustainable for the long term."
              }
            ].map((value, index) => (
              <StaggerContainer key={index} delay={index * 0.1}>
                <StaggerItem>
                  <div className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all">
                    <h3 className="font-serif text-2xl mb-4 text-[#D4AF37]">{value.title}</h3>
                    <p className="text-gray-400">{value.desc}</p>
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
