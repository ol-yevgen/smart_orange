import './burger.scss';

export default function Burger ({ burgerMenu, openCloseMenu }) {

    const burgerStick1Animation = burgerMenu ? "stick stick-1 open" : "stick stick-1 close";
    const burgerStick2Animation = burgerMenu ? "stick stick-2 open" : "stick stick-2 close"
    const burgerStick3Animation = burgerMenu ? "stick stick-3 open" : "stick stick-3 close"

    return (
        <div
            className="header__burger"
            onClick={openCloseMenu()}
        >
            <div className={burgerStick1Animation}></div>
            <div className={burgerStick2Animation}></div>
            <div className={burgerStick3Animation}></div>
        </div>
    )
}