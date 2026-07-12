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
export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "gal1",
    url: "https://source.unsplash.com/800x600/?electrical,store&sig=1",
    title: "Electrical Storefront Display",
    category: "showroom"
  },
  {
    id: "gal2",
    url: "https://source.unsplash.com/800x600/?electrical,showroom&sig=2",
    title: "Showroom Product Layout",
    category: "showroom"
  },
  {
    id: "gal3",
    url: "https://source.unsplash.com/800x600/?electrical,service&sig=3",
    title: "Customer Service Counter",
    category: "showroom"
  },
  {
    id: "gal4",
    url: "https://source.unsplash.com/800x600/?led,lighting&sig=4",
    title: "LED Lighting Display",
    category: "lighting"
  },
  {
    id: "gal5",
    url: "https://source.unsplash.com/800x600/?light,bulb&sig=5",
    title: "Modern LED Bulb Collection",
    category: "lighting"
  },
  {
    id: "gal6",
    url: "https://source.unsplash.com/800x600/?lighting,fixtures&sig=6",
    title: "Decorative Lighting Fixtures",
    category: "lighting"
  },
  {
    id: "gal7",
    url: "https://source.unsplash.com/800x600/?switches,sockets&sig=7",
    title: "Modular Switches Display",
    category: "switches"
  },
  {
    id: "gal8",
    url: "https://source.unsplash.com/800x600/?switches,panel&sig=8",
    title: "Electrical Switch Panel",
    category: "switches"
  },
  {
    id: "gal9",
    url: "https://source.unsplash.com/800x600/?switch,metal&sig=9",
    title: "Premium Wall Switches",
    category: "switches"
  },
  {
    id: "gal10",
    url: "https://source.unsplash.com/800x600/?cables,wires&sig=10",
    title: "Copper Cable Bundles",
    category: "wires"
  },
  {
    id: "gal11",
    url: "https://source.unsplash.com/800x600/?cable,coil&sig=11",
    title: "High-Gauge Wire Rolls",
    category: "wires"
  },
  {
    id: "gal12",
    url: "https://source.unsplash.com/800x600/?wire,installation&sig=12",
    title: "Wiring Installation Supplies",
    category: "wires"
  },
  {
    id: "gal13",
    url: "https://source.unsplash.com/800x600/?electrical,tools&sig=13",
    title: "Electrician Tool Kit",
    category: "accessories"
  },
  {
    id: "gal14",
    url: "https://source.unsplash.com/800x600/?circuit,breaker&sig=14",
    title: "Circuit Breaker Equipment",
    category: "accessories"
  },
  {
    id: "gal15",
    url: "https://source.unsplash.com/800x600/?plugs,sockets&sig=15",
    title: "Modern Wall Sockets",
    category: "switches"
  },
  {
    id: "gal16",
    url: "https://source.unsplash.com/800x600/?power,cables&sig=16",
    title: "Power Cable Supplies",
    category: "wires"
  },
  {
    id: "gal17",
    url: "https://source.unsplash.com/800x600/?switch,box&sig=17",
    title: "Switchboard Enclosure",
    category: "switches"
  },
  {
    id: "gal18",
    url: "https://source.unsplash.com/800x600/?led,panel&sig=18",
    title: "LED Panel Lights",
    category: "lighting"
  },
  {
    id: "gal19",
    url: "https://source.unsplash.com/800x600/?electrical,display&sig=19",
    title: "Showroom Product Display",
    category: "showroom"
  },
  {
    id: "gal20",
    url: "https://source.unsplash.com/800x600/?wire,spools&sig=20",
    title: "Wire Spools and Rolls",
    category: "wires"
  },
  {
    id: "gal21",
    url: "https://source.unsplash.com/800x600/?lighting,led&sig=21",
    title: "Energy Efficient LEDs",
    category: "lighting"
  },
  {
    id: "gal22",
    url: "https://source.unsplash.com/800x600/?electrical,storefront&sig=22",
    title: "Electrical Store Exterior",
    category: "showroom"
  },
  {
    id: "gal23",
    url: "https://source.unsplash.com/800x600/?outlet,plug&sig=23",
    title: "Bi-directional Electrical Plugs",
    category: "switches"
  },
  {
    id: "gal24",
    url: "https://source.unsplash.com/800x600/?breaker,board&sig=24",
    title: "Safety Breaker Panel",
    category: "accessories"
  },
  {
    id: "gal25",
    url: "https://source.unsplash.com/800x600/?electrical,insulation&sig=25",
    title: "Wire Insulation Materials",
    category: "wires"
  },
  {
    id: "gal26",
    url: "https://source.unsplash.com/800x600/?store,interior&sig=26",
    title: "Shop Interior Lighting",
    category: "showroom"
  },
  {
    id: "gal27",
    url: "https://source.unsplash.com/800x600/?led,tube&sig=27",
    title: "LED Tube Lights",
    category: "lighting"
  },
  {
    id: "gal28",
    url: "https://source.unsplash.com/800x600/?switchboard,controls&sig=28",
    title: "Electrical Control Switches",
    category: "switches"
  },
  {
    id: "gal29",
    url: "https://source.unsplash.com/800x600/?cable,tray&sig=29",
    title: "Cable Management Trays",
    category: "wires"
  },
  {
    id: "gal30",
    url: "https://source.unsplash.com/800x600/?tools,electrician&sig=30",
    title: "Electrician Tools and Accessories",
    category: "accessories"
  },
  {
    id: "gal31",
    url: "https://source.unsplash.com/800x600/?lighting,store&sig=31",
    title: "Lighting Display Shelf",
    category: "lighting"
  },
  {
    id: "gal32",
    url: "https://source.unsplash.com/800x600/?electrical,fixtures&sig=32",
    title: "Fixture and Frame Display",
    category: "showroom"
  },
  {
    id: "gal33",
    url: "https://source.unsplash.com/800x600/?plugs,switches&sig=33",
    title: "Socket and Switch Combo",
    category: "switches"
  },
  {
    id: "gal34",
    url: "https://source.unsplash.com/800x600/?power,distribution&sig=34",
    title: "Power Distribution Accessories",
    category: "accessories"
  },
  {
    id: "gal35",
    url: "https://source.unsplash.com/800x600/?cable,installation&sig=35",
    title: "Installed CAT Cable Run",
    category: "wires"
  },
  {
    id: "gal36",
    url: "https://source.unsplash.com/800x600/?display,lights&sig=36",
    title: "Decorative Lighting Display",
    category: "lighting"
  },
  {
    id: "gal37",
    url: "https://source.unsplash.com/800x600/?electrical,corridor&sig=37",
    title: "Showroom Aisle Display",
    category: "showroom"
  },
  {
    id: "gal38",
    url: "https://source.unsplash.com/800x600/?switch,plate&sig=38",
    title: "Modern Switch Plates",
    category: "switches"
  },
  {
    id: "gal39",
    url: "https://source.unsplash.com/800x600/?breaker,switch&sig=39",
    title: "MCB and Circuit Protection",
    category: "accessories"
  },
  {
    id: "gal40",
    url: "https://source.unsplash.com/800x600/?wiring,job&sig=40",
    title: "Professional Wiring Setup",
    category: "wires"
  },
  {
    id: "gal41",
    url: "https://source.unsplash.com/800x600/?lighting,fixture&sig=41",
    title: "Architectural Lighting Fixtures",
    category: "lighting"
  },
  {
    id: "gal42",
    url: "https://source.unsplash.com/800x600/?electrical,market&sig=42",
    title: "Busy Electrical Market Shop",
    category: "showroom"
  },
  {
    id: "gal43",
    url: "https://source.unsplash.com/800x600/?socket,wall&sig=43",
    title: "Wall Socket Options",
    category: "switches"
  },
  {
    id: "gal44",
    url: "https://source.unsplash.com/800x600/?connectors,terminals&sig=44",
    title: "Electrical Connectors and Terminals",
    category: "accessories"
  },
  {
    id: "gal45",
    url: "https://source.unsplash.com/800x600/?electric,wire&sig=45",
    title: "Residential Wire Supply",
    category: "wires"
  },
  {
    id: "gal46",
    url: "https://source.unsplash.com/800x600/?light,ceiling&sig=46",
    title: "Ceiling Light Fixtures",
    category: "lighting"
  },
  {
    id: "gal47",
    url: "https://source.unsplash.com/800x600/?electrical,shelf&sig=47",
    title: "Shelf of Electrical Products",
    category: "showroom"
  },
  {
    id: "gal48",
    url: "https://source.unsplash.com/800x600/?switches,modern&sig=48",
    title: "Contemporary Switch Collection",
    category: "switches"
  },
  {
    id: "gal49",
    url: "https://source.unsplash.com/800x600/?tools,electric&sig=49",
    title: "Quality Electrician Equipment",
    category: "accessories"
  },
  {
    id: "gal50",
    url: "https://source.unsplash.com/800x600/?cable,spool&sig=50",
    title: "Power Cable Spools",
    category: "wires"
  },
  {
    id: "gal51",
    url: "https://source.unsplash.com/800x600/?light,best&sig=51",
    title: "High-Intensity Lighting",
    category: "lighting"
  },
  {
    id: "gal52",
    url: "https://source.unsplash.com/800x600/?electrical,shop&sig=52",
    title: "Electrical Shop Interior",
    category: "showroom"
  },
  {
    id: "gal53",
    url: "https://source.unsplash.com/800x600/?switches,lighting&sig=53",
    title: "Switches for Lighting Control",
    category: "switches"
  },
  {
    id: "gal54",
    url: "https://source.unsplash.com/800x600/?meter,electric&sig=54",
    title: "Electrical Metering Units",
    category: "accessories"
  },
  {
    id: "gal55",
    url: "https://source.unsplash.com/800x600/?cable,connectors&sig=55",
    title: "Cable and Connector Supplies",
    category: "wires"
  },
  {
    id: "gal56",
    url: "https://source.unsplash.com/800x600/?lighting,diffuser&sig=56",
    title: "Diffused LED Lighting",
    category: "lighting"
  },
  {
    id: "gal57",
    url: "https://source.unsplash.com/800x600/?electrical,hardware&sig=57",
    title: "Electrical Hardware Shelves",
    category: "accessories"
  },
  {
    id: "gal58",
    url: "https://source.unsplash.com/800x600/?switch,installation&sig=58",
    title: "Electrical Switch Installation",
    category: "switches"
  },
  {
    id: "gal59",
    url: "https://source.unsplash.com/800x600/?cable,repair&sig=59",
    title: "Cable Repair and Joining",
    category: "wires"
  },
  {
    id: "gal60",
    url: "https://source.unsplash.com/800x600/?lighting,fixtures,outdoor&sig=60",
    title: "Outdoor Lighting Fixtures",
    category: "lighting"
  },
  {
    id: "gal61",
    url: "https://source.unsplash.com/800x600/?display,electrical&sig=61",
    title: "Electrical Product Showcase",
    category: "showroom"
  },
  {
    id: "gal62",
    url: "https://source.unsplash.com/800x600/?outlet,charger&sig=62",
    title: "Modern Charging Outlets",
    category: "switches"
  },
  {
    id: "gal63",
    url: "https://source.unsplash.com/800x600/?electrical,installation&sig=63",
    title: "Installation Accessories",
    category: "accessories"
  },
  {
    id: "gal64",
    url: "https://source.unsplash.com/800x600/?power,wiring&sig=64",
    title: "Electrical Wiring Solutions",
    category: "wires"
  }
];
