import React from 'react'
import AyeletFooter from '../../images/about-ayelet-shemesh.jpg'
import YaelFooter from '../../images/about-yael-sarig.jpg'

function AboutFooter() {

    return (
        <section className='about-footer'>
            <div className="m-to-d-l">
                <div className="images-wrapper">
                    <img className='person' src={AyeletFooter} alt="" />
                    <img className='person' src={YaelFooter} alt="" />
                </div>
                <div className="title">
                    איילת שמש ויעל שריג
                </div>
                <div className="info">
                    איילת היא אמא של עומר וגשעומר נהרגה בנפאל היה לה מאוד חשוב להנציח את זכרה.
                    <br />
                    <br />
                    יעל ואיילת הכירו ב?????? ומאז הן חברות טובות ואי אפשר להפריד בינהן. כשאיילת החליטה שהיא מקימה עמותות לעומר ליעל זה היה ברור שהיא תהייה חלק מהתהליך.
                </div>
            </div>
            <div className="d-l-grid">
                <div className="box">
                    <img className='person' src={AyeletFooter} alt="" />
                    <div className="about-person">
                        <div className="title">איילת שמש</div>
                        <div className="info">
                            איילת היא אמא של עומר וכשעומר נהרגה בנפאל היה לה מאוד חשוב להנציח את זכרה.
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img className='person' src={YaelFooter} alt="" />
                    <div className="about-person">
                        <div className="title">יעל שריג</div>
                        <div className="info">
                            יעל ואיילת הכירו ב?????? ומאז הן חברות טובות ואי אפשר להפריד בינהן. כשאיילת החליטה שהיא מקימה עמותות לעומר ליעל זה היה ברור שהיא תהייה חלק מהתהליך.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutFooter