import type { Metadata } from "next";

type Article = {
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
};

export const ARTICLES = {
  "jak-wyslac-fakture-do-ksef": {
    title: "Jak wysłać fakturę PDF do KSeF krok po kroku?",
    description:
      "Praktyczny poradnik wysyłania faktur PDF do Krajowego Systemu e-Faktur. Dowiedz się, jak zamienić PDF na XML KSeF FA(3) bez ręcznego przepisywania danych.",
    category: "Poradnik",
    publishedAt: "2026-07-21",
    updatedAt: "2026-10-14",
  },
  "faktura-za-holowanie-ksef": {
    title: "Jak wystawić fakturę za holowanie z OC sprawcy w KSeF?",
    description:
      "Poradnik dla firm pomocy drogowej i lawet: jak automatycznie przesyłać wielopozycyjne faktury za holowanie z OC sprawcy do Krajowego Systemu e-Faktur.",
    category: "Dla lawet i pomocy drogowej",
    publishedAt: "2026-07-21",
    updatedAt: "2026-10-14",
  },
  "czy-ksef-obowiazkowy-2026": {
    title: "Czy KSeF jest obowiązkowy w 2026 roku? Terminy i wyjątki",
    description:
      "KSeF jest obowiązkowy od 1 lutego 2026 r. dla największych firm i od 1 kwietnia 2026 r. dla pozostałych. Sprawdź terminy, wyjątki do końca 2026 r. i jak przygotować firmę.",
    category: "Prawo i przepisy",
    publishedAt: "2026-07-21",
    updatedAt: "2026-10-14",
  },
} satisfies Record<string, Article>;

export type ArticleSlug = keyof typeof ARTICLES;

export function getArticleMetadata(slug: ArticleSlug): Metadata {
  const { title, description, publishedAt, updatedAt } = ARTICLES[slug];
  const path = `/artykuly/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      url: path,
      title,
      description,
      siteName: "Faktura do KSeF",
      locale: "pl_PL",
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
    },
  };
}
