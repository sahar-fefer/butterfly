import React from 'react'
import "../styles/faq.scss"
import AccordionDropdown from './accordionDropdown'

// interface Props { }

// function Faq(props: Props) {
// const { } = props

function Faq() {
    const toggleAccordion = (e) => {
        e.target.closest('.dropdown').classList.toggle('active')
        console.log(e);
    }

    const accordionDropdownsInfo = [
        {
            question: 'לורם איפסום דולור סיט אמט, קונסקטורר?',
            answer: 'אדיפיסינג אלית צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.'
        },
        {
            question: 'לורם איפסום דולור סיט אמט, קונסקטורר?',
            answer: 'אדיפיסינג אלית צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.'
        },
        {
            question: 'לורם איפסום דולור סיט אמט, קונסקטורר?',
            answer: 'אדיפיסינג אלית צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.'
        }
    ]

    const accordionElements = accordionDropdownsInfo.map((dropdownsInfo, key) => (
        < AccordionDropdown
            question={dropdownsInfo.question}
            answer={dropdownsInfo.answer}
            key={key}
            // onClick={(e) => toggleAccordion(e)} />
            onClick={console.log(key)} />
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