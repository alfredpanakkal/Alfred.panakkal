import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line py-16 sm:py-24 lg:py-28">
      <div className="wrap">
        <header className="max-w-2xl">
          <p className="label">Experience</p>
          <h2 className="mt-3 font-display text-title font-medium">
            Watchkeeping, then software
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            The same discipline shows up in both jobs: procedures, systems, and decisions that have to hold under pressure.
          </p>
        </header>

        <ol className="mt-10 sm:mt-14">
          {EXPERIENCES.map((item, idx) => (
            <li
              key={idx}
              className="grid gap-5 border-t border-line py-8 md:grid-cols-12 md:gap-10 md:py-12"
            >
              <div className="md:col-span-4">
                <h3 className="font-display text-lg font-medium tracking-tight text-fg md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.organization}</p>
                <p className="mt-1 text-sm text-faint">{item.status}</p>
              </div>

              <div className="md:col-span-8">
                <p className="leading-relaxed text-muted">{item.summary}</p>
                <ul className="mt-5 space-y-3">
                  {item.duties.map((duty, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-faint"
                    >
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
