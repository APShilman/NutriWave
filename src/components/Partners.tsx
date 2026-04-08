"use client";
import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";
import { BroccoliSVG, RosemarySVG, OrganicBlob } from "./DecorativeElements";

interface Shop {
  name: string;
  address: string;
  mapUrl: string;
}

const PARTNERS: {
  name: string;
  subtitle: string;
  description: string;
  benefit: string;
  cta: string;
  href?: string;
  shops?: Shop[];
  logos: { src: string; alt: string }[];
}[] = [
  {
    name: "Hello,Doc",
    subtitle: "Лабораторные анализы и обследования",
    description: "Сдавайте анализы в клиниках-партнёрах и получайте бонусы",
    benefit: "Для тебя 15 000 бонусов при регистрации (1 бонус = 1 рубль)",
    cta: "Зарегистрироваться",
    href: "https://hellodoc.app/s/pn9yh/",
    logos: [{ src: "/images/partners/hellodoc.webp", alt: "Hello,Doc" }],
  },
  {
    name: "MyGenetics",
    subtitle: "Генетические исследования",
    description: "Гены определяют 40% здоровья. Узнайте свою генетику — воздействуйте на здоровье эффективнее",
    benefit: "Промокод NutriWave — скидка на исследование",
    cta: "Пройти бесплатный опрос",
    href: "https://mygenetics.ru/quiz/?coupon=NutriWave",
    logos: [{ src: "/images/partners/mygenetics.webp", alt: "MyGenetics" }],
  },
  {
    name: "Польза & Fitness Formula",
    subtitle: "Магазины для Здоровья",
    description: "Скидка 10% на ассортимент",
    benefit: "Назовите фамилию Шильман при покупке",
    cta: "Подробнее",
    shops: [
      { name: "Польза", address: "г. Челябинск", mapUrl: "https://2gis.ru/chelyabinsk/geo/70000001102871476" },
      { name: "Fitness Formula", address: "г. Челябинск", mapUrl: "https://2gis.ru/chelyabinsk/geo/70000001063421690" },
    ],
    logos: [
      { src: "/images/partners/polza.webp", alt: "Польза" },
      { src: "/images/partners/fitness-formula.webp", alt: "Fitness Formula" },
    ],
  },
  {
    name: "Aurora",
    subtitle: "Нутрицевтики и БАД",
    description: "Лучший бренд российских нутрицевтиков, витаминов и БАД",
    benefit: "Регистрация в партнерской программе",
    cta: "Зарегистрироваться",
    href: "https://aur-ora.com/auth/registration/672848541553/",
    logos: [{ src: "/images/partners/aurora.webp", alt: "Aurora" }],
  },
];

export default function Partners() {
  const ref = useScrollAnimation<HTMLDivElement>();
  const [modalShops, setModalShops] = useState<{ name: string; shops: Shop[] } | null>(null);

  return (
    <>
    {/* Shops modal */}
    {modalShops && (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        onClick={() => setModalShops(null)}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setModalShops(null)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-bg-alt flex items-center justify-center text-text-secondary hover:text-text-main transition-colors"
          >
            ✕
          </button>
          <h3 className="font-[var(--font-heading)] text-xl font-semibold text-text-main mb-1">
            {modalShops.name}
          </h3>
          <p className="text-sm text-text-secondary mb-5">Адреса магазинов</p>
          <div className="space-y-3">
            {modalShops.shops.map((shop) => (
              <a
                key={shop.mapUrl}
                href={shop.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-bg-alt hover:bg-accent-warm transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-text-main group-hover:text-primary transition-colors">{shop.name}</p>
                  <p className="text-xs text-text-secondary">Открыть на карте 2ГИС →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    )}
    <section
      id="partners"
      className="relative py-16 md:py-32 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <span className="section-number">05</span>

      {/* Decorative elements */}
      <BroccoliSVG className="deco w-[100px] top-16 right-16 rotate-[10deg] text-[#81C784] opacity-[0.09]" />
      <RosemarySVG className="deco w-[60px] h-[140px] bottom-12 left-12 rotate-[15deg] text-primary opacity-[0.10]" />
      <OrganicBlob className="deco w-[300px] h-[300px] top-[15%] right-[-5%] text-[#E8F5E9] opacity-[0.10]" variant={2} />
      <div className="deco w-[250px] h-[250px] rounded-full bg-[#FFF3E0]/30 blur-[80px] bottom-[-5%] left-[5%]" />

      <div ref={ref} className="animate-on-scroll max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-[var(--font-heading)] text-[clamp(32px,4vw,40px)] font-medium text-text-main">
            Профилактика здоровья с выгодой
          </h2>
          <p className="text-text-secondary mt-3 max-w-lg mx-auto">
            Выгодные обследования и скидки на здоровое питание
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-[20px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(58,125,92,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Partner logo(s) */}
              <div className="w-full h-28 rounded-xl bg-bg-alt flex items-center justify-center gap-3 mb-4 p-4">
                {partner.logos.map((logo) => (
                  <div key={logo.src} className="relative h-full flex-1 max-w-[140px]">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      sizes="140px"
                    />
                  </div>
                ))}
              </div>

              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-text-main mb-1">
                {partner.name}
              </h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                {partner.subtitle}
              </p>
              <p className="text-sm text-text-secondary mb-3 flex-1">
                {partner.description}
              </p>

              <div className="flex items-center gap-2 px-3 py-2 bg-accent-gold/10 rounded-lg mb-4">
                <svg className="w-4 h-4 text-accent-gold shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
                </svg>
                <span className="text-sm font-extrabold text-accent-gold">{partner.benefit}</span>
              </div>

              {partner.href ? (
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 bg-accent-gold text-white text-sm font-bold rounded-full hover:bg-[#b8943f] transition-all duration-300 text-center shadow-[0_2px_8px_rgba(201,169,110,0.3)] hover:shadow-[0_4px_16px_rgba(201,169,110,0.4)]"
                >
                  {partner.cta}
                </a>
              ) : partner.shops ? (
                <button
                  onClick={() => setModalShops({ name: partner.name, shops: partner.shops! })}
                  className="w-full py-2.5 bg-accent-gold text-white text-sm font-bold rounded-full hover:bg-[#b8943f] transition-all duration-300 shadow-[0_2px_8px_rgba(201,169,110,0.3)] hover:shadow-[0_4px_16px_rgba(201,169,110,0.4)]"
                >
                  {partner.cta}
                </button>
              ) : (
                <button className="w-full py-2.5 bg-accent-gold text-white text-sm font-bold rounded-full hover:bg-[#b8943f] transition-all duration-300 shadow-[0_2px_8px_rgba(201,169,110,0.3)] hover:shadow-[0_4px_16px_rgba(201,169,110,0.4)]">
                  {partner.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
