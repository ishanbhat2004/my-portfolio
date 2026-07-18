import Section from "./Section";
import { experience } from "../data/content";

/**
 * Vertical timeline of roles. Pure Tailwind — no MUI dependency.
 */
export default function Experience() {
  return (
    <Section id="experience" eyebrow="Where I've worked" title="Experience">
      <ol className="relative border-l border-slate-200 pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.timeframe}`} className="mb-12 last:mb-0">
            {/* Timeline node */}
            <span
              className={`absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white ${
                job.current ? "bg-accent" : "bg-slate-300"
              }`}
            />

            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-xl font-semibold text-ink">{job.role}</h3>
              <span className="font-mono text-sm text-subtle">{job.timeframe}</span>
            </div>

            <p className="mt-1 font-medium text-accent">
              {job.company}
              {job.team ? ` · ${job.team}` : ""}
              <span className="ml-2 font-normal text-subtle">— {job.location}</span>
            </p>

            <ul className="mt-4 space-y-2">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-subtle">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
