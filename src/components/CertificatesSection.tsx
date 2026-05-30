import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "Langkah Awal di Dunia Digital 💻",
    issuer: "Self Learning Journey",
    date: "2024",
    credentialId: "STEP-001",
    image: "🌸",
    color: "from-pink-300 via-rose-200 to-transparent",
  },
  {
    title: "Belajar Web Pelan-Pelan 🌷",
    issuer: "Practice & Exploration",
    date: "2024",
    credentialId: "WEB-002",
    image: "✨",
    color: "from-rose-300 via-pink-200 to-transparent",
  },
  {
    title: "Ngoding Walau Bingung 😭",
    issuer: "Real Experience",
    date: "2023",
    credentialId: "CODE-003",
    image: "💻",
    color: "from-fuchsia-300 via-pink-200 to-transparent",
  },
  {
    title: "Belajar Konsisten Sedikit-Sedikit 🌱",
    issuer: "Daily Habit",
    date: "2023",
    credentialId: "CONSIST-004",
    image: "🍃",
    color: "from-pink-200 via-rose-200 to-transparent",
  },
  {
    title: "Ngerti Setelah Lama 😌",
    issuer: "Trial & Error",
    date: "2022",
    credentialId: "LEARN-005",
    image: "🧠",
    color: "from-fuchsia-200 via-pink-300 to-transparent",
  },
  {
    title: "Masih Proses, Belum Selesai 🌙",
    issuer: "Ongoing Journey",
    date: "Now",
    credentialId: "PROGRESS-006",
    image: "🌙",
    color: "from-rose-200 via-pink-200 to-transparent",
  },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative py-28 bg-white dark:bg-[#0f0a0d] overflow-hidden"
    >
      {/* 🌸 SOFT GLOW (SAMA KAYA ABOUT) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-pink-300/25 blur-[140px] top-[-120px] left-[-120px]" />
        <div className="absolute w-[520px] h-[520px] bg-rose-300/20 blur-[140px] bottom-[-140px] right-[-140px]" />
        <div className="absolute w-[420px] h-[420px] bg-fuchsia-300/15 blur-[120px] top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-white/70 dark:bg-black/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-2xl mx-auto text-center"
        >
          <span className="text-pink-300 tracking-[0.3em] text-xs uppercase">
            ✦ perjalanan kecil
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            My {' '}
            <span className="text-pink-400">
              Certificates 🌸
            </span>
          </h2>

          <p className="mt-4 text-pink-400/70 dark:text-pink-200/70 text-sm">
            bukan tentang sertifikat, tapi tentang proses yang pelan-pelan aku jalanin ✨
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`
                relative group rounded-3xl p-[1px]
                bg-gradient-to-br ${cert.color}
              `}
            >
              <div
                className="
                  relative h-full rounded-3xl p-6
                  bg-white/70 dark:bg-black/40
                  backdrop-blur-xl
                  transition duration-500
                  group-hover:-translate-y-2
                  border border-pink-200/50 dark:border-pink-400/20
                "
              >
                {/* glow hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute w-40 h-40 bg-pink-300/20 blur-3xl top-[-20px] right-[-20px]" />
                </div>

                {/* icon */}
                <div className="text-4xl mb-4 transition group-hover:scale-110 duration-300">
                  {cert.image}
                </div>

                {/* title */}
                <div className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-pink-400 mt-1" />
                  <h3 className="font-semibold text-lg leading-snug text-gray-900 dark:text-white group-hover:text-pink-400 transition">
                    {cert.title}
                  </h3>
                </div>

                {/* issuer */}
                <p className="mt-2 text-sm text-pink-400/70 dark:text-pink-200/70">
                  {cert.issuer}
                </p>

                {/* meta */}
                <div className="flex items-center gap-2 text-xs text-pink-300/70 mt-3">
                  <Calendar className="h-4 w-4" />
                  {cert.date}
                </div>

                <p className="text-[11px] mt-2 font-mono text-pink-300/60">
                  {cert.credentialId}
                </p>

                {/* button */}
                <div className="mt-5">
                  <Button
                    size="sm"
                    className="
                      rounded-full
                      bg-pink-300/20 text-pink-500
                      hover:bg-pink-400 hover:text-white
                      transition
                    "
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    lihat
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}