import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  {
    icon: Mail,
    label: "email aku",
    value: "raniaaniaa33@gmail.com",
    href: "mailto:raniaaniaa33@gmail.com",
  },
  {
    icon: Phone,
    label: "nomor aku",
    value: "+62 813-3005-6820",
    href: "tel:+62 813-3005-6820",
  },
  {
    icon: MapPin,
    label: "aku tinggal di",
    value: "Banda Aceh, Indonesia",
    href: "https://maps.app.goo.gl/fE8QqoKS2t1tzvdR8",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      toast({
        title: "pesan terkirim 💌",
        description: "aku bakal balas kalau sudah lihat ya ✨",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({
        title: "gagal terkirim",
        description: "coba lagi nanti ya 🌸",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-white dark:bg-[#0f0a0d] overflow-hidden"
    >
      {/* 🌸 SOFT PINK LAYER (SAMAIN ABOUT) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-pink-300/25 blur-[140px] top-[-120px] left-[-120px]" />
        <div className="absolute w-[520px] h-[520px] bg-rose-300/20 blur-[140px] bottom-[-140px] right-[-140px]" />
        <div className="absolute w-[420px] h-[420px] bg-fuchsia-300/15 blur-[120px] top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-white/70 dark:bg-black/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <p className="text-pink-300 tracking-[0.3em] text-xs uppercase">
            ✦ ngobrol dikit
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-900 dark:text-white">
            You Can {' '}
            <span className="text-pink-400">Call Me🌸</span>
          </h2>

          <p className="text-pink-400/70 dark:text-pink-200/70 mt-4">
            nggak harus formal kok, santai aja. aku juga masih belajar banyak hal ✨
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="space-y-6">
            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="
                  flex items-center gap-5 p-6 rounded-3xl
                  bg-white/70 dark:bg-black/40
                  backdrop-blur-xl
                  border border-pink-200/50 dark:border-pink-400/20
                  hover:-translate-y-1 transition
                "
              >
                <div className="p-4 rounded-2xl bg-pink-200/40">
                  <item.icon className="text-pink-400" />
                </div>

                <div>
                  <p className="text-xs text-pink-300/70">{item.label}</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
              p-8 rounded-3xl
              bg-white/70 dark:bg-black/40
              backdrop-blur-2xl
              border border-pink-200/50 dark:border-pink-400/20
              space-y-5
            "
          >
            <Input
              placeholder="nama kamu"
              className="border-b border-pink-200 rounded-none bg-transparent focus:border-pink-400"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <Input
              placeholder="email kamu"
              className="border-b border-pink-200 rounded-none bg-transparent focus:border-pink-400"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <Input
              placeholder="mau bahas apa?"
              className="border-b border-pink-200 rounded-none bg-transparent focus:border-pink-400"
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />

            <Textarea
              placeholder="tulis pesan kamu di sini..."
              rows={6}
              className="border-b border-pink-200 rounded-none bg-transparent focus:border-pink-400"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <Button
              type="submit"
              disabled={loading}
              className="
                w-full rounded-full
                bg-pink-300 hover:bg-pink-400
                text-white
                shadow-[0_0_20px_rgba(244,114,182,0.25)]
              "
            >
              {loading ? (
                <Loader2 className="animate-spin mr-2" />
              ) : (
                <Send className="mr-2" />
              )}
              kirim pesan ✨
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}