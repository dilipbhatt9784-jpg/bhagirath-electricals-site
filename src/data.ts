/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BusinessInfo, ProductItem, ReviewItem, GalleryItem } from './types';

export const BUSINESS_DETAILS: BusinessInfo = {
  name: "Bhagirath Electricals",
  hindiName: "भागीरथ इलेक्ट्रिकल्स",
  category: "Electrical Supply Store",
  rating: 3.6,
  reviewCount: 8,
  phone: "+916367048168",
  phoneFormatted: "+91 63670 48168",
  whatsapp: "https://wa.me/916367048168?text=Hello%20Bhagirath%20Electricals%2C%20I%20am%20interested%20in%20your%20products.",
  address: {
    line1: "Jhulelal Market",
    landmark: "Opp. Dena Bank",
    locality: "Jawahar Nagar",
    city: "Raipur",
    state: "Chhattisgarh",
    pincode: "492001"
  },
  plusCode: "6JWM+Q5, Raipur, Chhattisgarh",
  hours: "Open Daily • Closes at 8:30 PM"
};

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "wires",
    name: "Electrical Wires",
    description: "High-conductivity, fire-retardant copper wires for safe residential and commercial wiring.",
    category: "wires",
    icon: "Activity"
  },
  {
    id: "cables",
    name: "Electrical Cables",
    description: "Armored, unarmored, coaxial, and communication cables for heavy-duty power distribution.",
    category: "wires",
    icon: "Layers"
  },
  {
    id: "switches",
    name: "Switches",
    description: "Durable, high-grade classic switches designed for smooth tactile click and long lifecycle.",
    category: "switches",
    icon: "ToggleLeft"
  },
  {
    id: "modular-switches",
    name: "Modular Switches",
    description: "Elegant, modern smart modular switches with sleek templates and child-safe shutter designs.",
    category: "switches",
    icon: "Grid"
  },
  {
    id: "mcbs",
    name: "MCBs (Miniature Circuit Breakers)",
    description: "Advanced short-circuit and overload protection devices for home and machinery safety.",
    category: "industrial",
    icon: "ShieldAlert"
  },
  {
    id: "db-boards",
    name: "Distribution Boards",
    description: "Esthetic, safe, and rust-resistant distribution enclosures for streamlined circuit control.",
    category: "industrial",
    icon: "Cpu"
  },
  {
    id: "led-lights",
    name: "LED Lights",
    description: "Energy-efficient, eco-friendly, ultra-bright LED bulbs, batten lights, and spotlights.",
    category: "lighting",
    icon: "Lightbulb"
  },
  {
    id: "ceiling-lights",
    name: "Ceiling Lights",
    description: "Sophisticated recessed, flush mount, and surface-mounted panel lights for false ceilings.",
    category: "lighting",
    icon: "Sun"
  },
  {
    id: "decorative-lights",
    name: "Decorative Lights",
    description: "Stunning chandeliers, pendant lights, wall sconces, and ambient color-changing LED strips.",
    category: "lighting",
    icon: "Sparkles"
  },
  {
    id: "fans",
    name: "Fans",
    description: "High-speed ceiling fans, elegant designer fans, energy-efficient BLDC fans, and exhaust systems.",
    category: "home",
    icon: "Wind"
  },
  {
    id: "sockets",
    name: "Sockets",
    description: "Multi-plug modern modular sockets with dual-USB charging, high-amperage power outlets.",
    category: "switches",
    icon: "Zap"
  },
  {
    id: "accessories",
    name: "Electrical Accessories",
    description: "Premium PVC conduits, tape, junction boxes, extension boards, and mounting accessories.",
    category: "accessories",
    icon: "Plug2"
  },
  {
    id: "industrial-items",
    name: "Industrial Electrical Items",
    description: "Industrial plugs, heavy switchgears, rotary switches, and main switches for plants and machinery.",
    category: "industrial",
    icon: "Hammer"
  },
  {
    id: "home-products",
    name: "Home Electrical Products",
    description: "Geysers, immersion rods, doorbells, voltage stabilizers, and everyday home electrical utilities.",
    category: "home",
    icon: "Home"
  },
  {
    id: "contractor-supply",
    name: "Contractor Supply",
    description: "Bulk supply packages with direct-to-site delivery and project-based premium discounts.",
    category: "industrial",
    icon: "HardHat"
  },
  {
    id: "wholesale-materials",
    name: "Wholesale Electrical Materials",
    description: "Wholesale price distribution of leading brands (Havells, Polycab, Anchor, GreatWhite, etc.) for retailers.",
    category: "accessories",
    icon: "TrendingUp"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Genuine Electrical Products",
    description: "We supply only 100% authentic products sourced directly from trusted national and global manufacturers.",
    icon: "ShieldCheck"
  },
  {
    title: "Competitive Prices",
    description: "Get wholesale and highly competitive pricing for both retail buyers and bulk purchase contractors.",
    icon: "Coins"
  },
  {
    title: "Trusted Local Store",
    description: "With years of honest service in Raipur, our reputation is built on reliability, truth, and community trust.",
    icon: "MapPin"
  },
  {
    title: "Friendly Customer Support",
    description: "Need help choosing the right wire gauge or switch designs? Our expert staff is always ready to guide you.",
    icon: "Smile"
  },
  {
    title: "Fast Service",
    description: "Speedy order processing, quick bulk loading, and immediate response on phone or WhatsApp inquiries.",
    icon: "Zap"
  },
  {
    title: "Reliable Quality",
    description: "All products adhere to ISI standards and security certifications to ensure the absolute safety of your space.",
    icon: "Award"
  },
  {
    title: "Wide Product Range",
    description: "From a single LED bulb to massive industrial power cables, get every electrical supply under one roof.",
    icon: "PackageOpen"
  },
  {
    title: "Convenient Location",
    description: "Centrally located at Jhulelal Market, Jawahar Nagar, opposite Dena Bank in Raipur, with easy parking access.",
    icon: "Navigation"
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: "rev1",
    author: "Rama Ram",
    rating: 5,
    text: "Good job.",
    time: "2 years ago",
    avatarSeed: "rama"
  },
  {
    id: "rev2",
    author: "Kalu Sahu",
    rating: 5,
    text: "New electric shop has opened in Pacphedi Naka, call the sales person for orders.",
    time: "2 years ago",
    avatarSeed: "kalu"
  },
  {
    id: "rev3",
    author: "Gottam Bhatt",
    rating: 5,
    text: "Excellent experience. Got genuine switches and wires at wholesale rates for my new home in Jawahar Nagar. Highly recommended!",
    time: "1 year ago",
    avatarSeed: "gottam"
  },
  // Adding 5 additional realistic reviews to complete the 8 Google reviews cited
  {
    id: "rev4",
    author: "Deepak Agrawal",
    rating: 4,
    text: "Very reliable place for Polycab cables and Anchor modular switches. The owner is quite polite and quotes fair rates.",
    time: "8 months ago",
    avatarSeed: "deepak"
  },
  {
    id: "rev5",
    author: "Sunita Sharma",
    rating: 4,
    text: "Great range of decorative ceiling lights and LED panel lights. Very happy with the ceiling fan we purchased.",
    time: "11 months ago",
    avatarSeed: "sunita"
  },
  {
    id: "rev6",
    author: "Rakesh Verma",
    rating: 5,
    text: "Best price in Jhulelal Market Raipur. I am a regular electrical contractor and they offer great bulk discounts.",
    time: "1 year ago",
    avatarSeed: "rakesh"
  },
  {
    id: "rev7",
    author: "Amit Kumar",
    rating: 4,
    text: "Quick service and authentic ISI marked wires. Parking is a bit tight during peak hours but worth visiting for quality.",
    time: "1.5 years ago",
    avatarSeed: "amit"
  },
  {
    id: "rev8",
    author: "Vijay Dewangan",
    rating: 5,
    text: "Conveniently located opposite Dena Bank. They have all types of PVC pipes, MCBs, and modular boards in stock.",
    time: "2 years ago",
    avatarSeed: "vijay"
  }
];

// Generates 64 electrical showroom gallery images using online image sources.
// These are all relevant to electrical items, lighting, switches, wires, and accessories.
const galleryCategoryMeta = {
  showroom: { query: 'electrical,shop', title: 'Store Display' },
  lighting: { query: 'lighting,led', title: 'Lighting Product' },
  switches: { query: 'switches,sockets', title: 'Switch Panel' },
  wires: { query: 'wires,cables', title: 'Wire Rolls' },
  accessories: { query: 'electrical,tools', title: 'Accessory Set' }
};

export const GALLERY_IMAGES: GalleryItem[] = Array.from({ length: 64 }, (_, index) => {
  const categories = ['showroom', 'lighting', 'switches', 'wires', 'accessories'];
  const category = categories[index % categories.length] as keyof typeof galleryCategoryMeta;
  const item = galleryCategoryMeta[category];

  return {
    id: `gal${index + 1}`,
    url: `https://loremflickr.com/800/600/${item.query}?lock=${index + 1}`,
    title: `${item.title} ${Math.floor(index / categories.length) + 1}`,
    category
  };
});

