"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "../data/content";
import { HiDownload } from "react-icons/hi";

/**
 * Fixed, frosted navbar. Becomes opaque once the user scrolls past the hero.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className={`font-mono text-sm font-bold tracking-tight transition-colors ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          {profile.name.split(" ")[0].toLowerCase()}
          <span className="text-accent-soft">.dev</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-subtle" : "text-slate-200"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-soft"
        >
          <HiDownload className="text-base" />
          Resume
        </a>
      </nav>
    </header>
  );
}
