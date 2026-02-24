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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
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
                  onClick={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
                  className="size-12 rounded-full text-muted-foreground hover:text-foreground"
                  aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                  title={theme === "dark" ? "Light theme" : "Dark theme"}
                >
                  {theme === "dark" ? <FiSun className="size-6" /> : <FiMoon className="size-6" />}
                </Button>
              </div>

              <div className="space-y-6">
                <div className="space-y-3 text-center lg:text-left">
                  <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{resumeProfile.fullName}</h1>
                  <p className="text-lg text-foreground/85 sm:text-xl">{resumeProfile.title}</p>
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
                        <Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                        <p className="min-w-0 break-all text-sm font-medium text-foreground sm:text-base">
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
                          "block hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <main>
          <Card className="bg-background">
            <CardHeader className="gap-3">
              <CardTitle className="text-2xl sm:text-3xl">Commercial Experience</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Timeline of roles and responsibilities in paid product and client work.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="relative ml-1 border-l pl-6">
                {experienceItems.map((item, index) => (
                  <li
                    key={`${item.company}-${item.role}`}
                    className={index === experienceItems.length - 1 ? "relative ml-4" : "relative ml-4 pb-4"}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[1.65rem] top-2 size-3.5 rounded-full border-2 border-background bg-primary"
                    />
                    <div className="rounded-lg border bg-card p-4 shadow-none sm:p-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold sm:text-xl">{item.role}</h3>
                          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                            {item.company} · {item.location}
                          </p>
                        </div>
                        <span className="inline-flex w-fit rounded-md border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
                          {item.period}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2.5 text-sm leading-6 text-muted-foreground sm:text-base">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2.5">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/70" aria-hidden="true" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </main>

        <aside className="space-y-6">
          <Card className="bg-background">
            <CardHeader className="gap-2">
              <CardTitle className="text-2xl sm:text-3xl">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {educationItems.map((item) => (
                <div key={`${item.institution}-${item.degree}`} className="rounded-lg border bg-card p-4 shadow-none sm:p-5">
                  <p className="text-base font-medium sm:text-lg">{item.degree}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">{item.institution}</p>
                  <p className="mt-2.5 text-xs text-muted-foreground sm:text-sm">{item.period}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardHeader className="gap-2">
              <CardTitle className="text-2xl sm:text-3xl">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {languageItems.map((language) => (
                  <li
                    key={language.name}
                    className="flex items-center justify-between rounded-lg border bg-card px-4 py-3.5 text-sm shadow-none sm:px-5 sm:py-4 sm:text-base"
                  >
                    <span className="font-medium">{language.name}</span>
                    <span className="text-muted-foreground">{language.level}</span>
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
            <CardContent className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.title} className="space-y-3">
                  <h3 className="text-sm font-medium text-muted-foreground sm:text-base">{group.title}</h3>
                  <div className="flex flex-wrap gap-2.5">
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
        </aside>
      </div>
    </div>
  );
}

export default App;
