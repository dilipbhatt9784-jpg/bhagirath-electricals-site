/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Navigation, Star, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data';

// Define standard path string for Vite compilation
const heroBg = '/src/assets/images/showroom_hero_1783669786547.jpg';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-950 pt-20"
    >
      {/* Background Image with Dark & Blue Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Bhagirath Electricals Showroom"
          className="w-full h-full object-cover object-center scale-105 motion-safe:animate-[pulse_10s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black uppercase tracking-widest"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Premium Electrical Supply Store</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight uppercase italic"
            >
              Your Trusted <br className="hidden sm:inline" />
              <span className="text-amber-400 not-italic uppercase block sm:inline">
                Electrical Supply
              </span> <br />
              Partner in Raipur
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl font-medium leading-relaxed"
            >
              Providing premium quality electrical products, reliable service, and top national brands for homes, businesses, contractors, and industries.
            </motion.p>

            {/* Micro Badges: Stars, Reviews, Hours */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 text-sm text-gray-200 bg-white/5 backdrop-blur-md p-4 rounded-[2rem] border border-white/10 max-w-lg"
            >
              <div className="flex items-center gap-2 border-r border-white/10 pr-4">
                <div className="flex items-center text-amber-400">
                  <Star className="h-5 w-5 fill-amber-400 stroke-none" />
                  <span className="ml-1 font-bold">{BUSINESS_DETAILS.rating}</span>
                </div>
                <span className="text-xs text-gray-300">({BUSINESS_DETAILS.reviewCount} Reviews)</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-400" />
                <span className="text-xs font-semibold uppercase text-emerald-400">Open Daily</span>
                <span className="text-xs text-gray-300">• Closes at 8:30 PM</span>
              </div>
            </motion.div>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-blue-900 font-black text-sm uppercase tracking-wider shadow-lg hover:translate-y-[-2px] transition-all"
              >
                <Phone className="h-5 w-5 fill-blue-900 stroke-none" />
                <span>Call Now (+91 63670)</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-sm hover:bg-white/20 uppercase tracking-wider transition-all hover:translate-y-[-2px]"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Navigation className="h-5 w-5 text-amber-400" />
                <span>Get Directions</span>
              </a>
            </motion.div>

          </div>

          {/* Featured Visual Panel (Right hand side for widescreen) */}
          <div className="hidden lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-sm rounded-[2rem] overflow-hidden border border-white/15 bg-white/5 p-3 backdrop-blur-md shadow-2xl"
            >
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-amber-400/10 rounded-full blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-blue-950">
                <img
                  src={heroBg}
                  alt="Showroom display"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-blue-950/80 backdrop-blur-md border border-white/10">
                  <p className="text-white text-sm font-bold uppercase tracking-wider">Bhagirath Electricals</p>
                  <p className="text-amber-400 text-xs font-medium">Jawahar Nagar, Raipur</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
