'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command } from 'lucide-react';
import { navSections, profile } from '@/lib/resume-data';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

export function Navbar({ onCommand }: { onCommand: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navSections.map((s) => document.getElementById(s.id));
      const y = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= y) {
          setActive(navSections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-sm' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between">
        <button onClick={() => go('home')} className="font-display font-bold text-lg tracking-tight">
          <span className="text-gradient">{profile.firstName}</span>
          <span className="text-foreground">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={cn(
                'relative px-3 py-2 text-sm font-medium rounded-md transition-colors',
                active === s.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {s.label}
              {active === s.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-md bg-secondary"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onCommand}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border/60 text-xs text-muted-foreground hover:bg-secondary transition-colors"
          >
            <Command className="h-3 w-3" /> K
          </button>
          <ThemeToggle />
          <button
            className="md:hidden h-9 w-9 rounded-full border border-border/60 flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass border-t border-border/50"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navSections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => go(s.id)}
                  className="text-left px-3 py-2.5 rounded-md text-sm font-medium hover:bg-secondary transition-colors"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
