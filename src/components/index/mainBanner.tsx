import React from 'react'
import { DonateHart } from "../../svg"
import BannerImg from '../../images/main-banner.jpg'
import "../../styles/main-banner.scss"
import { Link } from 'gatsby'

interface Props { }

function MainBanner(props: Props) {
    const { } = props

    return (
        <section className='main-banner'>
            <img className='banner' src={BannerImg} alt="" />
            <div className="inner-text">
                <h1>עומר השארת לנו מתנה,<br />
                    אנחנו מעבירות אותה הלאה</h1>
                <div className="sub-title">עזרת לנו לראות, אנחנו נמשיך להפיץ את אורך, טוב ליבך ושמחת החיים שלך.</div>
                <div className="ctas">
                    <Link to="/" className="volunteer">להתנדבות</Link>
                    <Link to="/" className="donate">לתרומה <DonateHart color='black' /></Link>
                </div>
            </div>
        </section>
    )
}

export default MainBanner