import Link from "next/link";
import { SupportSection } from "@/components/support/SupportSection";
import type { LegalContent, SupportApp } from "@/lib/support-config";
import styles from "./support.module.css";

type LegalPageProps = {
  app: SupportApp;
  content: LegalContent;
  title: string;
};

export function LegalPage({ app, content, title }: LegalPageProps) {
  return (
    <main className={styles.narrowPageShell}>
      <nav className={styles.topNav} aria-label="Support navigation">
        <Link className={styles.brand} href="/support">
          HayAI Labs
        </Link>
        <div className={styles.navLinks}>
          <Link href="/support">Support Center</Link>
          <Link href={`/support/${app.slug}`}>{app.name}</Link>
          <Link href={`/support/${app.slug}/privacy`}>Privacy</Link>
          <Link href={`/support/${app.slug}/terms`}>Terms</Link>
        </div>
      </nav>

      <header className={styles.hero}>
        <h1>{title}</h1>
        <p>
          {content.intro} Last updated: {content.lastUpdated}.
        </p>
      </header>

      <div className={styles.sectionStack}>
        {content.sections.map((section) => (
          <SupportSection title={section.title} key={section.title}>
            <ul className={styles.issueList}>
              {section.body.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </SupportSection>
        ))}

        <SupportSection title="Contact">
          <p>
            For questions about this page, contact us at{" "}
            <a className={styles.emailLink} href={`mailto:${app.supportEmail}`}>
              {app.supportEmail}
            </a>
            .
          </p>
        </SupportSection>
      </div>
    </main>
  );
}
