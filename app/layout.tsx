import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aditya Glass & Aluminium',
  description: 'Premium glass frameworks for modern buildings and houses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AnimatePresence mode="wait">
          <main>{children}</main>
        </AnimatePresence>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

