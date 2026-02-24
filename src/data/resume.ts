import type { IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

export type ContactItem = {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
};

export type LanguageItem = {
  name: string;
  level: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const resumeProfile = {
  fullName: "Name Surname",
  title: "Software Developer",
  summary:
    "Product-minded developer focused on building clean, reliable web interfaces and improving user experience through practical engineering decisions.",
};

export const contactItems: ContactItem[] = [
  {
    icon: FiMail,
    label: "Email",
    value: "you@example.com",
    href: "mailto:you@example.com",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://linkedin.com/in/your-profile",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/your-username",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Tbilisi, Georgia",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: "Tech Product Company",
    role: "Software Developer",
    period: "2023 - Present",
    location: "Remote",
    bullets: [
      "Developed and shipped product features for a customer-facing web platform using React and TypeScript.",
      "Collaborated with design and backend teams to refine requirements and improve delivery quality.",
      "Maintained reusable UI components and improved code quality through reviews and refactoring.",
    ],
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2021 - 2023",
    location: "Hybrid",
    bullets: [
      "Built responsive interfaces for commercial client projects with a mobile-first approach.",
      "Integrated REST APIs and implemented validation flows for forms and dashboards.",
      "Improved page performance and accessibility across multiple projects.",
    ],
  },
  {
    company: "Startup Studio",
    role: "Junior Web Developer",
    period: "2019 - 2021",
    location: "On-site",
    bullets: [
      "Implemented UI tasks from Figma and supported release cycles for MVP products.",
      "Fixed production issues and coordinated QA feedback with cross-functional teammates.",
      "Wrote maintainable frontend code and contributed to internal component reuse.",
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    institution: "University Name",
    degree: "B.Sc. in Computer Science",
    period: "2015 - 2019",
  },
  {
    institution: "Online Coursework / Certifications",
    degree: "Frontend Architecture, Testing, Web Performance",
    period: "Ongoing",
  },
];

export const languageItems: LanguageItem[] = [
  { name: "Russian", level: "Native" },
  { name: "English", level: "B2 / Professional Working" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML", "CSS", "Vite/Bun"],
  },
  {
    title: "Backend / API",
    items: ["Node.js", "REST API", "PostgreSQL", "Prisma"],
  },
  {
    title: "Engineering",
    items: ["Git", "Code Review", "Testing", "CI/CD", "Agile/Scrum"],
  },
];
