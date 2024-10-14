import Header from '@/components/header';
import '../styles/globals.css';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'NotDaily',
    description: 'Not daily stock info tracker',
    icons: {
        icon: '/Cee.png',
        // You can specify multiple sizes:
        // icon: [
        //   { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        //   { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        //   { url: '/favicon.ico', sizes: 'any' },
        // ],
    },
}

export default function RootLayout({ children }: {
    children: React.ReactNode

}) {
    return (
        <html lang="en">
            <body>
                {/* <Header /> */}
                {/* {header} */}
                {children}
            </body>
        </html>
    );
}
