"use client";

import React, { useState } from "react";
import { Mail, Phone, Instagram, MessageCircle, ArrowRight, ArrowLeft } from "lucide-react";
import messages from "./messages";

export default function ContactPage() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const t = messages[lang];
  const isArabic = lang === 'ar';
  return (
    <div className={`min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16 ${isArabic ? 'font-arabic' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Top Controls: Language Switcher & Back Button */}
      <div className={`w-full max-w-lg flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 mt-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
        <div className="flex gap-3">
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-2 rounded-full shadow transition-all border font-bold text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2
              ${lang === 'en'
                ? 'bg-cyan-500 text-white border-cyan-500 shadow-lg scale-105'
                : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'}
            `}
            aria-current={lang === 'en' ? 'true' : undefined}
          >
            EN
          </button>
          <button
            onClick={() => setLang('ar')}
            className={`px-4 py-2 rounded-full shadow transition-all border font-bold text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2
              ${lang === 'ar'
                ? 'bg-cyan-500 text-white border-cyan-500 shadow-lg scale-105'
                : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'}
            `}
            aria-current={lang === 'ar' ? 'true' : undefined}
          >
            عربي
          </button>
        </div>
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t.back}</span>
        </button>
      </div>
      <div className="max-w-lg w-full bg-slate-900/80 rounded-3xl shadow-2xl border border-slate-700/50 p-10 flex flex-col items-center mt-4">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {t.title}
        </h1>
        <p className="text-lg text-slate-300 mb-4 text-center">
          {t.intro}
        </p>
        <div className="w-full mb-8 bg-slate-800/70 border border-cyan-700 rounded-xl p-5 text-base text-slate-200 text-center shadow-lg">
          {t.instructions}
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* WhatsApp */}
          <a
            href="https://wa.me/971543501104"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-gradient-to-r from-green-400 to-cyan-500 text-black font-bold px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform group"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-green-700 group-hover:text-cyan-700 transition-colors" />
              WhatsApp
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Call */}
          <a
            href="tel:+971543501104"
            className="flex items-center justify-between bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform group"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-cyan-200 group-hover:text-purple-200 transition-colors" />
              +971 54 350 1104
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Email */}
          <a
            href="mailto:odat@sofuf.com"
            className="flex items-center justify-between bg-slate-800 text-white font-bold px-6 py-4 rounded-xl shadow-lg hover:bg-slate-700 hover:scale-105 transition-all group"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-cyan-400 group-hover:text-pink-400 transition-colors" />
              odat@sofuf.com
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/sofufedu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform group"
          >
            <div className="flex items-center gap-3">
              <Instagram className="w-6 h-6 text-pink-200 group-hover:text-yellow-200 transition-colors" />
              @sofufedu
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-10 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} Sofuf. All rights reserved.
        </div>
      </div>
    </div>
  );
} 