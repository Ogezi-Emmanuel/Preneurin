'use client';

import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

export default function InitiativesPage() {
  const initiatives = [
    { 
      title: "Designer Spotlight Series", 
      desc: "A developing editorial feature that highlights designers whose journeys can help other founders think more clearly about growth, operations, and resilience.",
      objective: "Surface honest lessons from real founders and make useful studio conversations more visible.",
      eligibility: "Best suited for designers with a clear point of view, active work, and practical lessons worth sharing.",
      benefits: "Visibility, stronger founder credibility, and story assets that can support future opportunities.",
      image: "/DASA%20PICTURES/IMG_0759.jpg"
    },
    { 
      title: "Industry Openings", 
      desc: "A relationship-building track for future collaborations with manufacturers, service providers, and aligned ecosystem partners.",
      objective: "Create a clearer path for trustworthy support as Preneurin grows beyond its first session.",
      eligibility: "Open to aligned collaborators and fashion founders whose work strengthens the ecosystem.",
      benefits: "Early partnership conversations, stronger support pathways, and better long-term access to relevant expertise.",
      image: "/DASA%20PICTURES/IMG_0810.jpg"
    },
    { 
      title: "Studio Scale-Up Circle", 
      desc: "A planned initiative for designers preparing for their next level of structure, visibility, and production readiness.",
      objective: "Support promising brands with sharper execution plans before expansion becomes chaotic.",
      eligibility: "Intended for active fashion brands with at least one launched collection and a clearly defined growth goal.",
      benefits: "More focused feedback, stronger internal systems, and clearer readiness for future opportunities.",
      image: "/DASA%20PICTURES/IMG_0842.jpg"
    },
    { 
      title: "Resource Library", 
      desc: "A growing bank of practical tools, checklists, templates, and reference guides for fashion business operations.",
      objective: "Give designers reusable tools they can apply quickly without depending on guesswork.",
      eligibility: "Designed for designers who engage with Preneurin sessions, content, and future touchpoints.",
      benefits: "Faster implementation, clearer decision support, and more organized studio operations.",
      image: "/DASA%20PICTURES/IMG_0736.jpg"
    }
  ];

  return (
    <div className="min-h-screen text-[var(--foreground)] font-sans">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="px-6 pb-24 pt-32">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="premium-panel rounded-[2.25rem] px-8 py-14 text-center md:px-14">
                <p className="section-kicker">Initiatives</p>
                <h1 className="mt-6 font-serif font-luxury text-5xl leading-tight md:text-7xl lg:text-8xl">
                  Support tracks growing around the community.
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
                  These are the initiatives Preneurin is shaping around its core live session so fashion designers can gain more visibility, stronger support, and deeper connection over time.
                </p>
              </div>
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
                  <div className="group premium-panel rounded-[2rem] p-6 md:p-8">
                    <div className="mb-6 overflow-hidden rounded-3xl border border-[var(--border)]">
                      <Image
                        src={initiative.image}
                        alt={initiative.title}
                        width={1600}
                        height={1000}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="h-[300px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="section-kicker">{initiative.title}</p>
                    <p className="mt-5 text-gray-600 leading-relaxed">{initiative.desc}</p>
                    <div className="mt-6 space-y-4">
                      <div className="rounded-2xl bg-white/60 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-accent">Objective</p>
                        <p className="mt-2 text-sm text-gray-600">{initiative.objective}</p>
                      </div>
                      <div className="rounded-2xl bg-white/60 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-accent">Eligibility</p>
                        <p className="mt-2 text-sm text-gray-600">{initiative.eligibility}</p>
                      </div>
                      <div className="rounded-2xl bg-white/60 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-accent">Benefits</p>
                        <p className="mt-2 text-sm text-gray-600">{initiative.benefits}</p>
                      </div>
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
