import type { TranslationResource } from "@/i18n/types";

export const ruTranslation: TranslationResource = {
  meta: {
    title: "Михаил Крупенков CV",
  },
  ui: {
    localeSwitcher: {
      label: "Язык",
      english: "Английский",
      russian: "Русский",
    },
    themeSwitcher: {
      switchToLight: "Переключить на светлую тему",
      switchToDark: "Переключить на темную тему",
      light: "Светлая тема",
      dark: "Темная тема",
    },
    print: {
      onlineVersion: "Актуальная версия резюме",
    },
    experience: {
      title: "Коммерческий опыт",
      description: "История занятости от самой новой роли к более ранним.",
    },
    education: {
      title: "Образование и сертификация",
      institution: "Учебное заведение или курс",
    },
    languages: {
      title: "Языки",
      label: "Язык",
    },
    skills: {
      title: "Технические навыки",
      description:
        "Инструменты и технологии, которые были использованы в задачах.",
      domain: "Направление",
    },
  },
  cv: {
    profile: {
      fullName: "Михаил Крупенков",
      title: "Python Backend Developer",
      summary:
        "Надежный и открытый разработчик с большим опытом работы с современными технологиями.",
    },
    contacts: [
      {
        icon: "mail",
        label: "Почта",
        value: "work@falser.dev",
        href: "mailto:work@falser.dev",
      },
      {
        icon: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/falser",
        href: "https://www.linkedin.com/in/falser/",
      },
      {
        icon: "github",
        label: "GitHub",
        value: "github.com/FalseR20",
        href: "https://github.com/FalseR20",
      },
      {
        icon: "location",
        label: "Локация",
        value: "Брест, Беларусь",
      },
    ],
    experience: [
      {
        company: "Беларуская чыгунка",
        role: "Middle Fullstack Developer",
        period: {
          start: {
            month: "Июль",
            year: "2024",
          },
          end: {
            month: "Июль",
            year: "2026",
          },
          duration: "2 года",
          endIsEstimated: true,
        },
        location: "Офис",
        bullets: [
          "Разработал ИИ-решение для поиска по эмбеддингам и интегрировал его с внутренними сервисами. Реализовал и backend, и frontend.",
          "Разработал и выпустил мобильное приложение CAB RW, включая публикацию в AppStore.",
          "Поддерживал и развивал крупные legacy-системы, критичные для работы БЧ.",
        ],
      },
      {
        company: "Atlant Software",
        role: "Middle Python Backend Developer",
        period: {
          start: {
            month: "Ноябрь",
            year: "2023",
          },
          end: {
            month: "Июль",
            year: "2024",
          },
          duration: "9 месяцев",
        },
        location: "Удаленно",
        bullets: [
          "Разрабатывал backend-функциональность для крупной ресторанной платформы на Django.",
        ],
      },
      {
        company: "Intelligent Semantic Systems",
        role: "Junior Python Backend Developer",
        period: {
          start: {
            month: "Март",
            year: "2022",
          },
          end: {
            month: "Сентябрь",
            year: "2023",
          },
          duration: "1 год 7 месяцев",
        },
        location: "Удаленно",
        bullets: [
          "Разрабатывал backend-сервисы для ИИ-пайплайнов и связанных процессов автоматизации.",
          "Разработал сервис на Flask для перевода и предобработки форматов знаний.",
          "Участвовал в разработке Python-библиотек.",
        ],
      },
    ],
    education: [
      {
        institution: "БрГТУ",
        degree: "Программное обеспечение информационных технологий",
        period: "2020 - 2024",
      },
      {
        institution: "Kaspersky Lab",
        degree: "Безопасность",
        period: "2025",
      },
    ],
    languages: [
      { name: "Русский", level: "Родной" },
      { name: "Английский", level: "B2" },
    ],
    skillGroups: [
      {
        title: "Backend",
        items: [
          "Python",
          "Django",
          "FastAPI",
          "Litestar",
          "SQL и NoSQL",
          "Навыки деплоя",
        ],
      },
      {
        title: "Frontend",
        items: ["TypeScript", "React", "Bootstrap", "Tailwind"],
      },
      {
        title: "Mobile",
        items: ["Dart", "Flutter", "Firebase", "Apple developer"],
      },
      {
        title: "Общее",
        items: [
          "Git",
          "Coding LLMs",
          "CI-автоматизация",
          "Nginx",
          "Облачные платформы",
        ],
      },
    ],
  },
};
