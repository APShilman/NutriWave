"use client";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";
import { LemonSVG, MintLeafSVG, OrganicBlob } from "./DecorativeElements";

const SERVICES: {
  photo: string;
  photoAlt: string;
  photoPosition: string;
  title: string;
  format: string;
  description: string;
  audience: string;
  price?: string;
  cta: string;
  href: string;
  buttons?: { label: string; href: string }[];
}[] = [
  {
    photo: "/images/services/consultation.webp",
    photoAlt: "Индивидуальная консультация нутрициолога",
    photoPosition: "center 25%",
    title: "Индивидуальная консультация",
    format: "Онлайн (Zoom / Telegram) и офлайн",
    description:
      "Анализ анкеты здоровья, разбор анализов (при наличии), рекомендации по плановым чек ап и образу жизни, индивидуальный план питания, нутрицевтическая поддержка, вопрос-ответ, PDF-памятка.",
    audience: "Хроническая усталость, проблемы ЖКТ, гормональные нарушения, проблемы с весом тела, подготовка к беременности и послеродовое восстановление, менопауза, улучшение качества жизни",
    price: "5 000 ₽",
    cta: "Записаться на консультацию",
    href: "#contacts",
  },
  {
    photo: "/images/services/restart.webp",
    photoAlt: "Комьюнити Рестарт — бесплатная группа",
    photoPosition: "center 20%",
    title: "Бесплатное комьюнити",
    format: "Бесплатная группа в Telegram / VK",
    description:
      "Знания о питании, готовые рецепты, меню, тренировки и забота о ментальном здоровье — всё в одном месте.",
    audience: "Для всех, кто хочет начать путь к здоровому образу жизни",
    cta: "",
    href: "",
    buttons: [
      { label: "Рестарт в ТГ", href: "https://t.me/+K7-oqzeipscwNjIy" },
      { label: "NutriWave ВК", href: "https://vk.ru/club236057383" },
    ],
  },
];

export default function Services() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="services"
      className="relative py-16 md:py-32 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <span className="section-number">03</span>

      {/* Decorative elements */}
      <LemonSVG className="deco w-[130px] top-16 left-8 rotate-[-12deg] text-[#8BC34A] opacity-[0.12]" />
      <MintLeafSVG className="deco w-[90px] bottom-20 right-12 rotate-[20deg] text-primary opacity-[0.10]" />
      <OrganicBlob className="deco w-[400px] h-[400px] top-[-10%] right-[-8%] text-primary-light opacity-[0.06]" variant={2} />
      <div className="deco w-[250px] h-[250px] rounded-full bg-[#C8E6C9]/30 blur-[80px] bottom-[-5%] left-[10%]" />

      <div ref={ref} className="animate-on-scroll max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-[var(--font-heading)] text-[clamp(32px,4vw,40px)] font-medium text-text-main">
            Услуги
          </h2>
          <p className="text-text-secondary mt-3 max-w-lg mx-auto">
            Индивидуальные консультации и программы оздоровления
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 stagger-children">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="relative group rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(58,125,92,0.12)] hover:-translate-y-1 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-primary/5"
            >
              {/* Service photo */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={service.photo}
                  alt={service.photoAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: service.photoPosition }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-8">
                <h3 className="font-[var(--font-heading)] text-2xl font-semibold text-text-main mb-2">
                  {service.title}
                </h3>

                <div className="inline-flex items-center px-3 py-1 bg-primary-light/30 rounded-full text-xs font-semibold text-primary mb-4">
                  {service.format}
                </div>

                <p className="text-text-secondary mb-3">{service.description}</p>

                <p className="text-sm text-text-secondary mb-6">
                  <span className="font-semibold text-text-main">Для кого: </span>
                  {service.audience}
                </p>

                {service.price && (
                  <div className="flex items-center gap-2 mb-5">
                    <span className="font-[var(--font-heading)] text-3xl font-bold text-primary">{service.price}</span>
                  </div>
                )}

                {service.buttons ? (
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                    {service.buttons.map((btn) => (
                      <a
                        key={btn.label}
                        href={btn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-bold uppercase tracking-[0.05em] rounded-full transition-all duration-300 group/btn bg-primary text-white hover:bg-primary-dark hover:shadow-[0_4px_20px_rgba(58,125,92,0.3)] hover:scale-[1.03]"
                      >
                        {btn.label}
                        <svg className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={service.href}
                    target={service.href.startsWith("http") ? "_blank" : undefined}
                    rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center px-7 py-3.5 text-sm font-bold uppercase tracking-[0.05em] rounded-full transition-all duration-300 group/btn bg-primary text-white hover:bg-primary-dark hover:shadow-[0_4px_20px_rgba(58,125,92,0.3)] hover:scale-[1.03]"
                  >
                    {service.cta}
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
