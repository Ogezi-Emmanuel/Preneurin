'use client';

import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

const PROGRAM_IMAGE = '/DASA%20PICTURES/IMG_0812.jpg';

export default function ProgramsPage() {
  const programHighlights = [
    { label: 'Current Format', value: 'Live founder-led session' },
    { label: 'Next Phase', value: 'Growing toward a biannual rhythm' },
    { label: 'Audience', value: 'Fashion designers only' },
    { label: 'Focus', value: 'Operations, structure, growth' },
  ];

  const programOutcomes = [
    'Clarity on pricing, staffing, production, and client management decisions.',
    'A founder-led format shaped by what came up in the first April session.',
    'A practical learning room for designers who want substance before scale.',
  ];

  return (
    <div className="min-h-screen text-[var(--foreground)] font-sans">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pb-24 px-6 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <StaggerContainer>
            <StaggerItem>
              <h1 className="font-serif font-luxury text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                Our Programs
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-gray-500 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Preneurin currently has one core offering: a live session format for fashion designers, with future editions intended to grow into a biannual rhythm.
              </p>
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
                <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]">
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
                <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-accent/30 px-4 py-2 text-sm tracking-[0.18em] text-accent">
                      PRENEURIN
                    </span>
                    <span className="rounded-full bg-[var(--background)] px-4 py-2 text-sm text-gray-500 dark:text-gray-300">
                      Founder-led live session
                    </span>
                  </div>

                  <h2 className="mt-6 font-serif text-4xl md:text-5xl">
                    A practical format shaped by one real session.
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-gray-500 dark:text-gray-300">
                    Preneurin is being built as a live, founder-led learning format exclusively for fashion designers. The first session happened in April, and future editions are being developed around the same goal: helping founders confront operational friction, make better decisions, and grow with practical clarity.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {programHighlights.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-accent">{item.label}</p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.value}</p>
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
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-10">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <h3 className="font-serif text-3xl mb-4">What designers can expect</h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed">
                      This page reflects only the real Preneurin format. There are no extra bootcamps, masterclasses, or layered offers listed here because they are not part of the current public experience.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {programOutcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--background)] px-5 py-4 text-gray-500 dark:text-gray-300"
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
