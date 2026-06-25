import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/support/LegalPage";
import { apps, getAppBySlug } from "@/lib/support-config";

type AppLegalPageProps = {
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
}: AppLegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return {
      title: "Privacy Policy",
    };
  }

  return {
    title: `${app.name} Privacy Policy`,
    description: `Privacy Policy for ${app.name} by HayAI Labs.`,
  };
}

export default async function AppPrivacyPage({ params }: AppLegalPageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <LegalPage
      app={app}
      content={app.privacy}
      title={`${app.name} Privacy Policy`}
    />
  );
}
