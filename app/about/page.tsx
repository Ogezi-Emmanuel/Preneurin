'use client';

import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

const ABOUT_IMAGE = '/DASA%20PICTURES/IMG_0700.jpg';

export default function AboutPage() {
  return (
    <div className="min-h-screen text-[var(--foreground)] font-sans">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pb-24 px-6 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <StaggerContainer>
            <StaggerItem>
              <h1 className="font-serif font-luxury text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                About Preneurin
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-gray-500 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Preneurin is an early-stage, founder-led platform created to help fashion designers face the business side of growth with more honesty and structure.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[var(--card)] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <StaggerContainer>
              <StaggerItem>
                <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-8">
                  How It Started
                </h2>
              </StaggerItem>
              
              <StaggerItem>
                <div className="space-y-6 text-gray-500 dark:text-gray-300 text-lg leading-relaxed">
                  <p>
                    Preneurin began with one live session in April. It was created by Damilola Obiesan, Creative Director of Dassah Oikos, after years of seeing talented designers carry operational pressure in silence.
                  </p>
                  <p>
                    Instead of pretending to be a large institution from day one, Preneurin started as a practical room: a space to talk honestly about pricing, production bottlenecks, client issues, and the systems fashion founders need to grow well.
                  </p>
                  <p>
                    The photos on this site come from that first session. They represent the real starting point of the work, and they shape how we are building the next chapter.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.2}>
              <StaggerItem>
                <div className="rounded-3xl overflow-hidden border border-[var(--border)]">
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
              <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-12 text-center">
                What We Stand For
              </h2>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Founder-Led Clarity", 
                desc: "Preneurin is shaped by real studio experience and a founder who understands the pressure behind fashion growth."
              },
              { 
                title: "Practical Honesty", 
                desc: "We focus on the issues designers actually deal with: costing, production, client management, and decision-making under pressure."
              },
              { 
                title: "Truth Before Hype", 
                desc: "We would rather show one real session than invent scale we have not earned. Credibility matters."
              },
              { 
                title: "Steady Growth", 
                desc: "Preneurin is still early, and that means we can build carefully, learn from each session, and improve the format with intention."
              },
              { 
                title: "Designers First", 
                desc: "Every session, initiative, and resource is meant to solve real friction for fashion designers, not create more noise."
              },
              { 
                title: "Open Collaboration", 
                desc: "We are open to aligned sponsors and ecosystem partners who want to help fashion founders grow with substance."
              }
            ].map((value, index) => (
              <StaggerContainer key={index} delay={index * 0.1}>
                <StaggerItem>
                  <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 hover:border-accent/50 transition-all">
                    <h3 className="font-serif text-2xl mb-4 text-accent">{value.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{value.desc}</p>
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
