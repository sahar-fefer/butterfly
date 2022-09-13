import React, { useState } from 'react'
import { Link } from "gatsby"
import { DonateHart, Logo } from "../svg"

interface Props {
    lang: String;
    changeLang: Function;
}

function Nav(props: Props) {
    const { lang, changeLang } = props
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <nav className={isNavOpen ? 'open' : 'close'}>
            <div className='right'>
                <button className="burger-bar" onClick={(e: React.MouseEvent<HTMLElement>) => { toggleNav() }}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
                <div className="separator right" />
                <Link className="logo" to='/'>
                    <Logo />
                </Link>
                <div className="separator left" />
                <button className="background-side-nav" onClick={(e: React.MouseEvent<HTMLElement>) => { toggleNav() }}></button>
                {/* <div className="side-bar"></div> */}
                <div className="links">
                    <Link to='omers-batterfly'>הפרפרים של עומר</Link>
                    <Link to='omers-house'>הבית של עומר</Link>
                    <Link to='bracelets'>צמידים</Link>
                    <Link to='events'>אירועים</Link>
                    <Link className='donated' to='donated'>מתנדבים ותורמים</Link>
                    <Link to='about'>אודות</Link>
                    <Link to='contact'>צור קשר</Link>
                    <button className="language" onClick={(e: React.MouseEvent<HTMLElement>) => { changeLang() }}>{lang}</button>
                </div>
            </div>
            <div className='left'>
                <button className="language" onClick={(e: React.MouseEvent<HTMLElement>) => { changeLang() }}>{lang}</button>
                <Link to="/" className="donate">
                    <DonateHart color='white' />
                    לתרומה
                </Link>
            </div>
        </nav>
    )
}

export default Nav
