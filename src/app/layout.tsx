import "./globals.css";
import type { Metadata } from "next";

import { Providers } from "@web333/components/Providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-noise min-h-svh" data-theme="cyberpunk">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
