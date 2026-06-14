import type { Variant } from "./ArticleHero";

export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  variant: Variant;
};

/* Newest first — order shown in the blog index */
export const ARTICLES: ArticleMeta[] = [
  {
    slug: "pitanie-pri-podgotovke-k-beremennosti",
    title: "Питание при подготовке к беременности: чек-лист для будущей мамы",
    excerpt:
      "Какие витамины и продукты важны при подготовке к беременности, какие анализы сдать и за сколько начинать готовиться.",
    date: "2026-05-13",
    readTime: "8 мин",
    tags: ["Беременность", "Питание"],
    variant: "pregnancy",
  },
  {
    slug: "keto-dieta-polza-i-protivopokazaniya",
    title: "Кето-диета: польза, вред и противопоказания",
    excerpt:
      "Как работает кето-диета, кому она помогает, а кому противопоказана. Плюсы, риски и как начать безопасно.",
    date: "2026-05-13",
    readTime: "9 мин",
    tags: ["Питание", "Диеты"],
    variant: "keto",
  },
  {
    slug: "detoks-s-chego-nachat",
    title: "Детокс-программа: с чего начать и как не навредить себе",
    excerpt:
      "Что такое детокс на самом деле, как организм очищается сам, с чего безопасно начать и каких ошибок избегать.",
    date: "2026-05-13",
    readTime: "8 мин",
    tags: ["Детокс", "Здоровье"],
    variant: "detox",
  },
  {
    slug: "nutritsiolog-vs-dietolog",
    title: "Нутрициолог и диетолог — в чём разница и к кому идти?",
    excerpt:
      "Разбираемся, чем отличается клинический нутрициолог от диетолога, какие задачи решает каждый специалист и когда к кому обращаться.",
    date: "2026-05-12",
    readTime: "7 мин",
    tags: ["Нутрициология", "Здоровье"],
    variant: "nutritionist",
  },
];
