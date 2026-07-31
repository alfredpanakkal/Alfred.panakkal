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


function useSystemTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setIsDark(e.matches);
      // This state change will trigger a re-render for any dynamic JS components (e.g., Canvas, Charts)
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isDark;
}

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
      { label: 'Maritime', color: 'rgba(20,184,166,0.12)', text: '#2dd4bf' }
    ],
    desc: 'A comprehensive maritime almanac application for tracking vessel schedules, nautical events, and navigational reference data.',
    categories: ['web', 'maritime'],
    live: true,
    url: 'https://helm-almanac.vercel.app',
    repo: 'capt-alfred/Helm-Almanac',
    lastCommit: 'chore: update navigation data for Q3 2026',
    lastCommitDate: '26/07/2026',
    tech: ['React', 'Next.js', 'Tailwind', 'TypeScript']
  },
  {
    id: 'helm-productivity',
    name: 'Helm Productivity',
    gradient: 'linear-gradient(135deg, #059669, #0d9488, #06b6d4)',
    tags: [
      { label: 'Tools', color: 'rgba(5,150,105,0.12)', text: '#34d399' },
      { label: 'Productivity', color: 'rgba(13,148,136,0.12)', text: '#2dd4bf' }
    ],
    desc: 'A minimalist productivity suite engineered for seafarers and developers to manage watchkeeping, tasks, and routines effectively.',
    categories: ['tools'],
    live: true,
    url: 'https://helmproductivity.vercel.app',
    repo: 'capt-alfred/The-Helm---Productivity-app',
    lastCommit: 'feat(admin): implement feedback dashboard',
    lastCommitDate: '24/07/2026',
    tech: ['React', 'TypeScript', 'Vercel']
  },
  {
    id: 'helm-bond',
    name: 'Helm Bond (Bond Vault)',
    gradient: 'linear-gradient(135deg, #ea580c, #f59e0b, #fbbf24)',
    tags: [
      { label: 'Web', color: 'rgba(234,88,12,0.12)', text: '#fb923c' },
      { label: 'Networking', color: 'rgba(245,158,11,0.12)', text: '#fbbf24' },
      { label: 'Bond Store', color: 'rgba(251,191,36,0.12)', text: '#fcd34d' }
    ],
    desc: 'A specialized networking platform and bond store vault connecting maritime professionals and shipping agencies.',
    categories: ['web'],
    live: true,
    url: 'https://helmbond.vercel.app',
    repo: 'capt-alfred/BOND-VAULT',
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
    repo: 'capt-alfred/The-Helm-Fasting',
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
    repo: 'capt-alfred/MUDHRA.CONVERTER',
    lastCommit: 'feat: release mudhra converter v1.0',
    lastCommitDate: '26/07/2026',
    tech: ['HTML', 'TypeScript', 'React', 'Tailwind']
  },
  {
    id: 'navarea-warning-plotter',
    name: 'Navarea Warning Plotter',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    tags: [
      { label: 'Maritime', color: 'rgba(20,184,166,0.12)', text: '#2dd4bf' },
      { label: 'Geospatial', color: 'rgba(59,130,246,0.12)', text: '#60a5fa' }
    ],
    desc: 'Maritime navigational safety tool for plotting NAVAREA warnings, danger areas, and hazard zones.',
    categories: ['maritime', 'tools'],
    live: false,
    repo: 'capt-alfred/Navarea-warning---plotter',
    lastCommit: 'feat: initial release of NAVAREA plotter layout',
    lastCommitDate: '26/07/2026',
    tech: ['TypeScript', 'React', 'Geospatial', 'Tailwind']
  },
  {
    id: 'seafarer-calc',
    name: 'Seafarer Seatime & NRI Calc',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    tags: [
      { label: 'Tools', color: 'rgba(99,102,241,0.12)', text: '#818cf8' },
      { label: 'Maritime', color: 'rgba(20,184,166,0.12)', text: '#2dd4bf' }
    ],
    desc: 'Specialized calculator tracking sea time days, NRI tax exemption status, and contract records.',
    categories: ['tools', 'maritime'],
    live: true,
    url: 'https://helm-nri.vercel.app',
    repo: 'capt-alfred/seafarer-calculator-nri-seatime-calc',
    lastCommit: 'feat: sea time calculation logic and UI',
    lastCommitDate: '26/07/2026',
    tech: ['TypeScript', 'React', 'LocalStorage']
  }
];

export default function App() {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const isDark = useSystemTheme(); // Live listener for OS theme changes (available for dynamic components)

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

  return (
    <div 
      className="min-h-screen font-sans relative overflow-x-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
    >
      {/* Ambient Radial Background Effects */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 relative z-10">
        <div 
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-default min-h-[38px] w-auto shadow-sm"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#22c55e] animate-pulse flex-shrink-0" />
          <span>5 Live Deployments</span>
        </div>

        <div 
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-default min-h-[38px] w-auto shadow-sm"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
        >
          <Github className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span>10 Repositories</span>
        </div>

        <div 
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-default min-h-[38px] w-auto shadow-sm"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
        >
          <Code2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span>React, Python, React Native</span>
        </div>
      </div>

      {/* Controls Bar: Filter Tabs, Search Input, Grid/List View Toggle */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 flex flex-col gap-3.5 relative z-10">
        {/* Category Filters */}
        <div className="flex items-center flex-wrap gap-2 justify-start sm:justify-start">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'web', label: 'Web' },
            { id: 'ai', label: 'AI' },
            { id: 'maritime', label: 'Maritime' },
            { id: 'tools', label: 'Tools' }
          ].map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                style={
                  isActive
                    ? { backgroundColor: 'var(--text)', color: 'var(--bg)' }
                    : { backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }
                }
                className={`px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap min-h-[48px] touch-manipulation ${
                  isActive ? 'font-semibold shadow-md' : 'hover:border-sky-500/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Box */}
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none" style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              border: '1px solid var(--border)', 
              color: 'var(--text)' 
            }}
            className="w-full pl-10 pr-4 py-2.5 focus:border-[#3b82f6] rounded-full text-xs sm:text-sm outline-none transition-all focus:ring-2 focus:ring-[#3b82f6]/20 min-h-[42px]"
          />
        </div>

        {/* View Toggle Bar */}
        <div 
          className="flex items-center justify-start rounded-xl p-1.5 w-full shadow-sm"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-1 p-1 rounded-lg" style={{ backgroundColor: 'var(--surface-2)' }}>
            <button
              onClick={() => setView('grid')}
              title="Grid View"
              style={view === 'grid' ? { backgroundColor: 'var(--bg-card)', color: 'var(--text)' } : { color: 'var(--text-muted)' }}
              className={`p-2 rounded-md transition-all min-h-[34px] min-w-[34px] flex items-center justify-center ${
                view === 'grid' ? 'shadow-sm font-semibold' : 'hover:opacity-80'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView('list')}
              title="List View"
              style={view === 'list' ? { backgroundColor: 'var(--bg-card)', color: 'var(--text)' } : { color: 'var(--text-muted)' }}
              className={`p-2 rounded-md transition-all min-h-[34px] min-w-[34px] flex items-center justify-center ${
                view === 'list' ? 'shadow-sm font-semibold' : 'hover:opacity-80'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 relative z-10">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 sm:py-20 flex flex-col items-center" style={{ color: 'var(--text-muted)' }}>
            <Search className="w-10 h-10 sm:w-12 sm:h-12 opacity-30 mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm">No projects match your search criteria.</p>
          </div>
        ) : (
          <div
            className={
              view === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'
                : 'flex flex-col gap-4'
            }
          >
            {filteredProjects.map((p, index) => (
              <div
                key={p.id}
                onClick={() => setActiveModalProject(p)}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  animationDelay: `${index * 0.04}s`
                }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  'shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/70'
                } cursor-pointer group flex active:scale-[0.99] touch-manipulation ${
                  view === 'grid' ? 'flex-col' : 'flex-col sm:flex-row items-stretch'
                }`}
              >
                {/* Visual Card Header */}
                <div
                  className={`relative flex items-center justify-center p-6 overflow-hidden flex-shrink-0 ${
                    view === 'grid' ? 'h-36 sm:h-40 w-full' : 'h-36 sm:h-auto sm:w-56'
                  }`}
                  style={{ background: p.gradient }}
                >
                  {/* Plus Pattern Overlay */}
                  <div 
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  />

                  <h3 className="relative z-10 text-xl sm:text-2xl font-extrabold text-white font-['Space_Grotesk',sans-serif] text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] px-3 tracking-wide">
                    {p.name}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tags.map((t) => (
                        <span
                          key={t.label}
                          className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase"
                          style={{ backgroundColor: t.color, color: t.text }}
                        >
                          {t.label}
                        </span>
                      ))}
                    </div>

                    <h4 
                      className="text-base sm:text-lg font-bold mb-1.5 font-['Space_Grotesk',sans-serif] group-hover:text-[#3b82f6] transition-colors"
                      style={{ color: 'var(--text)' }}
                    >
                      {p.name}
                    </h4>

                    <p 
                      className="text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {p.desc}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div 
                    className="pt-3 border-t flex flex-wrap items-center justify-between gap-2.5 text-xs"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <div className="flex items-center gap-3 text-[11px]" style={{ color: 'var(--text-muted)' }}>
                      <div className="flex items-center gap-1 truncate max-w-[100px] sm:max-w-[120px]" title={p.repo}>
                        <Github className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{p.repo.split('/')[1]}</span>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{p.lastCommitDate}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
                      {p.live ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all min-h-[34px] bg-sky-50 border border-sky-200 text-sky-700 hover:bg-sky-100 dark:bg-[#152a42] dark:border-[#23456c] dark:text-[#38bdf8] dark:hover:bg-[#1e3a5c]"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Open App</span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-1 text-xs px-2 py-1" style={{ color: 'var(--text-muted)' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]" />
                          <span>Offline</span>
                        </span>
                      )}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModalProject(p);
                        }}
                        style={{ backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all min-h-[34px] hover:border-sky-500/30"
                      >
                        <Info className="w-3.5 h-3.5" />
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
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-modal-overlay"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
            className="rounded-t-2xl sm:rounded-2xl w-full max-w-lg max-h-[88vh] sm:max-h-[85vh] overflow-y-auto p-5 sm:p-6 shadow-2xl relative animate-modal-slide"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3.5 border-b mb-4 sm:mb-5" style={{ borderColor: 'var(--border)' }}>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold mb-1 block text-sky-500">
                  Project Overview
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-['Space_Grotesk',sans-serif]">
                  {activeModalProject.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                style={{ backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                className="p-2 rounded-xl transition-all min-w-[38px] min-h-[38px] flex items-center justify-center hover:opacity-80"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <div className="mb-4 sm:mb-5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-muted)' }}>
                Description
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {activeModalProject.desc}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-4 sm:mb-5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-muted)' }}>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.tech.map((t) => (
                  <span
                    key={t}
                    style={{ backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mb-4 sm:mb-5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-muted)' }}>
                Links & Repository
              </h4>
              <div className="space-y-2">
                {activeModalProject.live && activeModalProject.url && (
                  <a
                    href={activeModalProject.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    className="flex items-center gap-2.5 p-3 rounded-xl text-xs transition-all min-h-[44px] hover:border-sky-500/40"
                  >
                    <Globe className="w-4 h-4 text-sky-500 flex-shrink-0" />
                    <span className="truncate">{activeModalProject.url}</span>
                  </a>
                )}
                <a
                  href={`https://github.com/${activeModalProject.repo}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  className="flex items-center gap-2.5 p-3 rounded-xl text-xs transition-all min-h-[44px] hover:border-sky-500/40"
                >
                  <Github className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span className="truncate">github.com/{activeModalProject.repo}</span>
                </a>
              </div>
            </div>

            {/* Recent Commits */}
            <div className="mb-4 sm:mb-5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-muted)' }}>
                Recent Commits
              </h4>
              <div 
                className="rounded-xl divide-y" 
                style={{ backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', borderColor: 'var(--border)' }}
              >
                <div className="p-3 flex items-center justify-between text-xs gap-2">
                  <div className="flex items-center gap-2 min-w-0" style={{ color: 'var(--text-secondary)' }}>
                    <GitCommit className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                    <span className="truncate">{activeModalProject.lastCommit}</span>
                  </div>
                  <span className="text-[11px] flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
                    {activeModalProject.lastCommitDate}
                  </span>
                </div>
                <div className="p-3 flex items-center justify-between text-xs gap-2">
                  <div className="flex items-center gap-2 min-w-0" style={{ color: 'var(--text-secondary)' }}>
                    <GitCommit className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                    <span className="truncate">chore: update dependencies and security patches</span>
                  </div>
                  <span className="text-[11px] flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
                    {activeModalProject.lastCommitDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Deployment Status */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-muted)' }}>
                Deployment Status
              </h4>
              <div 
                style={{ backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                className="flex items-center gap-2.5 p-3 rounded-xl text-xs"
              >
                <Server className="w-4 h-4 text-emerald-500 flex-shrink-0" />
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
