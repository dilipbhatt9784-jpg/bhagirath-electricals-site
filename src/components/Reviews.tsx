/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, MessageSquare, Quote } from 'lucide-react';
import { REVIEWS_LIST, BUSINESS_DETAILS } from '../data';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-slate-100/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Google Ratings Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-4 text-left">
            <span className="text-blue-600 font-extrabold uppercase tracking-widest text-xs">Verified Google Customer Reviews</span>
            <h2 className="font-sans text-3xl sm:text-4xl font-black text-blue-900 tracking-tight uppercase italic">
              What Our Customers Say
            </h2>
            <div className="h-2 w-20 bg-amber-400 rounded-full"></div>
            <p className="text-slate-600 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
              We focus on building long-term relationships through transparent transactions. Check out actual reviews from customers in Raipur who bought electrical equipment from us.
            </p>
          </div>

          {/* Google Ratings Trust Badge */}
          <div className="lg:col-span-4 bg-white p-6 rounded-[2rem] border border-slate-200 shadow-2xl flex flex-col items-center justify-center text-center space-y-2 relative">
            <div className="text-xs uppercase tracking-widest font-black text-slate-400">Google Rating</div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-sans font-black text-blue-900 italic uppercase">{BUSINESS_DETAILS.rating}</span>
              <span className="text-xl font-extrabold text-slate-400">/ 5</span>
            </div>
            
            {/* Star Icons Row */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star 
                  key={idx} 
                  className={`h-5 w-5 ${
                    idx < Math.floor(BUSINESS_DETAILS.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : idx < BUSINESS_DETAILS.rating
                        ? 'fill-amber-400 text-amber-400 opacity-50'
                        : 'text-slate-200'
                  }`} 
                />
              ))}
            </div>

            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
              Based on <span className="font-extrabold text-blue-600">{BUSINESS_DETAILS.reviewCount} Google reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Masonry or Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS_LIST.map((review) => (
            <div 
              key={review.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              {/* Floating Quote Accent */}
              <div className="absolute top-6 right-6 text-blue-50 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity">
                <Quote className="h-12 w-12 transform scale-x-[-1]" />
              </div>

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star 
                      key={idx} 
                      className={`h-4 w-4 ${
                        idx < review.rating 
                          ? 'fill-amber-400 text-amber-400' 
                          : 'text-slate-200'
                      }`} 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm font-medium leading-relaxed italic">
                  "{review.text || 'Good job.'}"
                </p>
              </div>

              {/* Reviewer Meta Row */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.avatarSeed}&backgroundColor=1e3a8a,f59e0b&textColor=white`}
                  alt={review.author}
                  className="h-10 w-10 rounded-full border border-slate-200 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-sans font-extrabold text-blue-900 text-sm uppercase tracking-wide">{review.author}</h4>
                  <p className="text-slate-400 text-[10px] font-bold tracking-wider uppercase">{review.time}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Local Verification Badge */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-medium">
            * All customer testimonies are sourced from verified Google Reviews of Bhagirath Electricals.
          </p>
        </div>

      </div>
    </section>
  );
}
