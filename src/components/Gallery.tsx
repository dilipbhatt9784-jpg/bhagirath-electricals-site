/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Eye, Grid, Maximize } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const tabs = [
    { id: 'all', name: 'All Photos' },
    { id: 'showroom', name: 'Showroom' },
    { id: 'lighting', name: 'LED & Lighting' },
    { id: 'switches', name: 'Switches & Sockets' },
    { id: 'wires', name: 'Wires & Cables' },
    { id: 'accessories', name: 'Accessories' }
  ];

  // Filter gallery items
  const filteredGallery = activeTab === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  // Paginated items shown on screen
  const visibleImages = filteredGallery.slice(0, visibleCount);

  // Lightbox handlers
  const openLightbox = (index: number) => {
    // Find the original index of this visible image inside the full filtered list
    const selectedItem = visibleImages[index];
    const actualIndex = filteredGallery.findIndex(item => item.id === selectedItem.id);
    setLightboxIndex(actualIndex !== -1 ? actualIndex : index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, filteredGallery.length));
  };

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute inset-0 bg-[radial-gradient(#dbeafe_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-blue-600 font-extrabold uppercase tracking-widest text-xs">Visual Showroom Tour</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-blue-900 tracking-tight uppercase italic">
            Our Store Gallery
          </h2>
          <div className="h-2 w-20 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
            Explore photos of our storefront, lighting displays, wiring inventory, and client service counters. Easily browse through our extensive product categories below.
          </p>
        </div>

        {/* Gallery Filtering Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const count = tab.id === 'all' 
              ? GALLERY_IMAGES.length 
              : GALLERY_IMAGES.filter(img => img.category === tab.id).length;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setVisibleCount(12); // Reset page count on filter switch
                }}
                className={`px-4.5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/35'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-blue-900 border border-slate-200'
                }`}
              >
                <span>{tab.name}</span>
                <span className={`ml-1.5 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.id ? 'bg-white text-blue-900' : 'bg-slate-200 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleImages.map((img, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              key={img.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm hover:shadow-2xl cursor-pointer transition-all duration-300"
            >
              {/* Product Photo */}
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (target.src !== GALLERY_IMAGES[0].url) {
                    target.src = GALLERY_IMAGES[0].url;
                  }
                }}
              />
              
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-blue-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] bg-amber-400 text-blue-950 font-extrabold uppercase px-2 py-0.5 rounded tracking-widest leading-none">
                    {img.category === 'lighting' ? 'LED & Lighting' : img.category}
                  </span>
                  <h4 className="font-sans font-extrabold text-white text-sm sm:text-base leading-snug uppercase tracking-wide">
                    {img.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Trigger: Load More */}
        {filteredGallery.length > visibleCount && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-600 font-extrabold border border-slate-200 hover:border-blue-600 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer uppercase tracking-wider text-xs"
            >
              <Grid className="h-4 w-4" />
              <span>Load More Photos ({filteredGallery.length - visibleCount} left)</span>
            </button>
          </div>
        )}

        {/* Lightbox Overlay Popup */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-blue-950/98 z-[100] flex flex-col items-center justify-center p-4 sm:p-8"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Left */}
              <button
                onClick={prevSlide}
                className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Main Lightbox Content Block */}
              <div 
                className="relative max-w-4xl max-h-[80vh] w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={filteredGallery[lightboxIndex].url}
                  alt={filteredGallery[lightboxIndex].title}
                  className="max-w-full max-h-[75vh] rounded-2xl object-contain border border-white/10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Navigation Right */}
              <button
                onClick={nextSlide}
                className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Lightbox Footer Details */}
              <div 
                className="absolute bottom-6 left-0 right-0 text-center px-4 space-y-1"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-[10px] bg-amber-400 text-blue-950 font-extrabold uppercase px-2 py-0.5 rounded tracking-widest">
                  {filteredGallery[lightboxIndex].category === 'lighting' ? 'LED & Lighting' : filteredGallery[lightboxIndex].category}
                </span>
                <p className="text-white text-base font-medium">
                  {filteredGallery[lightboxIndex].title}
                </p>
                <p className="text-slate-400 text-xs">
                  Photo {lightboxIndex + 1} of {filteredGallery.length}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
