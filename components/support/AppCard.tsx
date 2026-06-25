import Link from "next/link";
import type { SupportApp } from "@/lib/support-config";
import styles from "./support.module.css";

type AppCardProps = {
  app: SupportApp;
};

export function AppCard({ app }: AppCardProps) {
  return (
    <article className={styles.card}>
      <div>
        <p className={styles.eyebrow}>{app.platform}</p>
        <h2>{app.name}</h2>
        <p>{app.description}</p>
      </div>
      <Link className={styles.buttonLink} href={`/support/${app.slug}`}>
        View Support
      </Link>
    </article>
  );
}
