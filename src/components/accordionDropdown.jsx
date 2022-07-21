import React from 'react'
import "../styles/accordion-dropdown.scss"

function AccordionDropdown({ question, answer }) {
    return (
        <div className="dropdown">
            <div className="shown">
                <svg className='see-more' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='plus' d="M7.5 14.5L7.5 1.5" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 8L14 8" stroke="#FF121C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="question">{question}</div>
            </div>
            <div className="answer">{answer}</div>
        </div>
    )
}

export default AccordionDropdown