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
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
      {label ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--soft)]">{label}</p>
      ) : null}
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {intro ? <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg">{intro}</p> : null}
      <div className="mt-10">{children}</div>
    </section>
  );
}
