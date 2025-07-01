"use client";

import React, { useState } from "react";
import { GraduationCap, CheckCircle, ChevronRight, ArrowLeft, Sparkles, Menu, X } from "lucide-react";
import { PreviewScreens } from "./PreviewScreens";
import messages from "./messages";
import { useRouter } from 'next/navigation';

const features = [
  "Student Portal with secure login",
  "Grade Management & Reporting",
  "Parent Communication Dashboard",
  "Assignment & Homework Tracking",
  "Attendance Automation",
  "Multi-role Access (Admin, Teacher, Parent, Student)",
  "Mobile App Integration",
  "Notifications & Announcements",
  "Analytics & Insights for School Leaders",
  "Weekly Plan Digitalization",
  "AI Teacher Timetable Generation",
  "Student Registration"
];

const additionalFeatures = [
  "Automated Telegram Notifications",
  "Media Gallery for School Events",
  "Student Behavior Tracking",
  "Automated SMS Alerts for Parents",
  "Teacher Performance Evaluation",
  "Integrated HR & Payroll Management"
];

export default function SofufLMSClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const t = messages[lang];
  const isArabic = lang === 'ar';
  const router = useRouter();
  return (
    <div className={"min-h-screen bg-black text-white overflow-hidden relative " + (isArabic ? 'font-arabic' : '')} dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30" style={{background: `radial-gradient(circle at 50% 30%, rgba(59,130,246,0.15) 0%, transparent 60%)`}} />
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-80" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '2s' }} />
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,backgroundSize: '50px 50px'}} />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-300" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">{t.nav.back}</span>
          </button>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
              <div className="relative w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center font-bold text-xl transform group-hover:scale-110 transition-all duration-300">
                S
              </div>
              <div className="absolute -bottom-2 -right-3 bg-black text-cyan-400 text-xs px-2 py-1 rounded-full font-mono border border-cyan-400/30">
                dev
              </div>
            </div>
            <span className={`text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${isArabic ? 'mr-6' : 'ml-2'}`}>
              {t.nav.sofuf}
            </span>
            <div className="text-xs text-slate-400 font-mono -mt-1">{t.nav.project}</div>
          </div>
          {/* Desktop Get Started Button */}
          <button
            className="hidden md:inline-block relative group overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={() => router.push('/contact')}
          >
            <span className="relative z-10 text-base">{t.nav.getStarted}</span>
          </button>
          {/* Mobile Menu Button */}
          <button className="md:hidden relative z-10 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          {/* Language Switcher for desktop */}
          <div className="hidden md:flex gap-2 ml-4">
            <button
              onClick={() => {
                setLang('en');
                setIsMenuOpen(false);
              }}
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
              onClick={() => {
                setLang('ar');
                setIsMenuOpen(false);
              }}
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
        </div>
        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-slate-800 p-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-6">
              <button
                className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-full font-semibold text-left transition-all duration-300"
                onClick={() => { setIsMenuOpen(false); router.push('/contact'); }}
              >
                {t.nav.getStarted}
              </button>
              <div className="flex md:hidden gap-2 mt-2">
                <button
                  onClick={() => {
                    setLang('en');
                    setIsMenuOpen(false);
                  }}
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
                  onClick={() => {
                    setLang('ar');
                    setIsMenuOpen(false);
                  }}
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
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-lg border border-slate-600 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">{t.hero.title1}</span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black text-xs px-2 py-1 rounded-full font-bold">{t.hero.badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.hero.title1}
            </span>
            <br />
            <span className="text-white">{t.hero.title2}</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.desc}
          </p>
        </div>
      </section>

      {/* System Description Paragraph for SEO */}
      <section className="relative z-10 px-6 py-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-200 mb-8">
            {t.systemDescription}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {t.featuresTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.features.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center space-x-4 bg-slate-900/60 rounded-2xl p-6 border border-slate-700/50">
                <CheckCircle className="w-7 h-7 text-cyan-400 flex-shrink-0" />
                <span className="text-lg text-slate-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {t.additionalFeaturesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.additionalFeatures.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center space-x-4 bg-slate-900/60 rounded-2xl p-6 border border-slate-700/50">
                <CheckCircle className="w-7 h-7 text-purple-400 flex-shrink-0" />
                <span className="text-lg text-slate-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery (UI Previews) */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {t.screenshotsTitle}
          </h2>
          <PreviewScreens />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t.cta.title}
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t.cta.desc}
              </p>
              <button
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                onClick={() => router.push('/contact')}
              >
                <span className="relative z-10">{t.cta.getStarted}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 