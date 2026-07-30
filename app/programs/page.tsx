'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Diamond, Users, Compass, Heart } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

const PROGRAM_IMAGE = '/DASA%20PICTURES/IMG_0812.jpg';

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

const pillars = [
  {
    icon: Diamond,
    title: 'Crafted with Intention',
    body: 'Every session is shaped around the real questions designers brought into the April room — prepared, thoughtful, and relevant to the business of fashion.',
  },
  {
    icon: Users,
    title: 'Founder to Founder',
    body: 'The room is built by someone who still runs a studio every day. The conversations speak to lived experience rather than abstract theory.',
  },
  {
    icon: Compass,
    title: 'Structure for Growth',
    body: 'Guidance on production, pricing, branding, and the operational systems that turn creative output into a sustainable studio.',
  },
  {
    icon: Heart,
    title: 'Beyond the Surface',
    body: 'Personal growth alongside professional craft — because a stronger brand often begins with a clearer, more confident founder.',
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen text-[var(--foreground)] font-sans overflow-hidden">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative px-6 pb-16 pt-24 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="absolute top-40 -left-32 h-[400px] w-[400px] rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="premium-panel relative overflow-hidden rounded-[2.25rem] px-8 py-16 md:px-14 md:py-20 text-center">
                <div className="absolute inset-0 soft-grid opacity-60" aria-hidden="true" />
                <div className="relative">
                  <p className="section-kicker">The Program</p>
                  <h1 className="mt-8 font-serif font-luxury text-4xl leading-[0.95] md:text-5xl lg:text-6xl">
                    One core format.
                    <br />
                    <span className="text-accent">A richer community experience.</span>
                  </h1>
                  <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
                    Preneurin currently has one public program: a live session created to bring fashion designers
                    together to learn, share experiences, build meaningful connections, and grow.
                  </p>
                  <div className="mt-12 flex items-center justify-center">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: 'easeOut' }}
                      className="h-px w-32 bg-accent/60"
                    />
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Program Detail Section */}
      <section className="relative py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] items-start">
            <StaggerContainer>
              <StaggerItem>
                <div className="premium-panel relative overflow-hidden rounded-[2rem] hover-tilt">
                  <div className="relative h-[320px] md:h-[480px]">
                    <Image
                      src={PROGRAM_IMAGE}
                      alt="Fashion designers in a live Preneurin-style learning environment"
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-primary/10 to-transparent" />
                    <div className="absolute left-6 top-6 md:left-8 md:top-8">
                      <div className="flex items-center gap-3 rounded-full border border-white/25 bg-black/30 px-4 py-2 backdrop-blur-xl">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] font-semibold tracking-[0.24em] text-white md:text-xs">
                          LIVE COMMUNITY FORMAT
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
                      <h3 className="font-serif text-2xl leading-tight text-white md:text-4xl">
                        A community room built for and by fashion founders.
                      </h3>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.1}>
              <StaggerItem>
                <div className="premium-panel rounded-[2rem] p-8 md:p-10 lg:sticky lg:top-28">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="chip">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Preneurin
                    </span>
                    <span className="rounded-full bg-white/70 px-4 py-2 text-sm text-gray-600 border border-[var(--border)]">
                      Community-led learning room
                    </span>
                  </div>

                  <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.05] md:text-4xl">
                    A fashion designer community expressed through one live format.
                  </h2>

                  <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
                    Preneurin is being built as a live learning and community experience exclusively for fashion designers.
                    The first session happened in April, and future editions are being shaped around the same promise:
                    a supportive space for learning, sharing, networking, and professional growth.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {programHighlights.map((item, idx) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.06 }}
                        whileHover={{ y: -3 }}
                        className="group rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/85 to-white/55 p-5 backdrop-blur-xl transition-all hover:border-accent/50 hover:shadow-[0_16px_40px_rgba(74,32,41,0.08)]"
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                          {item.label}
                        </p>
                        <p className="mt-2 text-base font-medium text-[var(--foreground)]">
                          {item.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="max-w-3xl mb-12">
                <p className="section-kicker">Four Pillars</p>
                <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
                  What every session is <span className="text-accent">designed around.</span>
                </h2>
              </div>
            </StaggerItem>
          </StaggerContainer>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar, idx) => (
              <StaggerContainer key={pillar.title} delay={idx * 0.08}>
                <StaggerItem>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -6 }}
                    className="group relative h-full overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-gradient-to-br from-white/95 via-white/80 to-white/60 p-8 md:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(74,32,41,0.06)] transition-all hover:shadow-[0_34px_90px_rgba(74,32,41,0.12)]"
                  >
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/8 blur-2xl transition-opacity group-hover:opacity-100" aria-hidden="true" />
                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-accent/15 to-transparent md:h-16 md:w-16">
                        <pillar.icon className="h-6 w-6 text-accent md:h-7 md:w-7" strokeWidth={1.75} />
                      </div>
                      <h3 className="mt-6 font-serif text-2xl md:text-3xl">{pillar.title}</h3>
                      <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                        {pillar.body}
                      </p>
                      <div className="mt-7 h-px w-12 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover:w-20" />
                    </div>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="relative pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="premium-panel relative overflow-hidden rounded-[2.25rem] p-8 md:p-14">
                <div className="absolute inset-0 editorial-shell opacity-50" aria-hidden="true" />
                <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
                  <div>
                    <p className="section-kicker">What Designers Can Expect</p>
                    <h3 className="mt-6 font-serif font-luxury text-2xl leading-[1.1] md:text-4xl mb-6">
                      A more thoughtful kind of fashion learning space.
                    </h3>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      className="h-px w-20 bg-gradient-to-r from-accent to-transparent"
                    />
                  </div>

                  <div className="space-y-4">
                    {programOutcomes.map((outcome, idx) => (
                      <motion.div
                        key={outcome}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        className="group relative flex items-start gap-5 rounded-2xl border border-[var(--border)] bg-white/70 px-6 py-5 backdrop-blur-xl transition-all hover:border-accent/40 hover:bg-white/90"
                      >
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/25 to-accent/5">
                          <span className="font-serif text-lg font-semibold text-accent md:text-xl">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                          {outcome}
                        </p>
                      </motion.div>
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
