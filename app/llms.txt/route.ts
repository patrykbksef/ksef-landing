import {
  APP_PDF_URL,
  APP_URL,
  DISPLAYED_PHONE_NUMBER,
  EMAIL,
} from "../constants/common";
import { ARTICLES } from "../artykuly/articles";

export const dynamic = "force-static";

export function GET() {
  const articles = Object.entries(ARTICLES)
    .map(
      ([slug, { title, description }]) =>
        `- [${title}](${new URL(`artykuly/${slug}`, APP_URL).href}): ${description}`,
    )
    .join("\n");

  const body = `# Faktura do KSeF (pdfwksef.pl)

> Konwerter faktur PDF do XML w formacie FA(3) z automatyczną wysyłką do Krajowego Systemu e-Faktur (KSeF). Obsługuje wielopozycyjne faktury, np. od ubezpieczalni za holowanie i pomoc drogową. Działa na regułach dopasowanych do wzorów faktur klienta, bez AI.

- Dla kogo: firmy pomocy drogowej i lawety, warsztaty i serwisy, firmy transportowe oraz inne firmy z powtarzalnymi, wielopozycyjnymi fakturami B2B.
- Jak zacząć: klient wysyła przykładowe faktury PDF, system jest do nich dopasowywany bezpłatnie, potem klient wgrywa PDF w aplikacji, a faktura trafia do KSeF w kilka sekund.
- Cena: 150 zł netto miesięcznie do 50 faktur, 250 zł netto powyżej 50 faktur. Miesiąc bez faktur kosztuje 0 zł. Bez abonamentu i bez karty płatniczej, rozliczenie fakturą przelewową na koniec miesiąca.
- Dane: faktury nie są wysyłane do zewnętrznych serwisów AI.
- Kontakt: ${DISPLAYED_PHONE_NUMBER}, ${EMAIL}
- Aplikacja (logowanie): ${APP_PDF_URL}

## Strony

- [Strona główna](${APP_URL}): opis usługi, cennik, FAQ i kontakt.

## Artykuły

${articles}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
