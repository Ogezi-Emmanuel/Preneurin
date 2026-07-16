'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

const CONTACT_EMAIL = 'secretariat@preneurin.org';
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
    <div className="min-h-screen text-[var(--foreground)] font-sans">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pb-24 px-6 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <StaggerContainer>
            <StaggerItem>
              <h1 className="font-serif font-luxury text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                Get In Touch
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-gray-500 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Reach the Preneurin team for general enquiries or use the partnership brief below to start an early sponsorship conversation.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <StaggerContainer>
              <StaggerItem>
                <h2 className="font-serif font-luxury text-4xl mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl mb-2 text-accent">Email</h3>
                    <p className="text-gray-500 dark:text-gray-400">secretariat@preneurin.org</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl mb-2 text-accent">Location</h3>
                    <p className="text-gray-500 dark:text-gray-400">Lagos, Nigeria</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl mb-2 text-accent">Social Media</h3>
                    <a
                      href="https://www.instagram.com/preneurinforum/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-500 transition-colors hover:text-accent dark:text-gray-400"
                    >
                      Instagram: @preneurinforum
                    </a>
                  </div>

                  <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
                    <h3 className="text-xl mb-2 text-accent">Collaboration Desk</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Preneurin does not yet list sponsors or partners publicly, but we are open to aligned conversations through {CONTACT_EMAIL}.
                    </p>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                      Best response window: 2-3 business days.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.2}>
              <StaggerItem>
                <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 md:p-12">
                  {generalSubmitted ? (
                    <div className="text-center py-12">
                      <h3 className="font-serif text-3xl text-accent mb-4">Thank You!</h3>
                      <p className="text-gray-500 dark:text-gray-400">Your email draft is ready to send. We&apos;ll follow up once it reaches the Secretariat inbox.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleGeneralSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm text-gray-500 dark:text-gray-300 mb-2">Your Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          value={generalForm.name}
                          onChange={handleGeneralChange}
                          className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-accent transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-500 dark:text-gray-300 mb-2">Email Address</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          value={generalForm.email}
                          onChange={handleGeneralChange}
                          className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-accent transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-xl mb-2 text-accent">Subject</h3>
                        <input 
                          required
                          name="subject"
                          type="text" 
                          value={generalForm.subject}
                          onChange={handleGeneralChange}
                          className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-accent transition-colors"
                          placeholder="How can we help?"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-500 dark:text-gray-300 mb-2">Message</label>
                        <textarea 
                          required
                          name="message"
                          value={generalForm.message}
                          onChange={handleGeneralChange}
                          rows={6}
                          className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-accent transition-colors resize-none"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Messages open in your default mail client so your enquiry goes straight into the current contact workflow.
                      </p>
                      
                      <button 
                        type="submit"
                        className="w-full py-4 bg-primary text-cream font-semibold rounded-xl hover:bg-[#5a2833] transition-all"
                      >
                        Continue To Email
                      </button>
                    </form>
                  )}
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
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-12">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <p className="text-sm tracking-[0.2em] text-accent uppercase">Sponsorship Inquiry</p>
                    <h2 className="mt-4 font-serif font-luxury text-4xl md:text-5xl">
                      Start a sponsorship or partnership conversation.
                    </h2>
                    <p className="mt-6 text-gray-500 dark:text-gray-300 leading-relaxed">
                      Preneurin is still at an early stage, so this brief is designed for first conversations with aligned organizations that want to support fashion founders as the platform grows.
                    </p>

                    <div className="mt-8 space-y-4">
                      <div className="rounded-2xl bg-[var(--background)] p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-accent">Point Of Contact</p>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">{CONTACT_EMAIL}</p>
                      </div>
                      <div className="rounded-2xl bg-[var(--background)] p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-accent">What To Include</p>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">Organization, budget range, preferred partnership areas, timing, and how you would like to support Preneurin&apos;s next stage.</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-6 md:p-8">
                    {sponsorshipSubmitted ? (
                      <div className="text-center py-12">
                        <h3 className="font-serif text-3xl text-accent mb-4">Brief Prepared</h3>
                        <p className="text-gray-500 dark:text-gray-400">Your sponsorship brief is ready in your mail client for review and sending.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSponsorshipSubmit} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <label className="block text-sm text-gray-500 dark:text-gray-300 mb-2">Primary Contact</label>
                            <input
                              required
                              name="contactName"
                              type="text"
                              value={sponsorForm.contactName}
                              onChange={handleSponsorChange}
                              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-accent transition-colors"
                              placeholder="Jane Smith"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-500 dark:text-gray-300 mb-2">Organization Name</label>
                            <input
                              required
                              name="organization"
                              type="text"
                              value={sponsorForm.organization}
                              onChange={handleSponsorChange}
                              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-accent transition-colors"
                              placeholder="Brand or company"
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <label className="block text-sm text-gray-500 dark:text-gray-300 mb-2">Email Address</label>
                            <input
                              required
                              name="email"
                              type="email"
                              value={sponsorForm.email}
                              onChange={handleSponsorChange}
                              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-accent transition-colors"
                              placeholder="you@company.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-500 dark:text-gray-300 mb-2">Phone / WhatsApp</label>
                            <input
                              name="phone"
                              type="tel"
                              value={sponsorForm.phone}
                              onChange={handleSponsorChange}
                              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-accent transition-colors"
                              placeholder="+234..."
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <label className="block text-sm text-gray-500 dark:text-gray-300 mb-2">Budget Range</label>
                            <select
                              required
                              name="budgetRange"
                              value={sponsorForm.budgetRange}
                              onChange={handleSponsorChange}
                              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-accent transition-colors"
                            >
                              <option value="">Select a range</option>
                              <option value="Below ₦1,000,000">Below ₦1,000,000</option>
                              <option value="₦1,000,000 - ₦5,000,000">₦1,000,000 - ₦5,000,000</option>
                              <option value="₦5,000,000 - ₦10,000,000">₦5,000,000 - ₦10,000,000</option>
                              <option value="Above ₦10,000,000">Above ₦10,000,000</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm text-gray-500 dark:text-gray-300 mb-2">Timeline</label>
                            <select
                              required
                              name="timeline"
                              value={sponsorForm.timeline}
                              onChange={handleSponsorChange}
                              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-accent transition-colors"
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
                          <legend className="block text-sm text-gray-500 dark:text-gray-300 mb-3">Interested Partnership Areas</legend>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {SPONSORSHIP_AREAS.map((area) => {
                              const checked = sponsorForm.partnershipAreas.includes(area);
                              return (
                                <label
                                  key={area}
                                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition-colors ${checked ? 'border-accent bg-accent/10' : 'border-[var(--border)] bg-[var(--card)]'}`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => togglePartnershipArea(area)}
                                    className="h-4 w-4 accent-[var(--primary)]"
                                  />
                                  <span className="text-sm text-gray-500 dark:text-gray-300">{area}</span>
                                </label>
                              );
                            })}
                          </div>
                        </fieldset>

                        <div>
                          <label className="block text-sm text-gray-500 dark:text-gray-300 mb-2">Partnership Goals</label>
                          <textarea
                            required
                            name="objectives"
                            value={sponsorForm.objectives}
                            onChange={handleSponsorChange}
                            rows={6}
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-accent transition-colors resize-none"
                            placeholder="Tell us what you want to support, why it matters to your organization, and the outcome you hope to create."
                          />
                        </div>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Sponsorship briefs are handed off directly to your mail client instead of being stored on the site.
                        </p>

                        <button
                          type="submit"
                          disabled={sponsorForm.partnershipAreas.length === 0}
                          className="w-full rounded-xl bg-primary py-4 font-semibold text-cream transition-all hover:bg-[#5a2833] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          Send Sponsorship Brief
                        </button>
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
