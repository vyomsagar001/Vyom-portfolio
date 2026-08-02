'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export function useVisitCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from('portfolio_visits')
        .select('count')
        .eq('id', 1)
        .maybeSingle();
      if (data) setCount(data.count);
    })();
  }, []);

  return count;
}
