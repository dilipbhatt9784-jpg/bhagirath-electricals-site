/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  category: 'lighting' | 'switches' | 'wires' | 'industrial' | 'home' | 'accessories';
  icon: string; // Lucide icon name
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  time: string;
  avatarSeed: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'showroom' | 'lighting' | 'switches' | 'wires' | 'accessories';
}

export interface BusinessInfo {
  name: string;
  hindiName: string;
  category: string;
  rating: number;
  reviewCount: number;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  address: {
    line1: string;
    landmark: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
  };
  plusCode: string;
  hours: string;
}
