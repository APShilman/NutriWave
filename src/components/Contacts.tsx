"use client";
import { useScrollAnimation } from "./useScrollAnimation";
import { LeafSVG, BerrySVG, OrganicBlob } from "./DecorativeElements";

export default function Contacts() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="contacts"
      className="relative py-16 md:py-32 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <span className="section-number">09</span>

      {/* Decorative elements */}
      <LeafSVG className="deco w-[130px] top-12 left-8 rotate-[-15deg] text-primary opacity-[0.10]" />
      <BerrySVG className="deco w-[80px] bottom-24 right-16 text-[#E91E63] opacity-[0.07]" />
      <OrganicBlob className="deco w-[400px] h-[400px] top-[-10%] right-[-8%] text-[#E8F5E9] opacity-[0.06]" variant={1} />
      <div className="deco w-[250px] h-[250px] rounded-full bg-[#FFF8E1]/25 blur-[80px] bottom-[10%] left-[5%]" />

      <div ref={ref} className="animate-on-scroll max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-[var(--font-heading)] text-[clamp(32px,4vw,40px)] font-medium text-text-main">
            Контакты
          </h2>
          <p className="text-text-secondary mt-3">
            Выберите удобный способ связи
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {/* Phone */}
            <a
              href="tel:+79222333844"
              className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(58,125,92,0.10)] transition-all group"
            >
              <div className="w-12 h-12 bg-accent-warm rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-text-main group-hover:text-primary transition-colors">
                  +7 (922) 233-38-44
                </div>
                <div className="text-xs text-text-secondary">Позвонить</div>
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/NutriWav"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(58,125,92,0.10)] transition-all group"
            >
              <div className="w-12 h-12 bg-[#229ED9]/10 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#229ED9]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-text-main group-hover:text-[#229ED9] transition-colors">
                  Telegram — NutriWave
                </div>
                <div className="text-xs text-text-secondary">Написать в Telegram</div>
              </div>
            </a>

            {/* VK */}
            <a
              href="https://vk.com/club236057383"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(58,125,92,0.10)] transition-all group"
            >
              <div className="w-12 h-12 bg-[#0077FF]/10 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#0077FF]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.188 1.368 1.259 2.184 1.814.616.42 1.084.328 1.084.328l2.178-.03s1.14-.07.599-.964c-.044-.073-.314-.66-1.618-1.866-1.366-1.263-1.183-1.058.462-3.243.999-1.328 1.398-2.139 1.273-2.485-.119-.33-.856-.243-.856-.243l-2.45.015s-.182-.025-.316.056c-.131.079-.215.264-.215.264s-.387 1.028-.903 1.902c-1.088 1.844-1.524 1.942-1.702 1.828-.414-.267-.31-1.07-.31-1.641 0-1.785.271-2.527-.527-2.72-.265-.064-.46-.106-1.138-.113-.869-.008-1.604.003-2.02.207-.277.136-.49.437-.36.454.161.022.525.098.718.36.249.34.24 1.096.24 1.096s.143 2.098-.334 2.358c-.327.18-.775-.186-1.738-1.854-.494-.856-.866-1.8-.866-1.8s-.072-.176-.2-.27c-.156-.114-.373-.15-.373-.15l-2.328.015s-.35.01-.478.161c-.114.134-.009.412-.009.412s1.82 4.258 3.882 6.403c1.889 1.966 4.033 1.838 4.033 1.838h.972z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-text-main group-hover:text-[#0077FF] transition-colors">
                  ВКонтакте
                </div>
                <div className="text-xs text-text-secondary">Группа NutriWave</div>
              </div>
            </a>
            {/* MAX */}
            <a
              href="https://max.ru/u/f9LHodD0cOJ6ZTF07nuXLgvB_St-AbL9e3gubtKmmi8oNiZPPjOzBS82dJc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(58,125,92,0.10)] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                <svg className="w-12 h-12" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="max-a"><stop offset="0" stopColor="#4cf"/><stop offset=".662" stopColor="#53e"/><stop offset="1" stopColor="#93d"/></linearGradient>
                    <linearGradient id="max-b"><stop offset="0" stopColor="#00f"/><stop offset="1" stopOpacity="0"/></linearGradient>
                    <linearGradient id="max-c" x1="117.847" x2="1000" y1="760.536" y2="500" gradientUnits="userSpaceOnUse" href="#max-a"/>
                    <radialGradient id="max-d" cx="-87.392" cy="1166.116" r="500" fx="-87.392" fy="1166.116" gradientTransform="rotate(51.356 1551.478 559.3)scale(2.42703433 1)" gradientUnits="userSpaceOnUse" href="#max-b"/>
                  </defs>
                  <rect width="1000" height="1000" fill="url(#max-c)" ry="249.681"/>
                  <rect width="1000" height="1000" fill="url(#max-d)" ry="249.681"/>
                  <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-text-main group-hover:text-[#FF5317] transition-colors">
                  MAX
                </div>
                <div className="text-xs text-text-secondary">Написать в MAX</div>
              </div>
            </a>
          </div>

          {/* CTA block */}
          <div className="bg-white rounded-[24px] p-5 sm:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-accent-warm rounded-2xl flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <h3 className="font-[var(--font-heading)] text-2xl font-semibold text-text-main mb-3">
              Записаться на консультацию
            </h3>
            <p className="text-text-secondary text-sm mb-8 max-w-sm">
              Напишите мне в удобный мессенджер — обсудим ваш запрос и подберём формат работы
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
              <a
                href="https://t.me/NutriWav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#229ED9] text-white text-sm font-bold uppercase tracking-[0.05em] rounded-full hover:bg-[#1a8abf] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(34,158,217,0.35)] hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
              <a
                href="https://max.ru/u/f9LHodD0cOJ6ZTF07nuXLgvB_St-AbL9e3gubtKmmi8oNiZPPjOzBS82dJc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#4cf] via-[#53e] to-[#93d] text-white text-sm font-bold uppercase tracking-[0.05em] rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(85,51,238,0.35)] hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" viewBox="0 0 1000 1000" fill="currentColor">
                  <path fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd"/>
                </svg>
                MAX
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
