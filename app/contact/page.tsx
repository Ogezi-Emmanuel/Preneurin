'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Briefcase, ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

const CONTACT_EMAIL = 'secretariat@preneurin.org';
const EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;
const SPONSORSHIP_AREAS = [
  'Session sponsorship',
  'Founding partnership',
  'Resource support',
  'Designer exposure',
];

type GeneralFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SponsorFormState = {
  contactName: string;
  organization: string;
  email: string;
  phone: string;
  budgetRange: string;
  timeline: string;
  partnershipAreas: string[];
  objectives: string;
};

function openMailto(to: string, subject: string, lines: string[]) {
  const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  window.location.href = href;
}

const contactChannels = [
  {
    icon: Mail,
    title: 'Email',
    value: CONTACT_EMAIL,
    description: 'The primary inbox for every enquiry — community, press, partnerships, and more.',
  },
  {
    icon: MapPin,
    title: 'Base',
    value: 'Lagos, Nigeria',
    description: 'Rooted in Lagos, with a community vision that extends to fashion founders everywhere.',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    value: '@preneurinforum',
    description: 'Behind-the-scenes, session highlights, and the visual story of Preneurin.',
  },
];

export default function ContactPage() {
  const [generalForm, setGeneralForm] = useState<GeneralFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sponsorForm, setSponsorForm] = useState<SponsorFormState>({
    contactName: '',
    organization: '',
    email: '',
    phone: '',
    budgetRange: '',
    timeline: '',
    partnershipAreas: [],
    objectives: '',
  });
  const [generalSubmitted, setGeneralSubmitted] = useState(false);
  const [sponsorshipSubmitted, setSponsorshipSubmitted] = useState(false);

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGeneralForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSponsorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSponsorForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const togglePartnershipArea = (area: string) => {
    setSponsorForm((prev) => ({
      ...prev,
      partnershipAreas: prev.partnershipAreas.includes(area)
        ? prev.partnershipAreas.filter((item) => item !== area)
        : [...prev.partnershipAreas, area],
    }));
  };

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    openMailto(CONTACT_EMAIL, `General Enquiry: ${generalForm.subject}`, [
      'PRENEURIN GENERAL ENQUIRY',
      '',
      `Name: ${generalForm.name}`,
      `Email: ${generalForm.email}`,
      `Subject: ${generalForm.subject}`,
      '',
      'Message:',
      generalForm.message,
    ]);

    setGeneralSubmitted(true);
    setGeneralForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleSponsorshipSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    openMailto(CONTACT_EMAIL, `Sponsorship Inquiry: ${sponsorForm.organization}`, [
      'PRENEURIN SPONSORSHIP INQUIRY',
      '',
      `Primary Contact: ${sponsorForm.contactName}`,
      `Organization: ${sponsorForm.organization}`,
      `Email: ${sponsorForm.email}`,
      `Phone: ${sponsorForm.phone || 'Not provided'}`,
      `Budget Range: ${sponsorForm.budgetRange}`,
      `Timeline: ${sponsorForm.timeline}`,
      `Interested Partnership Areas: ${sponsorForm.partnershipAreas.join(', ')}`,
      '',
      'Partnership Objectives:',
      sponsorForm.objectives,
    ]);

    setSponsorshipSubmitted(true);
    setSponsorForm({
      contactName: '',
      organization: '',
      email: '',
      phone: '',
      budgetRange: '',
      timeline: '',
      partnershipAreas: [],
      objectives: '',
    });
  };

  return (
    <div className="min-h-screen text-[var(--foreground)] font-sans overflow-hidden">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative px-6 pb-24 pt-32 overflow-hidden">
        <div className="absolute -top-20 right-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="absolute top-40 -left-20 h-[340px] w-[340px] rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="premium-panel relative overflow-hidden rounded-[2.25rem] px-8 py-20 md:px-14 md:py-28 text-center">
                <div className="absolute inset-0 soft-grid opacity-50" aria-hidden="true" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                    Contact Preneurin
                  </p>
                  <h1 className="mt-6 font-serif font-luxury text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
                    Reach the <span className="text-accent">Preneurin</span> community.
                  </h1>
                  <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
                    For community enquiries, future sessions, collaborations, or early sponsorship conversations —
                    the Preneurin Secretariat listens from a single inbox.
                  </p>
                  <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <motion.a
                      href={EMAIL_HREF}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(74,32,41,0.22)] transition-all hover:bg-[#5a2833] hover:shadow-[0_24px_60px_rgba(74,32,41,0.3)]"
                    >
                      <Mail className="h-4 w-4" />
                      Email The Team
                    </motion.a>
                    <motion.a
                      href={EMAIL_HREF}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-white/70 backdrop-blur-xl px-8 py-4 font-semibold text-[var(--foreground)] transition-all hover:border-accent hover:text-accent"
                    >
                      secretariat@preneurin.org
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
            <StaggerContainer>
              <StaggerItem>
                <div>
                  <p className="section-kicker">Get in touch</p>
                  <h2 className="mt-6 font-serif font-luxury text-4xl leading-[1.05] md:text-5xl">
                    Three ways to <span className="text-accent">connect.</span>
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">
                    Every message, whether it comes through the general form or a direct line,
                    lands in the same thoughtful hands.
                  </p>
                </div>

                <div className="mt-12 space-y-5">
                  {contactChannels.map((channel, idx) => (
                    <motion.a
                      key={channel.title}
                      href={EMAIL_HREF}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.07 }}
                      whileHover={{ x: 4, y: -4 }}
                      className="group premium-panel block rounded-[1.75rem] p-7 transition-all hover:shadow-[0_30px_80px_rgba(74,32,41,0.12)]"
                    >
                      <div className="flex items-start gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 via-accent/15 to-transparent md:h-14 md:w-14">
                          <channel.icon className="h-5 w-5 text-accent md:h-6 md:w-6" strokeWidth={1.75} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="text-xl font-medium">{channel.title}</h3>
                            <ArrowRight className="h-4 w-4 shrink-0 text-accent/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent" />
                          </div>
                          <p className="mt-1 font-semibold text-[var(--foreground)]">{channel.value}</p>
                          <p className="mt-2 text-sm leading-relaxed text-gray-500 md:text-base">
                            {channel.description}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-10 premium-panel rounded-[1.75rem] p-7 md:p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15">
                      <Briefcase className="h-5 w-5 text-accent" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium">Collaboration Desk</h3>
                      <p className="mt-2 text-base leading-relaxed text-gray-600">
                        Preneurin is open to aligned sponsorship and partnership conversations through{' '}
                        <a
                          href={EMAIL_HREF}
                          className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                        >
                          {CONTACT_EMAIL}
                        </a>
                        .
                      </p>
                      <p className="mt-3 text-sm text-gray-500">
                        Expected response window: 2–3 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.15}>
              <StaggerItem>
                <div className="premium-panel rounded-[2rem] p-8 md:p-12 shadow-[0_34px_90px_rgba(74,32,41,0.1)]">
                  {generalSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex min-h-[520px] flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="relative mb-6">
                        <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl animate-pulse-slow" />
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent/25 to-accent/10">
                          <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-serif text-3xl text-[var(--foreground)] md:text-4xl">
                        Thank you.
                      </h3>
                      <p className="mt-4 max-w-md text-base leading-relaxed text-gray-500 md:text-lg">
                        Your email draft is ready to send. Once it arrives in the Secretariat inbox,
                        Preneurin will follow up from there.
                      </p>
                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setGeneralSubmitted(false)}
                        className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-7 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all hover:border-accent hover:text-accent"
                      >
                        Send another message
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleGeneralSubmit} className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent/25 to-accent/10">
                          <Mail className="h-4 w-4 text-accent" strokeWidth={1.75} />
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl md:text-3xl">General Enquiry</h3>
                          <p className="text-sm text-gray-500">Send a message to the Secretariat inbox.</p>
                        </div>
                      </div>
                      <div className="h-px bg-gradient-to-r from-accent/30 via-[var(--border)] to-transparent" />

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                            Your Name
                          </label>
                          <input
                            required
                            name="name"
                            type="text"
                            value={generalForm.name}
                            onChange={handleGeneralChange}
                            className="w-full rounded-2xl border border-[var(--border)] bg-white/75 px-5 py-4 text-[var(--foreground)] placeholder:text-gray-400 focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(173,138,112,0.12)] transition-all"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                            Email Address
                          </label>
                          <input
                            required
                            name="email"
                            type="email"
                            value={generalForm.email}
                            onChange={handleGeneralChange}
                            className="w-full rounded-2xl border border-[var(--border)] bg-white/75 px-5 py-4 text-[var(--foreground)] placeholder:text-gray-400 focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(173,138,112,0.12)] transition-all"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          Subject
                        </label>
                        <input
                          required
                          name="subject"
                          type="text"
                          value={generalForm.subject}
                          onChange={handleGeneralChange}
                          className="w-full rounded-2xl border border-[var(--border)] bg-white/75 px-5 py-4 text-[var(--foreground)] placeholder:text-gray-400 focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(173,138,112,0.12)] transition-all"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          Message
                        </label>
                        <textarea
                          required
                          name="message"
                          value={generalForm.message}
                          onChange={handleGeneralChange}
                          rows={6}
                          className="w-full resize-none rounded-2xl border border-[var(--border)] bg-white/75 px-5 py-4 text-[var(--foreground)] placeholder:text-gray-400 focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(173,138,112,0.12)] transition-all"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.985 }}
                        type="submit"
                        className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-4.5 font-semibold text-white shadow-[0_18px_40px_rgba(74,32,41,0.22)] transition-all hover:bg-[#5a2833] hover:shadow-[0_28px_70px_rgba(74,32,41,0.3)]"
                      >
                        <span>Continue To Email</span>
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </motion.button>
                    </form>
                  )}
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Sponsorship Inquiry Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="premium-panel relative overflow-hidden rounded-[2.25rem] p-8 md:p-14">
                <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-accent/8 blur-3xl" aria-hidden="true" />
                <div className="absolute -bottom-32 -left-32 h-[380px] w-[380px] rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />

                <div className="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                      Sponsorship Inquiry
                    </p>
                    <h2 className="mt-6 font-serif font-luxury text-4xl leading-[1.05] md:text-5xl">
                      Start a <span className="text-accent">sponsorship</span> or partnership conversation.
                    </h2>
                    <p className="mt-7 text-lg leading-relaxed text-gray-600 md:text-xl">
                      Share the vision for how your organization would stand with Preneurin —
                      and the Secretariat will shape a response around the next stage of the community.
                    </p>

                    <div className="mt-12 space-y-4">
                      <div className="rounded-2xl border border-[var(--border)] bg-white/65 p-5 backdrop-blur-xl">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                          Point Of Contact
                        </p>
                        <a
                          href={EMAIL_HREF}
                          className="mt-2 block text-sm text-gray-600 transition-colors hover:text-accent md:text-base"
                        >
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                      <div className="rounded-2xl border border-[var(--border)] bg-white/65 p-5 backdrop-blur-xl">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                          What you&apos;ll share
                        </p>
                        <p className="mt-2 text-sm text-gray-600 md:text-base">
                          Organization, budget range, preferred partnership areas, preferred timing,
                          and the outcomes you want to create for fashion founders.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-[var(--border)] bg-white/60 p-7 backdrop-blur-2xl md:p-10 shadow-[0_30px_80px_rgba(74,32,41,0.06)]">
                    {sponsorshipSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex min-h-[520px] flex-col items-center justify-center py-16 text-center"
                      >
                        <div className="relative mb-6">
                          <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl animate-pulse-slow" />
                          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent/25 to-accent/10">
                            <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
                          </div>
                        </div>
                        <h3 className="font-serif text-3xl text-[var(--foreground)] md:text-4xl">
                          Brief prepared.
                        </h3>
                        <p className="mt-4 max-w-md text-base leading-relaxed text-gray-500 md:text-lg">
                          Your sponsorship brief is open in your default mail client —
                          review, adjust, and send whenever you&apos;re ready.
                        </p>
                        <motion.button
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSponsorshipSubmitted(false)}
                          className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-7 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all hover:border-accent hover:text-accent"
                        >
                          Draft another brief
                          <ArrowRight className="h-4 w-4" />
                        </motion.button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSponsorshipSubmit} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                              Primary Contact
                            </label>
                            <input
                              required
                              name="contactName"
                              type="text"
                              value={sponsorForm.contactName}
                              onChange={handleSponsorChange}
                              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-[var(--foreground)] placeholder:text-gray-400 focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(173,138,112,0.12)] transition-all"
                              placeholder="Jane Smith"
                            />
                          </div>
                          <div>
                            <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                              Organization Name
                            </label>
                            <input
                              required
                              name="organization"
                              type="text"
                              value={sponsorForm.organization}
                              onChange={handleSponsorChange}
                              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-[var(--foreground)] placeholder:text-gray-400 focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(173,138,112,0.12)] transition-all"
                              placeholder="Brand or company"
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                              Email Address
                            </label>
                            <input
                              required
                              name="email"
                              type="email"
                              value={sponsorForm.email}
                              onChange={handleSponsorChange}
                              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-[var(--foreground)] placeholder:text-gray-400 focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(173,138,112,0.12)] transition-all"
                              placeholder="you@company.com"
                            />
                          </div>
                          <div>
                            <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                              Phone / WhatsApp
                            </label>
                            <input
                              name="phone"
                              type="tel"
                              value={sponsorForm.phone}
                              onChange={handleSponsorChange}
                              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-[var(--foreground)] placeholder:text-gray-400 focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(173,138,112,0.12)] transition-all"
                              placeholder="+234..."
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                              Budget Range
                            </label>
                            <select
                              required
                              name="budgetRange"
                              value={sponsorForm.budgetRange}
                              onChange={handleSponsorChange}
                              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-[var(--foreground)] focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(173,138,112,0.12)] transition-all"
                            >
                              <option value="">Select a range</option>
                              <option value="Below ₦1,000,000">Below ₦1,000,000</option>
                              <option value="₦1,000,000 - ₦5,000,000">₦1,000,000 - ₦5,000,000</option>
                              <option value="₦5,000,000 - ₦10,000,000">₦5,000,000 - ₦10,000,000</option>
                              <option value="Above ₦10,000,000">Above ₦10,000,000</option>
                            </select>
                          </div>
                          <div>
                            <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                              Timeline
                            </label>
                            <select
                              required
                              name="timeline"
                              value={sponsorForm.timeline}
                              onChange={handleSponsorChange}
                              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-[var(--foreground)] focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(173,138,112,0.12)] transition-all"
                            >
                              <option value="">Select a timeline</option>
                              <option value="Immediate (0-30 days)">Immediate (0-30 days)</option>
                              <option value="Near term (1-3 months)">Near term (1-3 months)</option>
                              <option value="Planning stage (3-6 months)">Planning stage (3-6 months)</option>
                              <option value="Longer term (6+ months)">Longer term (6+ months)</option>
                            </select>
                          </div>
                        </div>

                        <fieldset>
                          <legend className="block mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                            Interested Partnership Areas
                          </legend>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {SPONSORSHIP_AREAS.map((area) => {
                              const checked = sponsorForm.partnershipAreas.includes(area);
                              return (
                                <label
                                  key={area}
                                  className={`group flex cursor-pointer items-center gap-4 rounded-2xl border px-5 py-4 transition-all ${
                                    checked
                                      ? 'border-accent bg-gradient-to-br from-accent/15 via-accent/8 to-transparent shadow-[0_10px_30px_rgba(173,138,112,0.1)]'
                                      : 'border-[var(--border)] bg-[var(--card)] hover:border-accent/40'
                                  }`}
                                >
                                  <div
                                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all ${
                                      checked
                                        ? 'border-accent bg-accent'
                                        : 'border-[var(--border)] bg-white'
                                    }`}
                                  >
                                    {checked && (
                                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M3 8.5l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
                                      </svg>
                                    )}
                                  </div>
                                  <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => togglePartnershipArea(area)}
                                    className="sr-only"
                                  />
                                  <span className="text-sm text-gray-600 md:text-base">{area}</span>
                                </label>
                              );
                            })}
                          </div>
                        </fieldset>

                        <div>
                          <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                            Partnership Goals
                          </label>
                          <textarea
                            required
                            name="objectives"
                            value={sponsorForm.objectives}
                            onChange={handleSponsorChange}
                            rows={6}
                            className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-[var(--foreground)] placeholder:text-gray-400 focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(173,138,112,0.12)] transition-all"
                            placeholder="Tell us what you want to support, why it matters to your organization, and the outcome you hope to create."
                          />
                        </div>

                        <motion.button
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.985 }}
                          type="submit"
                          disabled={sponsorForm.partnershipAreas.length === 0}
                          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-4.5 font-semibold text-white shadow-[0_18px_40px_rgba(74,32,41,0.22)] transition-all hover:bg-[#5a2833] hover:shadow-[0_28px_70px_rgba(74,32,41,0.3)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-primary disabled:hover:shadow-[0_18px_40px_rgba(74,32,41,0.22)]"
                        >
                          <span>Send Sponsorship Brief</span>
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.button>
                      </form>
                    )}
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
