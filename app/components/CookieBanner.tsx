"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import {
  COOKIE_CONSENT_OPEN_EVENT,
  getStoredConsent,
  setStoredConsent,
  type CookieConsent,
} from "@/app/lib/cookie-consent";

export function CookieBanner() {
  const titleId = useId();
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setAnalytics(stored.analytics);
      setAds(stored.ads);
      setVisible(false);
    } else {
      setVisible(true);
    }
    setReady(true);

    const onOpen = () => {
      const current = getStoredConsent();
      if (current) {
        setAnalytics(current.analytics);
        setAds(current.ads);
      }
      setShowSettings(true);
      setVisible(true);
    };

    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!visible || !showSettings) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const stored = getStoredConsent();
        if (stored) {
          setShowSettings(false);
          setVisible(false);
        } else {
          setShowSettings(false);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible, showSettings]);

  const persist = (consent: Omit<CookieConsent, "updatedAt">) => {
    setStoredConsent(consent);
    setAnalytics(consent.analytics);
    setAds(consent.ads);
    setShowSettings(false);
    setVisible(false);
  };

  if (!ready || !visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="mx-auto max-w-7xl">
        {!showSettings ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-2 text-sm text-text-secondary">
              <p id={titleId} className="font-semibold text-text-primary">
                Szanujemy Twoją prywatność
              </p>
              <p>
                Używamy plików cookies i narzędzi Google (Analytics oraz
                ewentualnie Ads), aby analizować ruch na stronie i mierzyć
                skuteczność działań marketingowych. Niezbędne pliki cookies są
                zawsze aktywne. Szczegóły znajdziesz w{" "}
                <Link
                  href="/polityka-prywatnosci"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  Polityce prywatności
                </Link>
                . Decyzję możesz zmienić w każdej chwili.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-border-light hover:text-text-primary"
              >
                Ustawienia
              </button>
              <button
                type="button"
                onClick={() => persist({ analytics: false, ads: false })}
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-border-light"
              >
                Odrzucam
              </button>
              <button
                type="button"
                onClick={() => persist({ analytics: true, ads: true })}
                className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-text-on-primary transition-colors hover:bg-primary-hover"
              >
                Akceptuję wszystkie
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <p id={titleId} className="font-semibold text-text-primary">
                Ustawienia cookies
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Wybierz, na które kategorie wyrażasz zgodę. Możesz zmienić wybór
                w każdej chwili.
              </p>
            </div>

            <div className="space-y-3">
              <label className="flex items-start justify-between gap-4 rounded-lg border border-border px-4 py-3">
                <span>
                  <span className="block text-sm font-medium text-text-primary">
                    Niezbędne
                  </span>
                  <span className="mt-0.5 block text-sm text-text-muted">
                    Wymagane do działania strony i zapamiętania Twojej decyzji o
                    cookies. Zawsze aktywne.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 size-4 accent-primary"
                  aria-label="Cookies niezbędne (zawsze włączone)"
                />
              </label>

              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-lg border border-border px-4 py-3">
                <span>
                  <span className="block text-sm font-medium text-text-primary">
                    Analityczne
                  </span>
                  <span className="mt-0.5 block text-sm text-text-muted">
                    Google Analytics — pomaga nam rozumieć, jak korzystasz ze
                    strony.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="mt-1 size-4 accent-primary"
                  aria-label="Cookies analityczne"
                />
              </label>

              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-lg border border-border px-4 py-3">
                <span>
                  <span className="block text-sm font-medium text-text-primary">
                    Reklamowe
                  </span>
                  <span className="mt-0.5 block text-sm text-text-muted">
                    Google Ads — pomiar skuteczności reklam i ewentualna
                    personalizacja.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={ads}
                  onChange={(event) => setAds(event.target.checked)}
                  className="mt-1 size-4 accent-primary"
                  aria-label="Cookies reklamowe"
                />
              </label>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  const stored = getStoredConsent();
                  if (stored) {
                    setShowSettings(false);
                    setVisible(false);
                  } else {
                    setShowSettings(false);
                  }
                }}
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-border-light"
              >
                Anuluj
              </button>
              <button
                type="button"
                onClick={() => persist({ analytics, ads })}
                className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-text-on-primary transition-colors hover:bg-primary-hover"
              >
                Zapisz wybór
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
