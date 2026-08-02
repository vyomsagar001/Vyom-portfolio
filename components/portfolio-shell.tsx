'use client';

import { useEffect, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { CommandMenu } from '@/components/command-menu';
import { CustomCursor } from '@/components/custom-cursor';
import { ScrollProgress } from '@/components/scroll-progress';
import { BackToTop } from '@/components/back-to-top';
import { LoadingScreen } from '@/components/loading-screen';
import { CommandHint } from '@/components/command-hint';
import { supabase } from '@/lib/supabase';

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await supabase.rpc('increment_visit_counter');
      } catch {
        // ignore — counter is best-effort
      }
    })();
  }, []);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar onCommand={() => setCmdOpen(true)} />
      <CommandMenu />
      <main>{children}</main>
      <BackToTop />
      <CommandHint onOpen={() => setCmdOpen(true)} />
    </>
  );
}
