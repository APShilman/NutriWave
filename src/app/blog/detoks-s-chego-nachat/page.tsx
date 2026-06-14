import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCTA } from "../_components/ArticleCTA";
import { ArticleHero } from "../_components/ArticleHero";

const SITE_URL = "https://nutriwave.pro";
const SLUG = "detoks-s-chego-nachat";
const TITLE = "Детокс-программа: с чего начать и как не навредить себе";
const DESCRIPTION =
  "Что такое детокс на самом деле, как организм очищается сам, с чего безопасно начать и каких ошибок избегать. Разбор от клинического нутрициолога.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: "Детокс-программа: с чего начать?",
    description:
      "Что такое детокс на самом деле и как начать безопасно. Разбор от клинического нутрициолога.",
    url: `/blog/${SLUG}`,
    type: "article",
    locale: "ru_RU",
    siteName: "NutriWave",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
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
  datePublished: "2026-05-13",
  dateModified: "2026-05-13",
  mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`,
  inLanguage: "ru-RU",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Блог", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: TITLE,
        item: `${SITE_URL}/blog/${SLUG}`,
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
        <span className="text-text-main font-medium">Детокс: с чего начать</span>
      </nav>

      <article className="bg-white rounded-[24px] p-6 sm:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary bg-primary-light/30 px-3 py-1 rounded-full">
              Детокс
            </span>
            <span className="text-xs text-text-secondary">8 мин чтения</span>
            <span className="text-xs text-text-secondary">13 мая 2026</span>
          </div>
          <h1 className="font-[var(--font-heading)] text-[clamp(28px,4vw,40px)] font-medium text-text-main leading-tight">
            Детокс-программа: с&nbsp;чего начать и&nbsp;как не&nbsp;навредить себе
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

        <ArticleHero variant="detox" />

        {/* Content */}
        <div className="prose prose-green max-w-none text-text-main [&_h2]:font-[var(--font-heading)] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-[var(--font-heading)] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-text-secondary [&_ul]:mb-4 [&_ul]:pl-5 [&_li]:text-text-secondary [&_li]:text-base [&_li]:leading-relaxed [&_strong]:text-text-main [&_ol]:mb-4 [&_ol]:pl-5 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-text-secondary">
          <p>
            Слово «детокс» окружено мифами: одни обещают «очищение от шлаков» за три
            дня на соках, другие говорят, что детокс — это маркетинг и организм
            очищается сам. Истина, как обычно, посередине. Давайте разберёмся, что
            такое детокс с точки зрения физиологии и с чего начать, чтобы помочь
            телу, а не навредить.
          </p>

          <h2>Что такое детокс на самом деле</h2>
          <p>
            «Шлаков» в медицинском смысле не существует. Но у организма есть реальная
            система обезвреживания и вывода токсинов — продуктов обмена, алкоголя,
            лекарств, загрязнителей. Главные органы детоксикации:
          </p>
          <ul>
            <li><strong>Печень</strong> — обезвреживает вещества в две фазы</li>
            <li><strong>Почки</strong> — фильтруют кровь и выводят с мочой</li>
            <li><strong>Кишечник</strong> — выводит то, что обезвредила печень</li>
            <li><strong>Лёгкие, кожа, лимфа</strong> — вспомогательные пути</li>
          </ul>
          <p>
            Поэтому настоящий детокс — это <strong>не голодание на соках</strong>, а
            поддержка этих органов: достаточное питание, вода, движение и снижение
            нагрузки токсинами.
          </p>

          <h2>Признаки, что организму нужна поддержка</h2>
          <ul>
            <li>Постоянная усталость и «туман в голове»</li>
            <li>Тяжесть после еды, вздутие, нерегулярный стул</li>
            <li>Тусклая кожа, высыпания, отёчность по утрам</li>
            <li>Тяга к сладкому и кофе, чтобы «взбодриться»</li>
            <li>Плохой сон и раздражительность</li>
          </ul>
          <p>
            Это не диагнозы, а сигналы, что стоит пересмотреть образ жизни. Но если
            симптомы выражены — сначала исключите заболевания с врачом.
          </p>

          <h2>С чего начать: 5 безопасных шагов</h2>

          <h3>1. Уберите главные источники нагрузки</h3>
          <p>
            Прежде чем что-то добавлять, уберите лишнее: алкоголь, избыток сахара,
            трансжиры, ультрапереработанные продукты. Уже это разгружает печень.
          </p>

          <h3>2. Наладьте питьевой режим</h3>
          <p>
            Вода — основа работы почек. Ориентир — около 30 мл на кг веса в день,
            начиная утро со стакана чистой воды. Без фанатизма: переизбыток воды тоже
            вреден.
          </p>

          <h3>3. Добавьте клетчатку и зелень</h3>
          <p>
            Клетчатка связывает и выводит то, что обезвредила печень, и кормит
            микробиоту. Цель — овощи и зелень в каждом приёме пищи, плюс крестоцветные
            (брокколи, капуста), которые поддерживают вторую фазу детоксикации печени.
          </p>

          <h3>4. Поддержите белок</h3>
          <p>
            Фазы детоксикации печени требуют аминокислот. Без достаточного белка
            «очищение» буксует. Поэтому соковые голодовки контрпродуктивны — они
            лишают организм строительного материала.
          </p>

          <h3>5. Сон и движение</h3>
          <p>
            Именно во сне мозг активнее всего очищается, а движение разгоняет лимфу.
            Прогулка, лёгкая активность и 7–8 часов сна работают лучше любого
            «детокс-чая».
          </p>

          <h2>Главные ошибки</h2>
          <ul>
            <li><strong>Жёсткие голодовки и соковые диеты</strong> — стресс, потеря мышц, срывы</li>
            <li><strong>«Детокс-чаи» со слабительным эффектом</strong> — обезвоживание и вред кишечнику</li>
            <li><strong>Бесконтрольный приём БАД</strong> — нагрузка на ту же печень</li>
            <li><strong>Ожидание чуда за 3 дня</strong> — реальные изменения требуют недель</li>
          </ul>

          <blockquote>
            Лучший детокс — это образ жизни, при котором организму не нужно
            «отрабатывать» постоянные перегрузки.
          </blockquote>

          <h2>Когда нужен специалист</h2>
          <p>
            Если есть хронические заболевания, вы принимаете лекарства, планируете
            беременность или симптомы сохраняются — программу детоксикации стоит
            выстраивать индивидуально, с учётом анализов. Универсальные схемы из
            интернета могут не подойти именно вам, а в некоторых случаях навредить.
          </p>
          <p>
            На консультации мы разбираем ваши анализы, образ жизни и подбираем мягкую,
            безопасную программу поддержки органов детоксикации — без голодовок и
            сомнительных добавок.
          </p>
        </div>

        <ArticleCTA />
      </article>
    </>
  );
}
