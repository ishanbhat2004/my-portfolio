import Section from "./Section";
import { profile, skillSummary } from "../data/content";

/**
 * Intro / summary block. Sets the narrative before the detailed sections.
 */
export default function About() {
  return (
    <Section id="about" eyebrow="Get to know me" title="About">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-subtle">
            {profile.tagline}
          </p>
          <p className="mt-4 leading-relaxed text-subtle">
            I&apos;m a graduate CS student at Purdue researching agentic systems and
            LLM inference serving, currently interning on{" "}
            <span className="font-semibold text-ink">Amazon Prime Air</span>. I like
            working where systems, data, and AI meet — building the infrastructure that
            makes complex operations legible and fast.
          </p>
          <p className="mt-4 text-sm font-medium text-subtle">{profile.work_status}</p>
        </div>

        <aside className="card">
          <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
            Focus areas
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skillSummary.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
