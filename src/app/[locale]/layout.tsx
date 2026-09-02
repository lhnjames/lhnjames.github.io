import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Inter, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Hanning Lu · AI Systems Researcher",
  description:
    "Hanning Lu is a Computer Science student and AI systems researcher working on efficient inference, compiler optimization and graph machine learning.",
  keywords: [
    "Hanning Lu",
    "陆涵宁",
    "AI systems",
    "compiler optimization",
    "efficient inference",
    "graph machine learning",
  ],
  openGraph: {
    title: "Hanning Lu · AI Systems Researcher",
    description:
      "Efficient inference, compiler optimization and graph machine learning.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1729,
        height: 910,
        alt: "Hanning Lu — AI Systems, Compiler Optimization, Graph ML",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanning Lu · AI Systems Researcher",
    description:
      "Efficient inference, compiler optimization and graph machine learning.",
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
      <body className={`${inter.variable} ${manrope.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
