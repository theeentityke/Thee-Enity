import DynamicBackground from "./components/DynamicBackground";
import Navbar from "./components/NavBar";
import ScrollBar from "./components/ScrollBar";
import "./globals.css";

export const metadata = {
  title: "Thee Entity",
  description: "Most Confident Company Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative text-black overflow-x-hidden">
        {/* Background */}
        <DynamicBackground />

        {/* Navbar */}
        <Navbar />

        {/* Scroll Progress Indicator */}
        <ScrollBar />

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}