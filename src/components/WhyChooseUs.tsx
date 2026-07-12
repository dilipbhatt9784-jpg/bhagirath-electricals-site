/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ShieldCheck, 
  Coins, 
  MapPin, 
  Smile, 
  Zap, 
  Award, 
  PackageOpen, 
  Navigation,
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

// Icon Map for Why Choose Us
const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldCheck,
  Coins,
  MapPin,
  Smile,
  Zap,
  Award,
  PackageOpen,
  Navigation
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      {/* Absolute decorative accent shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-blue-600 font-extrabold uppercase tracking-widest text-xs">Customer Satisfaction Core</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-blue-900 tracking-tight uppercase italic">
            Why Choose Bhagirath Electricals?
          </h2>
          <div className="h-2 w-20 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
            Over the years, we have built absolute trust across Jawahar Nagar and the wider Raipur district. Here is why our customers consistently prefer us:
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = iconMap[item.icon] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="group relative bg-slate-50/80 hover:bg-slate-100/50 p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300"
              >
                {/* Micro-dot corner check */}
                <div className="absolute top-4 right-4 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div className="space-y-4">
                  {/* Icon Panel */}
                  <div className="inline-flex items-center justify-center p-3.5 bg-blue-100 text-blue-600 group-hover:text-blue-950 group-hover:bg-amber-400 rounded-xl shadow-sm transition-all duration-300">
                    <IconComp className="h-6 w-6 stroke-[2.5]" />
                  </div>

                  {/* Text Description */}
                  <div className="space-y-2">
                    <h3 className="font-sans font-extrabold text-blue-900 text-base uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Highlights Counter / Trust Statistics Banner */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-blue-900 text-white rounded-[2rem] p-8 shadow-2xl text-center border border-blue-800/40">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-sans font-black text-amber-400 uppercase italic">100%</p>
            <p className="text-[10px] text-slate-300 tracking-wider uppercase font-extrabold">Genuine Guarantee</p>
          </div>
          <div className="space-y-1 border-l border-blue-800/60">
            <p className="text-3xl sm:text-4xl font-sans font-black text-amber-400 uppercase italic">16+</p>
            <p className="text-[10px] text-slate-300 tracking-wider uppercase font-extrabold">Core Product Lines</p>
          </div>
          <div className="space-y-1 border-l border-blue-800/60">
            <p className="text-3xl sm:text-4xl font-sans font-black text-amber-400 uppercase italic">8+</p>
            <p className="text-[10px] text-slate-300 tracking-wider uppercase font-extrabold">Google Verified Reviews</p>
          </div>
          <div className="space-y-1 border-l border-blue-800/60">
            <p className="text-3xl sm:text-4xl font-sans font-black text-amber-400 uppercase italic">Raipur</p>
            <p className="text-[10px] text-slate-300 tracking-wider uppercase font-extrabold">Central Marketplace Location</p>
          </div>
        </div>

      </div>
    </section>
  );
}
