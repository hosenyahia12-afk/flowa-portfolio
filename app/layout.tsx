import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "FLOWA — Environmental Design Portfolio", template: "%s — FLOWA Portfolio" },
  description: "FLOWA 环境设计作品集：从动物运动与人体行为，到空间生成、技术图纸与最终体验。",
  keywords: ["环境设计", "室内设计作品集", "空间设计", "FLOWA", "Environmental Design Portfolio"],
  openGraph: {
    title: "FLOWA — Motion Becomes Space",
    description: "A future fitness habitat generated from movement trajectories.",
    type: "website"
  }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f7f5" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
