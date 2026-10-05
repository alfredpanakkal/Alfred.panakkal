import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="wrap pb-16 pt-12 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <p className="label reveal">{PERSONAL_INFO.label}</p>
      <div className="mt-4 grid lg:mt-5 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10">
        <h1 className="reveal reveal-2 font-display text-display font-medium text-fg lg:col-span-7">
          {PERSONAL_INFO.name}
        </h1>
        <p className="reveal reveal-3 mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg sm:leading-relaxed lg:col-span-5 lg:mt-2 lg:max-w-none">
          {PERSONAL_INFO.heroBio}
        </p>
        <div className="reveal reveal-4 mt-8 flex flex-wrap items-center gap-3 lg:col-span-7 lg:mt-0">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-[background-color,color,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.98] bg-solid text-solid-fg hover:opacity-90 min-h-11 px-5 py-2.5"
          >
            View projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-[background-color,color,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.98] border border-line bg-transparent text-fg hover:border-fg/30 hover:bg-elev min-h-11 px-5 py-2.5"
          >
            About me
          </a>
          <a
            href={PERSONAL_INFO.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-[background-color,color,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.98] rounded-sm text-accent hover:text-accent-hover underline-offset-4 hover:underline py-2.5 min-h-11 px-1"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
