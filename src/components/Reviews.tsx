"use client";
import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";
import { CitrusSliceSVG, LeafSVG, OrganicBlob } from "./DecorativeElements";

type TextReview = {
  type: "text";
  name: string;
  city: string;
  time: string;
  text: string;
};

type ScreenshotReview = {
  type: "screenshot";
  name: string;
  city: string;
  images: string[];
};

type Review = TextReview | ScreenshotReview;

const REVIEWS: Review[] = [
  {
    type: "text",
    name: "Мария",
    city: "Челябинск",
    time: "14:23",
    text: "Аня, привет! Хочу сказать огромное спасибо! Вижу результат по коже! Я прям другой человек) Энергия появилась, даже на тренировки хожу, пузо не вздувается по вечерам)) Питание придерживаюсь, чувствую себя с ним лучше. Витамины уже заканчиваются, напомни пожалуйста что на постоянной основе оставить? У меня уже двое желающих твой контакт спросили",
  },
  {
    type: "text",
    name: "Елена",
    city: "Екатеринбург",
    time: "19:47",
    text: "Анна, добрый вечер! Получила повторные результаты анализов — Вы не представляете как я рада. Полгода назад гемоглобин же был 95, ферритин на дне, а сейчас норма. И я это чувствую! Благодарю Вас за ваш подход и терпение, когда я переспрашиваю )) Хочу сделать традицию раз в год проходить у Вас биоанализатор и сверяться с Вами о методах профилактики здоровья. Рецепты которыми вы поделились — замечательные, многие блюда стали любимчиками в нашей семье. Анечка, здоровья Вам, сил и энергии делиться с людьми своими знаниями!",
  },
  {
    type: "screenshot",
    name: "Вероника",
    city: "Челябинск",
    images: ["/images/reviews/review-3.webp"],
  },
  {
    type: "screenshot",
    name: "Ирина",
    city: "Москва",
    images: [
      "/images/reviews/review-4a.webp",
      "/images/reviews/review-4b.webp",
      "/images/reviews/review-4c.webp",
    ],
  },
  {
    type: "screenshot",
    name: "Татьяна",
    city: "Челябинск",
    images: ["/images/reviews/review-5.webp"],
  },
];

/* ── Telegram icon (reused) ── */
function TgIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

/* ── Header shared by both card types ── */
function ReviewHeader({ name, city }: { name: string; city: string }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
      <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center shrink-0">
        <span className="text-white font-bold text-[10px] sm:text-sm">{name.charAt(0)}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs sm:text-sm font-bold text-text-main">{name}</div>
        <div className="text-[10px] sm:text-[11px] text-text-secondary">{city}</div>
      </div>
      <TgIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#229ED9] shrink-0" />
    </div>
  );
}

/* ── Text review card ── */
function TextCard({ review }: { review: TextReview }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-[20px] p-3 sm:p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(58,125,92,0.10)] transition-shadow duration-300 h-full flex flex-col">
      <ReviewHeader name={review.name} city={review.city} />
      <div className="relative bg-[#EFFFDE] rounded-xl sm:rounded-2xl rounded-tl-sm px-3 py-2 sm:px-4 sm:py-3 flex-1 flex flex-col justify-between min-h-[160px] sm:min-h-[220px]">
        <p className="text-xs sm:text-[13.5px] text-text-main leading-relaxed sm:leading-[1.65]">{review.text}</p>
        <div className="flex items-center justify-end gap-1 mt-2">
          <span className="text-[11px] text-text-secondary/60">{review.time}</span>
          <svg className="w-4 h-3 text-[#4FC3F7]" viewBox="0 0 16 11" fill="none">
            <path d="M11.07 0.65L4.98 6.73L3.91 5.66L2.5 7.07L4.98 9.55L12.48 2.06L11.07 0.65Z" fill="currentColor"/>
            <path d="M14.07 0.65L7.98 6.73L7.49 6.24L6.08 7.65L7.98 9.55L15.48 2.06L14.07 0.65Z" fill="currentColor"/>
          </svg>
        </div>
        {/* Telegram-style like reaction */}
        <div className="absolute -bottom-3 left-3 flex items-center gap-1 bg-primary/90 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
          <span>❤️</span>
        </div>
      </div>
    </div>
  );
}

/* ── Screenshot review card ── */
function ScreenshotCard({ review }: { review: ScreenshotReview }) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const multi = review.images.length > 1;

  return (
    <>
      <div className="bg-white rounded-xl sm:rounded-[20px] p-3 sm:p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(58,125,92,0.10)] transition-shadow duration-300 flex flex-col h-[320px] sm:h-[420px]">
        <ReviewHeader name={review.name} city={review.city} />

        {/* Images area — fixed height for uniform cards */}
        <div className={`flex-1 min-h-0 ${multi ? "flex gap-1.5" : ""}`}>
          {review.images.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightboxIdx(i)}
              className={`group/img relative rounded-xl overflow-hidden bg-[#EFFFDE] cursor-zoom-in h-full ${
                multi ? "flex-1" : "w-full"
              }`}
            >
              <Image
                src={src}
                alt={`Отзыв ${review.name}`}
                fill
                className="object-cover object-top group-hover/img:scale-[1.03] transition-transform duration-300"
                sizes={multi ? "130px" : "360px"}
              />
              {/* Fade at bottom to indicate scrollability */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/80 to-transparent" />
              {/* Zoom hint */}
              <div className="absolute inset-0 flex items-center justify-center bg-primary/0 group-hover/img:bg-primary/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity shadow-lg">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-2 sm:mt-3 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-text-secondary">
            <TgIcon className="w-3.5 h-3.5 text-[#229ED9]" />
            Скриншот из Telegram
          </div>
          <button
            onClick={() => setLightboxIdx(0)}
            className="text-[10px] sm:text-[11px] font-semibold text-primary hover:underline"
          >
            Читать &rarr;
          </button>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={() => setLightboxIdx(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]" />

          <div
            className="relative z-10 flex flex-col items-center w-[95vw] max-w-[460px] animate-[modalIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="w-full flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xs">{review.name.charAt(0)}</span>
                </div>
                <span className="text-white/90 text-sm font-medium">{review.name}, {review.city}</span>
              </div>
              <div className="flex items-center gap-2">
                {multi && (
                  <span className="text-white/50 text-xs font-semibold tabular-nums">
                    {lightboxIdx + 1} / {review.images.length}
                  </span>
                )}
                <button
                  onClick={() => setLightboxIdx(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500/80 flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image — scrollable, full content visible */}
            <div className="relative w-full">
              <div className="max-h-[80vh] rounded-2xl overflow-y-auto overflow-x-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4)] bg-white">
                <Image
                  key={review.images[lightboxIdx]}
                  src={review.images[lightboxIdx]}
                  alt={`Отзыв ${review.name}`}
                  width={460}
                  height={820}
                  className="w-full h-auto"
                  sizes="460px"
                  priority
                />
              </div>

              {/* Nav arrows for multi — outside scroll container */}
              {multi && (
                <>
                  <button
                    onClick={() => setLightboxIdx((lightboxIdx - 1 + review.images.length) % review.images.length)}
                    className="absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-primary backdrop-blur-sm flex items-center justify-center transition-all"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setLightboxIdx((lightboxIdx + 1) % review.images.length)}
                    className="absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-primary backdrop-blur-sm flex items-center justify-center transition-all"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Dots for multi */}
            {multi && (
              <div className="flex items-center gap-2 mt-3">
                {review.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === lightboxIdx ? "w-6 bg-primary" : "w-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

/* ── Main component ── */
export default function Reviews() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="reviews"
      className="relative py-16 md:py-32 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <span className="section-number">07</span>

      {/* Decorative elements */}
      <CitrusSliceSVG className="deco w-[120px] top-16 left-12 rotate-[-20deg] text-[#AED581] opacity-[0.12]" />
      <LeafSVG className="deco w-[100px] bottom-20 right-10 text-primary opacity-[0.10]" />
      <OrganicBlob className="deco w-[350px] h-[350px] bottom-[-8%] left-[-8%] text-[#E8F5E9] opacity-[0.06]" variant={1} />
      <div className="deco w-[250px] h-[250px] rounded-full bg-[#FFF8E1]/25 blur-[80px] top-[10%] right-[5%]" />

      <div ref={ref} className="animate-on-scroll max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-[var(--font-heading)] text-[clamp(32px,4vw,40px)] font-medium text-text-main">
            Отзывы клиентов
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        {/* Row 1: two text reviews — equal height */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-6 mb-3 sm:mb-6 stagger-children auto-rows-fr">
          {REVIEWS.filter((r): r is TextReview => r.type === "text").map((r, i) => (
            <TextCard key={i} review={r} />
          ))}
        </div>

        {/* Row 2: three screenshot reviews — uniform height */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 stagger-children">
          {REVIEWS.filter((r): r is ScreenshotReview => r.type === "screenshot").map((r, i) => (
            <ScreenshotCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
