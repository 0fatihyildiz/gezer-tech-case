import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: 'Gezer Tech Case',
    description: 'A Rick and Morty explorer with filters',
    openGraph: {
        title: 'Gezer Tech Case',
        description: 'A Rick and Morty explorer with filters',
        siteName: 'Gezer Tech Case',
    },
    twitter: {
        card: 'summary',
        title: 'Gezer Tech Case',
        description: 'A Rick and Morty explorer with filters',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
