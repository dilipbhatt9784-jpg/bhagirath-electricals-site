/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, BadgePercent, MapPin } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data';

export default function About() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "100% Genuine Brands",
      desc: "All materials sourced directly from verified electrical brand suppliers."
    },
    {
      icon: BadgePercent,
      title: "Wholesale & Retail",
      desc: "Get industry-best discounted quotes for houses, complexes, and industrial sites."
    },
    {
      icon: Users,
      title: "Contractor Partner",
      desc: "Special supply packages and smooth invoice settlements for electrical contractors."
    },
    {
      icon: MapPin,
      title: "Central Raipur Location",
      desc: "Conveniently situated in Jhulelal Market, Jawahar Nagar, easily accessible."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column Left: Visual Story Block */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Outer Glowing Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-amber-400 rounded-[2rem] blur-2xl opacity-15"></div>
              
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-slate-50 p-4">
                <img
                  src="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&w=600&q=80"
                  alt="Quality Electrical Products Showcase"
                  className="rounded-[1.5rem] w-full h-[350px] object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating experience widget */}
                <div className="absolute bottom-8 left-8 right-8 bg-blue-900/95 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/15 text-white shadow-xl">
                  <p className="text-amber-400 font-sans text-4xl font-black uppercase italic">Raipur</p>
                  <p className="text-slate-300 text-[10px] tracking-widest uppercase font-black mt-1">Chhattisgarh's Premier Hub</p>
                  <p className="text-slate-300 text-xs mt-2 font-normal leading-relaxed">Serving local electricians, builders, and direct household consumers with absolute distinction.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column Right: Text & Content Block */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-blue-600 font-extrabold uppercase tracking-widest text-xs">Establishment & Trust</span>
              <h2 className="font-sans text-3xl sm:text-4xl font-black text-blue-900 tracking-tight uppercase italic">
                About Bhagirath Electricals
              </h2>
              <div className="h-2 w-20 bg-amber-400 rounded-full"></div>
            </div>

            <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-base sm:text-lg">
              <p>
                <strong>Bhagirath Electricals (भागीरथ इलेक्ट्रिकल्स)</strong> is a trusted electrical supply store located in Jhulelal Market, Jawahar Nagar, Raipur. We provide premium electrical products for residential, commercial, and industrial requirements.
              </p>
              <p>
                Our core commitment is to offer genuine products, competitive prices, and reliable customer service. We work closely with contractors, professional electricians, and homeowners to ensure their projects receive absolute safety compliance and high-performance items.
              </p>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-xl h-12 w-12 flex items-center justify-center font-bold">
                    <item.icon className="h-6 w-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wide">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-1 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
