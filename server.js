const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const personalInfo = {
  name: "MUHAMMED HAZIL AV",
  role: "Digital Marketer | Website Developer & SMM Specialist",
  tagline: "Building High-Impact Websites, Cinematic Social Content & Performance Growth Systems",
  location: "Thalassery, Kerala",
  phone: "+91 9539933265",
  email: "muhammedhazilav@gmail.com",
  whatsapp: "https://wa.me/919539933265",
  linkedin: "https://www.linkedin.com/in/muhammed-hazil",
  website: "https://hazil.in",
  instagram: "https://instagram.com/h_azi_l_",
  avatar: "/images/profile.png",
  bio: "Digital Marketer and Website Developer with hands-on experience in website design, social media management, SEO optimization, and digital advertising. Skilled in building responsive, conversion-focused websites, executing brand-centric social media campaigns, and driving measurable client growth.",
};

const toolsList = [
  "WordPress",
  "Elementor",
  "Google Analytics",
  "Google Ads",
  "Meta Business Suite",
  "Adobe Illustrator",
  "SEMrush",
  "Canva",
  "Adobe Photoshop",
  "Antigravity",
];

const stats = [
  { label: "Experience in Web & SMM", value: "1+ Yr", detail: "Digital Marketing & Development" },
  { label: "Delivered Client Projects", value: "10+", detail: "Websites, Campaigns & Ad Suites" },
  { label: "Industry Certifications", value: "5+", detail: "Google Analytics, Ads & SEMrush" },
  { label: "PageSpeed & UX Score", value: "98%", detail: "Fast, Responsive & Conversion-Focused" },
];

const worksCategories = [
  {
    slug: "social-media",
    title: "Social Media Management & Campaigns",
    subtitle: "Brand consistency, engaging reel design, and structured content strategy across diverse industries.",
    image: "/images/social-media.jpg",
    description: "Managing social media presence for restaurant, edtech, boutique, tech, fragrance, salon, and electronics brands with visually compelling posts, reels, and analytics growth.",
    deliverables: ["Content Strategy", "Reel & Post Design", "Brand Management", "Engagement Analytics"],
    projects: [
      {
        title: "NewLook Restaurant",
        client: "NewLook Restaurant",
        summary: "Crafted appetizing gourmet food reels, weekend chef specials, and dining ambiance showcases that increased table reservations.",
        image: "/images/posters.jpg",
        tags: ["Restaurant", "Gourmet Dining", "Food Reels", "Canva/Photoshop"],
        details: "Executed a weekly content calendar featuring signature dishes, customer dining reviews, and weekend discount reels.",
      },
      {
        title: "Mandhi Club",
        client: "Mandhi Club",
        summary: "Formulated a viral Arabic feast campaign showcasing authentic wood-cooked Mandhi platters and family dining offers.",
        image: "/images/social-media.jpg",
        tags: ["Arabian Dining", "Mandhi Special", "Viral Reels", "Meta Suite"],
        details: "Produced mouth-watering food photography shorts highlighting authentic Arabian spices, group platters, and festive feast promos.",
      },
      {
        title: "NewLook Kitchen",
        client: "NewLook Kitchen",
        summary: "Created high-converting meal subscription banners, daily lunch combo stories, and delivery app promotional campaigns.",
        image: "/images/ads.jpg",
        tags: ["Cloud Kitchen", "Food Delivery", "Daily Combos", "Meta Ads"],
        details: "Designed vibrant Swiggy/Zomato promotional graphics, lunch box subscriptions, and quick WhatsApp ordering call-to-actions.",
      },
      {
        title: "Rox.x Broast",
        client: "Rox.x Broast",
        summary: "High-energy crispy broasted chicken ASMR reels, family bucket discount banners, and student crunch meal offers.",
        image: "/images/posters.jpg",
        tags: ["Broasted Chicken", "Fried Chicken", "ASMR Reels", "Photoshop"],
        details: "Shot and edited trending crunch sound video reels showcasing golden broasted chicken buckets, dips, and combo deals.",
      },
      {
        title: "Alpha Learnix",
        client: "Alpha Learnix",
        summary: "Promoted UGC-approved distance degree programs, online university admissions, and career guidance webinars.",
        image: "/images/ads.jpg",
        tags: ["Distance Degree", "Education", "Admissions", "Lead Gen"],
        details: "Ran structured admission lead generation campaigns highlighting flexible distance learning, degree verification, and low EMI fees.",
      },
      {
        title: "Modara Boutique",
        client: "Modara Boutique",
        summary: "Showcased premium women's clothing, bridal wear collections, and festive ethnic dress reels with instant Instagram shop ordering.",
        image: "/images/social-media.jpg",
        tags: ["Womens Clothing", "Boutique Fashion", "Ethnic Wear", "Reels"],
        details: "Maintained a luxury aesthetic featuring model outfit reels, fabric texture close-ups, and festive attire launch teasers.",
      },
      {
        title: "Wexo",
        client: "Wexo",
        summary: "Launched hyperlocal food & package delivery app campaigns with fast dispatch promos and app download ad sets.",
        image: "/images/redesign-after.jpg",
        tags: ["Delivery App", "App Installs", "Hyperlocal", "Meta Ads"],
        details: "Designed vibrant app feature carousels, 15-minute delivery promise reels, and first-order discount coupon banners.",
      },
      {
        title: "Fragrea",
        client: "Fragrea",
        summary: "Aesthetic luxury perfume unboxing reels, French & Arabian scent profile carousels, and online fragrance order ads.",
        image: "/images/web-design.jpg",
        tags: ["Perfumes", "Luxury Fragrance", "Scent Profile", "Canva"],
        details: "Created moody, elegant visual reels highlighting notes of Oud, Vanilla, and Amberwood with direct e-commerce buying links.",
      },
      {
        title: "Aman Saloon",
        client: "Aman Saloon",
        summary: "Before-and-after haircut transformation reels, trendy beard styling shorts, and men's grooming package promos.",
        image: "/images/posters.jpg",
        tags: ["Barber Shop", "Men Grooming", "Hair Styling", "Transformation"],
        details: "Produced high-contrast haircut transformation video shorts and weekend appointment booking story templates.",
      },
      {
        title: "Nexus Communication",
        client: "Nexus Communication",
        summary: "Latest 5G smartphone launch banners, mobile accessory price drop deals, and instant trade-in exchange offers.",
        image: "/images/ads.jpg",
        tags: ["Mobile Shop", "Smartphones", "Exchange Offers", "Meta Ads"],
        details: "Designed festive smartphone price drop posters, old phone trade-in value graphics, and local area ad campaigns.",
      },
      {
        title: "Mobily Digital Store",
        client: "Mobily Digital Store",
        summary: "Certified pre-owned used laptop deals, student budget laptop promos, and warranty assurance carousels.",
        image: "/images/social-media.jpg",
        tags: ["Used Laptops", "Refurbished Tech", "Student Deals", "Canva"],
        details: "Created detailed spec sheets for used MacBooks and Dell/HP laptops with price breakdown graphics and warranty badges.",
      },
      {
        title: "Evarix",
        client: "Evarix",
        summary: "Trendy streetwear & modern apparel drops, oversized tee collection teasers, and seasonal fashion lookbooks.",
        image: "/images/web-design.jpg",
        tags: ["Clothing Brand", "Streetwear", "Fashion Drops", "Branding"],
        details: "Built an edgy streetwear visual campaign featuring urban style reels, outfit pairing guides, and limited drop count-downs.",
      },
    ],
  },
  {
    slug: "web-design",
    title: "Website Design & Development",
    subtitle: "Clean, responsive, code-assisted and WordPress websites crafted for seamless user experience.",
    image: "/images/web-design.jpg",
    description: "Building responsive distance education web portals and high-impact event management websites using code-based workflows, WordPress, and Elementor.",
    deliverables: ["Responsive Layouts", "WordPress Customization", "Vibe Coding / HTML / CSS", "Speed Optimization"],
    projects: [
      {
        title: "Alpha Learnix",
        client: "Alpha Learnix",
        summary: "Custom responsive educational web portal featuring online distance degree course catalogs, student admission forms, and university accreditation badges.",
        image: "/images/web-design.jpg",
        tags: ["Distance Education", "Web Portal", "Responsive Design", "WordPress"],
        details: "Built a clean, mobile-first educational portal featuring course search filters, fee calculator tools, and direct WhatsApp counselor chat buttons.",
      },
      {
        title: "Greenix",
        client: "Greenix",
        summary: "High-impact event management portfolio website showcasing wedding stage setups, corporate galas, interactive event booking inquiries, and video galleries.",
        image: "/images/redesign-after.jpg",
        tags: ["Event Management", "Portfolio Showcase", "Elementor Pro", "UX/UI"],
        details: "Designed a dark luxury event showcase with interactive photo galleries, client venue testimonials, and automated quote request forms.",
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO & Search Engine Optimization",
    subtitle: "Keyword research, technical site audits, and on-page optimization for sustained search visibility.",
    image: "/images/seo.jpg",
    description: "Executing strategic SEO improvements for abroad study consultancies and event management brands to boost organic rankings and local search visibility.",
    deliverables: ["Keyword Research", "On-Page Metadata", "Structure Audits", "Google Analytics"],
    projects: [
      {
        title: "Eduworld Group",
        client: "Eduworld Group",
        summary: "Executed comprehensive on-page SEO, target keyword research for overseas study destinations, university intake schema metadata, and technical site architecture optimization.",
        image: "/images/seo.jpg",
        tags: ["Abroad Study SEO", "Keyword Research", "On-Page Optimization", "SEMrush"],
        details: "Performed keyword intent mapping for high-converting abroad study terms (UK/Canada/European university intakes), optimized meta titles/descriptions, and fixed crawl errors in Google Search Console.",
      },
      {
        title: "Greenix",
        client: "Greenix",
        summary: "Local SEO and search engine visibility campaign for event management services, wedding stage decors, and corporate event planning searches.",
        image: "/images/seo.jpg",
        tags: ["Event Management SEO", "Local SEO", "Google My Business", "Search Console"],
        details: "Optimized Google Business Profile, structured venue/decor service page metadata, built high-authority local citations, and improved page load speeds for search rankings.",
      },
    ],
  },
  {
    slug: "redesign",
    title: "Website Redesign & UX Overhaul",
    subtitle: "Transforming clunky, legacy websites into high-converting modern digital platforms.",
    image: "/images/redesign-after.jpg",
    beforeImage: "/images/redesign-before.jpg",
    afterImage: "/images/redesign-after.jpg",
    description: "Redesigned client portals for abroad study consultancies and UAE business setups, replacing outdated visual elements with sleek glassmorphism and conversion funnels.",
    deliverables: ["UX Audit", "Mobile UX Overhaul", "Performance Tuning", "Visual Redesign"],
    hasBeforeAfter: true,
    projects: [
      {
        title: "Eduworld Group",
        client: "Eduworld Group",
        summary: "Overhauled legacy overseas education website into a high-converting, mobile-responsive portal featuring country selection guides, visa assistance funnels, and university application forms.",
        image: "/images/redesign-after.jpg",
        tags: ["Abroad Study", "Overseas Education", "UX Redesign", "Visa Funnel"],
        details: "Replaced static text tables with interactive country comparison cards, streamlined student counseling appointment booking, and optimized mobile navigation touch targets.",
      },
      {
        title: "Tasheel Consultancy",
        client: "Tasheel Consultancy",
        summary: "Transformed outdated corporate portal into a modern dark-luxury business setup platform with UAE mainland/freezone cost calculators, PRO service guides, and instant WhatsApp advisory triggers.",
        image: "/images/redesign-after.jpg",
        tags: ["UAE Business Setup", "Company Formation", "PRO Services", "Dark Luxury UI"],
        details: "Redesigned service package tiers, simplified business visa application steps, and integrated fast click-to-call consultation channels.",
      },
    ],
  },
  {
    slug: "posters",
    title: "Branding & Poster Design",
    subtitle: "High-impact promotional graphics, event banners, and brand identity suites.",
    image: "/images/posters.jpg",
    description: "Crafting visually striking promotional posters, social media banners, and brand graphics using Photoshop, Illustrator, and Canva.",
    deliverables: ["Promotional Posters", "Social Banners", "Brand Identity Assets", "Event Graphics"],
    projects: [
      {
        title: "Digital Tech Summit Event Banner Suite",
        client: "Calicut Tech Forum 2025",
        summary: "Designed a suite of futuristic dark neon event posters, speaker highlight banners, and badge graphics.",
        image: "/images/posters.jpg",
        tags: ["Photoshop", "Illustrator", "Poster Design"],
        details: "Utilized glowing neon typography, high-contrast visual hierarchy, and polished social media export formats.",
      },
    ],
  },
  {
    slug: "ads",
    title: "Meta & Google Ad Creatives & Support",
    subtitle: "Data-backed ad graphics, audience targeting assistance, and campaign monitoring.",
    image: "/images/ads.jpg",
    description: "Assisting with campaign setup, ad creative production, audience targeting, and performance monitoring across Meta and Google Ads.",
    deliverables: ["Meta Ads Support", "Google Search & Video Ads", "Creative Ad Design", "Performance Tracking"],
    projects: [
      {
        title: "Lead Gen Ad Campaign Support",
        client: "Agency Client Portfolio",
        summary: "Supported Meta ad set setup, designed high-CTR ad banners, and monitored campaign spend and lead quality.",
        image: "/images/ads.jpg",
        tags: ["Meta Ads", "Google Ads", "Creative Banner"],
        details: "Tested A/B creative variations featuring bold headline hooks and high-contrast call-to-action buttons.",
      },
    ],
  },
];

const services = [
  { id: "web-dev", title: "Website Design & Development", icon: "⚡", description: "Custom responsive code and CMS websites engineered for fast load speeds, fluid responsiveness, and high conversion rates." },
  { id: "seo", title: "SEO Optimization & Audits", icon: "🔍", description: "Strategic on-page SEO, site structure audits, and targeted keyword research to elevate organic search visibility." },
  { id: "smm", title: "Social Media Content Creation", icon: "📲", description: "End-to-end social media management, brand-focused reel & post design, content calendars, and engagement strategy." },
  { id: "redesign", title: "Website Redesign & UX Overhaul", icon: "🔄", description: "Transform outdated legacy websites into modern, high-converting digital storefronts with dark luxury aesthetics." },
  { id: "branding", title: "Branding & Poster Design", icon: "🎨", description: "Eye-catching visual assets, social promotional banners, event posters, and cohesive brand identity suites." },
];

function getHtmlHeader(pageTitle, pageDescription, canonicalPath = "") {
  const metaTitle = pageTitle || `${personalInfo.name} — Digital Marketer & Website Developer`;
  const metaDesc = pageDescription || `${personalInfo.bio} Specializing in WordPress, Elementor, SEO Optimization, SMM, and Meta/Google Ads.`;
  const siteUrl = personalInfo.website || "https://hazilav.vercel.app";
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const avatarUrl = `${siteUrl}${personalInfo.avatar}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": personalInfo.name,
        "alternateName": "Muhammed Hazil",
        "jobTitle": "Digital Marketer & Website Developer",
        "description": personalInfo.bio,
        "url": siteUrl,
        "image": avatarUrl,
        "sameAs": [personalInfo.whatsapp, "https://github.com/hazilav"],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Thalassery",
          "addressRegion": "Kerala",
          "addressCountry": "India"
        },
        "knowsAbout": [
          "Website Design & Development",
          "WordPress Development",
          "Elementor",
          "SEO Optimization",
          "Social Media Marketing (SMM)",
          "Meta Ads",
          "Google Ads",
          "React & Next.js"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": `${personalInfo.name} — Portfolio & Digital Services`,
        "description": personalInfo.tagline,
        "publisher": {
          "@id": `${siteUrl}/#person`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        "name": `${personalInfo.name} Digital Services`,
        "url": siteUrl,
        "image": avatarUrl,
        "priceRange": "₹15,000 - ₹60,000+",
        "telephone": "+919539933265",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Thalassery",
          "addressRegion": "Kerala",
          "addressCountry": "India"
        },
        "serviceType": [
          "Website Design & Development",
          "SEO Optimization & Audits",
          "Social Media Content Creation",
          "Website Redesign & UX Overhaul",
          "Branding & Poster Design"
        ]
      }
    ]
  };

  return `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />

  <!-- Google Site Verification -->
  <meta name="google-site-verification" content="0MmCLZ7NJHge4kl2RJrq4Ue_DmggljKiMxcbp-eU9jA" />

  <!-- Title -->
  <title>${metaTitle}</title>

  <!-- Favicon -->
  <link rel="shortcut icon" href="/images/whatsapp-icon.png" type="image/x-icon" />
  <link rel="icon" href="/images/whatsapp-icon.png" type="image/x-icon" />

  <!-- Meta Description -->
  <meta name="description" content="${metaDesc}" />
  <meta name="twitter:description" content="${metaDesc}" />
  <meta property="og:description" content="${metaDesc}" />

  <!-- Title Meta -->
  <meta name="twitter:title" content="${metaTitle}" />
  <meta property="og:title" content="${metaTitle}" />

  <!-- Keywords -->
  <meta name="keywords" content="Muhammed Hazil AV, Digital Marketer Kerala, Website Developer Thalassery, SMM Specialist, WordPress Redesign, SEO Optimization, Meta Ads Specialist, Google Ads Calicut, Creative Web Developer India" />

  <!-- Image or Logo -->
  <meta name="image" content="${avatarUrl}" />
  <meta name="twitter:image:src" content="${avatarUrl}" />
  <meta property="og:image" content="${avatarUrl}" />

  <!-- URL & Canonical -->
  <link rel="canonical" href="${canonicalUrl}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${personalInfo.name}" />

  <!-- Author & Robots -->
  <meta name="author" content="${personalInfo.name}" />
  <meta name="robots" content="index, follow" />

  <!-- Schema.org JSON-LD Structured Data -->
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>

  <!-- Tailwind CSS & Google Fonts -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            background: '#0A0B0E',
            card: '#12141C',
            primary: '#F3F4F6',
            secondary: '#9CA3AF',
          },
          fontFamily: {
            heading: ['Bebas Neue', 'sans-serif'],
            body: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <style>
    body { background-color: #0A0B0E; color: #F3F4F6; font-family: 'Inter', sans-serif; overflow-x: hidden; }
    .font-bebas { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em; }
    .glass-card { background: rgba(18, 20, 28, 0.85); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); }
    .glass-card:hover { border-color: rgba(255, 255, 255, 0.2); }

    /* Infinite Full-Time Marquee Animation for Tools */
    @keyframes continuousSlide {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-continuous-slide {
      display: flex;
      width: max-content;
      animation: continuousSlide 26s linear infinite;
    }
  </style>
</head>
<body class="bg-[#0A0B0E] text-[#F3F4F6] antialiased">
  <!-- Navbar Header -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#0A0B0E]/90 backdrop-blur-md border-b border-white/10 py-5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center font-bebas text-lg text-white">⚙</div>
        <span class="font-bebas text-2xl tracking-wider text-white">MUHAMMED HAZIL</span>
      </a>
      <nav class="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-gray-300 uppercase">
        <a href="/#about" class="hover:text-white transition-colors">ABOUT</a>
        <a href="/#works" class="hover:text-white transition-colors">WORK COLLECTIONS</a>
        <a href="/#services" class="hover:text-white transition-colors">PORTFOLIO</a>
      </nav>
      <a href="${personalInfo.whatsapp}" target="_blank" rel="noopener noreferrer" class="px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#25D366] hover:bg-[#20ba5a] hover:shadow-lg transition-all flex items-center gap-1.5">
        <img src="/images/whatsapp-icon.png" alt="WhatsApp" width="20" height="20" class="w-5 h-5 object-contain">
        <span>WhatsApp ↗</span>
      </a>
    </div>
  </header>
`;
}

function getHtmlFooter() {
  return `
  <!-- Footer -->
  <footer class="bg-[#0A0B0E] border-t border-white/10 py-12">
    <div class="max-w-7xl mx-auto px-4 text-center text-xs text-gray-400">
      <p class="font-bebas text-2xl text-white mb-2">MUHAMMED HAZIL AV</p>
      <p class="mb-4">${personalInfo.tagline}</p>
      <p>© ${new Date().getFullYear()} Muhammed Hazil AV. All rights reserved.</p>
    </div>
  </footer>

  <!-- Lightbox Modal Container -->
  <div id="imageLightboxModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0B0E]/95 backdrop-blur-2xl">
    <div class="relative max-w-4xl w-full glass-card rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl flex flex-col items-center">
      <button onclick="closeLightboxModal()" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center">✕</button>
      <img id="lightboxImg" src="" alt="Project Expanded View" class="w-full max-h-[70vh] object-contain rounded-2xl mb-4">
      <h3 id="lightboxTitle" class="font-bebas text-3xl text-white text-center"></h3>
      <p id="lightboxDesc" class="text-xs text-gray-300 text-center max-w-xl mt-1"></p>
    </div>
  </div>

  <!-- Interactive Service Modal Wizard Script -->
  <div id="serviceWizardModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0B0E]/90 backdrop-blur-xl">
    <div class="glass-card max-w-xl w-full rounded-3xl p-6 sm:p-8 border border-white/20 relative shadow-2xl">
      <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div>
          <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Multi-Step Service Wizard</span>
          <h3 id="wizardServiceTitle" class="font-bebas text-3xl text-white">Select Service</h3>
        </div>
        <button onclick="closeWizardModal()" class="p-2 rounded-full bg-[#12141C] text-gray-400 hover:text-white">✕</button>
      </div>

      <!-- Step 1: Budget Range -->
      <div id="wizardStep1" class="space-y-4">
        <label class="block text-xs font-bold text-gray-300 uppercase">Step 1: Select Budget Range</label>
        <div class="space-y-2">
          <label class="flex items-center justify-between p-3 rounded-xl bg-[#0A0B0E] border border-white/10 cursor-pointer hover:border-white">
            <span class="text-xs text-white">Starter (₹15,000 - ₹30,000 / $200 - $400)</span>
            <input type="radio" name="budget" value="₹15k-₹30k" checked class="accent-white">
          </label>
          <label class="flex items-center justify-between p-3 rounded-xl bg-[#0A0B0E] border border-white/10 cursor-pointer hover:border-white">
            <span class="text-xs text-white">Recommended Growth (₹30,000 - ₹60,000 / $400 - $800)</span>
            <input type="radio" name="budget" value="₹30k-₹60k" class="accent-white">
          </label>
          <label class="flex items-center justify-between p-3 rounded-xl bg-[#0A0B0E] border border-white/10 cursor-pointer hover:border-white">
            <span class="text-xs text-white">Enterprise Premium (₹60,000+ / $800+)</span>
            <input type="radio" name="budget" value="₹60k+" class="accent-white">
          </label>
        </div>
        <button onclick="goToWizardStep(2)" class="w-full py-3.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider">Next: Contact Details →</button>
      </div>

      <!-- Step 2: Contact Info -->
      <div id="wizardStep2" class="hidden space-y-4">
        <label class="block text-xs font-bold text-gray-300 uppercase">Step 2: Enter Contact Details</label>
        <input type="text" id="wizName" placeholder="Your Full Name" required class="w-full p-3 rounded-xl bg-[#0A0B0E] border border-white/10 text-xs text-white">
        <input type="email" id="wizEmail" placeholder="Email Address" required class="w-full p-3 rounded-xl bg-[#0A0B0E] border border-white/10 text-xs text-white">
        <input type="tel" id="wizPhone" placeholder="Phone / WhatsApp Number" required class="w-full p-3 rounded-xl bg-[#0A0B0E] border border-white/10 text-xs text-white">
        <textarea id="wizMessage" rows="2" placeholder="Project Notes or Requirements..." class="w-full p-3 rounded-xl bg-[#0A0B0E] border border-white/10 text-xs text-white"></textarea>

        <div class="flex gap-3">
          <button onclick="goToWizardStep(1)" class="w-1/3 py-3 rounded-xl bg-[#12141C] border border-white/10 text-xs text-gray-300">Back</button>
          <button onclick="submitWizardInquiry()" class="w-2/3 py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider">Submit Inquiry & WhatsApp →</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    let currentService = "";
    function openServiceWizard(serviceName) {
      currentService = serviceName;
      document.getElementById('wizardServiceTitle').innerText = serviceName;
      document.getElementById('serviceWizardModal').classList.remove('hidden');
      goToWizardStep(1);
    }
    function closeWizardModal() {
      document.getElementById('serviceWizardModal').classList.add('hidden');
    }
    function openLightboxModal(src, title, desc) {
      document.getElementById('lightboxImg').src = src;
      document.getElementById('lightboxTitle').innerText = title;
      document.getElementById('lightboxDesc').innerText = desc || '';
      document.getElementById('imageLightboxModal').classList.remove('hidden');
    }
    function closeLightboxModal() {
      document.getElementById('imageLightboxModal').classList.add('hidden');
    }
    function goToWizardStep(step) {
      if (step === 1) {
        document.getElementById('wizardStep1').classList.remove('hidden');
        document.getElementById('wizardStep2').classList.add('hidden');
      } else {
        document.getElementById('wizardStep1').classList.add('hidden');
        document.getElementById('wizardStep2').classList.remove('hidden');
      }
    }
    function submitWizardInquiry() {
      const budget = document.querySelector('input[name="budget"]:checked').value;
      const name = document.getElementById('wizName').value || 'Client';
      const email = document.getElementById('wizEmail').value || '';
      const phone = document.getElementById('wizPhone').value || '';
      const msg = document.getElementById('wizMessage').value || '';

      const text = encodeURIComponent("Hi Muhammed Hazil!\\n\\nService: " + currentService + "\\nBudget: " + budget + "\\nName: " + name + "\\nEmail: " + email + "\\nPhone: " + phone + "\\nNotes: " + msg);
      window.open('https://wa.me/919539933265?text=' + text, '_blank');
      closeWizardModal();
    }
  </script>

  <!-- Floating WhatsApp -->
  <a href="${personalInfo.whatsapp}" target="_blank" class="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform">
    📲
  </a>
</body>
</html>`;
}

function renderHomePage() {
  const quadTools = [...toolsList, ...toolsList, ...toolsList, ...toolsList];

  return `${getHtmlHeader("Muhammed Hazil AV — Personal Portfolio")}
  <!-- Hero Section -->
  <section id="hero" class="pt-28 pb-12 bg-[#0A0B0E] relative min-h-screen flex flex-col justify-between items-center text-center overflow-hidden">
    
    <!-- GIANT BACKGROUND WATERMARK TYPOGRAPHY -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-full text-center pointer-events-none select-none z-0">
      <h1 class="font-bebas text-[140px] sm:text-[200px] md:text-[280px] lg:text-[340px] font-black tracking-widest text-[#161822] uppercase opacity-60 leading-none">
        HAZIL
      </h1>
    </div>

    <!-- MAIN HERO GRID -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
      
      <!-- LEFT COLUMN -->
      <div class="lg:col-span-4 text-left flex flex-col justify-center order-2 lg:order-1 z-20">
        <h2 class="font-bebas text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-wider leading-[0.95] mb-4">
          CREATIVE <br />
          <span class="text-gray-300">DEVELOPER</span> & MARKETER
        </h2>

        <p class="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
          Digital marketer and website developer skilled in building responsive custom web platforms, social media campaigns, and data-driven growth strategies across digital channels.
        </p>
      </div>

      <!-- CENTER COLUMN -->
      <div class="lg:col-span-5 relative flex flex-col items-center justify-center order-1 lg:order-2 z-10">
        <div class="relative w-[340px] sm:w-[420px] md:w-[480px] lg:w-[540px] aspect-[4/5] overflow-hidden">
          <img src="/images/profile.png" alt="Muhammed Hazil AV" class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent opacity-90"></div>
        </div>
      </div>

      <!-- RIGHT COLUMN -->
      <div class="lg:col-span-3 text-left flex flex-col justify-center order-3 z-20 space-y-4">
        <div class="p-4 rounded-2xl glass-card border border-white/10 bg-[#12141C]/90 backdrop-blur-md">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">Available for Work</span>
          </div>
          <p class="text-xs text-gray-300 font-medium">Accepting New Client Projects & Freelance Contracts</p>
        </div>

        <div class="p-4 rounded-2xl glass-card border border-white/10 bg-[#12141C]/90 backdrop-blur-md space-y-3">
          <div class="flex items-center justify-between border-b border-white/5 pb-2">
            <span class="text-xs text-gray-400 font-medium">Experience</span>
            <span class="font-bebas text-2xl text-white">1+ Yr</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-400 font-medium">Client Projects</span>
            <span class="font-bebas text-2xl text-white">10+</span>
          </div>
        </div>

        <a href="/#contact" class="w-full py-3.5 px-4 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-lg">
          <span>Start a Project →</span>
        </a>
      </div>

    </div>

    <!-- MARQUEE -->
    <div class="relative z-20 w-full overflow-hidden mt-12 py-2">
      <div class="w-full overflow-hidden relative">
        <div class="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0A0B0E] to-transparent z-10 pointer-events-none"></div>
        <div class="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0A0B0E] to-transparent z-10 pointer-events-none"></div>

        <div class="animate-continuous-slide gap-4 px-2">
          ${quadTools.map(t => `
            <div class="shrink-0 px-5 py-2.5 rounded-full bg-[#141622]/80 border border-white/10 text-xs font-bold text-gray-300 flex items-center gap-2 shadow-sm">
              <span class="text-white">✦</span>
              <span>${t}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-24 bg-[#0A0B0E] border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">CRAFTING DIGITAL GROWTH & MODERN EXPERIENCES</span>
        <h2 class="font-bebas text-6xl sm:text-7xl text-white tracking-wider">ABOUT <span class="text-gray-400">ME</span></h2>
      </div>

      <div class="max-w-3xl mx-auto text-center mb-12 space-y-4">
        <h3 class="font-bebas text-3xl text-white tracking-wide">BIO & PROFESSIONAL PERSPECTIVE</h3>
        <p class="text-gray-300 text-sm sm:text-base leading-relaxed">${personalInfo.bio}</p>
        <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">With hands-on experience in website design, social media management, SEO optimization, and digital advertising, I build responsive platforms and execute performance-driven marketing campaigns.</p>
        
        <div class="inline-flex items-center gap-6 px-6 py-2.5 bg-[#12141C] rounded-2xl border border-white/10 text-xs text-gray-300">
          <span>📍 ${personalInfo.location}</span>
          <span class="text-emerald-400 font-bold">● Available for Freelance & Client Contracts</span>
        </div>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        ${stats.map(s => `
          <div class="glass-card p-6 rounded-2xl text-center bg-[#12141C]">
            <div class="font-bebas text-5xl text-white mb-1">${s.value}</div>
            <div class="text-sm font-bold text-gray-200">${s.label}</div>
            <div class="text-xs text-gray-400 mt-1">${s.detail}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Works Showcase Grid -->
  <section id="works" class="py-24 bg-[#0A0B0E] border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center mb-16">
        <span class="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">EXPLORE MY WORK COLLECTIONS</span>
        <h2 class="font-bebas text-6xl sm:text-7xl text-white tracking-wider">PORTFOLIO <span class="text-gray-400">SHOWCASE</span></h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${worksCategories.map(cat => `
          <div class="glass-card rounded-3xl overflow-hidden flex flex-col justify-between p-6 bg-[#12141C]">
            <div>
              <img src="${cat.image}" alt="${cat.title}" class="rounded-2xl w-full aspect-[16/10] object-cover mb-4">
              <h3 class="font-bebas text-3xl text-white mb-2">${cat.title}</h3>
              <p class="text-gray-400 text-xs mb-4">${cat.description}</p>
            </div>
            <a href="/works/${cat.slug}" class="w-full text-center py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider">Explore Category →</a>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="py-24 bg-[#0A0B0E] border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">SPECIALIZED SERVICES & SOLUTIONS</span>
        <h2 class="font-bebas text-6xl sm:text-7xl text-white tracking-wider">SELECT SERVICE & <span class="text-gray-400">BUDGET RANGE</span></h2>
        <p class="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm mt-3">Click any service card below to open the interactive project budget & scope wizard.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${services.map((ser, idx) => `
          <div onclick="openServiceWizard('${ser.title.replace(/'/g, "\\'")}')" class="glass-card rounded-3xl p-8 border border-white/10 bg-[#12141C] hover:border-white/30 transition-all flex flex-col justify-between cursor-pointer group shadow-xl">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white group-hover:bg-white group-hover:text-black transition-all">
                  ${ser.icon}
                </div>
                <span class="text-xs font-bold tracking-widest text-gray-500 uppercase">0${idx + 1}</span>
              </div>
              <h3 class="font-bebas text-3xl text-white tracking-wide mb-3 group-hover:text-gray-300 transition-colors">${ser.title}</h3>
              <p class="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">${ser.description}</p>
            </div>
            <button class="w-full py-3.5 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-white group-hover:bg-white group-hover:text-black transition-all duration-300 uppercase tracking-wider shadow-sm">
              Select Service & Budget →
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Skills, Experience & Education Section (Positioned After Services) -->
  <section id="skills-experience" class="py-24 bg-[#0A0B0E] border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Core Skills -->
      <div class="mb-20">
        <div class="mb-8">
          <h3 class="font-bebas text-4xl text-white tracking-wide">CORE SKILLS & TECH STACK</h3>
          <p class="text-xs sm:text-sm text-gray-400">Categorized capabilities across development, marketing, and creative tools.</p>
        </div>
        <div class="glass-card p-8 rounded-3xl border border-white/10 bg-[#12141C]">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            ${skillCategories[0].skills.map(s => `
              <div class="flex items-center gap-3 p-3.5 rounded-xl bg-[#05070B] border border-white/10 text-sm text-gray-200">
                <span class="text-[#00BFFF]">✓</span>
                <span>${s}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="mb-20">
        <div class="mb-8">
          <h3 class="font-bebas text-4xl text-white tracking-wide">CERTIFICATIONS & CREDENTIALS</h3>
          <p class="text-xs sm:text-sm text-gray-400">Industry certifications in Analytics, Search Ads, Video Ads, SEO, and Content Strategy.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between bg-[#12141C]">
            <div>
              <h4 class="text-sm font-bold text-white">Google Analytics Certification</h4>
              <span class="text-xs text-gray-400">Google</span>
            </div>
            <span class="text-xs font-semibold text-[#00BFFF] bg-[#0B6CFF]/15 px-3 py-1 rounded-full border border-[#00BFFF]/20 shrink-0">Sep 2025</span>
          </div>
          <div class="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between bg-[#12141C]">
            <div>
              <h4 class="text-sm font-bold text-white">Google Ads Search Certification</h4>
              <span class="text-xs text-gray-400">Google</span>
            </div>
            <span class="text-xs font-semibold text-[#00BFFF] bg-[#0B6CFF]/15 px-3 py-1 rounded-full border border-[#00BFFF]/20 shrink-0">Sep 2025</span>
          </div>
          <div class="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between bg-[#12141C]">
            <div>
              <h4 class="text-sm font-bold text-white">Google Ads Video Certification</h4>
              <span class="text-xs text-gray-400">Google</span>
            </div>
            <span class="text-xs font-semibold text-[#00BFFF] bg-[#0B6CFF]/15 px-3 py-1 rounded-full border border-[#00BFFF]/20 shrink-0">Sep 2025</span>
          </div>
          <div class="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between bg-[#12141C]">
            <div>
              <h4 class="text-sm font-bold text-white">SEMrush SEO & Research</h4>
              <span class="text-xs text-gray-400">SEMrush</span>
            </div>
            <span class="text-xs font-semibold text-[#00BFFF] bg-[#0B6CFF]/15 px-3 py-1 rounded-full border border-[#00BFFF]/20 shrink-0">Sep 2025</span>
          </div>
          <div class="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between bg-[#12141C]">
            <div>
              <h4 class="text-sm font-bold text-white">HubSpot Content Marketing</h4>
              <span class="text-xs text-gray-400">HubSpot</span>
            </div>
            <span class="text-xs font-semibold text-[#00BFFF] bg-[#0B6CFF]/15 px-3 py-1 rounded-full border border-[#00BFFF]/20 shrink-0">Sep 2025</span>
          </div>
          <div class="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between bg-[#12141C]">
            <div>
              <h4 class="text-sm font-bold text-white">One Million Prompters</h4>
              <span class="text-xs text-gray-400">Prompter Certification</span>
            </div>
            <span class="text-xs font-semibold text-[#00BFFF] bg-[#0B6CFF]/15 px-3 py-1 rounded-full border border-[#00BFFF]/20 shrink-0">July 2026</span>
          </div>
        </div>
      </div>

      <!-- Experience & Education -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-7">
          <h3 class="font-bebas text-4xl text-white tracking-wide mb-8">💼 WORK EXPERIENCE</h3>
          <div class="space-y-6">
            <div class="glass-card p-6 rounded-2xl border border-white/10 bg-[#12141C]">
              <div class="flex items-center justify-between gap-2 mb-2">
                <h4 class="text-lg font-bold text-white">Freelance / Project-Based Developer & Marketer</h4>
                <span class="text-xs font-semibold text-[#00BFFF] bg-[#0B6CFF]/15 px-3 py-1 rounded-full border border-[#00BFFF]/20 shrink-0">2025 – 2026</span>
              </div>
              <div class="text-xs text-gray-400 mb-3">Remote Clients</div>
              <p class="text-xs text-gray-300 mb-3">Developed and redesigned client websites with responsive structure and optimized UX. Managed brand social accounts and Meta/Google Ads.</p>
            </div>
            <div class="glass-card p-6 rounded-2xl border border-white/10 bg-[#12141C]">
              <div class="flex items-center justify-between gap-2 mb-2">
                <h4 class="text-lg font-bold text-white">Digital Marketing Intern</h4>
                <span class="text-xs font-semibold text-[#00BFFF] bg-[#0B6CFF]/15 px-3 py-1 rounded-full border border-[#00BFFF]/20 shrink-0">Jun 2025</span>
              </div>
              <div class="text-xs text-gray-400 mb-3">Quadcubes Digital Marketing Agency, Calicut</div>
              <p class="text-xs text-gray-300 mb-3">Conducted in-depth SEO research and keyword analysis, created social media content calendars, and prepared analytics reports.</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5">
          <h3 class="font-bebas text-4xl text-white tracking-wide mb-8">🎓 EDUCATION & ACADEMICS</h3>
          <div class="space-y-6">
            <div class="glass-card p-6 rounded-2xl border border-white/10 bg-[#12141C]">
              <div class="flex items-center justify-between gap-2 mb-2">
                <h4 class="text-base font-bold text-white">Certificate in Digital Marketing</h4>
                <span class="text-xs font-semibold text-[#00BFFF] bg-[#0B6CFF]/15 px-3 py-1 rounded-full border border-[#00BFFF]/20 shrink-0">Sep 2025</span>
              </div>
              <div class="text-xs text-gray-400 mt-1">CDA Academy, Calicut</div>
            </div>
            <div class="glass-card p-6 rounded-2xl border border-white/10 bg-[#12141C]">
              <div class="flex items-center justify-between gap-2 mb-2">
                <h4 class="text-base font-bold text-white">Plus Two — Science</h4>
                <span class="text-xs font-semibold text-[#00BFFF] bg-[#0B6CFF]/15 px-3 py-1 rounded-full border border-[#00BFFF]/20 shrink-0">Jun 2022</span>
              </div>
              <div class="text-xs text-gray-400 mt-1">GVHSS Chirakkara, Thalassery</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-24 bg-[#0A0B0E] border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center mb-16">
        <span class="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">GET IN TOUCH</span>
        <h2 class="font-bebas text-5xl sm:text-6xl text-white tracking-wide">LET'S BUILD SOMETHING <span class="text-gray-400">EXTRAORDINARY</span></h2>
        <p class="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm mt-2">Have a new project, redesign inquiry, or growth strategy in mind? Send a message or connect directly.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        <!-- Left Column: Contact Details -->
        <div class="lg:col-span-5 flex flex-col">
          <div class="glass-card h-full p-8 rounded-3xl border border-white/10 flex flex-col justify-between bg-[#12141C]">
            <div class="flex flex-col gap-4">
              <h3 class="font-bebas text-3xl text-white tracking-wide">CONTACT DETAILS</h3>
              <p class="text-xs sm:text-sm text-gray-400 leading-relaxed">Reach out for freelance project bookings, website redesign audits, or strategic digital marketing consultation.</p>

              <div class="space-y-4 pt-2">
                <a href="mailto:${personalInfo.email}" class="flex items-center gap-4 p-4 rounded-2xl bg-[#0A0B0E] border border-white/10 hover:border-white/30 transition-colors group">
                  <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">✉</div>
                  <div class="min-w-0">
                    <div class="text-[11px] text-gray-400 font-medium">Email Address</div>
                    <div class="text-xs sm:text-sm font-semibold text-white truncate">${personalInfo.email}</div>
                  </div>
                </a>

                <a href="${personalInfo.whatsapp}" target="_blank" class="flex items-center gap-4 p-4 rounded-2xl bg-[#0A0B0E] border border-white/10 hover:border-white/30 transition-colors group">
                  <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">📞</div>
                  <div>
                    <div class="text-[11px] text-gray-400 font-medium">Phone / WhatsApp</div>
                    <div class="text-xs sm:text-sm font-semibold text-white">${personalInfo.phone}</div>
                  </div>
                </a>

                <div class="flex items-center gap-4 p-4 rounded-2xl bg-[#0A0B0E] border border-white/10">
                  <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">📍</div>
                  <div>
                    <div class="text-[11px] text-gray-400 font-medium">Location</div>
                    <div class="text-xs sm:text-sm font-semibold text-white">${personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-white/10">
              <span class="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">Connect on Social Platforms</span>
              <div class="flex items-center gap-3">
                <a href="${personalInfo.linkedin}" target="_blank" class="p-3 rounded-xl bg-[#0A0B0E] border border-white/10 text-gray-300 hover:text-white transition-all text-xs font-semibold">LinkedIn</a>
                <a href="${personalInfo.instagram}" target="_blank" class="p-3 rounded-xl bg-[#0A0B0E] border border-white/10 text-gray-300 hover:text-white transition-all text-xs font-semibold">Instagram</a>
                <a href="${personalInfo.website}" target="_blank" class="p-3 rounded-xl bg-[#0A0B0E] border border-white/10 text-gray-300 hover:text-white transition-all text-xs font-semibold">Website</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Direct Message Form -->
        <div class="lg:col-span-7 flex flex-col">
          <div class="glass-card h-full p-8 rounded-3xl border border-white/10 flex flex-col justify-between bg-[#12141C]">
            <div>
              <h3 class="font-bebas text-3xl text-white tracking-wide mb-6">SEND A DIRECT MESSAGE</h3>

              <form onsubmit="event.preventDefault(); window.open('https://wa.me/919539933265?text=' + encodeURIComponent('Direct Inquiry from Website\\nName: ' + this.name.value + '\\nEmail: ' + this.email.value + '\\nType: ' + this.projectType.value + '\\nMessage: ' + this.message.value), '_blank');" class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Your Name</label>
                    <input type="text" name="name" required placeholder="e.g. John Doe" class="w-full px-4 py-3.5 rounded-xl bg-[#0A0B0E] border border-white/10 text-white placeholder-gray-500 text-xs">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" name="email" required placeholder="e.g. john@example.com" class="w-full px-4 py-3.5 rounded-xl bg-[#0A0B0E] border border-white/10 text-white placeholder-gray-500 text-xs">
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Project Type</label>
                  <select name="projectType" class="w-full px-4 py-3.5 rounded-xl bg-[#0A0B0E] border border-white/10 text-white text-xs">
                    <option value="Website Development">Website Design & Development</option>
                    <option value="Website Redesign">Website Redesign & Audit</option>
                    <option value="SEO Optimization">SEO & Keyword Optimization</option>
                    <option value="Social Media Management">Social Media Strategy & Reels</option>
                    <option value="Branding & Posters">Branding & Poster Design</option>
                    <option value="Meta & Google Ads">Meta & Google Ad Support</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Project Message</label>
                  <textarea name="message" rows="4" required placeholder="Tell me about your project goals, timelines, and requirements..." class="w-full px-4 py-3.5 rounded-xl bg-[#0A0B0E] border border-white/10 text-white placeholder-gray-500 text-xs resize-none"></textarea>
                </div>

                <button type="submit" class="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#0B6CFF] to-[#00BFFF] text-xs uppercase tracking-wider">Submit Inquiry →</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  ${getHtmlFooter()}`;
}

function renderCategoryPage(slug) {
  const cat = worksCategories.find(c => c.slug === slug);
  if (!cat) return null;

  return `${getHtmlHeader(`${cat.title} — Muhammed Hazil AV`)}
  <div class="pt-32 pb-24 max-w-7xl mx-auto px-4">
    <a href="/#works" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12141C] border border-white/10 text-xs font-bold text-gray-300 hover:text-white transition-all mb-8">← Back to Works Grid</a>
    
    <!-- Hero Banner -->
    <div class="glass-card p-8 sm:p-12 rounded-3xl mb-16 border border-white/10 bg-[#12141C]">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7">
          <span class="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-3">Portfolio Category Inner Page</span>
          <h1 class="font-bebas text-5xl sm:text-6xl text-white mb-4 tracking-wide">${cat.title}</h1>
          <p class="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">${cat.subtitle}</p>
          <div class="flex flex-wrap gap-2 mb-6">
            ${cat.deliverables.map(d => `<span class="text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">✓ ${d}</span>`).join('')}
          </div>
        </div>
        <div class="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 cursor-pointer" onclick="openLightboxModal('${cat.image}', '${cat.title.replace(/'/g, "\\'")}', '${cat.subtitle.replace(/'/g, "\\'")}')">
          <img src="${cat.image}" alt="${cat.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
          <div class="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/80 text-[10px] text-white">🔍 Click to Expand</div>
        </div>
      </div>
    </div>
    
    <!-- Header for Client Project Showcase -->
    <div class="flex flex-col mb-10 text-center sm:text-left">
      <span class="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">CLIENT PROJECTS SHOWCASE</span>
      <h2 class="font-bebas text-4xl sm:text-5xl text-white tracking-wide">EXPLORE WORKS</h2>
    </div>

    <!-- Project Slots Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      ${cat.projects.map((p, idx) => `
        <div class="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 bg-[#12141C] flex flex-col justify-between group hover:border-white/30 transition-all shadow-xl">
          <div>
            <!-- Top Image Card -->
            <div class="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 mb-6 cursor-pointer" onclick="openLightboxModal('${p.image || cat.image}', '${p.title.replace(/'/g, "\\'")}', '${p.summary.replace(/'/g, "\\'")}')">
              <img src="${p.image || cat.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md p-1.5 rounded-lg text-[10px] text-white">🔍 Expand</div>
            </div>

            <!-- Client & Slot Header Alignment -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-xs font-bold text-gray-200 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">Client: ${p.client}</span>
              <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Slot ${idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}</span>
            </div>

            <h3 class="font-bebas text-3xl text-white tracking-wide mb-3 group-hover:text-gray-200 transition-colors">${p.title}</h3>
            <p class="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">${p.summary}</p>
            
            <div class="bg-[#0A0B0E] p-4 rounded-2xl border border-white/5 mb-6 text-xs text-gray-400 leading-relaxed">
              <span class="font-bold text-white block mb-1">Execution & Strategy:</span>
              ${p.details}
            </div>
          </div>

          <!-- Strategy Tags -->
          <div class="flex flex-wrap gap-2 border-t border-white/5 pt-4">
            ${p.tags.map(t => `<span class="text-[10px] font-semibold text-gray-400 bg-white/5 px-2.5 py-1 rounded-md">#${t}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  </div>
  ${getHtmlFooter()}`;
}

const requestHandler = (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const url = parsedUrl.pathname;

  // Handle Static Files
  if (url.startsWith("/images/") || url === "/favicon.ico") {
    const filePath = path.join(PUBLIC_DIR, url.replace("/images/", "images/"));
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Image not found");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    });
    return;
  }

  // Handle Category Inner Routes
  if (url.startsWith("/works/")) {
    const slug = url.substring(7);
    const html = renderCategoryPage(slug);
    if (html) {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(html);
      return;
    }
  }

  // Default Home Page
  if (url === "/" || url === "/index.html") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(renderHomePage());
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!DOCTYPE html>\n<html>\n<head><title>404 Not Found</title></head>\n<body>\n<h1>404 Not Found</h1>\n<p><a href="/">Return Home</a></p>\n</body>\n</html>`);
};

if (require.main === module) {
  const server = http.createServer(requestHandler);
  server.listen(PORT, () => {
    console.log(`\n==================================================`);
    console.log(`🚀 Muhammed Hazil AV Portfolio Website is LIVE!`);
    console.log(`👉 Access URL: http://localhost:${PORT}`);
    console.log(`==================================================\n`);
  });
}

module.exports = requestHandler;
