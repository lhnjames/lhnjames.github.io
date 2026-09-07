import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Hanning Lu · MLSys & Agents",
  description:
    "Hanning Lu studies ML systems and AI agents at the University of Leeds. Seeking direct-entry PhD opportunities for September 2027.",
  keywords: [
    "Hanning Lu",
    "陆涵宁",
    "AI systems",
    "compiler optimization",
    "efficient inference",
    "AI agents",
  ],
  openGraph: {
    title: "Hanning Lu · MLSys & Agents",
    description:
      "ML systems and AI agents: efficient inference, compiler optimization and reliable tool use.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1729,
        height: 910,
        alt: "Hanning Lu — MLSys and AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanning Lu · MLSys & Agents",
    description:
      "ML systems and AI agents: efficient inference, compiler optimization and reliable tool use.",
    images: ["/og.png"],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
