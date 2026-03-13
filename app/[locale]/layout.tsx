import type { Metadata } from "next";
import { Geist, Inter, Cairo, Outfit } from "next/font/google";
import "../globals.css";
import { dir } from "i18next";
import { i18nConfig } from "@/i18nConfig";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Nader | Full-Stack Engineer Portfolio",
  description:
    "Crafting robust digital experiences with modern web technologies.",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale: string) => ({ locale }));
}

const i18nNamespaces = ["common"];

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <body
        className={`${geist.variable} ${inter.variable} ${cairo.variable} font-body antialiased min-h-screen bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{props.children}</main>
              <Footer />
            </div>
          </TranslationsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
