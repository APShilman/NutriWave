import Link from "next/link";
import { ARTICLES } from "./articles";
import { ArticleThumb } from "./ArticleHero";

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const related = ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-text-main mb-6 text-center">
        Читайте также
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {related.map((a) => (
          <Link
            key={a.slug}
            href={`/blog/${a.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(58,125,92,0.10)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <ArticleThumb variant={a.variant} />
            <div className="p-4">
              <span className="text-[11px] font-semibold text-primary bg-primary-light/30 px-2.5 py-0.5 rounded-full">
                {a.tags[0]}
              </span>
              <h3 className="text-sm font-bold text-text-main leading-snug mt-2 line-clamp-3 group-hover:text-primary transition-colors">
                {a.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
