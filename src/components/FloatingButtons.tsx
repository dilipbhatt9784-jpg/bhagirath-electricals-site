/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Floating Action Buttons Area */}
      <div className="fixed bottom-6 left-6 z-[49] flex flex-col gap-3">
        {/* Phone Button */}
        <a
          href={`tel:${BUSINESS_DETAILS.phone}`}
          className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-amber-400 hover:bg-amber-500 text-blue-950 shadow-2xl transition-all duration-300 hover:scale-110 relative group"
          aria-label="Call Bhagirath Electricals"
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 fill-blue-950 stroke-none" />
          
          {/* Tooltip */}
          <span className="absolute left-16 bg-blue-900 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow whitespace-nowrap">
            Call: {BUSINESS_DETAILS.phoneFormatted}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_DETAILS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 relative group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 fill-white stroke-none" />
          
          {/* Tooltip */}
          <span className="absolute left-16 bg-blue-900 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow whitespace-nowrap">
            WhatsApp Live Support
          </span>
        </a>
      </div>

      {/* Scroll to Top Button (Right Side) */}
      <div className="fixed bottom-6 right-6 z-[49]">
        <button
          onClick={scrollToTop}
          className={`flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-blue-900 hover:bg-blue-950 border border-white/10 text-amber-400 shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Scroll to Top"
        >
          <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </>
  );
}
