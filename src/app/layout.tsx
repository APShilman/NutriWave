import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://nutriwave.pro";
const TITLE =
  "Анна Шильман — клинический нутрициолог, натуропат | Онлайн-консультации";
const DESCRIPTION =
  "Клинический нутрициолог Анна Шильман — онлайн-консультации от 5 000 ₽. Детокс, кето, генетика питания, перинатальная нутрициология. Научный подход, индивидуальные программы. Запишитесь сейчас!";

export const viewport: Viewport = {
  themeColor: "#3A7D5C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | NutriWave",
  },
  description: DESCRIPTION,
  applicationName: "NutriWave",
  authors: [{ name: "Анна Шильман", url: SITE_URL }],
  creator: "Анна Шильман",
  publisher: "NutriWave",
  keywords: [
    "нутрициолог",
    "клинический нутрициолог",
    "перинатальный нутрициолог",
    "натуропат",
    "консультация нутрициолога",
    "онлайн нутрициолог",
    "генетика питания",
    "нутрицевтика",
    "детокс программа",
    "кето диета",
    "Анна Шильман",
    "NutriWave",
  ],
  category: "health",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: "NutriWave",
    url: "/",
    locale: "ru_RU",
    title: "Анна Шильман — клинический нутрициолог и натуропат",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Анна Шильман — клинический нутрициолог и натуропат",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${cormorant.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
