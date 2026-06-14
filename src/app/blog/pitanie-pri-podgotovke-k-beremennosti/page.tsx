import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCTA } from "../_components/ArticleCTA";

const SITE_URL = "https://nutriwave.pro";
const SLUG = "pitanie-pri-podgotovke-k-beremennosti";
const TITLE = "Питание при подготовке к беременности: чек-лист для будущей мамы";
const DESCRIPTION =
  "Какие витамины и продукты важны при подготовке к беременности, какие анализы сдать и за сколько начинать. Чек-лист от перинатального нутрициолога.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: "Питание при подготовке к беременности",
    description:
      "Витамины, продукты и анализы при подготовке к беременности. Чек-лист от перинатального нутрициолога.",
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
        <span className="text-text-main font-medium">Подготовка к беременности</span>
      </nav>

      <article className="bg-white rounded-[24px] p-6 sm:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary bg-primary-light/30 px-3 py-1 rounded-full">
              Перинатальное питание
            </span>
            <span className="text-xs text-text-secondary">8 мин чтения</span>
            <span className="text-xs text-text-secondary">13 мая 2026</span>
          </div>
          <h1 className="font-[var(--font-heading)] text-[clamp(28px,4vw,40px)] font-medium text-text-main leading-tight">
            Питание при подготовке к&nbsp;беременности: чек-лист для&nbsp;будущей мамы
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
        <div className="prose prose-green max-w-none text-text-main [&_h2]:font-[var(--font-heading)] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-[var(--font-heading)] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-text-secondary [&_ul]:mb-4 [&_ul]:pl-5 [&_li]:text-text-secondary [&_li]:text-base [&_li]:leading-relaxed [&_strong]:text-text-main [&_table]:w-full [&_table]:border-collapse [&_th]:bg-primary/5 [&_th]:text-left [&_th]:p-3 [&_th]:text-sm [&_th]:font-semibold [&_th]:text-text-main [&_td]:p-3 [&_td]:text-sm [&_td]:text-text-secondary [&_td]:border-t [&_td]:border-primary/10 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-text-secondary">
          <p>
            Здоровье будущего малыша во многом закладывается ещё до зачатия. Организм
            мамы — это среда, в которой будет развиваться новая жизнь, и подготовить её
            заранее куда разумнее, чем навёрстывать дефициты во время беременности.
            Рассказываю, с чего начать.
          </p>

          <h2>За сколько начинать готовиться</h2>
          <p>
            Оптимально — <strong>за 3–6 месяцев</strong> до планируемого зачатия.
            Этого времени достаточно, чтобы восполнить ключевые дефициты, наладить
            питание и подготовить организм. Готовиться желательно обоим партнёрам:
            качество мужских половых клеток тоже зависит от питания и образа жизни.
          </p>

          <h2>Ключевые витамины и нутриенты</h2>
          <table>
            <thead>
              <tr>
                <th>Нутриент</th>
                <th>Зачем нужен</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Фолаты (B9)</strong></td>
                <td>Профилактика дефектов нервной трубки плода</td>
              </tr>
              <tr>
                <td><strong>Витамин D</strong></td>
                <td>Гормональный баланс, иммунитет, фертильность</td>
              </tr>
              <tr>
                <td><strong>Железо</strong></td>
                <td>Профилактика анемии до и во время беременности</td>
              </tr>
              <tr>
                <td><strong>Йод</strong></td>
                <td>Работа щитовидной железы и развитие мозга плода</td>
              </tr>
              <tr>
                <td><strong>Омега-3</strong></td>
                <td>Развитие нервной системы малыша</td>
              </tr>
              <tr>
                <td><strong>B12</strong></td>
                <td>Кроветворение и нервная система</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Важно:</strong> дозировки подбираются индивидуально по анализам.
            Бесконтрольный приём (например, избыток витамина D или йода) так же
            нежелателен, как и дефицит.
          </p>

          <h2>Какие анализы сдать</h2>
          <ul>
            <li>Общий и биохимический анализ крови</li>
            <li>Ферритин (запасы железа)</li>
            <li>Витамин D (25-OH)</li>
            <li>Витамин B12 и фолаты</li>
            <li>ТТГ и гормоны щитовидной железы</li>
            <li>Глюкоза и при необходимости инсулин</li>
          </ul>
          <p>
            По результатам составляется персональный план коррекции — это и есть суть
            подготовки, а не приём «витаминов для беременных» наугад.
          </p>

          <h2>Основа рациона</h2>
          <p>Питание в период подготовки должно быть разнообразным и полноценным:</p>
          <ul>
            <li><strong>Белок</strong> — рыба, яйца, мясо, бобовые в каждом приёме пищи</li>
            <li><strong>Полезные жиры</strong> — жирная рыба, оливковое масло, авокадо, орехи</li>
            <li><strong>Сложные углеводы</strong> — крупы, овощи, цельные злаки</li>
            <li><strong>Зелень и овощи</strong> — источник фолатов и клетчатки</li>
            <li><strong>Достаточно воды</strong> и стабильный режим питания</li>
          </ul>

          <h2>Чего стоит избегать</h2>
          <ul>
            <li>Алкоголь — исключить полностью обоим партнёрам</li>
            <li>Курение, в том числе пассивное</li>
            <li>Избыток кофеина</li>
            <li>Ультрапереработанные продукты и трансжиры</li>
            <li>Избыток сахара (влияет на гормональный фон)</li>
          </ul>

          <blockquote>
            Подготовка к беременности — это инвестиция в здоровье малыша и в ваше
            самочувствие во время вынашивания.
          </blockquote>

          <h2>Индивидуальный подход</h2>
          <p>
            Универсальных схем не существует: у каждой женщины свой набор дефицитов,
            особенностей и истории здоровья. На перинатальной консультации мы
            разбираем ваши анализы, подбираем питание и нутрицевтическую поддержку
            именно под ваш организм — мягко и безопасно.
          </p>
          <p>
            Если вы планируете беременность — начните подготовку заранее. Это самый
            спокойный и осознанный путь к здоровой беременности.
          </p>
        </div>

        <ArticleCTA />
      </article>
    </>
  );
}
