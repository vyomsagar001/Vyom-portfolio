'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Award } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { certifications, type Certification } from '@/lib/resume-data';

const issuerMeta: Record<string, { color: string }> = {
  Oracle: { color: 'from-red-500 to-rose-600' },
  NPTEL: { color: 'from-blue-500 to-indigo-600' },
  'Oracle Academy': { color: 'from-amber-500 to-orange-600' },
  Microsoft: { color: 'from-sky-500 to-cyan-600' },
  Cisco: { color: 'from-cyan-500 to-teal-600' },
  Deloitte: { color: 'from-green-600 to-emerald-700' },
};

function groupByIssuer(certs: Certification[]) {
  const map = new Map<string, Certification[]>();
  certs.forEach((c) => {
    const arr = map.get(c.issuer) ?? [];
    arr.push(c);
    map.set(c.issuer, arr);
  });
  return Array.from(map.entries());
}

export function Certifications() {
  const grouped = groupByIssuer(certifications);

  return (
    <section id="certifications" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified credentials across AI, cloud & engineering"
          description="Nine real certifications, grouped by issuer — no invented credentials."
        />

        <div className="mt-14 space-y-10">
          {grouped.map(([issuer, certs], gi) => {
            const meta = issuerMeta[issuer] ?? { color: 'from-primary to-accent' };
            return (
              <motion.div
                key={issuer}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: gi * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-9 w-9 rounded-lg bg-gradient-to-br ${meta.color} flex items-center justify-center`}>
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{issuer}</h3>
                  <span className="text-xs text-muted-foreground">({certs.length})</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certs.map((c) => (
                    <div
                      key={c.name}
                      className="group glass-card rounded-2xl p-5 hover:border-primary/40 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <BadgeCheck className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm leading-snug">{c.name}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {c.issuer}
                            {c.year ? ` · ${c.year}` : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
