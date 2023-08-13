import { getData } from '@/utils/getData'
import Image from 'next/image';
import Link from 'next/link';
import { SocialAll, FooterLinks } from '@/components/index';

import './footer.scss';

export default async function Footer() {
    const footerLinksList = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}footerLinksList`)

    return (
        <footer className='footer'>
            
        </footer>
    )
}
