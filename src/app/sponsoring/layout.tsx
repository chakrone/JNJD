import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JNJD 2026 — Dossier Sponsoring · 20ème Édition",
  description:
    "Découvrez les formules de sponsoring pour la 20ème édition de la JNJD, organisée par le Club Informatique & Télécom à l'INPT Rabat.",
};

export default function SponsoringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
