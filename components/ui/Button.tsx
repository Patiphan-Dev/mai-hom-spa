import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-terracotta text-cream hover:bg-terracotta-dark",
  secondary: "bg-moss text-cream hover:bg-moss-dark",
  outline: "border-2 border-charcoal/20 text-charcoal hover:border-terracotta hover:text-terracotta",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
