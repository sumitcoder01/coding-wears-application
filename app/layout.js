import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import LodingBar from "./components/LodingBar";
import "react-toastify/dist/ReactToastify.css";

import { Providers } from "./redux/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "coding wears - wear the code",
  description:
    "coding wears is e commerce which provides hoodies,Tshirt,stickers and mugs with coding slogans images which motivate you to become a good coder",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers>
           <LodingBar/>
            <Navbar />
            <ToastContainer
              position="top-left"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {children}
            <Footer />
        </Providers>
      </body>
    </html>
  );
}
