/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Zap } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky nav
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
    <header 
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-blue-900/95 backdrop-blur-md shadow-lg border-b border-blue-800/50 py-3' 
          : 'bg-gradient-to-b from-blue-950/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:bg-blue-500 transition-colors">
              <Zap className="h-5 w-5 fill-amber-400 stroke-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors leading-none uppercase">
                {BUSINESS_DETAILS.name}
              </span>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mt-1 leading-none">
                {BUSINESS_DETAILS.hindiName}
              </span>
            </div>
          </a>

          {/* Open Badge - Vibrant Palette design signature */}
          <div className="hidden md:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold shrink-0">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span>Open Until 8:30 PM</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-blue-950 bg-amber-400 font-extrabold shadow-md'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Phone className="h-3.5 w-3.5 text-amber-400" />
              <span>Call Now</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-blue-950 text-xs font-black uppercase tracking-wider shadow-lg transition-all hover:translate-y-[-1px]"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] bg-blue-950/98 backdrop-blur-lg transition-transform duration-300 z-40 border-t border-white/5 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 py-6 space-y-3 max-h-[calc(100vh-60px)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? 'text-blue-950 bg-amber-400 font-extrabold shadow'
                    : 'text-gray-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          
          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/15 transition-all"
            >
              <Phone className="h-5 w-5 text-amber-400" />
              <span>Call: {BUSINESS_DETAILS.phoneFormatted}</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-400 text-blue-950 font-bold hover:bg-amber-500 shadow-md transition-all"
            >
              <MapPin className="h-5 w-5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
