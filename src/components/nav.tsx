import React, { useEffect, useState } from 'react'
import { Link } from "gatsby"
import { DonateHart, Logo } from "../svg"

interface Props {
    lang: String;
    changeLang: Function;
}

function Nav(props: Props) {
    const { lang, changeLang } = props
    const [activeLink, setActiveLink] = useState<string>(window.location.pathname.replaceAll('/', ''))
    // const [isNavOpen, setIsNavOpen] = useState<boolean>(true)
    const [isNavOpen, setIsNavOpen] = useState<boolean>(JSON.parse(localStorage.getItem('isNavOpen') || ""))

    useEffect(() => {
        if (isNavOpen) {
            setTimeout(() => {
                setIsNavOpen(false);
                localStorage.setItem('isNavOpen', JSON.stringify(false));
            }, 250);
        }
        console.log('isNavOpen timeout', isNavOpen);
    }, [])

    useEffect(() => {
        if (isNavOpen)
            localStorage.setItem('isNavOpen', JSON.stringify(isNavOpen));
        // console.log('isNavOpen', isNavOpen);
    }, [isNavOpen]);

    const toggleNav = (e: React.MouseEvent<HTMLElement>) => {
        setIsNavOpen(!isNavOpen)
        e.preventDefault()
    }

    return (
        <nav className={isNavOpen ? 'open' : 'close'}>
            <div className='right'>
                <button className="burger-bar" onClick={(e: React.MouseEvent<HTMLElement>) => { toggleNav(e) }}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
                <div className="separator right" />
                <Link className="logo" to='/'>
                    <Logo />
                </Link>
                <div className="separator left" />
                <button className="background-side-nav" onClick={(e: React.MouseEvent<HTMLElement>) => { toggleNav(e) }}></button>
                <div className="links">
                    <Link to='/omers-butterflies'
                        // onClick={(e: React.MouseEvent<HTMLElement>) => { toggleNav() }}
                        className={activeLink === 'omers-butterflies' ? 'active' : ''}>
                        הפרפרים של עומר
                    </Link>
                    <Link to='/omers-house'
                        // onClick={(e: React.MouseEvent<HTMLElement>) => { toggleNav() }}
                        className={activeLink === 'omers-house' ? 'active' : ''}>
                        הבית של עומר
                    </Link>
                    <Link to='/bracelets'
                        // onClick={(e: React.MouseEvent<HTMLElement>) => { toggleNav() }}
                        className={activeLink === 'bracelets' ? 'active' : ''}>
                        צמידים
                    </Link>
                    <Link to='/events'
                        // onClick={(e: React.MouseEvent<HTMLElement>) => { toggleNav() }}
                        className={activeLink === 'events' ? 'active' : ''}>
                        אירועים
                    </Link>
                    <Link to='/donate'
                        className={`donate ${activeLink === 'donate' ? 'active' : ''}`}>
                        מתנדבים ותורמים
                    </Link>
                    <Link to='/about'
                        // onClick={(e: React.MouseEvent<HTMLElement>) => { toggleNav() }}
                        className={activeLink === 'about' ? 'active' : ''}>
                        אודות
                    </Link>
                    <Link to='/contact'
                        // onClick={(e: React.MouseEvent<HTMLElement>) => { toggleNav() }}
                        className={activeLink === 'contact' ? 'active' : ''}>
                        צור קשר
                    </Link>
                    <button className="language" onClick={(e: React.MouseEvent<HTMLElement>) => { changeLang() }}>{lang}</button>
                </div>
            </div>
            <div className='left'>
                <button className="language" onClick={(e: React.MouseEvent<HTMLElement>) => { changeLang() }}>{lang}</button>
                <Link to="/donate" className="donate-button">
                    <DonateHart color='white' />
                    לתרומה
                </Link>
            </div>
        </nav>
    )
}

export default Nav
