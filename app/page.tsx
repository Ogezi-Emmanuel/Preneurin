'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Users, DollarSign, MessageSquare, Send, ChevronRight, Play, Plus, Minus } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';
import Breadcrumb from '@/components/Breadcrumb';

const DASA_MEDIA_ROOT = '/DASA%20PICTURES';
const HERO_VIDEO_SRC = `${DASA_MEDIA_ROOT}/IMG_5870.MP4`;
const HERO_FALLBACK_IMAGE = `${DASA_MEDIA_ROOT}/IMG_0847.jpg`;
const COMMUNITY_IMAGE = `${DASA_MEDIA_ROOT}/IMG_0815.jpg`;
const BTS_POSTER_IMAGE = `${DASA_MEDIA_ROOT}/IMG_0718.jpg`;
const CONTACT_EMAIL = 'secretariat@preneurin.org';

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
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/95 via-[var(--background)]/75 to-black/50 dark:from-black/85 dark:via-black/60 dark:to-black/55" />
    </div>
  );
};

// Custom Video Player
const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-container w-full max-w-4xl mx-auto">
      <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[9/12]">
        <video 
          ref={videoRef}
          src="/Preneurin Video.mp4"
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-top rounded-3xl"
          onClick={togglePlay}
        />
        <motion.button 
          initial={{ opacity: 1 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors rounded-3xl"
          style={{ pointerEvents: isPlaying ? 'none' : 'auto' }}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent flex items-center justify-center shadow-2xl">
            <Play className="w-10 h-10 md:w-12 md:h-12 text-[#0A0A0A]" />
          </div>
        </motion.button>
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
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 md:p-12">
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
            <div className="bg-[var(--background)] border border-accent/20 rounded-xl p-6">
              <h4 className="text-accent font-semibold mb-2">Interest Form Preview</h4>
              <div className="text-gray-500 dark:text-gray-400 text-sm space-y-1">
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
              Prepare Email Draft <Send className="w-4 h-4" />
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
      <Breadcrumb />

      {/* Hero Section */}
      <section className="px-6 pt-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[var(--border)] min-h-[78vh]">
          <HeroBackgroundVideo />
          <div className="relative z-10 flex min-h-[78vh] items-center px-4 py-12 md:px-10 lg:px-16">
            <div className="max-w-lg !text-white">
              <StaggerContainer>
                <StaggerItem>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-2 text-[10px] tracking-[0.16em] !text-white backdrop-blur-xl sm:px-4 sm:text-xs">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    DESIGNERS ONLY
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <h1 className="mt-5 max-w-md font-serif font-luxury text-[2rem] leading-tight !text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Fashion Growth. No Guesswork.
                  </h1>
                </StaggerItem>

                <StaggerItem>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed !text-white sm:text-base md:text-lg">
                    Built from our first April session for designers tackling pricing, production, clients, and growth.
                  </p>
                </StaggerItem>

                <StaggerItem>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <MagneticButton href="#join-inner-circle">
                      <span className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition-all hover:bg-[#5a2833] hover:scale-105 sm:w-auto sm:px-8 sm:py-4">
                        Join The Next Session <ChevronRight className="h-4 w-4" />
                      </span>
                    </MagneticButton>
                    <MagneticButton href="/success-stories">
                      <span className="flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-black/20 px-7 py-3.5 text-white transition-all hover:border-accent hover:text-white sm:w-auto sm:px-8 sm:py-4">
                        See How It Started
                      </span>
                    </MagneticButton>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
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
                  <div className="rounded-3xl overflow-hidden border border-[var(--border)]">
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
                    className="absolute bottom-6 left-6 right-6 bg-[var(--background)]/80 backdrop-blur-xl border border-[var(--border)] rounded-2xl p-4 md:p-6"
                  >
                    <p className="text-accent font-semibold text-sm tracking-wide">FIRST LIVE SESSION</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">The April room that shaped what Preneurin is becoming.</p>
                  </motion.div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.2}>
              <StaggerItem>
                <h2 className="font-serif font-luxury text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                  Built from one honest room for fashion founders.
                </h2>
              </StaggerItem>
              
              <StaggerItem>
                <div className="space-y-6 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                  <p>
                    Preneurin started with one live session in April after Damilola Obiesan, Creative Director of Dassah Oikos, saw how often designers were facing pricing, production, and client problems alone.
                  </p>
                  <p>
                    The first session was intentionally practical: honest conversations about what happens inside real studios, what keeps founders stuck, and what kind of support actually helps.
                  </p>
                  <p>
                    That early momentum now guides the next phase of Preneurin: a founder-led platform for fashion designers who want clearer decisions, stronger structure, and growth they can sustain.
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
                <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]">
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
                <p className="text-sm uppercase tracking-[0.2em] text-accent">Inside The April Session</p>
                <h2 className="mt-4 font-serif font-luxury text-4xl leading-tight md:text-5xl">
                  See the behind-the-scenes energy that made the first session real.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                  The BTS video captures what the photos alone cannot: the atmosphere,and attention that shaped Preneurin&apos;s first live gathering.
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
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[var(--card)] to-transparent">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="text-center mb-12">
                <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-4">Watch The Vision</h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg">Hear directly from Damilola about why Preneurin started and where it can grow from here.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <VideoPlayer />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* The Reality Pillars */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="text-center mb-16">
                <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-4">The Reality</h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg">Why the first session mattered</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                num: "01", 
                title: "Staffing & Production", 
                desc: "Unpacking the daily chaos around tailors, pattern makers, and the handoff between creative ideas and real delivery.",
                icon: <Users className="w-10 h-10 text-accent" />
              },
              { 
                num: "02", 
                title: "Pricing & Profitability", 
                desc: "Helping designers price with more confidence so growth does not come at the expense of profit.",
                icon: <DollarSign className="w-10 h-10 text-accent" />
              },
              { 
                num: "03", 
                title: "Client Boundaries", 
                desc: "Giving founders language and structure for handling demanding clients with more clarity.",
                icon: <MessageSquare className="w-10 h-10 text-accent" />
              }
            ].map((pillar, index) => (
              <StaggerContainer key={index} delay={index * 0.15}>
                <StaggerItem>
                  <motion.div 
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 hover:border-accent/50 transition-all group"
                  >
                    <div className="text-accent font-serif text-5xl font-bold mb-4 opacity-30 group-hover:opacity-100 transition-opacity">
                      {pillar.num}
                    </div>
                    <div className="mb-4">{pillar.icon}</div>
                    <h3 className="font-serif text-2xl mb-3">{pillar.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{pillar.desc}</p>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[var(--card)] to-transparent">
        <div className="max-w-3xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="text-center mb-12">
                <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg">Clear answers about where Preneurin stands today.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div>
                <FAQItem 
                  question="Who can join Preneurin?"
                  answer="Preneurin is built for fashion designers who want practical business clarity. At this stage, each session is kept focused so the room fits the designers it is meant to serve."
                />
                <FAQItem 
                  question="How much does it cost to join?"
                  answer="Pricing is shared when the next session opens. Because Preneurin is still growing from its first live session, details are communicated directly to interested designers."
                />
                <FAQItem 
                  question="What kind of support will I get?"
                  answer="Right now, support centers on live sessions, practical discussion, and follow-up resources shaped by the questions designers brought into the April room."
                />
                <FAQItem 
                  question="Is this community only for designers in Nigeria?"
                  answer="Preneurin started in Lagos and the first session happened there, but the long-term vision is to support fashion designers wherever the conversation is relevant."
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
                <p className="text-gray-500 dark:text-gray-400 text-lg">Share your details and the challenge you want help with for the next Preneurin session.</p>
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
