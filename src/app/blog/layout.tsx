import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen nutri-pattern">
      {/* Blog header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50">
        <div className="max-w-[800px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <span className="text-sm font-semibold">NutriWave</span>
          </Link>
          <Link
            href="/blog"
            className="font-[var(--font-heading)] text-lg font-semibold text-text-main"
          >
            Блог
          </Link>
          <Link
            href="/#contacts"
            className="text-sm font-semibold text-white bg-primary px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
          >
            Записаться
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[800px] mx-auto px-6 py-10 md:py-16">
        {children}
      </main>

      {/* Blog footer */}
      <footer className="bg-white/60 border-t border-primary/10 py-8">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} NutriWave — Анна Шильман,
            клинический нутрициолог
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <Link
              href="/"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Главная
            </Link>
            <Link
              href="/blog"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Все статьи
            </Link>
            <Link
              href="/#contacts"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Контакты
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
