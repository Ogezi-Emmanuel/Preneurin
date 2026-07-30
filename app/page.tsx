'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Send, ChevronRight, ChevronLeft, Play, Plus, Minus, Quote, CheckCircle2, Compass, Info, Heart, BriefcaseBusiness } from 'lucide-react';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

const DASA_MEDIA_ROOT = '/DASA PICTURES';
const HERO_IMAGE = `${DASA_MEDIA_ROOT}/IMG_0812.jpg`;
const COMMUNITY_IMAGE = `${DASA_MEDIA_ROOT}/IMG_0815.jpg`;
const BTS_POSTER_IMAGE = `${DASA_MEDIA_ROOT}/IMG_0718.jpg`;
const FOUNDER_IMAGE = '/IMG_0580.JPG.jpeg';
const VISION_VIDEOS = [
  { src: '/Preneurin 2!.mp4', label: 'Vision Chapter 01', title: 'Why this community exists' },
  { src: '/Preneurin Video.mp4', label: 'Vision Chapter 02', title: 'What designers can expect' },
];
const CONTACT_EMAIL = 'secretariat@preneurin.org';
const COMMUNITY_OBJECTIVES = [
  {
    label: '01',
    title: 'Knowledge Sharing',
    description: 'Bring emerging and established fashion designers together to learn from shared experiences and practical insight.',
  },
  {
    label: '02',
    title: 'Business Guidance',
    description: 'Offer clarity around production, pricing, branding, and the business systems that help creative work grow sustainably.',
  },
  {
    label: '03',
    title: 'Meaningful Connections',
    description: 'Create room for networking, collaboration, and the kinds of relationships that make founders feel less alone.',
  },
  {
    label: '04',
    title: 'Entrepreneur Growth',
    description: 'Support upcoming fashion entrepreneurs as they grow with stronger structure, confidence, and long-term thinking.',
  },
  {
    label: '05',
    title: 'Personal Development',
    description: 'Encourage designers to grow not only professionally, but personally, with more courage, identity, and self-belief.',
  },
  {
    label: '06',
    title: 'Professional Excellence',
    description: 'Promote creativity, professionalism, and a higher standard of practice across the fashion community.',
  },
];

function buildMailtoHref(subject: string, lines: string[]) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

// Magnetic Button Component
type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  href?: string;
};

const MagneticButton = ({ children, className, onClick, href }: MagneticButtonProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    // Limit movement
    const maxDistance = 15;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const ratio = Math.min(distance / maxDistance, 1);
    
    x.set(deltaX * ratio * 0.3);
    y.set(deltaY * ratio * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div ref={ref} className="magnetic-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.div
        style={{ x: xSpring, y: ySpring }}
      >
        {href ? (
          href.startsWith('#') ? (
            <a href={href} onClick={onClick} className={className}>
              {children}
            </a>
          ) : (
            <Link href={href} onClick={onClick} className={className}>
              {children}
            </Link>
          )
        ) : (
          <button type="button" onClick={onClick} className={className}>
            {children}
          </button>
        )}
      </motion.div>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: isOpen ? 'rgba(173, 138, 112, 0.06)' : 'transparent',
        borderColor: isOpen ? 'rgba(173, 138, 112, 0.35)' : 'rgba(74, 32, 41, 0.08)',
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl border px-5 py-4 transition-all md:px-7 md:py-5 hover:border-accent/30"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="text-base font-semibold leading-snug text-[var(--foreground)] md:text-lg">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/80 to-white/40 text-accent backdrop-blur transition-all group-hover:border-accent/40 group-hover:bg-accent/10 md:h-11 md:w-11"
        >
          {isOpen ? <Minus className="h-4.5 w-4.5 md:h-5 md:w-5" /> : <Plus className="h-4.5 w-4.5 md:h-5 md:w-5" />}
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? '1rem' : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <motion.div
          initial={false}
          animate={{ y: isOpen ? 0 : -6 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: isOpen ? 0.05 : 0 }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-accent/60 to-transparent" />
          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg md:leading-relaxed">
            {answer}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Objective Accordion Item Component
const ObjectiveAccordion = ({
  pillar,
  index,
}: {
  pillar: { label: string; title: string; description: string };
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: isOpen ? 'rgba(173, 138, 112, 0.04)' : 'transparent',
      }}
      transition={{ duration: 0.3 }}
      className="premium-panel group relative overflow-hidden rounded-[2rem] shadow-[0_22px_70px_rgba(74,32,41,0.08)] transition-all hover:border-accent/50 hover:shadow-[0_32px_90px_rgba(74,32,41,0.12)]"
    >
      <div className="absolute -right-2 -top-2 h-20 w-20 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/15" />
      <div className="relative p-6 md:p-7">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-start justify-between gap-4 text-left"
        >
          <div className="flex-1">
            <div className="mb-5 flex items-end justify-between gap-4">
              <span className="font-serif text-4xl leading-none text-accent/25 transition-all duration-500 group-hover:text-accent/60 md:text-5xl">
                {pillar.label}
              </span>
              <span className="chip">Objective</span>
            </div>
            <h3 className="font-serif text-lg md:text-xl leading-tight">
              {pillar.title}
            </h3>
          </div>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/80 to-white/40 text-accent backdrop-blur transition-all group-hover:border-accent/40 group-hover:bg-accent/10 md:h-11 md:w-11 mt-0.5"
          >
            {isOpen ? <Minus className="h-4 w-4 md:h-5 md:w-5" /> : <Plus className="h-4 w-4 md:h-5 md:w-5" />}
          </motion.span>
        </button>
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? '0.75rem' : 0,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <motion.div
            initial={false}
            animate={{ y: isOpen ? 0 : -6 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: isOpen ? 0.05 : 0 }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-px w-14 bg-gradient-to-r from-accent/80 via-accent/50 to-transparent"
            />
            <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
              {pillar.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-700 group-hover:via-accent/40" />
    </motion.div>
  );
};

const HeroBackgroundImage = () => {
  return (
    <div className="absolute inset-0">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-black/10" />
    </div>
  );
};

const VisionVideoCarousel = () => {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const scrollToIndex = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
    setActiveIndex(index);
  };

  const pauseOtherVideos = (keepIndex: number) => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx !== keepIndex && !video.paused) {
        video.pause();
      }
    });
  };

  const togglePlay = async (index: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      pauseOtherVideos(index);
      try {
        try {
          video.muted = false;
        } catch {
          // no-op
        }
        await video.play();
        setPlayingIndex(index);
        scrollToIndex(index);
      } catch {
        setPlayingIndex(video.paused ? null : index);
      }
      return;
    }

    video.pause();
    setPlayingIndex(null);
  };

  const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const goNext = () => scrollToIndex(Math.min(VISION_VIDEOS.length - 1, activeIndex + 1));

  return (
    <div className="relative">
      <div className="relative">
        <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 pt-2 scroll-smooth">
          {VISION_VIDEOS.map((video, index) => (
            <div
              key={video.src}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
              className="snap-center shrink-0 w-[min(92vw,46rem)]"
            >
              <div className="video-container w-full">
                <div className="premium-panel group relative aspect-[4/5] overflow-hidden rounded-[2.25rem] shadow-[0_36px_110px_rgba(74,32,41,0.18)] md:aspect-[5/6] lg:aspect-[6/7]">
                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node;
                    }}
                    src={video.src}
                    playsInline
                    preload="metadata"
                    controls={playingIndex === index}
                    className="h-full w-full object-contain bg-[#0A0A0A] transition-transform duration-[1.4s] ease-out group-hover:scale-[1.01]"
                    onPause={() => {
                      if (playingIndex === index) {
                        setPlayingIndex(null);
                      }
                    }}
                    onPlay={() => {
                      setPlayingIndex(index);
                    }}
                    onEnded={() => {
                      if (playingIndex === index) {
                        setPlayingIndex(null);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/5 to-transparent" />
                  <div className="absolute left-5 top-5 md:left-7 md:top-7 flex items-center gap-3 rounded-full border border-white/20 bg-black/25 px-4 py-2 backdrop-blur-2xl">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-white md:text-xs">
                      {video.label}
                    </span>
                  </div>
                  <motion.button
                    type="button"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: playingIndex === index ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => togglePlay(index)}
                    className="absolute inset-0 flex items-center justify-center rounded-[2.25rem] bg-black/28 transition-colors hover:bg-black/36"
                    style={{ pointerEvents: playingIndex === index ? 'none' : 'auto' }}
                    aria-label={`Play ${video.label}`}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl animate-pulse-slow" />
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="relative flex h-24 w-24 items-center justify-center rounded-full bg-accent shadow-[0_24px_70px_rgba(173,138,112,0.55)] md:h-32 md:w-32"
                      >
                        <Play className="ml-0.5 h-10 w-10 text-[#0A0A0A] md:h-12 md:w-12" />
                      </motion.div>
                    </div>
                  </motion.button>
                  <div className="absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-black/20 px-4 py-3 backdrop-blur-xl md:px-5 md:py-4">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-3xl text-white/70 md:text-4xl">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 md:text-xs">
                          Vision Chapter
                        </p>
                        <p className="text-sm font-medium leading-snug text-white md:text-base">
                          {video.title || 'Founder perspective'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.06, x: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          type="button"
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="absolute left-2 top-1/2 hidden -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/85 backdrop-blur-2xl text-[var(--foreground)] shadow-[0_14px_40px_rgba(74,32,41,0.15)] transition-colors hover:border-accent hover:text-accent disabled:opacity-40 disabled:hover:scale-100 disabled:hover:translate-x-0 md:flex md:h-16 md:w-16"
          aria-label="Previous video"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.06, x: 2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          type="button"
          onClick={goNext}
          disabled={activeIndex === VISION_VIDEOS.length - 1}
          className="absolute right-2 top-1/2 hidden -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/85 backdrop-blur-2xl text-[var(--foreground)] shadow-[0_14px_40px_rgba(74,32,41,0.15)] transition-colors hover:border-accent hover:text-accent disabled:opacity-40 disabled:hover:scale-100 disabled:hover:translate-x-0 md:flex md:h-16 md:w-16"
          aria-label="Next video"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </motion.button>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 md:gap-2.5">
          {VISION_VIDEOS.map((video, index) => (
            <button
              key={video.src}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`relative rounded-full transition-all duration-500 ${
                activeIndex === index
                  ? 'h-2.5 w-10 bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_0_4px_rgba(173,138,112,0.14)]'
                  : 'h-2.5 w-2.5 bg-[var(--border)] hover:bg-accent/50'
              }`}
              aria-label={`Go to ${video.label}`}
            />
          ))}
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gray-500 md:text-xs">
          {String(activeIndex + 1).padStart(2, '0')} / {String(VISION_VIDEOS.length).padStart(2, '0')} · Founder Chapters
        </p>
      </div>
    </div>
  );
};

// Multi-Step Form
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    brandName: '',
    email: '',
    phone: '',
    brandStage: '',
    barrier: '',
    whyJoin: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 3;

  const STEP_TITLES = [
    { key: 1, label: 'Your details', tag: 'Founder profile' },
    { key: 2, label: 'Brand & stage', tag: 'Where you are' },
    { key: 3, label: 'Why you want in', tag: 'Your story' },
  ];

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.brandName.trim()) newErrors.brandName = 'Brand name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.phone.trim()) newErrors.phone = 'WhatsApp number is required';
    } else if (step === 2) {
      if (!formData.brandStage) newErrors.brandStage = 'Please select your brand stage';
      if (!formData.barrier) newErrors.barrier = 'Please select your biggest challenge';
    } else if (step === 3) {
      if (!formData.whyJoin.trim()) newErrors.whyJoin = 'Please tell us why you want to join';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      const href = buildMailtoHref(`Preneurin Interest Form: ${formData.brandName}`, [
        'PRENEURIN INTEREST FORM',
        '',
        `Full Name: ${formData.fullName}`,
        `Brand Name: ${formData.brandName}`,
        `Email: ${formData.email}`,
        `WhatsApp: ${formData.phone}`,
        `Brand Stage: ${formData.brandStage}`,
        `Primary Barrier: ${formData.barrier}`,
        '',
        'Why I Want To Join:',
        formData.whyJoin,
      ]);

      setSubmitted(true);
      window.location.href = href;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const inputClass = (field: string) =>
    `group/input w-full bg-gradient-to-br from-white/90 to-white/55 border rounded-2xl px-5 py-4 text-[var(--foreground)] text-base backdrop-blur-xl transition-all placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-accent/12 ${
      errors[field]
        ? 'border-red-400/70 focus:border-red-500 focus:ring-red-400/12'
        : 'border-[var(--border)] focus:border-accent/70 hover:border-accent/35'
    }`;

  const labelClass = 'flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 mb-3';

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="premium-panel relative overflow-hidden rounded-[2.25rem] p-10 md:p-16 text-center shadow-[0_36px_110px_rgba(74,32,41,0.14)]"
      >
        <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/25 blur-2xl animate-pulse-slow" />
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 18 }}
              className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-accent via-accent to-primary/35 shadow-[0_24px_70px_rgba(173,138,112,0.45)] md:h-24 md:w-24"
            >
              <CheckCircle2 className="h-10 w-10 text-white md:h-12 md:w-12" strokeWidth={2.2} />
            </motion.div>
          </div>
          <h3 className="mt-10 font-serif font-luxury text-3xl leading-tight md:text-4xl lg:text-5xl">
            Thank <span className="text-accent">you.</span>
          </h3>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.35, duration: 1, ease: 'easeOut' }}
            className="mt-7 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent"
          />
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
            Your interest is now open in your email client. If the email composer did not open,
            write directly to{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              setFormData({
                fullName: '', brandName: '', email: '', phone: '',
                brandStage: '', barrier: '', whyJoin: '',
              });
            }}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-gradient-to-br from-white/90 to-white/60 px-8 py-4 font-semibold backdrop-blur-xl transition-all hover:border-accent hover:text-accent"
          >
            Send another message
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="premium-panel relative overflow-hidden rounded-[2.25rem] p-8 md:p-12 shadow-[0_32px_90px_rgba(74,32,41,0.1)]">
      <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

      {/* Progress Bar */}
      <div className="relative mb-12">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {STEP_TITLES.map((s) => {
            const active = step === s.key;
            const done = step > s.key;
            return (
              <div key={s.key} className={`flex items-center gap-3 transition-all duration-500 ${active ? 'opacity-100' : 'opacity-70'}`}>
                <div className="relative">
                  <div
                    className={`relative flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-500 ${
                      done
                        ? 'border-accent bg-accent/15 text-accent'
                        : active
                        ? 'border-accent/60 bg-gradient-to-br from-accent/20 to-primary/10 text-accent shadow-[0_10px_30px_rgba(173,138,112,0.2)]'
                        : 'border-[var(--border)] bg-white/60 text-gray-400'
                    }`}
                  >
                    {done ? (
                      <CheckCircle2 className="h-5 w-5" strokeWidth={2.4} />
                    ) : (
                      <span className="font-serif text-xl font-semibold">{s.key}</span>
                    )}
                  </div>
                </div>
                <div>
                  <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] md:text-xs ${active ? 'text-accent' : 'text-gray-500'}`}>
                    {s.tag}
                  </p>
                  <p className={`text-sm font-semibold leading-snug ${active ? 'text-[var(--foreground)]' : 'text-gray-500'} md:text-base`}>
                    {s.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative h-1.5 overflow-hidden rounded-full bg-[var(--border)]/60">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_18px_rgba(173,138,112,0.4)]"
            initial={{ width: 0 }}
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Info */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-7"
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-7">
              <div>
                <label className={labelClass}>Full Name</label>
                <input
                  required
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass('fullName')}
                  placeholder="e.g. Damilola Obisesan"
                />
                {errors.fullName && <p className="text-sm mt-2 text-red-500">{errors.fullName}</p>}
              </div>
              <div>
                <label className={labelClass}>Brand Name</label>
                <input
                  required
                  name="brandName"
                  type="text"
                  value={formData.brandName}
                  onChange={handleChange}
                  className={inputClass('brandName')}
                  placeholder="Your brand, studio or atelier"
                />
                {errors.brandName && <p className="text-sm mt-2 text-red-500">{errors.brandName}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-7">
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  required
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass('email')}
                  placeholder="you@studio.com"
                />
                {errors.email && <p className="text-sm mt-2 text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label className={labelClass}>WhatsApp Number</label>
                <input
                  required
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass('phone')}
                  placeholder="+234 800 000 0000"
                />
                {errors.phone && <p className="text-sm mt-2 text-red-500">{errors.phone}</p>}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Brand Info */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-7"
          >
            <div>
              <label className={labelClass}>Current Brand Stage</label>
              <select
                required
                name="brandStage"
                value={formData.brandStage}
                onChange={handleChange}
                className={inputClass('brandStage')}
              >
                <option value="">Select the stage that best describes you</option>
                <option value="Emerging Designer">Emerging Designer — early brand, first clients</option>
                <option value="Established Studio">Established Studio — steady clients and team</option>
                <option value="Scaling Atelier">Scaling Atelier — growing production and reach</option>
              </select>
              {errors.brandStage && <p className="text-sm mt-2 text-red-500">{errors.brandStage}</p>}
            </div>
            <div>
              <label className={labelClass}>Primary Operational Barrier</label>
              <select
                required
                name="barrier"
                value={formData.barrier}
                onChange={handleChange}
                className={inputClass('barrier')}
              >
                <option value="">Select what is currently your biggest challenge</option>
                <option value="Staffing & Tailor Management">Staffing & Tailor Management</option>
                <option value="Pricing & Financial Costing">Pricing & Financial Costing</option>
                <option value="Client Management">Client Management & Service</option>
                <option value="Production Scaling">Production Scaling & Consistency</option>
              </select>
              {errors.barrier && <p className="text-sm mt-2 text-red-500">{errors.barrier}</p>}
            </div>
            <div className="rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/10 via-white/60 to-primary/5 p-6 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                  <Info className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Why this matters</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                    Preneurin&apos;s next room is built around the real challenges designers named in April.
                    Your answers help shape which sessions, mentors, and workshops are prioritised next.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Goals */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-7"
          >
            <div>
              <label className={labelClass}>Why do you want to join Preneurin?</label>
              <textarea
                required
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleChange}
                rows={7}
                className={`${inputClass('whyJoin')} resize-none leading-relaxed`}
                placeholder="Tell us what you&apos;re hoping to find, the season you&apos;re in with your brand, and what support would move the needle for you..."
              />
              {errors.whyJoin && <p className="text-sm mt-2 text-red-500">{errors.whyJoin}</p>}
            </div>
            <div className="rounded-[1.75rem] border border-[var(--border)] bg-gradient-to-br from-white/90 to-white/50 p-7 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="chip">Submission Preview</span>
                <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { k: 'Name', v: formData.fullName },
                  { k: 'Brand', v: formData.brandName },
                  { k: 'Email', v: formData.email },
                  { k: 'WhatsApp', v: formData.phone },
                  { k: 'Stage', v: formData.brandStage },
                  { k: 'Challenge', v: formData.barrier },
                ].map((r) => (
                  <div
                    key={r.k}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--border)]/70 bg-white/50 px-4 py-3"
                  >
                    <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent whitespace-nowrap">
                      {r.k}
                    </span>
                    <span className="text-sm font-medium leading-snug text-gray-700">
                      {r.v || '—'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col-reverse gap-3 mt-12 sm:flex-row sm:items-center sm:gap-4">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="group flex-1 rounded-full border border-[var(--border)] bg-gradient-to-br from-white/85 to-white/50 px-8 py-4.5 font-semibold backdrop-blur-xl transition-all hover:border-accent hover:text-accent sm:py-4"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                Previous Step
              </span>
            </button>
          )}
          {step < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="group relative flex-1 overflow-hidden rounded-full bg-primary px-8 py-4.5 font-semibold text-cream shadow-[0_20px_55px_rgba(74,32,41,0.28)] transition-all hover:bg-[#5a2833] hover:shadow-[0_24px_70px_rgba(74,32,41,0.35)] sm:py-4"
            >
              <span className="relative z-10 inline-flex items-center justify-center gap-2">
                Continue to Step {step + 1}
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </button>
          ) : (
            <button
              type="submit"
              className="group relative flex-1 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#5a2833] to-primary bg-[length:200%_100%] px-8 py-4.5 font-semibold text-cream shadow-[0_20px_55px_rgba(74,32,41,0.3)] transition-all hover:bg-[position:100%_0] hover:shadow-[0_26px_75px_rgba(74,32,41,0.38)] sm:py-4"
            >
              <span className="relative z-10 inline-flex items-center justify-center gap-2.5">
                Send to Secretariat
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen text-[var(--foreground)] font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <HeroBackgroundImage />
        <div className="relative z-10 flex min-h-[100svh] items-center px-6 pb-16 pt-24">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">
              <StaggerContainer>
                <StaggerItem>
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--gold)]/35 bg-black/25 px-4 py-2.5 text-[10px] tracking-[0.24em] text-[var(--gold)] backdrop-blur-xl sm:px-5 sm:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                    FOUNDER-LED · BEHIND THE SEAMS
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <h1 className="mt-8 font-serif font-luxury text-[2.8rem] leading-[0.88] text-white sm:text-5xl md:text-6xl lg:text-[6.2rem]">
                    Fashion founders,
                    <br />
                    <span className="text-[var(--gold)]">no longer alone.</span>
                  </h1>
                </StaggerItem>

                <StaggerItem>
                  <div className="mt-8 inline-flex items-center rounded-[1.75rem] border border-[var(--gold)]/25 bg-black/25 px-6 py-4 backdrop-blur-2xl sm:px-7 sm:py-5">
                    <p className="max-w-xl text-sm leading-relaxed text-[var(--gold)] sm:text-base md:text-lg">
                      A community room where fashion designers learn together,
                      share real experiences, and grow with more clarity.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                    <MagneticButton href="#join-inner-circle">
                      <span className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-[var(--gold)] px-8 py-4 font-semibold text-[#0A0A0A] shadow-[0_24px_60px_rgba(201,169,110,0.28)] transition-all hover:bg-[#d4b37a] hover:scale-105 sm:w-auto sm:px-10 sm:py-4.5">
                        Register Your Interest <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </MagneticButton>
                    <MagneticButton href="/success-stories">
                      <span className="group flex w-full items-center justify-center gap-2.5 rounded-full border border-[var(--gold)]/40 bg-black/25 backdrop-blur-2xl px-8 py-4 text-[var(--gold)] transition-all hover:border-[var(--gold)] hover:text-[var(--gold)] sm:w-auto sm:px-10 sm:py-4.5">
                        <Play className="h-3.5 w-3.5" /> Explore First Session
                      </span>
                    </MagneticButton>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-20 -right-28 h-[420px] w-[420px] rounded-full bg-accent/9 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-20 h-[340px] w-[340px] rounded-full bg-primary/6 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            <StaggerContainer>
              <StaggerItem>
                <div className="premium-panel group relative overflow-hidden rounded-[2.25rem] hover-tilt shadow-[0_30px_90px_rgba(74,32,41,0.14)]">
                  <div className="relative h-[440px] w-full md:h-[580px]">
                    <Image
                      src={FOUNDER_IMAGE}
                      alt="Damilola Obisesan, founder of Preneurin"
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent" />
                    <div className="absolute left-6 top-6 md:left-8 md:top-8">
                      <div className="flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-xl">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] font-semibold tracking-[0.22em] text-white md:text-xs">
                          FOUNDER ORIGIN
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
                      <span className="font-serif text-5xl text-white/95 drop-shadow-lg md:text-6xl">
                        2004
                      </span>
                      <p className="mt-2 font-serif text-xl leading-tight text-white md:text-2xl">
                        Where the story began.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.15}>
              <StaggerItem>
                <div>
                  <div className="flex items-center gap-3">
                    <p className="section-kicker">About The Founder</p>
                    <span className="font-serif text-4xl text-accent/15">02</span>
                  </div>
                  <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
                    Damilola <span className="text-accent">Obisesan.</span>
                  </h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="mt-6 h-px w-20 bg-gradient-to-r from-accent to-transparent"
                  />
                </div>
                <div className="mt-8 space-y-5">
                  <p className="max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                    Before fashion became my career, it was my survival. In 2004, during one of the hardest
                    phases of my life, I found comfort in an unexpected place: sewing.
                  </p>
                  <p className="max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                    I had no formal training and no real tools. Just thread, a needle, curiosity, and the stubborn
                    desire to create something beautiful. I still remember cutting my first dress from a fabric meant
                    to be thrown away, stitching under a dim lantern so nobody would notice.
                  </p>
                  <p className="max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                    That early &ldquo;yes&rdquo; became a compass into fashion. It is the same spirit that now guides Preneurin:
                    a space built for designers who deserve clarity, support, and honest growth.
                  </p>
                </div>
                <motion.div
                  whileHover={{ x: 4, y: -4 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/95 to-white/70 px-6 py-4 backdrop-blur-xl shadow-[0_18px_50px_rgba(74,32,41,0.08)] hover:border-accent/40 hover:shadow-[0_24px_70px_rgba(74,32,41,0.12)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/20">
                    <Compass className="h-5 w-5 text-accent" strokeWidth={1.9} />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                      Currently
                    </p>
                    <p className="text-sm font-medium leading-snug text-[var(--foreground)] md:text-base">
                      Founder of Preneurin · Creative Director,&nbsp;
                      <a
                        href="https://dassahoikos.com"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                      >
                        Dassah Oikos
                      </a>
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Founder's Manifesto Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-1/3 -left-32 h-[380px] w-[380px] rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-10 right-0 h-[440px] w-[440px] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <StaggerContainer>
              <StaggerItem>
                <div className="relative">
                  <div className="absolute -left-5 -top-5 h-20 w-20 rounded-full border border-accent/30" aria-hidden="true" />
                  <div className="premium-panel group relative overflow-hidden rounded-[2.25rem] shadow-[0_36px_100px_rgba(74,32,41,0.15)] hover-tilt">
                    <div className="relative h-[500px] w-full md:h-[620px]">
                      <Image
                        src={COMMUNITY_IMAGE}
                        alt="Preneurin community members in a design studio setting"
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-primary/10 to-transparent" />
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                      y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
                    }}
                    className="absolute -bottom-5 right-4 md:-bottom-3 md:right-6 max-w-sm rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/95 to-white/80 p-5 backdrop-blur-2xl shadow-[0_24px_70px_rgba(74,32,41,0.15)] md:p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                        <Quote className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                          First Live Session
                        </p>
                        <p className="text-sm leading-snug text-gray-600">
                          The April room that shaped what Preneurin is becoming.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.18}>
              <StaggerItem>
                <div className="flex items-center gap-3">
                  <p className="section-kicker">The Manifesto</p>
                  <span className="font-serif text-4xl text-accent/15">03</span>
                </div>
                <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.02] md:text-4xl lg:text-5xl">
                  Built to bring designers into one <span className="text-accent">thoughtful, supportive room.</span>
                </h2>
              </StaggerItem>

              <StaggerItem>
                <div className="premium-panel relative mt-10 overflow-hidden rounded-[2.25rem] p-8 md:p-12 shadow-[0_30px_90px_rgba(74,32,41,0.1)]">
                  <div className="relative space-y-6 text-base leading-relaxed text-gray-600 md:text-lg md:leading-relaxed">
                    <p>
                      Preneurin started from a simple aim: to create a community where fashion designers
                      can connect, share experiences, and grow together — with honesty and without pretence.
                    </p>
                    <p>
                      The first live session in April confirmed how valuable that kind of room can be.
                      Designers need real conversations, meaningful connections, and guidance that speaks to
                      both the creative and the business sides of their work.
                    </p>
                    <p>
                      That is what guides Preneurin now: learning, sharing, collaboration, personal growth,
                      professional growth, and a stronger culture of excellence within the fashion community.
                    </p>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="mt-10 h-px w-20 bg-gradient-to-r from-accent to-transparent"
                  />
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Emotion & Logic — Dual Narrative */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-10 left-1/3 h-[360px] w-[360px] rounded-full bg-primary/7 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-10 right-1/4 h-[380px] w-[380px] rounded-full bg-accent/9 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <div className="inline-flex items-center gap-3">
                  <p className="section-kicker">Emotion And Logic</p>
                  <span className="font-serif text-4xl text-accent/15">04</span>
                </div>
                <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
                  A community that feels human <span className="text-accent">and</span> works in real life.
                </h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent"
                />
                <p className="mt-8 text-base leading-relaxed text-gray-600 md:text-lg">
                  Preneurin moves designers emotionally and still makes clear practical sense.
                  It is built to do both — beautifully.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2 items-stretch">
            <StaggerContainer>
              <StaggerItem>
                <div className="premium-panel relative h-full overflow-hidden rounded-[2.25rem] p-8 md:p-10 lg:p-12">
                  <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
                  <div className="relative flex items-start justify-between gap-6 mb-8">
                    <span className="font-serif text-5xl leading-none text-accent/25 md:text-6xl">
                      01
                    </span>
                    <span className="chip mt-2">The Heart</span>
                  </div>
                  <h3 className="relative font-serif font-luxury text-2xl leading-tight md:text-3xl lg:text-4xl">
                    Why It Feels Different
                  </h3>
                  <div className="relative mt-8 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
                  <div className="relative mt-8 space-y-6">
                    {[
                      'It gives fashion designers a room where they feel understood, not judged.',
                      'It centers shared experiences, real stories, and the emotional side of building a creative business.',
                      'It helps designers feel less alone while growing through a demanding industry.',
                    ].map((line, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                          <Heart className="h-3.5 w-3.5" strokeWidth={2} />
                        </span>
                        <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                          {line}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.12}>
              <StaggerItem>
                <div className="premium-panel relative h-full overflow-hidden rounded-[2.25rem] p-8 md:p-10 lg:p-12">
                  <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
                  <div className="relative flex items-start justify-between gap-6 mb-8">
                    <span className="font-serif text-5xl leading-none text-accent/25 md:text-6xl">
                      02
                    </span>
                    <span className="chip mt-2">The Work</span>
                  </div>
                  <h3 className="relative font-serif font-luxury text-2xl leading-tight md:text-3xl lg:text-4xl">
                    Why It Makes Sense
                  </h3>
                  <div className="relative mt-8 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
                  <div className="relative mt-8 space-y-6">
                    {[
                      'It creates practical conversations around pricing, production, branding, and professionalism.',
                      'It encourages collaboration and stronger industry relationships instead of isolated trial and error.',
                      'It supports sustainable growth by connecting inspiration with useful business clarity.',
                    ].map((line, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <BriefcaseBusiness className="h-3.5 w-3.5" strokeWidth={2} />
                        </span>
                        <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                          {line}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* BTS Teaser Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-[0.92fr_1.08fr]">
            <StaggerContainer>
              <StaggerItem>
                <div className="premium-panel group relative overflow-hidden rounded-[2.25rem] shadow-[0_34px_100px_rgba(74,32,41,0.15)] hover-tilt">
                  <Link href="/success-stories" className="block">
                    <div className="relative h-[360px] w-full md:h-[480px]">
                      <Image
                        src={BTS_POSTER_IMAGE}
                        alt="Behind the scenes moment from the Preneurin April session"
                        fill
                        sizes="(min-width: 1024px) 46vw, 100vw"
                        className="object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/20 to-transparent" />
                      <div className="absolute left-6 top-6 md:left-8 md:top-8">
                        <div className="flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-xl">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                          <span className="text-[10px] font-semibold tracking-[0.22em] text-white md:text-xs">
                            CHAPTER · BTS TEASER
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-x-6 bottom-6 flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-black/25 px-5 py-4 backdrop-blur-2xl md:inset-x-8 md:bottom-8 md:px-6 md:py-5">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 md:text-xs">
                            Behind The Scenes
                          </p>
                          <p className="mt-1 text-sm leading-snug text-white md:text-base">
                            Inside the April room that started Preneurin.
                          </p>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                          className="relative"
                        >
                          <div className="absolute inset-0 rounded-full bg-accent/30 blur-xl animate-pulse-slow" />
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-[0_18px_45px_rgba(173,138,112,0.45)] md:h-16 md:w-16">
                            <Play className="ml-0.5 h-6 w-6 text-[#0A0A0A] md:h-7 md:w-7" />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.15}>
              <StaggerItem>
                <div className="flex items-center gap-3">
                  <p className="section-kicker">Inside The April Session</p>
                  <span className="font-serif text-4xl text-accent/15">04</span>
                </div>
                <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
                  See the atmosphere of the room that first <span className="text-accent">brought the community together.</span>
                </h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="mt-7 h-px w-20 bg-gradient-to-r from-accent to-transparent"
                />
                <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                  The BTS film captures the attention, conversation, and shared energy that shaped
                  Preneurin&apos;s first live gathering — every frame from the real April room.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <MagneticButton href="/success-stories">
                    <span className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-[0_18px_45px_rgba(74,32,41,0.22)] transition-all hover:bg-[#5a2833] hover:scale-105 sm:w-auto sm:px-10 sm:py-4.5">
                      Watch The BTS <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </MagneticButton>
                  <MagneticButton href="/success-stories">
                    <span className="group flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-gradient-to-br from-white/90 to-white/65 backdrop-blur-xl px-8 py-4 font-semibold transition-all hover:border-accent hover:text-accent sm:w-auto sm:px-10 sm:py-4.5">
                      Explore The First Session
                      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </MagneticButton>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[440px] w-[80vw] max-w-[900px] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="relative mx-auto mb-12 max-w-3xl text-center">
                <div className="inline-flex items-center gap-3">
                  <p className="section-kicker">Watch The Vision</p>
                  <span className="font-serif text-4xl text-accent/15">05</span>
                </div>
                <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
                  The vision, in <span className="text-accent">her own words.</span>
                </h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent"
                />
                <p className="mt-8 text-base leading-relaxed text-gray-600 md:text-lg">
                  Hear directly from Damilola about why this community matters, what it solves,
                  and what it can become for fashion designers who want to grow with honesty.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <VisionVideoCarousel />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Aim And Objectives */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute -top-10 left-1/4 h-[380px] w-[380px] rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 h-[340px] w-[340px] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <div className="inline-flex items-center gap-3">
                  <p className="section-kicker">Aim And Objectives</p>
                  <span className="font-serif text-4xl text-accent/15">06</span>
                </div>
                <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
                  Principles shaping a <span className="text-accent">meaningful</span> community.
                </h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent"
                />
                <p className="mt-8 text-base leading-relaxed text-gray-600 md:text-lg">
                  Six pillars guiding Preneurin as a stronger, more meaningful community for fashion designers.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3 [&>*]:h-fit">
            {COMMUNITY_OBJECTIVES.map((pillar, index) => (
              <StaggerContainer key={index} delay={index * 0.1}>
                <StaggerItem>
                  <ObjectiveAccordion pillar={pillar} index={index} />
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-10 left-0 h-[340px] w-[340px] rounded-full bg-accent/8 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <div className="inline-flex items-center gap-3">
                  <p className="section-kicker">Frequently Asked Questions</p>
                  <span className="font-serif text-4xl text-accent/15">07</span>
                </div>
                <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
                  Clear answers, <span className="text-accent">no fluff.</span>
                </h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent"
                />
                <p className="mt-8 text-base leading-relaxed text-gray-600 md:text-lg">
                  Everything you need to know about how Preneurin works and what it is growing toward.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="premium-panel space-y-3 rounded-[2rem] p-4 md:p-6 shadow-[0_28px_80px_rgba(74,32,41,0.08)]">
                <FAQItem
                  question="Who can join Preneurin?"
                  answer="Preneurin is built for fashion designers who want to learn, share experiences, build stronger relationships, and grow with more clarity."
                />
                <FAQItem
                  question="How much does it cost to join?"
                  answer="Pricing is shared when the next session opens. Because Preneurin is growing thoughtfully from its first live session, details are communicated directly to interested designers."
                />
                <FAQItem
                  question="What kind of support will I get?"
                  answer="Support centers on live sessions, practical discussion, shared founder experience, and resources shaped by the real needs designers brought into the April room."
                />
                <FAQItem
                  question="Is this community only for designers in Nigeria?"
                  answer="Preneurin started in Lagos and the first session happened there, but the long-term vision is to support fashion designers wherever the community and conversation are relevant."
                />
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="join-inner-circle" className="relative py-20 px-6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 h-[460px] w-[90vw] max-w-[900px] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />
        <div className="absolute top-10 right-10 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <div className="inline-flex items-center gap-3">
                  <p className="section-kicker">Join The Inner Circle</p>
                  <span className="font-serif text-4xl text-accent/15">08</span>
                </div>
                <h2 className="mt-6 font-serif font-luxury text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
                  Register your <span className="text-accent">interest.</span>
                </h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent"
                />
                <p className="mt-8 text-base leading-relaxed text-gray-600 md:text-lg">
                  Share your details, what stage you are in, and the support you want —
                  so Preneurin can keep building for the real designers in this room.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <MultiStepForm />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
