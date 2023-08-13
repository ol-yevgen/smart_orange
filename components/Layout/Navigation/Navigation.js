'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./navigation.scss";

export const Navigation = ({ navLinks, className, openCloseMenu }) => {
    const pathname = usePathname()
    return (
        <ul className={className}>
            {navLinks.map(link => {
                const isActive = pathname === link.href

                return <li key={link.label}>
                    <Link
                        href={link.href}
                        className={isActive
                            ? "active__nav nav__link"
                            : "nav__link"}
                        onClick={openCloseMenu()}
                    >
                        {link.label.toUpperCase()}
                    </Link>
                </li>
            })}
        </ul>
    )
}