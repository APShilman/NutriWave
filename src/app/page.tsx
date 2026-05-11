import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Gift from "@/components/Gift";
import Cases from "@/components/Cases";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const SITE_URL = "https://nutriwave.pro";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "NutriWave — Анна Шильман",
      inLanguage: "ru-RU",
      description:
        "Клинический и перинатальный нутрициолог Анна Шильман. Индивидуальные онлайн-консультации, детокс и кето программы, генетика питания.",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Анна Шильман",
      alternateName: "Anna Shilman",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/photos/anna-hero.webp`,
      jobTitle: "Клинический и перинатальный нутрициолог, натуропат",
      description:
        "Клинический и перинатальный нутрициолог, натуропат, консультант по генетике. Доказательная превентивная медицина, индивидуальный подход.",
      knowsAbout: [
        "Клиническая нутрициология",
        "Перинатальная нутрициология",
        "Натуропатия",
        "Генетика питания",
        "Нутрицевтическая поддержка",
        "Детокс-программы",
        "Кето-протоколы питания",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Диплом о профессиональной переподготовке",
          name: "Клиническая нутрициология",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Сертификат",
          name: "Специалист по интерпретации генетических тестов (MyGenetics)",
        },
      ],
      worksFor: { "@id": `${SITE_URL}/#business` },
      sameAs: [
        "https://t.me/AnnaNutriWave",
        "https://t.me/NutriWav",
        "https://vk.com/club236057383",
      ],
    },
    {
      "@type": ["ProfessionalService", "MedicalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: "NutriWave — Анна Шильман",
      url: `${SITE_URL}/`,
      telephone: "+7-922-233-38-44",
      image: `${SITE_URL}/images/photos/anna-hero.webp`,
      logo: `${SITE_URL}/favicon.svg`,
      description:
        "Клинический и перинатальный нутрициолог. Индивидуальное сопровождение, детокс и кето программы, генетика питания.",
      priceRange: "₽₽",
      areaServed: { "@type": "Country", name: "Россия" },
      availableLanguage: "ru",
      founder: { "@id": `${SITE_URL}/#person` },
      makesOffer: { "@id": `${SITE_URL}/#consultation` },
      sameAs: [
        "https://t.me/AnnaNutriWave",
        "https://t.me/NutriWav",
        "https://vk.com/club236057383",
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#consultation`,
      serviceType: "Консультация нутрициолога",
      name: "Индивидуальная консультация нутрициолога",
      description:
        "Анализ анкеты здоровья, разбор анализов, рекомендации по чек-апу и образу жизни, индивидуальный план питания, нутрицевтическая поддержка, PDF-памятка.",
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: { "@type": "Country", name: "Россия" },
      audience: {
        "@type": "PeopleAudience",
        audienceType:
          "Хроническая усталость, проблемы ЖКТ, гормональные нарушения, снижение веса, подготовка к беременности, послеродовое восстановление, менопауза",
      },
      availableChannel: [
        {
          "@type": "ServiceChannel",
          name: "Онлайн (Zoom / Telegram)",
          serviceUrl: `${SITE_URL}/#contacts`,
          availableLanguage: "ru",
        },
        {
          "@type": "ServiceChannel",
          name: "Офлайн в Челябинске",
          availableLanguage: "ru",
        },
      ],
      offers: {
        "@type": "Offer",
        price: "5000",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#contacts`,
      },
    },
    {
      "@type": "Review",
      "@id": `${SITE_URL}/#review-maria`,
      itemReviewed: { "@id": `${SITE_URL}/#consultation` },
      author: { "@type": "Person", name: "Мария", address: "Челябинск" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody:
        "Огромное спасибо! Вижу результат по коже, я прям другой человек. Энергия появилась, на тренировки хожу, по вечерам пузо не вздувается. Питания придерживаюсь, чувствую себя с ним лучше.",
    },
    {
      "@type": "Review",
      "@id": `${SITE_URL}/#review-elena`,
      itemReviewed: { "@id": `${SITE_URL}/#consultation` },
      author: { "@type": "Person", name: "Елена", address: "Екатеринбург" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody:
        "Получила повторные результаты анализов — Вы не представляете как я рада. Полгода назад гемоглобин был 95, ферритин на дне, а сейчас норма. И я это чувствую! Благодарю за подход и терпение.",
    },
    {
      "@type": "DigitalDocument",
      "@id": `${SITE_URL}/#guide-nutrition-plate`,
      name: "Тарелка здорового питания",
      description:
        "Наглядное руководство по составлению сбалансированного рациона: пропорции белков, жиров, углеводов и клетчатки в каждом приёме пищи.",
      url: `${SITE_URL}/guides/guide-nutrition-plate.pdf`,
      encodingFormat: "application/pdf",
      inLanguage: "ru-RU",
      isAccessibleForFree: true,
      author: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "DigitalDocument",
      "@id": `${SITE_URL}/#guide-sleep`,
      name: "Здоровый сон",
      description:
        "Научно обоснованные рекомендации по гигиене сна: режим, мелатонин, питание перед сном и условия для восстановления.",
      url: `${SITE_URL}/guides/guide-sleep.pdf`,
      encodingFormat: "application/pdf",
      inLanguage: "ru-RU",
      isAccessibleForFree: true,
      author: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "DigitalDocument",
      "@id": `${SITE_URL}/#guide-stress`,
      name: "Работа со стрессом",
      description:
        "Практические техники управления стрессом, дыхательные упражнения и стратегии восстановления нервной системы.",
      url: `${SITE_URL}/guides/guide-stress.pdf`,
      encodingFormat: "application/pdf",
      inLanguage: "ru-RU",
      isAccessibleForFree: true,
      author: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "DigitalDocument",
      "@id": `${SITE_URL}/#guide-lymph`,
      name: "Всё про лимфу",
      description:
        "Как поддержать лимфатическую систему: самомассаж, питание, движение и привычки для снятия отёчности и укрепления иммунитета.",
      url: `${SITE_URL}/guides/guide-lymph.pdf`,
      encodingFormat: "application/pdf",
      inLanguage: "ru-RU",
      isAccessibleForFree: true,
      author: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Главная",
          item: `${SITE_URL}/`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#faq h2", "#faq button", "#faq p"],
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "Что делает клинический нутрициолог?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Клинический нутрициолог анализирует ваше состояние здоровья, результаты анализов и генетические особенности, чтобы разработать персональный план питания и нутрицевтической поддержки.",
          },
        },
        {
          "@type": "Question",
          name: "Как проходит консультация нутрициолога онлайн?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Перед консультацией вы заполняете подробную анкету здоровья и присылаете результаты анализов. На онлайн-встрече мы детально разбираем ваши данные, определяем цели и составляем план действий.",
          },
        },
        {
          "@type": "Question",
          name: "Чем нутрициолог отличается от диетолога?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Диетолог работает с лечебным питанием при заболеваниях. Нутрициолог фокусируется на оптимизации питания для улучшения здоровья, профилактике и работе с дефицитами нутриентов.",
          },
        },
        {
          "@type": "Question",
          name: "Зачем нужны генетические исследования для питания?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Генетика определяет до 40% особенностей вашего метаболизма. ДНК-тест показывает, как ваш организм усваивает жиры, углеводы, витамины и другие вещества.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько стоит консультация нутрициолога?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Индивидуальная консультация — 5 000 ₽. Для уточнения актуальных цен свяжитесь через сайт или в Telegram.",
          },
        },
        {
          "@type": "Question",
          name: "Что такое перинатальная нутрициология?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Специализация, посвящённая питанию при планировании беременности, во время беременности и в послеродовой период.",
          },
        },
        {
          "@type": "Question",
          name: "Что входит в детокс-программу?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Научный детокс — это поддержка естественных механизмов детоксикации организма через питание, нутрицевтики и изменение образа жизни.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли обратиться к нутрициологу онлайн?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, онлайн-консультации проходят так же эффективно. Мы работаем через Zoom или Telegram видеосвязь.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-full focus:shadow-lg"
      >
        К основному содержимому
      </a>
      <Header />
      <div className="relative nutri-pattern">
        <main id="main">
          <Hero />
          <About />
          <Services />
          <Gift />
          <Partners />
          <Cases />
          <Reviews />
          <FAQ />
          <Contacts />
        </main>
      </div>
      <Footer />
      <FloatingCTA />
    </>
  );
}
