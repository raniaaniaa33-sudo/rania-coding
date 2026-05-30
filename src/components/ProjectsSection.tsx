import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const movies = [
  {
    title: "🧙 Harry Potter",
    description: "dunia sihir yang selalu bikin aku pengen balik lagi ✨",
    image: "/potter.jpg",
    color: "from-indigo-400 via-purple-400 to-pink-400",
  },
  {
    title: "🔥 Divergent",
    description: "cerita tentang pilihan dan keberanian jadi diri sendiri",
    image: "/divergent.jpg",
    color: "from-orange-400 via-amber-400 to-rose-400",
  },
  {
    title: "🦁 Narnia",
    description: "fantasi klasik yang penuh petualangan dan keajaiban 🌿",
    image: "/narnia.jpg",
    color: "from-green-300 via-emerald-400 to-teal-400",
  },
  {
    title: "🕵️ Enola Holmes",
    description: "cerdas, bebas, dan beda dari yang lain — seru banget!",
    image: "/holmes.jpg",
    color: "from-pink-300 via-rose-400 to-red-400",
  },
  {
    title: "💌 The Notebook",
    description: "romantis banget, tipe yang bikin hati ikut hanyut 😭",
    image: "/notebook.jpg",
    color: "from-rose-300 via-pink-300 to-fuchsia-300",
  },
  {
    title: "☁️ 500 Days of Summer",
    description: "realistis, ga selalu happy ending tapi meaningful",
    image: "/500days.jpg",
    color: "from-sky-300 via-blue-400 to-indigo-400",
  },
  {
    title: "🌸 Ada Apa Dengan Cinta",
    description: "film yang sederhana tapi punya rasa yang dalam",
    image: "/adaapa.jpg",
    color: "from-pink-300 via-rose-300 to-orange-300",
  },
];

export default function MoviesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden bg-white dark:bg-[#0f0a0d]"
    >

      {/* 🌸 BACKGROUND SAMA ABOUT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-pink-300/25 blur-[140px] top-[-120px] left-[-120px]" />
        <div className="absolute w-[520px] h-[520px] bg-rose-300/20 blur-[140px] bottom-[-150px] right-[-150px]" />
        <div className="absolute w-[420px] h-[420px] bg-fuchsia-300/15 blur-[120px] top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-white/70 dark:bg-black/50" />
      </div>

      {/* HEADER */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Favorite Movies 🎬
        </h2>

        <p className="text-pink-400/80 dark:text-pink-200 mt-3 text-sm">
          bukan cuma tontonan, tapi juga cerita yang nempel di kepala ✨
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">

            {movies.map((movie, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%]"
              >
                <div className="
                  group p-4 rounded-2xl
                  bg-white/70 dark:bg-black/40
                  backdrop-blur-md
                  border border-pink-200/50 dark:border-pink-400/20
                  hover:-translate-y-2 transition duration-500
                ">

                  <div className="relative">
                    {/* glow beda tiap card */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${movie.color} blur-2xl opacity-50 group-hover:opacity-90 transition`} />

                    <div className={`relative rounded-xl p-[2px] bg-gradient-to-r ${movie.color}`}>
                      <div className="overflow-hidden rounded-xl aspect-[2/3] bg-black">
                        <img
                          src={movie.image}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-4 font-bold text-lg text-gray-900 dark:text-white">
                    {movie.title}
                  </h3>

                  <p className="text-sm text-pink-400/80 dark:text-pink-200 mt-2">
                    {movie.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* BUTTON */}
        <Button
          onClick={scrollPrev}
          className="
            absolute left-2 top-1/2 -translate-y-1/2
            bg-white/80 dark:bg-black/40
            backdrop-blur-md
            border border-pink-200/50
          "
        >
          <ChevronLeft />
        </Button>

        <Button
          onClick={scrollNext}
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            bg-white/80 dark:bg-black/40
            backdrop-blur-md
            border border-pink-200/50
          "
        >
          <ChevronRight />
        </Button>

      </div>
    </section>
  );
}