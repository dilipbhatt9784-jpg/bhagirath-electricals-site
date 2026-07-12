/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Compass, Send, CheckCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', msg: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', msg: '' });
    }, 4000);
  };

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.571448259695!2d81.6508933!3d21.2389334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd415b3b0dfb%3A0x8e8334861bfa2b63!2sJhulelal%20Market%20Raipur!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-24 bg-slate-100/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-blue-600 font-extrabold uppercase tracking-widest text-xs">Reach Out Today</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-blue-900 tracking-tight uppercase italic">
            Contact Bhagirath Electricals
          </h2>
          <div className="h-2 w-20 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
            Have any questions or need bulk product rates? Call us directly, text us on WhatsApp, or send an inquiry using our secure form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Info and Instant Actions Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-blue-900 text-white p-8 sm:p-10 rounded-[2rem] border border-blue-800/40 shadow-2xl">
            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-2xl font-black text-amber-400 uppercase italic">
                  {BUSINESS_DETAILS.name}
                </h3>
                <p className="text-slate-300 text-[10px] font-extrabold tracking-wider uppercase mt-1">
                  {BUSINESS_DETAILS.category}
                </p>
              </div>

              {/* Business Info Items */}
              <div className="space-y-6 pt-4">
                
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-white/10 text-amber-400 p-3 rounded-xl h-12 w-12 flex items-center justify-center font-bold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-extrabold uppercase tracking-wider">Phone Number</p>
                    <a href={`tel:${BUSINESS_DETAILS.phone}`} className="text-base sm:text-lg font-black hover:text-amber-400 transition-colors">
                      {BUSINESS_DETAILS.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-white/10 text-amber-400 p-3 rounded-xl h-12 w-12 flex items-center justify-center font-bold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-extrabold uppercase tracking-wider">Showroom Address</p>
                    <p className="text-sm text-slate-100 mt-1 font-medium leading-relaxed">
                      {BUSINESS_DETAILS.address.line1}, {BUSINESS_DETAILS.address.landmark},<br />
                      {BUSINESS_DETAILS.address.locality}, {BUSINESS_DETAILS.address.city},<br />
                      {BUSINESS_DETAILS.address.state} – {BUSINESS_DETAILS.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-white/10 text-amber-400 p-3 rounded-xl h-12 w-12 flex items-center justify-center font-bold">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-extrabold uppercase tracking-wider">Business Hours</p>
                    <p className="text-sm text-emerald-400 mt-1 font-black uppercase tracking-wider">
                      {BUSINESS_DETAILS.hours}
                    </p>
                  </div>
                </div>

                {/* Plus Code */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-white/10 text-amber-400 p-3 rounded-xl h-12 w-12 flex items-center justify-center font-bold">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-extrabold uppercase tracking-wider">Plus Code</p>
                    <code className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-amber-400 font-mono mt-1 inline-block font-bold">
                      {BUSINESS_DETAILS.plusCode}
                    </code>
                  </div>
                </div>

              </div>
            </div>

            {/* Instant Multi-CTAs */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-blue-950 font-black text-[10px] uppercase tracking-wider shadow transition-all hover:scale-105"
              >
                <Phone className="h-4.5 w-4.5 fill-blue-950 stroke-none" />
                <span>Call Now</span>
              </a>
              <a
                href={BUSINESS_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-[10px] uppercase tracking-wider shadow transition-all hover:scale-105"
              >
                <MessageSquare className="h-4.5 w-4.5 fill-white stroke-none" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Bhagirath Electricals, Jhulelal Market, Raipur")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-extrabold text-[10px] border border-white/15 uppercase tracking-wider transition-all hover:scale-105"
              >
                <Compass className="h-4.5 w-4.5" />
                <span>Directions</span>
              </a>
            </div>

          </div>

          {/* Column 2: Maps and Custom Contact Form Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Embedded Live Google Maps Iframe */}
            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl h-[280px] relative">
              <iframe
                title="Bhagirath Electricals Google Map Raipur"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

            {/* Premium Message Form */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-2xl flex-grow">
              <h4 className="font-sans font-extrabold text-blue-900 text-lg mb-6 uppercase tracking-wide">
                Send a Direct Message
              </h4>
              
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 h-[220px]">
                  <CheckCircle className="h-12 w-12 text-emerald-500 animate-[bounce_1s_ease]" />
                  <p className="font-extrabold text-base uppercase tracking-wider text-emerald-950">Inquiry Submitted Successfully!</p>
                  <p className="text-xs text-emerald-600 font-semibold leading-relaxed">Our representative will call you back on the provided phone number within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-500 uppercase mb-1.5 tracking-wider">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-sm outline-none transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-500 uppercase mb-1.5 tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-sm outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase mb-1.5 tracking-wider">Email Address (Optional)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-sm outline-none transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase mb-1.5 tracking-wider">Message / Product Requirement</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.msg}
                      onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                      placeholder="Please write down what electrical brands and products you are interested in..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-sm outline-none resize-none transition-all font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-900 hover:bg-blue-950 text-white rounded-xl font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Secure Message</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
