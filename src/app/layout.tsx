import type { Metadata } from "next";
import { Bebas_Neue, Archivo } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "C.R.A.B - Capability-enhanced Real-time AI Butler",
  description: "Genius butler with street-smart efficiency, obsessed with optimization and the best deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${archivo.variable} antialiased relative min-h-screen`}>
        <div className="fixed inset-0 animated-grid pointer-events-none" />
        <div className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,var(--coral),transparent)] blur-[80px] opacity-15 animate-float" />
        <div className="fixed bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,var(--teal),transparent)] blur-[80px] opacity-15 animate-float" style={{ animationDelay: '7s' }} />
        <div className="fixed top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,var(--gold),transparent)] blur-[80px] opacity-15 animate-float -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '14s' }} />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
