import type { CvData } from "./cv.types";

// Edit this file with your own profile, contact, and CV data.
export const cvData = {
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
      period: "Jul 2024 - Jul 2026",
      location: "On-site",
      bullets: [
        "Built an ML-powered embedding search solution and integrated it with internal services across both backend and frontend layers.",
        "Developed and deployed the CAB RW mobile application, including release delivery to the Apple App Store.",
        "Maintained and extended large legacy systems critical to Belarusian Railway operations.",
      ],
    },
    {
      company: "Atlant Swftware",
      role: "Middle Python Backend Developer",
      period: "Nov 2024 - Jul 2024",
      location: "Remote",
      bullets: [
        "Developed backend functionality for a large Django-based restaurant platform.",
      ],
    },
    {
      company: "Intelligent Semantic Systems",
      role: "Junior Python Backend Developer",
      period: "Mar 2022 - Sep 2023",
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
} satisfies CvData;
