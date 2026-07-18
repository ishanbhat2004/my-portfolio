import { profile } from "../data/content";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

/**
 * Contact call-to-action + footer.
 */
export default function Footer() {
  const year = 2026;

  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="section text-center">
        <p className="section-eyebrow">Get in touch</p>
        <h2 className="section-title">Let&apos;s build something together</h2>
        <p className="mx-auto mt-4 max-w-xl text-subtle">
          I&apos;m always open to interesting problems, new teams, and good
          conversations. Reach out — I&apos;d love to connect.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-accent-soft"
        >
          <HiMail className="text-lg" />
          {profile.email}
        </a>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-subtle transition hover:text-accent"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-subtle transition hover:text-accent"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-subtle transition hover:text-accent"
          >
            <HiMail className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-100 py-6 text-center text-sm text-subtle">
        <p>
          Built with Next.js &amp; Tailwind ·{" "}
          <a
            href="https://github.com/ishanbhat2004/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent hover:underline"
          >
            Source
          </a>
        </p>
        <p className="mt-1">© {profile.name}, {year}</p>
      </div>
    </footer>
  );
}
