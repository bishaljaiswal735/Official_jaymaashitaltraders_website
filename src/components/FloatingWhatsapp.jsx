// src/components/FloatingWhatsApp.jsx

import React from "react";
import whatsapp_logo from "../assets/whatsapp_logo.png";

export default function FloatingWhatsapp() {
    return (
      <a
        href="https://wa.me/9779818607337"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-slate-400 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer hover:text-red-500"
      >
        <img src={whatsapp_logo} alt="WhatsApp" className="w-5 h-5" />
        <span className="text-sm font-medium">Chat with us on WhatsApp</span>
      </a>
    );
  }
  