'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from 'lucide-react';

export function CommandHint({ onOpen }: { onOpen: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={onOpen}
          className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 rounded-full glass px-3 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors shadow-sm"
        >
          <Command className="h-3.5 w-3.5" />
          Press
          <kbd className="font-sans font-semibold text-foreground">⌘K</kbd>
          to navigate
        </motion.button>
      )}
    </AnimatePresence>
  );
}
