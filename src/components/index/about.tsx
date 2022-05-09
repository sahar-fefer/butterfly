import React from 'react'
import { Link } from "gatsby"
import "../../styles/about.scss"
import AboutButterfly from '../../images/about-butterfly.jpg'
import AboutHouse from '../../images/about-house.jpg'

interface Props { }

function About(props: Props) {
    const { } = props

    return (
        <section className='about'>
            <div className="sub-title">על העמותות</div>
            <h2>הסיפור של עומר</h2>
            <div className="info">עומר נסעה לטיול הגדול, עם המון חלומות ותמימות שהכול אפשרי - עומר נהרגה בנפאל. ב-21 שנות חייה<br /> הצליחה בדרכה האמיתית והמיוחדת לגעת בליבם של הרבה אנשים, היא ידעה לתת מקום לכול אדם, וכשהיא<br /> הביטה בך, ידעת שהיא איתך. כדי להנציח את זכרה של עומר הקמנו שתי עמותות.</div>
            <div className="ctas">
                <Link to="/" className="cta house">
                    <img className='cta-img' src={AboutHouse} alt="" />
                    <div className="text">
                        <div className="title">הבית של עומר</div>
                        <div className='more-info'>לפרטים</div>
                    </div>
                </Link>
                <Link to='/' className="cta butterfly">
                    <img className='cta-img' src={AboutButterfly} alt="" />
                    <div className="text">
                        <div className="title">הפרפרים של עומר</div>
                        <div className='more-info'>לפרטים</div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default About
