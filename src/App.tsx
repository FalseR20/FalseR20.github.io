import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMoon,
  FiSun,
} from "react-icons/fi";

import { cvData, type ContactIcon } from "@/data/cv";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import "./index.css";

type Theme = "light" | "dark";

const themeStorageKey = "cv-theme";
const contactIcons: Record<ContactIcon, IconType> = {
  mail: FiMail,
  linkedin: FiLinkedin,
  github: FiGithub,
  location: FiMapPin,
};

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(themeStorageKey);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function App() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const { contacts, education, experience, languages, profile, skillGroups } =
    cvData;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  return (
    <div className="mx-auto w-full max-w-7xl p-6">
      <Card className="overflow-hidden bg-background py-0">
        <CardContent className="relative px-5 py-5 sm:px-7 sm:py-6 lg:px-8 lg:py-8">
          <div className="absolute top-5 right-5 sm:top-6 sm:right-7 lg:top-8 lg:right-8">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() =>
                setTheme((currentTheme) =>
                  currentTheme === "dark" ? "light" : "dark",
                )
              }
              className="size-12 rounded-full text-muted-foreground hover:text-foreground"
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              title={theme === "dark" ? "Light theme" : "Dark theme"}
            >
              {theme === "dark" ? (
                <FiSun className="size-6" />
              ) : (
                <FiMoon className="size-6" />
              )}
            </Button>
          </div>

          <div className="space-y-6">
            <div className="space-y-3 pr-16 text-center sm:pr-20 lg:text-left">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {profile.fullName}
              </h1>
              <p className="text-lg text-foreground/85 sm:text-xl">
                {profile.title}
              </p>
              <p className="text-base leading-7 text-muted-foreground">
                {profile.summary}
              </p>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {contacts.map(({ icon, label, value, href }) => {
                const Icon = contactIcons[icon];
                const cardClassName =
                  "rounded-lg border bg-card px-4 py-3.5 shadow-none transition-colors";
                const content = (
                  <div className="flex items-start gap-3 text-left">
                    <Icon
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                        {label}
                      </p>
                      <p className="min-w-0 text-sm font-medium break-all text-foreground sm:text-base">
                        {value}
                      </p>
                    </div>
                  </div>
                );

                if (!href) {
                  return (
                    <div key={label} className={cardClassName}>
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className={cn(
                      cardClassName,
                      "block hover:bg-accent/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
                    )}
                    aria-label={`${label}: ${value}`}
                    title={value}
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      <main className="mt-6 space-y-6">
        <Card className="bg-background">
          <CardHeader className="gap-3">
            <CardTitle className="text-2xl sm:text-3xl">
              Professional Experience
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Employment history listed from most recent to earlier roles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="relative space-y-5">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-6 bottom-6 left-2.5 w-px -translate-x-1/2 bg-border sm:left-52.5"
              />
              {experience.map((item, index) => (
                <li
                  key={`${item.company}-${item.role}`}
                  className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-4 sm:grid-cols-[11rem_1.25rem_minmax(0,1fr)] sm:gap-6"
                >
                  <div className="hidden flex-col items-end gap-2 pt-5 text-right sm:flex">
                    <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                      {item.period}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.location}
                    </span>
                  </div>

                  <div className="relative flex justify-center">
                    {index === 0 ? (
                      <span
                        aria-hidden="true"
                        className="absolute top-0 left-1/2 h-6.5 w-2 -translate-x-1/2 bg-background"
                      />
                    ) : null}
                    {index === experience.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute top-6.5 bottom-0 left-1/2 w-2 -translate-x-1/2 bg-background"
                      />
                    ) : null}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute top-5 left-1/2 size-3 -translate-x-1/2 rounded-full ring-4 ring-background",
                        index === 0
                          ? "bg-primary"
                          : "border-2 border-primary bg-background",
                      )}
                    />
                  </div>

                  <article className="rounded-xl border bg-card p-5 shadow-none sm:p-6">
                    <div className="flex flex-wrap gap-2 sm:hidden">
                      <span className="inline-flex rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        {item.period}
                      </span>
                      <span className="inline-flex rounded-full border border-dashed px-3 py-1 text-xs font-medium text-muted-foreground">
                        {item.location}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 border-b border-border/70 pb-4 sm:mt-0 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                          {item.role}
                        </h3>
                        <p className="mt-1.5 text-sm font-medium text-foreground/85 sm:text-base">
                          {item.company}
                        </p>
                      </div>

                      {index === 0 ? (
                        <span className="inline-flex w-fit items-center rounded-full border bg-secondary px-3 py-1 text-xs font-semibold tracking-[0.18em] text-secondary-foreground uppercase">
                          Latest
                        </span>
                      ) : null}
                    </div>

                    <ul className="mt-4 space-y-2.5 pl-5 text-sm leading-6 text-muted-foreground marker:text-foreground/60 sm:text-base">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="list-disc">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-background">
          <CardHeader className="gap-2">
            <CardTitle className="text-2xl sm:text-3xl">
              Education & Certifications
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 lg:grid-cols-2">
            {education.map((item) => (
              <div
                key={`${item.institution}-${item.degree}`}
                className="rounded-xl border bg-card p-5 shadow-none"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border/70 pb-3">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                      Formation
                    </p>
                    <p className="mt-2 text-base font-medium sm:text-lg">
                      {item.institution}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border bg-secondary px-3 py-1 text-xs font-semibold tracking-[0.18em] text-secondary-foreground uppercase">
                    {item.period}
                  </span>
                </div>
                <p className="pt-3 text-sm leading-7 text-foreground/85 sm:text-base">
                  {item.degree}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-background">
          <CardHeader className="gap-2">
            <CardTitle className="text-2xl sm:text-3xl">Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 sm:grid-cols-2">
              {languages.map((language) => (
                <li
                  key={language.name}
                  className="rounded-xl border bg-card px-4 py-4 shadow-none sm:px-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                        Language
                      </p>
                      <p className="mt-2 text-base font-medium sm:text-lg">
                        {language.name}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full border bg-secondary px-3 py-1 text-xs font-semibold tracking-[0.18em] text-secondary-foreground uppercase">
                      {language.level}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-background">
          <CardHeader className="gap-2">
            <CardTitle className="text-2xl sm:text-3xl">
              Technical Skills
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Tools and technologies used across backend, frontend, mobile, and
              delivery work.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="grid gap-3 rounded-xl border bg-card p-4 shadow-none sm:p-5 md:grid-cols-[10rem_minmax(0,1fr)] md:items-start"
              >
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                    Domain
                  </p>
                  <h3 className="mt-2 text-sm font-medium tracking-[0.18em] text-foreground uppercase">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-foreground/85 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default App;
