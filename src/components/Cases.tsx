"use client";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";
import { AvocadoHalfSVG, MintLeafSVG, OrganicBlob } from "./DecorativeElements";

const CASES = [
  {
    problem: "Хроническая усталость и проблемы с ЖКТ на протяжении 3 лет",
    approach: "Диагностика организма на биоанализаторе, анализ биохимии крови, коррекция питания, нутрицевтическая поддержка, отслеживание состояния через фитнес-браслет",
    result: "Восстановление энергии, нормализация пищеварения, снижение веса на 8 кг",
    duration: "4 месяца",
    initials: "М.К.",
    age: "34 года, женщина, г. Челябинск",
    color: "#3A7D5C",
    photo: "/images/cases/case-mk.webp",
    photoPosition: "center 30%",
  },
  {
    problem: "Проблемная кожа, нарушения цикла, гипотиреоз, вес не снижается",
    approach: "Диагностика на биоанализаторе, УЗИ ЖКТ и биохимия крови, генетический анализ, персональный план питания, подбор витаминов, онлайн-тренировки по пилатесу",
    result: "Нормализация гормонов, чистая кожа, регулярный цикл",
    duration: "6 месяцев",
    initials: "Е.В.",
    age: "28 лет, женщина, г. Челябинск",
    color: "#5A9E7C",
    photo: "/images/cases/case-ev.webp",
    photoPosition: "center 30%",
  },
  {
    problem: "Подготовка к беременности, ухудшение зрения, дефицит витаминов",
    approach: "Анкетирование, подбор профилактического чек-апа, перинатальный протокол питания, коррекция дефицитов, антиоксидантная поддержка, направление к необходимым врачам-специалистам",
    result: "Успешная лёгкая здоровая беременность, отличные показатели анализов",
    duration: "3 месяца подготовки",
    initials: "О.С.",
    age: "31 год, г. Екатеринбург",
    color: "#C9A96E",
    photo: "/images/cases/case-os.webp",
    photoPosition: "center 30%",
  },
  {
    problem: "Лишний вес, инсулинорезистентность, низкая энергия, алопеция",
    approach: "Анкетирование, УЗИ ЖКТ, кето-протокол питания, мониторинг анализов, физическая активность",
    result: "Минус 15 кг, нормализация сахара, прилив энергии",
    duration: "5 месяцев",
    initials: "И.Т.",
    age: "38 лет, мужчина, г. Челябинск",
    color: "#7AB59A",
    photo: "/images/cases/case-it.webp",
    photoPosition: "center 30%",
  },
];

function AnonymousAvatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center" style={{ backgroundColor: `${color}15` }}>
      <svg className="w-16 h-16 mb-3 opacity-20" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="28" r="14" fill={color} />
        <path d="M12 72c0-15.464 12.536-28 28-28s28 12.536 28 28" fill={color} />
      </svg>
      <span className="text-2xl font-[var(--font-heading)] font-semibold" style={{ color }}>
        {initials}
      </span>
      <span className="text-xs text-text-secondary mt-1">Анонимный отзыв</span>
    </div>
  );
}


export default function Cases() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="cases"
      className="relative py-16 md:py-32 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <span className="section-number">06</span>

      {/* Decorative elements */}
      <AvocadoHalfSVG className="deco w-[140px] bottom-24 left-8 rotate-[-10deg] text-[#66BB6A] opacity-[0.08]" />
      <MintLeafSVG className="deco w-[80px] top-20 right-20 rotate-[30deg] text-primary opacity-[0.10]" />
      <OrganicBlob className="deco w-[400px] h-[400px] top-[-10%] right-[-10%] text-[#E8F5E9] opacity-[0.06]" variant={3} />
      <div className="deco w-[300px] h-[300px] rounded-full bg-[#FFF8E1]/25 blur-[80px] bottom-[5%] left-[10%]" />

      <div ref={ref} className="animate-on-scroll max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-[var(--font-heading)] text-[clamp(32px,4vw,40px)] font-medium text-text-main">
            Результаты моих клиентов
          </h2>
          <p className="text-text-secondary mt-3 max-w-lg mx-auto">
            Реальные истории трансформации здоровья
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-8 stagger-children">
          {CASES.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl sm:rounded-[20px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(58,125,92,0.10)] hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Case number */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                <span className="font-[var(--font-heading)] text-sm sm:text-lg font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Visual area */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/7]">
                {"photo" in c && c.photo ? (
                  <Image
                    src={c.photo}
                    alt={`Кейс ${c.initials}: ${c.result}`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: c.photoPosition || "center" }}
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 100vw, 550px"
                  />
                ) : (
                  <AnonymousAvatar initials={c.initials} color={c.color} />
                )}
                {/* Age badge */}
                <div className="absolute bottom-1.5 left-1.5 sm:bottom-3 sm:left-3 px-2 py-0.5 sm:px-3 sm:py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold text-text-main shadow-sm">
                  <span className="sm:hidden">{c.initials}</span>
                  <span className="hidden sm:inline">{c.initials} &middot; {c.age}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6 space-y-2 sm:space-y-3">
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z"/>
                    </svg>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-secondary">Проблема</span>
                  </div>
                  <p className="text-xs sm:text-base text-text-main font-medium leading-snug">{c.problem}</p>
                </div>

                <div className="hidden sm:block">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h14.27"/>
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">Подход</span>
                  </div>
                  <p className="text-sm text-text-secondary">{c.approach}</p>
                </div>

                <div className="bg-accent-warm rounded-lg sm:rounded-xl p-2 sm:p-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary">Результат</span>
                  </div>
                  <p className="text-xs sm:text-base text-primary font-semibold leading-snug">{c.result}</p>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-text-secondary">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Срок: {c.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
