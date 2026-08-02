'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Globe, Linkedin, Github } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { profile, languages } from '@/lib/resume-data';
import { useVisitCount } from '@/hooks/use-visit-count';
import { supabase } from '@/lib/supabase';
import SpecularButton from '@/components/specular-button';

export function Contact() {
  const visits = useVisitCount();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    const { error } = await supabase.from('portfolio_messages').insert({
      name: form.name,
      email: form.email,
      subject: form.subject || null,
      message: form.message,
    });
    if (error) {
      setStatus('error');
      return;
    }
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const inputCls =
    'w-full rounded-xl bg-background/60 border border-border/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground';

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to internships, collaborations, and conversations about AI & full-stack work."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {/* info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 transition-colors group"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium break-all">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:+91${profile.phone}`}
              className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 transition-colors group"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium">+91 {profile.phone}</p>
              </div>
            </a>

            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">{profile.location}</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                </span>
                <p className="text-sm font-semibold">{profile.availability}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="rounded-full bg-secondary/70 px-3 py-1 text-xs font-medium inline-flex items-center gap-1.5">
                  <Globe className="h-3 w-3" /> {languages.join(' / ')}
                </span>
              </div>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 px-3 py-1.5 text-xs font-medium hover:bg-secondary transition-colors">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 px-3 py-1.5 text-xs font-medium hover:bg-secondary transition-colors">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </span>
              </div>
            </div>

            {visits !== null && (
              <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Portfolio visits</p>
                  <p className="font-display text-2xl font-bold tabular-nums">{visits.toLocaleString()}</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Name</label>
                <input
                  className={inputCls}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  className={inputCls}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Subject</label>
              <input
                className={inputCls}
                placeholder="What's this about?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                className={`${inputCls} resize-none`}
                rows={5}
                placeholder="Your message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <SpecularButton
              type="submit"
              size="md"
              radius={12}
              tint="#3b82f6"
              tintOpacity={1}
              textColor="#ffffff"
              lineColor="#ffffff"
              baseColor="#1d4ed8"
              intensity={1.2}
              shineSize={12}
              shineFade={50}
              thickness={1.2}
              disabled={status === 'sending' || status === 'sent'}
              className="w-full"
            >
              {status === 'sending' ? (
                <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Sending...</span>
              ) : status === 'sent' ? (
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Message sent!</span>
              ) : (
                <span className="inline-flex items-center gap-2"><Send className="h-4 w-4" /> Send Message</span>
              )}
            </SpecularButton>

            {status === 'error' && (
              <p className="text-sm text-destructive text-center">
                Something went wrong. Please email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
