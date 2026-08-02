'use client';

import { techMarquee } from '@/lib/resume-data';

export function TechMarquee() {
  const row = [...techMarquee, ...techMarquee];
  return (
    <div className="relative overflow-hidden py-6 border-y border-border/40 bg-muted/20">
      <div className="flex w-max animate-marquee gap-8">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="text-sm font-medium text-muted-foreground whitespace-nowrap flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            {t}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
