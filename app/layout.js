import { Header, Footer } from '@/components/index';

import './styles/globals.scss';

export const metadata = {
    title: 'Digital project',
    description: 'Home project',
}

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body
                suppressHydrationWarning={true}>
                <div className='wrapper'>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
