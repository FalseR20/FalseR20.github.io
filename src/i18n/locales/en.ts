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
        "Python Backend Developer with 4+ years of commercial experience in production APIs, backend integrations, and legacy modernization. Core stack: Django, FastAPI/Litestar, PostgreSQL, Docker, CI/CD, Celery, Redis, RabbitMQ. Experienced in AI integrations: semantic search, LLM integrations. English B2; open to remote/hybrid roles.",
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
        label: "Location",
        value: "Brest, Belarus",
      },
    ],
    experience: [
      {
        company: "Belarusian Railway",
        role: "Middle Python Backend Developer",
        period: {
          start: {
            month: "July",
            year: "2024",
          },
          end: {
            label: "Present",
          },
          duration: "1 year 10 months of 2 years",
          endIsEstimated: true,
        },
        location: "On-site",
        bullets: [
          "Built an embeddings-based semantic search service and integrated it with internal systems; owned the Python APIs and supporting React/TypeScript interface.",
          "Containerized and delivered production services with Docker, Nginx, CI/CD pipelines, and repeatable deployment workflows.",
          "Delivered the CAB RW Flutter/Firebase app to the Apple App Store, handling backend integrations and production release support.",
          "Maintained mission-critical legacy systems for railway operations, working with PostgreSQL, Oracle Database, SQL, and NoSQL integrations.",
        ],
      },
      {
        company: "Atlant Software",
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
          "Developed Django backend features and REST APIs for a large restaurant platform, working with business logic, PostgreSQL data models, and production functionality.",
          "Maintained backend tests, participated in code review and Git workflow, and supported CI/CD-based delivery processes.",
        ],
      },
      {
        company: "Intelligent Semantic Systems",
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
          "Built Python backend services for AI pipelines, automation workflows, and internal integrations.",
          "Developed a Flask service for translation and preprocessing of knowledge-base formats, with tests and background-processing support.",
          "Contributed to internal Python libraries and async/background job processing used across products.",
        ],
      },
    ],
    education: [
      {
        type: "education",
        institution: "Brest State Technical University",
        degree: "Software Engineering",
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
      { name: "English", level: "B2" },
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
        title: "Async",
        items: ["asyncio", "Celery", "RabbitMQ", "Redis"],
      },
      {
        title: "Infrastructure",
        items: ["Docker", "Nginx", "CI/CD", "Kubernetes", "Cloud"],
      },
      {
        title: "Engineering",
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
        title: "AI & Search",
        items: ["Coding LLMs", "Semantic search", "LLM integrations"],
      },
      {
        title: "Additional",
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
