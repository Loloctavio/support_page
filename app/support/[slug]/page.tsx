import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SupportSection } from "@/components/support/SupportSection";
import { apps, getAppBySlug } from "@/lib/support-config";
import styles from "@/components/support/support.module.css";

type AppSupportPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return apps.map((app) => ({
    slug: app.slug,
  }));
}

export async function generateMetadata({
  params,
}: AppSupportPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return {
      title: "Support",
    };
  }

  return {
    title: `${app.name} Support`,
    description: app.longDescription,
  };
}

export default async function AppSupportPage({ params }: AppSupportPageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <main className={styles.narrowPageShell}>
      <nav className={styles.topNav} aria-label="Support navigation">
        <Link className={styles.brand} href="/support">
          HayAI Labs
        </Link>
        <div className={styles.navLinks}>
          <Link href="/support">Support Center</Link>
          <Link href={`/support/${app.slug}/privacy`}>Privacy</Link>
          <Link href={`/support/${app.slug}/terms`}>Terms</Link>
        </div>
      </nav>

      <header className={styles.hero}>
        <h1>{app.name} Support</h1>
        <p>{app.longDescription}</p>
      </header>

      <div className={styles.sectionStack}>
        <SupportSection title="Contact Support">
          <p>
            For help, bug reports, account questions, or feedback, please contact
            us at:
          </p>
          <p>
            <a className={styles.emailLink} href={`mailto:${app.supportEmail}`}>
              {app.supportEmail}
            </a>
          </p>
        </SupportSection>

        <SupportSection title="What to include when reporting an issue">
          <ul className={styles.issueList}>
            <li>App name: {app.name}</li>
            <li>App version, if available</li>
            <li>Device model</li>
            <li>iOS version</li>
            <li>Description of the issue</li>
            <li>Steps to reproduce the issue</li>
            <li>Screenshot or screen recording, if available</li>
          </ul>
        </SupportSection>

        <SupportSection title="Account Deletion">
          <p>You can delete your account directly inside the app:</p>
          <p>
            <span className={styles.path}>{app.accountDeletionPath}</span>
          </p>
          <ul className={styles.issueList}>
            {app.accountDeletionDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </SupportSection>

        <SupportSection title="Frequently Asked Questions">
          {app.faqs.map((item) => (
            <article className={styles.faqItem} key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </SupportSection>

        <SupportSection title="Privacy and Terms">
          <div className={styles.linkList}>
            <Link className={styles.textLink} href={`/support/${app.slug}/privacy`}>
              Privacy Policy
            </Link>
            <Link className={styles.textLink} href={`/support/${app.slug}/terms`}>
              Terms of Service
            </Link>
          </div>
        </SupportSection>

        <SupportSection title="Developer Information">
          <dl className={styles.definitionList}>
            <div>
              <dt>Developer</dt>
              <dd>HayAI Labs</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Mexico</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>{app.platform}</dd>
            </div>
            <div>
              <dt>Current app version</dt>
              <dd>{app.appVersion}</dd>
            </div>
            <div>
              <dt>Bundle identifier</dt>
              <dd>{app.bundleIdentifier}</dd>
            </div>
          </dl>
        </SupportSection>
      </div>
    </main>
  );
}
