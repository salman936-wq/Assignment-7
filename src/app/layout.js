import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContextProvider from "../provider/ContextProvider";
import { ToastContainer } from "react-toastify";

const geist = Geist({
  subsets: ["latin"],
});


export default function RootLayout({ children }) {

  
  return (
    <html lang="en" className={`${geist.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">

<Navbar />
<ContextProvider>
  {children}
</ContextProvider>
<ToastContainer/>
<Footer />

      </body>
    </html>
  );
}
