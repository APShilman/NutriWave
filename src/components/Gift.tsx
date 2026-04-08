"use client";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";
import { BerrySVG, LemonSVG, OrganicBlob } from "./DecorativeElements";

const GUIDES = [
  {
    title: "Тарелка здорового питания",
    description:
      "Наглядное руководство по составлению сбалансированного рациона: пропорции белков, жиров, углеводов и клетчатки в каждом приёме пищи",
    cover: "/guides/guide-nutrition-plate-cover.webp",
    href: "/guides/guide-nutrition-plate.pdf",
    color: "#F0EAD5",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" />
      </svg>
    ),
  },
  {
    title: "Здоровый сон",
    description:
      "Научно обоснованные рекомендации по гигиене сна: режим, мелатонин, питание перед сном и создание идеальных условий для восстановления",
    cover: "/guides/guide-sleep-cover.webp",
    href: "/guides/guide-sleep.pdf",
    color: "#D5E0F0",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
  },
  {
    title: "Работа со стрессом",
    description:
      "Практические техники управления стрессом, дыхательные упражнения и стратегии восстановления нервной системы в повседневной жизни",
    cover: "/guides/guide-stress-cover.webp",
    href: "/guides/guide-stress.pdf",
    color: "#E8D5F5",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Всё про лимфу",
    description:
      "Как поддержать лимфатическую систему: самомассаж, питание, движение и простые привычки для снятия отёчности и укрепления иммунитета",
    cover: "/guides/guide-lymph-cover.webp",
    href: "/guides/guide-lymph.pdf",
    color: "#D5F0E8",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function Gift() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="gift"
      className="relative py-16 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #faf5ee 0%, #f0f7ed 30%, #e8f0e4 60%, #f5f7f0 100%)",
      }}
    >
      <span className="section-number">04</span>

      {/* Decorative elements */}
      <BerrySVG className="deco w-[90px] top-20 right-20 text-[#E91E63] opacity-[0.08]" />
      <LemonSVG className="deco w-[110px] bottom-16 left-12 rotate-[15deg] text-[#FDD835] opacity-[0.10]" />
      <OrganicBlob className="deco w-[350px] h-[350px] top-[-5%] left-[-5%] text-[#C8E6C9] opacity-[0.06]" variant={1} />
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/4 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-[#FFF8E1]/40 rounded-full blur-[60px]" />

      <div ref={ref} className="animate-on-scroll max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            Подарок для вас
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(32px,4vw,40px)] font-medium text-text-main">
            Бесплатные гайды по здоровью
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto leading-relaxed">
            Моя миссия — помогать вам заботиться о своём здоровье осознанно.
            Я подготовила для вас гайды с проверенными рекомендациями — внедрите эти знания
            в повседневную жизнь, и вы почувствуете, как улучшается самочувствие и прибавляется энергия.
            Скачивайте, пользуйтесь, делитесь с близкими!
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-5" />
        </div>

        {/* Guide cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {GUIDES.map((guide, i) => (
            <a
              key={i}
              href={guide.href}
              download
              className="group bg-white rounded-[20px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(58,125,92,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Cover image */}
              <div
                className="relative aspect-[3/4] overflow-hidden"
                style={{ backgroundColor: guide.color }}
              >
                <Image
                  src={guide.cover}
                  alt={guide.title}
                  fill
                  className="object-contain object-center p-2 group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                />
                {/* Download overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-primary" style={{ backgroundColor: guide.color }}>
                    {guide.icon}
                  </div>
                  <h3 className="text-sm font-bold text-text-main leading-tight">{guide.title}</h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed flex-1">{guide.description}</p>
                <div className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Скачать PDF
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
