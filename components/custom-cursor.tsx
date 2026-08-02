'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    let raf = 0;
    let tx = -100, ty = -100;
    let rx = -100, ry = -100;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setPos({ x: tx, y: ty });
      setVisible(true);
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest('a, button, [role="button"], input, textarea, [data-cursor="hover"]'),
      );
    };

    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      setRingPos({ x: rx, y: ry });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div className="cursor-dot" style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)` }} />
      <motion.div
        className="cursor-ring"
        animate={{ width: hovering ? 56 : 36, height: hovering ? 56 : 36, opacity: 1 }}
        style={{ x: ringPos.x, y: ringPos.y, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
}
