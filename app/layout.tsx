import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLOWA - Motion Becomes Space",
  description: "From Animal Instinct to Human Movement, From Body Trajectory to Spatial Experience."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
