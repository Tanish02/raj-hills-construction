import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black via-zinc-950 to-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// end code
