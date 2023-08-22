import './globals.css'
import {Inter} from 'next/font/google'
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Mohammad Mahdi Afshar | محمد مهدی افشار',
    description: "Another Developer who's trying to make the world a better place.",
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
