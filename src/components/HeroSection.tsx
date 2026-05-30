import { motion } from 'framer-motion';
import { ArrowDown, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const fade = (d = 0) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d, ease: 'easeOut' },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white dark:bg-[#0f0a0d] overflow-hidden"
    >

      {/* 🌸 SOFT GLOW LAYER */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute w-[600px] h-[600px] bg-pink-300/25 blur-[140px] top-[-120px] left-[-120px]" />

        <div className="absolute w-[520px] h-[520px] bg-rose-300/20 blur-[140px] bottom-[-140px] right-[-140px]" />

        <div className="absolute w-[420px] h-[420px] bg-fuchsia-300/15 blur-[120px] top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2" />

        {/* 🔥 FIX: biar gak nutup klik */}
        <div className="absolute inset-0 bg-white/70 dark:bg-black/50 pointer-events-none" />

      </div>

      <ThreeScene />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

            {/* IMAGE */}
            <motion.div {...fade(0)} className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src="/fotorania1.jpg"
                  className="
                    w-[210px] md:w-[270px]
                    h-[350px] md:h-[430px]
                    object-cover object-top
                    rounded-[28px]
                    border border-pink-200/60 dark:border-pink-400/20
                    shadow-2xl
                    transition duration-500 hover:scale-[1.02]
                  "
                />
              </div>
            </motion.div>

            {/* TEXT */}
            <div className="md:col-span-7 text-center md:text-left">

              <motion.div {...fade(0.2)} className="leading-tight">

                <div className="inline-flex items-center mb-3 px-5 py-2 rounded-full border border-pink-200/60 dark:border-pink-400/20 bg-white/60 dark:bg-black/40 backdrop-blur-md">
                  <span className="text-sm md:text-[13px] text-pink-400 dark:text-pink-300 tracking-wide">
                    🌸 little space on the internet, growing quietly
                  </span>
                </div>

                <p className="text-pink-300 dark:text-pink-300 text-[11px] tracking-[0.35em] mb-2 uppercase">
                  about me
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
                  hi, aku{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-400 to-rose-300">
                    Rania
                  </span>{' '}
                  🌷
                </h1>

                <p className="mt-2 text-pink-400/70 dark:text-pink-200/70 text-sm md:text-base max-w-md">
                  masih belajar, masih nyoba, dan masih sering bingung —  
                  tapi lagi nikmatin proses bikin sesuatu dari nol ✨
                </p>

              </motion.div>

              {/* STORY */}
              <div className="mt-5 space-y-3 max-w-xl">

                <motion.p {...fade(0.3)} className="text-pink-400/80 dark:text-pink-200 leading-relaxed">
                  🌸 lagi pelan-pelan ngerti dunia web, satu step kecil tiap hari.
                </motion.p>

                <motion.p {...fade(0.4)} className="text-pink-400/80 dark:text-pink-200 leading-relaxed">
                  💭 kadang stuck, kadang juga tiba-tiba ngerti — lucu sih prosesnya 😭
                </motion.p>

                <motion.p {...fade(0.5)} className="text-pink-400/80 dark:text-pink-200 leading-relaxed">
                  🚀 ini bukan hasil akhir, tapi tempat aku tumbuh.
                </motion.p>

              </div>

              {/* BUTTONS */}
              <motion.div {...fade(0.55)} className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">

                <Button
                  className="rounded-full px-7 bg-pink-300 hover:bg-pink-400 text-white shadow-[0_0_15px_rgba(244,114,182,0.2)]"
                  onClick={() => {
                    const el = document.querySelector('#projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  favorite movies 🚀
                </Button>

                <Button
                  variant="outline"
                  className="
                    rounded-full px-7
                    border-pink-200 text-pink-400
                    dark:border-pink-400/30 dark:text-pink-300
                    hover:bg-pink-100/60 dark:hover:bg-pink-400/10
                  "
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  call me 💌
                </Button>

              </motion.div>

              {/* SOCIAL */}
              <motion.div {...fade(0.6)} className="mt-6 flex gap-4 justify-center md:justify-start">

                {[
                  { icon: Github, href: 'https://github.com/raniaaniaa33-sudo/rania-coding.git' },
                  { icon: Youtube, href: 'https://www.youtube.com/' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    className="
                      p-2 rounded-full border
                      border-pink-200/60 dark:border-pink-400/20
                      hover:scale-110 transition
                    "
                  >
                    <s.icon className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                  </a>
                ))}

              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* 🔥 SCROLL BUTTON FIX */}
      <motion.button
        onClick={scrollToAbout}
        className="
          absolute bottom-6 left-1/2 -translate-x-1/2 p-3 rounded-full
          bg-white/70 dark:bg-black/50
          border border-pink-200/60 dark:border-pink-400/20
          backdrop-blur
          z-20
        "
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="w-5 h-5 text-pink-400 dark:text-pink-300" />
      </motion.button>

    </section>
  );
}