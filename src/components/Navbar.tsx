import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [active, setActive] = useState('#home');
  const [position, setPosition] = useState({ left: 0, width: 0 });

  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const targetRef = useRef<string | null>(null);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Know Me', href: '#about' },
    { label: 'Subjects', href: '#skills' },
    { label: 'Favorites', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const updatePosition = (index: number) => {
    const el = itemRefs.current[index];
    if (!el) return;

    setPosition({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  };

  useLayoutEffect(() => {
    const index = navItems.findIndex((i) => i.href === active);
    if (index !== -1) updatePosition(index);
  }, [active]);

  useEffect(() => {
    const handleResize = () => {
      const index = navItems.findIndex((i) => i.href === active);
      if (index !== -1) updatePosition(index);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [active]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach((item, index) => {
      const section = document.querySelector(item.href);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (targetRef.current && targetRef.current !== item.href) return;

            setActive(item.href);
            updatePosition(index);

            if (targetRef.current === item.href) {
              targetRef.current = null;
            }
          }
        },
        {
          // 🔥 FIX UTAMA DI SINI
          root: null,
          threshold: 0.35, 
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = (href: string, index: number) => {
    const el = document.querySelector(href);
    if (!el) return;

    targetRef.current = href;

    setActive(href);
    updatePosition(index);

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      
      {/* glow */}
      <div className="absolute inset-0 blur-3xl opacity-20 bg-pink-200/40 rounded-full pointer-events-none" />

      <div
        className={`relative flex items-center gap-2 px-3 py-2 rounded-full border backdrop-blur-xl transition ${
          isDark
            ? 'bg-pink-300/10 border-pink-200/20'
            : 'bg-white/70 border-pink-200/40'
        } shadow-[0_0_20px_rgba(244,114,182,0.2)]`}
      >
        {/* NAV */}
        <div className="relative flex items-center">

          {/* CAPSULE */}
          <motion.div
            className="absolute top-0 bottom-0 rounded-full"
            animate={{
              left: position.left,
              width: position.width,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div
              className={`w-full h-full rounded-full ${
                isDark ? 'bg-pink-300/20' : 'bg-pink-100/70'
              }`}
            />
          </motion.div>

          {navItems.map((item, index) => (
            <button
              key={item.href}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => scrollToSection(item.href, index)}
              className={`relative px-3 py-1.5 text-sm font-medium transition ${
                active === item.href
                  ? 'text-pink-400'
                  : isDark
                  ? 'text-white/60 hover:text-pink-200'
                  : 'text-black/60 hover:text-pink-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* divider */}
        <div className={`w-px h-4 mx-1 ${
          isDark ? 'bg-pink-200/20' : 'bg-pink-200/40'
        }`} />

        {/* toggle */}
        <button
          onClick={toggleTheme}
          className={`p-1.5 rounded-full transition ${
            isDark ? 'hover:bg-pink-200/10' : 'hover:bg-pink-100/50'
          }`}
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <Sun className="w-4 h-4 text-pink-200" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Moon className="w-4 h-4 text-pink-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}