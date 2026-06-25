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
      title: "Terms of Service",
    };
  }

  return {
    title: `${app.name} Terms of Service`,
    description: `Terms of Service for ${app.name} by HayAI Labs.`,
  };
}

export default async function AppTermsPage({ params }: AppLegalPageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <LegalPage
      app={app}
      content={app.terms}
      title={`${app.name} Terms of Service`}
    />
  );
}
