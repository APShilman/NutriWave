"use client";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Подарок", href: "#gift" },
  { label: "Партнёры", href: "#partners" },
  { label: "Кейсы", href: "#cases" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-page/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary transition-transform group-hover:scale-110 duration-300">
            <path d="M16 2C9 2 4 8 4 14c0 4 2 7.5 5 10l7 6 7-6c3-2.5 5-6 5-10 0-6-5-12-12-12z" fill="currentColor" opacity="0.15"/>
            <path d="M16 6c-2 3-3 7-2 11s4 7 7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16 6c2 3 3 7 2 11s-4 7-7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16 6v18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
          </svg>
          <span className="font-[var(--font-heading)] text-xl font-semibold text-text-main tracking-wide">
            NutriWave
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors duration-200 tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contacts"
          className="hidden lg:inline-flex items-center px-6 py-2.5 bg-primary text-white text-sm font-bold uppercase tracking-[0.05em] rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_4px_16px_rgba(58,125,92,0.25)] hover:scale-[1.03]"
        >
          Записаться
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Меню"
        >
          <span className={`w-6 h-0.5 bg-text-main transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-text-main transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-text-main transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-bg-page/98 backdrop-blur-md`}
      >
        <nav className="flex flex-col items-center gap-4 py-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-8 py-3 bg-primary text-white text-sm font-bold uppercase tracking-[0.05em] rounded-full"
          >
            Записаться
          </a>
        </nav>
      </div>
    </header>
  );
}
