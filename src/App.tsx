import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import {
  contactItems,
  educationItems,
  experienceItems,
  languageItems,
  resumeProfile,
  skillGroups,
} from "@/data/resume";
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

import profilePlaceholder from "./profile-placeholder.svg";

type Theme = "light" | "dark";

const themeStorageKey = "resume-theme";

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

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  return (
    <div className="mx-auto w-full max-w-7xl p-6">
      <Card className="overflow-hidden bg-background py-0">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 sm:grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[360px_minmax(0,1fr)]">
            <div className="p-3 pb-0 sm:p-4 sm:pr-0">
              <img
                src={profilePlaceholder}
                alt="Profile placeholder"
                className="h-56 w-full object-contain sm:h-full sm:min-h-full"
              />
            </div>

            <div className="px-5 py-5 sm:px-7 sm:py-6 lg:px-8 lg:py-8">
              <div className="mb-5 flex justify-end">
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
                <div className="space-y-3 text-center lg:text-left">
                  <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    {resumeProfile.fullName}
                  </h1>
                  <p className="text-lg text-foreground/85 sm:text-xl">
                    {resumeProfile.title}
                  </p>
                  <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground lg:mx-0">
                    {resumeProfile.summary}
                  </p>
                </div>

                <div className="grid gap-2.5 sm:grid-cols-2">
                  {contactItems.map(({ icon: Icon, label, value, href }) => {
                    const cardClassName =
                      "rounded-lg border bg-card px-4 py-3 shadow-none transition-colors";
                    const content = (
                      <div className="flex items-center gap-3 text-left">
                        <Icon
                          className="size-4 shrink-0 text-muted-foreground"
                          aria-hidden="true"
                        />
                        <p className="min-w-0 text-sm font-medium break-all text-foreground sm:text-base">
                          <span className="sr-only">{label}: </span>
                          {value}
                        </p>
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
            </div>
          </div>
        </CardContent>
      </Card>

      <main className="mt-6 space-y-6">
        <Card className="bg-background">
          <CardHeader className="gap-3">
            <CardTitle className="text-2xl sm:text-3xl">
              Commercial Experience
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Timeline of roles and responsibilities in paid product and client
              work.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="relative space-y-5">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-6 bottom-6 left-2.5 w-px -translate-x-1/2 bg-border sm:left-52.5"
              />
              {experienceItems.map((item, index) => (
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
                    {index === experienceItems.length - 1 ? (
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

                  <article className="rounded-2xl border bg-card p-5 shadow-none transition-colors hover:bg-accent/15 sm:p-6">
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
                        <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
                          {item.company}
                        </p>
                      </div>

                      <span className="inline-flex w-fit items-center rounded-full border bg-secondary px-3 py-1 text-xs font-semibold tracking-[0.18em] text-secondary-foreground uppercase">
                        {String(experienceItems.length - index).padStart(
                          2,
                          "0",
                        )}
                      </span>
                    </div>

                    <ul className="mt-4 grid gap-3 lg:grid-cols-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-xl border bg-background/80 px-4 py-3 text-sm leading-6 text-muted-foreground sm:text-base"
                        >
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
            <CardTitle className="text-2xl sm:text-3xl">Education</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            {educationItems.map((item) => (
              <div
                key={`${item.institution}-${item.degree}`}
                className="rounded-xl border bg-card p-4 shadow-none sm:p-5"
              >
                <p className="text-base font-medium sm:text-lg">
                  {item.degree}
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
                  {item.institution}
                </p>
                <p className="mt-2.5 text-xs text-muted-foreground sm:text-sm">
                  {item.period}
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
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {languageItems.map((language) => (
                <li
                  key={language.name}
                  className="flex items-center justify-between rounded-xl border bg-card px-4 py-3.5 text-sm shadow-none sm:px-5 sm:py-4 sm:text-base"
                >
                  <span className="font-medium">{language.name}</span>
                  <span className="text-muted-foreground">
                    {language.level}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-background">
          <CardHeader className="gap-2">
            <CardTitle className="text-2xl sm:text-3xl">Skills</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Core tools and technologies used in day-to-day development.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-5 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border bg-card p-4 shadow-none sm:p-5"
              >
                <h3 className="text-sm font-medium text-muted-foreground sm:text-base">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border bg-secondary px-3 py-1.5 text-xs font-medium sm:text-sm"
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
