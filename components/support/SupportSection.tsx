import type { ReactNode } from "react";
import styles from "./support.module.css";

type SupportSectionProps = {
  title: string;
  children: ReactNode;
};

export function SupportSection({ title, children }: SupportSectionProps) {
  return (
    <section className={styles.section} aria-labelledby={titleToId(title)}>
      <h2 id={titleToId(title)}>{title}</h2>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
}

function titleToId(title: string) {
  return title.toLowerCase().replaceAll(" ", "-");
}
