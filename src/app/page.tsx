"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Zap, Shield, Users, ArrowRight, Menu, X, Sparkles, Star, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SofufLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Tailored Software Solutions",
      description: "Custom systems designed to match your exact business needs",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast & Reliable Deployment",
      description: "Get your solution up and running quickly, with ongoing support and updates",
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise-Grade Security",
      description: "Secure and scalable software built to industry standards",
      gradient: "from-green-400 to-emerald-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Seamless Team Access",
      description: "Multi-user systems with roles, permissions, and access control.",
      gradient: "from-purple-400 to-pink-400"
    }
  ];

  const stats = [
    { value: "20+", label: "Projects Delivered" },
    { value: "4+", label: "Years of Combined Experience" },
    { value: "99.9%", label: "Reliable Performance" },
    { value: "7 days", label: "Avg. Project Delivery Time" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Enhanced animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient mesh */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
          }}
        />

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-80" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '3s' }} />

        {/* Large background orbs */}
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Enhanced Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sofuf
              </span>
              <div className="text-xs text-slate-400 font-mono -mt-1">v2.0 • Alpha</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="relative group text-slate-300 hover:text-white transition-colors duration-300">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="/projects" className="relative group text-slate-300 hover:text-white transition-colors duration-300">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#about" className="relative group text-slate-300 hover:text-white transition-colors duration-300">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </a>
            <button
              className="relative group overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => router.push('/contact')}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative z-10 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-slate-800 p-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-6">
              <a href="#features" className="text-lg hover:text-cyan-400 transition-colors duration-300">Features</a>
              <a href="/projects" className="text-lg hover:text-cyan-400 transition-colors duration-300">Projects</a>
              <a href="#about" className="text-lg hover:text-cyan-400 transition-colors duration-300">About</a>
              <button
                className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-full font-semibold text-left transition-all duration-300"
                onClick={() => { setIsMenuOpen(false); router.push('/contact'); }}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className="transform transition-all duration-1000 ease-out"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-lg border border-slate-600 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Introducing Sofuf Custom Software 2.0</span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black text-xs px-2 py-1 rounded-full font-bold">NEW</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Business Software
              </span>
              <br />
              <span className="text-white">Done Right</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We develop the right software for your business needs, whether it's a Learning Management System (LMS), Point of Sale (POS), Inventory Management, Customer Relationship Management (CRM), HR systems, or a fully customized application tailored to your workflow.
            </p>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              onClick={() => router.push('/contact')}
            >
              <span className="relative z-10">Contact Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="group flex items-center space-x-3 px-10 py-5 rounded-full text-lg font-bold border-2 border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105"
              onClick={() => router.push('/projects')}
            >
              <Play className="w-5 h-5" />
              <span>See Our Work </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Enhanced code preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              {/* Window controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg" />
                  <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg" />
                  <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg" />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 text-sm font-mono">sofuf-lms-app.js</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Code content */}
              <div className="text-left font-mono text-base text-slate-300 space-y-3 leading-relaxed">
                <div className="flex items-center space-x-2">
                  <span className="text-slate-500">01</span>
                  <span className="text-purple-400">// ⚙️ Sofuf builds your system from the ground up</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-500">02</span>
                  <span className="text-cyan-400">const</span>
                  <span className="text-white ml-2">app</span>
                  <span className="text-slate-400 ml-2">=</span>
                  <span className="text-purple-400 ml-2">await</span>
                  <span className="text-yellow-400 ml-2">sofuf</span>
                  <span className="text-cyan-400">.create</span>
                  <span>(</span><span>{'{'}</span>
                </div>
                <div className="flex items-center space-x-2 ml-8">
                  <span className="text-slate-500">03</span>
                  <span className="text-green-400">prompt</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-orange-400 ml-2">"Build a custom LMS for a private school"</span>
                  <span>,</span>
                </div>
                <div className="flex items-center space-x-2 ml-8">
                  <span className="text-slate-500">04</span>
                  <span className="text-green-400">framework</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-orange-400 ml-2">"next"</span>
                  <span>,</span>
                </div>
                <div className="flex items-center space-x-2 ml-8">
                  <span className="text-slate-500">05</span>
                  <span className="text-green-400">ai</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-blue-400 ml-2">false</span>
                  <span>,</span>
                </div>
                <div className="flex items-center space-x-2 ml-8">
                  <span className="text-slate-500">06</span>
                  <span className="text-green-400">deploy</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-orange-400 ml-2">"auto"</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-500">07</span>
                  <span>{'}'}</span><span>);</span>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-slate-500">08</span>
                  <span className="text-slate-500">// 🎉 Your software is ready — tailored to your specs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-500">09</span>
                  <span className="text-green-400">console</span>
                  <span>.</span>
                  <span className="text-cyan-400">log</span>
                  <span>(</span>
                  <span className="text-orange-400">app.url</span>
                  <span>);</span>
                  <span className="text-slate-500 ml-4">// https://my-lms-app-ai.sofuf.dev</span>
                </div>
              </div>

              {/* Status indicator */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-mono">Deployed successfully</span>
                </div>
                <div className="text-slate-400 text-sm font-mono">⚡ Built in 28.3s</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Tools
              </span>
              <span className="text-white"> for Your Business</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Solutions built to solve your real-world problems, from schools to shops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-500 transform hover:scale-[1.02]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-black">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-slate-300 text-lg leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center text-cyan-400 font-semibold group-hover:text-purple-400 transition-colors duration-300">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl p-16 border border-slate-700/50">
              <div className="flex justify-center mb-8">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Empower Your Business with Smart Software
                </span>
              </h2>

              <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let Sofuf streamline your operations today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                  onClick={() => router.push('/contact')}
                >
                  <span className="relative z-10">Get a Free Quote</span>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <button
                  className="px-12 py-5 rounded-full text-xl font-bold border-2 border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105"
                  onClick={() => router.push('/contact')}
                >
                  Contact Sales
                </button>
              </div>

              <p className="text-slate-400 text-sm mt-6">
              No upfront fees • No upfront payment required •  100% satisfaction guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-25" />
                <div className="relative w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center font-bold text-lg">
                  S
                </div>
                <div className="absolute -bottom-2 -right-3 bg-black text-cyan-400 text-xs px-2 py-1 rounded-full font-mono border border-cyan-400/30">
                  dev
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sofuf
                </span>
                <div className="text-xs text-slate-400 font-mono -mt-1">Custom Software for Your Business                </div>
              </div>
            </div>

            <p className="text-slate-400 mb-6">
              © 2025 Sofuf Software Solutions. Empowering Businesses Across Sectors.
            </p>

            <div className="flex items-center space-x-2 text-slate-500 text-sm">
              <span>Built with</span>
              <span className="text-red-400 animate-pulse">♥</span>
              <span>for Schools, Shops & Organizations</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}