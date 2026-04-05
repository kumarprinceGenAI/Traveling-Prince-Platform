import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Traveling Prince | Exploration & High-End Itineraries",
  description: "Modern travel stories from a decade of raw adventures across the subcontinent. Detailed guides, budget insights, and hidden trails.",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "WEQe1C9oB3DaKDMV8Ju4-I9Dzd97R9Nh6gc3PAEJ3o0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-bg-dark text-text-main min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
