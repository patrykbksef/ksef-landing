import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { ConsentBootstrap } from "./components/ConsentBootstrap";
import "./globals.css";
import { APP_URL, GA_MEASUREMENT_ID } from "./constants/common";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "Automatyczne wysyłanie faktur PDF do KSeF | Faktura do KSeF",
    template: "%s | Faktura do KSeF",
  },
  description:
    "Automatyczne wysyłanie faktur PDF do KSeF bez ręcznego przepisywania. Bez AI, bez abonamentu, bez ryzyka. Dostosowujemy system do Twoich faktur.",
  keywords: [
    "KSeF",
    "wysyłanie faktur do KSeF",
    "faktura PDF do KSeF",
    "program do KSeF",
    "import faktur PDF",
    "integracja z KSeF",
    "KSeF dla pomocy drogowej",
    "automatyzacja faktur",
  ],
  openGraph: {
    type: "website",
    url: APP_URL,
    title: "Automatyczne wysyłanie faktur PDF do KSeF",
    description:
      "Koniec z ręcznym przepisywaniem. 100% poprawności, brak ukrytych kosztów. Wysyłaj faktury z ubezpieczalni i hurtowni jednym kliknięciem.",
    siteName: "Faktura do KSeF",
    locale: "pl_PL",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faktura do KSeF – automatyczne wysyłanie faktur PDF",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        <ConsentBootstrap />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
