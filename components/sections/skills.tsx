'use client';

import { motion } from 'framer-motion';
import {
  Code2, Server, Layout, Cloud, Wrench, BrainCircuit,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { skillCategories, softSkills, type SkillTier } from '@/lib/resume-data';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Code2, Server, Layout, Cloud, Wrench, BrainCircuit,
};

const tierStyles: Record<SkillTier, { label: string; bar: string; dot: string }> = {
  Advanced: { label: 'Advanced', bar: 'bg-success', dot: 'bg-success' },
  Proficient: { label: 'Proficient', bar: 'bg-primary', dot: 'bg-primary' },
  Familiar: { label: 'Familiar', dot: 'bg-accent', bar: 'bg-accent' },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-dots opacity-30" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack + AI/ML toolkit"
          description="Categorized by domain with honest proficiency tiers — no invented percentages."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            const tier = tierStyles[cat.tier];
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group glass-card rounded-2xl p-5 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <span className={cn('h-1.5 w-1.5 rounded-full', tier.dot)} />
                    {tier.label}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-base mb-3">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-secondary/70 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: cat.tier === 'Advanced' ? '92%' : cat.tier === 'Proficient' ? '74%' : '52%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
                    className={cn('h-full rounded-full', tier.bar)}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 glass-card rounded-2xl p-5 flex flex-wrap items-center gap-3"
        >
          <span className="text-sm font-semibold text-muted-foreground">Soft skills:</span>
          {softSkills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border/60 px-3 py-1 text-xs font-medium"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
