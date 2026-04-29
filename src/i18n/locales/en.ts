import type { TranslationResource } from "@/i18n/types";

export const enTranslation: TranslationResource = {
  meta: {
    title: "Mikhail Krupenkov CV",
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
      description:
        "Employment history listed from most recent to earlier roles.",
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
      description: "Tools and technologies used across work.",
      domain: "Domain",
    },
  },
  cv: {
    profile: {
      fullName: "Mikhail Krupenkov",
      title: "Middle Python Backend Developer",
      summary:
        "Python developer, open to remote/hybrid roles. Experienced with Django, FastAPI/Litestar, PostgreSQL, Docker, CI/CD, AI integrations, mobile release delivery, and legacy systems. English B2.",
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
        role: "Middle Fullstack Developer",
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
          endIsEstimated: true,
        },
        location: "On-site",
        bullets: [
          "Built semantic search on embeddings and integrated it with internal services, covering Python backend and React/TypeScript frontend.",
          "Configured production service delivery with Docker, Nginx, deployment workflows, and CI/CD processes.",
          "Developed and released the CAB RW mobile application with Flutter/Firebase, including delivery to the Apple App Store.",
          "Maintained large legacy systems critical to Belarusian Railway operations, including PostgreSQL, SQL, and NoSQL integrations.",
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
          "Developed Django backend and REST API functionality for a large restaurant platform using PostgreSQL.",
          "Supported production features, backend testing, Git workflow, and CI/CD processes.",
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
          "Built Python backend services for AI pipelines and related automation workflows.",
          "Developed a Flask service for translation and preprocessing of knowledge formats, including testing and background processing support.",
          "Contributed to Python libraries and async/background processing for internal products.",
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
          "REST API",
          "Git",
          "PostgreSQL",
          "SQL/NoSQL",
        ],
      },
      {
        title: "Architecture",
        items: ["System design", "API design", "Clean Architecture"],
      },
      {
        title: "Infrastructure",
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
        title: "Testing",
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
