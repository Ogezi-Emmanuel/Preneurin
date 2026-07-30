'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, Briefcase, Target, BookOpen, ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

const initiatives = [
  {
    tag: 'Spotlight',
    icon: Eye,
    title: 'Designer Spotlight Series',
    image: '/DASA PICTURES/IMG_0759.jpg',
    intro:
      'A growing editorial series that puts the work, story, and craft of Preneurin designers in the foreground — for the work to be seen on merit, not on algorithmic timing.',
    sections: [
      {
        label: 'Objective',
        body: 'Build a publishing and exposure path for members where craft, process, and personal story take center stage alongside the finished collection.',
      },
      {
        label: 'Eligibility',
        body: 'Active Preneurin members and participants of the core live session format who have a body of work ready to share with a wider audience.',
      },
      {
        label: 'Benefits',
        body: 'Shared storytelling, cross-promotion across Preneurin channels, and an evergreen archive that continues to earn discovery for designers over time.',
      },
    ],
  },
  {
    tag: 'Openings',
    icon: Briefcase,
    title: 'Industry Openings',
    image: '/DASA PICTURES/IMG_0810.jpg',
    intro:
      'Curated work opportunities, internships, roles, and collaborations shared through Preneurin so designers can move between being in the room and being in paid work.',
    sections: [
      {
        label: 'Objective',
        body: 'Shorten the gap between learning inside Preneurin sessions and real, revenue-generating or career-building opportunities outside the room.',
      },
      {
        label: 'Eligibility',
        body: 'Members and session attendees who are actively seeking partnerships, freelance roles, residencies, or full-time positions in the industry.',
      },
      {
        label: 'Benefits',
        body: 'Pre-screened openings, reduced noise for founders hiring, and a direct referral channel between Preneurin and the wider fashion ecosystem.',
      },
    ],
  },
  {
    tag: 'Scale-Up',
    icon: Target,
    title: 'Studio Scale-Up Circle',
    image: '/DASA PICTURES/IMG_0842.jpg',
    intro:
      'A focused peer circle for designers ready to raise their operational standard — from pricing to production to client systems to studio rhythm.',
    sections: [
      {
        label: 'Objective',
        body: 'Turn creative studios into professionally structured businesses by working through the systems, pricing models, and operational habits that create scale.',
      },
      {
        label: 'Eligibility',
        body: 'Founders who have already shipped work and clients consistently, and now want to move past inconsistent revenue and fragmented operations.',
      },
      {
        label: 'Benefits',
        body: 'Structured peer accountability, founder-to-founder practical reviews, and a clear framework to apply to pricing, production, hiring, and client pipelines.',
      },
    ],
  },
  {
    tag: 'Library',
    icon: BookOpen,
    title: 'Resource Library',
    image: '/DASA PICTURES/IMG_0736.jpg',
    intro:
      'An expanding knowledge base of templates, checklists, guides, and references created specifically for fashion studios — to make best practice practical, not theoretical.',
    sections: [
      {
        label: 'Objective',
        body: 'Make professional guidance easy to apply inside the actual workweek of a fashion designer, with templates that work for African operating realities.',
      },
      {
        label: 'Eligibility',
        body: 'All Preneurin members and session participants. Materials evolve based on the most common questions raised in live sessions.',
      },
      {
        label: 'Benefits',
        body: 'Instant access to practical files, founder-tested workflows, and standardized documents for pricing briefs, client onboarding, and production planning.',
      },
    ],
  },
];

export default function InitiativesPage() {
  return (
    <div className="min-h-screen text-[var(--foreground)] font-sans overflow-hidden">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative px-6 pb-16 pt-24 overflow-hidden">
        <div className="absolute -top-32 -right-20 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="absolute top-32 -left-24 h-[380px] w-[380px] rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="premium-panel relative overflow-hidden rounded-[2.25rem] px-8 py-16 md:px-14 md:py-20 text-center">
                <div className="absolute inset-0 soft-grid opacity-50" aria-hidden="true" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                    Initiatives
                  </p>
                  <h1 className="mt-8 font-serif font-luxury text-4xl leading-[0.93] md:text-5xl lg:text-6xl">
                    Four ways Preneurin is
                    <br />
                    <span className="text-accent"> moving beyond the room.</span>
                  </h1>
                  <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
                    The live session format is the foundation.
                    These four initiatives are how Preneurin converts a single conversation
                    into ongoing exposure, real opportunity, and growth systems for designers.
                  </p>
                  <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                    {initiatives.map((init, idx) => (
                      <motion.div
                        key={init.tag}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        className="chip"
                      >
                        <init.icon className="h-3 w-3" />
                        {init.tag}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="relative pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:gap-16">
            {initiatives.map((initiative, idx) => (
              <StaggerContainer key={initiative.title} delay={0.08}>
                <StaggerItem>
                  <article
                    className={`relative overflow-hidden rounded-[2.25rem] border border-[var(--border)] bg-gradient-to-br from-white/92 via-white/78 to-white/55 backdrop-blur-xl shadow-[0_30px_80px_rgba(74,32,41,0.09)] ${
                      idx % 2 === 1 ? 'lg:bg-gradient-to-bl' : ''
                    }`}
                  >
                    <div
                      className={`absolute ${
                        idx % 2 === 0 ? '-top-20 -right-20' : '-bottom-20 -left-20'
                      } h-[320px] w-[320px] rounded-full bg-accent/7 blur-3xl`}
                      aria-hidden="true"
                    />
                    <div className={`grid lg:grid-cols-2 items-stretch gap-0`}>
                      <div
                        className={`relative min-h-[340px] md:min-h-[440px] ${
                          idx % 2 === 1 ? 'lg:order-2' : ''
                        }`}
                      >
                        <Image
                          src={initiative.image}
                          alt={initiative.title}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover"
                          priority={idx < 1}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/8 to-transparent lg:bg-gradient-to-r lg:from-primary/10 lg:via-primary/4 lg:to-transparent" />
                        <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8 lg:hidden">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-xl border border-white/20">
                              <initiative.icon className="h-4 w-4 text-accent" />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
                              Initiative {String(idx + 1).padStart(2, '0')} · {initiative.tag}
                            </span>
                          </div>
                          <h3 className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl">
                            {initiative.title}
                          </h3>
                        </div>
                        <div className="absolute left-6 top-6 md:left-8 md:top-8 hidden lg:block">
                          <div className="flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-xl">
                            <initiative.icon className="h-3.5 w-3.5 text-accent" />
                            <span className="text-[10px] font-semibold tracking-[0.24em] text-white md:text-xs">
                              {String(idx + 1).padStart(2, '0')} · {initiative.tag.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-8 md:p-12 lg:p-14 xl:p-16">
                        <div className="mb-6 hidden items-center gap-3 lg:flex">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-accent/18 to-transparent">
                            <initiative.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                          </div>
                          <span className="font-serif text-5xl text-accent/15">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <h2 className="font-serif font-luxury text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
                          {initiative.title}
                        </h2>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="mt-6 h-px w-20 bg-gradient-to-r from-accent to-transparent"
                        />
                        <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg lg:text-xl">
                          {initiative.intro}
                        </p>

                        <div className="mt-10 space-y-4">
                          {initiative.sections.map((section, sIdx) => {
                            return (
                              <motion.div
                                key={section.label}
                                initial={{ opacity: 0, x: 8 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: sIdx * 0.08 }}
                                className="group relative rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/85 to-white/55 px-5 py-5 md:px-6 md:py-6 backdrop-blur-xl transition-all hover:border-accent/45 hover:shadow-[0_18px_50px_rgba(74,32,41,0.08)]"
                              >
                                <div className="absolute left-0 top-0 h-full w-0.5 bg-accent/0 transition-colors group-hover:bg-accent" />
                                <div className="flex items-start gap-4">
                                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent/5">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                                      {section.label.slice(0, 3)}
                                    </span>
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                                      {section.label}
                                    </p>
                                    <p className="mt-1.5 text-sm leading-relaxed text-gray-700 md:text-base">
                                      {section.body}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="premium-panel relative overflow-hidden rounded-[2.25rem] p-8 md:p-14 text-center">
                <div className="absolute inset-0 editorial-shell opacity-40" aria-hidden="true" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                    Join The Build
                  </p>
                  <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
                    A community where
                    <br />
                    <span className="text-accent">the conversation continues.</span>
                  </h2>
                  <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                    These initiatives evolve based on what designers actually need inside the live sessions.
                    Reach out to register your interest in upcoming editions, partnerships, or participation.
                  </p>
                  <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(74,32,41,0.22)] transition-all hover:bg-[#5a2833] hover:shadow-[0_28px_70px_rgba(74,32,41,0.3)]"
                      >
                        Register Interest
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/programs"
                        className="group inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-white/70 backdrop-blur-xl px-8 py-4 font-semibold text-[var(--foreground)] transition-all hover:border-accent hover:text-accent"
                      >
                        Explore Core Format
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </motion.div>
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
