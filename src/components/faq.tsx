import React from 'react'
import "../styles/faq.scss"

function Faq() {
    const faqInfo: { question: string, answer: string }[] = [
        {
            question: 'לורם איפסום דולור סיט אמט, קונסקטורר?',
            answer: 'אדיפיסינג אלית צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.'
        }, {
            question: 'לורם איפסום דולור סיט אמט, קונסקטורר?',
            answer: 'אדיפיסינג אלית צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.'
        }, {
            question: 'לורם איפסום דולור סיט אמט, קונסקטורר?',
            answer: 'אדיפיסינג אלית צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.'
        }
    ];
    const accordionClick = (e: React.MouseEvent<HTMLElement>) => {
        const allDropdowns = Array.from(
            document.getElementsByClassName('dropdown')
        );

        const target = (e.target as any).closest('.dropdown')

        allDropdowns.map((elem, key) => {
            if (key === parseInt(target.id)) {
                if (target.classList.contains('active')) target.classList.remove('active')
                else target.classList.add('active')
            }
            else elem.classList.remove('active')
        })

    }

    const accordionElements = faqInfo.map((dropdownsInfo, key: number) => (
        <div className="dropdown" onClick={accordionClick} id={key.toString()} key={key}>
            <div className="strip">
                <svg className='see-more' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='plus' d="M7.5 14.5L7.5 1.5" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 8L14 8" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="question">{dropdownsInfo.question}</div>
            </div>
            <div className="answer">{dropdownsInfo.answer}</div>
        </div>
    ))

    return (
        <section className="faq">
            <h3>שאלות נפוצות</h3>
            <div className="accordion">
                {accordionElements}
            </div>
        </section>
    )
}

export default Faq