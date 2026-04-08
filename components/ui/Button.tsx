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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300";
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
