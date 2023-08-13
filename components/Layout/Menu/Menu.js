'use client'
import { useEffect, useState } from "react";
import { useResize } from "@/utils/useResize";

import { Navigation, Burger } from "@/components/index";

import "./menu.scss";

export function Menu({ navLinksData }) {
    const [burgerMenu, setBurgerMenu] = useState(false)

    const openCloseMenu = () => () => {
        setBurgerMenu(!burgerMenu)
    }

    const windowWidth = useResize()

    useEffect(() => {
        const bodyScrollToggle = document.querySelector('html')
        if (burgerMenu) {
            bodyScrollToggle.classList.add('scrollOff')
        }

        return () => bodyScrollToggle.classList.remove('scrollOff')
    }, [burgerMenu])

    return (

        windowWidth.isScreenXl
            ? <nav className="main__menu">
                <Navigation
                    navLinks={navLinksData}
                    className="nav__list"
                    openCloseMenu={() => {}}
                />
            </nav>
            : <>
                <Burger
                    burgerMenu={burgerMenu}
                    openCloseMenu={openCloseMenu}
                />
                {
                    burgerMenu
                        ? <nav className="mobile__menu">
                            <Navigation
                                navLinks={navLinksData}
                                openCloseMenu={openCloseMenu}
                            />
                        </nav>
                        : null
                }
                
            </>

    )
}
