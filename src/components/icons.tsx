import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const ArrowUpRight: React.FC<IconProps> = (props) => (
  <svg {...base} aria-hidden="true" {...props}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export const CopyIcon: React.FC<IconProps> = (props) => (
  <svg {...base} aria-hidden="true" {...props}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const lightBase = {
  ...base,
  strokeWidth: 1.75,
};

export const SunIcon: React.FC<IconProps> = (props) => (
  <svg {...lightBase} aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93 1.41 1.41" />
    <path d="M17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M6.34 17.66-1.41 1.41" />
    <path d="M19.07 4.93-1.41 1.41" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = (props) => (
  <svg {...lightBase} aria-hidden="true" {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = (props) => (
  <svg {...base} aria-hidden="true" {...props}>
    <path d="M4 12h16" />
    <path d="M4 18h16" />
    <path d="M4 6h16" />
  </svg>
);

export const Spinner: React.FC<IconProps> = (props) => (
  <svg {...base} viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);