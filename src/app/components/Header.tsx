"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import Stars from "../helpers/Stars";
import { profile } from "../data/content";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown, HiDownload } from "react-icons/hi";

/**
 * Retro starfield hero — the signature identity of the site. Everything below
 * the fold switches to the modern light theme.
 */
export default function Header() {
  return (
    <div
      id="top"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-slate-950"
    >
      <Stars />

      {/* Soft indigo glow behind the content. */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <Image
          src="/portfolio-image.jpg"
          alt={profile.name}
          width={144}
          height={144}
          priority
          className="mb-8 h-32 w-32 rounded-full border-2 border-white/20 object-cover shadow-2xl md:h-36 md:w-36"
        />

        <p className="mb-3 font-silkscreen text-xs tracking-widest text-accent-soft md:text-sm">
          {profile.location} · {profile.role}
        </p>

        <h1 className="font-silkscreen text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
          {profile.name}
        </h1>

        <div className="mt-6 h-12 max-w-2xl font-mono text-base text-slate-300 md:text-lg">
          <Typewriter
            options={{
              strings: [...profile.heroStrings],
              autoStart: true,
              loop: true,
              delay: 45,
            }}
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-soft"
          >
            <HiDownload className="text-lg" />
            Download Résumé
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to content"
        className="relative z-10 mb-10 flex justify-center text-white/60 transition hover:text-white"
      >
        <HiArrowDown className="animate-bounce text-2xl" />
      </a>
    </div>
  );
}
