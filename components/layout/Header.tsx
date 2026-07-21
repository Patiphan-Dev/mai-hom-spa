"use client";

import Link from "next/link";
import { useState } from "react";
import { business } from "@/lib/business";
import { mainNav } from "@/lib/nav";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-charcoal/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-heading text-2xl font-semibold text-charcoal">
          {business.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-terracotta"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/member"
            className="text-sm font-medium text-charcoal/80 hover:text-terracotta"
          >
            เข้าสู่ระบบ
          </Link>
          <Button href="/booking" className="!px-5 !py-2.5">
            จองเลย
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 lg:hidden"
          aria-label="เปิดเมนู"
          aria-expanded={menuOpen}
        >
          <span className="font-heading text-lg">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen ? (
        <nav className="flex flex-col gap-1 border-t border-charcoal/10 bg-cream px-5 pb-5 lg:hidden">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-3 text-sm font-medium text-charcoal/80 hover:bg-cream-deep"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/member"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-2 py-3 text-sm font-medium text-charcoal/80 hover:bg-cream-deep"
          >
            เข้าสู่ระบบ
          </Link>
          <Button href="/booking" className="mt-2 justify-center">
            จองเลย
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
