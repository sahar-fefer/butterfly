import React from 'react'
import "../styles/faq.scss"

// interface Props { }

// function Faq(props: Props) {
    // const { } = props
    
    function Faq() {
        const toggleAccordion = (e) => {
        e.target.closest('.section').classList.toggle('see-more')
        
    }

    return (
        <section className="faq">
            <h3>שאלות נפוצות</h3>
            <div className="accordion">
                <div className="section see-more" onClick={(e) => toggleAccordion(e)}>
                    <div className="shown">
                        <svg className='see-more' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='plus' d="M7.5 14.5L7.5 1.5" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 8L14 8" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="question">לורם איפסום דולור סיט אמט, קונסקטורר?</div>
                    </div>
                    <div className="answer">אדיפיסינג אלית צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.</div>
                </div>
                <div className="section" onClick={(e) => toggleAccordion(e)}>
                    <div className="shown">
                        <svg className='see-more' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='plus' d="M7.5 14.5L7.5 1.5" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 8L14 8" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="question">לורם איפסום דולור סיט אמט, קונסקטורר?</div>
                    </div>
                    <div className="answer">אדיפיסינג אלית צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.</div>
                </div>
                <div className="section" onClick={(e) => toggleAccordion(e)}>
                    <div className="shown">
                        <svg className='see-more' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='plus' d="M7.5 14.5L7.5 1.5" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 8L14 8" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="question">לורם איפסום דולור סיט אמט, קונסקטורר?</div>
                    </div>
                    <div className="answer">אדיפיסינג אלית צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.</div>
                </div>
                <div className="section" onClick={(e) => toggleAccordion(e)}>
                    <div className="shown">
                        <svg className='see-more' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='plus' d="M7.5 14.5L7.5 1.5" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 8L14 8" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="question">לורם איפסום דולור סיט אמט, קונסקטורר?</div>
                    </div>
                    <div className="answer">אדיפיסינג אלית צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.</div>
                </div>
                <div className="section" onClick={(e) => toggleAccordion(e)}>
                    <div className="shown">
                        <svg className='see-more' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='plus' d="M7.5 14.5L7.5 1.5" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 8L14 8" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="question">לורם איפסום דולור סיט אמט, קונסקטורר?</div>
                    </div>
                    <div className="answer">אדיפיסינג אלית צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.</div>
                </div>
            </div>
        </section>
    )
}

export default Faq