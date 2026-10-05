import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {PERSONAL_INFO.footer.year} {PERSONAL_INFO.footer.copyrightName}</p>
        <p className="text-faint">{PERSONAL_INFO.footer.location}</p>
      </div>
    </footer>
  );
};
