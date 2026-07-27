'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Users, DollarSign, MessageSquare, Send, ChevronRight, ChevronLeft, Play, Plus, Minus } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

const DASA_MEDIA_ROOT = '/DASA%20PICTURES';
const HERO_VIDEO_SRC = `${DASA_MEDIA_ROOT}/IMG_5870.MP4`;
const HERO_FALLBACK_IMAGE = `${DASA_MEDIA_ROOT}/IMG_0629.jpg`;
const COMMUNITY_IMAGE = `${DASA_MEDIA_ROOT}/IMG_0815.jpg`;
const BTS_POSTER_IMAGE = `${DASA_MEDIA_ROOT}/IMG_0718.jpg`;
const FOUNDER_IMAGE = '/IMG_0580.JPG.jpeg';
const VISION_VIDEOS = [
  { src: '/Preneurin%202!.mp4', label: 'Vision Film 01' },
  { src: '/Preneurin%20Video.mp4', label: 'Vision Film 02' },
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
const MagneticButton = ({ children, className, onClick, href }: any) => {
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

  const isHashLink = href && href.startsWith('#');
  const Tag = href ? (isHashLink ? 'a' : Link) : 'button';
  
  return (
    <div ref={ref} className="magnetic-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.div
        style={{ x: xSpring, y: ySpring }}
      >
        <Tag 
          href={href}
          onClick={onClick}
          className={className}
        >
          {children}
        </Tag>
      </motion.div>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border)] py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-accent" /> : <Plus className="w-5 h-5 text-accent" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-500 dark:text-gray-400 pt-4">{answer}</p>
      </motion.div>
    </div>
  );
};

const HeroBackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const playPromise = video.play();

    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        setAutoplayBlocked(true);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0">
      <Image
        src={HERO_FALLBACK_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {!autoplayBlocked && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_FALLBACK_IMAGE}
          onLoadedData={() => setVideoReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/92 via-[var(--background)]/70 to-black/55" />
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

  const togglePlay = async (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      pauseOtherVideos(index);
      try {
        await video.play();
        setPlayingIndex(index);
        scrollToIndex(index);
      } catch {
        setPlayingIndex(null);
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
        <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 pt-2">
          {VISION_VIDEOS.map((video, index) => (
            <div
              key={video.src}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
              className="snap-center shrink-0 w-[min(92vw,46rem)]"
            >
              <div className="video-container w-full">
                <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[9/12]">
                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node;
                    }}
                    src={video.src}
                    playsInline
                    preload="metadata"
                    className="h-full w-full rounded-3xl object-cover object-top"
                    onClick={() => togglePlay(index)}
                    onPause={() => {
                      if (playingIndex === index) {
                        setPlayingIndex(null);
                      }
                    }}
                    onPlay={() => {
                      setPlayingIndex(index);
                    }}
                  />
                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/25 px-3 py-2 text-[10px] tracking-[0.16em] text-white backdrop-blur-xl sm:px-4 sm:text-xs">
                    {video.label}
                  </div>
                  <motion.button
                    type="button"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: playingIndex === index ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => togglePlay(index)}
                    className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/30 transition-colors hover:bg-black/40"
                    style={{ pointerEvents: playingIndex === index ? 'none' : 'auto' }}
                    aria-label={`Play ${video.label}`}
                  >
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent shadow-2xl md:h-32 md:w-32">
                      <Play className="h-10 w-10 text-[#0A0A0A] md:h-12 md:w-12" />
                    </div>
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-[var(--border)] bg-[var(--card)]/90 p-3 text-[var(--foreground)] backdrop-blur-xl transition-colors hover:border-accent disabled:opacity-40 md:flex"
          aria-label="Previous video"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={activeIndex === VISION_VIDEOS.length - 1}
          className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-[var(--border)] bg-[var(--card)]/90 p-3 text-[var(--foreground)] backdrop-blur-xl transition-colors hover:border-accent disabled:opacity-40 md:flex"
          aria-label="Next video"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2 md:hidden">
        {VISION_VIDEOS.map((video, index) => (
          <button
            key={video.src}
            type="button"
            onClick={() => scrollToIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${activeIndex === index ? 'bg-primary' : 'bg-[var(--border)]'}`}
            aria-label={`Go to ${video.label}`}
          />
        ))}
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

  const totalSteps = 3;

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

      window.location.href = href;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  return (
    <div className="premium-panel rounded-[2rem] p-8 md:p-12">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between mb-3">
          {[1, 2, 3].map(num => (
            <div key={num} className={`text-sm font-medium ${step >= num ? 'text-accent' : 'text-gray-500 dark:text-gray-400'}`}>
              Step {num}
            </div>
          ))}
        </div>
        <div className="h-1 bg-[var(--border)] rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            transition={{ duration: 0.5 }}
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
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">Full Name</label>
                <input 
                  required
                  name="fullName"
                  type="text" 
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full bg-[var(--background)] border rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none transition-colors ${errors.fullName ? 'border-red-500' : 'border-[var(--border)] focus:border-accent'}`}
                  placeholder="Your full name"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">Brand Name</label>
                <input 
                  required
                  name="brandName"
                  type="text" 
                  value={formData.brandName}
                  onChange={handleChange}
                  className={`w-full bg-[var(--background)] border rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none transition-colors ${errors.brandName ? 'border-red-500' : 'border-[var(--border)] focus:border-accent'}`}
                  placeholder="Your brand name"
                />
                {errors.brandName && <p className="text-red-500 text-sm mt-1">{errors.brandName}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">Email Address</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[var(--background)] border rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-[var(--border)] focus:border-accent'}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">WhatsApp Phone Number</label>
                <input 
                  required
                  name="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-[var(--background)] border rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-[var(--border)] focus:border-accent'}`}
                  placeholder="+234..."
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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
            className="space-y-6"
          >
            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">Current Brand Stage</label>
              <select 
                required
                name="brandStage"
                value={formData.brandStage}
                onChange={handleChange}
                className={`w-full bg-[var(--background)] border rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none transition-colors ${errors.brandStage ? 'border-red-500' : 'border-[var(--border)] focus:border-accent'}`}
              >
                <option value="">Select your stage</option>
                <option value="Emerging Designer">Emerging Designer</option>
                <option value="Established Studio">Established Studio</option>
                <option value="Scaling Atelier">Scaling Atelier</option>
              </select>
              {errors.brandStage && <p className="text-red-500 text-sm mt-1">{errors.brandStage}</p>}
            </div>
            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">Primary Operational Barrier</label>
              <select 
                required
                name="barrier"
                value={formData.barrier}
                onChange={handleChange}
                className={`w-full bg-[var(--background)] border rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none transition-colors ${errors.barrier ? 'border-red-500' : 'border-[var(--border)] focus:border-accent'}`}
              >
                <option value="">Select your biggest challenge</option>
                <option value="Staffing & Tailor Management">Staffing & Tailor Management</option>
                <option value="Pricing & Financial Costing">Pricing & Financial Costing</option>
                <option value="Client Management">Client Management</option>
                <option value="Production Scaling">Production Scaling</option>
              </select>
              {errors.barrier && <p className="text-red-500 text-sm mt-1">{errors.barrier}</p>}
            </div>
          </motion.div>
        )}

        {/* Step 3: Goals */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">Why do you want to join Preneurin?</label>
              <textarea 
                required
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleChange}
                rows={6}
                className={`w-full bg-[var(--background)] border rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none transition-colors resize-none ${errors.whyJoin ? 'border-red-500' : 'border-[var(--border)] focus:border-accent'}`}
                placeholder="Share your story and goals..."
              />
              {errors.whyJoin && <p className="text-red-500 text-sm mt-1">{errors.whyJoin}</p>}
            </div>
            <div className="rounded-[1.5rem] border border-accent/20 bg-white/60 p-6">
              <h4 className="text-accent font-semibold mb-2">Interest Form Preview</h4>
              <div className="text-sm space-y-1 text-gray-600">
                <p><strong>Name:</strong> {formData.fullName || 'Not provided'}</p>
                <p><strong>Brand:</strong> {formData.brandName || 'Not provided'}</p>
                <p><strong>Stage:</strong> {formData.brandStage || 'Not provided'}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-10">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="flex-1 py-4 border border-[var(--border)] rounded-xl hover:border-accent hover:text-accent transition-all"
            >
              Previous
            </button>
          )}
          {step < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 py-4 bg-primary text-cream font-semibold rounded-xl hover:bg-[#5a2833] transition-all flex items-center justify-center gap-2"
            >
              Next Step <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              className="flex-1 py-4 bg-primary text-cream font-semibold rounded-xl hover:bg-[#5a2833] transition-all flex items-center justify-center gap-2"
            >
              Send To Email <Send className="w-4 h-4" />
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
      <section className="soft-grid relative min-h-[100svh] w-full overflow-hidden">
        <HeroBackgroundVideo />
        <div className="relative z-10 flex min-h-[100svh] items-center px-6 pb-16 pt-32">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl !text-white">
              <StaggerContainer>
                <StaggerItem>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-2 text-[10px] tracking-[0.16em] !text-white backdrop-blur-xl sm:px-4 sm:text-xs">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    FASHION DESIGNER COMMUNITY
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <h1 className="mt-5 max-w-3xl font-serif font-luxury text-[2.7rem] leading-[0.92] !text-white sm:text-5xl md:text-6xl lg:text-[5.6rem]">
                    A beautiful community for fashion designers to learn, share, connect, and grow.
                  </h1>
                </StaggerItem>

                <StaggerItem>
                  <p className="mt-5 max-w-2xl text-sm leading-relaxed !text-white/90 sm:text-base md:text-lg">
                    Preneurin is a community that brings fashion designers together to learn, share experiences, build meaningful connections, and grow both personally and professionally.
                  </p>
                </StaggerItem>

                <StaggerItem>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <MagneticButton href="#join-inner-circle">
                      <span className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition-all hover:bg-[#5a2833] hover:scale-105 sm:w-auto sm:px-8 sm:py-4">
                        Register Your Interest <ChevronRight className="h-4 w-4" />
                      </span>
                    </MagneticButton>
                    <MagneticButton href="/success-stories">
                      <span className="flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-black/20 px-7 py-3.5 text-white transition-all hover:border-accent hover:text-white sm:w-auto sm:px-8 sm:py-4">
                        See The First Session
                      </span>
                    </MagneticButton>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
                    {[
                      { label: 'Learn', value: 'Knowledge And Mentorship' },
                      { label: 'Share', value: 'Honest Founder Experiences' },
                      { label: 'Grow', value: 'Personally And Professionally' },
                    ].map((item) => (
                      <div key={item.label} className="rounded-[1.5rem] border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/65">{item.label}</p>
                        <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
            <div className="hidden lg:block">
              <div className="section-frame ml-auto max-w-md rounded-[2rem] p-8 text-[var(--foreground)]">
                <p className="section-kicker">The Community Vision</p>
                <h2 className="mt-6 font-serif text-3xl leading-tight">
                  A space where fashion designers feel seen, supported, and sharpened.
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-gray-600">
                  Preneurin is not positioned as noise or hype. It is a thoughtful room for learning, connection, professionalism, and real growth.
                </p>
                <div className="mt-6 grid gap-3">
                  {['Mentorship rooted in lived experience', 'Practical conversations around pricing, branding, and production', 'A more meaningful network for designers building with intention'].map((point) => (
                    <div key={point} className="rounded-2xl bg-white/65 px-4 py-3 text-sm text-gray-700">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <StaggerContainer>
              <StaggerItem>
                <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]">
                  <Image
                    src={FOUNDER_IMAGE}
                    alt="Damilola Obisesan, founder of Preneurin"
                    width={1400}
                    height={1800}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="h-[420px] w-full object-cover object-top md:h-[560px]"
                  />
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.15}>
              <StaggerItem>
                <p className="text-sm uppercase tracking-[0.2em] text-accent">About The Founder</p>
                <h2 className="mt-4 font-serif font-luxury text-4xl leading-tight md:text-5xl">
                  Damilola Obisesan
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
                  Before fashion became my career, it was my survival. In 2004, during one of the hardest phases of my life, I found comfort in an unexpected place: sewing.
                </p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-500">
                  I had no formal training and no real tools. Just thread, a needle, curiosity, and the stubborn desire to create something beautiful. I still remember cutting my first dress from a fabric meant to be thrown away, stitching under a dim lantern so nobody would notice. That was my first DIY, and it changed the way I saw myself.
                </p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-500">
                  From leftover pieces to local training, I kept choosing the work. That early "yes" became a compass into fashion, and it is the same spirit that shaped Preneurin: a space built for designers who deserve clarity, support, and honest growth.
                </p>
                <p className="mt-6 text-sm font-semibold tracking-wide text-primary">
                  Founder of Preneurin | Creative Director, Dassah Oikos
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Founder's Manifesto Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[var(--card)] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <StaggerContainer>
              <StaggerItem>
                <div className="relative">
                  <div className="premium-panel overflow-hidden rounded-[2rem]">
                    <Image
                      src={COMMUNITY_IMAGE}
                      alt="Preneurin community members in a design studio setting"
                      width={1600}
                      height={2000}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="h-[500px] w-full object-cover md:h-[600px]"
                    />
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      duration: 0.6,
                      delay: 0.4,
                      y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.6 + 0.4 },
                    }}
                    className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[var(--border)] bg-white/70 p-4 backdrop-blur-xl md:p-6"
                  >
                    <p className="text-accent font-semibold text-sm tracking-wide">FIRST LIVE SESSION</p>
                    <p className="text-sm text-gray-600">The April room that shaped what Preneurin is becoming.</p>
                  </motion.div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.2}>
              <StaggerItem>
                <h2 className="font-serif font-luxury text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                  Built to bring designers into one thoughtful, supportive room.
                </h2>
              </StaggerItem>
              
              <StaggerItem>
                <div className="premium-panel rounded-[2rem] p-8 text-lg leading-relaxed text-gray-600">
                  <p>
                    Preneurin started from a simple aim: to create a community where fashion designers can connect, share experiences, and grow together.
                  </p>
                  <p>
                    The first live session in April confirmed how valuable that kind of room can be. Designers need honest conversations, meaningful connections, and guidance that speaks to both the creative and business sides of their work.
                  </p>
                  <p>
                    That is what guides Preneurin now: learning, sharing, collaboration, personal growth, professional growth, and a stronger culture of excellence within the fashion community.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* BTS Teaser Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <StaggerContainer>
              <StaggerItem>
                <div className="premium-panel relative overflow-hidden rounded-[2rem]">
                  <Image
                    src={BTS_POSTER_IMAGE}
                    alt="Behind the scenes moment from the Preneurin April session"
                    width={1600}
                    height={1200}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-[340px] w-full object-cover object-top md:h-[460px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                  <div className="absolute inset-x-6 bottom-6 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-black/25 px-5 py-4 backdrop-blur-md">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Behind The Scenes</p>
                      <p className="mt-1 text-sm text-white">A real look inside the April room that started Preneurin.</p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-2xl">
                      <Play className="h-6 w-6 text-[#0A0A0A]" />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.15}>
              <StaggerItem>
                <p className="section-kicker">Inside The April Session</p>
                <h2 className="mt-4 font-serif font-luxury text-4xl leading-tight md:text-5xl">
                  See the atmosphere of the room that first brought the community together.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
                  The BTS video captures the attention, conversation, and shared energy that shaped Preneurin&apos;s first live gathering for fashion designers.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <MagneticButton href="/success-stories">
                    <span className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition-all hover:bg-[#5a2833] hover:scale-105 sm:w-auto sm:px-8 sm:py-4">
                      Watch The BTS <ChevronRight className="h-4 w-4" />
                    </span>
                  </MagneticButton>
                  <MagneticButton href="/success-stories">
                    <span className="flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-7 py-3.5 transition-all hover:border-accent hover:text-accent sm:w-auto sm:px-8 sm:py-4">
                      Explore The First Session
                    </span>
                  </MagneticButton>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="text-center mb-12">
                <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-4">Watch The Vision</h2>
                <p className="text-lg text-gray-600">Hear directly from Damilola about why this community matters and what it can become for fashion designers.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <VisionVideoCarousel />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Aim And Objectives */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="text-center mb-16">
                <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-4">Aim And Objectives</h2>
                <p className="text-lg text-gray-600">The principles shaping Preneurin as a more meaningful fashion designer community.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {COMMUNITY_OBJECTIVES.map((pillar, index) => (
              <StaggerContainer key={index} delay={index * 0.15}>
                <StaggerItem>
                  <motion.div 
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="premium-panel rounded-[1.75rem] p-8 transition-all group hover:border-accent/50"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-accent font-serif text-5xl font-bold opacity-30 transition-opacity group-hover:opacity-100">
                        {pillar.label}
                      </span>
                      <span className="rounded-full border border-accent/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-accent">
                        Objective
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl mb-3">{pillar.title}</h3>
                    <p className="text-gray-600">{pillar.description}</p>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="text-center mb-12">
                <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600">Clear answers about how the community works and what it is growing toward.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div>
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
      <section id="join-inner-circle" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="text-center mb-12">
                <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-4">Register Your Interest</h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg">Share your details, what stage you are in, and the support you want so Preneurin can keep building for real community needs.</p>
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
