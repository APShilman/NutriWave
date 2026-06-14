"use client";
import Link from "next/link";
import { useScrollAnimation } from "./useScrollAnimation";
import { ARTICLES } from "@/app/blog/_components/articles";
import { ArticleThumb } from "@/app/blog/_components/ArticleHero";

export default function BlogPreview() {
  const ref = useScrollAnimation<HTMLDivElement>();
  const latest = ARTICLES.slice(0, 3);

  return (
    <section
      id="articles"
      className="relative py-16 md:py-32 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <span className="section-number">09</span>

      <div ref={ref} className="animate-on-scroll max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-[var(--font-heading)] text-[clamp(32px,4vw,40px)] font-medium text-text-main">
            Статьи о здоровье
          </h2>
          <p className="text-text-secondary mt-3 max-w-lg mx-auto">
            Полезные материалы о питании и нутрициологии от Анны Шильман
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 stagger-children">
          {latest.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(58,125,92,0.10)] hover:-translate-y-1 transition-all duration-300"
            >
              <ArticleThumb variant={a.variant} />
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-primary bg-primary-light/30 px-2.5 py-0.5 rounded-full">
                    {a.tags[0]}
                  </span>
                  <span className="text-[11px] text-text-secondary ml-auto">
                    {a.readTime}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-text-main leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mt-2 line-clamp-2 hidden sm:block">
                  {a.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-primary text-primary text-sm font-bold uppercase tracking-[0.05em] rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            Все статьи
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
