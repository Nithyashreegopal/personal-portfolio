import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nithyashree G V | Artificial Intelligence & Data Science Portfolio",
  description: "Explore the portfolio of Nithyashree G V, an Artificial Intelligence and Data Science student. Discover projects in real-time tracking, predictive maintenance, and data visualizations.",
  keywords: [
    "Nithyashree G V", 
    "Nithyashree Gopal",
    "Artificial Intelligence", 
    "Data Science", 
    "Web Developer Portfolio", 
    "Flask Developer", 
    "Python Developer", 
    "Predictive Maintenance IoT",
    "Real-Time Bus Tracking"
  ],
  authors: [{ name: "Nithyashree G V", url: "https://github.com/Nithyashreegopal" }],
  openGraph: {
    title: "Nithyashree G V | AI & Data Science Portfolio",
    description: "Premium developer portfolio showcasing advanced analytics, IoT systems, and interactive web projects.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} lg:h-full w-full overflow-x-hidden antialiased dark lg:overflow-hidden`}
    >
      <body className="lg:min-h-full w-full overflow-x-hidden flex flex-col font-sans bg-bg-dark text-foreground selection:bg-gold-400 selection:text-bg-dark lg:overflow-hidden">
        {children}
      </body>
    </html>
  );
}
