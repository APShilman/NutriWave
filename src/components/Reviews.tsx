"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";
import { LeafSVG } from "./DecorativeElements";

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
    type: "screenshot",
    name: "Вероника",
    city: "Челябинск",
    images: ["/images/reviews/review-3.webp"],
  },
  {
    type: "text",
    name: "Елена",
    city: "Екатеринбург",
    time: "19:47",
    text: "Анна, добрый вечер! Получила повторные результаты анализов — Вы не представляете как я рада. Полгода назад гемоглобин же был 95, ферритин на дне, а сейчас норма. И я это чувствую! Благодарю Вас за ваш подход и терпение, когда я переспрашиваю )) Хочу сделать традицию раз в год проходить у Вас биоанализатор и сверяться с Вами о методах профилактики здоровья.",
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

/* ── Telegram icon ── */
function TgIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

/* ── Review header ── */
function ReviewHeader({ name, city }: { name: string; city: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-3">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center shrink-0">
        <span className="text-white font-bold text-xs">{name.charAt(0)}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-bold text-text-main">{name}</div>
        <div className="text-[11px] text-text-secondary">{city}</div>
      </div>
      <TgIcon className="w-4 h-4 text-[#229ED9] shrink-0" />
    </div>
  );
}

/* ── Text review modal ── */
function TextLightbox({
  review,
  onClose,
}: {
  review: TextReview;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-[440px] bg-white rounded-2xl p-5 sm:p-6 shadow-2xl animate-[modalIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ReviewHeader name={review.name} city={review.city} />
        <div className="relative bg-[#EFFFDE] rounded-2xl rounded-tl-sm px-4 py-3">
          <p className="text-[14px] text-text-main leading-[1.7]">{review.text}</p>
          <div className="flex items-center justify-end gap-1 mt-3">
            <span className="text-[11px] text-text-secondary/60">{review.time}</span>
            <svg className="w-4 h-3 text-[#4FC3F7]" viewBox="0 0 16 11" fill="none">
              <path d="M11.07 0.65L4.98 6.73L3.91 5.66L2.5 7.07L4.98 9.55L12.48 2.06L11.07 0.65Z" fill="currentColor" />
              <path d="M14.07 0.65L7.98 6.73L7.49 6.24L6.08 7.65L7.98 9.55L15.48 2.06L14.07 0.65Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Screenshot lightbox ── */
function ScreenshotLightbox({
  review,
  onClose,
}: {
  review: ScreenshotReview;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const multi = review.images.length > 1;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((prev) => (prev + 1) % review.images.length);
      if (e.key === "ArrowLeft") setIdx((prev) => (prev - 1 + review.images.length) % review.images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose, review.images.length]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
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
                {idx + 1} / {review.images.length}
              </span>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500/80 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full">
          <div className="max-h-[80vh] rounded-2xl overflow-y-auto overflow-x-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4)] bg-white">
            <Image
              key={review.images[idx]}
              src={review.images[idx]}
              alt={`Скриншот отзыва клиента ${review.name} из ${review.city} о консультации нутрициолога`}
              width={460}
              height={820}
              className="w-full h-auto"
              sizes="460px"
              priority
            />
          </div>

          {multi && (
            <>
              <button
                onClick={() => setIdx((idx - 1 + review.images.length) % review.images.length)}
                className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-primary backdrop-blur-sm flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={() => setIdx((idx + 1) % review.images.length)}
                className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-primary backdrop-blur-sm flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}
        </div>

        {multi && (
          <div className="flex items-center gap-2 mt-3">
            {review.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-primary" : "w-1.5 bg-white/40"}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Text review card ── */
function TextCard({ review, onOpen }: { review: TextReview; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="bg-white rounded-2xl p-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(58,125,92,0.10)] transition-all duration-300 flex flex-col w-[300px] sm:w-[360px] shrink-0 cursor-pointer text-left"
    >
      <ReviewHeader name={review.name} city={review.city} />
      <div className="relative bg-[#EFFFDE] rounded-2xl rounded-tl-sm px-4 py-3 flex-1 flex flex-col justify-between">
        <p className="text-[13px] text-text-main leading-[1.6] line-clamp-6">{review.text}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[11px] text-primary font-semibold">Читать полностью</span>
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-text-secondary/60">{review.time}</span>
            <svg className="w-4 h-3 text-[#4FC3F7]" viewBox="0 0 16 11" fill="none">
              <path d="M11.07 0.65L4.98 6.73L3.91 5.66L2.5 7.07L4.98 9.55L12.48 2.06L11.07 0.65Z" fill="currentColor" />
              <path d="M14.07 0.65L7.98 6.73L7.49 6.24L6.08 7.65L7.98 9.55L15.48 2.06L14.07 0.65Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}

/* ── Screenshot review card ── */
function ScreenshotCard({ review, onOpen }: { review: ScreenshotReview; onOpen: () => void }) {
  const multi = review.images.length > 1;

  return (
    <button
      onClick={onOpen}
      className="bg-white rounded-2xl p-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(58,125,92,0.10)] transition-all duration-300 flex flex-col w-[240px] sm:w-[280px] shrink-0 cursor-pointer text-left"
    >
      <ReviewHeader name={review.name} city={review.city} />

      <div className={`flex-1 min-h-0 relative rounded-xl overflow-hidden ${multi ? "flex gap-1.5" : ""}`}>
        {review.images.slice(0, multi ? 3 : 1).map((src) => (
          <div
            key={src}
            className={`relative bg-[#EFFFDE] h-full ${multi ? "flex-1" : "w-full"}`}
          >
            <Image
              src={src}
              alt={`Отзыв ${review.name} из ${review.city} о работе с нутрициологом Анной Шильман`}
              fill
              className="object-cover object-top"
              sizes={multi ? "100px" : "260px"}
            />
          </div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/90 to-transparent" />
        {/* Open hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-primary/5">
          <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2.5 shrink-0">
        <div className="flex items-center gap-1.5 text-[11px] text-text-secondary">
          <TgIcon className="w-3.5 h-3.5 text-[#229ED9]" />
          Telegram
        </div>
        <span className="text-[11px] font-semibold text-primary">
          Открыть &rarr;
        </span>
      </div>
    </button>
  );
}

/* ── Marquee ticker with drag/swipe ── */
function ReviewMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const speedPx = 0.02; // ~20px/s auto-scroll

  // Drag state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const dragDistance = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lightbox state
  const [openReview, setOpenReview] = useState<{ review: Review; index: number } | null>(null);

  const openLightbox = useCallback((review: Review, index: number) => {
    // Only open if not a drag gesture
    if (Math.abs(dragDistance.current) > 5) return;
    pausedRef.current = true;
    setOpenReview({ review, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setOpenReview(null);
    setTimeout(() => { pausedRef.current = false; }, 300);
  }, []);

  // Wrap offset to keep it within bounds
  const wrapOffset = useCallback(() => {
    if (!trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    if (halfWidth > 0) {
      while (offsetRef.current >= halfWidth) offsetRef.current -= halfWidth;
      while (offsetRef.current < 0) offsetRef.current += halfWidth;
    }
  }, []);

  const animate = useCallback(
    (time: number) => {
      if (!trackRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      if (lastTimeRef.current === 0) lastTimeRef.current = time;

      if (!pausedRef.current && !isDragging.current) {
        const dt = time - lastTimeRef.current;
        offsetRef.current += dt * speedPx;
        wrapOffset();
      }

      trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
      lastTimeRef.current = time;
      rafRef.current = requestAnimationFrame(animate);
    },
    [wrapOffset]
  );

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  // Schedule auto-resume after user interaction
  const scheduleResume = useCallback((delay = 3000) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      if (!openReview) pausedRef.current = false;
    }, delay);
  }, [openReview]);

  // ── Mouse drag ──
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    dragDistance.current = 0;
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartX.current;
    dragDistance.current = dx;
    offsetRef.current = dragStartOffset.current - dx;
    wrapOffset();
  }, [wrapOffset]);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    scheduleResume();
  }, [scheduleResume]);

  const onMouseLeave = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
    }
    scheduleResume(1500);
  }, [scheduleResume]);

  // ── Touch drag ──
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartOffset.current = offsetRef.current;
    dragDistance.current = 0;
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    dragDistance.current = dx;
    offsetRef.current = dragStartOffset.current - dx;
    wrapOffset();
  }, [wrapOffset]);

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
    scheduleResume(4000);
  }, [scheduleResume]);

  const allReviews = [...REVIEWS, ...REVIEWS];

  return (
    <>
      <div
        className="relative overflow-hidden select-none"
        style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #EEF0E6, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #ECF0E5, transparent)" }} />

        {/* Track */}
        <div ref={trackRef} className="flex gap-4 sm:gap-6 items-stretch will-change-transform py-4 px-2 pointer-events-auto">
          {allReviews.map((review, i) => (
            <div key={i} className="shrink-0 flex">
              {review.type === "text" ? (
                <TextCard review={review} onOpen={() => openLightbox(review, i)} />
              ) : (
                <ScreenshotCard review={review} onOpen={() => openLightbox(review, i)} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox portal */}
      {openReview && openReview.review.type === "text" && (
        <TextLightbox review={openReview.review} onClose={closeLightbox} />
      )}
      {openReview && openReview.review.type === "screenshot" && (
        <ScreenshotLightbox review={openReview.review} onClose={closeLightbox} />
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
      <LeafSVG className="deco w-[100px] bottom-20 right-10 text-primary opacity-[0.08]" />

      <div ref={ref} className="animate-on-scroll">
        <div className="text-center mb-10 md:mb-16 px-6">
          <h2 className="font-[var(--font-heading)] text-[clamp(32px,4vw,40px)] font-medium text-text-main">
            Отзывы клиентов
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        <ReviewMarquee />
      </div>
    </section>
  );
}
