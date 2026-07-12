/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'products', 'why-choose-us', 'gallery', 'reviews', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the active viewpoint
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fafafa] selection:bg-brand-yellow-400 selection:text-brand-blue-950 overflow-x-hidden antialiased">
      
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Sections Container */}
      <main>
        
        {/* Hero Banner Showcase */}
        <Hero />

        {/* Brand About and History */}
        <About />

        {/* Products Grid & Catalog with Filtering */}
        <Products />

        {/* Why Choose Us features */}
        <WhyChooseUs />

        {/* Interactive Responsive Gallery Showcase with Lightbox */}
        <Gallery />

        {/* Testimonials and Verified Google Reviews */}
        <Reviews />

        {/* Detailed Business Info, Embed Google Map and Messages Form */}
        <Contact />

      </main>

      {/* Footer Details, Quick Links, and Brand Affiliations */}
      <Footer />

      {/* Floating Call, WhatsApp, and Scroll-to-Top triggers */}
      <FloatingButtons />

    </div>
  );
}
