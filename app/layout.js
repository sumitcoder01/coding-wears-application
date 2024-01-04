import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'coding wears - wear the code',
  description: 'coding wears is e commerce which provides hoodies,Tshirt,stickers and mugs with coding slogans images which motivate you to become a good coder'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
