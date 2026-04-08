import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Анна Шильман — клинический нутрициолог, натуропат | Онлайн-консультации",
  description:
    "Клинический и перинатальный нутрициолог. Индивидуальное сопровождение, детокс и кето программы, генетика питания. Научный подход к здоровью.",
  openGraph: {
    title: "Анна Шильман — клинический нутрициолог и натуропат",
    description:
      "Клинический и перинатальный нутрициолог. Индивидуальное сопровождение, детокс и кето программы, генетика питания.",
    url: "https://nutriwave.ru/",
    siteName: "NutriWave",
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "https://nutriwave.ru/",
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
