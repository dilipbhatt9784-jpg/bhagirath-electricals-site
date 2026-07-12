/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Zap, Phone, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const brands = [
    'Polycab Cables',
    'Havells Electricals',
    'Anchor Panasonic',
    'GreatWhite',
    'Legrand',
    'Syska LED',
    'Finolex Wires'
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-blue-950 text-white border-t border-white/5 relative overflow-hidden">
      {/* Footer background design accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Logo & Intro Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <div className="bg-amber-400 p-2 rounded-lg text-blue-950 shadow">
                <Zap className="h-6 w-6 fill-blue-950 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xl font-black tracking-tight text-white uppercase italic">
                  {BUSINESS_DETAILS.name}
                </span>
                <span className="text-[10px] text-amber-400 font-extrabold tracking-widest uppercase mt-0.5">
                  {BUSINESS_DETAILS.hindiName}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
              Chhattisgarh's trusted Electrical Supply Store, delivering top-tier wiring, switchgear, decorative luminaires, and wholesale accessories to houses and sites in Raipur since inception.
            </p>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300 font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_DETAILS.address.line1}, {BUSINESS_DETAILS.address.landmark}, {BUSINESS_DETAILS.address.locality}, {BUSINESS_DETAILS.address.city}, Chhattisgarh - {BUSINESS_DETAILS.address.pincode}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-white hover:underline transition-colors">
                  {BUSINESS_DETAILS.phoneFormatted}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links Column (Span 3) */}
          <div className="lg:col-span-3 text-left space-y-6">
            <h4 className="font-sans font-extrabold text-sm tracking-wider uppercase text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-300 font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-amber-400 transition-colors"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Brands Column (Span 3) */}
          <div className="lg:col-span-3 text-left space-y-6">
            <h4 className="font-sans font-extrabold text-sm tracking-wider uppercase text-amber-400">
              Authorized Supply
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {brands.map((brand, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 hover:border-amber-400/30 rounded-lg text-xs text-slate-300 transition-colors cursor-default font-semibold"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Map Plus Code Action (Span 2) */}
          <div className="lg:col-span-2 text-left space-y-6">
            <h4 className="font-sans font-extrabold text-sm tracking-wider uppercase text-amber-400">
              Location Plus Code
            </h4>
            <p className="text-xs text-slate-400 font-semibold leading-relaxed">
              Easily navigate using Google Maps Plus Code:
            </p>
            <div className="space-y-3">
              <code className="block bg-white/5 border border-white/10 p-2 text-center rounded-lg text-xs text-amber-400 font-mono select-all font-bold">
                {BUSINESS_DETAILS.plusCode.split(',')[0]}
              </code>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Bhagirath Electricals, Jhulelal Market, Raipur")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-white/10 text-xs font-semibold hover:bg-white/15 transition-all text-white border border-white/15 uppercase tracking-wider"
              >
                <span>Open in Map</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© 2026 Bhagirath Electricals. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="cursor-default">Privacy Policy</span>
            <span>•</span>
            <span className="cursor-default">Terms of Supply</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
