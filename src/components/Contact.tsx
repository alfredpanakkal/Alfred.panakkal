import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { submitContactMessage } from '../api';
import { CopyIcon, Spinner } from './icons';

export const Contact: React.FC = () => {
  // Form input states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _honeypot: '' // Hidden field for bot detection
  });

  // UI feedback states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [statusType, setStatusType] = useState<'idle' | 'success' | 'error'>('idle');
  const [isCopied, setIsCopied] = useState(false);

  // Timer ref for copy feedback cleanup
  const copyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Copy email address to clipboard
  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
        setIsCopied(true);
        if (copyTimeoutRef.current !== null) {
          window.clearTimeout(copyTimeoutRef.current);
        }
        copyTimeoutRef.current = window.setTimeout(() => setIsCopied(false), 1800);
      } else {
        setStatusMessage('Copy failed — the address is in the link.');
        setStatusType('error');
      }
    } catch {
      setStatusMessage('Copy failed — the address is in the link.');
      setStatusType('error');
    }
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('');
    setStatusType('idle');

    const nameTrimmed = formData.name.trim();
    const emailTrimmed = formData.email.trim();
    const messageTrimmed = formData.message.trim();

    // Client-side validations
    if (nameTrimmed.length < 2) {
      setStatusMessage('Please enter your name (at least 2 characters).');
      setStatusType('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      setStatusMessage('Please provide a valid email address.');
      setStatusType('error');
      return;
    }

    if (messageTrimmed.length < 12) {
      setStatusMessage('Please enter a message with at least 12 characters.');
      setStatusType('error');
      return;
    }

    try {
      setIsSubmitting(true);

      // Call our centralized backend API service
      const result = await submitContactMessage({
        name: nameTrimmed,
        email: emailTrimmed,
        message: messageTrimmed,
        _honeypot: formData._honeypot
      });

      setStatusType('success');
      setStatusMessage(result.message || 'Thank you! Your message has been sent successfully.');

      // Reset form upon successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
        _honeypot: ''
      });
    } catch (err: unknown) {
      setStatusType('error');
      if (err instanceof Error) {
        setStatusMessage(err.message);
      } else {
        setStatusMessage('Something went wrong. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-16 sm:py-24 lg:py-28">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Contact Details & Links */}
          <div className="lg:col-span-5">
            <p className="label">Contact</p>
            <h2 className="mt-3 font-display text-title font-medium">
              {PERSONAL_INFO.contact.heading}
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              {PERSONAL_INFO.contact.subheading}
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="font-medium text-fg underline-offset-4 hover:underline"
                >
                  {PERSONAL_INFO.contact.email}
                </a>

                {/* Accessible Copy Button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-line px-3 text-xs text-muted transition-colors duration-150 hover:border-fg/25 hover:text-fg"
                  aria-label="Copy email address"
                >
                  <CopyIcon className="size-3.5" />
                  <span>{isCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </li>

              <li>
                <a
                  href={PERSONAL_INFO.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted underline-offset-4 hover:text-fg hover:underline"
                >
                  {PERSONAL_INFO.contact.githubHandle}
                </a>
              </li>

              <li>
                <a
                  href={PERSONAL_INFO.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted underline-offset-4 hover:text-fg hover:underline"
                >
                  {PERSONAL_INFO.contact.linkedinHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Functional Backend Connected Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 lg:col-span-7"
            noValidate
          >
            {/* Hidden Honeypot Field (Bot trap) */}
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="hp_field">Do not fill this if human</label>
              <input
                id="hp_field"
                type="text"
                name="_honeypot"
                value={formData._honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label htmlFor="cname" className="block">
                <span className="mb-2 block text-sm font-medium text-fg">Name</span>
                <input
                  id="cname"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  minLength={2}
                  className="field-input"
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </label>

              <label htmlFor="cemail" className="block">
                <span className="mb-2 block text-sm font-medium text-fg">Email</span>
                <input
                  id="cemail"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="field-input"
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                />
              </label>
            </div>

            <label htmlFor="cmsg" className="block">
              <span className="mb-2 block text-sm font-medium text-fg">Message</span>
              <textarea
                id="cmsg"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={12}
                rows={6}
                className="field-input min-h-36 resize-y"
                placeholder="What you want to talk about"
                disabled={isSubmitting}
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-[background-color,color,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.98] bg-solid text-solid-fg hover:opacity-90 min-h-11 px-5 py-2.5"
              >
                {isSubmitting ? (
                  <>
                    <Spinner className="size-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  'Send message'
                )}
              </button>

              {/* Status Message Display */}
              {statusMessage && (
                <p
                  role="status"
                  className={`text-sm ${
                    statusType === 'success'
                      ? 'text-accent font-medium'
                      : statusType === 'error'
                      ? 'text-red-500 font-medium'
                      : 'text-muted'
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
