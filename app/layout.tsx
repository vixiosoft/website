import { Geist, Inter } from "next/font/google"

import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import SmoothScroll from "@/components/shared/SmoothScroll"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-inter",
        geist.variable,
        inter.variable
      )}
    >
      <body className="bg-ext-background">
        <ThemeProvider forcedTheme="light">
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
