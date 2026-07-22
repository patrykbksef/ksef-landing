import Link from "next/link";
import { APP_URL, DISPLAYED_PHONE_NUMBER, EMAIL, PHONE_NUMBER } from "../constants/common";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <Link
              href="/"
              className="text-lg font-medium text-text-primary no-underline"
            >
              Faktura do <span className="font-bold text-primary">KSeF</span>
            </Link>
            <p className="text-sm text-text-muted">
              Automatyczny import faktur PDF do Krajowego Systemu e-Faktur.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm sm:flex-row sm:gap-12">
            <div className="space-y-2">
              <h4 className="font-semibold text-text-primary">Kontakt</h4>
              <p className="text-text-muted">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="transition-colors hover:text-primary"
                >
                  {DISPLAYED_PHONE_NUMBER}
                </a>
              </p>
              <p className="text-text-muted">
                <a
                  href={"mailto:" + EMAIL}
                  className="transition-colors hover:text-primary"
                >
                  {EMAIL}
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-text-primary">Pozostałe</h4>
              <p>
                <a
                  href={APP_URL + "/app"}
                  className="text-text-muted transition-colors hover:text-primary"
                >
                  Strefa Klienta (Zaloguj się)
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border-light pt-6 text-center text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Faktura do KSeF &mdash; Twój
          niezawodny automat księgowy.
        </div>
      </div>
    </footer>
  );
}
