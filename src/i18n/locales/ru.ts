import type { TranslationResource } from "@/i18n/types";

export const ruTranslation: TranslationResource = {
  meta: {
    title: "Михаил Крупенков Middle Python Backend Developer",
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
        "Python backend-разработчик с 4+ годами коммерческого опыта. В Белорусской железной дороге запускал сервисы в production, сделал семантический поиск на embeddings и довёл мобильное приложение до Apple App Store. Собираю новый backend на Django/FastAPI и держу критичный legacy на PostgreSQL/Oracle. Стек: Python, Django/DRF, FastAPI, PostgreSQL, Docker, CI/CD, Celery, Redis. Открыт к удалёнке, гибриду и переезду.",
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
        value: "falser",
        href: "https://www.linkedin.com/in/falser/",
      },
      {
        icon: "github",
        label: "GitHub",
        value: "FalseR20",
        href: "https://github.com/FalseR20",
      },
      {
        icon: "location",
        label: "Локация",
        value: "Брест · Минск",
      },
    ],
    experience: [
      {
        company: "Белорусская железная дорога",
        companyContext: "Национальный перевозчик · внутренние IT-системы",
        role: "Middle Python Backend Developer",
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
        },
        location: "Офис",
        bullets: [
          "Разработал и внедрил сервис семантического поиска на embeddings: Python API, стыковка с внутренними системами БЧ, UI на React/TypeScript.",
          "Настроил production-поставку сервисов: Docker, Nginx, CI/CD — воспроизводимый деплой вместо ручной выкладки.",
          "Довёл приложение CAB RW (Flutter/Firebase) до релиза в Apple App Store, включая backend-интеграции и сопровождение публикации.",
          "Сопровождал критичные legacy-системы операционных процессов БЧ (PostgreSQL, Oracle, SQL/NoSQL) — контуры, которые нельзя останавливать.",
        ],
      },
      {
        company: "Atlant Software",
        companyContext: "Ресторанная платформа",
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
          "Разрабатывал backend на Django и REST API для крупной ресторанной платформы: бизнес-логика, модели PostgreSQL, интеграции.",
          "Держал production-контур: pytest, code review, Git-flow, CI/CD.",
        ],
      },
      {
        company: "Intelligent Semantic Systems",
        companyContext: "AI / базы знаний",
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
          "Разрабатывал Python-сервисы для AI-пайплайнов, автоматизации и внутренних интеграций.",
          "Сделал Flask-сервис перевода и предобработки форматов баз знаний: тесты и фоновая обработка.",
          "Развивал внутренние Python-библиотеки и асинхронную/фоновую обработку для продуктовых команд.",
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
      { name: "Английский", level: "B1+" },
    ],
    skillGroups: [
      {
        title: "Core",
        items: [
          "Python",
          "Django",
          "DRF",
          "FastAPI",
          "Litestar",
          "Flask",
          "Pydantic",
          "asyncio",
          "OpenAPI",
          "pytest",
          "Docker",
          "CI/CD",
        ],
      },
      {
        title: "Brokers",
        items: ["Redis", "Celery", "RabbitMQ", "Kafka"],
      },
      {
        title: "Database",
        items: [
          "PostgreSQL",
          "SQLAlchemy",
          "Alembic",
          "Django ORM",
          "Oracle",
          "MongoDB",
        ],
      },
      {
        title: "Monitoring",
        items: ["Prometheus", "Grafana", "Sentry"],
      },
      {
        title: "Дополнительно",
        items: [
          "Nginx",
          "TypeScript",
          "React",
          "Flutter",
          "Semantic search",
          "LLM integrations",
        ],
      },
    ],
  },
};
