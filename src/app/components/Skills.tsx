import Image from "next/image";
import Section from "./Section";
import { skillGroups } from "../data/content";

/**
 * Skills organized into labeled groups (Languages, Web, Cloud, AI/ML) so the
 * breadth reads as intentional rather than a flat icon wall.
 */
export default function Skills() {
  return (
    <Section id="skills" eyebrow="What I work with" title="Skills & Tools">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className="card">
            <h3 className="mb-5 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-5">
              {group.skills.map((skill) => (
                <div
                  key={`${group.label}-${skill.name}`}
                  className="group flex w-16 flex-col items-center gap-2"
                  title={skill.name}
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="transition-transform duration-200 group-hover:scale-110"
                  />
                  <span className="text-center text-xs text-subtle">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
