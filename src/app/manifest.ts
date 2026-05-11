import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NutriWave — Анна Шильман",
    short_name: "NutriWave",
    description:
      "Клинический и перинатальный нутрициолог. Онлайн-консультации, генетика питания, нутрицевтическая поддержка.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e8",
    theme_color: "#3A7D5C",
    lang: "ru",
    categories: ["health", "lifestyle", "medical"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
