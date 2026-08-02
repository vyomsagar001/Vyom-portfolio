'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Search, ArrowRight } from 'lucide-react';
import { navSections, profile } from '@/lib/resume-data';

interface CommandItem {
  label: string;
  hint: string;
  action: () => void;
  group: string;
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setQuery('');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const items: CommandItem[] = [
    ...navSections.map((s) => ({
      label: `Go to ${s.label}`,
      hint: 'Navigation',
      action: () => go(s.id),
      group: 'Navigate',
    })),
    {
      label: 'Email Vyom',
      hint: 'Contact',
      action: () => {
        window.location.href = `mailto:${profile.email}`;
        setOpen(false);
      },
      group: 'Actions',
    },
    {
      label: 'Call Vyom',
      hint: 'Contact',
      action: () => {
        window.location.href = `tel:+91${profile.phone}`;
        setOpen(false);
      },
      group: 'Actions',
    },
    {
      label: 'View MATRIX Gym (live)',
      hint: 'Project',
      action: () => {
        window.open('https://matrix-gym-tech-learn.vercel.app/', '_blank');
        setOpen(false);
      },
      group: 'Projects',
    },
    {
      label: 'View CrisisConnect (live)',
      hint: 'Project',
      action: () => {
        window.open('https://crisisconnect-seven.vercel.app/', '_blank');
        setOpen(false);
      },
      group: 'Projects',
    },
  ];

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 gap-0 max-w-xl overflow-hidden rounded-2xl">
        <div className="flex items-center gap-3 px-4 border-b border-border/60">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground"
          />
          <kbd className="text-xs text-muted-foreground border border-border/60 rounded px-1.5 py-0.5">ESC</kbd>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-muted-foreground">No results found.</p>
          )}
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={item.action}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm hover:bg-secondary transition-colors text-left"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-wide text-muted-foreground w-16">
                    {item.group}
                  </span>
                  {item.label}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
