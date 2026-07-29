'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Quote } from 'lucide-react';
import { useRef, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

const BTS_VIDEO = '/DASA BTS.mp4';
const EXPERIENCE_VIDEO = '/Preneurin!.mp4';
const BTS_POSTER = '/DASA PICTURES/IMG_0718.jpg';

const sessionMoments = [
  {
    label: '001',
    title: 'The First Room',
    body: 'Preneurin began with one live session in April. The starting point was simple: gather fashion designers in a room honest enough to talk about the business problems that usually stay hidden.',
    image: '/DASA PICTURES/IMG_0745.jpg',
  },
  {
    label: '002',
    title: 'What Designers Brought',
    body: 'The conversations centered on pricing, production pressure, client boundaries, and the operational decisions that affect whether a studio grows well or keeps running on stress.',
    image: '/DASA PICTURES/IMG_0766.jpg',
  },
  {
    label: '003',
    title: 'What Comes Next',
    body: 'That first session is now the foundation. Preneurin is using what it learned there to shape future sessions, supporting resources, and early collaboration opportunities.',
    image: '/DASA PICTURES/IMG_0826.jpg',
  },
];

const sessionGallery = [
  { src: '/DASA PICTURES/IMG_0498.jpg', alt: 'Opening moment from the Preneurin April session' },
  { src: '/DASA PICTURES/IMG_0508.jpg', alt: 'Fashion community interaction at the Preneurin session' },
  { src: '/DASA PICTURES/IMG_0514.jpg', alt: 'Guests gathered during the Preneurin April event' },
  { src: '/DASA PICTURES/IMG_0519.jpg', alt: 'Stage conversation during the Preneurin Forum session' },
  { src: '/DASA PICTURES/IMG_0521.jpg', alt: 'Founder moment from the Preneurin event space' },
  { src: '/DASA PICTURES/IMG_0524.jpg', alt: 'Preneurin guests in conversation during the April session' },
  { src: '/DASA PICTURES/IMG_0584.jpg', alt: 'Another candid moment from the Preneurin room' },
  { src: '/DASA PICTURES/IMG_0600.jpg', alt: 'Attendees inside the Preneurin April gathering' },
  { src: '/DASA PICTURES/IMG_0629.jpg', alt: 'Visual moment from the Preneurin April session' },
  { src: '/DASA PICTURES/IMG_0655.jpg', alt: 'Fashion founder interaction during the Preneurin session' },
  { src: '/DASA PICTURES/IMG_0659.jpg', alt: 'Another documentary-style view of the April session' },
  { src: '/DASA PICTURES/IMG_0667.jpg', alt: 'Guests participating in the Preneurin Forum gathering' },
  { src: '/DASA PICTURES/IMG_0675.jpg', alt: 'Attendee moment from Preneurin Forum' },
  { src: '/DASA PICTURES/IMG_0682.jpg', alt: 'Session atmosphere inside the Preneurin event' },
  { src: '/DASA PICTURES/IMG_0700.jpg', alt: 'Live room image from the first Preneurin session' },
  { src: '/DASA PICTURES/IMG_0709.jpg', alt: 'Founders and guests during the April Preneurin room' },
  { src: '/DASA PICTURES/IMG_0712.jpg', alt: 'A quiet documentary frame from the Preneurin event' },
  { src: '/DASA PICTURES/IMG_0718.jpg', alt: 'Designers seated during the Preneurin April session' },
  { src: '/DASA PICTURES/IMG_0720.jpg', alt: 'Community image from the Preneurin April event' },
  { src: '/DASA PICTURES/IMG_0735.jpg', alt: 'Audience perspective from Preneurin Forum' },
  { src: '/DASA PICTURES/IMG_0736.jpg', alt: 'Another attendee perspective from the April session' },
  { src: '/DASA PICTURES/IMG_0737.jpg', alt: 'Detail from the Preneurin event experience' },
  { src: '/DASA PICTURES/IMG_0739.jpg', alt: 'A candid moment from the Preneurin first session' },
  { src: '/DASA PICTURES/IMG_0740.jpg', alt: 'Audience engagement during the first Preneurin room' },
  { src: '/DASA PICTURES/IMG_0745.jpg', alt: 'Session presentation moment from Preneurin Forum' },
  { src: '/DASA PICTURES/IMG_0747.jpg', alt: 'Guests in the Preneurin room during the April session' },
  { src: '/DASA PICTURES/IMG_0752.jpg', alt: 'Another documentary image from the Preneurin event' },
  { src: '/DASA PICTURES/IMG_0759.jpg', alt: 'A live scene from the Preneurin Forum gathering' },
  { src: '/DASA PICTURES/IMG_0766.jpg', alt: 'Designers listening during the Preneurin April session' },
  { src: '/DASA PICTURES/IMG_0770.jpg', alt: 'Another real moment from the Preneurin event' },
  { src: '/DASA PICTURES/IMG_0797.jpg', alt: 'Another view of the Preneurin April gathering' },
  { src: '/DASA PICTURES/IMG_0810.jpg', alt: 'Documentary image from the Preneurin first session' },
  { src: '/DASA PICTURES/IMG_0812.jpg', alt: 'Audience and room detail from the Preneurin event' },
  { src: '/DASA PICTURES/IMG_0815.jpg', alt: 'Community view from the Preneurin April room' },
  { src: '/DASA PICTURES/IMG_0826.jpg', alt: 'Another scene from Preneurin Forum' },
  { src: '/DASA PICTURES/IMG_0842.jpg', alt: 'An additional event image from the Preneurin session' },
  { src: '/DASA PICTURES/IMG_0847.jpg', alt: 'Closing atmosphere from the Preneurin April room' },
  { src: '/DASA PICTURES/IMG_0856.jpg', alt: 'A detailed scene from the first Preneurin session' },
];

const gallerySpanClass = (index: number) => {
  const pattern = [2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1];
  const spans = pattern[index % pattern.length];
  return spans === 2 ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-1';
};

const proofPoints = [
  'Every photo on this page was captured during the real April session.',
  'The BTS film on this page was shot on the same day.',
  'The gallery below documents the room and the people who were there.',
  'Every frame in the voices film came from a designer who actually attended.',
];

function SessionBTSVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = async () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      await videoRef.current.play();
      setIsPlaying(true);
      return;
    }
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] border border-[var(--border)] shadow-[0_50px_120px_rgba(74,32,41,0.18)]">
      <div className="relative aspect-[16/10] md:aspect-[21/12]">
        <video
          ref={videoRef}
          src={BTS_VIDEO}
          muted
          playsInline
          preload="none"
          poster={BTS_POSTER}
          controls={isPlaying}
          className="h-full w-full object-cover object-center"
          onClick={togglePlay}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
        <motion.button
          type="button"
          initial={{ opacity: 1 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-all hover:from-black/70"
          style={{ pointerEvents: isPlaying ? 'none' : 'auto' }}
          aria-label="Play behind the scenes video"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-3xl animate-pulse-slow" />
            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white/10 backdrop-blur-2xl border border-white/30 md:h-36 md:w-36"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent md:h-28 md:w-28">
                <Play className="ml-1 h-9 w-9 text-[#0A0A0A] md:h-11 md:w-11" />
              </div>
            </motion.div>
          </div>
        </motion.button>
        <div className="absolute left-6 top-6 md:left-8 md:top-8">
          <div className="flex items-center gap-3 rounded-full border border-white/20 bg-black/35 px-4 py-2 backdrop-blur-2xl">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.24em] text-white md:text-xs">
              BEHIND THE SCENES — APRIL SESSION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceVoicesVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = async () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      await videoRef.current.play();
      setIsPlaying(true);
      return;
    }
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] border border-[var(--border)] shadow-[0_50px_120px_rgba(74,32,41,0.18)]">
      <div className="relative h-[520px] md:h-[640px] lg:h-[720px]">
        <video
          ref={videoRef}
          src={EXPERIENCE_VIDEO}
          playsInline
          preload="metadata"
          controls
          className="h-full w-full object-cover object-center"
          onClick={togglePlay}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
        <motion.button
          type="button"
          initial={{ opacity: 1 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/20 to-black/10 transition-all hover:from-black/80"
          style={{ pointerEvents: isPlaying ? 'none' : 'auto' }}
          aria-label="Play designer voices video"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-3xl animate-pulse-slow" />
            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white/10 backdrop-blur-2xl border border-white/30 md:h-36 md:w-36"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent md:h-28 md:w-28">
                <Play className="ml-1 h-9 w-9 text-[#0A0A0A] md:h-11 md:w-11" />
              </div>
            </motion.div>
          </div>
        </motion.button>
        <div className="absolute left-6 top-6 md:left-8 md:top-8">
          <div className="flex items-center gap-3 rounded-full border border-white/20 bg-black/35 px-4 py-2 backdrop-blur-2xl">
            <Quote className="h-3 w-3 text-accent md:h-3.5 md:w-3.5" />
            <span className="text-[10px] font-semibold tracking-[0.24em] text-white md:text-xs">
              DESIGNER VOICES — FIRST SESSION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-6 py-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      {label && (
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-accent/80">
          {label}
        </span>
      )}
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
    </div>
  );
}

export default function FirstSessionPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <div className="min-h-screen text-[var(--foreground)] font-sans overflow-hidden">
      <Breadcrumb />

      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-[100svh] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/DASA PICTURES/IMG_0584.jpg"
            alt="Preneurin April session atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[40%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[var(--background)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-black/30" />
        </motion.div>
        <motion.div style={{ opacity }} className="relative z-10 flex h-full items-end px-6 pb-20 pt-32">
          <div className="mx-auto w-full max-w-7xl">
            <StaggerContainer>
              <StaggerItem>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/90">
                    First Live Session — April, Lagos
                  </span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <h1 className="mt-6 max-w-4xl font-serif font-luxury text-[2.8rem] leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-[7.2rem]">
                  The room where the community first came to life.
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
                  Preneurin is still early. What we can show honestly is where it began:
                  one live session in April and the atmosphere, conversations, and connection
                  that came out of it.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <div>
                    <p className="font-serif text-4xl text-accent md:text-5xl">04</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/70">Month</p>
                  </div>
                  <div className="h-10 w-px bg-white/20" />
                  <div>
                    <p className="font-serif text-4xl text-accent md:text-5xl">01</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/70">Room</p>
                  </div>
                  <div className="h-10 w-px bg-white/20" />
                  <div>
                    <p className="font-serif text-4xl text-accent md:text-5xl">∞</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/70">Beginning</p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="h-2 w-0.5 rounded-full bg-white/70"
            />
          </div>
        </motion.div>
      </section>

      {/* Proof + Origin Section */}
      <section className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <SectionDivider label="The Origin" />
            </StaggerItem>
            <StaggerItem>
              <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="section-kicker">Real Proof</p>
                  <h2 className="mt-6 font-serif font-luxury text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
                    One session. Real connection.
                    <br />
                    <span className="text-accent">A clear foundation.</span>
                  </h2>
                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
                    Preneurin was founded by Damilola Obisesan, Creative Director of Dassah Oikos,
                    to create a more meaningful community for fashion designers.
                    The first live session became the foundation for everything now being built.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full border border-accent/30" />
                  <div className="space-y-3">
                    {proofPoints.map((point) => (
                      <motion.div
                        key={point}
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/85 to-white/55 px-5 py-4 backdrop-blur-xl transition-all hover:border-accent/40"
                      >
                        <div className="absolute left-0 top-0 h-full w-0.5 bg-accent/0 transition-colors group-hover:bg-accent" />
                        <p className="pl-2 text-sm leading-relaxed text-gray-700 md:text-base">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* BTS Video Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="mb-16 flex items-end justify-between gap-6">
                <div>
                  <p className="section-kicker">Behind The Scenes</p>
                  <h2 className="mt-6 font-serif font-luxury text-4xl leading-[1.05] md:text-5xl lg:text-6xl max-w-3xl">
                    What the April session actually <span className="text-accent">felt like.</span>
                  </h2>
                </div>
                <div className="hidden md:block text-right">
                  <p className="text-xs uppercase tracking-[0.24em] text-accent">Chapter 01</p>
                  <p className="mt-1 font-serif text-2xl text-gray-500">01:32</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <SessionBTSVideo />
            </StaggerItem>
            <StaggerItem>
              <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-gray-600 md:text-xl">
                This BTS film adds movement and atmosphere to the real story of Preneurin&apos;s first room —
                showing the energy behind the conversations, the focus, and the shared community spirit.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Voices Section with Magazine Spread */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-transparent via-[var(--card)]/60 to-transparent">
        <div className="absolute inset-0 editorial-shell opacity-60" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <SectionDivider label="In Their Own Words" />
            </StaggerItem>
          </StaggerContainer>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <StaggerContainer>
              <StaggerItem>
                <div className="relative">
                  <Quote className="absolute -left-2 -top-8 h-20 w-20 text-accent/12 md:h-24 md:w-24" />
                  <p className="section-kicker">Designer Voices</p>
                  <h2 className="mt-6 font-serif font-luxury text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
                    Reflections from the people who were <span className="text-accent">in the room.</span>
                  </h2>
                  <p className="mt-8 text-lg leading-relaxed text-gray-600 md:text-xl">
                    Hear from designers about what they carried away from the first session —
                    the moments, the clarity, and the sense of community that stayed with them.
                  </p>
                  <div className="mt-10 flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {['/DASA PICTURES/IMG_0745.jpg', '/DASA PICTURES/IMG_0766.jpg', '/DASA PICTURES/IMG_0826.jpg'].map((src, i) => (
                        <div
                          key={src}
                          className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white md:h-14 md:w-14"
                          style={{ zIndex: 10 - i }}
                        >
                          <Image src={src} alt="" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">First-hand accounts</p>
                      <p className="text-sm text-gray-500">From attendees of the April session</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.15}>
              <StaggerItem>
                <ExperienceVoicesVideo />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Session Moments — Three Chapter Cards */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="section-kicker">Three Chapters</p>
                  <h2 className="mt-6 font-serif font-luxury text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
                    The beginning, in three <span className="text-accent">parts.</span>
                  </h2>
                </div>
                <p className="max-w-sm text-base leading-relaxed text-gray-600">
                  A look at how Preneurin started, what the room was about, and what it is shaping into.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {sessionMoments.map((moment, index) => (
              <StaggerContainer key={moment.title} delay={index * 0.12}>
                <StaggerItem>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white/70 backdrop-blur-xl shadow-[0_24px_70px_rgba(74,32,41,0.08)] transition-all duration-500 hover:shadow-[0_40px_100px_rgba(74,32,41,0.14)]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={moment.image}
                        alt={moment.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
                      <div className="absolute left-5 top-5">
                        <span className="font-serif text-5xl text-white/95 drop-shadow-lg md:text-6xl">
                          {moment.label}
                        </span>
                      </div>
                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="font-serif text-2xl leading-tight text-white md:text-3xl">
                          {moment.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7 md:p-8">
                      <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                        {moment.body}
                      </p>
                    </div>
                  </motion.article>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="mb-16 text-center">
                <SectionDivider label="Session Gallery" />
                <h2 className="mt-12 font-serif font-luxury text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
                  More from the <span className="text-accent">April room.</span>
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
                  These additional frames capture the atmosphere, attention,
                  and real shared experiences that defined Preneurin&apos;s first session.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[240px]">
            {sessionGallery.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: (index % 8) * 0.04 }}
                whileHover={{ scale: 1.015 }}
                className={`group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(74,32,41,0.14)] ${gallerySpanClass(index)}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-medium leading-snug text-white drop-shadow-md md:text-sm">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="relative rounded-[2.5rem] border border-[var(--border)] bg-gradient-to-br from-primary via-[#5a2833] to-primary px-8 py-20 text-center shadow-[0_50px_120px_rgba(74,32,41,0.28)] md:px-16 md:py-28 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
                  <Image
                    src="/DASA PICTURES/IMG_0815.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <Quote className="relative mx-auto mb-8 h-12 w-12 text-accent/80 md:h-16 md:w-16" />
                <h2 className="relative font-serif font-luxury text-3xl leading-tight text-white md:text-5xl lg:text-6xl">
                  A community built not from noise,
                  <br />
                  but from a single room full of honest conversation.
                </h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                  className="relative mx-auto mt-12 h-px w-24 origin-center bg-accent/60"
                />
                <p className="relative mx-auto mt-10 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                  This is where Preneurin started. The next sessions, the next rooms,
                  and the next conversations are being shaped from exactly this foundation.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
