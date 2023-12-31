import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JavaScript Journeys: Exploring the Realm of Code and Creativity",
  description:
    "Designed to provide comprehensive and informative info about the advanced JavaScript topics with clear explanations and code examples to help you grasp the concepts effectively. Whether you're building complex web applications, working on front-end frameworks, or exploring JavaScript's versatility, this blog is your go-to resource for mastering JavaScript's advanced topics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <body className={inter.className}>{children}</body>
      </head>
    </html>
  );
}
