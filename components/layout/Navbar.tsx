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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/75 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="text-base font-semibold tracking-wide text-[var(--foreground)] md:text-lg">
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
          <Button href="#contact">Book Service</Button>
        </div>

        <button
          className="rounded-full border border-white/20 px-3 py-1.5 text-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-black/90 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-200 transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" className="mt-2 w-full" variant="secondary">
              Book Service
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
