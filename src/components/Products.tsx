/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lightbulb, 
  ToggleLeft, 
  Grid, 
  Activity, 
  Layers, 
  Cpu, 
  Sun, 
  Sparkles, 
  Wind, 
  Zap, 
  Plug2, 
  Hammer, 
  Home, 
  HardHat, 
  TrendingUp, 
  ShieldAlert,
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { PRODUCTS_LIST, BUSINESS_DETAILS } from '../data';
import { ProductItem } from '../types';

// Map icon string names to components
const iconMap: Record<string, React.ComponentType<any>> = {
  Lightbulb,
  ToggleLeft,
  Grid,
  Activity,
  Layers,
  Cpu,
  Sun,
  Sparkles,
  Wind,
  Zap,
  Plug2,
  Hammer,
  Home,
  HardHat,
  TrendingUp,
  ShieldAlert
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'lighting', name: 'Lighting' },
    { id: 'switches', name: 'Switches & Sockets' },
    { id: 'wires', name: 'Wires & Cables' },
    { id: 'industrial', name: 'Industrial & Safety' },
    { id: 'accessories', name: 'Accessories & Contractor' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_LIST
    : PRODUCTS_LIST.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-slate-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-blue-600 font-extrabold uppercase tracking-widest text-xs">Full Spectrum Showroom</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-blue-900 tracking-tight uppercase italic">
            Our Products & Services
          </h2>
          <div className="h-2 w-20 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
            We supply high-safety components, classic and modern architectural accessories, and bulk wholesale materials for leading construction projects in Raipur.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/35'
                  : 'bg-white text-slate-600 hover:text-blue-900 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Cards Grid with Smooth Reorder Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const IconComponent = iconMap[product.icon] || Zap;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Icon Header */}
                    <div className="relative inline-flex items-center justify-center p-3.5 bg-blue-100 text-blue-600 rounded-xl group-hover:bg-amber-400 group-hover:text-blue-950 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 stroke-[2.5]" />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3 className="font-sans font-extrabold text-blue-900 group-hover:text-blue-700 transition-colors duration-200 text-base uppercase tracking-wide">
                        {product.name}
                      </h3>
                      <p className="text-slate-500 text-xs mt-2 leading-relaxed font-medium">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                    <span className="capitalize text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 tracking-wider font-extrabold uppercase">
                      {product.category === 'wires' ? 'Wires & Cables' : product.category}
                    </span>
                    <a
                      href={`https://wa.me/916367048168?text=Hello%20Bhagirath%20Electricals%2C%20I%20am%20inquiring%20about%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline text-blue-600 font-extrabold uppercase tracking-wider text-[10px]"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Promo Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-950 rounded-[2rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-blue-800/40">
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4 text-left">
              <h3 className="font-sans text-2xl sm:text-3xl font-black tracking-tight uppercase italic leading-tight">
                Are you a builder, contractor, or commercial developer?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-medium max-w-xl">
                Get project-specific wholesale price lists, customized billing estimates, and reliable site delivery coordination. Partner with Bhagirath Electricals today!
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="inline-flex items-center gap-2.5 bg-amber-400 hover:bg-amber-500 text-blue-950 px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105"
              >
                <PhoneCall className="h-4.5 w-4.5 fill-blue-950 stroke-none" />
                <span>Call Sales Representative</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
