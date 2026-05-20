import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import MainSection1 from "../components/MainSection1";
import MainSection2 from "../components/MainSection2";
import MainSection3 from "../components/MainSection3";
import LastSection from "../components/LastSection";
import FloatingWhatsapp from "../components/FloatingWhatsapp";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jay Maa Shitala Traders Pvt. Ltd.",
  "description": "Leading manufacturer and supplier of GI nipples, flanges, elbows, tees, sockets, gate valves and plumbing hardware in Nepal.",
  "url": "https://www.jmstraders.com.np",
  "telephone": "+9779818607337",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NP",
    "addressRegion": "Bagmati"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "GI Fittings & Hardware",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "GI Nipple" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "MS Flange" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "GI Flange" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "GI Elbow" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "GI Tee" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "GI Socket" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "GI Union" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Gate Valve" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Sluice Valve" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Saddle" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Water Meter" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Ferrule" } }
    ]
  }
};

function Home() {
  return (
    <>
      <Helmet>
        <title>Jay Maa Shitala Traders Pvt. Ltd. | GI Fittings & Hardware Supplier Nepal</title>
        <meta name="description" content="Leading manufacturer and supplier of GI nipples, flanges, elbows, tees, sockets, gate valves and plumbing hardware in Nepal. Trusted by government and private projects." />
        <meta name="keywords" content="GI nipple Nepal, GI flange Nepal, GI elbow Nepal, GI tee Nepal, GI socket Nepal, gate valve Nepal, sluice valve Nepal, MS flange Nepal, plumbing hardware Nepal, pipe fittings Nepal, GI fittings supplier Nepal" />
        <link rel="canonical" href="https://www.jmstraders.com.np/" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <div className="relative ">
        <HeroSection />
        <MainSection />
        <MainSection1 />
        <MainSection2 />
        <MainSection3 />
        <LastSection />
        <FloatingWhatsapp />
      </div>
    </>
  );
}

export default Home;
