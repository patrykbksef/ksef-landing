import { DISPLAYED_PHONE_NUMBER, EMAIL, PHONE_NUMBER } from "./constants/common";

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Faktura do KSeF",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Automatyczne wysyłanie wielopozycyjnych faktur PDF do Krajowego Systemu e-Faktur. Bez AI, bez abonamentu.",
  offers: {
    "@type": "Offer",
    price: "150",
    priceCurrency: "PLN",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Co jeśli system nie przeczyta mojej faktury?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Po to najpierw prosimy o przesłanie wzorów. Jeśli wprowadzisz nową fakturę, z którą system sobie nie poradzi, napisz do nas – zaktualizujemy aplikację pod Twój wzór za darmo.",
      },
    },
    {
      "@type": "Question",
      name: "Czy muszę podawać kartę płatniczą?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutnie nie. Jesteśmy zwolennikami tradycyjnego B2B. Na koniec miesiąca sprawdzamy ile faktur wysłano do KSeF i wystawiamy Ci normalną fakturę przelewową.",
      },
    },
    {
      "@type": "Question",
      name: "Czy to działa z fakturami od konkretnych ubezpieczalni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, nasi obecni klienci wgrywają faktury za usługi pomocy drogowej i holowania z systemów wiodących Towarzystw Ubezpieczeniowych.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden bg-linear-to-b from-primary-lighter to-background pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
            Automatyczne{" "}
            <strong className="text-primary">
              wysyłanie faktur PDF do KSeF
            </strong>{" "}
            bez ręcznego przepisywania
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Oszczędź godziny żmudnej pracy. Zmieniamy wielopozycyjne faktury
            (np.&nbsp;od ubezpieczalni) w&nbsp;gotowe wysyłki do KSeF.{" "}
            <strong className="font-semibold text-text-primary">
              Gwarantujemy 100% poprawności
            </strong>{" "}
            &ndash; dopasowujemy system specjalnie pod Twoje dokumenty.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex items-center rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-text-on-primary shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30"
            >
              Prześlij wzory faktur do testu
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center rounded-xl border border-border px-7 py-3.5 text-base font-semibold text-text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              Zadzwoń: {DISPLAYED_PHONE_NUMBER}
            </a>
          </div>

          <p className="mt-6 text-sm text-text-muted">
            Dopóki system nie obsłuży Twoich faktur bezbłędnie &ndash; nie
            płacisz ani grosza.
          </p>
        </div>
      </header>

      {/* FEATURES */}
      <section id="bezpieczenstwo" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Dlaczego nasz{" "}
            <strong className="text-primary">konwerter KSeF</strong> jest lepszy
            niż konkurencja?
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-2xl">
                🛡️
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                Nie używamy AI (Sztucznej Inteligencji)
              </h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                Konkurencja wysyła Twoje faktury do zewnętrznych serwisów AI,
                które czasem się mylą. Nasz program działa na{" "}
                <strong className="font-semibold text-text-primary">
                  twardych regułach programistycznych
                </strong>
                . Przetwarzanie jest błyskawiczne i&nbsp;zawsze w&nbsp;100%
                dokładne.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-2xl">
                🔒
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                Bezpieczeństwo Danych
              </h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                Twoje dane kontrahentów i&nbsp;kwoty nie trafiają na zagraniczne
                serwery analityczne. Przetwarzamy dokument do XML i&nbsp;
                <strong className="font-semibold text-text-primary">
                  wysyłamy prosto do polskiego KSeF
                </strong>
                .
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                Dedykowane Dostosowanie
              </h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                Jeśli masz nietypową fakturę,{" "}
                <strong className="font-semibold text-text-primary">
                  dostosujemy aplikację pod Ciebie za darmo
                </strong>
                . Koniec z&nbsp;frustracją, że &bdquo;system nie czyta tego
                pliku&rdquo;.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section id="jak-zaczac" className="bg-primary-lighter py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Jak wygląda rozpoczęcie współpracy? Zero ryzyka.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <article className="relative rounded-2xl border border-border bg-surface p-8">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-text-on-primary">
                1
              </span>
              <h3 className="text-xl font-semibold text-text-primary">
                Przesyłasz nam wzory
              </h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                Wysyłasz do nas na maila przykładowe{" "}
                <strong className="font-semibold text-text-primary">
                  faktury PDF
                </strong>
                , które na co dzień musisz wpisywać do KSeF (np.&nbsp;od TU,
                hurtowni).
              </p>
            </article>

            <article className="relative rounded-2xl border border-border bg-surface p-8">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-text-on-primary">
                2
              </span>
              <h3 className="text-xl font-semibold text-text-primary">
                My konfigurujemy system
              </h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                Uczymy nasz system Twoich faktur. Sprawdzamy, czy wszystko
                zczytuje się idealnie.{" "}
                <strong className="font-semibold text-text-primary">
                  Nie pobieramy za to opłat!
                </strong>
              </p>
            </article>

            <article className="relative rounded-2xl border border-border bg-surface p-8">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-text-on-primary">
                3
              </span>
              <h3 className="text-xl font-semibold text-text-primary">
                Działasz automatycznie
              </h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                Dostajesz dostęp do aplikacji. Od teraz wgrywasz PDF, a&nbsp;
                <strong className="font-semibold text-text-primary">
                  wysyłka do KSeF trwa sekundy
                </strong>
                . Płacisz tylko, jeśli używasz.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section id="dla-kogo" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Dla jakich branż stworzyliśmy nasz{" "}
            <strong className="text-primary">program do KSeF</strong>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-text-secondary">
            Idealne rozwiązanie dla firm, które muszą przepisywać długie
            zestawienia z&nbsp;systemów korporacyjnych.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🚗",
                title: "Pomoc drogowa i Lawety",
                text: (
                  <>
                    Szybki{" "}
                    <strong className="font-semibold text-text-primary">
                      import faktur za holowanie
                    </strong>{" "}
                    od ubezpieczalni (PZU, Warta itp.).
                  </>
                ),
              },
              {
                icon: "🔧",
                title: "Warsztaty i Serwisy",
                text: (
                  <>
                    Zestawienia części i&nbsp;napraw to często dziesiątki
                    pozycji. Nasz{" "}
                    <strong className="font-semibold text-text-primary">
                      automat do KSeF
                    </strong>{" "}
                    zrobi to za Ciebie.
                  </>
                ),
              },
              {
                icon: "🚚",
                title: "Firmy transportowe",
                text: (
                  <>
                    Długie{" "}
                    <strong className="font-semibold text-text-primary">
                      faktury za spedycję B2B
                    </strong>{" "}
                    przeniesione do KSeF jednym kliknięciem.
                  </>
                ),
              },
              {
                icon: "🏢",
                title: "Inne branże z fakturami B2B",
                text: "Jeśli masz stałych partnerów i powtarzalne, skomplikowane faktury \u2013 dopasujemy system do Ciebie.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-7 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="cennik" className="bg-primary-lighter py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Jasny cennik bez automatycznych płatności
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-text-secondary">
            Żadnych podpiętych kart kredytowych. Fakturę za usługę wystawiamy na
            koniec miesiąca.{" "}
            <strong className="font-semibold text-text-primary">
              Nie masz faktur w&nbsp;danym miesiącu? Nie płacisz nic (0&nbsp;zł).
            </strong>
          </p>

          <div className="mx-auto mt-14 grid max-w-3xl gap-8 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-surface p-8">
              <h3 className="text-lg font-semibold text-text-primary">
                Do 50 faktur / mies.
              </h3>
              <p className="mt-4 text-4xl font-extrabold text-text-primary">
                150 zł{" "}
                <span className="text-base font-medium text-text-muted">
                  netto
                </span>
              </p>
              <ul className="mt-6 space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-success">✓</span>
                  Darmowe dostosowanie wzorów
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-success">✓</span>
                  Brak ukrytych kosztów
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-success">✓</span>
                  Brak opłat, jeśli nie używasz
                </li>
              </ul>
            </article>

            <article className="relative rounded-2xl border-2 border-primary bg-surface p-8 shadow-lg shadow-primary/10">
              <span className="absolute -top-3.5 left-6 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-text-on-primary">
                Popularny
              </span>
              <h3 className="text-lg font-semibold text-text-primary">
                Powyżej 50 faktur / mies.
              </h3>
              <p className="mt-4 text-4xl font-extrabold text-text-primary">
                250 zł{" "}
                <span className="text-base font-medium text-text-muted">
                  netto
                </span>
              </p>
              <ul className="mt-6 space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-success">✓</span>
                  Nielimitowana ilość faktur
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-success">✓</span>
                  Priorytetowe wsparcie
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-success">✓</span>
                  Brak opłat, jeśli nie używasz
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="artykuly" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Artykuły o{" "}
            <strong className="text-primary">
              KSeF i&nbsp;automatyzacji faktur
            </strong>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-text-secondary">
            Praktyczne poradniki, jak radzić sobie z&nbsp;trudnymi fakturami
            i&nbsp;wymogami Krajowego Systemu e-Faktur.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg">
              <div className="flex flex-1 flex-col p-8">
                <span className="mb-3 text-sm font-semibold text-primary">
                  Poradnik
                </span>
                <h3 className="text-xl font-semibold leading-snug text-text-primary">
                  Jak wysłać fakturę PDF do KSeF krok po kroku?
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  Praktyczny przewodnik dla małych firm, które muszą ręcznie
                  przepisywać dane z&nbsp;PDF do systemu Ministerstwa Finansów.
                  Poznaj sposoby na automatyzację.
                </p>
                <a
                  href="/artykuly/jak-wyslac-fakture-do-ksef"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  Czytaj więcej <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg">
              <div className="flex flex-1 flex-col p-8">
                <span className="mb-3 text-sm font-semibold text-primary">
                  Dla lawet i&nbsp;pomocy drogowej
                </span>
                <h3 className="text-xl font-semibold leading-snug text-text-primary">
                  Jak wystawić fakturę za holowanie z&nbsp;OC sprawcy w&nbsp;KSeF?
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  Rozliczanie się z&nbsp;ubezpieczalniami (PZU, Warta, Hestia)
                  bywa problematyczne. Zobacz, jak zautomatyzować przesyłanie
                  wielopozycyjnych kosztorysów do KSeF.
                </p>
                <a
                  href="/artykuly/faktura-za-holowanie-ksef"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  Czytaj więcej <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg">
              <div className="flex flex-1 flex-col p-8">
                <span className="mb-3 text-sm font-semibold text-primary">
                  Prawo i&nbsp;przepisy
                </span>
                <h3 className="text-xl font-semibold leading-snug text-text-primary">
                  Czy KSeF będzie obowiązkowy w&nbsp;2026 roku?
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  Sprawdź aktualne przepisy i&nbsp;dowiedz się, jak przygotować
                  firmę na obowiązkowe faktury ustrukturyzowane w&nbsp;Krajowym
                  Systemie e-Faktur.
                </p>
                <a
                  href="/artykuly/czy-ksef-obowiazkowy-2026"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  Czytaj więcej <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-primary-lighter py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Najczęściej zadawane pytania (FAQ)
          </h2>

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Co jeśli system nie przeczyta mojej faktury?",
                a: (
                  <>
                    Po to najpierw prosimy o przesłanie wzorów. Jeśli
                    wprowadzisz nową fakturę, z&nbsp;którą system sobie nie
                    poradzi,{" "}
                    <strong>
                      napisz do nas &ndash; zaktualizujemy aplikację pod Twój
                      wzór za darmo
                    </strong>
                    .
                  </>
                ),
              },
              {
                q: "Czy muszę podawać kartę płatniczą?",
                a: (
                  <>
                    Absolutnie nie. Jesteśmy zwolennikami tradycyjnego B2B. Na
                    koniec miesiąca sprawdzamy ile{" "}
                    <strong>faktur wysłano do KSeF</strong> i&nbsp;wystawiamy Ci
                    normalną fakturę przelewową.
                  </>
                ),
              },
              {
                q: "Czy to działa z fakturami od konkretnych ubezpieczalni?",
                a: (
                  <>
                    Tak, nasi obecni klienci wgrywają{" "}
                    <strong>
                      faktury za usługi pomocy drogowej i&nbsp;holowania
                    </strong>{" "}
                    z&nbsp;systemów wiodących Towarzystw Ubezpieczeniowych.
                  </>
                ),
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border bg-surface transition-shadow hover:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-text-primary">
                  <h3 className="text-base font-semibold md:text-lg">
                    {item.q}
                  </h3>
                </summary>
                <div className="px-6 pb-5 leading-relaxed text-text-secondary">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="kontakt" className="bg-primary-lighter py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Porozmawiajmy o&nbsp;automatyzacji Twojej firmy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-text-secondary">
            Nie kupuj kota w&nbsp;worku. Skontaktuj się z&nbsp;nami, prześlij
            swoje dokumenty i&nbsp;zobacz, jak możemy ułatwić Ci życie
            z&nbsp;KSeF.
          </p>

          <div className="mx-auto mt-14 grid max-w-3xl gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-8 text-center">
              <h3 className="text-xl font-semibold text-text-primary">
                Zadzwoń do nas
              </h3>
              <p className="mt-3 text-text-secondary">
                Preferujesz rozmowę? Zadzwoń, chętnie odpowiemy na wszystkie
                pytania.
              </p>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-text-on-primary transition-colors hover:bg-primary-hover"
              >
                <span>📞</span> {DISPLAYED_PHONE_NUMBER}
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8 text-center">
              <h3 className="text-xl font-semibold text-text-primary">
                Napisz maila i&nbsp;wyślij wzory
              </h3>
              <p className="mt-3 text-text-secondary">
                Wyślij kilka przykładowych faktur PDF, a&nbsp;my damy znać,
                kiedy będą gotowe do testów.
              </p>
              <a
                href={"mailto:" + EMAIL}
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold text-text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                <span>✉️</span> {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
