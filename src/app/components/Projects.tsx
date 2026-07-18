import Section from "./Section";
import { projects } from "../data/content";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

/**
 * Responsive card grid of selected projects, driven by the content file.
 */
export default function Projects() {
  return (
    <Section id="projects" eyebrow="Things I've built" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const hasLink = project.href && project.href !== "#";
          return (
            <article key={project.title} className="card flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                {hasLink && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="shrink-0 text-subtle transition hover:text-accent"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                )}
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-subtle">
                {project.blurb}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              {hasLink && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition hover:gap-2"
                >
                  View project <HiArrowUpRight />
                </a>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
