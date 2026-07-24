import { COOKIE_CONSENT_KEY } from "@/app/constants/common";

export type CookieConsent = {
  analytics: boolean;
  ads: boolean;
  updatedAt: string;
};

export const COOKIE_CONSENT_EVENT = "cookie-consent-change";
export const COOKIE_CONSENT_OPEN_EVENT = "cookie-consent-open";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as CookieConsent;
    if (
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.ads !== "boolean"
    ) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function setStoredConsent(
  consent: Omit<CookieConsent, "updatedAt">,
): CookieConsent {
  const value: CookieConsent = {
    ...consent,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(value));
  applyConsentToGtag(value);
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }),
  );

  return value;
}

export function applyConsentToGtag(consent: {
  analytics: boolean;
  ads: boolean;
}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.ads ? "granted" : "denied",
    ad_user_data: consent.ads ? "granted" : "denied",
    ad_personalization: consent.ads ? "granted" : "denied",
  });
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(COOKIE_CONSENT_OPEN_EVENT));
}
