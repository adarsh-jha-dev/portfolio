import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Adarsh's Portfolio",
  description: "Know About Adarsh's Skills and Projects",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
