"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/site-content";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-white/10 bg-black/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 md:px-10 md:py-4">
        <a href="#" className="text-[15px] font-semibold tracking-[0.02em] text-[var(--foreground)] sm:text-base md:text-lg">
          TAG Repair Center
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-zinc-200 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#contact" className="px-5 py-2.5 text-xs md:text-sm">
            Book Service
          </Button>
        </div>

        <button
          className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-black/95 px-4 py-5 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-zinc-100 transition hover:bg-white/[0.08]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" className="mt-3 w-full" variant="secondary">
              Book Service
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
