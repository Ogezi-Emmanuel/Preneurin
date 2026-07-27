'use client';

import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

const PROGRAM_IMAGE = '/DASA%20PICTURES/IMG_0812.jpg';

export default function ProgramsPage() {
  const programHighlights = [
    { label: 'Current Format', value: 'Live community session' },
    { label: 'Audience', value: 'Fashion designers only' },
    { label: 'Core Experience', value: 'Learn, share, connect, grow' },
    { label: 'Focus', value: 'Community, clarity, professionalism' },
  ];

  const programOutcomes = [
    'A room where designers can share experiences and learn from each other with honesty.',
    'Practical guidance on production, pricing, branding, and the day-to-day decisions that shape growth.',
    'A stronger sense of professional community, collaboration, and meaningful connection.',
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
                <p className="section-kicker">Programs</p>
                <h1 className="mt-6 font-serif font-luxury text-5xl leading-tight md:text-7xl lg:text-8xl">
                  One core format. A richer community experience.
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
                  Preneurin currently has one public program: a live session created to bring fashion designers together to learn, share experiences, build meaningful connections, and grow.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Program Detail Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <StaggerContainer>
              <StaggerItem>
                <div className="premium-panel overflow-hidden rounded-[2rem]">
                  <div className="relative h-[320px] md:h-[420px]">
                    <Image
                      src={PROGRAM_IMAGE}
                      alt="Fashion designers in a live Preneurin-style learning environment"
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.1}>
              <StaggerItem>
                <div className="premium-panel rounded-[2rem] p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-accent/30 px-4 py-2 text-sm tracking-[0.18em] text-accent">
                      PRENEURIN
                    </span>
                    <span className="rounded-full bg-white/65 px-4 py-2 text-sm text-gray-600">
                      Community-led learning room
                    </span>
                  </div>

                  <h2 className="mt-6 font-serif text-4xl md:text-5xl">
                    A fashion designer community expressed through one live format.
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-gray-600">
                    Preneurin is being built as a live learning and community experience exclusively for fashion designers. The first session happened in April, and future editions are being shaped around the same promise: a supportive space for learning, sharing, networking, and professional growth.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {programHighlights.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-white/60 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-accent">{item.label}</p>
                        <p className="mt-2 text-sm text-gray-700">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="premium-panel rounded-[2rem] p-8 md:p-10">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <p className="section-kicker">What Designers Can Expect</p>
                    <h3 className="mt-6 font-serif text-3xl mb-4">A more thoughtful kind of fashion learning space.</h3>
                    <p className="text-gray-600 leading-relaxed">
                      This page reflects only the real Preneurin format. There are no extra public offers listed here because the value is currently in the room itself: the conversation, the learning, and the community being built carefully.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {programOutcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="rounded-2xl border border-[var(--border)] bg-white/60 px-5 py-4 text-gray-700"
                      >
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
