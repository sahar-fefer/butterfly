import React, { useLayoutEffect, useRef, useState } from 'react'
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
        <div className={`accordion ${!isActive ? 'collapsed' : ''}`}
            onClick={(e: React.MouseEvent<HTMLElement>) =>
                setActiveAccordion(activeAccordion === id ? -1 : id)}>
            <div className="accordion-box">
                <div className="strip">
                    <div className="question">{accordionsInfo.question}</div>
                    <svg className='see-more' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='plus' d="M6.50023 12L6.50023 1" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 6.49999L12 6.49999" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className='answer-wrapper'
                    style={{ height: isActive ? elemHeight : 0 }}>
                    <div className='answer'
                        ref={ref}>
                        {accordionsInfo.answer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
