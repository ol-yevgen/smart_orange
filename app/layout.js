import { Header, Footer } from '@/components/index';

import localFont from 'next/font/local';
const myFont = localFont({ src: '../public/fonts/TTHoves-Regular.ttf' });

import './styles/globals.scss';

export const metadata = {
    title: 'Digital project',
    description: 'Home project',
}

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className={myFont.className}
                suppressHydrationWarning={true}>
                {/* <Header /> */}
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
