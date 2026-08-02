'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Lightbulb, Wrench, Cpu, CheckCircle2, AlertTriangle, Trophy, Star } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { projects } from '@/lib/resume-data';
import SpecularButton from '@/components/specular-button';

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Built, shipped, and deployed"
          description="Enterprise-style case studies — the problem, the solution, the architecture, and the result."
        />

        <div className="mt-14 space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* left summary */}
                <div className="lg:col-span-2 p-6 md:p-8 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
                  <div className="flex items-center gap-2 mb-4">
                    {p.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 text-primary px-2.5 py-1 text-xs font-semibold">
                        <Star className="h-3 w-3" /> Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{p.tagline}</p>
                  <SpecularButton
                    size="sm"
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
                    onClick={() => window.open(p.liveUrl, '_blank', 'noopener,noreferrer')}
                  >
                    <span className="inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" /> View Live
                    </span>
                  </SpecularButton>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-lg bg-secondary/70 px-2.5 py-1 text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* right case study */}
                <div className="lg:col-span-3 p-6 md:p-8 space-y-5">
                  <CaseRow icon={Lightbulb} label="Problem" text={p.problem} />
                  <CaseRow icon={Wrench} label="Solution" text={p.solution} />
                  <CaseRow icon={Cpu} label="Architecture" text={p.architecture} />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                      Key Features
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {p.challenges && (
                    <CaseRow icon={AlertTriangle} label="A real challenge" text={p.challenges} />
                  )}
                  <CaseRow icon={Trophy} label="Result" text={p.result} highlight />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseRow({
  icon: Icon,
  label,
  text,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div className={highlight ? 'rounded-xl bg-success/10 p-4' : ''}>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5 flex items-center gap-1.5">
        <Icon className="h-3.5 w-3.5 text-primary" /> {label}
      </p>
      <p className={`text-sm leading-relaxed ${highlight ? 'text-foreground font-medium' : 'text-foreground/80'}`}>
        {text}
      </p>
    </div>
  );
}
