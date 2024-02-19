import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Nunito } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


export const metadata: Metadata = {
  title: 'Webgames - игры от Анатолия Бакума',
  description: 'Крестики-нолики, камень-ножницы-бумага, найди отличия - различные Браузерные игры от Анатолий Бакума',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable}`}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>

    </html>
  )
}
