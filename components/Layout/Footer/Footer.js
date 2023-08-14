import { getData } from '@/utils/getData'
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/icons/footerLogo.svg'

import './footer.scss';

export default async function Footer() {
    const footerLinksList = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}navLinks`)
    const footerContactsList = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}footerContacts`)
    const socialList = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}socialList`)

    return (
        <footer className='footer'>
            <div className='footer__top'>
                <Link href='/'>
                    <Image
                        src={logo}
                        width={145}
                        height={94}
                        className="footer__nav"
                        alt="logo"
                    />
                </Link>
                
                <ul className='footer__nav footer__nav-center footer__nav-information'>
                    <li className='footer__nav-title'>Информация</li>
                    {footerLinksList.map(link => {
                        return (
                            <li
                                key={link.id}
                                className='footer__nav-link'
                            >
                                <Link href={link.href}>
                                    {link.label.slice(0, 1).toUpperCase() + link.label.slice(1).toLowerCase()}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <ul className='footer__nav footer__nav-center'>
                    <li className='footer__nav-title'>Контакты</li>
                    {footerContactsList.map(link => {
                        return (
                            <li
                                key={link.id}
                                className='footer__nav-link footer__nav-contacts'
                            >
                                <Image
                                    src={link.href}
                                    width={16}
                                    height={16}
                                    alt="logo" />
                                <span>{link.label}</span>
                            </li>
                        )
                    })}
                </ul>
                <ul className='footer__nav footer__nav-social'>
                    <li className='footer__nav-title'>Социальные сети</li>
                    <li className='footer__nav-link footer__nav-socials'>
                        {socialList.map(link => {
                            return (
                                <Link
                                    key={link.id}
                                    href={link.href} className='footer__social-list'>
                                    <Image
                                        src={link.href}
                                        width={16}
                                        height={16}
                                        alt="logo" />
                                </Link>

                            )
                        })}
                    </li>
                    
                </ul>
            </div>
            <div className='footer__bottom'>
                <span className='footer__bottom-text'>
                    © 2019 Digital Project. Все права защищены.
                </span>
            </div>
        </footer>
    )
}
