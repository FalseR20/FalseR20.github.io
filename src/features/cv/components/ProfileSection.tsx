import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMoon,
  FiSun,
} from "react-icons/fi";

import { Card, CardContent } from "@/components/ui/card";
import { LocaleSwitcher } from "@/features/cv/components/LocaleSwitcher";
import type {
  ContactIcon,
  ContactItem,
  CvProfile,
} from "@/features/cv/data/cv";
import type { Locale } from "@/i18n/resources";
import type { Theme } from "@/features/cv/hooks/useThemePreference";
import { cn } from "@/lib/utils";

const contactIcons: Record<ContactIcon, IconType> = {
  mail: FiMail,
  linkedin: FiLinkedin,
  github: FiGithub,
  location: FiMapPin,
};

type ProfileSectionProps = {
  contacts: ContactItem[];
  locale: Locale;
  locales: readonly Locale[];
  onChangeLocale: (locale: Locale) => void;
  profile: CvProfile;
  theme: Theme;
  onToggleTheme: () => void;
};

export function ProfileSection({
  contacts,
  locale,
  locales,
  onChangeLocale,
  profile,
  theme,
  onToggleTheme,
}: ProfileSectionProps) {
  const { t } = useTranslation();

  return (
    <Card className="overflow-hidden bg-background py-0">
      <CardContent className="relative px-5 py-5 sm:px-7 sm:py-6 lg:px-8 lg:py-8">
        <div className="absolute top-5 right-5 flex items-center gap-2 sm:top-6 sm:right-7 lg:top-8 lg:right-8">
          <LocaleSwitcher
            locale={locale}
            locales={locales}
            onChangeLocale={onChangeLocale}
          />
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap text-muted-foreground transition-all outline-none hover:bg-accent hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:hover:bg-accent/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0"
            aria-label={
              theme === "dark"
                ? t("ui.themeSwitcher.switchToLight")
                : t("ui.themeSwitcher.switchToDark")
            }
            title={
              theme === "dark"
                ? t("ui.themeSwitcher.light")
                : t("ui.themeSwitcher.dark")
            }
          >
            {theme === "dark" ? (
              <FiSun className="size-5" />
            ) : (
              <FiMoon className="size-5" />
            )}
          </button>
        </div>

        <div className="space-y-6">
          <div className="space-y-3 pr-28 text-center sm:pr-32 lg:text-left">
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
  );
}
