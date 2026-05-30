import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/* ================= LOADING SCREEN ================= */
function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#0b0b0f] overflow-hidden">

      {/* glow background */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-pink-300/30 blur-[150px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-rose-300/20 blur-[150px] bottom-[-200px] right-[-200px]" />
      </div>

      {/* content */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="w-64 h-64">
          <DotLottieReact
            src="https://lottie.host/0bf44630-9eea-4812-9361-56f66c54c16f/pZPsMg23Z4.lottie"
            loop
            autoplay
          />
        </div>

        <p className="mt-3 text-sm tracking-[0.3em] uppercase text-pink-400 animate-pulse">
          loading
        </p>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          menyiapkan pengalaman kamu ✨
        </p>
      </div>
    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();

    const timer = setTimeout(() => {
      const elapsed = Date.now() - start;

      // minimal loading 1.5 detik biar pasti kelihatan
      const minTime = 2100;
      const remaining = Math.max(0, minTime - elapsed);

      setTimeout(() => {
        setLoading(false);
      }, remaining);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {loading ? (
          <LoadingScreen />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}

      </TooltipProvider>
    </QueryClientProvider>
  );
}