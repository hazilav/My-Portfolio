import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { personalInfo } from "@/data/resumeData";

export const metadata = {
  title: `${personalInfo.name} — Digital Marketer & Website Developer`,
  description: `${personalInfo.bio} Specialized in WordPress, Elementor, SEO, SMM, and Meta/Google Ads.`,
  keywords: [
    "Muhammed Hazil AV",
    "Digital Marketer Kerala",
    "Website Developer Thalassery",
    "SMM Specialist",
    "WordPress Redesign",
    "SEO Optimization",
    "Meta Ads Specialist",
    "Google Ads Calicut",
  ],
  authors: [{ name: personalInfo.name }],
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
        alt: personalInfo.name,
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
