'use client';

import { profile, navSections } from '@/lib/resume-data';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <button onClick={() => go('home')} className="font-display font-bold text-lg">
              <span className="text-gradient">{profile.firstName}</span>
              <span>.</span>
            </button>
            <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind & Framer Motion.
          </p>
          <button
            onClick={() => go('home')}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
