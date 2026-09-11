import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

import { routing } from "@/i18n/routing";

const siteUrl = "https://lhnjames.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hanning Lu",
  description:
    "Hanning Lu (陆涵宁) is a Computer Science undergraduate and researcher at the University of Leeds working on ML systems, efficient inference, compiler optimization and AI agents.",
  authors: [{ name: "Hanning Lu", url: siteUrl }],
  creator: "Hanning Lu",
  publisher: "Hanning Lu",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "Hanning Lu",
    "陆涵宁",
    "Hanning Lu University of Leeds",
    "Hanning Lu computer science",
    "Hanning Lu researcher",
    "lhnjames",
    "machine learning systems",
    "AI systems",
    "compiler optimization",
    "efficient inference",
    "AI agents",
  ],
  openGraph: {
    title: "Hanning Lu",
    url: siteUrl,
    siteName: "Hanning Lu",
    description:
      "ML systems and AI agents: efficient inference, compiler optimization and reliable tool use.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1729,
        height: 910,
        alt: "Hanning Lu personal academic website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanning Lu",
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
  const clientMessages = { blog: messages.blog };

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider locale={locale} messages={clientMessages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
