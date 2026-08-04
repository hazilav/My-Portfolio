import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { personalInfo } from "@/data/resumeData";

export const metadata = {
  metadataBase: new URL(personalInfo.website || "https://hazilav.vercel.app"),
  title: {
    default: `${personalInfo.name} — Digital Marketer & Website Developer`,
    template: `%s | ${personalInfo.name}`,
  },
  description: `${personalInfo.bio} Specializing in WordPress, Elementor, SEO Optimization, SMM, and Meta/Google Ads.`,
  keywords: [
    "Muhammed Hazil AV",
    "Digital Marketer Kerala",
    "Website Developer Thalassery",
    "SMM Specialist",
    "WordPress Redesign",
    "SEO Optimization",
    "Meta Ads Specialist",
    "Google Ads Calicut",
    "Creative Web Developer India",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.website }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${personalInfo.name} — Portfolio & Digital Services`,
    description: personalInfo.tagline,
    url: personalInfo.website,
    siteName: personalInfo.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: personalInfo.avatar,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} — Digital Marketer & Website Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — Digital Marketer & Website Developer`,
    description: personalInfo.tagline,
    images: [personalInfo.avatar],
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${personalInfo.website}/#person`,
      name: personalInfo.name,
      alternateName: "Muhammed Hazil",
      jobTitle: "Digital Marketer & Website Developer",
      description: personalInfo.bio,
      url: personalInfo.website,
      image: `${personalInfo.website}${personalInfo.avatar}`,
      sameAs: [personalInfo.whatsapp, "https://github.com/hazilav"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Thalassery",
        addressRegion: "Kerala",
        addressCountry: "India",
      },
      knowsAbout: [
        "Website Design & Development",
        "WordPress Development",
        "Elementor",
        "SEO Optimization",
        "Social Media Marketing (SMM)",
        "Meta Ads",
        "Google Ads",
        "React & Next.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${personalInfo.website}/#website`,
      url: personalInfo.website,
      name: `${personalInfo.name} — Portfolio & Digital Services`,
      description: personalInfo.tagline,
      publisher: {
        "@id": `${personalInfo.website}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${personalInfo.website}/#service`,
      name: `${personalInfo.name} Digital Services`,
      url: personalInfo.website,
      image: `${personalInfo.website}${personalInfo.avatar}`,
      priceRange: "₹15,000 - ₹60,000+",
      telephone: "+919539933265",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Thalassery",
        addressRegion: "Kerala",
        addressCountry: "India",
      },
      serviceType: [
        "Website Design & Development",
        "SEO Optimization & Audits",
        "Social Media Content Creation",
        "Website Redesign & UX Overhaul",
        "Branding & Poster Design",
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="bg-[#05070B] text-[#F5F5F5] antialiased selection:bg-[#0B6CFF] selection:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
