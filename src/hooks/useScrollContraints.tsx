import { useState, useEffect } from 'react';

interface Constraints {
  top: number;
  bottom: number;
}

/**
 * Calculate the top/bottom scroll constraints of a full-screen element vs the viewport
 */
export function useScrollConstraints(ref, measureConstraints: boolean) {
  const [constraints, setConstraints] = useState<Constraints>({
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (!measureConstraints) return;

    const element = ref.current;
    const viewportHeight = window.innerHeight;
    const contentTop = element.offsetTop;
    const contentHeight = element.offsetHeight;
    const scrollableViewport = viewportHeight - contentTop * 2;
    const top = Math.min(scrollableViewport - contentHeight, 0);

    setConstraints({ top, bottom: 0 });
  }, [measureConstraints]);

  return constraints;
}
