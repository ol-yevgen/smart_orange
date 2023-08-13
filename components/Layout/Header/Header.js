import Link from "next/link";
import Image from "next/image";
import { getData } from '@/utils/getData'

import { Menu } from "@/components/index";

import "./header.scss";

import logo from '@/public/icons/logo.svg'

export default async function Header() {

    const navLinksData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}navLinks`)

    return (
        <header className='header' >
            <div className='header__logo'>
                <Link href="/"
                >
                    <Image
                        src={logo}
                        width={69}
                        height={41}
                        className="logo"
                        alt="logo" />
                </Link>
            </div>
            <Menu
                navLinksData={navLinksData}
            />
            
        </header>
    )
}
