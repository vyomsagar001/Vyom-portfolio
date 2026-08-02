'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, BookOpen } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { education } from '@/lib/resume-data';
import TiltedCard from '@/components/tilted-card';

const eduImages = [
  'https://images.pexels.com/photos/5147366/pexels-photo-5147366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/32279024/pexels-photo-32279024.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/37456293/pexels-photo-37456293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Education"
          title="A strong academic foundation"
          description="Consistent academic excellence from school through a specialized AI & ML degree."
        />

        <div className="mt-14 space-y-10">
          {education.map((edu, i) => {
            const left = i % 2 === 0;
            const isCurrent = edu.period.includes('2024') && edu.period.includes('2028');
            return (
              <motion.div
                key={edu.degree}
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
                      imageSrc={eduImages[i] ?? eduImages[0]}
                      altText={`${edu.degree} at ${edu.org}`}
                      captionText={edu.org}
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
                            <div className={`h-9 w-9 rounded-full flex items-center justify-center ${isCurrent ? 'bg-success' : 'bg-primary'}`}>
                              <GraduationCap className="h-4 w-4 text-white" />
                            </div>
                            {isCurrent && (
                              <span className="rounded-full bg-success/90 px-2.5 py-0.5 text-xs font-semibold">Current</span>
                            )}
                          </div>
                          <p className="font-display text-lg font-bold text-center leading-tight">{edu.degree}</p>
                          <p className="text-sm text-white/80 mt-1">{edu.org}</p>
                          <p className="text-xs text-white/60 mt-1">{edu.period} · {edu.location}</p>
                        </div>
                      }
                    />
                  </div>
                </div>

                {/* Details */}
                <div className={`md:col-span-7 ${left ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-colors">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display text-lg font-semibold">{edu.degree}</h3>
                      {isCurrent && (
                        <span className="rounded-full bg-success/15 text-success px-2.5 py-0.5 text-xs font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium text-sm">{edu.org}</p>
                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{edu.period}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {edu.location}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-foreground">{edu.detail}</p>
                    {edu.coursework && (
                      <div className="mt-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-1.5">
                          <BookOpen className="h-3.5 w-3.5" /> Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((c) => (
                            <span key={c} className="rounded-lg bg-secondary/70 px-2.5 py-1 text-xs font-medium">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
