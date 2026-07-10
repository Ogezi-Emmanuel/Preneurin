'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Users, DollarSign, MessageSquare, Send, ChevronRight, Play, Pause, Plus, Minus } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';
import Breadcrumb from '@/components/Breadcrumb';

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
    <div className="border-b border-white/10 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-[#D4AF37]" /> : <Plus className="w-5 h-5 text-[#D4AF37]" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-400 pt-4">{answer}</p>
      </motion.div>
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
        />
        <button 
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors rounded-3xl"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-2xl">
            {isPlaying ? <Pause className="w-10 h-10 md:w-12 md:h-12 text-[#0A0A0A]" /> : <Play className="w-10 h-10 md:w-12 md:h-12 text-[#0A0A0A] ml-1" />}
          </div>
        </button>
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
      const message = `*PRENEURIN DESIGNERS DEVELOPMENT INITIATIVE APPLICATION*\n\n` +
        `Full Name: ${formData.fullName}\n` +
        `Brand Name: ${formData.brandName}\n` +
        `Email: ${formData.email}\n` +
        `WhatsApp: ${formData.phone}\n` +
        `Brand Stage: ${formData.brandStage}\n` +
        `Primary Barrier: ${formData.barrier}\n` +
        `Why Join: ${formData.whyJoin}`;

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://api.whatsapp.com/send?phone=2340000000000&text=${encodedMessage}`, '_blank');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  return (
    <div className="bg-[#0F0F0F] border border-white/10 rounded-3xl p-8 md:p-12">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between mb-3">
          {[1, 2, 3].map(num => (
            <div key={num} className={`text-sm font-medium ${step >= num ? 'text-[#D4AF37]' : 'text-gray-500'}`}>
              Step {num}
            </div>
          ))}
        </div>
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#D4AF37]"
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
                <label className="block text-sm text-gray-300 mb-2">Full Name</label>
                <input 
                  required
                  name="fullName"
                  type="text" 
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full bg-[#0A0A0A] border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors ${errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'}`}
                  placeholder="Your full name"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Brand Name</label>
                <input 
                  required
                  name="brandName"
                  type="text" 
                  value={formData.brandName}
                  onChange={handleChange}
                  className={`w-full bg-[#0A0A0A] border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors ${errors.brandName ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'}`}
                  placeholder="Your brand name"
                />
                {errors.brandName && <p className="text-red-500 text-sm mt-1">{errors.brandName}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Email Address</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#0A0A0A] border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">WhatsApp Phone Number</label>
                <input 
                  required
                  name="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-[#0A0A0A] border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'}`}
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
              <label className="block text-sm text-gray-300 mb-2">Current Brand Stage</label>
              <select 
                required
                name="brandStage"
                value={formData.brandStage}
                onChange={handleChange}
                className={`w-full bg-[#0A0A0A] border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors ${errors.brandStage ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'}`}
              >
                <option value="">Select your stage</option>
                <option value="Emerging Designer">Emerging Designer</option>
                <option value="Established Studio">Established Studio</option>
                <option value="Scaling Atelier">Scaling Atelier</option>
              </select>
              {errors.brandStage && <p className="text-red-500 text-sm mt-1">{errors.brandStage}</p>}
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Primary Operational Barrier</label>
              <select 
                required
                name="barrier"
                value={formData.barrier}
                onChange={handleChange}
                className={`w-full bg-[#0A0A0A] border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors ${errors.barrier ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'}`}
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
              <label className="block text-sm text-gray-300 mb-2">Why do you want to join PRENEURIN DESIGNERS DEVELOPMENT INITIATIVE?</label>
              <textarea 
                required
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleChange}
                rows={6}
                className={`w-full bg-[#0A0A0A] border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors resize-none ${errors.whyJoin ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'}`}
                placeholder="Share your story and goals..."
              />
              {errors.whyJoin && <p className="text-red-500 text-sm mt-1">{errors.whyJoin}</p>}
            </div>
            <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-xl p-6">
              <h4 className="text-[#D4AF37] font-semibold mb-2">Application Preview</h4>
              <div className="text-gray-400 text-sm space-y-1">
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
              className="flex-1 py-4 border border-white/10 rounded-xl hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
            >
              Previous
            </button>
          )}
          {step < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 py-4 bg-[#D4AF37] text-[#0A0A0A] font-semibold rounded-xl hover:bg-[#E5C048] transition-all flex items-center justify-center gap-2"
            >
              Next Step <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              className="flex-1 py-4 bg-[#D4AF37] text-[#0A0A0A] font-semibold rounded-xl hover:bg-[#E5C048] transition-all flex items-center justify-center gap-2"
            >
              Submit Application <Send className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0A0A0A] z-[10000] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#D4AF37] font-serif text-xl">PRENUERIN DESIGNERS DEVELOPMENT INITIATIVE</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <StaggerContainer>
              <StaggerItem>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm tracking-widest mb-8 shimmer">
                  <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
                  PRENEURIN DESIGNERS DEVELOPMENT INITIATIVE • BEHIND THE SEAMS
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <h1 className="font-serif font-luxury text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
                  Where We Talk About The Parts Nobody Says Out Loud.
                </h1>
              </StaggerItem>
              
              <StaggerItem>
                <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
                  A safe space and business development community for fashion designers to face real truths, solve operational struggles, and find clarity. Real stories. Real struggles. Real growth.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton href="#join-inner-circle">
                    <span 
                      className="px-8 py-4 bg-[#D4AF37] text-[#0A0A0A] font-semibold rounded-full hover:bg-[#E5C048] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      Join The Forum <ChevronRight className="w-4 h-4" />
                    </span>
                  </MagneticButton>
                  <MagneticButton href="/programs">
                    <span 
                      className="px-8 py-4 border border-white/10 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all flex items-center justify-center gap-2"
                    >
                      Explore Programs
                    </span>
                  </MagneticButton>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.2}>
              <StaggerItem>
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img 
                      src="/Our Story.jpg"
                      alt="Fashion designers collaborating in luxury studio"
                      className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Founder's Manifesto Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <StaggerContainer>
              <StaggerItem>
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img 
                      src="/Damilola.jpg" 
                      alt="Damilola Obisesan" 
                      className="w-full h-[500px] md:h-[600px] object-cover"
                    />
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                    }}
                    className="absolute bottom-6 left-6 right-6 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6"
                  >
                    <p className="text-[#D4AF37] font-semibold text-sm tracking-wider">DAMILOLA OBISESAN</p>
                    <p className="text-white/80 text-sm">Founder, Preneurin</p>
                  </motion.div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.2}>
              <StaggerItem>
                <h2 className="font-serif font-luxury text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                  From Where You Are, To Where You Want To Be.
                </h2>
              </StaggerItem>
              
              <StaggerItem>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    No matter how big of a designer you are, you have faced operational nightmares—whether it is dealing with unreliable tailors, pay guys, underpricing, or client communication.
                  </p>
                  <p>
                    We all face these struggles in secret. At Preneurin Forum, we come together as a verified community to find practical solutions from designers who have already walked the exact road you are currently walking.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="text-center mb-12">
                <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-4">Watch The Vision</h2>
                <p className="text-gray-400 text-lg">Hear directly from Damilola about what Preneurin Forum truly is.</p>
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
                <p className="text-gray-400 text-lg">Why The Forum Exists</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                num: "01", 
                title: "Staffing & Production", 
                desc: "Solving the daily chaos of unreliable tailors, pattern makers, and beading artisans.",
                icon: <Users className="w-10 h-10 text-[#D4AF37]" />
              },
              { 
                num: "02", 
                title: "Pricing & Profitability", 
                desc: "Mastering garment costing so designers never underprice their creativity again.",
                icon: <DollarSign className="w-10 h-10 text-[#D4AF37]" />
              },
              { 
                num: "03", 
                title: "Client Boundaries", 
                desc: "Setting strict standards and managing high-ticket customer expectations professionally.",
                icon: <MessageSquare className="w-10 h-10 text-[#D4AF37]" />
              }
            ].map((pillar, index) => (
              <StaggerContainer key={index} delay={index * 0.15}>
                <StaggerItem>
                  <motion.div 
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all group"
                  >
                    <div className="text-[#D4AF37] font-serif text-5xl font-bold mb-4 opacity-30 group-hover:opacity-100 transition-opacity">
                      {pillar.num}
                    </div>
                    <div className="mb-4">{pillar.icon}</div>
                    <h3 className="font-serif text-2xl mb-3">{pillar.title}</h3>
                    <p className="text-gray-400">{pillar.desc}</p>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="text-center mb-12">
                <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-400 text-lg">Got questions? We've got answers.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div>
                <FAQItem 
                  question="Who can join Preneurin Forum?"
                  answer="Preneurin Forum is exclusively for fashion designers who are serious about growing their business and solving real operational challenges. We verify all members to ensure a safe, high-quality community."
                />
                <FAQItem 
                  question="How much does it cost to join?"
                  answer="Pricing information is shared during the application process. We offer different tiers based on your brand stage and needs."
                />
                <FAQItem 
                  question="What kind of support will I get?"
                  answer="You'll get access to a private community, monthly Q&As with Damilola, expert workshops, and practical resources for staffing, pricing, and client management."
                />
                <FAQItem 
                  question="Is this community only for designers in Nigeria?"
                  answer="While founded in Lagos, Preneurin Forum welcomes fashion designers from around the world who are facing similar operational challenges."
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
                <h2 className="font-serif font-luxury text-4xl md:text-5xl mb-4">Join The Inner Circle</h2>
                <p className="text-gray-400 text-lg">Connect, ask real questions, and scale with a verified network of fashion entrepreneurs.</p>
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
