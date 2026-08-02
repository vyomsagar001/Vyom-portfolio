'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { about, profile } from '@/lib/resume-data';
import { Target, Zap, GraduationCap, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="About"
          title="Engineering at the intersection of AI & the web"
          description="Building real, deployed software while leading a community of builders."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 glass-card rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-2 text-primary mb-4">
              <Target className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Mission</span>
            </div>
            <p className="text-lg leading-relaxed text-foreground/90">{about.mission}</p>

            <div className="mt-6 flex items-center gap-2 text-primary">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">What makes me unique</span>
            </div>
            <ul className="mt-3 space-y-3">
              {about.unique.map((u) => (
                <li key={u} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{u}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="glass-card rounded-2xl p-6 flex-1">
              <GraduationCap className="h-6 w-6 text-primary mb-3" />
              <p className="font-display text-2xl font-bold">8.8 CGPA</p>
              <p className="text-sm text-muted-foreground mt-1">
                B.Tech AI & ML, Manipal University Jaipur (2024–2028)
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 flex-1">
              <Users className="h-6 w-6 text-primary mb-3" />
              <p className="font-display text-2xl font-bold">Vice Chairperson</p>
              <p className="text-sm text-muted-foreground mt-1">
                Leading AIML Community MUJ — events, hackathons & growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
