import { LucideIcon, Home, Building2, Factory, Briefcase, FileText, Package } from 'lucide-react'
import { TechSpecsData } from '@/components/products/TechSpecs'
 

 
export interface ProductData {
  name:            string
  category:        string
  icon:            LucideIcon
  description:     string
  longDescription: string
  gallery:         string[]
  variants: {
    variantName:     string
    variantImage:    string
    variantInterior: string
  }[]
  advantages: {
    title:       string
    description: string
    icon:        string
  }[]
  faq: {
    question: string
    answer:   string
  }[]
  trustBand: {
    citiesCovered:        number
    completedProjects:    number
    customerSatisfaction: number
  }
  /** NEW: per-tab technical specification data */
  techSpecs: TechSpecsData
}

export const productsData: Record<string, ProductData> = {
  'A-Frame Cabin': {
    name: 'A-Frame Cabin',
    category: 'Wooden Series',
    icon: Home,
    description: 'Luxurious A-frame prefab homes combining iconic triangular architecture with modern modular innovation',
    longDescription: `Introducing the A-Frame Houses – a masterpiece of modern modular living designed to blend elegance, functionality, and innovation. Featuring the iconic triangular A-frame architecture, these luxurious prefab homes maximize natural light, ventilation, and energy efficiency while delivering a timeless contemporary aesthetic.

    Available in versatile 1, 2, 3, and 4 BHK configurations, our A-frame cabins are thoughtfully designed to suit families and lifestyles of all sizes. Crafted with advanced steel framing and our proprietary modular construction system, these homes ensure superior structural strength, durability, and faster installation without compromising on style or comfort.

    The minimalistic design philosophy not only creates visually stunning living spaces but also significantly reduces construction costs, making these homes a budget-friendly yet premium housing solution. Spacious interiors, modern finishes, and seamless integration with natural surroundings make every cabin a perfect retreat for vacation living, guest accommodations, or permanent residences.

    Redefine modern living with Texo Prefab World’s signature sophistication, where innovative engineering meets elegant architecture to create homes that are sustainable, stylish, and built for the future.`,
    gallery: [
      '/products/woodenseries/aframe/a-frame-hero.png',
      '/products/woodenseries/aframe/a-frame-hero-img.png',
      '/products/woodenseries/aframe/a-frames-2-ai.jpg',
      '/products/woodenseries/aframe/a-fram-ai-gen.jpg',
    ],
    advantages: [
      {
        icon: 'Triangle',
        title: 'Striking Design',
        description: 'The iconic A-frame structure combines bold angles and symmetry, creating a timeless silhouette. The design not only makes a statement of sophistication but also maximizes space efficiency, blending seamlessly into natural or urban landscapes.'
      },
      {
        icon: 'ShieldCheck',
        title: 'Uncompromised Durability',
        description: 'Constructed with premium-grade materials, the A-Frame Cabin is engineered to withstand extreme weather conditions, ensuring longevity and resilience. From rainy mountains to coastal retreats, its durability is second to none.'
      },
      {
        icon: 'Leaf',
        title: 'Sustainable Luxury',
        description: 'Every cabin is built with sustainability in mind, featuring eco-friendly materials and energy-efficient solutions. The smaller footprint, efficient energy use, and compatibility with green technologies make A-Frame Cabin a top choice for environmentally conscious homeowners.'
      },
      {
        icon: 'Palette',
        title: 'Customizable Interiors',
        description: 'Tailored to suit your personal taste, the interiors are designed with precision, offering a range of high-end finishes, textures, and fixtures. From minimalism to rustic charm, every detail reflects sophistication and individuality.'
      },
      {
        icon: 'Factory',
        title: 'Quick Assembly, Minimal Disruption',
        description: 'Prefabrication is completed entirely in our advanced factory, ensuring precision and quality. The cabins are then transported to your site for a seamless plug-and-play setup, minimizing on-site work and environmental impact.'
      },
      {
        icon: 'Mountain',
        title: "Nature's Panorama",
        description: 'Expansive windows elevate the A-Frame Cabin, creating a powerful connection between indoor comfort and outdoor tranquility. Wake up to breathtaking views, soak in the abundant natural light, and experience an unparalleled living environment in perfect harmony with your surroundings.'
      }
    ],
    variants: [
      {
        variantName: 'Studio',
        variantImage: '/products/woodenseries/aframe/a-frame-hero-img.png',
        variantInterior: '/products/woodenseries/aframe/a-frame-hero.png'
      },
      {
        variantName: '1-BHK',
        variantImage: '/products/woodenseries/aframe/a-frames-2-ai.jpg',
        variantInterior: '/products/woodenseries/aframe/a-frame-hero.png'
      },
      {
        variantName: '2-BHK',
        variantImage: '/products/woodenseries/aframe/a-fram-ai-gen.jpg',
        variantInterior: '/products/woodenseries/aframe/a-frame-hero.png'
      },
      {
        variantName: '3-BHK',
        variantImage: '/products/woodenseries/aframe/a-frame-hero.png',
        variantInterior: '/products/woodenseries/aframe/a-frame-hero-img.png'
      }
    ],
    faq: [
  {
    question: 'Can I customize my A-Frame Cabin?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create an A-Frame Cabin that aligns perfectly with your vision and purpose.'
  },
  {
    question: 'What amenities can I expect in an A-Frame Cabin?',
    answer: 'At Texo Prefab World, our A-Frame Cabins come equipped with a range of modern amenities such as electrical fittings, plumbing, insulation, air conditioning, and customizable interiors. Whether it’s a cozy living space or a functional workspace, we ensure your cabin meets your unique needs.'
  },
  {
    question: 'How do I maintain an A-Frame Cabin?',
    answer: 'A-Frame Cabins from Texo Prefab World are built with low-maintenance, high-quality materials. Regular upkeep includes exterior cleaning, leak inspections, and periodic checks on electrical and plumbing systems. Our cabins are designed for durability, making maintenance hassle-free.'
  },
  {
    question: 'What is A-Frame Cabin special about and is it strong?',
    answer: 'An A-Frame Cabin stands out for its unique triangular shape, offering both aesthetic appeal and practical benefits. Its sloped roof efficiently sheds rain, snow, and debris, making it ideal for various climates. The design maximizes vertical space while maintaining a cozy interior.\n\nAt Texo Prefab World, we ensure that every A-Frame Cabin structure is built with precision and high-quality materials to combine beauty with functionality.\n\nIn terms of strength, A-frame structures are incredibly durable. Their triangular geometry provides inherent stability and evenly distributes weight, making them resistant to external forces like wind and snow loads. With Texo Prefab World’s expert engineering, our A-frames are not only visually striking but also exceptionally strong and long-lasting.'
  },
  {
    question: 'Are A-Frame Cabins eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our A-Frame Cabins are designed with eco-friendly materials and energy-efficient features. Options like solar panels, rainwater harvesting systems, and green insulation make them a sustainable choice for modern living.'
  },
  {
    question: 'What is the typical cost of an A-Frame Cabin?',
    answer: 'Texo Prefab World offers A-Frame Cabins at competitive prices. The cost depends on factors like size, features, and customization. Whether you’re looking for a budget-friendly model or a luxury cabin, we have options to suit your needs.'
  }
],
    trustBand: {
      citiesCovered: 150,
      completedProjects: 250,
      customerSatisfaction: 98
    },
    techSpecs: {
      /* 1 ─ Architecture */
      architecture: {
        images: [
          '/products-hero.png',
          '/siteoffice-2.webp',
        ],
        specs: [
          { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
          { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
          { label: 'Module width',     value: '3.6 m standard bay' },
          { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
          { label: 'Total floors',     value: 'Up to G+2 without podium' },
          { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
          { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
          { label: 'Design life',      value: '50 years minimum' },
        ],
      },
  
      /* 2 ─ Exterior Wall & Roof */
      exteriorWallRoof: {
        images: [
          '/products-hero.png',
          '/siteoffice-2.webp',
          '/products-hero.png',
        ],
        specs: [
          { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
          { label: 'External finish',   value: '6 mm fibre-cement cladding' },
          { label: 'U-value (wall)',     value: '0.28 W/m²K' },
          { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
          { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
          { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
          { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
          { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
        ],
      },
  
      /* 3 ─ Interior Wall & Ceiling */
      interiorWallCeiling: {
        images: [
          '/siteoffice-2.webp',
          '/products-hero.png',
        ],
        specs: [
          { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
          { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
          { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
          { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
          { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
          { label: 'Ceiling height',    value: '2.6 m finished' },
          { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
          { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
        ],
      },
  
      /* 4 ─ Interior & Exterior Floor */
      interiorExteriorFloor: {
        images: [
          '/siteoffice-2.webp',
          '/products-hero.png',
        ],
        specs: [
          { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
          { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
          { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
          { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
          { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
          { label: 'Screed',           value: '40 mm self-levelling compound' },
          { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
          { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
        ],
      },
  
      /* 5 ─ Doors, Sanitary & Electrical */
      doorsSanitaryElectrical: {
        images: [
          '/siteoffice-2.webp',
          '/products-hero.png',
          '/siteoffice-2.webp',
        ],
        specs: [
          { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
          { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
          { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
          { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
          { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
          { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
          { label: 'DB board',          value: '12-way MCB distribution board' },
          { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
        ],
      },
  
      /* 6 ─ Transit, Payment & Warranty */
      transitPaymentWarranty: {
        images: [
          '/siteoffice-2.webp',
          '/products-hero.png',
        ],
        specs: [
          { label: 'Lead time',         value: '30–45 days from booking confirmation' },
          { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
          { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
          { label: 'Erection time',     value: '15–20 working days on site' },
          { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
          { label: 'Structure warranty', value: '10 years (frame & panel)' },
          { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
          { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
        ],
      },
  
      /* 7 ─ 2D Layout */
      layout2D: {
        images: [
          '/siteoffice-2.webp',
          '/products-hero.png',
          '/siteoffice-2.webp',
          '/products-hero.png',
        ],
        specs: [
          { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
          { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
          { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
          { label: 'Living room',      value: '4.5 × 3.9 m' },
          { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
          { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
          { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
          { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
        ],
      },
  
      /* 8 ─ Gallery */
      gallery: {
        images: [
          '/siteoffice-2.webp',
          '/products-hero.png',
          '/siteoffice-2.webp',
          '/products-hero.png',
          '/siteoffice-2.webp',
          '/products-hero.png',
        ],
        specs: [],   // no spec rows needed for the gallery tab
      },
    },
  },
  'Arc Pod': {
      name: 'Arc Pod',
      category: 'Wooden Series',
      icon: Home,
      description: 'Curved wooden pods offering unique living spaces with panoramic views',
            longDescription: `The Arc Pod represents innovation in curved wooden architecture, creating living spaces that flow seamlessly with their surroundings. These pods feature elegant curved timber frames that maximize space utilization while providing stunning panoramic views.

        Each Arc Pod is engineered for optimal structural performance, with the curved design distributing loads efficiently and creating a sense of openness. The interior spaces are designed to maximize comfort and functionality, making them ideal for various applications from luxury accommodations to creative workspaces.

        Our Arc Pods are crafted using advanced CNC technology combined with traditional woodworking skills, ensuring precision and quality in every curve and joint.
      `,
      gallery: [
        '/products/woodenseries/arcpod/arc-pod-main.jpg',
        '/products/woodenseries/arcpod/arc-2.jpg',
        '/products/woodenseries/arcpod/arc-int.jpg'
      ],
      advantages: [
        {
          icon: 'Landmark',
          title: 'Curvy Elegance',
          description: 'The Arc Pod’s sleek, arched design combines contemporary aesthetics with functional efficiency, adding sophistication to urban spaces. Its bold curves make it a versatile masterpiece for both modern cityscapes and quiet retreats.'
        },
        {
          icon: 'ShieldCheck',
          title: 'Enduring Durability',
          description: 'The Arc Pod is built for durability, featuring premium materials like galvanized steel, tempered glass, and eco-friendly wood. This robust construction ensures long-lasting reliability, making it a resilient sanctuary against harsh weather and everyday wear.'
        },
        {
          icon: 'Zap',
          title: 'Energy Optimization',
          description: 'Arc Pods feature extra amenities like double-glazed windows and advanced smart ventilation systems, ensuring superior energy efficiency. These innovations maintain a comfortable indoor climate year-round while minimizing energy consumption, making every Arc Pod a model of sustainable living'
        },
        {
          icon: 'LayoutPanelTop',
          title: 'Future-Proof Spaces',
          description: 'With a modular design, the Arc Pod adapts to your evolving needs. Its flexible structure allows for effortless customization, ensuring that your living or workspace remains relevant and timeless, no matter how future demands change.'
        },
        {
          icon: 'Hammer',
          title: 'Artisan Craftsmanship',
          description: 'Every Arc Pod is a testament to exceptional craftsmanship, with textures and finishes designed to reflect artisanal quality. From hand-selected materials to meticulously crafted details, each element adds a unique touch, elevating the overall aesthetic with a blend of elegance and individuality.'
        },
        {
          icon: 'Leaf',
          title: 'Eco Friendly',
          description: 'The Arc Pod is crafted with eco-certified wood, non-toxic paints, and energy-efficient designs, ensuring a minimal environmental impact. This sustainable approach not only protects the planet but also provides a healthy, toxin-free living environment for you and your loved ones.'
        }
      ],
      variants: [
        {
          variantName: 'Studio',
          variantImage: '/products/woodenseries/arcpod/arc-pod-main.jpg',
          variantInterior: '/products/woodenseries/arcpod/arc-pod-main.jpg'
        },
        {
          variantName: '1-BHK',
          variantImage: '/products/woodenseries/arcpod/arc-pod-main.jpg',
          variantInterior: '/products/woodenseries/arcpod/arc-pod-main.jpg'
        },
        {
          variantName: '2-BHK',
          variantImage: '/products/woodenseries/arcpod/arc-pod-main.jpg',
          variantInterior: '/products/woodenseries/arcpod/arc-pod-main.jpg'
        },
        {
          variantName: '3-BHK',
          variantImage: '/products/woodenseries/arcpod/arc-pod-main.jpg',
          variantInterior: '/products/woodenseries/arcpod/arc-pod-main.jpg'
        }
      ],
      faq: [
  {
    question: 'Can I customize my Arc Pod?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create an Arc Pod that aligns perfectly with your vision and purpose.'
  },
  {
    question: 'What amenities can I expect in an Arc Pod?',
    answer: 'At Texo Prefab World, our Arc Pod come equipped with a range of modern amenities such as electrical fittings, plumbing, insulation, air conditioning, and customizable interiors. Whether it’s a cozy living space or a functional workspace, we ensure your pod meets your unique needs.'
  },
  {
    question: 'How do I maintain an Arc Pod?',
    answer: 'Arc Pod from Texo Prefab World are built with low-maintenance, high-quality materials. Regular upkeep includes exterior cleaning, leak inspections, and periodic checks on electrical and plumbing systems. Our cabins are designed for durability, making maintenance hassle-free.'
  },
  {
    question: 'What is Arc Pod special about and is it strong?',
    answer: 'An Arc Pod stands out with its sleek, curved design, offering both aesthetic appeal and practical advantages. Its arched structure efficiently withstands external elements like wind and snow, making it suitable for various climates. The design optimizes interior space while maintaining a modern and cozy feel.\n\nAt Texo Prefab World, we ensure that every Arc Pod is built with precision and high-quality materials, seamlessly blending beauty with functionality.\n\nIn terms of strength, Arc Pods are incredibly durable. Their curved geometry provides inherent stability and evenly distributes stress, making them highly resistant to external forces. With Texo Prefab World’s expert engineering, our Arc Pods are not only visually captivating but also exceptionally strong and built to last.'
  },
  {
    question: 'Are Arc Pod eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Arc Pod are designed with eco-friendly materials and energy-efficient features. Options like solar panels, rainwater harvesting systems, and green insulation make them a sustainable choice for modern living.'
  },
  {
    question: 'What is the typical cost of an Arc Pod?',
    answer: 'Texo Prefab World offers Arc Pod at competitive prices. The cost depends on factors like size, features, and customization. Whether you’re looking for a budget-friendly model or a luxury cabin, we have options to suit your needs.'
  }
],
      trustBand: {
        citiesCovered: 120,
        completedProjects: 180,
        customerSatisfaction: 96
      },
      techSpecs: {
      /* 1 ─ Architecture */
      architecture: {
        images: [
          '/products-hero.png',
          '/siteoffice-2.webp',
        ],
        specs: [
          { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
          { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
          { label: 'Module width',     value: '3.6 m standard bay' },
          { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
          { label: 'Total floors',     value: 'Up to G+2 without podium' },
          { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
          { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
          { label: 'Design life',      value: '50 years minimum' },
        ],
      },
  
      /* 2 ─ Exterior Wall & Roof */
      exteriorWallRoof: {
        images: [
          '/products-hero.png',
          '/siteoffice-2.webp',
          '/products-hero.png',
        ],
        specs: [
          { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
          { label: 'External finish',   value: '6 mm fibre-cement cladding' },
          { label: 'U-value (wall)',     value: '0.28 W/m²K' },
          { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
          { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
          { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
          { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
          { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
        ],
      },
  
      /* 3 ─ Interior Wall & Ceiling */
      interiorWallCeiling: {
        images: [
          '/siteoffice-2.webp',
          '/products-hero.png',
        ],
        specs: [
          { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
          { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
          { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
          { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
          { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
          { label: 'Ceiling height',    value: '2.6 m finished' },
          { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
          { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
        ],
      },
  
      /* 4 ─ Interior & Exterior Floor */
      interiorExteriorFloor: {
        images: [
          '/siteoffice-2.webp',
          '/products-hero.png',
        ],
        specs: [
          { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
          { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
          { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
          { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
          { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
          { label: 'Screed',           value: '40 mm self-levelling compound' },
          { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
          { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
        ],
      },
  
      /* 5 ─ Doors, Sanitary & Electrical */
      doorsSanitaryElectrical: {
        images: [
          '/siteoffice-2.webp',
          '/products-hero.png',
          '/siteoffice-2.webp',
        ],
        specs: [
          { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
          { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
          { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
          { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
          { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
          { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
          { label: 'DB board',          value: '12-way MCB distribution board' },
          { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
        ],
      },
  
      /* 6 ─ Transit, Payment & Warranty */
      transitPaymentWarranty: {
        images: [
          '/siteoffice-2.webp',
          '/products-hero.png',
        ],
        specs: [
          { label: 'Lead time',         value: '30–45 days from booking confirmation' },
          { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
          { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
          { label: 'Erection time',     value: '15–20 working days on site' },
          { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
          { label: 'Structure warranty', value: '10 years (frame & panel)' },
          { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
          { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
        ],
      },
  
      /* 7 ─ 2D Layout */
      layout2D: {
        images: [
          '/siteoffice-2.webp',
          '/products-hero.png',
          '/siteoffice-2.webp',
          '/products-hero.png',
        ],
        specs: [
          { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
          { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
          { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
          { label: 'Living room',      value: '4.5 × 3.9 m' },
          { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
          { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
          { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
          { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
        ],
      },
  
      /* 8 ─ Gallery */
      gallery: {
        images: [
          '/siteoffice-2.webp',
          '/products-hero.png',
          '/siteoffice-2.webp',
          '/products-hero.png',
          '/siteoffice-2.webp',
          '/products-hero.png',
        ],
        specs: [],   // no spec rows needed for the gallery tab
      },
    },
  },
  'Wooden House': {
    name: 'Wooden House',
    category: 'Wooden Series',
    icon: Home,
    description: 'Traditional wooden houses with modern amenities and sustainable construction',
    longDescription: `Our Wooden Houses capture the essence of traditional timber construction while      incorporating modern building techniques and amenities. Each house is crafted from carefully selected sustainable timber, ensuring both environmental responsibility and lasting quality.

      The design philosophy combines classic wooden architecture with contemporary living requirements, creating homes that are both beautiful and functional. From the foundation to the finishing touches, every aspect is considered to provide comfortable, healthy living spaces that stand the test of time.

      Whether you're building your dream home or creating a family retreat, our Wooden Houses offer the perfect blend of tradition and modernity.
    `,
    gallery: [
      '/products/woodenseries/wooden/wooden-house-main.jpg',
      '/products/woodenseries/wooden/wooden-2.png'
    ],
    advantages: [
  {
    icon: 'Trees',
    title: 'Natural Aesthetics',
    description: 'Every Wooden House radiates timeless beauty, with natural wood grains and textures that create a warm, inviting ambiance. These houses blend seamlessly into natural landscapes, offering a serene connection to the outdoors.'
  },
  {
    icon: 'VolumeX',
    title: 'Acoustic Comfort',
    description: 'Wood naturally absorbs sound, creating quieter, more peaceful interiors. This makes Wooden Houses ideal for relaxation, work, or family gatherings without distractions.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Uncompromised Durability',
    description: 'Treated for resistance to pests, moisture, and weathering, Texo’s Wooden Houses are engineered for exceptional durability. The structure is built with steel, with wooden claddings on the exterior, ensuring both strength and aesthetic appeal. Their solid construction ensures they stand strong for decades.'
  },
  {
    icon: 'Factory',
    title: 'Quick Assembly',
    description: 'Prefabrication is completed entirely in our advanced factory, ensuring precision and quality. The cabins are then transported to your site for a seamless plug-and-play setup, minimizing on-site work and environmental impact.'
  },
  {
    icon: 'HeartPulse',
    title: 'Healthy Living Spaces',
    description: 'Wood naturally regulates indoor humidity, creating a healthier atmosphere. Combined with non-toxic paints and treatments, Texo ensures that your Wooden House promotes well-being for your family.'
  },
  {
    icon: 'Palette',
    title: 'Customizable Interiors',
    description: 'Tailored to suit your personal taste, the interiors are designed with precision, offering a range of high-end finishes, textures, and fixtures. From minimalism to rustic charm, every detail reflects sophistication and individuality.'
  },
],
    variants: [
      {
        variantName: 'Studio',
        variantImage: '/products/woodenseries/wooden/wooden-house-main.jpg',
        variantInterior: '/products/woodenseries/wooden/wooden-house-main.jpg'
      },
      {
        variantName: '1-BHK',
        variantImage: '/products/woodenseries/wooden/wooden-house-main.jpg',
        variantInterior: '/products/woodenseries/wooden/wooden-house-main.jpg'
      },
      {
        variantName: '2-BHK',
        variantImage: '/products/woodenseries/wooden/wooden-house-main.jpg',
        variantInterior: '/products/woodenseries/wooden/wooden-house-main.jpg'
      },
      {
        variantName: '3-BHK',
        variantImage: '/products/woodenseries/wooden/wooden-house-main.jpg',
        variantInterior: '/products/woodenseries/wooden/wooden-house-main.jpg'
      }
    ],
    faq: [
  {
    question: 'Can I customize my Wooden House?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create an Wooden House that aligns perfectly with your vision and purpose.'
  },
  {
    question: 'What amenities can I expect in a Wooden House?',
    answer: 'At Texo Prefab World, our Wooden House come equipped with a range of modern amenities such as electrical fittings, plumbing, insulation, air conditioning, and customizable interiors. Whether it’s a cozy living space or a functional workspace, we ensure your cabin meets your unique needs.'
  },
  {
    question: 'How do I maintain a Wooden House?',
    answer: 'Wooden House from Texo Prefab World are built with low-maintenance, high-quality materials. Regular upkeep includes exterior cleaning, leak inspections, and periodic checks on electrical and plumbing systems. Our cabins are designed for durability, making maintenance hassle-free.'
  },
  {
    question: 'What is Wooden House special about and is it strong?',
    answer: 'A wooden house stands out for its timeless charm and natural aesthetic, offering both warmth and practicality. Its wooden structure provides excellent insulation, making it ideal for various climates while creating a cozy and inviting atmosphere. The design maximizes interior comfort while maintaining a connection to nature.\n\nAt Texo Prefab World, we ensure that every wooden house is crafted with precision and sustainably sourced materials, blending traditional beauty with modern functionality.\n\nIn terms of strength, wooden houses are remarkably durable. The natural resilience of wood, combined with advanced construction techniques, ensures stability and resistance to external elements like wind and snow. With Texo Prefab World’s expert craftsmanship, our wooden houses are not only visually stunning but also exceptionally strong, sustainable, and built to stand the test of time.'
  },
  {
    question: 'Are Wooden House eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Wooden House are designed with eco-friendly materials and energy-efficient features. Options like solar panels, rainwater harvesting systems, and green insulation make them a sustainable choice for modern living.'
  },
  {
    question: 'What is the typical cost of a Wooden House?',
    answer: 'Texo Prefab World offers Wooden House at competitive prices. The cost depends on factors like size, features, and customization. Whether you’re looking for a budget-friendly model or a luxury cabin, we have options to suit your needs.'
  }
],
    trustBand: {
      citiesCovered: 200,
      completedProjects: 400,
      customerSatisfaction: 97
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Smart House': {
    name: 'Smart House',
    category: 'Wooden Series',
    icon: Home,
    description: 'Intelligent wooden homes with integrated smart technology and automation',
    longDescription: `The Smart House represents the future of wooden living, combining traditional timber construction with cutting-edge smart home technology. These intelligent homes feature integrated automation systems that enhance comfort, security, and energy efficiency.

Every aspect of the Smart House is designed for modern living, from automated climate control to intelligent lighting and security systems. The wooden structure provides natural beauty and sustainability, while the smart features ensure convenience and peace of mind.

Our Smart Houses are built with scalability in mind, allowing you to start with basic automation and expand as technology advances.`,
    gallery: [
      '/products/woodenseries/smart/main.png',
      '/products/woodenseries/aframe/a-frame-hero.png'
    ],
  advantages: [
  {
    icon: 'DraftingCompass',
    title: 'Modern Aesthetic Design',
    description: 'Each smart house is a masterpiece of geometry and space, featuring clean lines, sharp angles, and visually striking elements. These designs maximize space efficiency and ensure that every corner serves a purpose.'
  },
  {
    icon: 'Blocks',
    title: 'Modular Flexibility',
    description: 'Texo’s prefabs offer modular configurations, allowing homeowners to add, remove, or customize spaces as their needs evolve. Whether expanding for a growing family or reconfiguring for new purposes, adaptability is built into the design.'
  },
  {
    icon: 'PanelsTopLeft',
    title: 'Indoor-Outdoor Integration',
    description: 'Quality windows, open floor plans, and thoughtful landscaping seamlessly integrate indoor and outdoor living. This connection to nature elevates the living experience, offering tranquility and visual openness.'
  },
  {
    icon: 'Palette',
    title: 'Custom-Built Interiors',
    description: 'Tailored to suit your personal taste, the interiors are designed with precision, offering a range of high-end finishes, textures, and fixtures. From minimalism to rustic charm, every detail reflects sophistication and individuality.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Uncompromised Durability',
    description: 'Treated for resistance to pests, moisture, and weathering, Texo’s Smart Homes are engineered for exceptional durability. Their solid wood construction ensures they stand strong for decades.'
  },
  {
    icon: 'Leaf',
    title: 'Eco Friendly',
    description: 'The Smart home is crafted with eco-certified wood, non-toxic paints, and energy-efficient designs, ensuring a minimal environmental impact. This sustainable approach not only protects the planet but also provides a healthy, toxin-free living environment for you and your loved ones.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products/woodenseries/wooden/wooden-house-main.jpg',
    variantInterior: '/products/woodenseries/aframe/a-frame-hero.png'
  },
  {
    variantName: '1-BHK',
    variantImage: '/products/woodenseries/aframe/a-frame-hero.png',
    variantInterior: '/products/woodenseries/wooden/wooden-house-main.jpg'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products/woodenseries/wooden/wooden-house-main.jpg',
    variantInterior: '/products/woodenseries/wooden/wooden-house-main.jpg'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products/woodenseries/aframe/a-frames-2-ai.jpg',
    variantInterior: '/products/woodenseries/wooden/wooden-house-main.jpg'
  }
],
    faq: [
  {
    question: 'Can I customize my Smart House?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create an Smart House that aligns perfectly with your vision and purpose.'
  },
  {
    question: 'What amenities can I expect in a Smart House?',
    answer: 'At Texo Prefab World, our Smart House come equipped with a range of modern amenities such as electrical fittings, plumbing, insulation, air conditioning, and customizable interiors. Whether it’s a cozy living space or a functional workspace, we ensure your cabin meets your unique needs.'
  },
  {
    question: 'How do I maintain a Smart House?',
    answer: ' Smart House from Texo Prefab World are built with low-maintenance, high-quality materials. Regular upkeep includes exterior cleaning, leak inspections, and periodic checks on electrical and plumbing systems. Our cabins are designed for durability, making maintenance hassle-free.'
  },
  {
    question: 'What is Smart House special about and is it strong?',
    answer: 'A Smart House stands out for its modern design, offering both convenience and efficiency. Its integrated design allow seamless lighting temperature, security, and more, making it ideal for a tech-savvy lifestyle while enhancing comfort and sustainability. The design maximizes functionality while maintaining a sleek and contemporary aesthetic.\n\nAt Texo Prefab World, we ensure that every Smart House is built with precision and equipped with state-of-the-art blending innovation with practicality.\n\nIn terms of strength, Smart Houses are exceptionally robust. With advanced materials and intelligent construction techniques, they offer stability and resistance to external forces while incorporating energy-efficient and sustainable solutions. With Texo Prefab World’s expert engineering, our Smart Houses are not only technologically advanced but also durable, eco-friendly, and designed for the future.'
  },
  {
    question: 'Are Smart House eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Smart House are designed with eco-friendly materials and energy-efficient features. Options like solar panels, rainwater harvesting systems, and green insulation make them a sustainable choice for modern living.'
  },
  {
    question: 'What is the typical cost of a Smart House?',
    answer: 'Texo Prefab World offers Smart House at competitive prices. The cost depends on factors like size, features, and customization. Whether you’re looking for a budget-friendly model or a luxury cabin, we have options to suit your needs.'
  }
],
    trustBand: {
      citiesCovered: 80,
      completedProjects: 95,
      customerSatisfaction: 99
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  
  'Porta Cabin': {
    name: 'Porta Cabin',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Versatile portable cabins for temporary and mobile accommodation needs',
    longDescription: `Porta Cabins are the ultimate solution for flexible accommodation requirements. These prefabricated structures offer quick deployment and can be easily relocated as needs change. Built with durability and comfort in mind, our Porta Cabins serve various applications from construction sites to emergency housing.

Each Porta Cabin is constructed using high-quality materials and modular design principles, ensuring rapid assembly and disassembly. The interiors are designed for functionality while maintaining comfort standards, making them suitable for both short-term and extended use.

Our Porta Cabins are engineered to withstand transportation and various environmental conditions, providing reliable shelter wherever it's needed.`,
    gallery: [
      '/products/portable/porta-cabin/main.webp',
      '/products/portable/porta-cabin/porta-2.jpeg',
      '/products/portable/porta-cabin/porta.jpeg',
      '/products/portable/porta-cabin/porta-3.jpg',
    ],
  advantages: [
  {
    icon: 'Blocks',
    title: 'Modular & Scalable',
    description: 'Designed for expansion and relocation, Texo Porta Cabins adapt to changing needs, making them ideal for industries requiring flexible infrastructure without long-term commitments.'
  },
  {
    icon: 'Rocket',
    title: 'Rapid Deployment',
    description: 'Pre-engineered for quick setup, our cabins reduce construction time by 70%, enabling businesses to establish functional spaces instantly, without delays or heavy on-site work.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Highly Durable',
    description: 'Built with high-grade steel and corrosion-resistant materials, Texo Porta Cabins withstand extreme weather conditions, ensuring long-term performance with minimal wear and tear.'
  },
  {
    icon: 'SlidersHorizontal',
    title: 'Fully Customizable',
    description: 'Tailored to specific needs, Texo Porta Cabins offer modern interiors, smart automation, and flexible layouts, ensuring optimal functionality for offices, accommodations, and commercial spaces.'
  },
  {
    icon: 'Truck',
    title: 'Mobility & Multi-Purpose Utility',
    description: 'Portable cabins offer mobility and versatility, serving as offices, clinics, retail spaces, and more. Easily relocated, they adapt to diverse industry needs, from construction sites to marketing suites and welfare units.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Cost-Effective Solution',
    description: 'More affordable than permanent structures, Texo Porta Cabins provide long-term value with low maintenance, making them an economical choice for businesses and temporary housing.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products/portable/porta-cabin/main.webp',
    variantInterior: '/products/portable/porta-cabin/main.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/products/portable/porta-cabin/main.webp',
    variantInterior: '/products/portable/porta-cabin/main.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products/portable/porta-cabin/main.webp',
    variantInterior: '/products/portable/porta-cabin/main.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products/portable/porta-cabin/main.webp',
    variantInterior: '/products/portable/porta-cabin/main.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Porta Cabin?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Porta Cabin that meets your exact requirements, ensuring a comfortable, durable, and mobile workspace for various applications.'
  },
  {
    question: 'What amenities can I expect in a Porta Cabin?',
    answer: 'At Texo Prefab World, our Porta Cabins come equipped with essential features such as pre-installed electrical systems, thermal insulation, climate control, soundproofing, and durable flooring. Additional options include customized interiors, reinforced security doors, modular furniture, and sanitation facilities to enhance functionality.'
  },
  {
    question: 'How do I maintain a Porta Cabins?',
    answer: 'Porta Cabins from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes inspecting electrical fittings, checking HVAC systems, and ensuring the structural integrity of walls and flooring. Our cabins are designed for longevity, offering a hassle-free and reliable solution, usually repainted once an year.'
  },
  {
    question: 'What is Porta Cabins special about and is it strong?',
    answer: 'A Porta Cabin stands out for its mobility and versatility, providing a quick and efficient solution for offices, site accommodations, security booths, healthcare units, classrooms, and more. Its modular prefabricated design allows for rapid deployment, easy relocation, and customization, making it suitable for both temporary and permanent setups.\n\nAt Texo Prefab World, we ensure that every Porta Cabin is engineered with precision, using premium materials to withstand varied environmental conditions while maintaining optimal comfort and efficiency.\n\nIn terms of strength, Porta Cabins are highly durable and weather-resistant. Their robust steel frame and insulated panels ensure resilience against extreme temperatures, wind loads, and corrosion. With Texo Prefab World’s expert engineering, our Porta Cabins provide a secure and long-lasting structure for diverse industry needs.'
  },
  {
    question: 'Are Porta Cabins eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Porta Cabins are designed with eco-friendly materials and energy-efficient systems. Features like PUF insulated walls, LED lighting, and solar power integration make them an environmentally responsible and cost-effective choice.'
  },
  {
    question: 'What is the typical cost of a Porta Cabins?',
    answer: 'Texo Prefab World offers Porta Cabins at competitive prices. The cost depends on factors like size, insulation, mobility requirements, and customization. Whether you need a compact unit for remote locations or a fully equipped workspace, we have solutions tailored to match your budget and operational needs.'
  }
],
    trustBand: {
      citiesCovered: 300,
      completedProjects: 1200,
      customerSatisfaction: 95
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Farmhouse': {
    name: 'Farmhouse',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Rural-style portable cabins perfect for agricultural and countryside applications',
    longDescription: `Our Farmhouse designs bring the charm of traditional rural architecture to portable structures. These cabins are specifically engineered for agricultural environments, providing comfortable living and working spaces for farmers, ranchers, and rural workers.

The design incorporates practical features like easy maintenance access, durable exteriors resistant to agricultural chemicals, and layouts optimized for rural living. Despite their portable nature, Farmhouses offer the comfort and functionality of permanent homes.

Each Farmhouse is built to last, with reinforced structures that can withstand the demands of rural environments while providing a cozy retreat from daily farm work.`,
    gallery: [
      '/products/portable/farmhouse/farmhouse-white-ai.png',
      '/products/portable/farmhouse/farmhouse-night-1.jpg',
      '/products/portable/farmhouse/farmhouse-2.jpg',
      '/products/portable/farmhouse/farmhouse-1.JPG'
    ],
  advantages: [
  {
    icon: 'Rocket',
    title: 'Fast & Efficient Construction',
    description: 'Enjoy your dream farmhouse in just a few weeks. Texo’s precision-manufactured modules ensure swift delivery and on-site assembly ready to live, host, or lease with zero hassle.'
  },
  {
    icon: 'Hammer',
    title: 'Architectural & Craftsmanship',
    description: 'Our farmhouses are built in state-of-the-art facilities with impeccable detailing, offering flawless finishes, elevated aesthetics, and enduring structural integrity for decades to come.'
  },
  {
    icon: 'House',
    title: 'Plug-and-Play Comfort',
    description: 'Designed for year-round living, Texo farmhouses are equipped with advanced insulation, climate control, and waterproof exteriors crafted to thrive in every season and setting.'
  },
  {
    icon: 'Palette',
    title: 'Fully Customizable',
    description: 'From modern glass façades to rustic luxury wood-clads, Texo offers bespoke designs tailored to your land contour, lifestyle, and personal aesthetic curated by expert architects and designers.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Cost-Effective with Minimal Maintenance',
    description: 'Texo’s modular construction reduces wastage, labor overheads, and repair needs ensuring long-term returns through energy efficiency, low maintenance, and minimal operational costs.'
  },
  {
    icon: 'Leaf',
    title: 'Eco-Conscious Construction',
    description: 'With 80% off-site construction, we preserve the essence of your land—ensuring reduced noise, zero pollution, and an untouched natural ecosystem that surrounds your premium retreat.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products/portable/farmhouse/farmhouse-1.JPG',
    variantInterior: '/products/portable/farmhouse/farmhouse-2.jpg'
  },
  {
    variantName: '1-BHK',
    variantImage: '/products/portable/farmhouse/farmhouse-2.jpg',
    variantInterior: '/products/portable/farmhouse/farmhouse-night.jpg'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products/portable/farmhouse/farmhouse-night.jpg',
    variantInterior: '/products/portable/farmhouse/farmhouse-night-1.jpg'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products/portable/farmhouse/farmhouse-white-ai.png',
    variantInterior: '/products/portable/farmhouse/farmhouse-1.JPG'
  }
],
    faq: [
  {
    question: 'Can I customize my Farm House?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Farm House that meets your exact requirements, ensuring a comfortable, durable, and aesthetically elevated living space for luxurious weekend getaways or full-time residence.'
  },
  {
    question: 'What amenities can I expect in a Farm House?',
    answer: 'At Texo Prefab World, our Farm Houses come equipped with essential features such as pre-installed electrical systems, thermal insulation, climate control, soundproofing, and premium flooring. Additional options include designer interiors, expansive decks, smart home features, modular kitchens, and premium bath fittings to enhance lifestyle and comfort.'
  },
  {
    question: 'How do I maintain a Farm House?',
    answer: 'Farm Houses from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes inspecting electrical fittings, checking HVAC systems, and ensuring the structural integrity of walls and flooring. Our structures are designed for longevity, offering a hassle-free and refined living experience.'
  },
  {
    question: 'What is special about Farm Houses, and are they strong?',
    answer: 'A Farm House stands out for its elegance and adaptability, offering a premium retreat that blends modern architecture with nature. Ideal for private estates, weekend homes, or rental stays, its modular design ensures fast construction, seamless integration, and full customization for luxury living.\n\nAt Texo Prefab World, we ensure that every Farm House is engineered with precision, using premium materials to withstand varied environmental conditions while maintaining optimal aesthetics and energy efficiency.\n\nIn terms of strength, our Farm Houses are exceptionally durable and weather-resistant. Their robust steel frame and insulated panels ensure resilience against extreme temperatures, wind loads, and corrosion. With Texo Prefab World’s expert craftsmanship, our Farm Houses offer enduring style, comfort, and structural integrity.'
  },
  {
    question: 'Are Farm Houses eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Farm Houses are designed with eco-friendly materials and energy-efficient systems. Features like PUF insulated walls, LED lighting, rainwater harvesting, and solar integration make them a luxurious yet environmentally responsible choice.'
  },
  {
    question: 'What is the typical cost of a Farm House?',
    answer: 'Texo Prefab World offers Farm Houses at competitive prices in the premium prefab segment. The cost depends on factors like size, finishes, layout complexity, and personalization. Whether you seek a compact villa or a sprawling estate, we provide elegant solutions aligned with your vision, land, and budget.'
  }
],
    trustBand: {
      citiesCovered: 180,
      completedProjects: 350,
      customerSatisfaction: 94
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Portable Office': {
    name: 'Portable Office',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Standard portable cabins offering reliable temporary accommodation',
    longDescription: `The Portable Cabin is our versatile standard offering, designed to provide reliable temporary accommodation across various industries. These cabins combine practicality with comfort, making them ideal for construction sites, mining operations, and temporary housing needs.

Constructed with modular components, Portable Cabins can be quickly assembled and disassembled as required. The design focuses on durability, functionality, and ease of maintenance, ensuring they remain cost-effective solutions for temporary accommodation.

Our Portable Cabins are built to industry standards, providing safe and comfortable environments for workers and staff in demanding conditions.`,
    gallery: [
      '/products/portable/office/main.webp',
      '/products/portable/office/porta-office.jpg',
      '/products/portable/office/office-int-3.jpg',
      '/products/portable/office/office-int-ai.jpg',
    ],
  advantages: [
  {
    icon: 'Rocket',
    title: 'Quick Setup',
    description: 'Prefabricated and ready for rapid assembly, with plug-and-play method, Texo Portable Cabin Offices minimize downtime, ensuring your workspace is operational in just a few hours.'
  },
  {
    icon: 'LayoutPanelTop',
    title: 'Customizable Layouts',
    description: 'Tailor your office space with flexible designs, from open-plan workspaces to private cabins, meeting your specific business needs.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Durable Construction',
    description: 'Built with high-quality steel and insulated panels, Texo cabins are designed to withstand harsh weather and heavy usage.'
  },
  {
    icon: 'Truck',
    title: 'Portability',
    description: 'Easily transportable and reusable, Texo cabins are ideal for businesses that need to relocate or expand their operations.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Cost Savings',
    description: 'Affordable installation and low maintenance costs make Texo cabins a budget-friendly alternative to traditional office construction.'
  },
  {
    icon: 'Leaf',
    title: 'Eco-Friendly Design',
    description: 'Manufactured with sustainable materials and minimal site disruption, Texo cabins align with green building standards.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products/portable/office/main.webp',
    variantInterior: '/products/portable/office/main.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/products/portable/office/main.webp',
    variantInterior: '/products/portable/office/main.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products/portable/office/main.webp',
    variantInterior: '/products/portable/office/main.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products/portable/office/main.webp',
    variantInterior: '/products/portable/office/main.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Porta Office Cabin?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Porta Office Cabin that meets your exact requirements, ensuring a comfortable, durable, and mobile workspace for various applications.'
  },
  {
    question: 'What amenities can I expect in a Porta Office Cabin?',
    answer: 'At Texo Prefab World, our Porta Office Cabins come equipped with essential features such as pre-installed electrical systems, thermal insulation, climate control, soundproofing, and durable flooring. Additional options include customized interiors, reinforced security doors, modular furniture, and sanitation facilities to enhance functionality.'
  },
  {
    question: 'How do I maintain a Porta Office Cabin?',
    answer: 'Porta Office Cabins from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes inspecting electrical fittings, checking HVAC systems, and ensuring the structural integrity of walls and flooring. Our cabins are designed for longevity, offering a hassle-free and reliable solution.'
  },
  {
    question: 'What is special about Porta Office Cabins, and are they strong?',
    answer: 'A Porta Office Cabin stands out for its mobility and versatility, providing a quick and efficient solution for on-site offices, temporary workspaces, control rooms, and more. Its modular prefabricated design allows for rapid deployment, easy relocation, and customization, making it suitable for both temporary and permanent setups.\n\nAt Texo Prefab World, we ensure that every Porta Office Cabin is engineered with precision, using premium materials to withstand varied environmental conditions while maintaining optimal comfort and efficiency.\n\nIn terms of strength, Porta Office Cabins are highly durable and weather-resistant. Their robust steel frame and insulated panels ensure resilience against extreme temperatures, wind loads, and corrosion. With Texo Prefab World’s expert engineering, our Porta Office Cabins provide a secure and long-lasting structure for diverse industry needs.'
  },
  {
    question: 'Are Porta Office Cabins eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Porta Office Cabins are designed with eco-friendly materials and energy-efficient systems. Features like PUF insulated walls, LED lighting, and solar power integration make them an environmentally responsible and cost-effective choice.'
  },
  {
    question: 'What is the typical cost of a Porta Office Cabin?',
    answer: 'Texo Prefab World offers Porta Office Cabins at competitive prices. The cost depends on factors like size, insulation, mobility requirements, and customization. Whether you need a compact unit for remote locations or a fully equipped workspace, we have solutions tailored to match your budget and operational needs.'
  }
],
    trustBand: {
      citiesCovered: 250,
      completedProjects: 800,
      customerSatisfaction: 93
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Bunk House Cabin': {
    name: 'Bunk House Cabin',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Multi-occupancy cabins designed for group accommodation and labor camps',
    longDescription: `Bunk House Cabins are specialized for accommodating multiple occupants efficiently. These structures are ideal for labor camps, mining operations, and large-scale construction projects where group housing is required.

The design maximizes space utilization with bunk bed configurations and shared facilities, while maintaining comfort and privacy standards. Each cabin includes proper ventilation, lighting, and safety features to ensure a healthy living environment.

Our Bunk House Cabins are engineered for durability and can be equipped with additional amenities like communal kitchens and recreational areas.`,
    gallery: [
      '/products/portable/bunkhouse/main.webp',
      '/products/portable/bunkhouse/bunk-int.jpg',
      '/products/portable/bunkhouse/bunk-int-1.jpg',
      '/products/portable/bunkhouse/bunk-int-3.jpg',
    ],
  advantages: [
  {
    icon: 'Rocket',
    title: 'Rapid Installation',
    description: 'Texo modular bunk houses are designed for quick assembly and relocation, making them ideal for construction sites, mining zones, and emergency relief areas.'
  },
  {
    icon: 'Blocks',
    title: 'Scalable Designs',
    description: 'From compact single-occupancy cabins to large VIP quarters, Texo offers tailor-made solutions to meet specific business and operational needs.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Built for Harsh Environments',
    description: 'Engineered with high-strength steel, insulated walls, and anti-corrosion coatings, Texo bunk houses withstand heavy winds, extreme temperatures, and seismic activity.'
  },
  {
    icon: 'Leaf',
    title: 'Energy-Efficient & Sustainable',
    description: 'Designed with thermal insulation, great ventilation, and our bunkhouses reduce power consumption and carbon footprint, making them environmentally friendly.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Cost-Effective Alternative',
    description: 'Compared to brick-and-mortar buildings, Texo prefab bunk houses offer up to 50% savings in construction time and costs, ensuring high efficiency with low maintenance.'
  },
  {
    icon: 'Building2',
    title: 'Versatile for Multiple Industries',
    description: 'Whether for oil & gas fields, industrial workforce housing, or eco-tourism, Texo’s modular bunk houses offer reliable, long-term accommodation solutions.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Bunk House Cabin?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Bunk House Cabin that meets your exact requirements, ensuring a comfortable, durable, and compact space optimized for accommodation and workforce housing.'
  },
  {
    question: 'What amenities can I expect in a Bunk House Cabin?',
    answer: 'At Texo Prefab World, our Bunk House Cabins come equipped with essential features such as pre-installed electrical systems, thermal insulation, climate control, soundproofing, and easy-to-clean flooring. Additional options include multi-tier bedding, personal lockers, ventilation systems, modular furniture, and attached washroom facilities to enhance functionality.'
  },
  {
    question: 'How do I maintain a Bunk House Cabin?',
    answer: 'Bunk House Cabins from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes inspecting electrical fittings, checking HVAC systems, and ensuring the structural integrity of walls and flooring. Our cabins are designed for longevity, offering a hassle-free and efficient accommodation solution.'
  },
  {
    question: 'What is special about Bunk House Cabins, and are they strong?',
    answer: 'A Bunk House Cabin stands out for its space efficiency and utility, offering a quick and reliable solution for labor accommodations, worker housing, disaster relief, and site-based lodging. Its prefabricated modular design allows for rapid installation, mobility, and scalable expansion.\n\nAt Texo Prefab World, we ensure that every Bunk House Cabin is engineered with precision, using premium materials to withstand varied environmental conditions while maintaining optimal comfort and hygiene.\n\nIn terms of strength, Bunk House Cabins are highly durable and weather-resistant. Their robust steel frame and insulated panels ensure resilience against extreme temperatures, wind loads, and corrosion. With Texo Prefab World’s expert engineering, our cabins ensure safety, comfort, and long-term usability for high-occupancy setups.'
  },
  {
    question: 'Are Bunk House Cabins eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Bunk House Cabins are designed with eco-friendly materials and energy-efficient systems. Features like PUF insulated walls, LED lighting, and water-saving fittings make them an environmentally responsible and cost-effective choice for mass accommodations.'
  },
  {
    question: 'What is the typical cost of a Bunk House Cabin?',
    answer: 'Texo Prefab World offers Bunk House Cabins at competitive prices. The cost depends on factors like size, occupancy requirements, insulation, and customization. Whether you need compact dormitory units or large multi-bed facilities, we offer optimized solutions tailored to your operational and budgetary needs.'
  }
],
    trustBand: {
      citiesCovered: 200,
      completedProjects: 600,
      customerSatisfaction: 92
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Containers House': {
    name: 'Containers House',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Shipping container converted homes offering unique and sustainable living',
    longDescription: `Container Houses transform shipping containers into unique, sustainable living spaces. This innovative approach to housing utilizes recycled shipping containers, creating affordable and environmentally friendly homes.

Each Container House is customized to provide comfortable living spaces while maintaining the industrial aesthetic of the original containers. The modular nature allows for creative configurations, from single containers to multi-unit complexes.

Our Container Houses combine the strength and durability of shipping containers with modern interior design, creating distinctive homes that stand out.`,
    gallery: [
      '/products/portable/container/main.webp',
      '/products/portable/container/cont-1.jpg',
      '/products/portable/container/cont-2.jpg',
      '/products/portable/container/cont-3.jpg',
    ],
  advantages: [
  {
    icon: 'Blocks',
    title: 'Stackable & Expandable',
    description: 'Add more containers vertically or horizontally to create additional rooms or levels, offering endless scalability, Texo Container Houses perfect for evolving families or businesses.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Cost-Effective & Time-Saving',
    description: 'Container houses eliminate lengthy construction timelines and significantly reduce labor and material costs. They are ready for use within weeks, offering a practical solution for urgent housing or commercial needs.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Durable Construction',
    description: 'Built from high-quality steel, Texo Container Houses are resistant to extreme weather, pests, and wear, ensuring long-lasting performance.'
  },
  {
    icon: 'Zap',
    title: 'Energy-Efficient Options',
    description: 'Container homes come with the installations and passive design elements you need, promoting low energy consumption and reduced operational costs over time.'
  },
  {
    icon: 'Palette',
    title: 'Customizable to Your Taste',
    description: 'Tailored to suit individual preferences, each container house offers unique layouts, facades, and interiors, reflecting personal style or brand identity—whether rustic, industrial, or minimalist.'
  },
  {
    icon: 'Truck',
    title: 'Portability',
    description: 'Easily transportable, these homes are ideal for those who need to relocate or prefer a mobile living solution.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Container House?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Container House that meets your exact requirements, ensuring a comfortable, durable, and mobile living space for various applications.'
  },
  {
    question: 'What amenities can I expect in a Container House?',
    answer: 'At Texo Prefab World, our Container Houses come equipped with essential features such as pre-installed electrical systems, thermal insulation, climate control, soundproofing, and durable flooring. Additional options include customized interiors, reinforced security doors, modular furniture, and sanitation facilities to enhance functionality.'
  },
  {
    question: 'How do I maintain a Container House?',
    answer: 'Container Houses from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes inspecting electrical fittings, checking HVAC systems, and ensuring the structural integrity of walls and flooring. Our houses are designed for longevity, offering a hassle-free and reliable solution.'
  },
  {
    question: 'What is special about Container Houses, and are they strong?',
    answer: 'A Container House stands out for its mobility and versatility, providing a quick and efficient solution for modern homes, resorts, rental stays, and more. Its modular prefabricated design allows for rapid deployment, easy relocation, and customization, making it suitable for both temporary and permanent setups.\n\nAt Texo Prefab World, we ensure that every Container House is engineered with precision, using premium materials to withstand varied environmental conditions while maintaining optimal comfort and efficiency.\n\nIn terms of strength, Container Houses are highly durable and weather-resistant. Their robust steel frame and insulated panels ensure resilience against extreme temperatures, wind loads, and corrosion. With Texo Prefab World’s expert engineering, our Container Houses provide a secure and long-lasting structure for diverse residential needs.'
  },
  {
    question: 'Are Container Houses eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Container Houses are designed with eco-friendly materials and energy-efficient systems. Features like PUF insulated walls, LED lighting, and solar power integration make them an environmentally responsible and cost-effective choice.'
  },
  {
    question: 'What is the typical cost of a Container House?',
    answer: 'Texo Prefab World offers Container Houses at competitive prices. The cost depends on factors like size, insulation, mobility requirements, and customization. Whether you need a compact retreat or a fully equipped residential space, we have solutions tailored to match your budget and lifestyle needs.'
  }
],
    trustBand: {
      citiesCovered: 150,
      completedProjects: 280,
      customerSatisfaction: 96
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Modular Toilet': {
    name: 'Modular Toilet',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Clean and hygienic portable toilet facilities for various applications',
    longDescription: `Modular Toilets provide clean, hygienic sanitation solutions for construction sites, events, and remote locations. These portable facilities combine modern sanitation technology with durable construction to deliver reliable service in any environment.

Each unit is equipped with flushing toilets, sinks, and proper ventilation systems, ensuring comfort and hygiene standards are maintained. The modular design allows for easy transportation and quick setup, making them ideal for temporary or mobile requirements.

Our Modular Toilets are built to withstand heavy use and can be equipped with additional features like solar power and water recycling systems.`,
    gallery: [
      '/products/portable/modular-toilet/modular-toilet.png',
      '/products/portable/modular-toilet/modular-toilet-2.jpg',
      '/products/portable/modular-toilet/modular-int.jpg',
      '/products/portable/modular-toilet/modular-ai-int.jpg',
    ],
  advantages: [
  {
    icon: 'Sparkles',
    title: 'Designer-Grade Installation',
    description: 'Every unit arrives fully equipped with premium sanitary fittings, ventilation, and lighting ensuring elegant usability and near-zero installation downtime.'
  },
  {
    icon: 'DraftingCompass',
    title: 'Custom Architecture',
    description: 'From single deluxe restrooms to multi-stall luxury cabins, Texo toilets are tailored to match the environment urban parks, resorts, event venues, or institutional campuses.'
  },
  {
    icon: 'ShieldCheck',
    title: 'All-Weather, Low-Wear Construction',
    description: 'Built with corrosion-resistant panels, insulation, and anti-fade exteriors, Texo toilets retain their finish and function in the harshest weather or terrain conditions.'
  },
  {
    icon: 'ShieldPlus',
    title: 'Hygienic Interiors with Odor-Control Tech',
    description: 'Each cabin includes antibacterial wall finishes, proper drainage, and cross-ventilation to provide a clean, odor-free, and refreshing experience even in high-footfall areas.'
  },
  {
    icon: 'Cpu',
    title: 'Mobile, Modular & Smart-Enabled',
    description: 'Relocate units with ease as project needs evolve. Texo toilets are future-ready with optional tech integrations like occupancy sensors, solar panels, and touchless fixtures.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Cost-Efficient for Long-Term Utility',
    description: 'Low maintenance, high performance, and superior lifespan make this an ideal investment for public-private initiatives, urban infrastructure, and institutional use cases.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Modular Toilet Cabin?',
    answer: 'Absolutely! Texo Prefab World specializes in bespoke sanitation solutions. From layout and plumbing configurations to interior finishes and access features, we design Modular Toilet Cabins to match your specific needs—be it for luxury resorts, institutional setups, or high-volume public utilities.'
  },
  {
    question: 'What amenities can I expect in a Modular Toilet Cabin?',
    answer: 'At Texo Prefab World, our Modular Toilet Cabins come fully equipped with modern amenities including concealed plumbing, anti-bacterial wall panels, flush systems, proper ventilation, LED lighting, and premium flooring. Optional upgrades include sensor taps, exhaust fans, shower areas, vanity mirrors, and solar water heaters for a complete hygienic experience.'
  },
  {
    question: 'How do I maintain a Modular Toilet Cabin?',
    answer: 'Modular Toilet Cabins from Texo Prefab World are engineered for easy upkeep. High-grade materials ensure resistance to moisture, stains, and corrosion. Routine maintenance includes sanitation checks, plumbing inspections, and surface cleaning. Designed for frequent use, these cabins offer a hygienic, low-maintenance solution that holds up over time.'
  },
  {
    question: 'What is special about Modular Toilet Cabins, and are they strong?',
    answer: 'A Modular Toilet Cabin stands out for combining mobility with long-term performance and premium aesthetics. Ideal for urban infrastructure, hospitality venues, and institutional campuses, these cabins offer convenience without compromising on hygiene or design.\n\nAt Texo Prefab World, every cabin is manufactured with corrosion-resistant steel, PUF-insulated panels, and heavy-duty flooring—ensuring durability, ease of cleaning, and operational efficiency in all climates.\n\nIn terms of strength, they are engineered for stability, resistance to leaks, and weather resilience. Our premium modular designs elevate sanitation infrastructure while remaining robust and reliable.'
  },
  {
    question: 'Are Modular Toilet Cabins eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Modular Toilet Cabins feature water-saving fixtures, LED lighting, solar-ready panels, and options for bio-digester integration. The use of recyclable, low-impact materials makes them an excellent choice for environmentally conscious projects.'
  },
  {
    question: 'What is the typical cost of a Modular Toilet Cabin?',
    answer: 'Texo Prefab World offers Modular Toilet Cabins with a premium build at competitive pricing. Cost varies based on configuration, add-ons, and user capacity. Whether you’re planning a luxury sanitary block or a compact, upscale restroom facility, we offer elegant solutions that align with your vision and investment.'
  }
],
    trustBand: {
      citiesCovered: 400,
      completedProjects: 1500,
      customerSatisfaction: 91
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Mobile Toilet': {
    name: 'Mobile Toilet',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Fully mobile toilet units for maximum flexibility and convenience',
    longDescription: `Mobile Toilets offer the ultimate in flexibility, providing fully transportable sanitation facilities that can be moved as needed. These units are ideal for dynamic environments where fixed facilities aren't practical.

Each Mobile Toilet is mounted on wheels and can be towed to different locations, making them perfect for construction sites, events, and emergency situations. Despite their mobility, they maintain high standards of comfort and hygiene.

Our Mobile Toilets are equipped with stabilizing systems for safe operation and can be quickly connected to utilities at each location.`,
    gallery: [
      '/products/portable/mobile-toilet/mobile-main.webp',
      '/products/portable/mobile-toilet/mobile-2.png',
      '/products/portable/mobile-toilet/mobile-3.png',
    ],
  advantages: [
  {
    icon: 'Truck',
    title: 'Fully Portable & Easy to Transport',
    description: 'Designed for mobility and quick deployment, Texo’s mobile toilets can be moved and placed anywhere, making them ideal for temporary and remote locations.'
  },
  {
    icon: 'Rocket',
    title: 'Quick Installation',
    description: 'Our mobile toilets come pre-assembled and fully equipped, ensuring instant usability with minimal setup time.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Weather-Resistant & Durable',
    description: 'Constructed from high-quality, rust-proof materials, our mobile toilets withstand harsh weather conditions, heavy usage, and frequent relocation.'
  },
  {
    icon: 'ShieldPlus',
    title: 'Hygienic & Odor-Free Design',
    description: 'Featuring anti-bacterial surfaces, proper ventilation, and sealed waste compartments, Texo’s mobile toilets offer a fresh and odor-free restroom experience.'
  },
  {
    icon: 'SlidersHorizontal',
    title: 'Customizable for Different Uses',
    description: 'Available in various designs, sizes, and configurations, including single units and multi-stall models, to suit different industry and event requirements.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Cost-Effective',
    description: 'With reusable components, energy-saving features, and long-lasting materials, Texo’s mobile toilets offer a budget-friendly and environmentally responsible sanitation option.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Mobile Toilet Cabin?',
    answer: 'Absolutely! Texo Prefab World provides highly flexible Mobile Toilet Cabin solutions. From the number of stalls and interior layout to exterior design, features, and towing requirements, we work closely with you to create a mobile sanitation unit that suits your location, purpose, and user expectations.'
  },
  {
    question: 'What amenities can I expect in a Mobile Toilet Cabin?',
    answer: 'At Texo Prefab World, our Mobile Toilet Cabins are fully equipped with essentials such as integrated fresh and waste water tanks, ventilation systems, flush toilets, and lighting. Premium options include hand wash stations, motion-sensor lighting, separate male/female compartments, mirrors, exhaust fans, and anti-skid flooring for a hygienic user experience on the go.'
  },
  {
    question: 'How do I maintain a Mobile Toilet Cabin?',
    answer: 'Mobile Toilet Cabins from Texo Prefab World are designed for operational ease and minimal upkeep. Routine maintenance includes waste tank disposal, water refilling, surface cleaning, and plumbing checks. Built with non-corrosive materials and easy-access servicing panels, these cabins ensure reliable performance in transit and static use alike.'
  },
  {
    question: 'What is special about Mobile Toilet Cabins, and are they strong?',
    answer: 'Mobile Toilet Cabins stand out for their mobility, convenience, and quick deployment at events, construction sites, festivals, and emergency relief areas.\n\nAt Texo Prefab World, each cabin is built using high-quality, weather-resistant materials with an aerodynamic design for easy towing and setup.\n\nIn terms of strength, these cabins feature a galvanized steel chassis, reinforced insulated panels, and heavy-duty fittings—ensuring stability on rough terrains and safety during transport. Our mobile units combine practicality with engineering excellence for demanding field conditions.'
  },
  {
    question: 'Are Mobile Toilet Cabins eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Mobile Toilet Cabins feature energy-efficient LED lighting, low-water flush systems, and options for bio-toilets or solar power integration. With recyclable materials and waste management features, they’re built to serve without harming the environment.'
  },
  {
    question: 'What is the typical cost of a Mobile Toilet Cabin?',
    answer: 'Texo Prefab World offers Mobile Toilet Cabins at competitive rates. Pricing varies based on size, facilities, towing setup, and add-on features. Whether you require single units or fleet-ready mobile sanitation pods, we tailor solutions that align with your logistics and budget.'
  }
],
    trustBand: {
      citiesCovered: 350,
      completedProjects: 1100,
      customerSatisfaction: 90
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Portable Toilet Cabin': {
    name: 'Portable Toilet Cabin',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Complete portable toilet cabins with enhanced comfort features',
    longDescription: `Portable Toilet Cabins combine the convenience of mobile sanitation with enhanced comfort features. These complete units provide self-contained facilities that can be deployed anywhere reliable sanitation is needed.

Each cabin includes multiple toilet compartments, handwashing stations, and proper ventilation, creating comfortable and hygienic environments. The portable design allows for easy transportation and setup in remote or temporary locations.

Our Portable Toilet Cabins are built for durability and can handle high-traffic situations while maintaining cleanliness and functionality.`,
    gallery: [
      '/products/portable/portable-toilet/pt-1.jpg',
      '/products/portable/portable-toilet/pt-2.jpg',
    ],
  advantages: [
  {
    icon: 'ShieldPlus',
    title: 'Hygienic & Odor-Free Design',
    description: 'Equipped with efficient ventilation systems, slip proof flooring and anti-bacterial interiors, our toilet cabins ensure a clean and odor-free environment.'
  },
  {
    icon: 'Rocket',
    title: 'Quick Installation',
    description: 'Texo portable toilets are pre-fabricated, easy to transport, and require minimal installation, making them ideal for temporary and remote applications.'
  },
  {
    icon: 'Truck',
    title: 'Lightweight & Fully Mobile',
    description: 'Built with light yet robust materials, our portable toilet can be relocated easily, ensuring maximum convenience for temporary or emergency setups.'
  },
  {
    icon: 'SlidersHorizontal',
    title: 'Customizable Setup',
    description: 'Available in multiple configurations, including single units, multi-cabin setups, and luxury restroom trailers, to cater to different industries and requirements.'
  },
  {
    icon: 'Wrench',
    title: 'Low Maintenance',
    description: 'With easy-to-clean interiors and efficient drainage systems, Texo portable toilets reduce downtime and maintenance costs.'
  },
  {
    icon: 'Building2',
    title: 'Ideal for Multiple Industries',
    description: 'From construction sites to public parks and disaster relief zones, Texo portable restrooms provide hygienic sanitation solutions anywhere.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Portable Toilet Cabin?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to internal fittings and exterior finishes, we work with you to create a Portable Toilet Cabin that meets your exact sanitation needs—ideal for construction sites, events, remote areas, or transit hubs.'
  },
  {
    question: 'What amenities can I expect in a Portable Toilet Cabin?',
    answer: 'At Texo Prefab World, our Portable Toilet Cabins come equipped with essential features such as fresh water and waste storage tanks, proper ventilation, non-slip flooring, and plumbing provisions. Additional options include flush systems, hand wash stations, exhaust fans, mirrors, lighting, and separate male/female sections for enhanced hygiene and usability.'
  },
  {
    question: 'How do I maintain a Portable Toilet Cabin?',
    answer: 'Portable Toilet Cabins from Texo Prefab World are built with durable, low-maintenance materials. Routine upkeep includes waste disposal, water refilling, sanitation checks, and ventilation inspection. Our cabins are designed to be easily serviceable, ensuring hygiene, efficiency, and long-term use with minimal hassle.'
  },
  {
    question: 'What is special about Portable Toilet Cabins, and are they strong?',
    answer: 'A Portable Toilet Cabin stands out for its convenience, mobility, and essential role in maintaining sanitation across temporary or mobile environments. It’s an efficient solution for outdoor events, labor camps, and emergency setups where infrastructure is limited.\n\nAt Texo Prefab World, we ensure that every Portable Toilet Cabin is designed using sturdy, weather-resistant materials that can withstand frequent relocation and varied climates.\n\nIn terms of strength, these cabins are engineered with a solid steel frame and heavy-duty wall panels, ensuring resilience against moisture, corrosion, and rough handling. Our designs combine structural integrity with hygiene-focused functionality.'
  },
  {
    question: 'Are Portable Toilet Cabins eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Portable Toilet Cabins are built using eco-friendly materials and water-efficient fixtures. Options like bio-toilets, solar-powered ventilation, and recyclable construction components make them a sustainable and responsible sanitation choice.'
  },
  {
    question: 'What is the typical cost of a Portable Toilet Cabin?',
    answer: 'Texo Prefab World offers Portable Toilet Cabins at cost-effective prices. The cost depends on factors such as number of units, plumbing type, mobility, and add-on features. Whether you need a basic unit or a premium hygiene solution, we provide customizable options that suit your budget and operational requirements.'
  }
],
    trustBand: {
      citiesCovered: 300,
      completedProjects: 950,
      customerSatisfaction: 89
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Prefab Site Offices': {
    name: 'Prefab Site Offices',
    category: 'Prefab Solutions',
    icon: Factory,
    description: 'Professional prefabricated offices for construction and project sites',
    longDescription: `Prefab Site Offices provide professional working environments for construction sites and project locations. These prefabricated structures offer the functionality of permanent offices with the flexibility of temporary installations.

Each office is designed with productivity in mind, featuring proper workspaces, meeting areas, and storage solutions. The prefabricated construction ensures quick deployment and can be equipped with modern office amenities.

Our Prefab Site Offices are built to withstand construction site conditions while providing comfortable and efficient working spaces for project teams.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Rocket',
    title: 'Quick Setup & Immediate Use',
    description: 'Texo prefab site offices can be manufactured, transported, and installed in a fraction of the time compared to traditional construction, minimizing delays and downtime.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Secure & Insulated for Comfort',
    description: 'Advanced insulation, noise reduction panels, and secure locking systems ensure a comfortable, private, and safe workspace, even in noisy or extreme environments.'
  },
  {
    icon: 'Flame',
    title: 'Weather & Fire-Resistant Materials',
    description: 'Built with high-quality insulated panels, fire-resistant exteriors, and corrosion-proof structures, these offices withstand harsh climates and industrial conditions.'
  },
  {
    icon: 'Leaf',
    title: 'Energy-Efficient',
    description: 'Equipped with natural ventilation systems, and sustainable materials, Texo prefab site offices reduce carbon footprints and energy consumption.'
  },
  {
    icon: 'Construction',
    title: 'Minimal Site Disruption',
    description: 'Since 90% of construction happens off-site, Texo prefab offices cause minimal land disturbance, reducing construction pollution and material waste.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Budget-Friendly',
    description: 'With prefabricated components, Texo site offices reduce material wastage, labor costs, and construction expenses, providing a high-quality office at a lower price.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Prefab Site Office?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored Prefab Site Offices to meet your project demands. From the number of cabins, meeting rooms, and partitions to electrical layouts, storage options, and material finishes, we co-design every detail to deliver a workspace that enhances on-site productivity and comfort.'
  },
  {
    question: 'What amenities can I expect in a Prefab Site Office?',
    answer: 'Our Prefab Site Offices come equipped with essentials like thermal insulation, lighting, plug points, air conditioning support, and anti-skid flooring. You can also opt for modular workstations, manager cabins, file storage, whiteboards, and attached restrooms to create a fully functional and efficient project command center.'
  },
  {
    question: 'How do I maintain a Porta Office Cabin?',
    answer: 'Texo Prefab World uses robust, low-maintenance materials ideal for rugged work environments. Basic maintenance includes cleaning surfaces, checking wiring, and servicing air conditioning or ventilation units. The structure’s modular nature also allows for easy repair or reconfiguration based on project phase or movement.'
  },
  {
    question: 'What is special about Prefab Site Offices, and are they strong?',
    answer: 'Prefab Site Offices stand out for their speed of installation, cost-effectiveness, and adaptability to evolving site conditions.\n\nAt Texo Prefab World, each unit is built with precision-engineered steel frames, insulated wall panels, and secure locking systems—ensuring performance in remote or high-traffic areas.\n\nIn terms of strength, our offices are weather-resistant, corrosion-proof, and built to withstand vibrations and field wear, ensuring a reliable workspace throughout your project lifecycle.'
  },
  {
    question: 'Are Prefab Site Offices eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our site offices use recyclable materials, energy-efficient insulation, and can integrate solar panels and water-saving features. Off-site manufacturing reduces construction waste, making our solutions greener and faster than conventional builds.'
  },
  {
    question: 'What is the typical cost of a Prefab Site Office?',
    answer: 'Texo Prefab World offers Prefab Site Offices at flexible pricing based on office size, number of modules, and customization. Whether you need a compact supervisor unit or a full-scale project office with multiple sections, we deliver solutions that are both budget-aligned and professionally equipped.'
  }
],
    trustBand: {
      citiesCovered: 280,
      completedProjects: 720,
      customerSatisfaction: 94
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Prefab Structures': {
    name: 'Prefab Structures',
    category: 'Prefab Solutions',
    icon: Factory,
    description: 'Versatile prefabricated buildings for various commercial and industrial applications',
    longDescription: `Prefab Structures offer versatile building solutions for a wide range of applications. These prefabricated buildings combine speed of construction with the quality and durability of traditional buildings.

Each structure is engineered for specific use cases, whether it's warehousing, manufacturing, or commercial space. The modular design allows for easy expansion and modification as needs change.

Our Prefab Structures are built with high-quality materials and can be customized to meet specific architectural and functional requirements.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Rocket',
    title: 'Fast & Efficient Construction',
    description: 'Texo prefab structures are pre-engineered off-site, reducing construction time by up to 50% compared to traditional methods, allowing for rapid deployment and immediate usability.'
  },
  {
    icon: 'Blocks',
    title: 'Modular & Scalable Design',
    description: 'The structures are highly flexible, making them ideal for expansion, relocation, or repurposing, adapting to changing operational requirements without disrupting workflows.'
  },
  {
    icon: 'Leaf',
    title: 'Energy-Efficient',
    description: 'Built with sustainable materials, advanced insulation options, these structures reduce carbon footprints and lower energy consumption for long-term sustainability.'
  },
  {
    icon: 'Building2',
    title: 'Versatile Applications',
    description: 'From commercial offices and retail outlets to industrial warehouses and residential units, Texo prefab structures serve a wide range of sectors, customizable to unique industry needs.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather Resistant',
    description: 'Designed to withstand extreme weather conditions, including heavy rain, high winds, and seismic activity, Texo prefab structures ensure maximum safety and structural stability in any environment.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Cost-Effective & Low Maintenance',
    description: 'By minimizing labor, material waste, and on-site construction costs, Texo prefab structures provide a high return on investment, ensuring an economical and scalable building solution.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Prefab Structure?',
    answer: 'Absolutely! At Texo Prefab World, customization is at the core of every project. Whether it’s a residential, commercial, or industrial structure, we tailor everything—from size and spatial layout to panel finishes, roofing styles, and internal utilities—ensuring the final structure fits your purpose, site conditions, and vision precisely.'
  },
  {
    question: 'What types of Prefab Structures are available?',
    answer: 'Texo Prefab World offers a wide range of prefab structures including cottages, offices, warehouses, villas, bunk houses, toilet units, classrooms, kiosks, and security cabins. Each unit is engineered for rapid deployment, high durability, and maximum usability. Optional integrations include smart systems, climate control, and renewable energy solutions.'
  },
  {
    question: 'How do I maintain a Prefab Structure?',
    answer: 'Prefab Structures by Texo are made using premium, low-maintenance materials. Regular upkeep includes checking insulation panels, cleaning cladding surfaces, inspecting electrical and plumbing systems, and servicing HVAC if installed. Our structures are designed for hassle-free upkeep, reducing long-term maintenance costs and downtime.'
  },
  {
    question: 'What is special about Prefab Structures, and are they strong?',
    answer: 'Prefab Structures stand out for their speed of construction, versatility, and reusability across diverse sectors like hospitality, education, construction, and healthcare.\n\nAt Texo Prefab World, we use galvanized steel, PUF panels, and weatherproof materials for every build—crafted with CNC precision to <1 mm tolerances.\n\nIn terms of strength, our prefab units are engineered to withstand wind loads, seismic movement, and environmental extremes, ensuring reliability and safety in both temporary and permanent installations.'
  },
  {
    question: 'Are Prefab Structures eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our prefab solutions use recyclable materials, smart insulation for reduced energy use, and allow integration with solar power and rainwater harvesting. Off-site construction minimizes waste and site disruption, making our structures environmentally conscious and efficient.'
  },
  {
    question: 'What is the typical cost of a Prefab Structure?',
    answer: 'Texo Prefab World offers prefab solutions at flexible price points based on structure type, size, material selection, and custom features. Whether you require a compact utility unit or a full-scale operational facility, we provide optimized solutions to match your budget and functionality needs.'
  }
],
    trustBand: {
      citiesCovered: 320,
      completedProjects: 850,
      customerSatisfaction: 93
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Prefabricated Accommodation': {
    name: 'Prefabricated Accommodation',
    category: 'Prefab Solutions',
    icon: Factory,
    description: 'High-quality prefabricated housing solutions for residential and temporary needs',
    longDescription: `Prefabricated Accommodation provides comfortable and efficient housing solutions using advanced prefabrication techniques. These structures offer the quality of traditional homes with the speed and cost-effectiveness of modular construction.

Each accommodation unit is designed for comfortable living, featuring proper insulation, modern amenities, and flexible layouts. The prefabricated approach ensures consistent quality and rapid deployment.

Our Prefabricated Accommodation is ideal for housing developments, temporary communities, and emergency situations requiring quick housing solutions.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Rocket',
    title: 'Hassle-Free Installation',
    description: 'Texo prefabricated accommodations arrive 90% pre-assembled, requiring minimal on-site work, reducing disruptions, and ensuring a swift and hassle-free setup.'
  },
  {
    icon: 'Truck',
    title: 'Portable & Relocatable Housing',
    description: 'Designed for easy transport and reassembly, these units provide housing solutions that move with the project, making them ideal for temporary workforce deployments.'
  },
  {
    icon: 'Leaf',
    title: 'Eco-Friendly & Energy-Efficient',
    description: 'Equipped with natural ventilation systems, and sustainable materials, Texo prefabricated accommodation reduces carbon footprints and energy consumption.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Secure & Insulated Comfort',
    description: 'With noise reduction technology, advanced insulation, and fire-resistant materials, Texo ensures a safe, peaceful, and climate-controlled living experience.'
  },
  {
    icon: 'Wrench',
    title: 'Low Maintenance',
    description: 'Built with high-quality, rust-proof materials, Texo prefab accommodations require minimal upkeep and have a lifespan of several decades.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Cost-Optimized',
    description: 'With low maintenance, energy savings, and reusable modular components, Texo prefab accommodations provide a high return on investment for businesses and organizations.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Prefabricated Accommodation?',
    answer: 'Absolutely! Texo Prefab World offers fully customizable Prefabricated Accommodation units to suit your project or workforce needs. From the number of rooms and layout flow to interior finishes, bed types, and attached utilities, we design tailored setups for construction sites, defense camps, student housing, or staff quarters.'
  },
  {
    question: 'What amenities can I expect in Prefabricated Accommodation?',
    answer: 'Our accommodations come equipped with insulated wall panels, lighting, ventilation, and durable flooring. Depending on your requirements, you can opt for bunk beds, modular wardrobes, attached bathrooms, air conditioning, water heaters, dining areas, and workspaces—ensuring complete comfort for short- or long-term stays.'
  },
  {
    question: 'How do I maintain Prefabricated Accommodation units?',
    answer: 'Texo Prefab World uses low-maintenance, durable materials in all our accommodation units. Regular maintenance involves surface cleaning, plumbing and electrical checks, and minor upkeep of HVAC or sanitary fittings. Built for high usage and rough-site conditions, our accommodations deliver reliability with minimal upkeep.'
  },
  {
    question: 'What is special about Prefabricated Accommodation, and are they strong?',
    answer: 'Prefabricated Accommodation solutions are ideal for rapid deployment and flexible scaling across industries such as construction, mining, education, and remote operations.\n\nAt Texo Prefab World, every unit is precision-built with a steel frame structure, fire-retardant PUF panels, and high-grade interiors to ensure strength and thermal comfort.\n\nIn terms of durability, our accommodations can withstand wind loads, temperature extremes, and rough terrains, offering both comfort and structural stability even in demanding environments.'
  },
  {
    question: 'Are Prefabricated Accommodations eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our accommodation units are built with recyclable materials, insulated to reduce energy consumption, and compatible with solar power and rainwater harvesting systems. Off-site manufacturing further reduces environmental impact and site disturbance.'
  },
  {
    question: 'What is the typical cost of Prefabricated Accommodation?',
    answer: 'Texo Prefab World provides scalable pricing depending on occupancy capacity, design complexity, and facilities required. Whether it’s a compact 4-person unit or a full-scale 50-person housing block with amenities, we deliver cost-effective, durable solutions tailored to your operational needs and budgets.'
  }
],
    trustBand: {
      citiesCovered: 250,
      completedProjects: 650,
      customerSatisfaction: 95
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Prefab House': {
    name: 'Prefab House',
    category: 'Prefab Solutions',
    icon: Factory,
    description: 'Complete prefabricated homes offering modern living with traditional appeal',
    longDescription: `Prefab Houses combine the charm of traditional homes with the efficiency of modern prefabrication. These complete homes are manufactured off-site and assembled on location, ensuring quality control and rapid construction.

Each Prefab House features modern design elements, sustainable materials, and customizable interiors. The prefabricated construction method reduces waste and construction time while maintaining high standards of quality.

Our Prefab Houses are designed for comfortable family living, with spacious layouts and modern amenities that rival traditional construction.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Rocket',
    title: 'Fast & Efficient Construction',
    description: 'Prefab homes are manufactured off-site and assembled in a fraction of the time compared to traditional houses, ensuring quick project completion.'
  },
  {
    icon: 'Blocks',
    title: 'Customizable & Scalable Design',
    description: 'Texo Prefab Houses can be tailored to any style, size, and layout, from tiny homes and urban apartments to spacious villas and eco-friendly retreats.'
  },
  {
    icon: 'Leaf',
    title: 'Energy-Efficient & Sustainable',
    description: 'Our prefab houses incorporate energy-efficient insulation, and smart climate control systems through ventilation, reducing energy consumption and environmental impact.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Cost-Effective & Budget-Friendly',
    description: 'With lower labor costs, reduced material wastage, and minimal construction delays, prefab houses are a high-value investment for homeowners and businesses.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Durable & Weather-Resistant',
    description: 'Texo’s prefab structures are built to withstand harsh climates, seismic activity, and extreme weather conditions, ensuring longevity and safety.'
  },
  {
    icon: 'Construction',
    title: 'Minimal Site Disruption',
    description: 'Unlike traditional construction, prefab houses cause less noise, pollution, and material wastage, making them an environmentally responsible housing solution.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Prefab House?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Prefab House that meets your exact requirements, ensuring a comfortable, durable, and aesthetically elevated living space for luxurious weekend getaways or full-time residence.'
  },
  {
    question: 'What amenities can I expect in a Prefab House?',
    answer: 'At Texo Prefab World, our Prefab Houses come equipped with essential features such as pre-installed electrical systems, thermal insulation, climate control, soundproofing, and premium flooring. Additional options include designer interiors, expansive decks, smart home features, modular kitchens, and premium bath fittings to enhance lifestyle and comfort.'
  },
  {
    question: 'How do I maintain a Prefab House?',
    answer: 'Prefab Houses from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes inspecting electrical fittings, checking HVAC systems, and ensuring the structural integrity of walls and flooring. Our structures are designed for longevity, offering a hassle-free and refined living experience.'
  },
  {
    question: 'What is special about Prefab Houses, and are they strong?',
    answer: 'A Prefab House stands out for its elegance and adaptability, offering a premium retreat that blends modern architecture with nature. Ideal for private estates, weekend homes, or rental stays, its modular design ensures fast construction, seamless integration, and full customization for luxury living.\n\nAt Texo Prefab World, we ensure that every Prefab House is engineered with precision, using premium materials to withstand varied environmental conditions while maintaining optimal aesthetics and energy efficiency.\n\nIn terms of strength, our Prefab Houses are exceptionally durable and weather-resistant. Their robust steel frame and insulated panels ensure resilience against extreme temperatures, wind loads, and corrosion. With Texo Prefab World’s expert craftsmanship, our Prefab Houses offer enduring style, comfort, and structural integrity.'
  },
  {
    question: 'Are Prefab Houses eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Prefab Houses are designed with eco-friendly materials and energy-efficient systems. Features like PUF insulated walls, LED lighting, rainwater harvesting, and solar integration make them a luxurious yet environmentally responsible choice.'
  },
  {
    question: 'What is the typical cost of a Prefab House?',
    answer: 'Texo Prefab World offers Prefab Houses at competitive prices in the premium prefab segment. The cost depends on factors like size, finishes, layout complexity, and personalization. Whether you seek a compact villa or a sprawling estate, we provide elegant solutions aligned with your vision, land, and budget.'
  }
],
    trustBand: {
      citiesCovered: 200,
      completedProjects: 480,
      customerSatisfaction: 96
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Prefab Schools': {
    name: 'Prefab Schools',
    category: 'Prefab Solutions',
    icon: Factory,
    description: 'Educational facilities built with prefabricated technology for quick deployment',
    longDescription: `Prefab Schools provide educational facilities that can be rapidly deployed to meet growing demand or emergency situations. These prefabricated structures offer modern learning environments with the speed of modular construction.

Each school is designed with educational needs in mind, featuring proper classroom layouts, safety features, and modern amenities. The prefabricated approach ensures consistent quality and allows for quick expansion as student populations grow.

Our Prefab Schools are built to educational standards and can be equipped with modern teaching technology and facilities.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'ShieldCheck',
    title: 'Safe and Child-Centric Design',
    description: 'Safety is at the core of Texo’s design philosophy. With non-toxic materials, slip-resistant flooring, rounded corners, and fire-resistant structures, Texo prefab schools create an environment where students can thrive worry-free.'
  },
  {
    icon: 'Building2',
    title: 'Unmatched Durability',
    description: 'Texo’s prefab schools are built with premium materials, steel and insulated panels, ensuring durability and safety against extreme weather conditions, ensuring safety for students and staff alike.'
  },
  {
    icon: 'Leaf',
    title: 'Superior Energy Efficiency',
    description: 'With energy-efficient insulation and smart ventilation systems, Our prefab schools minimize energy consumption while maintaining a comfortable learning environment. This not only saves costs but also promotes eco-friendly education.'
  },
  {
    icon: 'Blocks',
    title: 'Flexible and Scalable Designs',
    description: 'Our modular approach allows for easy expansion. Start with a few classrooms and grow into a larger campus effortlessly—Texo prefab schools are designed to adapt to your evolving needs.'
  },
  {
    icon: 'Rocket',
    title: 'Quick Assembly, Minimal Disruption',
    description: 'Our prefab schools are designed and assembled in record time, ensuring educational institutions are up and running without delays.The cabins are then transported to your site for a seamless plug-and-play setup, minimizing on-site work and environmental impact.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Cost-Effective Excellence',
    description: 'We offer a cost-efficient alternative to traditional construction, reducing expenses on materials, labor, and long-term maintenance, making them ideal for budget-conscious projects without sacrificing quality.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Prefab School?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Prefab School that aligns perfectly with your educational requirements and vision for modern learning environments.'
  },
  {
    question: 'What amenities can I expect in a Prefab School?',
    answer: 'At Texo Prefab World, our Prefab Schools come equipped with features such as electrical and plumbing systems, climate control, insulated walls, and customizable classroom layouts. Additional options include specialized spaces like science labs, libraries, play areas, and staff rooms to ensure the facility is fully equipped for quality education.'
  },
  {
    question: 'How do I maintain a Prefab School?',
    answer: 'Prefab Schools from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes maintaining the HVAC system, checking electrical connections, and regular cleaning to preserve the facility’s appearance and functionality. Our schools are designed to be durable and easy to maintain, ensuring long-term usability.'
  },
  {
    question: 'What is Prefab School special about and is it strong?',
    answer: 'A Prefab School stands out for its efficient and adaptable design, offering both functionality and flexibility. Its prefabricated structure allows for rapid installation and customization, making it ideal for growing communities or areas in need of quick educational infrastructure. The design maximizes space utilization while ensuring a safe, comfortable, and inspiring environment for students and staff.\n\nAt Texo Prefab World, we ensure that every Prefab School is built with precision and high-quality materials, seamlessly combining innovation with practicality to support modern education.\n\nIn terms of strength, Prefab Schools are exceptionally robust. Their solid construction ensures stability and resistance to environmental factors like weather, heavy use, and wear. With Texo Prefab World’s expert engineering, our prefab schools are built to last, providing safe and durable spaces for learning.'
  },
  {
    question: 'Are Prefab Schools eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Prefab Schools are designed with eco-friendly materials and energy-efficient systems. Options like solar panels, rainwater harvesting, and energy-saving lighting make them a sustainable choice for educational institutions seeking to reduce their environmental impact.'
  },
  {
    question: 'What is the typical cost of a Prefab School?',
    answer: 'Texo Prefab World offers Prefab Schools at competitive prices. The cost depends on factors like size, features, and customization. Whether you need a compact primary school or a larger facility with specialized classrooms, we have options to meet your budget and educational needs.'
  }
],
    trustBand: {
      citiesCovered: 180,
      completedProjects: 320,
      customerSatisfaction: 97
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Clinic Cabin': {
    name: 'Clinic Cabin',
    category: 'Specialized Structures',
    icon: Briefcase,
    description: 'Medical facilities in portable cabins for healthcare services',
    longDescription: `Clinic Cabins provide accessible healthcare facilities in portable formats. These specialized structures bring medical services to remote areas or temporary locations where traditional clinics aren't feasible.

Each Clinic Cabin is equipped with medical examination rooms, waiting areas, and basic medical equipment setups. The design ensures proper hygiene, ventilation, and accessibility standards required for healthcare facilities.

Our Clinic Cabins are designed for quick deployment and can be equipped with solar power and other off-grid capabilities for remote locations.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'ShieldPlus',
    title: 'Hygiene-Centric Design',
    description: 'Equipped with anti-bacterial surfaces, seamless flooring, and proper waste management systems, Texo portable clinic cabins ensure a clean, infection-free environment.'
  },
  {
    icon: 'Rocket',
    title: 'Rapid Deployment',
    description: 'Built in Texo’s advanced factories, these cabins can be deployed quickly, minimizing lead times for medical infrastructure in emergencies or underserved areas.'
  },
  {
    icon: 'HeartPulse',
    title: 'Patient-Centered Comfort',
    description: 'The cabins are designed with patient well-being in mind—large windows for natural light, noise-insulated interiors, and other necessities foster a calming atmosphere.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Durable and Weather-Resistant',
    description: 'Constructed from premium materials, steel and weather-resistant panels, these cabins can withstand harsh climates while maintaining structural integrity.'
  },
  {
    icon: 'Accessibility',
    title: 'Seamless Accessibility',
    description: 'Compliant with universal design principles, the clinics include ramps, wide doors, and barrier-free layouts, ensuring accessibility for all patients, including those with disabilities.'
  },
  {
    icon: 'SlidersHorizontal',
    title: 'Customizable Spaces',
    description: 'Tailored for various medical purposes, Texo clinic cabins can be designed to house consultation rooms, diagnostic labs, emergency wards, or even mobile health units.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],

    faq: [
  {
    question: 'Can I customize my Clinic Cabin?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Portable Clinic Cabin that aligns perfectly with your healthcare needs and operational goals.'
  },
  {
    question: 'What amenities can I expect in a Clinic Cabin?',
    answer: 'At Texo Prefab World, our Portable Clinic Cabins come equipped with essential features such as pre-installed electrical and plumbing systems, HVAC units, insulated walls, and customizable interiors. Additional options include medical-grade flooring, cabinetry, and equipment integration to ensure your clinic is ready for immediate use.'
  },
  {
    question: 'How do I maintain a Clinic Cabin?',
    answer: 'Portable Clinic Cabins from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes cleaning surfaces, inspecting HVAC and plumbing systems, and maintaining medical equipment. Our cabins are designed for long-term durability, minimizing maintenance efforts while ensuring reliability.'
  },
  {
    question: 'What is Clinic Cabin special about and is it strong?',
    answer: 'A Portable Clinic Cabin stands out for its compact and functional design, offering both mobility and practicality. Its prefabricated structure allows for rapid deployment and easy relocation, making it ideal for healthcare delivery in remote areas or emergency situations. The design maximizes space efficiency while maintaining a clean, professional, and hygienic environment.\n\nAt Texo Prefab World, we ensure that every Portable Clinic Cabin is built with precision and high-quality materials, combining functionality with modern healthcare standards.\n\nIn terms of strength, Portable Clinic Cabins are exceptionally durable. Their sturdy construction ensures stability and resistance to external forces like weather, transportation stress, and wear. With Texo Prefab World’s expert engineering, our clinic cabins are not only portable but also robust, reliable, and built to withstand demanding healthcare environments.'
  },
  {
    question: 'Are Clinic Cabins eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Portable Clinic Cabins are designed with eco-friendly materials and energy-efficient systems. Options like solar power integration, rainwater harvesting, and energy-saving climate control systems make them a sustainable solution for modern healthcare.'
  },
  {
    question: 'What is the typical cost of a Clinic Cabin?',
    answer: 'Texo Prefab World offers Portable Clinic Cabins at competitive prices. The cost depends on factors like size, medical equipment requirements, and customization. Whether you’re looking for a basic unit or a fully equipped clinic, we have options to meet your budget and healthcare needs.'
  }
],
    trustBand: {
      citiesCovered: 220,
      completedProjects: 180,
      customerSatisfaction: 98
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Restaurant Cabin': {
    name: 'Restaurant Cabin',
    category: 'Specialized Structures',
    icon: Briefcase,
    description: 'Portable restaurant facilities for food service operations',
    longDescription: `Restaurant Cabins offer complete food service facilities in portable formats. These specialized structures provide professional kitchen and dining areas for various food service applications.

Each Restaurant Cabin includes commercial kitchen equipment, dining areas, and proper ventilation systems. The design ensures food safety standards and comfortable dining experiences.

Our Restaurant Cabins are ideal for events, construction sites, resorts, and temporary food service needs.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Building2',
    title: 'Architectural Elegance',
    description: 'Texo Prefab Restaurant are thoughtfully designed to reflect contemporary architectural styles. Whether sleek minimalism or rustic charm, these cabins are built to stand out, creating iconic dining spaces.'
  },
  {
    icon: 'BadgeCheck',
    title: 'High-End Aesthetics for Brand Identity',
    description: 'Unique exterior designs and branding options help restaurants establish a strong visual identity, making Texo cabins a standout marketing asset.'
  },
  {
    icon: 'Lamp',
    title: 'Innovative Dining Ambiance',
    description: 'With customizable lighting systems, decorative finishes, and panoramic windows, these cabins provide a unique dining ambiance tailored to specific themes or concepts.'
  },
  {
    icon: 'PackageOpen',
    title: 'Integrated Storage and Utility Areas',
    description: 'Hidden storage units and utility spaces make operations efficient, ensuring that staff can manage supplies and equipment discreetly without interrupting the dining experience.'
  },
  {
    icon: 'LayoutPanelTop',
    title: 'Customizable Layouts',
    description: 'From open dining halls to cozy private booths, these cabins offer customizable layouts to meet the needs of various restaurant types, ensuring seamless service flow and enhanced guest experiences.'
  },
  {
    icon: 'ShieldPlus',
    title: 'Hygienic Interior Surfaces',
    description: 'Easy-to-clean surfaces, antibacterial wall panels, and specialized drainage systems uphold the highest standards of hygiene, essential for food safety compliance.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Prefab Restaurant?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Prefab Restaurant Cabin that aligns perfectly with your culinary vision and operational requirements.'
  },
  {
    question: 'What amenities can I expect in a Prefab Restaurant?',
    answer: 'At Texo Prefab World, our Prefab Restaurant Cabins come equipped with features like electrical and plumbing systems, HVAC units, insulated walls, and customizable interiors. Additional options include commercial-grade kitchen setups, seating arrangements, lighting solutions, and stylish exteriors to ensure your restaurant is both functional and inviting.'
  },
  {
    question: 'How do I maintain a Prefab Restaurant?',
    answer: 'Prefab Restaurant Cabins from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes cleaning surfaces, maintaining kitchen equipment, and inspecting plumbing and ventilation systems. Our cabins are designed for durability, ensuring long-term functionality with minimal effort.'
  },
  {
    question: 'What is Prefab Restaurant special about and is it strong?',
    answer: 'A Prefab Restaurant Cabin stands out for its modern and versatile design, offering both practicality and aesthetic appeal. Its prefabricated structure allows for quick installation and easy customization, making it ideal for new restaurant ventures, pop-ups, or expanding existing businesses. The design optimizes space for kitchen, dining, and storage areas while maintaining a warm and welcoming atmosphere.\n\nAt Texo Prefab World, we ensure that every Prefab Restaurant Cabin is built with precision and high-quality materials, combining style with functionality to create an unforgettable dining experience.\n\nIn terms of strength, Prefab Restaurant Cabins are exceptionally durable. Their sturdy construction ensures stability and resistance to external factors like weather, wear, and heavy foot traffic. With Texo Prefab World’s expert engineering, our restaurant cabins are not only visually appealing but also robust and built to endure demanding hospitality environments.'
  },
  {
    question: 'Are Prefab Restaurants eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Prefab Restaurant Cabins are designed with eco-friendly materials and energy-efficient systems. Options like solar panels, energy-saving kitchen appliances, and sustainable construction materials make them an excellent choice for environmentally conscious restaurateurs.'
  },
  {
    question: 'What is the typical cost of a Prefab Restaurant?',
    answer: 'Texo Prefab World offers Prefab Restaurant Cabins at competitive prices. The cost depends on factors like size, features, and customization. Whether you need a compact café or a full-scale dining facility, we have options to suit your budget and culinary goals.'
  }
],
    trustBand: {
      citiesCovered: 160,
      completedProjects: 140,
      customerSatisfaction: 95
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Smoking Room': {
    name: 'Smoking Room',
    category: 'Specialized Structures',
    icon: Briefcase,
    description: 'Designated smoking areas with proper ventilation and safety features',
    longDescription: `Smoking Rooms provide designated areas for smoking with proper ventilation and safety systems. These specialized structures ensure compliance with smoking regulations while providing comfortable environments for smokers.

Each Smoking Room features advanced ventilation systems that effectively remove smoke and odors, maintaining air quality and safety. The design includes comfortable seating, lighting, and safety features.

Our Smoking Rooms are suitable for offices, hotels, restaurants, and public facilities requiring designated smoking areas.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Wind',
    title: 'Advanced Ventilation Systems',
    description: 'Equipped with high-efficiency air filtration and ventilation, Texo Smoking Rooms maintain clean indoor air, minimizing smoke exposure to non-smokers.'
  },
  {
    icon: 'Flame',
    title: 'Fire Safety Assurance',
    description: 'Crafted with fire-resistant materials, integrated smoke detectors, sprinkler systems, and advanced ventilation, Texo Smoking Rooms ensure unparalleled safety, even in high-risk environments, safeguarding occupants and surroundings.'
  },
  {
    icon: 'LayoutGrid',
    title: 'Compact and Space-Efficient',
    description: 'Optimized for tight spaces, Texo Smoking Rooms integrate seamlessly into any environment, offering advanced ventilation, fire safety features, and customizable designs without compromising functionality or aesthetic appeal.'
  },
  {
    icon: 'Rocket',
    title: 'Quick Installation',
    description: 'Our prefab technology ensures rapid setup with minimal disruption, making it an ideal solution for businesses and public spaces.'
  },
  {
    icon: 'Armchair',
    title: 'Enhanced User Comfort',
    description: 'The rooms are ergonomically designed with comfortable seating and temperature control options for a pleasant user experience.'
  },
  {
    icon: 'Wrench',
    title: 'Low Maintenance',
    description: 'The high-quality materials used by Texo are durable, stain-resistant, and easy to clean, reducing upkeep time and cost.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Smoking Rooms?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Prefab Smoking Room that aligns perfectly with your requirements for comfort and functionality.'
  },
  {
    question: 'What amenities can I expect in Smoking Rooms?',
    answer: 'At Texo Prefab World, our Prefab Smoking Rooms come equipped with modern amenities such as high-efficiency ventilation systems, fire-resistant materials, and customizable interiors. Whether it’s for a commercial space, office, or public area, we ensure your smoking room meets all necessary standards and expectations.'
  },
  {
    question: 'How do I maintain Smoking Rooms?',
    answer: 'Prefab Smoking Rooms from Texo Prefab World are built with low-maintenance, high-quality materials. Regular upkeep includes cleaning ventilation systems, ensuring proper air circulation, and inspecting fire-resistant components. Our smoking rooms are designed to minimize maintenance while ensuring durability and functionality.'
  },
  {
    question: 'What is Smoking Rooms special about and is it strong?',
    answer: 'A Prefab Smoking Room stands out for its compact and efficient design, offering both practicality and compliance. Its advanced ventilation systems efficiently remove smoke, creating a safe and comfortable environment. The design optimizes space while maintaining a modern and professional aesthetic.\n\nAt Texo Prefab World, we ensure that every Prefab Smoking Room is built with precision and high-quality materials to combine functionality with user comfort.\n\nIn terms of strength, Prefab Smoking Rooms are exceptionally robust. Their sturdy construction ensures stability and resistance to environmental factors like weather and wear. With Texo Prefab World’s expert engineering, our smoking rooms are not only safe and reliable but also built to last.'
  },
  {
    question: 'Are Smoking Rooms eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Prefab Smoking Rooms are designed with eco-friendly materials and energy-efficient systems. Features like advanced smoke filtration, low-energy ventilation units, and sustainable building materials make them a smart choice for environmentally conscious spaces.'
  },
  {
    question: 'What is the typical cost of Smoking Rooms?',
    answer: 'Texo Prefab World offers Prefab Smoking Rooms at competitive prices. The cost depends on factors like size, features, and customization. Whether you’re looking for a basic, budget-friendly model or a premium smoking room with advanced features, we have options to suit your needs.'
  }
],
    trustBand: {
      citiesCovered: 190,
      completedProjects: 220,
      customerSatisfaction: 92
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Electrical Room': {
    name: 'Electrical Room',
    category: 'Specialized Structures',
    icon: Briefcase,
    description: 'Secure electrical equipment enclosures with safety and ventilation features',
    longDescription: `Electrical Rooms provide secure and safe enclosures for electrical equipment and systems. These specialized structures protect critical electrical infrastructure while ensuring proper ventilation and safety standards.

Each Electrical Room is designed with electrical safety in mind, featuring proper grounding, ventilation, and fire suppression systems. The construction materials provide electromagnetic shielding and protection from environmental factors.

Our Electrical Rooms are essential for power distribution, data centers, and industrial facilities requiring secure electrical infrastructure.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Zap',
    title: 'Built for High Voltage Systems',
    description: 'Engineered to house heavy-duty equipment, these prefabs can handle high-voltage and industrial-grade electrical systems, ensuring optimal performance without compromising safety.'
  },
  {
    icon: 'Shield',
    title: 'Integrated Surge Protection',
    description: 'Incorporates surge protectors and grounding systems to safeguard equipment from power spikes and electrical surges, ensuring uninterrupted operations.'
  },
  {
    icon: 'Flame',
    title: 'Fire Safety Compliance',
    description: 'Equipped with fire-resistant panels, smoke detectors, and ventilation systems, these prefabs are designed to contain and prevent electrical fires, meeting stringent safety regulations.'
  },
  {
    icon: 'CloudRain',
    title: 'Robust Weather Resistance',
    description: 'Built with galvanized steel and weatherproof materials, Texo Electric Room Prefabs protect sensitive electrical systems from extreme weather conditions, ensuring uninterrupted operation in rain, snow, or high temperatures.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Corrosion-Resistant Frames',
    description: 'Frame’s and panels are treated with anti-corrosion coatings, ensuring longevity in coastal and high-humidity areas.'
  },
  {
    icon: 'Rocket',
    title: 'Easy Installation and Relocation',
    description: 'With a plug-and-play setup, these prefabs are pre-assembled at Texo’s advanced facility, allowing quick on-site installation. The lightweight, modular design makes relocation seamless, saving time and cost.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Prefab Electric Room?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Prefab Electrical Room that aligns perfectly with your technical requirements and operational needs.'
  },
  {
    question: 'What amenities can I expect in a Prefab Electric Room?',
    answer: 'At Texo Prefab World, our Prefab Electrical Rooms come equipped with a range of advanced features such as pre-installed electrical panels, cable management systems, insulation, ventilation, and customizable interiors. Whether it’s for industrial, commercial, or remote applications, we ensure your electrical room meets your unique specifications.'
  },
  {
    question: 'How do I maintain a Prefab Electric Room?',
    answer: 'Prefab Electrical Rooms from Texo Prefab World are built with low-maintenance, high-quality materials. Regular upkeep includes inspections of electrical connections, ventilation systems, and structural components. Our electrical rooms are designed for durability, ensuring maintenance remains simple and efficient.'
  },
  {
    question: 'What is special about Prefab Electric Rooms, and are they strong?',
    answer: 'A Prefab Electrical Room stands out for its compact and robust design, offering both practicality and reliability. Its modular structure ensures ease of transportation and quick installation, making it ideal for various industrial and commercial environments. The design optimizes space while maintaining a safe and secure setup for critical electrical systems. At Texo Prefab World, we ensure that every Prefab Electrical Room is built with precision and high-quality materials, seamlessly combining functionality with reliability. In terms of strength, Prefab Electrical Rooms are exceptionally durable. Their solid construction ensures stability and resistance against external forces like weather, vibration, and other environmental conditions. With Texo Prefab World’s expert engineering, our Prefab Electrical Rooms are not only efficient but also exceptionally strong and built to last.'
  },
  {
    question: 'Are Prefab Electric Rooms eco-friendly?',
    answer: 'Sustainability is a priority at Texo Prefab World. We offer eco-friendly options such as energy-efficient ventilation, green insulation, and integrated solar systems for our Prefab Electrical Rooms.'
  },
  {
    question: 'What is the typical cost of a Prefab Electric Room?',
    answer: 'Our Prefab Electrical Rooms are competitively priced, with costs varying based on size, features, and customization. Whether you need a standard configuration or a fully customized solution, we have options to suit your budget and technical requirements.'
  },
],
    trustBand: {
      citiesCovered: 240,
      completedProjects: 300,
      customerSatisfaction: 96
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Security Cabins': {
    name: 'Security Cabins',
    category: 'Security Solutions',
    icon: FileText,
    description: 'Professional security posts with monitoring and communication equipment',
    longDescription: `Security Cabins serve as command centers for security operations, providing professional environments for security personnel. These specialized structures combine comfort with functionality for effective security monitoring.

Each Security Cabin is equipped with communication systems, monitoring equipment, and emergency response capabilities. The design ensures visibility, safety, and efficient operations for security teams.

Our Security Cabins are used in residential complexes, commercial facilities, and public spaces requiring professional security presence.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'SlidersHorizontal',
    title: 'Customizable to Fit Diverse Needs',
    description: 'Texo’s security cabins are tailored to operational requirements, offering features like pre-installed wiring, reinforced locks, and ergonomic layouts, ensuring suitability across industries.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Superior Structural Integrity',
    description: 'MS Cabins offer unmatched strength, ACP Cabins balance lightweight construction with durability, and PUF Cabins provide robust weather resistance, ensuring long-term reliability in any setting.'
  },
  {
    icon: 'VolumeX',
    title: 'Thermal and Acoustic Insulation',
    description: 'PUF and ACP Cabins are designed to maintain comfortable interior temperatures and minimize noise, ensuring a productive environment for security personnel in any climate.'
  },
  {
    icon: 'CloudRain',
    title: 'Weatherproof Performance',
    description: 'Each cabin is engineered to withstand extreme weather conditions, including rain, humidity, wind, and scorching heat. Their construction guarantees zero leaks and long-lasting reliability in any climate.'
  },
  {
    icon: 'Truck',
    title: 'Mobility and Quick Installation',
    description: 'These cabins are designed for easy transportation and rapid on-site assembly without heavy machinery, making them perfect for both permanent and temporary setups.'
  },
  {
    icon: 'Wrench',
    title: 'Low Maintenance and Longevity',
    description: 'The smooth surfaces and corrosion-resistant coatings on MS,PUF and ACP Cabins ensure easy cleaning and minimal upkeep, extending their lifespan.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Security Cabin?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Security Cabin that meets your specific needs. Whether it’s MS (Mild Steel), ACP (Aluminum Composite Panel), or PUF (Polyurethane Foam) cabins, we ensure that the design aligns with your operational requirements and site conditions.'
  },
  {
    question: 'What amenities can I expect in a Security Cabin?',
    answer: 'At Texo Prefab World, our Security Cabins come equipped with essential features such as pre-installed electrical fittings, proper ventilation, insulated walls, and durable flooring. We offer customizable options like sliding windows, internal workstations, and integrated storage to ensure the cabin meets all your security and surveillance needs. Our cabins can be built using MS for durability, ACP for a sleek look, or PUF for superior insulation.'
  },
  {
    question: 'How do I maintain a Security Cabin?',
    answer: 'Security Cabins from Texo Prefab World are built with low-maintenance, high-quality materials. Regular upkeep includes cleaning, inspecting electrical connections, and ensuring proper ventilation. Our MS cabins are known for their rugged durability, ACP cabins for their low maintenance and weather resistance, and PUF cabins for their energy efficiency and thermal insulation.'
  },
  {
    question: 'What is special about Security Cabins, and are they strong?',
    answer: 'A Security Cabin stands out for its compact and functional design, offering both portability and durability. Its prefabricated structure enables quick installation and easy relocation, making it ideal for construction sites, residential complexes, or commercial spaces. The design optimizes space while maintaining a secure, comfortable, and ergonomic environment for personnel. At Texo Prefab World, we ensure that every Security Cabin is built with precision and high-quality materials, tailored to provide maximum utility and comfort while enhancing site security. In terms of strength, our Security Cabins are exceptionally robust. MS cabins offer unmatched strength and durability, ACP cabins provide a lightweight yet sturdy solution with a modern finish, and PUF cabins ensure thermal insulation and energy efficiency. With Texo Prefab World’s expert engineering, all our cabins are designed to withstand environmental stresses while delivering reliable performance.'
  },
  {
    question: 'Are Security Cabins eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Security Cabins are designed with eco-friendly materials and energy-efficient systems. PUF cabins, in particular, are highly energy-efficient, reducing the need for additional heating or cooling. This makes them a sustainable option for modern security solutions.'
  },
  {
    question: 'What is the typical cost of a Security Cabin?',
    answer: 'Texo Prefab World offers Security Cabins at competitive prices. The cost depends on factors like size, features, and material type (MS, ACP, or PUF). Whether you need a basic security post or a fully equipped cabin, we have options to suit your budget and security requirements.'
  },
],
    trustBand: {
      citiesCovered: 280,
      completedProjects: 450,
      customerSatisfaction: 94
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Toll Booth': {
    name: 'Toll Booth',
    category: 'Security Solutions',
    icon: FileText,
    description: 'Efficient toll collection facilities with modern payment systems',
    longDescription: `Toll Booths provide efficient toll collection facilities for highways and bridges. These specialized structures combine functionality with modern payment technology for smooth traffic flow.

Each Toll Booth is designed for quick transactions, featuring multiple payment options, safety barriers, and communication systems. The construction ensures durability and visibility for toll operators.

Our Toll Booths are equipped with modern payment systems including cash, card, and electronic toll collection capabilities.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'LayoutGrid',
    title: 'Compact, Space-Efficient Design',
    description: 'Optimized for tight spaces, these booths offer functionality without consuming excess real estate, allowing easy installation along highways, bridges, and parking zones.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Enhanced Security',
    description: 'Equipped with reinforced walls, tempered glass windows, and secure locking systems, the booths provide toll operators with a safe working environment even in remote or high-risk areas.'
  },
  {
    icon: 'Cctv',
    title: 'Integrated Surveillance Systems',
    description: 'Toll booths can be equipped with CCTV cameras and monitoring devices, ensuring real-time security and surveillance for both operators and vehicles.'
  },
  {
    icon: 'VolumeX',
    title: 'Soundproof Interiors',
    description: 'Insulated walls and doors reduce noise pollution from high-traffic areas, creating a quieter environment for toll operators to focus and work efficiently.'
  },
  {
    icon: 'Thermometer',
    title: 'Heat and Temperature Control',
    description: 'Equipped with insulated panels, HVAC systems, and sun-resistant coatings, these toll booths ensure comfortable working conditions even in extreme climates.'
  },
  {
    icon: 'Rocket',
    title: 'Quick Assembly, Minimal Disruption',
    description: 'Prefabrication is completed entirely in our advanced factory, ensuring precision and quality. The cabins are then transported to your site for a seamless plug-and-play setup, minimizing on-site work and environmental impact.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],

    faq: [
  {
    question: 'Can I customize my Toll Booth?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Toll Booth that aligns perfectly with operational requirements and site-specific needs.'
  },
  {
    question: 'What amenities can I expect in a Toll Booth?',
    answer: 'At Texo Prefab World, our Toll Booths come equipped with essential features such as pre-installed electrical fittings, insulated walls, proper ventilation, and ergonomic workspaces. Additional options include sliding windows, counters, and integrated payment systems to ensure smooth toll collection and efficient operations.'
  },
  {
    question: 'How do I maintain a Toll Booth?',
    answer: 'Toll Booths from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes cleaning, inspecting electrical systems, and ensuring proper ventilation. Our designs focus on durability, ensuring long-term performance with minimal maintenance.'
  },
  {
    question: 'What is special about Toll Booths, and are they strong?',
    answer: 'A Toll Booth stands out for its compact and efficient design, offering both functionality and reliability. Its prefabricated structure allows for quick installation and easy relocation, making it ideal for highways, bridges, or other toll collection points. The design optimizes space for equipment and personnel while ensuring safety and comfort. At Texo Prefab World, we ensure that every Toll Booth is built with precision and high-quality materials, providing seamless functionality for toll operations. In terms of strength, Toll Booths are exceptionally robust. Their sturdy construction ensures stability and resistance to external factors like weather, wear, and constant usage. With Texo Prefab World’s expert engineering, our booths are designed to perform reliably in demanding tolling environments.'
  },
  {
    question: 'Are Toll Booths eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Toll Booths are designed with eco-friendly materials and energy-efficient systems. Optional features like solar panel integration and LED lighting make them a sustainable choice for toll operations.'
  },
  {
    question: 'What is the typical cost of a Toll Booth?',
    answer: 'Texo Prefab World offers Toll Booths at competitive prices. The cost depends on factors like size, features, and customization. Whether you need a single booth or a network of toll stations, we have options to suit your budget and operational needs.'
  },
],
    trustBand: {
      citiesCovered: 150,
      completedProjects: 200,
      customerSatisfaction: 93
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'ATM Cabin': {
    name: 'ATM Cabin',
    category: 'Security Solutions',
    icon: FileText,
    description: 'Secure ATM facilities with surveillance and safety features',
    longDescription: `ATM Cabins provide secure environments for automated teller machines, ensuring customer safety and equipment protection. These specialized structures combine security features with accessibility for banking customers.

Each ATM Cabin features advanced security systems, surveillance equipment, and proper lighting for safe transactions. The design ensures compliance with banking security standards while providing a welcoming environment for customers.

Our ATM Cabins are suitable for various locations including retail centers, gas stations, and public spaces.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'ShieldCheck',
    title: 'Enhanced Security Features',
    description: 'Equipped with anti-vandal locks, CCTV provisions, and reinforced steel walls, Texo cabins ensure unmatched security for both users and banking assets.'
  },
  {
    icon: 'Server',
    title: 'Dedicated Back-End Service Area',
    description: 'Texo ATM cabins feature a compact but functional back-end space, ideal for housing auxiliary equipment like UPS systems, servers, and cash replenishment tools, ensuring smooth operations without disrupting customer use.'
  },
  {
    icon: 'Leaf',
    title: 'Energy Efficiency',
    description: 'Fitted with LED lighting, smart cooling systems, and energy-efficient insulation, Texo ensures reduced operational costs for banks.'
  },
  {
    icon: 'Cctv',
    title: 'Integrated Surveillance Systems',
    description: 'Texo cabins come pre-fitted with hidden compartments for wiring and mounting advanced surveillance systems like dome cameras and motion detectors, enhancing operational security.'
  },
  {
    icon: 'Rocket',
    title: 'Fast Installation and Relocation',
    description: 'Prefabricated off site, these cabins are easy to transport and install, enabling quick deployment in high-demand areas.'
  },
  {
    icon: 'Palette',
    title: 'Custom Branding Options',
    description: 'Texo offers customizable exteriors to align with a bank’s branding, enhancing visibility and recognition in competitive markets.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize the ATM Cabin?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create an ATM Cabin that aligns perfectly with your banking requirements and security standards.'
  },
  {
    question: 'What amenities can I expect in an ATM Cabin?',
    answer: 'At Texo Prefab World, our ATM Cabins come equipped with features such as electrical fittings, air conditioning, insulated walls, proper ventilation, and durable flooring. Additional options include integrated security systems, CCTV mounting provisions, anti-skid flooring, and customizable interiors to ensure the cabin is secure, comfortable, and user-friendly.'
  },
  {
    question: 'How do I maintain an ATM Cabin?',
    answer: 'ATM Cabins from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes inspecting electrical systems, ensuring proper ventilation, and maintaining the external and internal finishes. Our cabins are designed to be durable and resistant to weather and wear, ensuring they remain functional and secure for the long term.'
  },
  {
    question: 'What is special about ATM Cabins, and are they strong?',
    answer: 'An ATM Cabin stands out for its compact and secure design, offering both functionality and safety. Its prefabricated structure allows for rapid installation and easy relocation, making it ideal for urban and remote locations. The design ensures optimal utilization of space while providing a safe, clean, and accessible environment for users. At Texo Prefab World, we ensure that every ATM Cabin is built with precision and high-quality materials to provide a seamless blend of security, durability, and user convenience. In terms of strength, ATM Cabins are exceptionally robust. Their sturdy construction ensures protection against external factors such as weather conditions, wear, and potential security threats. With Texo Prefab World’s expert engineering, our cabins are built to safeguard both the ATM and its users.'
  },
  {
    question: 'Are ATM Cabins eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our ATM Cabins are designed with eco-friendly materials and energy-efficient systems. Options like LED lighting, solar power integration, and energy-efficient air conditioning make them a sustainable choice for banks and financial institutions.'
  },
  {
    question: 'What is the typical cost of an ATM Cabin?',
    answer: 'Texo Prefab World offers ATM Cabins at competitive prices. The cost depends on factors like size, features, and customization. Whether you need a single cabin or multiple installations across different locations, we have options to suit your budget and operational requirements.'
  },
],
    trustBand: {
      citiesCovered: 200,
      completedProjects: 350,
      customerSatisfaction: 95
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Control Room': {
    name: 'Control Room',
    category: 'PUF Insulated Cabin',
    icon: Package,
    description: 'Temperature-controlled control rooms for industrial and technical operations',
    longDescription: `Control Rooms provide climate-controlled environments for monitoring and controlling industrial processes. These PUF-insulated structures maintain precise temperature and humidity conditions for sensitive equipment and operations.

Each Control Room features advanced insulation, climate control systems, and ergonomic workspaces. The design ensures optimal conditions for operators and equipment performance.

Our Control Rooms are essential for industries requiring precise environmental control and continuous monitoring.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'SlidersHorizontal',
    title: 'Tailored to Your Needs',
    description: 'Texo offers customizable layouts, ensuring the control room is designed to fit industry-specific requirements, from panel arrangements to ergonomic workspaces.'
  },
  {
    icon: 'Thermometer',
    title: 'Advanced Thermal Insulation',
    description: 'PUF panels maintain a stable internal environment, protecting sensitive equipment and ensuring uninterrupted operations, even in extreme climates.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Enhanced Security Features',
    description: 'Lockable doors, reinforced structures, and tamper-proof designs ensure safety for equipment and personnel in high-risk areas.'
  },
  {
    icon: 'CloudRain',
    title: 'Resistance to External Elements',
    description: 'Durable materials like PUF panels, steel reinforcements, and weatherproof coatings protect the cabin from extreme weather, corrosion, and physical wear.'
  },
  {
    icon: 'Flame',
    title: 'Fire-Resistant Construction',
    description: 'Equipped with fire-retardant materials and safety features, these cabins ensure added protection for critical operations.'
  },
  {
    icon: 'Truck',
    title: 'Portability for Remote Operations',
    description: 'Designed for easy transport, Texo control room cabins are ideal for remote and temporary setups like mining sites or oil fields.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize the Control Room?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a Control Room that meets your exact requirements, ensuring a secure and efficient workspace for monitoring and operations.'
  },
  {
    question: 'What amenities can I expect in a Control Room?',
    answer: 'At Texo Prefab World, our Control Rooms come equipped with essential features such as pre-installed electrical systems, climate control, soundproofing, anti-static flooring, and fire-resistant materials. Additional options include customized lighting, reinforced security doors, and integrated workstations to support seamless operations.'
  },
  {
    question: 'How do I maintain a Control Room?',
    answer: 'Control Rooms from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes monitoring HVAC systems, inspecting electrical components, and ensuring the integrity of insulation and security features. Our structures are designed for durability, minimizing maintenance efforts while ensuring optimal functionality.'
  },
  {
    question: 'What is special about Control Rooms, and are they strong?',
    answer: 'A Control Room stands out for its highly secure and organized layout, providing a centralized space for monitoring, coordination, and decision-making in industries like power plants, manufacturing, security, and telecommunications. Its modular prefabricated design allows for quick installation and scalability, making it suitable for both temporary and permanent setups. At Texo Prefab World, we ensure that every Control Room is engineered with precision, using premium materials to withstand environmental challenges while maintaining optimal working conditions. In terms of strength, Control Rooms are designed to be highly durable and resilient. Their structural integrity ensures resistance to vibrations, temperature fluctuations, and external forces, making them reliable even in demanding industrial environments. With Texo Prefab World’s expert engineering, our Control Rooms provide maximum protection for critical infrastructure and equipment.'
  },
  {
    question: 'Are Control Rooms eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Control Rooms are designed with eco-friendly materials and energy-efficient systems. Features like insulated walls, LED lighting, and energy-saving HVAC solutions make them a sustainable and cost-effective choice for various industries.'
  },
  {
    question: 'What is the typical cost of a Control Room?',
    answer: 'Texo Prefab World offers Control Rooms at competitive prices. The cost depends on factors like size, security features, insulation, and customization. Whether you need a compact monitoring room or a large-scale control center, we have solutions to match your budget and operational requirements.'
  },
],
    trustBand: {
      citiesCovered: 180,
      completedProjects: 280,
      customerSatisfaction: 97
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Solar Control Room': {
    name: 'Solar Control Room',
    category: 'PUF Insulated Cabin',
    icon: Package,
    description: 'Solar-powered control rooms with sustainable energy solutions',
    longDescription: `Solar Control Rooms combine climate control with sustainable solar power systems. These insulated structures provide efficient monitoring environments while minimizing environmental impact through renewable energy.

Each Solar Control Room features solar panels, battery storage, and energy-efficient climate control. The design ensures reliable operation even in remote locations without grid power.

Our Solar Control Rooms are ideal for environmental monitoring, renewable energy facilities, and off-grid operations.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Thermometer',
    title: 'Superior Thermal Insulation',
    description: 'PUF panels offer exceptional thermal insulation, ensuring that the cabin maintains a stable internal temperature, critical for safeguarding sensitive solar control equipment.'
  },
  {
    icon: 'CloudRain',
    title: 'Durable and Weather-Resistant',
    description: 'Designed to withstand harsh environmental conditions such as extreme heat, heavy rain, and strong winds, Texo cabins protect against wear and tear, ensuring long-term performance.'
  },
  {
    icon: 'Cable',
    title: 'Integrated Cable Management',
    description: 'Designed with advanced cable conduits, the cabins keep wiring organized, reducing the risk of damage and enhancing operational reliability.'
  },
  {
    icon: 'Droplets',
    title: 'Moisture Resistance',
    description: 'Sealed construction prevents moisture from infiltrating, ensuring uninterrupted performance of control equipment in harsh climates.'
  },
  {
    icon: 'Wrench',
    title: 'Low Maintenance',
    description: 'The high-quality materials used by Texo are durable, stain-resistant, and easy to clean, reducing upkeep time and cost.'
  },
  {
    icon: 'Rocket',
    title: 'Quick Installation',
    description: 'Our prefab technology ensures rapid setup with minimal disruption, making it an ideal solution for businesses and public spaces.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize the Solar Control Room?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create a PUF Insulated Solar Control Room that meets your exact specifications, ensuring an efficient and climate-controlled environment for solar energy management.'
  },
  {
    question: 'What amenities can I expect in a Solar Control Room?',
    answer: 'At Texo Prefab World, our PUF Insulated Solar Control Rooms come equipped with features such as pre-installed electrical fittings, temperature-controlled insulation, ventilation systems, and customizable interiors. Additional options include anti-corrosive coatings, fire-resistant panels, and provisions for solar monitoring equipment to ensure optimal performance.'
  },
  {
    question: 'How do I maintain a Solar Control Room?',
    answer: 'PUF Insulated Solar Control Rooms from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes inspecting insulation integrity, monitoring electrical systems, and maintaining ventilation efficiency. Our control rooms are designed for durability and long-term functionality with minimal maintenance.'
  },
  {
    question: 'What is special about Solar Control Rooms, and are they strong?',
    answer: 'A PUF Insulated Solar Control Room stands out for its high thermal efficiency and structural integrity, providing an ideal solution for housing sensitive electrical and control equipment in solar power plants. Its prefabricated structure allows for quick installation and relocation, making it suitable for remote solar farms and energy stations. The design ensures optimal insulation, reducing heat buildup and maintaining internal temperature stability. At Texo Prefab World, we ensure that every PUF Insulated Solar Control Room is built with precision and high-quality materials, offering superior protection against extreme weather conditions and external environmental factors. In terms of strength, PUF Insulated Solar Control Rooms are exceptionally robust. Their Polyurethane Foam (PUF) insulation provides superior thermal resistance, ensuring energy efficiency and operational stability. With Texo Prefab World’s expert engineering, our control rooms are designed to withstand harsh environments while ensuring the safety of solar equipment.'
  },
  {
    question: 'Are Solar Control Rooms eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our PUF Insulated Solar Control Rooms are designed with eco-friendly materials and energy-efficient solutions. Features like solar-powered ventilation, LED lighting, and sustainable PUF panels make them an environmentally conscious choice for solar power infrastructure.'
  },
  {
    question: 'What is the typical cost of a Solar Control Room?',
    answer: 'Texo Prefab World offers PUF Insulated Solar Control Rooms at competitive prices. The cost depends on factors like size, insulation thickness, and additional customization. Whether you need a compact control room or a large-scale facility, we provide solutions that align with your budget and operational needs.'
  },
],
    trustBand: {
      citiesCovered: 120,
      completedProjects: 160,
      customerSatisfaction: 98
    },
    techSpecs: {
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],   // no spec rows needed for the gallery tab
    },
  },
  },
  'Clean Room': {
    name: 'Clean Room',
    category: 'PUF Insulated Cabin',
    icon: Package,
    description: 'Sterile environments with HEPA filtration and contamination control',
    longDescription: `Clean Rooms provide controlled environments for applications requiring strict contamination control. These PUF-insulated structures maintain clean air standards for pharmaceutical, electronics, and research facilities.

Each Clean Room features HEPA filtration, positive pressure systems, and contamination monitoring. The design ensures compliance with clean room standards while maintaining comfortable working conditions.

Our Clean Rooms are essential for industries where particle contamination must be minimized.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'ShieldPlus',
    title: 'Enhanced Contamination Control',
    description: 'Texo prefabricated clean room maintain a controlled environment with advanced air filtration systems, ensuring minimal pollutants such as dust, airborne microbes, and chemical vapors, ideal for critical industries.'
  },
  {
    icon: 'Building2',
    title: 'Adaptability Across Industries',
    description: 'Texo prefabricated clean rooms cater to diverse applications, including semiconductor manufacturing, biotechnology labs, aerospace, and food processing, highlighting their versatility.'
  },
  {
    icon: 'Blocks',
    title: 'Seamless Modular Design',
    description: 'Easily expandable and modifiable, prefabricated clean rooms allow for future adjustments without interrupting existing operations, ensuring adaptability to business growth.'
  },
  {
    icon: 'SlidersHorizontal',
    title: 'Customized to Industry Needs',
    description: 'Texo prefabricated clean rooms cater to specific clean room classifications (ISO standards), ensuring the perfect fit for pharmaceuticals, biotechnology, electronics, or healthcare sectors.'
  },
  {
    icon: 'Wrench',
    title: 'Easy Maintenance',
    description: 'Constructed using high-quality, easy-to-clean materials such as PUF panels or aluminum composite, Texo cleanrooms are built for longevity and hassle-free maintenance.'
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Cost-Efficiency',
    description: 'Texo’s prefabs deliver high-quality clean room environments at a fraction of the cost of conventional construction, without compromising on durability or performance.'
  },
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
  {
    question: 'Can I customize my Prefabricated Clean Rooms?',
    answer: 'Absolutely! Texo Prefab World specializes in tailored solutions. From layout and size to materials and finishes, we work with you to create Prefabricated Clean Rooms that meet your exact specifications and industry standards, ensuring a controlled and contamination-free environment.'
  },
  {
    question: 'What amenities can I expect in Prefabricated Clean Rooms?',
    answer: 'At Texo Prefab World, our Prefabricated Clean Rooms come equipped with features such as modular panels, HEPA filtration systems, airlocks, HVAC systems, and customizable lighting. Additional options include anti-static flooring, sealed windows, and integrated cleanroom furniture to maintain sterility and ensure smooth workflow.'
  },
  {
    question: 'How do I maintain Prefabricated Clean Rooms?',
    answer: 'Prefabricated Clean Rooms from Texo Prefab World are built with low-maintenance, high-quality materials. Routine upkeep includes cleaning surfaces with approved agents, checking filtration systems, and maintaining HVAC performance. Our clean rooms are designed to meet regulatory requirements and ensure long-term functionality with minimal effort.'
  },
  {
    question: 'What is special about Prefabricated Clean Rooms, and are they strong?',
    answer: 'A Prefabricated Clean Room stands out for its highly controlled and customizable design, offering both flexibility and precision. Its prefabricated structure allows for quick installation and scalability, making it suitable for various industries such as pharmaceuticals, biotechnology, electronics, and food processing. The modular design ensures easy customization to meet specific cleanliness and operational requirements. At Texo Prefab World, we ensure that every Prefabricated Clean Room is built with precision, using high-quality materials to create a sterile and efficient workspace that adheres to strict cleanliness standards. In terms of strength, our Prefabricated Clean Rooms are highly durable and stable. Their robust construction ensures resistance to external factors such as temperature fluctuations and wear. With Texo Prefab World’s expert engineering, our clean rooms are built to perform consistently in demanding environments.'
  },
  {
    question: 'Are Prefabricated Clean Rooms eco-friendly?',
    answer: 'Sustainability is a core value at Texo Prefab World. Our Prefabricated Clean Rooms are designed with eco-friendly materials and energy-efficient systems. Features like low-energy HVAC systems, LED lighting, and modular paneling make them a sustainable choice for industries requiring sterile environments.'
  },
  {
    question: 'What is the typical cost of Prefabricated Clean Rooms?',
    answer: 'Texo Prefab World offers Prefabricated Clean Rooms at competitive prices. The cost depends on factors like size, cleanliness levels (ISO standards), and customization. Whether you need a compact clean room or a large-scale facility, we have options to suit your budget and compliance needs.'
  },
],
    trustBand: {
      citiesCovered: 140,
      completedProjects: 190,
      customerSatisfaction: 99
    },
    techSpecs: {
    /* 1 ─ Architecture */
    architecture: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Structure',        value: 'Galvanised Steel Portal Frame (GSPF)' },
        { label: 'Frame thickness',  value: '2 mm cold-formed sections' },
        { label: 'Module width',     value: '3.6 m standard bay' },
        { label: 'Floor-to-ceiling', value: '2.9 m clear height' },
        { label: 'Total floors',     value: 'Up to G+2 without podium' },
        { label: 'Wind rating',      value: '200 km/h (IS 875 Part 3)' },
        { label: 'Seismic zone',     value: 'Zone IV compliant (IS 1893)' },
        { label: 'Design life',      value: '50 years minimum' },
      ],
    },
 
    /* 2 ─ Exterior Wall & Roof */
    exteriorWallRoof: {
      images: [
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Wall panel',        value: '120 mm SIP (OSB + EPS core)' },
        { label: 'External finish',   value: '6 mm fibre-cement cladding' },
        { label: 'U-value (wall)',     value: '0.28 W/m²K' },
        { label: 'Roof system',       value: 'Concealed-fix metal deck on purlins' },
        { label: 'Roof insulation',   value: '100 mm glasswool blanket' },
        { label: 'Waterproofing',     value: 'Single-ply TPO membrane' },
        { label: 'Rain-screen gap',   value: '25 mm vented cavity' },
        { label: 'Fire rating',       value: '60-min FR (IS 3809)' },
      ],
    },
 
    /* 3 ─ Interior Wall & Ceiling */
    interiorWallCeiling: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Partition system',  value: '75 mm metal-stud gypsum board' },
        { label: 'Board thickness',   value: '12.5 mm Type-X each side' },
        { label: 'Acoustic rating',   value: 'Rw 42 dB (party walls)' },
        { label: 'Ceiling type',      value: 'Suspended grid with acoustic tiles' },
        { label: 'Tile size',         value: '600 × 600 mm mineral fibre' },
        { label: 'Ceiling height',    value: '2.6 m finished' },
        { label: 'Paint finish',      value: 'Premium emulsion — 2 base + 2 topcoat' },
        { label: 'Corner bead',       value: 'Galvanised steel angle bead throughout' },
      ],
    },
 
    /* 4 ─ Interior & Exterior Floor */
    interiorExteriorFloor: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Sub-floor',        value: '18 mm structural-grade OSB on joists' },
        { label: 'Interior finish',  value: '600×600 mm vitrified tile (8 mm)' },
        { label: 'Adhesive',         value: 'Polymer-modified tile adhesive' },
        { label: 'Exterior deck',    value: 'Composite WPC decking — anti-slip' },
        { label: 'Deck board',       value: '140 × 25 mm hollow profile' },
        { label: 'Screed',           value: '40 mm self-levelling compound' },
        { label: 'Underfloor prep',  value: 'DPM polythene sheet 1200G' },
        { label: 'Slip resistance',  value: 'R11 wet-area rating (bathrooms)' },
      ],
    },
 
    /* 5 ─ Doors, Sanitary & Electrical */
    doorsSanitaryElectrical: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
      ],
      specs: [
        { label: 'Main door',         value: 'Solid-core flush door 900×2100 mm' },
        { label: 'Internal doors',    value: 'Hollow-core 800×2100 mm' },
        { label: 'Windows',           value: 'UPVC double-glazed, U-value 1.8' },
        { label: 'Sanitary brand',    value: 'Hindware / Kohler (as selected)' },
        { label: 'WC type',           value: 'Wall-hung EWC with concealed cistern' },
        { label: 'Plumbing pipe',     value: 'CPVC hot & cold; UPVC drainage' },
        { label: 'DB board',          value: '12-way MCB distribution board' },
        { label: 'Wiring',            value: 'FR-LSH copper, 2.5 / 4 sq mm' },
      ],
    },
 
    /* 6 ─ Transit, Payment & Warranty */
    transitPaymentWarranty: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Lead time',         value: '30–45 days from booking confirmation' },
        { label: 'Delivery mode',     value: 'Flat-pack on 40 ft trailers' },
        { label: 'Assembly crew',     value: 'Factory-trained 8-person team' },
        { label: 'Erection time',     value: '15–20 working days on site' },
        { label: 'Payment terms',     value: '30% booking · 40% dispatch · 30% handover' },
        { label: 'Structure warranty', value: '10 years (frame & panel)' },
        { label: 'Finish warranty',   value: '5 years (cladding, paint, waterproofing)' },
        { label: 'Service contract',  value: 'Annual AMC available post-warranty' },
      ],
    },
 
    /* 7 ─ 2D Layout */
    layout2D: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [
        { label: 'Configuration',    value: '2 BHK — 3 BHK modular options' },
        { label: 'Carpet area',      value: '65 m² (2BHK) · 95 m² (3BHK)' },
        { label: 'Plot footprint',   value: '7.2 m × 10.8 m (std.)' },
        { label: 'Living room',      value: '4.5 × 3.9 m' },
        { label: 'Master bedroom',   value: '3.9 × 3.6 m with attached bath' },
        { label: 'Kitchen',          value: '3.0 × 2.7 m modular layout' },
        { label: 'Deck / veranda',   value: '3.6 × 1.8 m' },
        { label: 'Drawing standard', value: 'AutoCAD DWG supplied at handover' },
      ],
    },
 
    /* 8 ─ Gallery */
    gallery: {
      images: [
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
        '/siteoffice-2.webp',
        '/products-hero.png',
      ],
      specs: [],
    },
  },
  }
}

export const getProductsByCategory = (category: string): ProductData[] => {
  return Object.values(productsData).filter(product => product.category === category)
}

export const getProductByName = (name: string): ProductData | undefined => {
  return productsData[name]
}