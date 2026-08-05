'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Leaf, Target, Users, BriefcaseBusiness, Award } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

const ABOUT_HERO_IMAGE = '/DASA PICTURES/IMG_0519.jpg';
const ABOUT_STORY_IMAGE = '/DASA PICTURES/IMG_0815.jpg';

const values = [
  {
    icon: Heart,
    title: 'Supportive Platform',
    tagline: 'A room where creators feel seen.',
    body: 'Preneurin is designed to be a safe space for designers to share the raw, real, unglamoured parts of running a fashion business.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Mentorship',
    tagline: 'Guidance from someone in the work.',
    body: 'Direct, practical mentorship rooted in lived studio experience — rather than theory from those who no longer build brands every day.',
  },
  {
    icon: Target,
    title: 'Business Guidance',
    tagline: 'Turning craft into enterprise.',
    body: 'Clear conversations around pricing, production, client relations, and operational structure so creative work becomes sustainable work.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    tagline: 'Fashion founders together.',
    body: 'A space where ideas cross-pollinate and collaboration happens naturally — between designers, between specialties, and between audiences.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Growth',
    tagline: 'Grow thoughtfully, not loudly.',
    body: 'Growth is approached as a long-term craft rather than a short-term race. Preneurin celebrates progress that compounds season after season.',
  },
  {
    icon: Award,
    title: 'Excellence',
    tagline: 'The standard we bring.',
    body: 'From how a session is run to how designers leave the room — every detail of Preneurin is shaped to raise professional standards for African fashion.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen text-[var(--foreground)] font-sans overflow-hidden">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative px-6 pb-16 pt-24 overflow-hidden">
        <div className="absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="absolute top-20 -left-20 h-[360px] w-[360px] rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
                <div>
                  <p className="section-kicker">About Preneurin</p>
                  <h1 className="mt-8 font-serif font-luxury text-4xl leading-[0.92] md:text-5xl lg:text-6xl xl:text-7xl">
                    A fashion community
                    <br />
                    <span className="text-accent">built from a real room.</span>
                  </h1>
                  <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                    Not an imagined one. Preneurin is being built around the honest, unglamoured conversations
                    fashion founders actually need — live, human, and in the room.
                  </p>
                  <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-[var(--foreground)] md:text-lg">
                    Preneurin exists to ensure that no fashion designer has to navigate the industry alone.
                  </p>
                  <div className="mt-12 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10">
                      <Heart className="h-6 w-6 text-accent" strokeWidth={1.9} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-accent font-semibold">
                        Founded by
                      </p>
                      <p className="mt-1 font-serif text-xl md:text-2xl">
                        Damilola Hadassah Obisesan
                      </p>
                    </div>
                  </div>
                </div>

                <StaggerContainer delay={0.1}>
                  <StaggerItem>
                    <div className="premium-panel relative overflow-hidden rounded-[2.25rem] hover-tilt">
                      <div className="relative h-[420px] md:h-[560px]">
                        <Image
                          src={ABOUT_HERO_IMAGE}
                          alt="Damilola Hadassah Obisesan, founder of Preneurin and Dassah Oikos"
                          fill
                          priority
                          sizes="(min-width: 1024px) 45vw, 100vw"
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/8 to-transparent" />
                        <div className="absolute left-6 top-6 md:left-8 md:top-8">
                          <div className="flex items-center gap-3 rounded-full border border-white/25 bg-black/35 px-4 py-2 backdrop-blur-xl">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                            <span className="text-[10px] font-semibold tracking-[0.24em] text-white md:text-xs">
                              FOUNDER LED
                            </span>
                          </div>
                        </div>
                        <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
                          <p className="font-serif text-2xl leading-tight text-white md:text-4xl">
                            Built from one room.
                            <br />
                            Built for many more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* How It Started Story Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="premium-panel relative overflow-hidden rounded-[2.25rem] p-8 md:p-14 lg:p-16">
                <div className="absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full bg-accent/8 blur-3xl" aria-hidden="true" />
                <div className="absolute inset-0 editorial-shell opacity-40" aria-hidden="true" />

                <div className="relative grid items-center gap-14 lg:gap-20 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative">
                    <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full border border-accent/30" aria-hidden="true" />
                    <div className="relative overflow-hidden rounded-[1.75rem] h-[380px] md:h-[500px] shadow-[0_30px_80px_rgba(74,32,41,0.16)]">
                      <Image
                        src={ABOUT_STORY_IMAGE}
                        alt="The atmosphere inside the first Preneurin session in April"
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
                      <div className="absolute bottom-5 left-5">
                        <span className="font-serif text-5xl text-white/95 drop-shadow-xl md:text-6xl">
                          01
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="section-kicker">How It Started</p>
                    <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.02] md:text-4xl lg:text-5xl">
                      The first session happened in April.
                      <br />
                      <span className="text-accent">Everything grew from there.</span>
                    </h2>
                    <div className="mt-10 h-px w-20 bg-gradient-to-r from-accent to-transparent" />
                    <div className="mt-10 space-y-5 text-base leading-relaxed text-gray-600 md:text-lg">
                      <p>
                        Preneurin began with a question: what if fashion designers in Nigeria had a room where
                        the real business questions were actually on the table — not just fashion-week aesthetics
                        and Instagram reels, but pricing, production, client boundaries, and sustainability?
                      </p>
                      <p>
                        That question became a live session. The session became proof that these conversations
                        are needed, real, and transformative when the room is right.
                      </p>
                      <p>
                        Today, Preneurin is being developed around what was learned in that April room.
                        The community is still early. The promise is already clear.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Vision & Aim */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="mb-12 max-w-3xl">
                <p className="section-kicker">Vision &amp; Aim</p>
                <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
                  The community we are building,
                  <br />
                  <span className="text-accent">and the promise it keeps.</span>
                </h2>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            <StaggerContainer>
              <StaggerItem>
                <div className="premium-panel relative h-full overflow-hidden rounded-[2.25rem] p-8 md:p-10 lg:p-12">
                  <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 via-accent/25 to-transparent md:h-16 md:w-16">
                    <Heart className="h-6 w-6 text-accent md:h-7 md:w-7" strokeWidth={1.8} />
                  </div>
                  <p className="relative mt-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent md:text-xs">
                    Vision
                  </p>
                  <h3 className="relative mt-5 font-serif font-luxury text-3xl leading-tight md:text-4xl">
                    To build the most trusted community for fashion designers.
                  </h3>
                  <div className="relative mt-8 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
                  <p className="relative mt-8 text-base leading-relaxed text-gray-600 md:text-lg">
                    To build the most trusted community for fashion designers, where creatives
                    are empowered through meaningful conversations, shared experiences,
                    collaboration, and continuous growth.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.12}>
              <StaggerItem>
                <div className="premium-panel relative h-full overflow-hidden rounded-[2.25rem] p-8 md:p-10 lg:p-12">
                  <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent md:h-16 md:w-16">
                    <Target className="h-6 w-6 text-primary md:h-7 md:w-7" strokeWidth={1.8} />
                  </div>
                  <p className="relative mt-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent md:text-xs">
                    Aim
                  </p>
                  <h3 className="relative mt-5 font-serif font-luxury text-3xl leading-tight md:text-4xl">
                    To connect, support, and empower fashion designers.
                  </h3>
                  <div className="relative mt-8 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
                  <p className="relative mt-8 text-base leading-relaxed text-gray-600 md:text-lg">
                    To connect, support, and empower fashion designers by creating spaces
                    where they can learn, share experiences, and grow together.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="max-w-3xl mb-16">
                <p className="section-kicker">Six Values</p>
                <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
                  The principles that shape
                  <br />
                  <span className="text-accent"> every room Preneurin builds.</span>
                </h2>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, idx) => (
              <StaggerContainer key={value.title} delay={idx * 0.06}>
                <StaggerItem>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="group relative h-full overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-gradient-to-br from-white/92 via-white/80 to-white/55 p-7 md:p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(74,32,41,0.06)] transition-all hover:shadow-[0_36px_100px_rgba(74,32,41,0.14)]"
                  >
                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent/7 blur-2xl transition-opacity group-hover:opacity-100" aria-hidden="true" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-accent/18 to-transparent md:h-14 md:w-14">
                        <value.icon className="h-5 w-5 text-accent md:h-6 md:w-6" strokeWidth={1.75} />
                      </div>
                      <div className="mt-6 flex items-center justify-between gap-4">
                        <h3 className="font-serif text-2xl md:text-3xl">{value.title}</h3>
                        <span className="font-serif text-3xl text-accent/15 md:text-4xl">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm font-semibold tracking-wide text-accent md:text-base">
                        {value.tagline}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                        {value.body}
                      </p>
                      <div className="mt-6 h-px w-12 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover:w-20" />
                    </div>
                  </motion.article>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-gradient-to-br from-primary via-[#5a2833] to-primary px-8 py-16 text-center shadow-[0_50px_120px_rgba(74,32,41,0.28)] md:px-14 md:py-20">
                <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
                  <Image
                    src={ABOUT_STORY_IMAGE}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  className="relative mx-auto mb-12 h-px w-28 origin-center bg-accent/60"
                />
                <h2 className="relative font-serif font-luxury text-2xl leading-tight text-white md:text-3xl lg:text-4xl">
                  Preneurin is building the room African fashion founders deserve.
                </h2>
                <p className="relative mx-auto mt-10 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                  One session at a time, one conversation at a time, one designer supported at a time.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
