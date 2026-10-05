import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ArrowUpRight } from './icons';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-line py-16 sm:py-24 lg:py-28">
      <div className="wrap">
        <header className="max-w-2xl">
          <p className="label">Projects</p>
          <h2 className="mt-3 font-display text-title font-medium">
            Software from operational friction
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Tools I built because the work needed them — navigational safety, shipboard admin, and small utilities that stay usable offline.
          </p>
        </header>

        <ol className="mt-10 sm:mt-14">
          {PROJECTS.map((project) => (
            <li key={project.id} className="border-t border-line py-8 last:border-b md:py-10">
              {project.isDetailed ? (
                /* Detailed Layout (Projects 01 & 02) */
                <article className="grid gap-5 md:grid-cols-12 md:gap-8">
                  <div className="flex items-baseline justify-between md:col-span-3 md:block">
                    <span className="font-display text-sm tabular-nums text-faint">
                      {project.num}
                    </span>
                    <span className="text-xs uppercase tracking-[0.12em] text-faint md:mt-3 md:block">
                      {project.category}
                    </span>
                  </div>

                  <div className="md:col-span-9">
                    <h3 className="font-display text-xl font-medium tracking-tight text-fg sm:text-2xl">
                      {project.title}
                    </h3>

                    <dl className="mt-5 space-y-4 text-sm leading-relaxed sm:text-base">
                      {project.problem && (
                        <div>
                          <dt className="text-xs font-medium uppercase tracking-[0.12em] text-faint">
                            Problem
                          </dt>
                          <dd className="mt-1 text-muted">{project.problem}</dd>
                        </div>
                      )}
                      {project.built && (
                        <div>
                          <dt className="text-xs font-medium uppercase tracking-[0.12em] text-faint">
                            Built
                          </dt>
                          <dd className="mt-1 text-muted">{project.built}</dd>
                        </div>
                      )}
                      {project.whyItMatters && (
                        <div>
                          <dt className="text-xs font-medium uppercase tracking-[0.12em] text-faint">
                            Why it matters
                          </dt>
                          <dd className="mt-1 text-muted">{project.whyItMatters}</dd>
                        </div>
                      )}
                    </dl>

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm text-faint">{project.tech}</p>
                      <div className="flex flex-wrap gap-x-5">
                        {project.statusText && (
                          <span className="inline-flex min-h-11 items-center text-sm text-faint">
                            {project.statusText}
                          </span>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent transition-colors duration-150 hover:text-accent-hover"
                          >
                            Live
                            <ArrowUpRight className="size-3.5" />
                          </a>
                        )}
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-fg/80 transition-colors duration-150 hover:text-fg"
                        >
                          Source
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-up-right size-3.5"
                            aria-hidden="true"
                          >
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ) : (
                /* Compact Layout (Projects 03 - 07) */
                <article className="grid gap-3 md:grid-cols-12 md:items-baseline md:gap-8">
                  <div className="flex items-baseline justify-between md:col-span-3">
                    <span className="font-display text-sm tabular-nums text-faint">
                      {project.num}
                    </span>
                    <span className="text-xs uppercase tracking-[0.12em] text-faint md:hidden">
                      {project.category}
                    </span>
                  </div>

                  <div className="md:col-span-9">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg font-medium tracking-tight text-fg">
                        {project.title}
                      </h3>
                      <span className="hidden text-xs uppercase tracking-[0.12em] text-faint md:inline">
                        {project.category}
                      </span>
                    </div>

                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm text-faint">{project.tech}</p>
                      <div className="flex flex-wrap gap-x-5">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent transition-colors duration-150 hover:text-accent-hover"
                          >
                            Live
                            <ArrowUpRight className="size-3.5" />
                          </a>
                        )}
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-fg/80 transition-colors duration-150 hover:text-fg"
                        >
                          Source
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-up-right size-3.5"
                            aria-hidden="true"
                          >
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
