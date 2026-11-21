import Home from "../page";
import { notFound } from "next/navigation";

const supportedLocales = ["es", "fr"];
export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale)) notFound();
  const metadata = {
    es: {
      title: "Orange AI — Estudio creativo para lo que viene",
      description: "Contenido con IA, anuncios, UGC y experiencias digitales. Creatividad humana, amplificada por Orange AI.",
    },
    fr: {
      title: "Orange AI — Studio créatif tourné vers demain",
      description: "Contenu IA, publicités, UGC et expériences numériques. La créativité humaine amplifiée par Orange AI.",
    },
  };
  return metadata[locale];
}

export default async function LocalizedHome({ params }) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale)) notFound();
  return <Home locale={locale} />;
}
