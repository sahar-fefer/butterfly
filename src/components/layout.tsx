import React, { useState } from 'react'
// import { Head } from '../pages';
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
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            {/* <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap" rel="preload" as="style" /> */}
            {/* <Head /> */}
            <Nav lang={lang} changeLang={changeLang} />
            {children}
            <Footer />
        </div>
    )
}
export default Layout


export const Head = () => {
    return (
        <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap" rel="preload" as="style" />
        </>
    );
};