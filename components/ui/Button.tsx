import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-300 sm:px-6 sm:py-3";
  const styles =
    variant === "primary"
      ? "bg-[var(--foreground)] text-[var(--background)] hover:bg-white"
      : "border border-white/25 bg-white/5 text-[var(--foreground)] hover:border-white/45 hover:bg-white/10";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
