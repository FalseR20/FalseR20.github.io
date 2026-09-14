import type { TranslationResource } from "@/i18n/types";

export const enTranslation: TranslationResource = {
  meta: {
    title: "Mikhail Krupenkov Middle Python Backend Developer",
  },
  ui: {
    localeSwitcher: {
      label: "Language",
      english: "English",
      russian: "Russian",
    },
    themeSwitcher: {
      switchToLight: "Switch to light theme",
      switchToDark: "Switch to dark theme",
      light: "Light theme",
      dark: "Dark theme",
    },
    print: {
      onlineVersion: "Current CV version",
      printResume: "Print CV",
    },
    experience: {
      title: "Professional Experience",
    },
    education: {
      title: "Education",
      labels: {
        education: "Institution",
        certification: "Course",
      },
    },
    languages: {
      title: "Languages",
      label: "Language",
    },
    skills: {
      title: "Technical Skills",
      domain: "Domain",
    },
  },
  cv: {
    profile: {
      fullName: "Mikhail Krupenkov",
      title: "Middle Python Backend Developer",
      summary:
        "Python backend developer with 4+ years of commercial experience. At Belarusian Railway I shipped services to production, built embeddings-based semantic search, and took a mobile app to the Apple App Store. I build new Django/FastAPI backends and keep critical legacy running on PostgreSQL/Oracle. Stack: Python, Django/DRF, FastAPI, PostgreSQL, Docker, CI/CD, Celery, Redis. Open to remote, hybrid, and relocation.",
    },
    contacts: [
      {
        icon: "mail",
        label: "Email",
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
        label: "Location",
        value: "Brest · Minsk",
      },
    ],
    experience: [
      {
        company: "Belarusian Railway",
        companyContext: "National railway operator · internal IT systems",
        role: "Middle Python Backend Developer",
        period: {
          start: {
            month: "July",
            year: "2024",
          },
          end: {
            month: "July",
            year: "2026",
          },
          duration: "2 years",
        },
        location: "On-site",
        bullets: [
          "Designed and shipped an embeddings-based semantic search service: Python API, integration with internal railway systems, and a React/TypeScript UI.",
          "Set up production delivery for services: Docker, Nginx, CI/CD — repeatable deploys instead of manual releases.",
          "Took the CAB RW app (Flutter/Firebase) to the Apple App Store, including backend integrations and release support.",
          "Kept mission-critical railway operations systems running (PostgreSQL, Oracle, SQL/NoSQL) — systems that cannot go down.",
        ],
      },
      {
        company: "Atlant Software",
        companyContext: "Restaurant platform",
        role: "Middle Python Backend Developer",
        period: {
          start: {
            month: "November",
            year: "2023",
          },
          end: {
            month: "July",
            year: "2024",
          },
          duration: "9 months",
        },
        location: "Remote",
        bullets: [
          "Built Django backend features and REST APIs for a large restaurant platform: business logic, PostgreSQL models, integrations.",
          "Owned the production quality loop: pytest, code review, Git workflow, and CI/CD delivery.",
        ],
      },
      {
        company: "Intelligent Semantic Systems",
        companyContext: "AI / knowledge bases",
        role: "Junior Python Backend Developer",
        period: {
          start: {
            month: "March",
            year: "2022",
          },
          end: {
            month: "September",
            year: "2023",
          },
          duration: "1 year 7 months",
        },
        location: "Remote",
        bullets: [
          "Built Python backend services for AI pipelines, automation, and internal integrations.",
          "Shipped a Flask service for translation and preprocessing of knowledge-base formats, with tests and background processing.",
          "Developed internal Python libraries and async/background job processing used by product teams.",
        ],
      },
    ],
    education: [
      {
        type: "education",
        institution: "Brest State Technical University",
        degree: "Computer Science",
        period: "2020 - 2024",
      },
      {
        type: "certification",
        institution: "Kaspersky Lab",
        degree: "Basic Cybersecurity Program",
        period: "2025",
      },
    ],
    languages: [
      { name: "Russian", level: "Native" },
      { name: "English", level: "B1+" },
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
        title: "Additional",
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
