import React, { useState } from 'react';
import { 
  Search, 
  LayoutGrid, 
  List, 
  ExternalLink, 
  Github, 
  Clock, 
  Info, 
  X, 
  Code2, 
  Globe, 
  GitCommit, 
  Server
} from 'lucide-react';

export interface Tag {
  label: string;
  color: string;
  text: string;
}

export interface Project {
  id: string;
  name: string;
  gradient: string;
  tags: Tag[];
  desc: string;
  categories: string[];
  live: boolean;
  url?: string;
  repo: string;
  lastCommit: string;
  lastCommitDate: string;
  tech: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'helm-almanac',
    name: 'Helm Almanac',
    gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
    tags: [
      { label: 'Web', color: 'rgba(59,130,246,0.12)', text: '#60a5fa' },
      { label: 'App', color: 'rgba(6,182,212,0.12)', text: '#22d3ee' },
      { label: 'Nautical', color: 'rgba(20,184,166,0.12)', text: '#2dd4bf' }
    ],
    desc: 'A comprehensive maritime almanac application for tracking vessel schedules, nautical events, and navigational reference data.',
    categories: ['web', 'maritime'],
    live: true,
    url: 'https://helm-almanac.vercel.app',
    repo: 'alpha-mini/Helm-Almanac',
    lastCommit: 'chore: update navigation data for Q3 2026',
    lastCommitDate: '26/07/2026',
    tech: ['React', 'Next.js', 'Tailwind']
  },
  {
    id: 'helm-productivity',
    name: 'Helm Productivity',
    gradient: 'linear-gradient(135deg, #059669, #0d9488, #06b6d4)',
    tags: [
      { label: 'Tools', color: 'rgba(5,150,105,0.12)', text: '#34d399' },
      { label: 'Productivity', color: 'rgba(13,148,136,0.12)', text: '#2dd4bf' },
      { label: 'React', color: 'rgba(6,182,212,0.12)', text: '#22d3ee' }
    ],
    desc: 'A minimalist productivity suite engineered for seafarers and developers to manage watchkeeping, tasks, and routines effectively.',
    categories: ['tools'],
    live: true,
    url: 'https://helmproductivity.vercel.app',
    repo: 'alpha-mini/The-Helm---Productivity-app',
    lastCommit: 'feat(admin): implement feedback dashboard',
    lastCommitDate: '24/07/2026',
    tech: ['React', 'TypeScript', 'Vercel']
  },
  {
    id: 'helm-bond',
    name: 'Helm Bond',
    gradient: 'linear-gradient(135deg, #ea580c, #f59e0b, #fbbf24)',
    tags: [
      { label: 'Web', color: 'rgba(234,88,12,0.12)', text: '#fb923c' },
      { label: 'Networking', color: 'rgba(245,158,11,0.12)', text: '#fbbf24' },
      { label: 'Community', color: 'rgba(251,191,36,0.12)', text: '#fcd34d' }
    ],
    desc: 'A specialized networking platform connecting maritime professionals, shipping agencies, and maritime officers worldwide.',
    categories: ['web'],
    live: false,
    repo: 'alpha-mini/Helm-Bond',
    lastCommit: 'feat: add real-time messaging via WebSocket',
    lastCommitDate: '20/07/2026',
    tech: ['Next.js', 'Socket.io', 'PostgreSQL']
  },
  {
    id: 'helm-fasting',
    name: 'Helm Fasting',
    gradient: 'linear-gradient(135deg, #7c3aed, #c026d3, #ec4899)',
    tags: [
      { label: 'Tools', color: 'rgba(124,58,237,0.12)', text: '#a78bfa' },
      { label: 'Health', color: 'rgba(192,38,211,0.12)', text: '#e879f9' },
      { label: 'PWA', color: 'rgba(236,72,153,0.12)', text: '#f472b6' }
    ],
    desc: 'A dedicated health and intermittent fasting companion designed to maintain fitness goals during long ocean voyages.',
    categories: ['tools'],
    live: true,
    url: 'https://helmfasting.vercel.app',
    repo: 'alpha-mini/The-Helm-Fasting',
    lastCommit: 'Add Vercel Web Analytics to project',
    lastCommitDate: '18/07/2026',
    tech: ['React', 'PWA', 'Chart.js']
  },
  {
    id: 'mudhra-converter',
    name: 'Mudhra Converter',
    gradient: 'linear-gradient(135deg, #10b981, #059669, #0d9488)',
    tags: [
      { label: 'Web', color: 'rgba(16,185,129,0.12)', text: '#34d399' },
      { label: 'Tools', color: 'rgba(59,130,246,0.12)', text: '#60a5fa' },
      { label: 'Converter', color: 'rgba(245,158,11,0.12)', text: '#fbbf24' }
    ],
    desc: 'A fast currency and unit conversion application designed for intuitive everyday transactions.',
    categories: ['web', 'tools'],
    live: true,
    url: 'https://mudhra-converter.vercel.app',
    repo: 'alpha-mini/mudhra-converter',
    lastCommit: 'feat: release mudhra converter v1.0',
    lastCommitDate: '26/07/2026',
    tech: ['React', 'TypeScript', 'Tailwind']
  }
];

export default function App() {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesFilter = filter === 'all' || p.categories.includes(filter);
    const searchLower = search.toLowerCase().trim();
    const matchesSearch =
      !searchLower ||
      p.name.toLowerCase().includes(searchLower) ||
      p.desc.toLowerCase().includes(searchLower) ||
      p.tags.some((t) => t.label.toLowerCase().includes(searchLower));
    return matchesFilter && matchesSearch;
  });

  const liveDeploymentsCount = PROJECTS.filter((p) => p.live).length;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans relative overflow-x-hidden">
      {/* Ambient Radial Background Effects */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* Stats Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-4 sm:pb-6 flex flex-wrap gap-2.5 sm:gap-4 justify-center relative z-10">
        <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#16161f] border border-[rgba(255,255,255,0.06)] rounded-full text-xs sm:text-sm text-gray-400 hover:border-white/20 transition-all cursor-default min-h-[36px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#22c55e] animate-pulse flex-shrink-0" />
          <span>{liveDeploymentsCount} Live Deployments</span>
        </div>

        <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#16161f] border border-[rgba(255,255,255,0.06)] rounded-full text-xs sm:text-sm text-gray-400 hover:border-white/20 transition-all cursor-default min-h-[36px]">
          <Github className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
          <span>{PROJECTS.length} Repositories</span>
        </div>

        <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#16161f] border border-[rgba(255,255,255,0.06)] rounded-full text-xs sm:text-sm text-gray-400 hover:border-white/20 transition-all cursor-default min-h-[36px]">
          <Code2 className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
          <span>React, Python, React Native</span>
        </div>
      </div>

      {/* Controls Bar: Filter Tabs, Search Input, Grid/List View Toggle */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 relative z-10">
        {/* Category Filters - Horizontally scrollable on narrow screens */}
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar-none py-1 -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'web', label: 'Web' },
            { id: 'ai', label: 'AI' },
            { id: 'maritime', label: 'Maritime' },
            { id: 'tools', label: 'Tools' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap min-h-[38px] touch-manipulation ${
                filter === cat.id
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-transparent text-gray-400 border border-[rgba(255,255,255,0.06)] hover:border-white/20 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Search Box */}
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-9 pr-4 py-2 bg-[#16161f] border border-[rgba(255,255,255,0.06)] focus:border-[#3b82f6] rounded-full text-xs sm:text-sm text-white placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-[#3b82f6]/20 min-h-[40px]"
            />
          </div>

          {/* View Toggle Buttons */}
          <div className="flex items-center gap-1 bg-[#16161f] border border-[rgba(255,255,255,0.06)] rounded-xl p-1 flex-shrink-0">
            <button
              onClick={() => setView('grid')}
              title="Grid View"
              className={`p-2 rounded-lg transition-all min-h-[36px] min-w-[36px] flex items-center justify-center ${
                view === 'grid'
                  ? 'bg-white/10 text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView('list')}
              title="List View"
              className={`p-2 rounded-lg transition-all min-h-[36px] min-w-[36px] flex items-center justify-center ${
                view === 'list'
                  ? 'bg-white/10 text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 relative z-10">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 sm:py-20 text-gray-500 flex flex-col items-center">
            <Search className="w-10 h-10 sm:w-12 sm:h-12 opacity-30 mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm">No projects match your search criteria.</p>
          </div>
        ) : (
          <div
            className={
              view === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'
                : 'flex flex-col gap-3.5 sm:gap-4'
            }
          >
            {filteredProjects.map((p, index) => (
              <div
                key={p.id}
                onClick={() => setActiveModalProject(p)}
                style={{ animationDelay: `${index * 0.04}s` }}
                className={`bg-[#16161f] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.18)] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 cursor-pointer group flex active:scale-[0.99] touch-manipulation ${
                  view === 'grid' ? 'flex-col' : 'flex-col sm:flex-row items-stretch'
                }`}
              >
                {/* Visual Card Header */}
                <div
                  className={`relative flex items-center justify-center p-5 sm:p-6 overflow-hidden flex-shrink-0 ${
                    view === 'grid' ? 'h-32 sm:h-36 w-full' : 'h-32 sm:h-auto sm:w-52'
                  }`}
                  style={{ background: p.gradient }}
                >
                  {/* Pattern Overlay */}
                  <div 
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  />

                  <h3 className="relative z-10 text-lg sm:text-xl font-extrabold text-white font-['Space_Grotesk',sans-serif] text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] px-2">
                    {p.name}
                  </h3>

                  {/* External Link Badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center sm:opacity-0 group-hover:opacity-100 sm:scale-75 group-hover:scale-100 transition-all duration-300">
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {p.tags.map((t) => (
                        <span
                          key={t.label}
                          className="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase"
                          style={{ backgroundColor: t.color, color: t.text }}
                        >
                          {t.label}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1 font-['Space_Grotesk',sans-serif] group-hover:text-[#3b82f6] transition-colors">
                      {p.name}
                    </h4>

                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-3.5">
                      {p.desc}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-[rgba(255,255,255,0.06)] flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2.5 text-gray-500 text-[11px]">
                      <div className="flex items-center gap-1 truncate max-w-[95px] sm:max-w-[110px]" title={p.repo}>
                        <Github className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{p.repo.split('/')[1]}</span>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{p.lastCommitDate}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0 ml-auto">
                      {p.live ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-2.5 py-1.5 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#60a5fa] hover:bg-[#3b82f6]/20 hover:border-[#3b82f6]/40 text-[11px] font-medium flex items-center gap-1 transition-all min-h-[32px]"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Open</span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] text-gray-500 px-2 py-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]" />
                          <span>Offline</span>
                        </span>
                      )}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModalProject(p);
                        }}
                        className="px-2.5 py-1.5 rounded-lg border border-[rgba(255,255,255,0.08)] hover:border-white/20 text-gray-300 hover:text-white hover:bg-white/5 text-[11px] font-medium flex items-center gap-1 transition-all min-h-[32px]"
                      >
                        <Info className="w-3 h-3" />
                        <span>Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Details Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="bg-[#111118] border border-[rgba(255,255,255,0.1)] rounded-t-2xl sm:rounded-2xl w-full max-w-lg max-h-[88vh] sm:max-h-[85vh] overflow-y-auto p-5 sm:p-6 shadow-2xl text-white relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3.5 border-b border-[rgba(255,255,255,0.06)] mb-4 sm:mb-5">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-1 block">
                  Project Overview
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-['Space_Grotesk',sans-serif]">
                  {activeModalProject.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl border border-[rgba(255,255,255,0.1)] text-gray-400 hover:text-white hover:bg-white/5 transition-all min-w-[38px] min-h-[38px] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <div className="mb-4 sm:mb-5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                Description
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {activeModalProject.desc}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-4 sm:mb-5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-[#16161f] border border-[rgba(255,255,255,0.06)] text-gray-300 rounded-md text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mb-4 sm:mb-5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                Links & Repository
              </h4>
              <div className="space-y-2">
                {activeModalProject.live && activeModalProject.url && (
                  <a
                    href={activeModalProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3 bg-[#16161f] border border-[rgba(255,255,255,0.06)] hover:border-white/20 rounded-xl text-xs text-gray-300 hover:text-white transition-all min-h-[44px]"
                  >
                    <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="truncate">{activeModalProject.url}</span>
                  </a>
                )}
                <a
                  href={`https://github.com/${activeModalProject.repo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 bg-[#16161f] border border-[rgba(255,255,255,0.06)] hover:border-white/20 rounded-xl text-xs text-gray-300 hover:text-white transition-all min-h-[44px]"
                >
                  <Github className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="truncate">github.com/{activeModalProject.repo}</span>
                </a>
              </div>
            </div>

            {/* Recent Commits */}
            <div className="mb-4 sm:mb-5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                Recent Commits
              </h4>
              <div className="bg-[#16161f] border border-[rgba(255,255,255,0.06)] rounded-xl divide-y divide-[rgba(255,255,255,0.06)]">
                <div className="p-3 flex items-center justify-between text-xs gap-2">
                  <div className="flex items-center gap-2 text-gray-300 min-w-0">
                    <GitCommit className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                    <span className="truncate">{activeModalProject.lastCommit}</span>
                  </div>
                  <span className="text-[11px] text-gray-500 flex-shrink-0">
                    {activeModalProject.lastCommitDate}
                  </span>
                </div>
                <div className="p-3 flex items-center justify-between text-xs gap-2">
                  <div className="flex items-center gap-2 text-gray-300 min-w-0">
                    <GitCommit className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                    <span className="truncate">chore: update dependencies and security patches</span>
                  </div>
                  <span className="text-[11px] text-gray-500 flex-shrink-0">
                    {activeModalProject.lastCommitDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Deployment Status */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                Deployment Status
              </h4>
              <div className="flex items-center gap-2.5 p-3 bg-[#16161f] border border-[rgba(255,255,255,0.06)] rounded-xl text-xs text-gray-300">
                <Server className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  {activeModalProject.live
                    ? 'Live on Vercel Edge Infrastructure'
                    : 'Repository active — not deployed yet'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
