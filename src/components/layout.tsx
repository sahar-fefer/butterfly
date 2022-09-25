import React, { useState } from 'react'
import { Head } from '../pages';
import "../styles/styles.css"
import Footer from './footer'
import Nav from './nav'

interface Props {
    children?: JSX.Element[] | JSX.Element;
}
export const Layout = (props: Props) => {
    const { children } = props
    const [lang, setLang] = useState<string>('EN')

    const changeLang = (e: React.MouseEvent<HTMLElement>) => {
        if (lang === 'עב')
            setLang('EN')
        else
            setLang('עב')
        console.log(lang);
    }

    return (
        <div className={`${lang === 'EN' ? 'heb' : 'eng'} layout`}>
            <Head />
            <Nav lang={lang} changeLang={changeLang} />
            {children}
            <Footer />
        </div>
    )
}
export default Layout