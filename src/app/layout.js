import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { Josefin_Sans } from "@next/font/google"; // Use the correct import path for Josefin Sans
import "./globals.css";

// Import Josefin Sans font with the correct options
const josefin = Josefin_Sans({
  subsets: ["latin"], // "latin" is the common subset for most projects
  weight: ["400", "700"], // Optionally specify weights you need
  style: ["normal", "italic"], // Optionally specify styles you need
});

export const metadata = {
  title: "Portfolio & Blog Website",
  description: "This is our best portfolio & blog website using React-JS!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
