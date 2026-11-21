import Home from "../page";
import { notFound } from "next/navigation";

const supportedLocales = ["es", "fr"];

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocalizedHome({ params }) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale)) notFound();
  return <Home locale={locale} />;
}
