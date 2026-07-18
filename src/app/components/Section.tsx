import React from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Shared section wrapper: consistent spacing, an eyebrow label, and a title.
 * Every content section on the page composes this for a uniform rhythm.
 */
export default function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`section scroll-mt-24 ${className ?? ""}`}>
      <div className="mb-12">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {children}
    </section>
  );
}
