import Image from "next/image";
import Section from "./Section";
import { education } from "../data/content";

/**
 * Education cards (MS + BS), driven by the content file.
 */
export default function Education() {
  return (
    <Section id="education" eyebrow="Where I studied" title="Education">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu) => (
          <div key={`${edu.degree}-${edu.timeframe}`} className="card">
            <div className="flex items-center gap-4">
              <Image
                src="/purdue-logo.jpg"
                alt={`${edu.institution} logo`}
                width={56}
                height={56}
                className="h-14 w-14 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-ink">{edu.degree}</h3>
                <p className="text-sm text-subtle">{edu.institution}</p>
              </div>
            </div>

            <p className="mt-4 font-medium text-accent">{edu.detail}</p>
            <div className="mt-1 flex flex-wrap gap-x-4 font-mono text-sm text-subtle">
              <span>{edu.timeframe}</span>
              <span>GPA: {edu.gpa}</span>
            </div>

            <ul className="mt-4 space-y-2">
              {edu.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm text-subtle">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
