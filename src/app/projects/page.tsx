"use client";

import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Code, 
  ExternalLink, 
  Filter, 
  Search, 
  Calendar,
  Users,
  Zap,
  BookOpen,
  ShoppingCart,
  Building,
  Heart,
  GraduationCap,
  BarChart3,
  Shield,
  Clock,
  Star,
  ArrowLeft,
  Sparkles,
  Play
} from 'lucide-react';
import { useRouter } from 'next/navigation';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  timeline: string;
  users: string;
  status: string;
  color: string;
  icon: React.ReactNode;
  link: string;
  testimonial: string;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default function SofufProjects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<(Project & { slug: string }) | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
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

  const projects: (Project & { slug: string })[] = [
    {
      id: 1,
      title: "Sofuf Learning Management System",
      category: "education",
      description: "Complete LMS platform for private schools with student portals, grade management, and parent communication.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["Next.js", "React.js", "Firebase", "Tailwind", "React Native"],
      features: ["Student Portal", "Grade Management", "Parent Dashboard", "Assignment Tracking"],
      timeline: "6 weeks",
      users: "500+ students",
      status: "Live",
      color: "from-blue-400 to-cyan-400",
      icon: <GraduationCap className="w-6 h-6" />,
      link: "#",
      testimonial: "Transformed how we manage our curriculum and student progress.",
      slug: slugify("Sofuf Learning Management System"),
    },
    {
      id: 2,
      title: "RetailPro Point of Sale",
      category: "retail",
      description: "Modern POS system with inventory management, sales analytics, and multi-location support.",
      image: "https://images.unsplash.com/photo-1668179456564-db429f9de8e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["Inventory Control", "Sales Analytics", "Staff Management", "Customer Loyalty"],
      timeline: "4 weeks",
      users: "15 locations",
      status: "Live",
      color: "from-green-400 to-emerald-400",
      icon: <ShoppingCart className="w-6 h-6" />,
      link: "#",
      testimonial: "Our sales efficiency increased by 40% since implementation.",
      slug: slugify("RetailPro Point of Sale"),
    },
    {
      id: 3,
      title: "MedConnect Patient Management",
      category: "healthcare",
      description: "HIPAA-compliant patient management system with appointment scheduling and medical records.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
      tech: ["Vue.js", "Laravel", "MySQL", "AWS"],
      features: ["Appointment Booking", "Medical Records", "Prescription Tracking", "Insurance Integration"],
      timeline: "8 weeks",
      users: "1,200+ patients",
      status: "Live",
      color: "from-red-400 to-pink-400",
      icon: <Heart className="w-6 h-6" />,
      link: "#",
      testimonial: "Streamlined our patient care process completely.",
      slug: slugify("MedConnect Patient Management"),
    },
    {
      id: 4,
      title: "CorporateHub HR Suite",
      category: "corporate",
      description: "Comprehensive HR management platform with payroll, attendance, and performance tracking.",
      image: "https://plus.unsplash.com/premium_photo-1661306465544-cc55151ab336?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["Angular", "Django", "PostgreSQL", "Redis"],
      features: ["Payroll Management", "Attendance Tracking", "Performance Reviews", "Employee Portal"],
      timeline: "10 weeks",
      users: "250+ employees",
      status: "Live",
      color: "from-purple-400 to-indigo-400",
      icon: <Building className="w-6 h-6" />,
      link: "#",
      testimonial: "Reduced HR administrative work by 60%.",
      slug: slugify("CorporateHub HR Suite"),
    },
    {
      id: 5,
      title: "FitTrack Gym Management",
      category: "fitness",
      description: "Complete gym management solution with member tracking, class scheduling, and billing.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["React Native", "Express.js", "PostgreSQL", "Stripe"],
      features: ["Member Check-in", "Class Booking", "Trainer Scheduling", "Payment Processing"],
      timeline: "5 weeks",
      users: "800+ members",
      status: "Live",
      color: "from-orange-400 to-yellow-400",
      icon: <Zap className="w-6 h-6" />,
      link: "#",
      testimonial: "Member satisfaction scores increased dramatically.",
      slug: slugify("FitTrack Gym Management"),
    },
    {
      id: 6,
      title: "Analytics Dashboard Pro",
      category: "analytics",
      description: "Real-time business intelligence dashboard with custom KPI tracking and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      features: ["Real-time Analytics", "Custom KPIs", "Automated Reports", "Data Visualization"],
      timeline: "7 weeks",
      users: "50+ analysts",
      status: "Live",
      color: "from-cyan-400 to-blue-400",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "#",
      testimonial: "Data-driven decisions became effortless.",
      slug: slugify("Analytics Dashboard Pro"),
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Code className="w-4 h-4" /> },
    { id: 'education', name: 'Education', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'retail', name: 'Retail', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Heart className="w-4 h-4" /> },
    { id: 'corporate', name: 'Corporate', icon: <Building className="w-4 h-4" /> },
    { id: 'fitness', name: 'Fitness', icon: <Zap className="w-4 h-4" /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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

        {/* Background orbs */}
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-300"
              onClick={() => router.push('/')}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Home</span>
            </button>
          </div>

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
            <div className="hidden sm:block">
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sofuf
              </span>
              <div className="text-xs text-slate-400 font-mono -mt-1">Projects</div>
            </div>
          </div>

          <button
            className="relative group overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={() => router.push('/contact')}
          >
            <span className="relative z-10 text-sm sm:text-base">Get Started</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-lg border border-slate-600 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Real Projects, Real Results</span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black text-xs px-2 py-1 rounded-full font-bold">LIVE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
            <br />
            <span className="text-white">of Success</span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed businesses across industries with custom software solutions that deliver real results.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8 max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-full pl-12 pr-4 py-4 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'bg-slate-800/50 backdrop-blur-xl border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-slate-600 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 flex items-center space-x-2 bg-green-500/20 backdrop-blur-lg border border-green-500/30 rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-semibold">{project.status}</span>
                  </div>

                  {/* Category Icon */}
                  <div className={`absolute top-4 left-4 p-3 rounded-2xl bg-gradient-to-br ${project.color}`}>
                    <div className="text-black">
                      {project.icon}
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-lg rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-800/50 text-slate-300 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-slate-700/50 text-slate-400 text-xs px-2 py-1 rounded-full">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{project.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{project.users}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <button className="flex items-center text-cyan-400 hover:text-purple-400 font-semibold text-sm transition-colors duration-300">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-slate-400 text-lg mb-4">No projects found matching your criteria</div>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                }}
                className="text-cyan-400 hover:text-purple-400 font-semibold transition-colors duration-300"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl p-16 border border-slate-700/50">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Build Your Next Project?
                </span>
              </h2>

              <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join the businesses that trust Sofuf to deliver exceptional software solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                  onClick={() => router.push('/contact')}
                >
                  <span className="relative z-10">Start Your Project</span>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </button>

                <button
                  className="px-12 py-5 rounded-full text-xl font-bold border-2 border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105"
                  onClick={() => router.push('/contact')}
                >
                  Schedule a Consultation
                </button>
              </div>

              <p className="text-slate-400 text-sm mt-6">
                Free consultation • Custom quote • 100% satisfaction guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-700/50">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-slate-800/50 backdrop-blur-lg rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-300 z-10"
            >
              ×
            </button>

            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${selectedProject.color}`}>
                  <div className="text-black">
                    {selectedProject.icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-slate-300">{selectedProject.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                    <div className="space-y-2">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2 text-slate-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="bg-slate-800/50 text-slate-300 text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-slate-800/30 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Project Stats</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Timeline:</span>
                        <span className="text-white font-semibold">{selectedProject.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Users:</span>
                        <span className="text-white font-semibold">{selectedProject.users}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Status:</span>
                        <span className="text-green-400 font-semibold">{selectedProject.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/30 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Client Testimonial</h3>
                    <p className="text-slate-300 italic">"{selectedProject.testimonial}"</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  onClick={() => router.push('/contact')}
                >
                  <span className="relative z-10">Start Similar Project</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </button>

                <button
                  className="px-8 py-4 rounded-full font-bold border-2 border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  onClick={() => {
                    setSelectedProject(null);
                    router.push(`/projects/${selectedProject.slug}`);
                  }}
                >
                  <span>View More Details</span>
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}