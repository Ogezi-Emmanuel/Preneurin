'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <StaggerContainer>
            <StaggerItem>
              <h1 className="font-serif font-luxury text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                Get In Touch
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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
                    <h3 className="text-xl mb-2 text-[#D4AF37]">Email</h3>
                    <p className="text-gray-400">secretariat@preneurin.org</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl mb-2 text-[#D4AF37]">Location</h3>
                    <p className="text-gray-400">Lagos, Nigeria</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl mb-2 text-[#D4AF37]">Social Media</h3>
                    <p className="text-gray-400">Follow us on Instagram, Twitter, and LinkedIn</p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer delay={0.2}>
              <StaggerItem>
                <div className="bg-[#0F0F0F] border border-white/10 rounded-3xl p-8 md:p-12">
                  {submitted ? (
                    <div className="text-center py-12">
                      <h3 className="font-serif text-3xl text-[#D4AF37] mb-4">Thank You!</h3>
                      <p className="text-gray-400">Your message has been sent successfully. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">Your Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">Email Address</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">Subject</label>
                        <input 
                          required
                          name="subject"
                          type="text" 
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                          placeholder="How can we help?"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">Message</label>
                        <textarea 
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>
                      
                      <button 
                        type="submit"
                        className="w-full py-4 bg-[#D4AF37] text-[#0A0A0A] font-semibold rounded-xl hover:bg-[#E5C048] transition-all"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
