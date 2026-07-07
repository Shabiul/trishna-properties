export interface Property {
  id: string;
  title: string;
  location: string;
  area_name: string;
  price: number;
  type: 'rent' | 'sale';
  bedrooms: number;
  bathrooms: number;
  area: number;
  furnished: 'fully' | 'semi' | 'unfurnished';
  deposit: string;
  availability: string;
  floor?: string;
  facing?: string;
  amenities: string[];
  highlights: string[];
  images: string[];
  description: string;
  contactEmail: string;
}

// Helper to generate image paths from public directory
function generateImages(folder: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `/properties/${folder}/${folder}-${num}.jpeg`;
  });
}

export const properties: Property[] = [
  // ──────────────────────────────────────────────
  // MURGESHPALYA PROPERTIES
  // ──────────────────────────────────────────────
  {
    id: '1',
    title: 'Luxury 3BHK in Gated Community',
    location: 'Murgeshpalya, Bangalore',
    area_name: 'Murgeshpalya',
    price: 65000,
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    area: 1650,
    furnished: 'fully',
    deposit: '2 Lakhs',
    availability: 'Immediate',
    floor: '5th Floor',
    facing: 'East',
    amenities: [
      'Gym', 'Swimming Pool', '24/7 Security', 'Covered Parking',
      'Power Backup', 'Lift', 'CCTV', 'Children\'s Play Area',
      'Clubhouse', 'Intercom'
    ],
    highlights: [
      'Premium gated community',
      'Fully furnished with modern interiors',
      'Walking distance to IT parks',
      'Immediate occupancy available'
    ],
    images: generateImages('murgeshpalya-65k', 8),
    description: 'Stunning fully furnished 3BHK apartment in a premium gated community in Murgeshpalya. Features modern interiors, spacious rooms with ample natural light, and top-tier amenities. Walking distance to major IT parks and well-connected to Old Airport Road and HAL areas.',
    contactEmail: 'trishnaproperties78@gmail.com'
  },
  {
    id: '2',
    title: 'Furnished 2BHK in Gated Society',
    location: 'Murgeshpalya, Bangalore',
    area_name: 'Murgeshpalya',
    price: 60000,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1350,
    furnished: 'fully',
    deposit: '2 Lakhs',
    availability: 'Immediate',
    floor: '3rd Floor',
    facing: 'North-East',
    amenities: [
      'Gated Community', 'Power Backup', 'Lift', 'Parking',
      'Security', 'Maintenance Included', 'Water Supply'
    ],
    highlights: [
      'Gated community with 24/7 security',
      'Rent includes maintenance charges',
      'Fully furnished and move-in ready',
      'Excellent cross-ventilation'
    ],
    images: generateImages('murgeshpalya-3bhk-60k', 8),
    description: 'Beautiful fully furnished 2BHK in a well-maintained gated community. Rent of ₹60,000 includes maintenance. The apartment features modern furniture, modular kitchen, and is move-in ready. Located in the heart of Murgeshpalya with easy access to all conveniences.',
    contactEmail: 'trishnaproperties78@gmail.com'
  },
  {
    id: '3',
    title: 'Spacious 2BHK — Prime Location',
    location: 'Murgeshpalya, Bangalore',
    area_name: 'Murgeshpalya',
    price: 50000,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    furnished: 'semi',
    deposit: '2 Lakhs',
    availability: 'Immediate',
    floor: '4th Floor',
    facing: 'South',
    amenities: [
      'Lift', 'Parking', 'Power Backup', 'Water Supply',
      'Security', 'Maintenance Included'
    ],
    highlights: [
      'Maintenance included in rent',
      'Semi-furnished with wardrobes',
      'Close to metro station',
      '2 Lakhs refundable deposit'
    ],
    images: generateImages('murgeshpalya-50k-1', 8),
    description: 'Well-maintained spacious 2BHK apartment with semi-furnished interiors. The rent of ₹50,000 includes maintenance charges with a deposit of 2 Lakhs. Located in a prime area of Murgeshpalya with excellent connectivity to IT corridors.',
    contactEmail: 'trishnaproperties78@gmail.com'
  },
  {
    id: '4',
    title: 'Modern 2BHK — Well Ventilated',
    location: 'Murgeshpalya, Bangalore',
    area_name: 'Murgeshpalya',
    price: 50000,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1180,
    furnished: 'semi',
    deposit: '2 Lakhs',
    availability: 'Immediate',
    floor: '6th Floor',
    facing: 'West',
    amenities: [
      'Lift', 'Covered Parking', 'Power Backup', 'Water Supply',
      'Security', 'Intercom', 'Gas Pipeline'
    ],
    highlights: [
      'High floor with great views',
      'Well ventilated and airy',
      'Covered car parking',
      'Piped gas connection'
    ],
    images: generateImages('murgeshpalya-50k-2', 8),
    description: 'Bright and well-ventilated 2BHK on a high floor with excellent views. Features covered parking, piped gas, and round-the-clock security. Ideal for working professionals and small families. Located close to shopping centers and hospitals.',
    contactEmail: 'trishnaproperties78@gmail.com'
  },
  {
    id: '5',
    title: 'Cozy 2BHK — Great Value',
    location: 'Murgeshpalya, Bangalore',
    area_name: 'Murgeshpalya',
    price: 50000,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    furnished: 'semi',
    deposit: '2 Lakhs',
    availability: 'Immediate',
    amenities: [
      'Lift', 'Parking', 'Power Backup', 'Water Supply',
      'CCTV', 'Children\'s Play Area'
    ],
    highlights: [
      'Best value in the locality',
      'Well-maintained building',
      'Kid-friendly environment',
      'Close to schools and parks'
    ],
    images: generateImages('murgeshpalya-50k-3', 8),
    description: 'Cozy and well-designed 2BHK apartment at an excellent price point. The building is well-maintained with good security and amenities. Perfect for young families with children. Close to reputed schools, parks, and daily essentials.',
    contactEmail: 'trishnaproperties78@gmail.com'
  },
  {
    id: '6',
    title: 'Budget-Friendly 2BHK with Parking',
    location: 'Murgeshpalya, Bangalore',
    area_name: 'Murgeshpalya',
    price: 46000,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1050,
    furnished: 'unfurnished',
    deposit: '1.5 Lakhs',
    availability: 'Immediate',
    amenities: [
      'Lift', 'Car Parking', 'Power Backup', 'CCTV',
      'Maintenance Included'
    ],
    highlights: [
      'Rent includes maintenance',
      'Dedicated car parking',
      'CCTV surveillance',
      'Affordable deposit of 1.5 Lakhs'
    ],
    images: generateImages('murgeshpalya-46k', 8),
    description: 'Affordable 2BHK apartment with all essential amenities included. Rent of ₹46,000 covers maintenance with a low deposit of 1.5 Lakhs. Features dedicated car parking, CCTV security, lift access, and reliable power backup.',
    contactEmail: 'trishnaproperties78@gmail.com'
  },
  {
    id: '7',
    title: 'Premium 3BHK — Family Home',
    location: 'Murgeshpalya, Bangalore',
    area_name: 'Murgeshpalya',
    price: 52000,
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    area: 1400,
    furnished: 'semi',
    deposit: '2 Lakhs',
    availability: 'Immediate',
    floor: '2nd Floor',
    amenities: [
      'Lift', 'Parking', 'Power Backup', 'Water Supply',
      'Security', 'Gym', 'Garden'
    ],
    highlights: [
      'Spacious 3BHK for families',
      'Well-maintained society',
      'Garden and gym access',
      'Prime residential area'
    ],
    images: generateImages('murgeshpalya-52k', 8),
    description: 'Spacious and well-planned 3BHK apartment perfect for families. Located in a well-maintained residential society with garden, gym, and round-the-clock security. Close to schools, hospitals, and shopping areas in Murgeshpalya.',
    contactEmail: 'trishnaproperties78@gmail.com'
  },

  // ──────────────────────────────────────────────
  // CV RAMAN NAGAR PROPERTIES
  // ──────────────────────────────────────────────
  {
    id: '8',
    title: 'Elegant 2BHK in CV Raman Nagar',
    location: 'CV Raman Nagar, Bangalore',
    area_name: 'CV Raman Nagar',
    price: 40000,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    furnished: 'semi',
    deposit: '2 Lakhs',
    availability: 'Immediate',
    floor: '3rd Floor',
    facing: 'East',
    amenities: [
      'Parking', 'Lift', 'Power Backup', 'Water Supply',
      'Security', 'CCTV'
    ],
    highlights: [
      'Peaceful neighborhood',
      'Close to DRDO and ISRO',
      'Easy metro access',
      'Well-connected to Old Airport Road'
    ],
    images: generateImages('cv-raman-nagar', 7),
    description: 'A well-maintained 2BHK flat in the peaceful locality of CV Raman Nagar. Ideal for professionals working at DRDO, ISRO, or HAL. Features good ventilation, ample parking, and easy access to metro stations and the Old Airport Road corridor.',
    contactEmail: 'trishnaproperties78@gmail.com'
  },

  // ──────────────────────────────────────────────
  // GM PALYA PROPERTIES
  // ──────────────────────────────────────────────
  {
    id: '9',
    title: 'Charming Home in GM Palya',
    location: 'GM Palya, Bangalore',
    area_name: 'GM Palya',
    price: 35000,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1000,
    furnished: 'semi',
    deposit: '1.5 Lakhs',
    availability: 'Immediate',
    amenities: [
      'Parking', 'Water Supply', 'Power Backup', 'Security'
    ],
    highlights: [
      'Quiet residential area',
      'Affordable pricing',
      'Good water supply',
      'Close to main road'
    ],
    images: generateImages('gm-palya', 7),
    description: 'Charming 2BHK home in the quiet residential pocket of GM Palya. Offers great value with an affordable rent and low deposit. Well-connected to Indiranagar and Old Airport Road. Ideal for small families and working professionals.',
    contactEmail: 'trishnaproperties78@gmail.com'
  },

  // ──────────────────────────────────────────────
  // SALE PROPERTIES — BRIGADE & KAGGADASAPURA
  // ──────────────────────────────────────────────
  {
    id: '10',
    title: 'Brigade Valencia — Premium Apartments',
    location: 'Bommasandra, Bangalore',
    area_name: 'Bommasandra',
    price: 11000000,
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 1650,
    furnished: 'unfurnished',
    deposit: 'N/A',
    availability: 'Under Construction',
    facing: 'East',
    amenities: [
      'Swimming Pool', 'Gym', 'Clubhouse', 'Children\'s Play Area',
      'Landscaped Garden', 'Power Backup', 'Lift', '24/7 Security',
      'Jogging Track', 'Indoor Games'
    ],
    highlights: [
      '24-acre township with 85% green area',
      '2, 2.5, 3 & 4 BHK configurations',
      '1145 to 2490 sqft options',
      'Brigade Group — trusted developer'
    ],
    images: generateImages('brigade-valencia', 7),
    description: 'Brigade Valencia is a premium residential project in Bommasandra by Brigade Group. Spread across 24 acres with 85% green area, it offers a wide range of lifestyle amenities curated for recreation, wellness, and community living. Available in 2, 2.5, 3 & 4 BHK configurations from 1145 to 2490 sqft. Starting at ₹1.1 Cr.',
    contactEmail: 'trishnaproperties78@gmail.com'
  },
  {
    id: '11',
    title: 'Brigade Eternia — Modern Living',
    location: 'Yelahanka New Town, Bangalore',
    area_name: 'Yelahanka',
    price: 10000000,
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 1450,
    furnished: 'unfurnished',
    deposit: 'N/A',
    availability: 'Under Construction',
    amenities: [
      'Swimming Pool', 'Gym', 'Clubhouse', 'Landscaped Garden',
      'Power Backup', 'Lift', '24/7 Security', 'Wellness Center',
      'Multipurpose Hall', 'Sports Facilities'
    ],
    highlights: [
      'Comprehensive lifestyle amenities',
      '1, 3 & 4 BHK configurations',
      '700 to 2926 sqft options',
      'Well-connected to Yelahanka'
    ],
    images: generateImages('brigade-eternia', 6),
    description: 'Brigade Eternia is a thoughtfully designed residential project in Yelahanka New Town. It offers a comprehensive range of lifestyle, wellness, and recreational amenities for all age groups. Available in 1, 3 & 4 BHK apartment configurations ranging from 700 to 2926 sqft. Starting at ₹1.0 Cr.',
    contactEmail: 'trishnaproperties78@gmail.com'
  },
  {
    id: '12',
    title: 'Brigade Insignia — Ultra Luxury',
    location: 'Devinagar, Bangalore',
    area_name: 'Devinagar',
    price: 32000000,
    type: 'sale',
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    furnished: 'semi',
    deposit: 'N/A',
    availability: 'Ready to Move',
    amenities: [
      'Grand Clubhouse', 'Rooftop Leisure', 'Swimming Pool', 'Gym',
      'Landscaped Garden', '24/7 Security', 'Concierge', 'Lift',
      'Covered Parking', 'Power Backup', 'Sports Court'
    ],
    highlights: [
      '5.88 acres with 6 towers & 60% green area',
      '3, 4 & 5 BHK + Penthouse options',
      '2145 to 4200 sqft configurations',
      'Grand clubhouse & rooftop leisure'
    ],
    images: generateImages('brigade-insignia', 4),
    description: 'Brigade Insignia is an ultra-luxury residential development in Maruti Nagar, Devinagar. Spread across 5.88 acres with 6 towers and 60% green area, it features premium lifestyle amenities including a grand clubhouse, rooftop leisure spaces, and world-class recreational facilities. Available in 3, 4, 5 BHK & Penthouse configurations from 2145 to 4200 sqft. Starting at ₹3.2 Cr.',
    contactEmail: 'trishnaproperties78@gmail.com'
  },
  {
    id: '13',
    title: 'Independent House — Kaggadasapura',
    location: 'Kaggadasapura, Bangalore',
    area_name: 'Kaggadasapura',
    price: 14000000,
    type: 'sale',
    bedrooms: 2,
    bathrooms: 2,
    area: 760,
    furnished: 'unfurnished',
    deposit: 'N/A',
    availability: 'Ready to Move',
    amenities: [
      'Independent House', 'Water Supply', 'Power Backup',
      'Parking Space'
    ],
    highlights: [
      '760 sqft independent house',
      'Ready to move in',
      'Prime Kaggadasapura location',
      'Excellent connectivity to Old Airport Road'
    ],
    images: generateImages('kaggadasapura', 2),
    description: 'Independent house for sale in Kaggadasapura, one of East Bangalore\'s well-connected residential areas. This 760 sqft property offers excellent connectivity to Old Airport Road and IT corridors. Ready to move in at ₹1.4 Cr. Ideal for end-users and investors looking for a compact property in a prime location.',
    contactEmail: 'trishnaproperties78@gmail.com'
  }
];

export const locations = [
  { name: 'Murgeshpalya', count: 8, image: '/properties/murgeshpalya-65k/murgeshpalya-65k-01.jpeg' },
  { name: 'CV Raman Nagar', count: 1, image: '/properties/cv-raman-nagar/cv-raman-nagar-01.jpeg' },
  { name: 'GM Palya', count: 1, image: '/properties/gm-palya/gm-palya-01.jpeg' },
  { name: 'Bommasandra', count: 1, image: '/properties/brigade-valencia/brigade-valencia-01.jpeg' },
  { name: 'Yelahanka', count: 1, image: '/properties/brigade-eternia/brigade-eternia-01.jpeg' },
  { name: 'Kaggadasapura', count: 1, image: '/properties/kaggadasapura/kaggadasapura-01.jpeg' },
];

