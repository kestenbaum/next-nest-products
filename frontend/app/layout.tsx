import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { AuthProvider } from "@/context/authContext";

//todo http cookie in nest js

export const metadata: Metadata = {
  title: "Create Next App Products",
  description: "product crud application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
