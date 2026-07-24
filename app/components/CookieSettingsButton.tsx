"use client";

import { openCookieSettings } from "@/app/lib/cookie-consent";

type CookieSettingsButtonProps = {
  className?: string;
};

export function CookieSettingsButton({
  className = "text-text-muted transition-colors hover:text-primary",
}: CookieSettingsButtonProps) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Ustawienia cookies
    </button>
  );
}
