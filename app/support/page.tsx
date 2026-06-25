import type { Metadata } from "next";
import Link from "next/link";
import { AppCard } from "@/components/support/AppCard";
import { apps, SUPPORT_EMAIL } from "@/lib/support-config";
import styles from "@/components/support/support.module.css";

export const metadata: Metadata = {
  title: "Support Center",
  description: "Get help, report issues, or find support information for HayAI Labs apps.",
};

export default function SupportPage() {
  return (
    <main className={styles.pageShell}>
      <nav className={styles.topNav} aria-label="Support navigation">
        <Link className={styles.brand} href="/support">
          HayAI Labs
        </Link>
      </nav>

      <header className={styles.hero}>
        <h1>Support Center</h1>
        <p>Get help, report issues, or find support information for our apps.</p>
      </header>

      <section aria-label="Available apps" className={styles.grid}>
        {apps.map((app) => (
          <AppCard app={app} key={app.slug} />
        ))}
      </section>

      <section className={styles.contactBox} aria-labelledby="general-contact">
        <h2 id="general-contact">Contact</h2>
        <p>
          Email us at{" "}
          <a className={styles.emailLink} href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>
    </main>
  );
}
