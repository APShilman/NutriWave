import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nutriwave.pro";

export const metadata: Metadata = {
  title: "Нутрициолог и диетолог — в чём разница и к кому идти?",
  description:
    "Чем отличается клинический нутрициолог от диетолога? Какие задачи решает каждый специалист, когда к кому обращаться, и как выбрать правильного эксперта по питанию.",
  alternates: { canonical: "/blog/nutritsiolog-vs-dietolog" },
  openGraph: {
    title: "Нутрициолог и диетолог — в чём разница?",
    description:
      "Чем отличается клинический нутрициолог от диетолога? Разбор от практикующего специалиста.",
    url: "/blog/nutritsiolog-vs-dietolog",
    type: "article",
    locale: "ru_RU",
    siteName: "NutriWave",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Нутрициолог и диетолог — в чём разница и к кому идти?",
  description:
    "Чем отличается клинический нутрициолог от диетолога? Какие задачи решает каждый специалист и когда к кому обращаться.",
  author: {
    "@type": "Person",
    name: "Анна Шильман",
    url: SITE_URL,
    jobTitle: "Клинический и перинатальный нутрициолог",
  },
  publisher: {
    "@type": "Organization",
    name: "NutriWave",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.svg` },
  },
  datePublished: "2026-05-12",
  dateModified: "2026-05-12",
  mainEntityOfPage: `${SITE_URL}/blog/nutritsiolog-vs-dietolog`,
  inLanguage: "ru-RU",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Блог",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Нутрициолог и диетолог — в чём разница?",
        item: `${SITE_URL}/blog/nutritsiolog-vs-dietolog`,
      },
    ],
  },
};

export default function Article() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-text-secondary mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          Главная
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary transition-colors">
          Блог
        </Link>
        <span>/</span>
        <span className="text-text-main font-medium">Нутрициолог vs Диетолог</span>
      </nav>

      <article className="bg-white rounded-[24px] p-6 sm:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary bg-primary-light/30 px-3 py-1 rounded-full">
              Нутрициология
            </span>
            <span className="text-xs text-text-secondary">7 мин чтения</span>
            <span className="text-xs text-text-secondary">12 мая 2026</span>
          </div>
          <h1 className="font-[var(--font-heading)] text-[clamp(28px,4vw,40px)] font-medium text-text-main leading-tight">
            Нутрициолог и диетолог — в&nbsp;чём разница и&nbsp;к&nbsp;кому идти?
          </h1>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-primary/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">А</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-text-main">Анна Шильман</div>
              <div className="text-xs text-text-secondary">
                Клинический и перинатальный нутрициолог
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-green max-w-none text-text-main [&_h2]:font-[var(--font-heading)] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-[var(--font-heading)] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-text-secondary [&_ul]:mb-4 [&_ul]:pl-5 [&_li]:text-text-secondary [&_li]:text-base [&_li]:leading-relaxed [&_strong]:text-text-main [&_table]:w-full [&_table]:border-collapse [&_th]:bg-primary/5 [&_th]:text-left [&_th]:p-3 [&_th]:text-sm [&_th]:font-semibold [&_th]:text-text-main [&_td]:p-3 [&_td]:text-sm [&_td]:text-text-secondary [&_td]:border-t [&_td]:border-primary/10">
          <p>
            Когда человек решает разобраться со своим питанием, он часто сталкивается
            с вопросом: <strong>к кому обратиться — к нутрициологу или диетологу?</strong>{" "}
            Эти две профессии кажутся похожими, но на практике имеют серьёзные различия.
            Давайте разберёмся.
          </p>

          <h2>Кто такой диетолог?</h2>
          <p>
            <strong>Диетолог</strong> — это врач с высшим медицинским образованием,
            который прошёл специализацию по диетологии. Он работает с пациентами,
            у которых уже диагностированы заболевания, и назначает лечебное питание
            в составе комплексной терапии.
          </p>
          <p>Основные задачи диетолога:</p>
          <ul>
            <li>Лечебные диеты при заболеваниях ЖКТ, диабете, почечных патологиях</li>
            <li>Питание в условиях стационара</li>
            <li>Коррекция веса при ожирении (как медицинском диагнозе)</li>
            <li>Назначение питания совместно с лекарственной терапией</li>
          </ul>

          <h2>Кто такой клинический нутрициолог?</h2>
          <p>
            <strong>Клинический нутрициолог</strong> — специалист по питанию с углублёнными
            знаниями в биохимии, физиологии и нутрицевтике. Нутрициолог фокусируется
            на <strong>профилактике и оптимизации</strong> здоровья через питание.
          </p>
          <p>Основные задачи нутрициолога:</p>
          <ul>
            <li>Составление индивидуального рациона питания</li>
            <li>Работа с дефицитами витаминов и минералов</li>
            <li>Подбор нутрицевтиков (БАД) на основе анализов</li>
            <li>Генетика питания — адаптация рациона к особенностям ДНК</li>
            <li>Детокс-программы и кето-протоколы</li>
            <li>Поддержка при подготовке к беременности и в послеродовой период</li>
            <li>Улучшение качества кожи, сна, энергии через питание</li>
          </ul>

          <h2>Сравнительная таблица</h2>
          <table>
            <thead>
              <tr>
                <th>Критерий</th>
                <th>Диетолог</th>
                <th>Нутрициолог</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Образование</strong></td>
                <td>Высшее медицинское + специализация</td>
                <td>Профессиональная переподготовка, курсы биохимии</td>
              </tr>
              <tr>
                <td><strong>Фокус</strong></td>
                <td>Лечение заболеваний через диету</td>
                <td>Профилактика и оптимизация здоровья</td>
              </tr>
              <tr>
                <td><strong>Подход</strong></td>
                <td>Лечебные столы, медикаменты</td>
                <td>Индивидуальный рацион, нутрицевтики, генетика</td>
              </tr>
              <tr>
                <td><strong>Когда обращаться</strong></td>
                <td>Диагностированные болезни</td>
                <td>Дефициты, усталость, кожа, вес, профилактика</td>
              </tr>
              <tr>
                <td><strong>Формат</strong></td>
                <td>Чаще стационар или поликлиника</td>
                <td>Онлайн-консультации и сопровождение</td>
              </tr>
            </tbody>
          </table>

          <h2>Когда идти к нутрициологу?</h2>
          <p>Вот типичные ситуации, когда стоит обратиться к клиническому нутрициологу:</p>
          <ul>
            <li>
              <strong>Хроническая усталость</strong> — вы высыпаетесь, но сил всё равно нет
            </li>
            <li>
              <strong>Проблемы с кожей</strong> — акне, сухость, высыпания, которые не проходят
            </li>
            <li>
              <strong>Проблемы с весом</strong> — не получается похудеть или набрать вес
            </li>
            <li>
              <strong>Проблемы с ЖКТ</strong> — вздутие, газообразование, нерегулярный стул
            </li>
            <li>
              <strong>Планирование беременности</strong> — подготовка организма к зачатию
            </li>
            <li>
              <strong>Гормональные нарушения</strong> — нерегулярный цикл, щитовидная железа
            </li>
            <li>
              <strong>Хотите разобраться в генетике</strong> — какие продукты подходят именно вам
            </li>
          </ul>

          <h2>Как выбрать хорошего нутрициолога?</h2>
          <p>На что обращать внимание при выборе специалиста:</p>
          <ul>
            <li>
              <strong>Образование и сертификаты</strong> — дипломы о профессиональной
              переподготовке, не просто онлайн-марафоны
            </li>
            <li>
              <strong>Доказательный подход</strong> — специалист опирается на исследования,
              а не на тренды
            </li>
            <li>
              <strong>Работа с анализами</strong> — нутрициолог должен уметь интерпретировать
              лабораторные данные
            </li>
            <li>
              <strong>Реальные кейсы</strong> — отзывы клиентов и результаты работы
            </li>
            <li>
              <strong>Индивидуальный подход</strong> — отсутствие шаблонных диет
            </li>
          </ul>

          <h2>Итог</h2>
          <p>
            <strong>Диетолог</strong> — к нему идти, когда уже есть диагноз и нужна
            лечебная диета в составе терапии.
          </p>
          <p>
            <strong>Нутрициолог</strong> — ваш выбор, если вы хотите{" "}
            <strong>улучшить самочувствие, разобраться с дефицитами, наладить энергию,
            кожу, вес</strong> и выстроить питание, которое подходит именно вашему организму.
          </p>
          <p>
            Оба специалиста важны и не заменяют друг друга. В идеале — они работают
            в связке для вашего здоровья.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 sm:p-8 bg-accent-warm rounded-2xl text-center">
          <h3 className="font-[var(--font-heading)] text-xl font-semibold text-text-main mb-2">
            Хотите разобраться со своим питанием?
          </h3>
          <p className="text-sm text-text-secondary mb-5 max-w-md mx-auto">
            Запишитесь на индивидуальную консультацию — разберём ваши анализы, составим
            персональный план питания и подберём нутрицевтическую поддержку.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://t.me/AnnaNutriWave"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary-dark transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Записаться в Telegram
            </a>
            <Link
              href="/#contacts"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary text-sm font-bold rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              Все контакты
            </Link>
          </div>
        </div>
      </article>

      {/* Back to blog */}
      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-primary-dark transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Все статьи
        </Link>
      </div>
    </>
  );
}
