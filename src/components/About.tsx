import React from 'react';
import { PERSONAL_INFO, CREDENTIALS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line py-16 sm:py-24 lg:py-28">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <p className="label">About</p>
            <h2 className="mt-3 font-display text-title font-medium">
              {PERSONAL_INFO.aboutTitle}
            </h2>
          </header>

          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted lg:col-span-8">
            {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Roles & Location Metadata Stats */}
        <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {PERSONAL_INFO.metaStats.map((stat, idx) => (
            <div key={idx}>
              <dt className="label">{stat.label}</dt>
              <dd className="mt-2 font-display text-base tracking-tight text-fg">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Credentials List */}
        <div className="mt-12 border-t border-line pt-10 lg:mt-16 lg:pt-12">
          <p className="label">Credentials</p>
          <ul className="mt-6 divide-y divide-line sm:mt-8">
            {CREDENTIALS.map((cred, idx) => (
              <li
                key={idx}
                className="grid gap-1 py-4 sm:grid-cols-[minmax(10rem,14rem)_1fr] sm:gap-8 sm:py-5"
              >
                <span className="text-sm font-medium text-fg">{cred.name}</span>
                <span className="text-sm leading-relaxed text-muted">{cred.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
