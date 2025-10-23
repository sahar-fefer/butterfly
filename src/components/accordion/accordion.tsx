import React, { useLayoutEffect, useRef, useState } from 'react'
import * as s from "./_accordion.module.scss";
interface Props {
    setActiveAccordion: Function;
    isActive: Boolean;
    id: Number;
    activeAccordion: Number;
    accordionsInfo: { question: String, answer: String };
}

const Accordion = (props: Props) => {
    const { accordionsInfo, isActive, setActiveAccordion, activeAccordion, id } = props
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

    const [elemHeight, setElemHeight] = useState(0);

    useLayoutEffect(() => {
        setElemHeight(ref.current.clientHeight);
    }, []);

    return (
        <div className={`${s.accordion} ${!isActive ? s.collapsed : ''}`}
            onClick={(e: React.MouseEvent<HTMLElement>) =>
                setActiveAccordion(activeAccordion === id ? -1 : id)}>
            <div className={s.accordionBox}>
                <div className={s.strip}>
                    <div className={s.question}>{accordionsInfo.question}</div>
                    <svg className={s.seeMore} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={s.plus} d="M6.50023 12L6.50023 1" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 6.49999L12 6.49999" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className={s.answerWrapper}
                    style={{ height: isActive ? elemHeight : 0 }}>
                    <div className={s.answer}
                        ref={ref}>
                        {accordionsInfo.answer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
