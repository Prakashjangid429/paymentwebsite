import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"
import { Montserrat, Open_Sans } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Spiral Pay - Modern Payment Gateway Solutions",
  description:
    "Secure, fast, and reliable payment processing for businesses of all sizes. Join thousands of companies who trust Spiral Pay for their payment needs.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-sans: ${openSans.variable};
  --font-heading: ${montserrat.variable};
}
        `}</style>
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <AuthProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
