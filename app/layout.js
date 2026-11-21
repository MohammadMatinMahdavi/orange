import "./globals.css";

export const metadata = {
  title: "Orange AI — Creative Studio for What's Next",
  description:
    "AI-powered content, real ads, UGC and digital experiences. Human creativity, amplified by Orange AI.",
  applicationName: "Orange AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
