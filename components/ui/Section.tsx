import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  label?: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, label, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-4 py-[4.5rem] sm:px-6 sm:py-24 md:px-10 md:py-32">
      {label ? (
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--soft)] sm:mb-5 sm:text-xs sm:tracking-[0.24em]">
          {label}
        </p>
      ) : null}
      <h2 className="max-w-3xl text-[1.75rem] font-semibold leading-[1.12] tracking-tight sm:text-3xl md:text-5xl">{title}</h2>
      {intro ? (
        <p className="mt-5 max-w-3xl text-[15px] leading-7 text-zinc-300 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
          {intro}
        </p>
      ) : null}
      <div className="mt-10 sm:mt-12">{children}</div>
      <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent sm:inset-x-6 md:inset-x-10" />
    </section>
  );
}
