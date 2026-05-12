"use client";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";
import { AppleSVG, SmallLeavesSVG, OrganicBlob } from "./DecorativeElements";

const SKILLS = [
  "Клинический и перинатальный нутрициолог",
  "Натуропат, консультант по генетике",
  "Интегративное оздоровление",
  "Сотрудничество с врачами",
  "Индивидуальное сопровождение",
  "Научный подход + бережная работа",
];

type DiplomaItem = {
  src: string;
  alt: string;
};

const ALL_DIPLOMAS: DiplomaItem[] = [
  { src: "/images/diplomas/diploma-genetics-specialist.webp", alt: "Диплом — Специалист по интерпретации генетических тестов" },
  { src: "/images/diplomas/diploma-mygenetics.webp", alt: "Диплом MyGenetics" },
  { src: "/images/diplomas/cert-happy-mama.webp", alt: "Участие в проекте «Счастливая мама — Счастливая семья»" },
  { src: "/images/diplomas/cert-mama-to-mama.webp", alt: "Участие в проекте «От мамы к маме»" },
  { src: "/images/diplomas/diploma-professional-p1.webp", alt: "Диплом о профессиональной переподготовке (стр. 1)" },
  { src: "/images/diplomas/diploma-professional-p2.webp", alt: "Диплом о профессиональной переподготовке (стр. 2)" },
  { src: "/images/diplomas/cert-qualification-p1.webp", alt: "Свидетельство о повышении квалификации" },
];

export default function About() {
  const ref = useScrollAnimation<HTMLDivElement>();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i - 1 + ALL_DIPLOMAS.length) % ALL_DIPLOMAS.length : null));
  }, []);
  const next = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i + 1) % ALL_DIPLOMAS.length : null));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [activeIndex, close, prev, next]);

  const current = activeIndex !== null ? ALL_DIPLOMAS[activeIndex] : null;

  return (
    <section
      id="about"
      className="relative py-16 md:py-32 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <span className="section-number">02</span>

      {/* Decorative elements */}
      <AppleSVG className="deco w-[120px] top-16 right-16 rotate-[15deg] text-[#66BB6A] opacity-[0.10]" />
      <SmallLeavesSVG className="deco w-[100px] bottom-20 left-8 rotate-[-30deg] text-primary opacity-[0.12]" />
      <OrganicBlob className="deco w-[350px] h-[350px] top-[-10%] left-[-8%] text-[#C8E6C9] opacity-[0.08]" variant={3} />
      <div className="deco w-[300px] h-[300px] rounded-full bg-[#FFF8E1]/30 blur-[80px] bottom-[10%] right-[-5%]" />

      <div ref={ref} className="animate-on-scroll max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-[var(--font-heading)] text-[clamp(32px,4vw,40px)] font-medium text-text-main">
            Обо мне
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center overflow-hidden">
          {/* Photo */}
          <div className="relative min-w-0">
            <div className="w-full max-w-[280px] sm:max-w-[400px] mx-auto aspect-[3/4] rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(58,125,92,0.1)]">
              <Image
                src="/images/photos/anna-about.webp"
                alt="Нутрициолог Анна Шильман — о себе и своём подходе к здоровому питанию"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
            {/* Telegram badge */}
            <a
              href="https://t.me/NutriWav"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-4 right-4 lg:right-0 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] px-5 py-3 flex items-center gap-3 hover:shadow-[0_8px_32px_rgba(58,125,92,0.12)] transition-shadow group"
            >
              <div className="w-10 h-10 bg-[#229ED9]/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#229ED9]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-text-main">NutriWave</div>
                <div className="text-xs text-text-secondary group-hover:text-primary transition-colors">
                  Мотивационный канал &rarr;
                </div>
              </div>
            </a>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6 min-w-0">
            <p className="text-lg text-text-main leading-relaxed">
              Здравствуйте! Я Анна Шильман — клинический и перинатальный нутрициолог,
              натуропат, консультант по генетике. Мой подход — это доказательная
              превентивная медицина и бережный индивидуальный подход к каждому клиенту.
            </p>
            <p className="text-text-secondary">
              Более 5 лет я помогаю людям восстанавливать здоровье через правильное питание,
              нутрицевтическую поддержку и работу с генетическими особенностями.
              Работаю в тесном сотрудничестве с врачами, обеспечивая комплексный
              интегративный подход к оздоровлению.
            </p>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent-warm text-primary text-sm font-semibold rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Diplomas gallery */}
            <div className="mt-4">
              <h3 className="text-sm font-bold text-text-main mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"/>
                </svg>
                Дипломы, сертификаты и благодарности
              </h3>

              <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory scrollbar-thin">
                {ALL_DIPLOMAS.map((d, i) => (
                  <button
                    key={d.src}
                    onClick={() => setActiveIndex(i)}
                    className="group/thumb shrink-0 w-[120px] sm:w-[140px] aspect-[3/4] rounded-xl overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(58,125,92,0.15)] transition-all hover:scale-[1.04] cursor-zoom-in relative snap-start"
                  >
                    <Image
                      src={d.src}
                      alt={d.alt}
                      fill
                      className="object-cover object-top"
                      sizes="140px"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover/thumb:bg-primary/10 transition-colors flex items-center justify-center">
                      <svg className="w-6 h-6 text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal / Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]" />

          {/* Modal container */}
          <div
            className="relative z-10 flex flex-col items-center w-[95vw] max-w-[800px] max-h-[92vh] animate-[modalIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="w-full flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"/>
                  </svg>
                </div>
                <p className="text-white/90 text-sm font-medium truncate">{current.alt}</p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                <span className="text-white/60 text-xs font-semibold tabular-nums">
                  {activeIndex! + 1} / {ALL_DIPLOMAS.length}
                </span>

                {/* Close button */}
                <button
                  onClick={close}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-500/80 flex items-center justify-center transition-colors"
                  title="Закрыть (Esc)"
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content area — all images */}
            <div className="relative w-full bg-white rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4)] flex items-center justify-center">
              <div className="relative w-full aspect-[3/4] max-h-[75vh]">
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-contain bg-white"
                  sizes="800px"
                  priority
                />
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-primary backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 group/arrow"
                title="Назад"
              >
                <svg className="w-5 h-5 text-white transition-transform group-hover/arrow:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-primary backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 group/arrow"
                title="Вперёд"
              >
                <svg className="w-5 h-5 text-white transition-transform group-hover/arrow:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="flex items-center gap-2 mt-4 px-1">
              {ALL_DIPLOMAS.map((d, i) => (
                <button
                  key={d.src}
                  onClick={() => setActiveIndex(i)}
                  className={`relative w-12 h-16 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                    i === activeIndex
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-black/80 scale-110"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={d.src} alt={d.alt} fill className="object-cover" sizes="48px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
