import React from 'react'
import { DonateHart } from "../../svg"
import MobileBannerImg from '../../images/main-banner-m.jpg'
import FullBannerImg from '../../images/main-banner-d.jpg'
import { Link } from 'gatsby'

interface Props { }

function MainBanner(props: Props) {
    const { } = props

    return (
        <section className='main-banner'>
            <picture>
                <source media="(min-width: 768px)" srcSet={FullBannerImg} />
                <img className='banner' src={MobileBannerImg} alt="" />
            </picture>
            {/* <img className='banner' src={BannerImg} alt="" /> */}
            <div className="inner-text">
                <h1>עומר השארת לנו מתנה,<br />
                    אנחנו מעבירות אותה הלאה</h1>
                <div className="main-sub-title">עזרת לנו לראות, אנחנו נמשיך להפיץ את אורך, <br />טוב ליבך ושמחת החיים שלך.</div>
                <div className="ctas">
                    <Link to="/donate" className="donate-button"><DonateHart color='black' />לתרומה</Link>
                    <Link to="/donate" className="volunteer">להתנדבות</Link>
                </div>
            </div>
        </section>
    )
}

export default MainBanner