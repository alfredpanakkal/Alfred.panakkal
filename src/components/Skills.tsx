import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line py-16 sm:py-24 lg:py-28">
      <div className="wrap">
        <header className="max-w-2xl">
          <p className="label">Skills</p>
          <h2 className="mt-3 font-display text-title font-medium">
            A short stack, used in production
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            The work above is the evidence. This is only the inventory.
          </p>
        </header>

        <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-medium text-fg">{cat.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{cat.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
