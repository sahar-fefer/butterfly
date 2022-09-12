import React, { useState } from 'react'
import Accordion from './accordion';

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
    const [activeAccordion, setActiveAccordion] = useState<Number>(-1);

    const accordionElements = faqInfo.map((accordionsInfo, key: number) => (
        <Accordion accordionsInfo={accordionsInfo} key={key} id={key} isActive={activeAccordion === key} activeAccordion={activeAccordion} setActiveAccordion={setActiveAccordion} />
    ))

    return (
        <section className="faq">
            <div className="content-wrapper">
                <h3>שאלות נפוצות</h3>
                <div>
                    {accordionElements}
                </div>
            </div>
        </section>
    )
}

export default Faq