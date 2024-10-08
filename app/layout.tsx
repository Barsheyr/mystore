import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Footer from "@/components/global/Footer";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({
  subsets: ["latin"], // You can add subsets as needed
  weight: ["400", "500", "700"], // Add the desired font weights
});

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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={roboto.className}>
          <Providers>
            <Navbar />
            <Container className="py-20">{children}</Container>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
