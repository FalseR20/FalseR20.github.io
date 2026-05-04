import type { TranslationResource } from "@/i18n/types";

export const ruTranslation: TranslationResource = {
  meta: {
    title: "Михаил Крупенков Python Backend Developer",
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
      printResume: "Печать резюме",
    },
    experience: {
      title: "Коммерческий опыт",
    },
    education: {
      title: "Образование",
      labels: {
        education: "Учебное заведение",
        certification: "Курс",
      },
    },
    languages: {
      title: "Языки",
      label: "Язык",
    },
    skills: {
      title: "Технические навыки",
      domain: "Направление",
    },
  },
  cv: {
    profile: {
      fullName: "Михаил Крупенков",
      title: "Middle Python Backend Developer",
      summary:
        "Python Backend Developer с 4+ годами коммерческого опыта в production API, backend-интеграциях и обслуживании legacy. Основной стек: Django, FastAPI/Litestar, PostgreSQL, Docker, CI/CD, Celery, Redis, RabbitMQ. Есть опыт AI-интеграций: semantic search, LLM integrations. English B2; открыт к remote/hybrid.",
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
        company: "Белорусская железная дорога",
        role: "Middle Python Backend Developer",
        period: {
          start: {
            month: "Июль",
            year: "2024",
          },
          end: {
            label: "Сейчас",
          },
          duration: "1 год 10 месяцев из 2 лет",
          endIsEstimated: true,
        },
        location: "Офис",
        bullets: [
          "Разработал сервис семантического поиска на embeddings и интегрировал его с внутренними системами; отвечал за Python API и вспомогательный React/TypeScript интерфейс.",
          "Настроил поставку production-сервисов: Docker, Nginx, CI/CD и воспроизводимые процессы деплоя.",
          "Довел мобильное приложение CAB RW на Flutter/Firebase до релиза в Apple App Store, включая backend-интеграции.",
          "Поддерживал критичные legacy-системы для операционных процессов БЧ, работал с PostgreSQL, Oracle Database, SQL и NoSQL-интеграциями.",
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
          "Разрабатывал backend-функциональность на Django и REST API для крупной ресторанной платформы на PostgreSQL.",
          "Поддерживал production-функции, backend-тесты, Git workflow, code review и CI/CD-процессы.",
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
          "Разрабатывал backend-сервисы на Python для AI-пайплайнов, автоматизации и внутренних интеграций.",
          "Создал Flask-сервис для перевода и предобработки форматов баз знаний, добавил тесты и поддержку фоновой обработки.",
          "Участвовал в развитии внутренних Python-библиотек и асинхронной фоновой обработки для продуктовых команд.",
        ],
      },
    ],
    education: [
      {
        type: "education",
        institution: "БрГТУ",
        degree: "Программное обеспечение информационных технологий",
        period: "2020 - 2024",
      },
      {
        type: "certification",
        institution: "Kaspersky Lab",
        degree: "Базовая программа по кибербезопасности",
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
          "Flask",
          "REST APIs",
          "API integrations",
          "PostgreSQL",
          "SQL",
          "NoSQL",
        ],
      },
      {
        title: "Асинхронность",
        items: ["asyncio", "Celery", "RabbitMQ", "Redis"],
      },
      {
        title: "Инженерия",
        items: [
          "System design",
          "API design",
          "Clean Architecture",
          "Git",
          "pytest",
          "Unit/integration tests",
          "Code review",
        ],
      },
      {
        title: "Инфраструктура",
        items: ["Docker", "Nginx", "CI/CD", "Kubernetes", "Cloud"],
      },
      {
        title: "AI & Search",
        items: ["Coding LLMs", "Semantic search", "LLM integrations"],
      },
      {
        title: "Дополнительно",
        items: [
          "TypeScript",
          "React",
          "Tailwind",
          "Dart",
          "Flutter",
          "Firebase",
          "Apple App Store",
        ],
      },
    ],
  },
};
