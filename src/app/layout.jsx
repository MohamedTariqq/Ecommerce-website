import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const bodyfont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "900", "700"],
});

export const metadata = {
  title: "HEXASHOP/Home",
  description:
    "Discover a world od endless shopping possibilities at our online store. Browse, choose, and order your favorite products from the comfort of your home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyfont.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
