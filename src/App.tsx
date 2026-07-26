import React, { useState } from 'react';
import { ExternalLink, Github, Grid } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: 'web' | 'ai' | 'maritime' | 'tools';
  description: string;
  tags: string[];
  url?: string;
  sourceUrl?: string;
  gradient: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Helm Almanac",
    category: "web",
    description: "A comprehensive maritime almanac application for tracking vessel schedules, nautical events, and navigational reference data.",
    tags: ["Web", "App", "Nautical"],
    url: "https://helmalmanac.vercel.app/",
    gradient: "linear-gradient(135deg, #0ea5e9, #6366f1)",
    featured: true
  },
  {
    id: 2,
    title: "Helm Productivity",
    category: "tools",
    description: "A minimalist productivity suite engineered for seafarers and developers to manage watchkeeping, tasks, and routines effectively.",
    tags: ["Tools", "Productivity", "React"],
    url: "https://helmproductivity.vercel.app/",
    gradient: "linear-gradient(135deg, #10b981, #3b82f6)",
    featured: true
  },
  {
    id: 3,
    title: "Helm Bond",
    category: "web",
    description: "A specialized networking platform connecting maritime professionals, shipping agencies, and maritime officers worldwide.",
    tags: ["Web", "Networking", "Community"],
    url: "https://helmbond.vercel.app/",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)"
  },
  {
    id: 4,
    title: "Helm Fasting",
    category: "tools",
    description: "A dedicated health and intermittent fasting companion designed to maintain fitness goals during long ocean voyages.",
    tags: ["Tools", "Health", "PWA"],
    url: "https://helmfasting.vercel.app/",
    gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)"
  },
  {
    id: 5,
    title: "AI Studio App",
    category: "ai",
    description: "An AI-powered application built to streamline maritime workflows and boost productivity using intelligent automation and LLMs.",
    tags: ["AI", "Web App", "Python"],
    url: "https://ai.studio/apps/78f93161-52ca-4ebe-9701-6d5e6aac3371",
    sourceUrl: "https://github.com/alfred/ai-studio-app",
    gradient: "linear-gradient(135deg, #0ea5e9, #6366f1)",
    featured: true
  },
  {
    id: 6,
    title: "Maritime Calculator",
    category: "maritime",
    description: "Essential calculations and unit conversions for seafarers — from cargo stability planning to passage navigation formulas.",
    tags: ["Tool", "Utility", "Maritime"],
    sourceUrl: "https://github.com/alfred/maritime-calculator",
    gradient: "linear-gradient(135deg, #10b981, #3b82f6)"
  },
  {
    id: 7,
    title: "Ship Log Parser",
    category: "tools",
    description: "Automated parsing and analysis of raw ship log files for compliance reporting, engine performance insights, and audit trails.",
    tags: ["Automation", "Python", "Data"],
    sourceUrl: "https://github.com/alfred/ship-log-parser",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)"
  },
  {
    id: 8,
    title: "Crew Manager",
    category: "web",
    description: "Lightweight crew management dashboard for tracking vessel sign-ons, STCW certification expiry, and sea time logs.",
    tags: ["Web", "Dashboard", "React"],
    sourceUrl: "https://github.com/alfred/crew-manager",
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)"
  },
  {
    id: 9,
    title: "Port Info API",
    category: "maritime",
    description: "Real-time port information and berth availability REST API for logistics planning, covering 500+ ports worldwide with live updates.",
    tags: ["API", "Data", "Maritime"],
    sourceUrl: "https://github.com/alfred/port-info-api",
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)"
  },
  {
    id: 10,
    title: "Sea Weather",
    category: "tools",
    description: "Marine weather forecasts and route risk analytics optimized for vessel-specific stability limits and ocean safety.",
    tags: ["Mobile", "React Native", "Weather"],
    sourceUrl: "https://github.com/alfred/sea-weather",
    gradient: "linear-gradient(135deg, #84cc16, #10b981)"
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 text-white font-sans">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {['all', 'web', 'ai', 'maritime', 'tools'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] text-white shadow-lg shadow-[#0ea5e9]/25 scale-105'
                : 'bg-[#12121a] text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
            }`}
          >
            {cat === 'all' ? 'All Projects' : cat}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#12121a] border border-[rgba(255,255,255,0.08)] hover:border-[#0ea5e9]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl group hover:shadow-[#0ea5e9]/10"
          >
            <div>
              <div 
                className="w-full h-36 rounded-xl mb-5 flex items-center justify-center p-4 relative overflow-hidden"
                style={{ background: project.gradient }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <span className="text-lg font-bold text-white z-10 font-['Space_Grotesk'] text-center drop-shadow-md">
                  {project.title}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 bg-white/5 border border-white/5 text-[#0ea5e9] rounded-md text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 font-['Space_Grotesk'] group-hover:text-[#0ea5e9] transition-colors">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3 text-xs">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0ea5e9] hover:text-cyan-300 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Open App <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-gray-500 italic">No Live Web Host</span>
              )}

              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  Source Code <Github className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
