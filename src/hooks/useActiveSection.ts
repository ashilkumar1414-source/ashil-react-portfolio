import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/portfolio';

export function useActiveSection() {
  const [activeId, setActiveId] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const offset = window.innerHeight * 0.35;
      let current = NAV_LINKS[0].id;

      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = link.id;
      }

      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { activeId, scrolled };
}
