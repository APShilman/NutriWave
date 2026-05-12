import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Блог о нутрициологии — статьи от клинического нутрициолога",
  description:
    "Полезные статьи о питании, здоровье и нутрициологии от клинического нутрициолога Анны Шильман. Научный подход, практические советы.",
  alternates: { canonical: "/blog" },
};

const ARTICLES = [
  {
    slug: "nutritsiolog-vs-dietolog",
    title: "Нутрициолог и диетолог — в чём разница и к кому идти?",
    excerpt:
      "Разбираемся, чем отличается клинический нутрициолог от диетолога, какие задачи решает каждый специалист и когда к кому обращаться.",
    date: "2026-05-12",
    readTime: "7 мин",
    tags: ["Нутрициология", "Здоровье"],
  },
];

export default function BlogIndex() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="font-[var(--font-heading)] text-[clamp(32px,5vw,48px)] font-medium text-text-main">
          Блог о нутрициологии
        </h1>
        <p className="text-text-secondary mt-3 max-w-lg mx-auto">
          Полезные статьи от клинического нутрициолога Анны Шильман
        </p>
        <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
      </div>

      <div className="space-y-6">
        {ARTICLES.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block bg-white rounded-2xl p-6 sm:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(58,125,92,0.10)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-primary bg-primary-light/30 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
              <span className="text-xs text-text-secondary ml-auto">
                {article.readTime}
              </span>
            </div>
            <h2 className="font-[var(--font-heading)] text-xl sm:text-2xl font-semibold text-text-main mb-2 group-hover:text-primary transition-colors">
              {article.title}
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-2 mt-4 text-primary text-sm font-semibold">
              Читать статью
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
