import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import {
  FiMoon,
  FiSun,
  FiPrinter,
  FiMapPin,
  FiMail,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

import { Card, CardContent, CardSurface } from "@/components/ui/card";
import { CvLabel } from "@/features/cv/components/CvPrimitives";
import { VStack } from "@/components/ui/layout";
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
const profileControlButtonClassName =
  "inline-flex size-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap text-muted-foreground transition-all outline-none hover:bg-accent hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:hover:bg-accent/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0";

function getCurrentPageUrl() {
  if (typeof window === "undefined") {
    return "https://falser.dev/";
  }

  return window.location.href;
}

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
  const currentPageUrl = getCurrentPageUrl();
  const handlePrint = () => {
    window.print();
  };

  return (
    <Card>
      <CardContent>
        <VStack className="gap-4 sm:gap-5 lg:gap-6">
          <div className="cv-print-hidden flex items-center justify-end gap-2">
            <LocaleSwitcher
              locale={locale}
              locales={locales}
              onChangeLocale={onChangeLocale}
            />
            <button
              type="button"
              onClick={handlePrint}
              className={profileControlButtonClassName}
              aria-label={t("ui.print.printResume")}
              title={t("ui.print.printResume")}
            >
              <FiPrinter className="size-5" />
            </button>
            <button
              type="button"
              onClick={onToggleTheme}
              className={profileControlButtonClassName}
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

          <VStack size="2xl">
            <VStack size="md" className="text-center lg:text-left">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {profile.fullName}
              </h1>
              <p className="text-lg text-foreground/85 sm:text-xl">
                {profile.title}
              </p>
              <p className="text-base leading-7 text-muted-foreground">
                {profile.summary}
              </p>
            </VStack>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {contacts.map(({ icon, label, value, href }) => {
                const Icon = contactIcons[icon];
                const content = (
                  <div className="flex items-start gap-3 text-left">
                    <Icon
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <CvLabel>{label}</CvLabel>
                      <p className="min-w-0 text-sm font-medium break-all text-foreground sm:text-base">
                        {value}
                      </p>
                    </div>
                  </div>
                );

                if (!href) {
                  return (
                    <CardSurface
                      key={label}
                      size="dense"
                      className="transition-colors"
                    >
                      {content}
                    </CardSurface>
                  );
                }

                return (
                  <CardSurface
                    as="a"
                    key={label}
                    size="dense"
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className={cn(
                      "block hover:bg-accent/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
                      "transition-colors",
                    )}
                    aria-label={`${label}: ${value}`}
                    title={value}
                  >
                    {content}
                  </CardSurface>
                );
              })}
            </div>

            <div className="cv-print-only -mt-3 text-right text-xs leading-5 text-muted-foreground/75">
              <span className="font-medium">
                {t("ui.print.onlineVersion")}:{" "}
              </span>
              <a
                href={currentPageUrl}
                className="font-medium break-all text-muted-foreground/85"
              >
                {currentPageUrl}
              </a>
            </div>
          </VStack>
        </VStack>
      </CardContent>
    </Card>
  );
}
