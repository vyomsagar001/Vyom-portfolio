'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Sparkles } from 'lucide-react';
import { profile, stats } from '@/lib/resume-data';
import { AnimatedCounter } from '@/components/animated-counter';
import SpecularButton from '@/components/specular-button';

export function Hero() {
  const [typed, setTyped] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = profile.roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 90);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 45);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % profile.roles.length);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIdx]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* animated background */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <motion.div
        className="absolute -z-10 top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob"
      />
      <motion.div
        className="absolute -z-10 bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-blob"
        style={{ animationDelay: '4s' }}
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          {profile.availability}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 flex items-center gap-2 text-xl md:text-2xl font-medium h-9"
        >
          <span className="text-gradient">{typed}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="inline-block w-0.5 h-7 bg-primary"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {profile.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-primary" /> 3rd Year, Manipal University Jaipur
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <SpecularButton
            size="md"
            radius={999}
            tint="#3b82f6"
            tintOpacity={1}
            textColor="#ffffff"
            lineColor="#ffffff"
            baseColor="#1d4ed8"
            intensity={1.2}
            shineSize={12}
            shineFade={50}
            thickness={1.2}
            onClick={() => scrollTo('projects')}
          >
            <span className="inline-flex items-center gap-2">
              View Projects <ArrowRight className="h-4 w-4" />
            </span>
          </SpecularButton>
          <SpecularButton
            size="md"
            radius={999}
            tint="#ffffff"
            tintOpacity={0.06}
            blur={8}
            textColor="hsl(var(--foreground))"
            lineColor="#3b82f6"
            baseColor="#64748b"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            onClick={() => { window.location.href = profile.resumeUrl; }}
          >
            <span className="inline-flex items-center gap-2">
              <Download className="h-4 w-4" /> Download Resume
            </span>
          </SpecularButton>
          <SpecularButton
            size="md"
            radius={999}
            tint="#ffffff"
            tintOpacity={0.06}
            blur={8}
            textColor="hsl(var(--foreground))"
            lineColor="#3b82f6"
            baseColor="#64748b"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            onClick={() => scrollTo('contact')}
          >
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> Contact Me
            </span>
          </SpecularButton>
        </motion.div>

        {/* stat counters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-4 md:p-5">
              <div className="font-display text-3xl md:text-4xl font-bold tabular-nums">
                <AnimatedCounter value={s.value} decimals={s.decimals} />
                <span className="text-primary">{s.suffix}</span>
              </div>
              <p className="mt-1 text-xs md:text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
