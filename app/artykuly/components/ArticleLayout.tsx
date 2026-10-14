import { APP_URL, DISPLAYED_PHONE_NUMBER } from "@/app/constants/common";
import { PhoneLink } from "@/app/components/PhoneLink";
import Link from "next/link";
import { ARTICLES, type ArticleSlug } from "../articles";

type ArticleLayoutProps = {
  slug: ArticleSlug;
  children: React.ReactNode;
};

const formatDate = (isoDate: string) =>
  new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));

export function ArticleLayout({ slug, children }: ArticleLayoutProps) {
  const { title, description, category, publishedAt, updatedAt } =
    ARTICLES[slug];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    inLanguage: "pl-PL",
    datePublished: publishedAt,
    dateModified: updatedAt,
    mainEntityOfPage: new URL(`artykuly/${slug}`, APP_URL).href,
    image: new URL("og-image.png", APP_URL).href,
    author: { "@type": "Organization", name: "Faktura do KSeF", url: APP_URL },
    publisher: {
      "@type": "Organization",
      name: "Faktura do KSeF",
      url: APP_URL,
    },
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-6">
        <header className="mb-12">
          <Link
            href="/#artykuly"
            className="mb-6 inline-flex items-center text-sm font-medium text-text-muted transition-colors hover:text-primary"
          >
            <span className="mr-1">&larr;</span> Wróć do artykułów
          </Link>
          <span className="mb-3 block text-sm font-semibold text-primary">
            {category}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-text-muted">
            Opublikowano:{" "}
            <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
            {updatedAt !== publishedAt && (
              <>
                {" "}
                &middot; Zaktualizowano:{" "}
                <time dateTime={updatedAt}>{formatDate(updatedAt)}</time>
              </>
            )}
          </p>
        </header>

        <div className="prose-ksef">{children}</div>

        <div className="mt-16 rounded-2xl border border-border bg-primary-lighter p-8 text-center md:p-10">
          <h2 className="text-2xl font-bold text-text-primary">
            Chcesz zautomatyzować wysyłanie faktur do KSeF?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-text-secondary">
            Skontaktuj się z&nbsp;nami, prześlij wzory swoich faktur
            i&nbsp;przekonaj się, jak możemy Ci pomóc. Konfiguracja jest
            darmowa.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/#kontakt"
              className="inline-flex items-center rounded-xl bg-primary px-7 py-3 font-semibold text-text-on-primary transition-colors hover:bg-primary-hover"
            >
              Skontaktuj się z&nbsp;nami
            </a>
            <PhoneLink className="inline-flex items-center rounded-xl border border-border px-7 py-3 font-semibold text-text-secondary transition-colors hover:border-primary hover:text-primary">
              Zadzwoń: {DISPLAYED_PHONE_NUMBER}
            </PhoneLink>
          </div>
        </div>
      </article>
    </div>
  );
}
