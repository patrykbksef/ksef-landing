"use client";

import { useState } from "react";
import Link from "next/link";
import { APP_PDF_URL } from "../constants/common";

const NAV_LINKS = [
  { href: "/#jak-zaczac", label: "Jak zacząć?" },
  { href: "/#dla-kogo", label: "Dla kogo?" },
  { href: "/#cennik", label: "Cennik" },
  { href: "/#artykuly", label: "Artykuły" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div className="flex items-center justify-between rounded-2xl border border-border bg-white/80 px-6 py-3 shadow-sm backdrop-blur-md">
          <Link href="/" className="flex items-center gap-1.5 text-lg font-medium text-text-primary no-underline">
            Faktura do <span className="font-bold text-primary">KSeF</span>
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-4 font-medium text-text-secondary">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="h-4 w-px bg-border" />

            <Link
              href={APP_PDF_URL}
              className="rounded-lg border border-border px-4 py-2 text font-medium text-text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              Zaloguj się
            </Link>
            <a
              href="/#kontakt"
              className="rounded-lg bg-primary px-4 py-2 text font-medium text-text-on-primary transition-colors hover:bg-primary-hover"
            >
              Zadzwoń do nas
            </a>
          </div>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-5 rounded bg-text-primary transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-text-primary transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-text-primary transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`mt-2 overflow-hidden rounded-2xl border border-border bg-white/95 shadow-lg backdrop-blur-md transition-all duration-300 md:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 p-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-primary-light hover:text-primary"
              >
                {link.label}
              </a>
            ))}

            <div className="my-2 h-px bg-border" />

            <Link
              href={APP_PDF_URL}
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-border px-4 py-2.5 text-center text-sm font-medium text-text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              Zaloguj się
            </Link>
            <a
              href="/#kontakt"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-text-on-primary transition-colors hover:bg-primary-hover"
            >
              Zadzwoń do nas
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
