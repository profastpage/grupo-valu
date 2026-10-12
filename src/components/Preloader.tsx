"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export default function Preloader() {
  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Logo with gold pulse */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 animate-pulse">
          <Image
            src="/grupovalu-sinfondo.png"
            alt="GRUPO VALU"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Brand text */}
        <div className="flex flex-col items-center">
          <span className="text-xl font-black text-white tracking-wider">
            <span className="text-slate-100">GRUPO </span>
            <span className="text-[#E5A93C]">VALU</span>
          </span>
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate-400 mt-0.5">
            RUC: {SITE_CONFIG.ruc}
          </span>
        </div>

        {/* Elegant Gold Spinner */}
        <div className="relative w-7 h-7 mt-1">
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#E5A93C] animate-spin" />
        </div>
      </div>
    </motion.div>
  );
}
