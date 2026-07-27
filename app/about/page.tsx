'use client';

import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

const ABOUT_IMAGE = '/DASA%20PICTURES/IMG_0519.jpg';

export default function AboutPage() {
  return (
    <div className="min-h-screen text-[var(--foreground)] font-sans">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="px-6 pb-24 pt-32">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="premium-panel rounded-[2.25rem] px-8 py-14 text-center md:px-14">
                <p className="section-kicker">About Preneurin</p>
                <h1 className="mt-6 font-serif font-luxury text-5xl leading-tight md:text-7xl lg:text-8xl">
                  A community built for fashion designers to grow together.
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
                  Preneurin is a community where fashion designers connect, share experiences, and grow together.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="editorial-shell py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <StaggerContainer>
              <StaggerItem>
                <p className="section-kicker">How It Started</p>
                <h2 className="mt-6 font-serif font-luxury text-4xl md:text-5xl mb-8">
                  Built from a real room, not an imagined one.
                </h2>
              </StaggerItem>
              
              <StaggerItem>
                <div className="premium-panel space-y-6 rounded-[2rem] p-8 text-lg leading-relaxed text-gray-600">
                  <p>
                    Preneurin began with one live session in April. It was created by Damilola Obisesan, Creative Director of Dassah Oikos, to bring fashion designers into a room where they could connect honestly and learn from shared experience.
                  </p>
                  <p>
                    From the beginning, the focus has been practical: guidance on production, pricing, branding, mentorship, collaboration, and the kind of support that helps designers grow sustainably.
                  </p>
                  <p>
                    The photos on this site come from that first session. They show the real beginning of a platform committed to professionalism, creativity, excellence, and stronger opportunities for fashion entrepreneurs.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.2}>
              <StaggerItem>
                <div className="premium-panel overflow-hidden rounded-[2rem]">
                  <Image
                    src={ABOUT_IMAGE}
                    alt="Fashion designers in conversation during Preneurin's first live session"
                    width={1600}
                    height={1200}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-[400px] w-full object-cover md:h-[500px]"
                    priority
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
              <div className="text-center">
                <p className="section-kicker">What We Stand For</p>
                <h2 className="mt-6 font-serif font-luxury text-4xl md:text-5xl mb-12">
                  The values shaping the community.
                </h2>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Supportive Platform", 
                desc: "Create a space where fashion designers can connect, share experiences, and grow professionally."
              },
              { 
                title: "Mentorship And Knowledge Sharing", 
                desc: "Bring emerging and established designers together to exchange practical insight and guidance."
              },
              { 
                title: "Fashion Business Guidance", 
                desc: "Support designers with clearer thinking around production, pricing, branding, and day-to-day operations."
              },
              { 
                title: "Collaboration And Networking", 
                desc: "Encourage stronger relationships and aligned opportunities across the fashion industry."
              },
              { 
                title: "Sustainable Entrepreneur Growth", 
                desc: "Help upcoming fashion entrepreneurs grow with better structure, resilience, and long-term thinking."
              },
              { 
                title: "Professionalism And Excellence", 
                desc: "Promote creativity, professionalism, and high standards within the fashion community."
              }
            ].map((value, index) => (
              <StaggerContainer key={index} delay={index * 0.1}>
                <StaggerItem>
                  <div className="premium-panel rounded-[1.75rem] p-8 transition-all hover:border-accent/50">
                    <h3 className="font-serif text-2xl mb-4 text-accent">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
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
