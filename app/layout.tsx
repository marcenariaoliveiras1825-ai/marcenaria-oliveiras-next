import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
export const metadata: Metadata = {
  metadataBase: new URL("https://www.marcenariaoliveiras.com.br"),

  title: {
    default: "Marcenaria Oliveira's - Móveis Planejados | Paiçandu e Maringá",
    template: "%s | Marcenaria Oliveira's",
  },

  description:
    "Marcenaria familiar especializada em móveis planejados e personalizados. Atendemos Paiçandu e toda região de Maringá, PR.",

  keywords: [
    "marcenaria",
    "móveis planejados",
    "móveis sob medida",
    "cozinha planejada",
    "guarda-roupa planejado",
    "móveis montessori",
    "Paiçandu",
    "Maringá",
    "Paraná",
  ],

  authors: [{ name: "Marcenaria Oliveira's" }],

  openGraph: {
    title: "Marcenaria Oliveira's - Móveis Planejados",
    description:
      "Móveis sob medida com acabamento impecável. Atendemos Paiçandu e região.",
    url: "https://www.marcenariaoliveiras.com.br",
    siteName: "Marcenaria Oliveira's",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marcenaria Oliveira's",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marcenaria Oliveira's",
    description:
      "Especialistas em móveis planejados em Paiçandu e região.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
