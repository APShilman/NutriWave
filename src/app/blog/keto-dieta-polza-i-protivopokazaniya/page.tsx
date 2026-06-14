import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCTA } from "../_components/ArticleCTA";
import { ArticleHero } from "../_components/ArticleHero";
import { RelatedArticles } from "../_components/RelatedArticles";
import { GeneticsCallout } from "../_components/GeneticsCallout";

const SITE_URL = "https://nutriwave.pro";
const SLUG = "keto-dieta-polza-i-protivopokazaniya";
const TITLE = "Кето-диета: польза, вред и противопоказания";
const DESCRIPTION =
  "Как работает кето-диета, кому она помогает, а кому противопоказана. Плюсы, риски и как начать безопасно — разбор от клинического нутрициолога.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: "Кето-диета: польза, вред и противопоказания",
    description:
      "Как работает кето-диета, кому она помогает, а кому противопоказана. Разбор от нутрициолога.",
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
        <span className="text-text-main font-medium">Кето-диета</span>
      </nav>

      <article className="bg-white rounded-[24px] p-6 sm:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary bg-primary-light/30 px-3 py-1 rounded-full">
              Питание
            </span>
            <span className="text-xs text-text-secondary">9 мин чтения</span>
            <span className="text-xs text-text-secondary">13 мая 2026</span>
          </div>
          <h1 className="font-[var(--font-heading)] text-[clamp(28px,4vw,40px)] font-medium text-text-main leading-tight">
            Кето-диета: польза, вред и&nbsp;противопоказания
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

        <ArticleHero variant="keto" />

        {/* Content */}
        <div className="prose prose-green max-w-none text-text-main [&_h2]:font-[var(--font-heading)] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-[var(--font-heading)] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-text-secondary [&_ul]:mb-4 [&_ul]:pl-5 [&_li]:text-text-secondary [&_li]:text-base [&_li]:leading-relaxed [&_strong]:text-text-main [&_table]:w-full [&_table]:border-collapse [&_th]:bg-primary/5 [&_th]:text-left [&_th]:p-3 [&_th]:text-sm [&_th]:font-semibold [&_th]:text-text-main [&_td]:p-3 [&_td]:text-sm [&_td]:text-text-secondary [&_td]:border-t [&_td]:border-primary/10 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-text-secondary">
          <p>
            Кето-диета — один из самых обсуждаемых способов питания. Кто-то худеет на
            ней на десятки килограммов, кто-то жалуется на упадок сил. Разберёмся, как
            она работает, кому действительно подходит, а кому может навредить.
          </p>

          <h2>Что такое кето-диета</h2>
          <p>
            Кетогенная диета — это питание с <strong>очень низким количеством
            углеводов</strong> (обычно до 20–50 г в сутки), умеренным белком и высоким
            содержанием жиров. Когда углеводов почти нет, тело переключается с глюкозы
            на <strong>кетоны</strong> — топливо из жиров. Это состояние называется
            кетозом.
          </p>
          <p>Примерное соотношение в классическом кето:</p>
          <table>
            <thead>
              <tr>
                <th>Нутриент</th>
                <th>Доля рациона</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Жиры</strong></td>
                <td>70–75%</td>
              </tr>
              <tr>
                <td><strong>Белки</strong></td>
                <td>20–25%</td>
              </tr>
              <tr>
                <td><strong>Углеводы</strong></td>
                <td>5–10%</td>
              </tr>
            </tbody>
          </table>

          <h2>Потенциальная польза</h2>
          <ul>
            <li><strong>Снижение веса</strong> — за счёт контроля аппетита и калорий</li>
            <li><strong>Стабильный уровень сахара</strong> — меньше скачков глюкозы и инсулина</li>
            <li><strong>Ровная энергия</strong> — без «качелей» после углеводных перекусов</li>
            <li><strong>Помощь при инсулинорезистентности</strong> — под контролем специалиста</li>
            <li><strong>Медицинское применение</strong> — кето доказано помогает при некоторых формах эпилепсии</li>
          </ul>

          <h2>Риски и побочные эффекты</h2>
          <p>
            В первые дни многие сталкиваются с «кето-гриппом»: слабость, головная
            боль, раздражительность. Обычно это проходит за неделю. Но есть и более
            серьёзные риски при длительном или неправильном кето:
          </p>
          <ul>
            <li>Дефицит клетчатки, витаминов и минералов</li>
            <li>Нарушения работы ЖКТ (запоры)</li>
            <li>Повышение «плохого» холестерина у части людей</li>
            <li>Нагрузка на почки и печень при избытке белка/жира</li>
            <li>Срывы из-за жёстких ограничений</li>
          </ul>

          <h2>Кому кето противопоказано</h2>
          <p>Кето-диета <strong>не подходит</strong> или требует осторожности при:</p>
          <ul>
            <li>Беременности и грудном вскармливании</li>
            <li>Заболеваниях почек и печени</li>
            <li>Панкреатите и проблемах с желчным пузырём</li>
            <li>Сахарном диабете 1 типа (риск кетоацидоза)</li>
            <li>Расстройствах пищевого поведения</li>
            <li>Детском и подростковом возрасте (без показаний врача)</li>
          </ul>

          <blockquote>
            Кето — это лечебный инструмент, а не модная диета «на лето». Подходить к
            нему стоит осознанно и желательно под наблюдением.
          </blockquote>

          <h2>Как начать безопасно</h2>
          <ul>
            <li>Сдайте базовые анализы (биохимия, липидный профиль) до старта</li>
            <li>Переходите плавно, снижая углеводы постепенно</li>
            <li>Следите за электролитами (натрий, калий, магний)</li>
            <li>Делайте упор на качественные жиры: рыба, оливковое масло, авокадо, орехи</li>
            <li>Не забывайте про зелень и низкоуглеводные овощи</li>
            <li>Контролируйте самочувствие и анализы в динамике</li>
          </ul>

          <GeneticsCallout lead="Насколько хорошо вы переносите жиры и углеводы, во многом определяет генетика. Тест показывает, подходит ли вам высокожировое питание в принципе и как ваш организм реагирует на разные типы жиров — это избавляет от экспериментов вслепую." />

          <h2>Вывод</h2>
          <p>
            Кето-диета может быть эффективным инструментом для снижения веса и работы
            с инсулинорезистентностью — но только при грамотном подходе и отсутствии
            противопоказаний. Это не универсальное решение: то, что помогло знакомой,
            может навредить вам.
          </p>
          <p>
            Прежде чем начинать, разумно проверить анализы и составить план с
            нутрициологом — так вы получите пользу и избежите рисков.
          </p>
        </div>

        <ArticleCTA />
      </article>

      <RelatedArticles currentSlug="keto-dieta-polza-i-protivopokazaniya" />
    </>
  );
}
