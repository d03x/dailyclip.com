import type { Metadata } from "next";
import { Inter, Lato, Roboto } from "next/font/google";
import "./styles/tailwind.css";
import ClientProvider from "@/provider/ClientProvider";
import { TRPCProvider } from "@/trpc";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400",
});
const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"],
});
const fontLato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "Daily Clip",
  description: "Explore your funny video",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0,user-scalable=no"
      />
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${fontLato.variable} ${roboto.variable} antialiased`}
      >
        <TRPCProvider>
          <ClientProvider>{children}</ClientProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
