"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { getDynamicWhatsAppUrl } from "@/lib/whatsapp";

/* ═══════════════════════════════════════════════════════════════
    ELEGANT PEARL CREAM PALETTE — GRUPO VALU (Crema Perlado & Oro)
   ═══════════════════════════════════════════════════════════════ */
const THEME = {
  // Pearl Cream gradients & surfaces
  bgPearlNormal:
    "linear-gradient(180deg, rgba(255, 253, 248, 0.95) 0%, rgba(247, 242, 232, 0.92) 100%)",
  bgPearlScrolled:
    "linear-gradient(180deg, rgba(255, 254, 250, 0.98) 0%, rgba(245, 240, 229, 0.96) 100%)",
  bgDrawer: "linear-gradient(180deg, #FDFCF9 0%, #F6F1E7 100%)",
  text: "#1E293B", // Deep slate for high contrast on pearl cream
  textMuted: "#64748B", // Slate-500
  textDark: "#0F172A", // Slate-900
  gold: "#B88220",
  goldLight: "#9A6700",
  goldDark: "#8B6508",
  goldGlow: "rgba(229, 169, 60, 0.35)",
  borderNormal: "rgba(212, 175, 55, 0.28)",
  borderScrolled: "rgba(212, 168, 67, 0.40)",
  shadowNormal:
    "0 4px 22px -2px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(184, 130, 32, 0.08)",
  shadowScrolled:
    "0 10px 32px -5px rgba(0, 0, 0, 0.22), 0 4px 14px rgba(184, 130, 32, 0.14)",
  whatsapp: "#25D366",
};

/* ═══════════════════════════════════════════════════════════════
    WhatsApp SVG Icon
   ═══════════════════════════════════════════════════════════════ */
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // ── Scroll detection ──────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ── Listener para apertura de drawer ────────────────────────
  useEffect(() => {
    const handleOpenDrawer = () => setIsOpen(true);
    if (typeof window !== "undefined") {
      window.addEventListener("valu:open-drawer", handleOpenDrawer);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("valu:open-drawer", handleOpenDrawer);
      }
    };
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const dynamicWhatsAppUrl = getDynamicWhatsAppUrl(pathname);
  const phoneHref = `tel:${SITE_CONFIG.phone}`;

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          HEADER — TRANSPARENTE EN INICIO ↔ CREMA PERLADO ELEGANTE AL BAJAR
         ═══════════════════════════════════════════════════════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center h-16 sm:h-[76px] transition-all duration-500 ease-in-out"
        style={
          isScrolled
            ? {
                background: THEME.bgPearlScrolled,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: `1px solid ${THEME.borderScrolled}`,
                boxShadow: THEME.shadowScrolled,
              }
            : {
                background: "transparent",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                borderBottom: "1px solid transparent",
                boxShadow: "none",
              }
        }
      >
        <nav
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Navegación principal"
        >
          {/* ── LOGO — GRUPO VALU ── */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="GRUPO VALU - Inicio"
          >
            <div className="relative h-11 w-11 sm:h-13 sm:w-13 shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm">
              <Image
                src="/grupovalu-sinfondo.png"
                alt="Logo GRUPO VALU"
                fill
                priority
                sizes="56px"
                className="object-contain select-none"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-wider leading-none flex items-center gap-1.5 transition-colors duration-500">
                <span
                  className="font-extrabold tracking-tight transition-colors duration-500"
                  style={{
                    color: isScrolled ? "#0F172A" : "#FFFFFF",
                  }}
                >
                  GRUPO
                </span>
                <span
                  className="font-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] transition-colors duration-500"
                  style={{
                    color: isScrolled ? "#B88220" : "#E5A93C",
                  }}
                >
                  VALU
                </span>
              </span>
              <span
                className="text-[9px] sm:text-[10px] tracking-widest font-bold mt-0.5 uppercase transition-colors duration-500"
                style={{
                  color: isScrolled ? "#64748B" : "#CBD5E1",
                }}
              >
                RUC: {SITE_CONFIG.ruc}
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const linkColor = isScrolled
                ? isActive
                  ? "#9A6700"
                  : "#1E293B"
                : isActive
                ? "#F3C658"
                : "rgba(255, 255, 255, 0.92)";

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-2 text-[13px] tracking-wide rounded-lg transition-all duration-300 group"
                >
                  <span
                    className="relative z-10 transition-colors duration-500"
                    style={{
                      color: linkColor,
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    {link.label}
                  </span>

                  {/* Active indicator — gold glow line */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0.5 left-3 right-3 h-[2.5px] rounded-full"
                      style={{
                        background: isScrolled
                          ? `linear-gradient(90deg, ${THEME.goldDark}, #F3C658, ${THEME.goldDark})`
                          : "linear-gradient(90deg, #B88220, #F3C658, #B88220)",
                        boxShadow: `0 0 10px ${THEME.goldGlow}`,
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover background */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: isScrolled
                        ? "rgba(184, 130, 32, 0.08)"
                        : "rgba(255, 255, 255, 0.08)",
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* ── DESKTOP BUTTONS ── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp Button */}
            <a
              href={dynamicWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-md overflow-hidden bg-[#25D366] text-white shadow-sm hover:bg-[#20bd5a]"
              aria-label="Contactar por WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>

            {/* Call Button — Gold metallic */}
            <a
              href={phoneHref}
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-bold tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-lg overflow-hidden bg-gold-metallic text-black shadow-sm"
              aria-label="Llamar por teléfono"
            >
              <Phone className="w-4 h-4 text-black" />
              <span>Llamar</span>
            </a>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden relative p-2.5 rounded-xl transition-all duration-300 active:scale-95 shadow-sm"
            style={{
              background: isScrolled
                ? "rgba(255, 255, 255, 0.85)"
                : "rgba(255, 255, 255, 0.10)",
              border: isScrolled
                ? "1px solid rgba(212, 175, 55, 0.35)"
                : "1px solid rgba(255, 255, 255, 0.20)",
              backdropFilter: isScrolled ? "none" : "blur(8px)",
            }}
            aria-label="Abrir menú"
          >
            <Menu
              className="w-6 h-6 transition-colors duration-300"
              style={{
                color: isScrolled ? "#9A6700" : "#E5A93C",
              }}
            />
          </button>
        </nav>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          MOBILE DRAWER — CREMA PERLADO ELEGANTE
         ═══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            className="fixed inset-0 z-50 lg:hidden flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-full max-w-[320px] sm:max-w-sm h-full flex flex-col z-10"
              style={{
                background: THEME.bgDrawer,
                borderLeft: "1px solid rgba(212, 175, 55, 0.35)",
                boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Panel Header — Logo + Close */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-amber-900/10 bg-white/40">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 drop-shadow-sm">
                    <Image
                      src="/grupovalu-sinfondo.png"
                      alt="GRUPO VALU"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-black tracking-wider leading-none">
                      <span className="text-slate-900">GRUPO </span>
                      <span className="text-[#B88220]">VALU</span>
                    </span>
                    <span className="text-[9px] tracking-widest text-slate-600 font-bold mt-0.5 uppercase">
                      RUC: {SITE_CONFIG.ruc}
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-xl transition-all duration-200 active:scale-90 bg-black/5 border border-slate-300/70 text-slate-700 hover:text-black hover:bg-black/10"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-4 py-5">
                <nav className="flex flex-col gap-1.5">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.08 + i * 0.05,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="relative flex items-center px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-300 active:scale-[0.98] overflow-hidden"
                          style={
                            isActive
                              ? {
                                  background: "rgba(229, 169, 60, 0.16)",
                                  borderLeft: "4px solid #B88220",
                                  color: "#9A6700",
                                  fontWeight: 700,
                                }
                              : {
                                  color: "#1E293B",
                                  borderLeft: "4px solid transparent",
                                }
                          }
                        >
                          <span className="ml-1.5">{link.label}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* ── DUAL CONTACT BUTTONS ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="px-4 pb-6 pt-4 border-t border-amber-900/10 bg-white/40"
              >
                <a
                  href={dynamicWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-3 w-full min-h-[50px] rounded-xl text-[14px] font-bold transition-all duration-300 active:scale-[0.98] bg-[#25D366] text-white shadow-md hover:bg-[#20ba59]"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  Asesoría por WhatsApp
                </a>

                <a
                  href={phoneHref}
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-3 w-full min-h-[50px] rounded-xl text-[14px] font-bold transition-all duration-300 active:scale-[0.98] mt-3 bg-gold-metallic text-black shadow-lg"
                >
                  <Phone className="w-5 h-5 text-black" />
                  Llamar Ahora
                </a>

                <p className="text-center text-[11px] mt-4 leading-relaxed text-slate-600 font-medium">
                  {SITE_CONFIG.businessName}
                  <br />
                  RUC: {SITE_CONFIG.ruc}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}