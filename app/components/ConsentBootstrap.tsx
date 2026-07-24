"use client";

import { useEffect } from "react";
import { applyConsentToGtag, getStoredConsent } from "@/app/lib/cookie-consent";

/** Re-applies stored Consent Mode v2 choices after hydration / gtag load. */
export function ConsentBootstrap() {
  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) return;

    applyConsentToGtag(stored);

    // gtag may load slightly after hydration — retry once shortly after
    const timeout = window.setTimeout(() => {
      applyConsentToGtag(stored);
    }, 600);

    return () => window.clearTimeout(timeout);
  }, []);

  return null;
}
