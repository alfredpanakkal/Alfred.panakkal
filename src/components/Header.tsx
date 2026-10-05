import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SunIcon, MoonIcon, MenuIcon } from './icons';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync header background blur and borders on window scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 8;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile navigation drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background page scrolling when the mobile menu is open
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileNavOpen]);

  const closeMobileNav = () => setIsMobileNavOpen(false);

  const isSolidHeader = isScrolled || isMobileNavOpen;

  return (
    <>
      {/* Hidden skip link for keyboard screen-reader accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-solid focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-solid-fg"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-200 ${
          isSolidHeader
            ? 'border-line bg-bg/85 backdrop-blur-md'
            : 'border-transparent bg-bg/70 backdrop-blur-sm'
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            onClick={closeMobileNav}
            className="font-display text-sm font-medium tracking-tight text-fg"
          >
            {PERSONAL_INFO.name.split(' ')[0]}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex" aria-label="Primary">
            <a href="#about" className="relative py-2 transition-colors duration-150 hover:text-fg">
              About
            </a>
            <a href="#experience" className="relative py-2 transition-colors duration-150 hover:text-fg">
              Experience
            </a>
            <a href="#projects" className="relative py-2 transition-colors duration-150 hover:text-fg">
              Projects
            </a>
            <a href="#skills" className="relative py-2 transition-colors duration-150 hover:text-fg">
              Skills
            </a>
            <a href="#contact" className="relative py-2 transition-colors duration-150 hover:text-fg">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-1">
            {/* Color Theme Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="relative inline-flex size-11 items-center justify-center rounded-md text-muted transition-colors duration-150 hover:bg-elev hover:text-fg"
              aria-label="Toggle color theme"
            >
              <SunIcon className="hidden size-4 dark:block" />
              <MoonIcon className="block size-4 dark:hidden" />
            </button>

            {/* Mobile Navigation Drawer Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="inline-flex size-11 items-center justify-center rounded-md text-fg md:hidden"
              aria-label={isMobileNavOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-nav"
            >
              <MenuIcon className="size-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-nav"
          className={`border-t border-line md:hidden ${isMobileNavOpen ? 'block' : 'hidden'}`}
        >
          <nav className="wrap flex flex-col py-2" aria-label="Mobile">
            <a
              href="#about"
              onClick={closeMobileNav}
              className="flex min-h-12 items-center border-b border-line/70 text-base last:border-b-0"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={closeMobileNav}
              className="flex min-h-12 items-center border-b border-line/70 text-base last:border-b-0"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={closeMobileNav}
              className="flex min-h-12 items-center border-b border-line/70 text-base last:border-b-0"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={closeMobileNav}
              className="flex min-h-12 items-center border-b border-line/70 text-base last:border-b-0"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={closeMobileNav}
              className="flex min-h-12 items-center border-b border-line/70 text-base last:border-b-0"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};
