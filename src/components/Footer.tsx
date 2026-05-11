export default function Footer() {
  return (
    <footer className="bg-text-main text-white/70 py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="text-primary-light">
                <path d="M16 2C9 2 4 8 4 14c0 4 2 7.5 5 10l7 6 7-6c3-2.5 5-6 5-10 0-6-5-12-12-12z" fill="currentColor" opacity="0.3"/>
                <path d="M16 6c-2 3-3 7-2 11s4 7 7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M16 6c2 3 3 7 2 11s-4 7-7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="font-[var(--font-heading)] text-lg font-semibold text-white">
                NutriWave
              </span>
            </div>
            <p className="text-sm">
              Анна Шильман — клинический нутрициолог, натуропат
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
              Навигация
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                ["Обо мне", "#about"],
                ["Услуги", "#services"],
                ["Кейсы", "#cases"],
                ["Отзывы", "#reviews"],
                ["FAQ", "#faq"],
                ["Контакты", "#contacts"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm hover:text-primary-light transition-colors w-fit"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
              Связаться
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+79222333844" className="hover:text-primary-light transition-colors">
                +7 (922) 233-38-44
              </a>
              <a href="https://t.me/NutriWav" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                Telegram
              </a>
              <a href="https://vk.com/club236057383" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                ВКонтакте
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} NutriWave. Все права защищены.
          </p>
          <a
            href="/privacy"
            className="text-xs hover:text-primary-light transition-colors"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
