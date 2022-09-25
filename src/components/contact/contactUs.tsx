import React from 'react'

function contactUs() {

    return (
        <section className='contact-us'>
            <h2>צור קשר</h2>
            <div className='title sub'>שלחו פנייה ונשמח לעמוד לרשותכם בכל נושא</div>
            <div className='title m'>יש לכם שאלה דחופה?</div>
            <div className='text s-title'>אנחנו זמינות עבורכם גם בטלפון:</div>
            <div className='text'>
                יעל -
                <span className="num"> 052-3338118</span>
            </div>
            <div className='text'>
                איילת -
                <span className="num"> 054-4404322</span>
            </div>
            <div className='title m'>מייל</div>
            <div className="email">omer.butterflies@gmail.com</div>
        </section>
    )
}

export default contactUs