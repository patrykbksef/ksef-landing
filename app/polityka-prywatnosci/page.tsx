import type { Metadata } from "next";
import Link from "next/link";
import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  COMPANY_NIP,
  DISPLAYED_PHONE_NUMBER,
  EMAIL,
  GA_MEASUREMENT_ID,
} from "@/app/constants/common";
import { CookieSettingsButton } from "@/app/components/CookieSettingsButton";
import { PhoneLink } from "@/app/components/PhoneLink";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności i plików cookies serwisu Faktura do KSeF — informacje o przetwarzaniu danych osobowych, Google Analytics, Google Ads oraz zarządzaniu zgodą.",
  alternates: {
    canonical: "/polityka-prywatnosci",
  },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <article className="mx-auto max-w-3xl px-6">
        <header className="mb-12">
          <Link
            href="/"
            className="mb-6 inline-flex items-center text-sm font-medium text-text-muted transition-colors hover:text-primary"
          >
            <span className="mr-1">&larr;</span> Strona główna
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
            Polityka prywatności
          </h1>
          <p className="mt-4 text-sm text-text-muted">
            Ostatnia aktualizacja: 24 lipca 2026
          </p>
        </header>

        <div className="prose-ksef">
          <p>
            Niniejsza Polityka prywatności określa zasady przetwarzania danych
            osobowych oraz wykorzystywania plików cookies w serwisie{" "}
            <strong>Faktura do KSeF</strong> (dalej: „Serwis”), dostępnym pod
            adresem pdfwksef.pl.
          </p>

          <h2>1. Administrator danych</h2>
          <p>
            Administratorem Twoich danych osobowych jest:
          </p>
          <ul>
            <li>
              <strong>{COMPANY_NAME}</strong>
            </li>
            <li>NIP: {COMPANY_NIP}</li>
            <li>Adres: {COMPANY_ADDRESS}</li>
            <li>
              E-mail:{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              Telefon:{" "}
              <PhoneLink className="text-primary hover:underline">
                {DISPLAYED_PHONE_NUMBER}
              </PhoneLink>
            </li>
          </ul>
          <p>
            W sprawach związanych z ochroną danych osobowych możesz skontaktować
            się z nami pod wskazanym adresem e-mail.
          </p>

          <h2>2. Jakie dane przetwarzamy</h2>
          <p>W zależności od tego, jak korzystasz z Serwisu, możemy przetwarzać:</p>
          <ul>
            <li>
              dane podane dobrowolnie przy kontakcie (np. adres e-mail, numer
              telefonu, treść wiadomości, dane firmy),
            </li>
            <li>
              dane techniczne i analityczne związane z korzystaniem ze strony
              (m.in. adres IP w formie zanonimizowanej lub ograniczonej, typ
              urządzenia i przeglądarki, źródło wejścia, podstrony, zdarzenia
              takie jak kliknięcie numeru telefonu) — gdy wyrazisz na to zgodę,
            </li>
            <li>
              dane związane z reklamami Google (pomiar skuteczności kampanii,
              ewentualna personalizacja) — gdy wyrazisz na to zgodę.
            </li>
          </ul>

          <h2>3. Cele i podstawy prawne</h2>
          <ul>
            <li>
              <strong>Kontakt i obsługa zapytań</strong> — art. 6 ust. 1 lit. b
              lub f RODO (działania przed zawarciem umowy / prawnie uzasadniony
              interes polegający na odpowiedzi na zapytania).
            </li>
            <li>
              <strong>Analityka (Google Analytics 4)</strong> — art. 6 ust. 1
              lit. a RODO (zgoda). Identyfikator pomiaru: {GA_MEASUREMENT_ID}.
            </li>
            <li>
              <strong>Marketing / Google Ads</strong> — art. 6 ust. 1 lit. a
              RODO (zgoda), w zakresie cookies reklamowych oraz związanych z
              nimi sygnałów Consent Mode.
            </li>
            <li>
              <strong>Zapamiętanie Twojej decyzji o cookies</strong> —
              niezbędność do świadczenia usługi drogą elektroniczną / prawnie
              uzasadniony interes (art. 6 ust. 1 lit. f RODO).
            </li>
          </ul>

          <h2>4. Odbiorcy danych i transfer poza EOG</h2>
          <p>
            W zakresie narzędzi Google (Analytics / Ads) dane mogą być
            przetwarzane przez Google Ireland Limited oraz — w niezbędnym
            zakresie — podmioty z grupy Google, w tym Google LLC (USA). Transfer
            poza Europejski Obszar Gospodarczy odbywa się z zastosowaniem
            mechanizmów przewidzianych przez prawo (m.in. standardowe klauzule
            umowne / ramy przyjęte przez Komisję Europejską, o ile mają
            zastosowanie).
          </p>

          <h2>5. Okres przechowywania</h2>
          <ul>
            <li>
              korespondencja kontaktowa — przez czas potrzebny do obsługi
              zapytania oraz ewentualnych roszczeń (zwykle do 3 lat),
            </li>
            <li>
              dane analityczne / reklamowe — zgodnie z ustawieniami Google oraz
              okresem ważności cookies (patrz tabela poniżej), nie dłużej niż
              jest to potrzebne do celów, na które wyrażono zgodę,
            </li>
            <li>
              decyzja o cookies zapisana lokalnie w przeglądarce — do czasu jej
              zmiany lub wyczyszczenia danych przeglądarki.
            </li>
          </ul>

          <h2>6. Twoje prawa</h2>
          <p>Przysługuje Ci prawo do:</p>
          <ul>
            <li>dostępu do danych,</li>
            <li>sprostowania danych,</li>
            <li>usunięcia danych („prawo do bycia zapomnianym”),</li>
            <li>ograniczenia przetwarzania,</li>
            <li>przenoszenia danych (gdy ma zastosowanie),</li>
            <li>sprzeciwu wobec przetwarzania opartego na art. 6 ust. 1 lit. f RODO,</li>
            <li>
              cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z
              prawem przetwarzania przed jej cofnięciem),
            </li>
            <li>
              wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
              (UODO), ul. Stawki 2, 00-193 Warszawa,{" "}
              <a
                href="https://uodo.gov.pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                uodo.gov.pl
              </a>
              .
            </li>
          </ul>

          <h2>7. Pliki cookies i podobne technologie</h2>
          <p>
            Serwis wykorzystuje cookies niezbędne oraz — wyłącznie po Twojej
            zgodzie — cookies analityczne i reklamowe. Stosujemy Google Consent
            Mode v2: domyślnie zgody są ustawione na „denied”; po Twojej decyzji
            aktualizujemy stan zgody. Przy braku zgody na cookies Google może
            wysyłać ograniczone, bezciasteczkowe sygnały (cookieless pings)
            służące modelowaniu — bez przechowywania identyfikujących cookies
            analitycznych/reklamowych.
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full min-w-xl border-collapse text-left text-sm text-text-secondary">
              <thead>
                <tr className="border-b border-border text-text-primary">
                  <th className="py-2 pr-3 font-semibold">Nazwa / narzędzie</th>
                  <th className="py-2 pr-3 font-semibold">Dostawca</th>
                  <th className="py-2 pr-3 font-semibold">Cel</th>
                  <th className="py-2 pr-3 font-semibold">Czas</th>
                  <th className="py-2 font-semibold">Typ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-light">
                  <td className="py-3 pr-3">cookie-consent (localStorage)</td>
                  <td className="py-3 pr-3">Własne</td>
                  <td className="py-3 pr-3">Zapamiętanie decyzji o cookies</td>
                  <td className="py-3 pr-3">Do zmiany / usunięcia</td>
                  <td className="py-3">Niezbędne</td>
                </tr>
                <tr className="border-b border-border-light">
                  <td className="py-3 pr-3">_ga, _ga_*</td>
                  <td className="py-3 pr-3">Google Analytics</td>
                  <td className="py-3 pr-3">Statystyki odwiedzin</td>
                  <td className="py-3 pr-3">do ok. 2 lat</td>
                  <td className="py-3">Analityczne</td>
                </tr>
                <tr className="border-b border-border-light">
                  <td className="py-3 pr-3">_gid</td>
                  <td className="py-3 pr-3">Google Analytics</td>
                  <td className="py-3 pr-3">Rozróżnianie użytkowników</td>
                  <td className="py-3 pr-3">24 godziny</td>
                  <td className="py-3">Analityczne</td>
                </tr>
                <tr>
                  <td className="py-3 pr-3">_gcl_au, cookies Ads / IDE*</td>
                  <td className="py-3 pr-3">Google Ads</td>
                  <td className="py-3 pr-3">
                    Pomiar konwersji i (opcjonalnie) personalizacja reklam
                  </td>
                  <td className="py-3 pr-3">zależnie od Google</td>
                  <td className="py-3">Reklamowe</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-xs text-text-muted">
              *Dokładny zestaw cookies reklamowych zależy od wdrożonych tagów
              Google Ads i może się zmieniać.
            </p>
          </div>

          <h2>8. Zarządzanie zgodą</h2>
          <p>
            Przy pierwszej wizycie wyświetlamy baner cookies. Możesz zaakceptować
            wszystkie kategorie, odrzucić opcjonalne lub wybrać ustawienia
            szczegółowe (analityczne / reklamowe). Decyzję zmienisz w każdej
            chwili:{" "}
            <CookieSettingsButton className="font-medium text-primary underline-offset-2 hover:underline" />
            .
          </p>

          <h2>9. Dobrowolność podania danych</h2>
          <p>
            Podanie danych kontaktowych jest dobrowolne, ale niezbędne, jeśli
            chcesz, abyśmy odpowiedzieli na zapytanie. Zgoda na cookies
            analityczne i reklamowe jest dobrowolna — możesz z niej zrezygnować
            bez wpływu na możliwość przeglądania treści Serwisu.
          </p>

          <h2>10. Zmiany polityki</h2>
          <p>
            Możemy aktualizować niniejszą Politykę prywatności. Aktualna wersja
            zawsze będzie dostępna na tej stronie wraz z datą ostatniej
            aktualizacji.
          </p>
        </div>
      </article>
    </div>
  );
}
