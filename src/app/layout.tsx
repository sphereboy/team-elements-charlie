import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TeamProvider } from "@/context/team-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team Periodic Table",
  description: "View your team as elements in a periodic table",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TeamProvider>{children}</TeamProvider>
      </body>
    </html>
  );
}
