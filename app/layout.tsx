import type { Metadata } from "next";
import "./globals.css";
import ConvexClerkProvider from "./providers/ConvexClerkProvider";

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
    // <ConvexClerkProvider>
    <html>
      <body className="antialiased">
        {children}
      </body>
    </html>
    // </ConvexClerkProvider >
  );
}
