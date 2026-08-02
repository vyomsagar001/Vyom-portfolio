'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { experience } from '@/lib/resume-data';
import TiltedCard from '@/components/tilted-card';

const roleImages = [
  'https://images.pexels.com/photos/7115/iphone-speech-conference-cell-phone.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/29180747/pexels-photo-29180747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7688106/pexels-photo-7688106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Leadership & Experience"
          title="Leading, building, and growing a technical community"
          description="Real roles with real responsibility — treated as professional experience, because it is."
        />

        <div className="mt-14 space-y-10">
          {experience.map((exp, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-12 gap-6 items-center"
              >
                {/* Tilted card */}
                <div className={`md:col-span-5 ${left ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="flex justify-center md:justify-start">
                    <TiltedCard
                      imageSrc={roleImages[i] ?? roleImages[0]}
                      altText={`${exp.role} at ${exp.org}`}
                      captionText={exp.org}
                      containerHeight="280px"
                      containerWidth="100%"
                      imageHeight="280px"
                      imageWidth="440px"
                      rotateAmplitude={10}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                      overlayContent={
                        <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`h-9 w-9 rounded-full flex items-center justify-center ${exp.current ? 'bg-success' : 'bg-primary'}`}>
                              <Briefcase className="h-4 w-4 text-white" />
                            </div>
                            {exp.current && (
                              <span className="rounded-full bg-success/90 px-2.5 py-0.5 text-xs font-semibold">Current</span>
                            )}
                          </div>
                          <p className="font-display text-lg font-bold text-center leading-tight">{exp.role}</p>
                          <p className="text-sm text-white/80 mt-1">{exp.org}</p>
                          <p className="text-xs text-white/60 mt-1">{exp.period} · {exp.location}</p>
                        </div>
                      }
                    />
                  </div>
                </div>

                {/* Details */}
                <div className={`md:col-span-7 ${left ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-colors">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                      {exp.current && (
                        <span className="rounded-full bg-success/15 text-success px-2.5 py-0.5 text-xs font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium text-sm">{exp.org}</p>
                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{exp.period}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {exp.location}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground/80 leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
