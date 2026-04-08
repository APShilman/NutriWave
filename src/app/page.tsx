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
import { WaveDivider } from "@/components/DecorativeElements";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Анна Шильман — клинический нутрициолог",
      url: "https://nutriwave.ru",
      telephone: "+79222333844",
      description:
        "Клинический и перинатальный нутрициолог. Индивидуальное сопровождение, детокс и кето программы, генетика питания.",
      priceRange: "$$",
      areaServed: "RU",
      sameAs: ["https://t.me/nutriwave", "https://vk.com/nutriwave"],
    },
    {
      "@type": "FAQPage",
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
            text: "Стоимость зависит от формата работы. Для уточнения актуальных цен свяжитесь через форму на сайте или в Telegram.",
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
      <Script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <div className="relative nutri-pattern">
      <main>
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
