import { motion } from 'framer-motion';
import { Github, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/raniaaniaa33-sudo/rania-coding.git',
      label: 'GitHub',
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/',
      label: 'YouTube',
    },
  ];

  return (
    <footer
      className="
        relative overflow-hidden
        py-10 md:py-14
        bg-white dark:bg-[#0b0b0f]
        border-t border-pink-200/30 dark:border-white/10
        text-gray-900 dark:text-white
      "
    >
      {/* 🌸 soft glow biar nyambung About */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-pink-300/25 blur-[140px] -top-40 -left-40" />
        <div className="absolute w-[400px] h-[400px] bg-rose-300/20 blur-[140px] bottom-[-150px] right-[-120px]" />
        <div className="absolute inset-0 bg-white/60 dark:bg-black/40" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              flex items-center gap-2 text-sm md:text-base
              text-gray-600 dark:text-gray-300
            "
          >
            <span>© {currentYear}</span>

            <span className="flex items-center gap-1">
              dibuat pelan-pelan dengan
              <Heart className="h-4 w-4 text-pink-400 fill-pink-400 animate-pulse" />
              oleh
            </span>

            <span className="font-semibold text-pink-500">
              Rania Nur 🌸
            </span>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                whileHover={{ scale: 1.12, rotate: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="
                  relative p-3 rounded-full
                  bg-white/70 dark:bg-white/5
                  backdrop-blur-md
                  border border-pink-200/30 dark:border-white/10
                  text-pink-500 dark:text-pink-200
                  hover:text-pink-400
                  transition
                "
              >
                <social.icon className="h-5 w-5" />

                <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 bg-pink-300/10 blur-md transition" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* QUOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            text-center mt-8 text-xs md:text-sm
            text-gray-500 dark:text-gray-400
          "
        >
          “nggak harus cepat, yang penting tetap jalan 🌷”
        </motion.p>
      </div>
    </footer>
  );
}