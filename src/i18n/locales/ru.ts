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
      title: "Middle Python Backend Developer",
      summary:
        "Python разработчик с опытом Django, FastAPI/Litestar, PostgreSQL, Docker, CI/CD и AI-интеграций. Работал над production-сервисами, мобильой публикацией и legacy-системами; открыт к remote/hybrid, English B2.",
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
          "Разработал semantic search на embeddings и интегрировал его с внутренними сервисами; реализовал Python backend и React/TypeScript frontend.",
          "Настраивал delivery для production-сервисов: Docker, Nginx, деплой и CI/CD-процессы.",
          "Разработал и выпустил мобильное приложение CAB RW на Flutter/Firebase, включая публикацию в App Store.",
          "Поддерживал крупные legacy-системы, критичные для работы БЧ, включая интеграции с PostgreSQL, OracleSQL и NoSQL-хранилищами.",
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
          "Разрабатывал Django backend и REST API для крупной ресторанной платформы с использованием PostgreSQL.",
          "Поддерживал production-функциональность, backend-тесты, Git workflow и CI/CD-процессы.",
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
          "Разрабатывал Python backend-сервисы для AI pipelines и связанных процессов автоматизации.",
          "Разрабатывал Flask-сервис для перевода и предобработки форматов знаний, включая тестирование и поддержку фоновой обработки.",
          "Участвовал в разработке Python-библиотек и async/background processing для внутренних продуктов.",
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
          "REST API",
          "Git",
          "PostgreSQL",
          "SQL/NoSQL",
        ],
      },
      {
        title: "Архитектура",
        items: ["System design", "API design", "Clean Architecture"],
      },
      {
        title: "Инфраструктура",
        items: [
          "Redis",
          "Celery/RabbitMQ",
          "Docker",
          "CI/CD",
          "Nginx",
          "Kubernetes",
          "Cloud platforms",
        ],
      },
      {
        title: "Тестирование",
        items: ["pytest", "Unit/integration tests", "Code review"],
      },
      {
        title: "AI/LLM",
        items: ["RAG", "LLMs", "Coding LLMs"],
      },
      {
        title: "Frontend",
        items: ["TypeScript", "React", "Bootstrap", "Tailwind"],
      },
      {
        title: "Mobile",
        items: ["Dart", "Flutter", "Firebase", "Apple Developer"],
      },
    ],
  },
};
