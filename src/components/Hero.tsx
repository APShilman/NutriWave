"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden"
      style={{ background: "transparent" }}
    >

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
        {/* Text content */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-warm rounded-full w-fit">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary tracking-wide">
              Научный подход к здоровью
            </span>
          </div>

          <h1 className="font-[var(--font-heading)] text-[clamp(36px,5vw,56px)] leading-[1.1] font-medium text-text-main">
            Клинический нутрициолог{" "}
            <span className="text-primary">Анна&nbsp;Шильман</span>
            <span className="block text-[clamp(20px,2.5vw,28px)] mt-3 font-[var(--font-body)] font-normal text-text-secondary leading-relaxed">
              индивидуальный путь к здоровью
            </span>
          </h1>

          <p className="text-text-secondary text-lg max-w-lg">
            Научный подход к питанию, индивидуальный подход, генетика.
            Онлайн и офлайн консультации
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-2">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-white text-sm font-bold uppercase tracking-[0.05em] rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_4px_16px_rgba(58,125,92,0.25)] hover:scale-[1.03] group"
            >
              Записаться на консультацию
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border-[1.5px] border-primary text-primary text-sm font-bold uppercase tracking-[0.05em] rounded-full hover:bg-accent-warm transition-all duration-300"
            >
              Узнать больше
            </a>
          </div>

          <blockquote className="mt-4 pl-4 border-l-2 border-primary/30">
            <p className="text-text-secondary italic text-sm leading-relaxed">
              «Пища, которую Вы едите, может быть самой сильной формой лекарства или самой медленной формой яда»
            </p>
            <cite className="text-xs text-primary/70 not-italic mt-1 block">— Энн Вигмор</cite>
          </blockquote>

          {/* Trust badges */}
          <div className="flex gap-6 sm:gap-8 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-primary-light/30">
            <div className="text-center">
              <span className="font-[var(--font-heading)] text-3xl font-semibold text-primary">100+</span>
              <span className="block text-xs text-text-secondary mt-1 uppercase tracking-wider">клиентов</span>
            </div>
            <div className="text-center">
              <span className="font-[var(--font-heading)] text-3xl font-semibold text-primary">5+</span>
              <span className="block text-xs text-text-secondary mt-1 uppercase tracking-wider">лет опыта</span>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[420px] sm:w-[380px] sm:h-[500px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(58,125,92,0.15)]">
            <Image
              src="/images/photos/anna-hero.webp"
              alt="Анна Шильман — клинический нутрициолог"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 320px, 380px"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/10 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-5 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-warm rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-text-main">Сертифицировано</div>
              <div className="text-xs text-text-secondary">Клинический нутрициолог</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-text-secondary uppercase tracking-widest">Вниз</span>
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7"/>
        </svg>
      </div>
    </section>
  );
}
