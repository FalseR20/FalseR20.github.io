import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/resources";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
};

type LocaleSwitcherProps = {
  locale: Locale;
  locales: readonly Locale[];
  onChangeLocale: (locale: Locale) => void;
};

export function LocaleSwitcher({
  locale,
  locales,
  onChangeLocale,
}: LocaleSwitcherProps) {
  const { t } = useTranslation();

  return (
    <div
      role="group"
      aria-label={t("ui.localeSwitcher.label")}
      className="inline-flex items-center rounded-full border bg-card p-1 shadow-none"
    >
      {locales.map((value) => {
        const title =
          value === "en"
            ? t("ui.localeSwitcher.english")
            : t("ui.localeSwitcher.russian");

        return (
          <button
            key={value}
            type="button"
            onClick={() => onChangeLocale(value)}
            aria-pressed={locale === value}
            aria-label={title}
            title={title}
            className={cn(
              "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-full px-3 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase transition-colors outline-none hover:bg-accent hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
              locale === value && "bg-accent text-foreground",
            )}
          >
            {localeLabels[value]}
          </button>
        );
      })}
    </div>
  );
}
