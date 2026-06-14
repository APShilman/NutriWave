/* Inline, topic-aware nudge towards a genetic test.
   `lead` is a sentence tailored to each article's theme so the block
   feels native, not like an ad. Uses <div> (not <p>) so the article's
   prose styles don't override its typography. */
export function GeneticsCallout({ lead }: { lead: string }) {
  return (
    <div className="my-8 rounded-2xl border border-primary/15 bg-accent-warm/70 p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-[0_2px_10px_rgba(58,125,92,0.08)]">
          <svg
            className="w-6 h-6 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 3C9 7 15 7 15 12C15 17 9 17 9 21" />
            <path d="M15 3C15 7 9 7 9 12C9 17 15 17 15 21" />
            <path d="M9.5 5h5" />
            <path d="M8 12h8" />
            <path d="M9.5 19h5" />
          </svg>
        </div>
        <div className="min-w-0">
          <div className="font-bold text-text-main mb-1.5">
            Ваша генетика — ключ к по-настоящему индивидуальному решению
          </div>
          <div className="text-sm text-text-secondary leading-relaxed mb-4">
            {lead}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href="https://mygenetics.ru/quiz/?coupon=NutriWave"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              Подобрать тест по генетике
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
            <span className="text-xs text-text-secondary">
              Промокод{" "}
              <strong className="text-primary font-bold">NutriWave</strong> —
              скидка&nbsp;5%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
