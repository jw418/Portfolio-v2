import "./globals.css";
//import Head from "next/head";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JW418 Portfolio",
  description: "JW418 Portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="fr-FR" className="scroll-smooth" suppressHydrationWarning>
        <body className="bg-gray-100 dark:bg-gray-800 font-sans antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            //disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
