import type { Metadata } from "next";
import "./globals.css";
import ConvexClerkProvider from "./providers/ConvexClerkProvider";
import AudioProvider from "./providers/AudioProvider";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "SpotcastAI",
  description: "Generate your podcast using AI",
  icons: {
    icon: "/icons/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="antialiased">
        <ConvexClerkProvider>
          <AudioProvider>
            {children}
            <Analytics />
          </AudioProvider>
        </ConvexClerkProvider>
      </body>
    </html>
  );
}
