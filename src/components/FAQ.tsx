"use client";
import { useState } from "react";
import { useScrollAnimation } from "./useScrollAnimation";
import { RosemarySVG, SmallLeavesSVG, OrganicBlob } from "./DecorativeElements";

const FAQS = [
  {
    q: "Что делает клинический нутрициолог?",
    a: "Клинический нутрициолог анализирует ваше состояние здоровья, результаты анализов и генетические особенности, чтобы разработать персональный план питания и нутрицевтической поддержки. В отличие от общих рекомендаций, подход строго индивидуальный и основан на доказательной медицине.",
  },
  {
    q: "Как проходит консультация нутрициолога онлайн?",
    a: "Перед консультацией вы заполняете подробную анкету здоровья и присылаете результаты анализов. На онлайн-встрече (Zoom или Telegram) мы детально разбираем ваши данные, определяем цели и составляем план действий. После консультации вы получаете письменные рекомендации и сопровождение.",
  },
  {
    q: "Чем нутрициолог отличается от диетолога?",
    a: "Диетолог — врач, который работает преимущественно с лечебным питанием при заболеваниях. Нутрициолог фокусируется на оптимизации питания для улучшения здоровья, профилактике, работе с дефицитами нутриентов и нутрицевтической поддержке. Я работаю в связке с врачами для комплексного подхода.",
  },
  {
    q: "Зачем нужны генетические исследования для питания?",
    a: "Генетика определяет до 40% особенностей вашего метаболизма. ДНК-тест показывает, как ваш организм усваивает жиры, углеводы, витамины, кофеин и другие вещества. Это позволяет подобрать питание, которое идеально подходит именно вам, а не следовать общим рекомендациям.",
  },
  {
    q: "Сколько стоит консультация нутрициолога?",
    a: "Стоимость зависит от формата работы. Первичная консультация, пакеты сопровождения и специальные программы имеют разную цену. Для уточнения актуальных цен свяжитесь со мной через форму на сайте или в Telegram.",
  },
  {
    q: "Что такое перинатальная нутрициология?",
    a: "Это специализация, посвящённая питанию при планировании беременности, во время беременности и в послеродовой период. Правильное питание в эти периоды критически важно для здоровья мамы и ребёнка. Я помогаю скорректировать дефициты и составить безопасный план питания.",
  },
  {
    q: "Что входит в детокс-программу?",
    a: "Научный детокс — это не голодание и не соки. Это поддержка естественных механизмов детоксикации организма через питание, нутрицевтики и изменение образа жизни. Программа включает анализ текущего состояния, план питания и протокол нутрицевтической поддержки.",
  },
  {
    q: "Можно ли обратиться к нутрициологу онлайн?",
    a: "Да, онлайн-консультации проходят так же эффективно, как и очные. Мы работаем через Zoom или Telegram видеосвязь. Вы получаете полноценную консультацию, письменные рекомендации и дальнейшее сопровождение независимо от вашего местоположения.",
  },
];

export default function FAQ() {
  const ref = useScrollAnimation<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <span className="section-number">08</span>

      {/* Decorative elements */}
      <RosemarySVG className="deco w-[55px] h-[140px] top-24 right-20 text-primary opacity-[0.10]" />
      <SmallLeavesSVG className="deco w-[80px] bottom-16 left-16 rotate-[25deg] text-primary opacity-[0.12]" />
      <OrganicBlob className="deco w-[300px] h-[300px] top-[-5%] left-[-8%] text-[#C8E6C9] opacity-[0.05]" variant={2} />

      <div ref={ref} className="animate-on-scroll max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-heading)] text-[clamp(32px,4vw,40px)] font-medium text-text-main">
            Частые вопросы
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden transition-shadow hover:shadow-[0_4px_20px_rgba(58,125,92,0.08)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-text-main pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-text-secondary leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
