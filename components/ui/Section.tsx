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
    <section id={id} className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
      {label ? (
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--soft)]">{label}</p>
      ) : null}
      <h2 className="max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">{title}</h2>
      {intro ? <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">{intro}</p> : null}
      <div className="mt-12">{children}</div>
      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent md:inset-x-10" />
    </section>
  );
}
