import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empowering Businesses with AI: The DROP™ Framework | Lumio AI",
  description:
    "Learn about Lumio AI's DROP™ Framework, a structured approach designed to simplify AI integration for businesses, ensuring effective and valuable solutions.",
  keywords: [
    "DROP Framework",
    "AI integration methodology",
    "Business AI solutions",
    "structured AI approach",
    "Lumio AI",
  ],
  authors: [{ name: "Lumio AI", url: "https://www.teamlumio.ai" }],
  openGraph: {
    title: "Empowering Businesses with AI: The DROP™ Framework | Lumio AI",
    description:
      "Learn about Lumio AI's DROP™ Framework, a structured approach designed to simplify AI integration for businesses.",
    url: "https://www.teamlumio.ai/methodology",
    type: "website",
  },
};

export default function MethodologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
