export type ContactIcon = "mail" | "linkedin" | "github" | "location";

export type CvProfile = {
  fullName: string;
  title: string;
  summary: string;
};

export type ContactItem = {
  icon: ContactIcon;
  label: string;
  value: string;
  href?: string;
};

export type ExperienceDate = {
  month: string;
  year: string;
};

export type ExperiencePeriod = {
  start: ExperienceDate;
  end?: ExperienceDate;
  endIsEstimated?: boolean;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: ExperiencePeriod;
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

export type CvData = {
  profile: CvProfile;
  contacts: ContactItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  languages: LanguageItem[];
  skillGroups: SkillGroup[];
};
