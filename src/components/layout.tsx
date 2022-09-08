import React from 'react'
import { Head } from '../pages';
import "../styles/styles.css"
import Footer from './footer'
import Nav from './nav'

interface Props {
    lang: String;
    changeLang: Function;
    children?: JSX.Element[] | JSX.Element;
}
export const Layout = (props: Props) => {
    const { lang, changeLang, children } = props
    return (
        <div className='layout'>
            <Head />
            <Nav lang={lang} changeLang={changeLang} />
            {children}
            <Footer />
        </div>
    )
}
export default Layout