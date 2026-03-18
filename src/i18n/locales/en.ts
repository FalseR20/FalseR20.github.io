import type { TranslationResource } from "@/i18n/types";

export const enTranslation: TranslationResource = {
  meta: {
    title: "Mikhail Krupenkov | CV",
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
    experience: {
      title: "Professional Experience",
      description:
        "Employment history listed from most recent to earlier roles.",
    },
    education: {
      title: "Education & Certifications",
      institution: "Institution",
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
      title: "Python Backend Developer",
      summary:
        "A reliable and open-minded developer with extensive experience in new technologies and knowledge.",
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
          endIsEstimated: true,
        },
        location: "On-site",
        bullets: [
          "Built an ML-powered embedding search solution and integrated it with internal services across both backend and frontend layers.",
          "Developed and deployed the CAB RW mobile application, including release delivery to the Apple App Store.",
          "Maintained and extended large legacy systems critical to Belarusian Railway operations.",
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
        },
        location: "Remote",
        bullets: [
          "Developed backend functionality for a large Django-based restaurant platform.",
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
        },
        location: "Remote",
        bullets: [
          "Built backend services for AI processing pipelines and related automation workflows.",
          "Developed a Flask service for translation and preprocessing of knowledge formats.",
          "Contributed to Python libraries.",
        ],
      },
    ],
    education: [
      {
        institution: "Brest State Technical University",
        degree: "Computer Science",
        period: "2020 - 2024",
      },
      {
        institution: "Kaspersky Lab",
        degree: "Security",
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
          "SQL & NoSQL",
          "Deployment skills",
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
        title: "Common",
        items: [
          "Git",
          "Coding LLMs",
          "CI automation",
          "Nginx",
          "Cloud platforms",
        ],
      },
    ],
  },
};
