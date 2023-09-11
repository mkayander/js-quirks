import "@/styles/globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JS Quirks",
  description: "A web app to demonstrate JavaScript quirks and other things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative flex min-h-screen flex-col justify-between ${inter.className}`}
      >
        <main className="flex grow flex-col">{children}</main>
        <footer>
          <div className="flex flex-col items-center justify-center py-4">
            <p className="text-sm text-gray-500">
              Made by{" "}
              <a
                href="https://github.com/mkayander"
                target="_blank"
                className="underline transition-colors hover:text-gray-300"
              >
                Max Kayander
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
