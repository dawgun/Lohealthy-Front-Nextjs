import "../styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const inter = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lohealthy Games",
  description: "Lohealthy Games created by Dawgun",
  icons: { icon: "./favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
