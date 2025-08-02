// File: app/layout.tsx

import "./globals.css";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farcaster OpenSea Mini App",
  description: "Interact with OpenSea NFTs directly inside Farcaster",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
