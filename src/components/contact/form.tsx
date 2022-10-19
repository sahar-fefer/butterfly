import React, { useRef, useState, useEffect } from 'react'
import AyeletAndOmer from '../../images/ayelet-and-omer.jpg'
import OmerTattoo from "../../images/butterflies-are-forever-omer's-tattoo.jpg"

interface FormInfo {
    subject: string,
    fullName: string,
    email: string,
    formContent: string
}

const Form = () => {
    const [formInfo, setFormInfo] = useState<FormInfo>({
        subject: '',
        fullName: '',
        email: '',
        formContent: ''
    })
    const [dropdownTitle, setDropdownTitle] = useState('נושא הפנייה');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const useOutsideClick = (callback: any) => {
        const ref = useRef<HTMLDivElement>(null);
        useEffect(() => {
            const handleClick = (event: any) => {
                if (isDropdownOpen && ref.current && !ref.current.contains(event.target)) {
                    callback();
                    setIsDropdownOpen(!isDropdownOpen)
                }
            };

            document.addEventListener('click', handleClick, true);

            return () => {
                document.removeEventListener('click', handleClick, true);
            };
        }, [ref, isDropdownOpen]);

        return ref;
    };

    const ref = useOutsideClick(() =>
        document.getElementsByClassName("dropdown")[0].classList.toggle("active"));

    const toggleButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        var dropdown = document.getElementsByClassName("dropdown")[0];
        dropdown.classList.toggle("active");
        e.preventDefault();

        if (e.target.type !== 'button') {
            setDropdownTitle(e.target.innerText);
            handleChange(e)
        }
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        let [name, value] = ''
        if (e.target.name && e.target.value) {
            [name, value] = [e.target.name, e.target.value]
        } else if (e.target.dataset.name && e.target.dataset.value) {
            [name, value] = [e.target.dataset.name, e.target.dataset.value]
        }
        setFormInfo({ ...formInfo, [name]: value });
        console.log('change formInfo', formInfo);
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        console.log('submit formInfo', formInfo);
        e.preventDefault();
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='dropdown' ref={ref}>
                <button type="button" onClick={(e: React.MouseEvent<HTMLElement>) => toggleButton(e as any)}>
                    {dropdownTitle}
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.12562 7.527C7.40092 7.5004 7.66124 7.38924 7.87087 7.2088L13.4981 2.38549C13.6382 2.27317 13.7543 2.13381 13.8396 1.97571C13.9248 1.81761 13.9774 1.64399 13.9941 1.46517C14.0109 1.28635 13.9916 1.10599 13.9373 0.934788C13.883 0.763591 13.7948 0.605058 13.678 0.468613C13.5612 0.332167 13.4182 0.220594 13.2574 0.140524C13.0967 0.0604543 12.9214 0.0135228 12.7422 0.00251778C12.5629 -0.00848722 12.3832 0.0166593 12.2139 0.0764632C12.0445 0.136267 11.8889 0.229507 11.7563 0.350642L6.99999 4.4287L2.24367 0.350642C2.11106 0.229506 1.95546 0.136267 1.7861 0.0764628C1.61675 0.0166589 1.4371 -0.0084877 1.25783 0.00251728C1.07856 0.0135223 0.903334 0.0604538 0.742564 0.140524C0.581796 0.220593 0.438769 0.332167 0.321977 0.468612C0.205185 0.605057 0.117022 0.76359 0.0627155 0.934787C0.00840945 1.10598 -0.0109196 1.28635 0.00586503 1.46517C0.0226506 1.64399 0.0752038 1.81761 0.160421 1.97571C0.245639 2.13381 0.361771 2.27316 0.501916 2.38549L6.12912 7.2088C6.26539 7.32595 6.42383 7.4145 6.59502 7.46916C6.76622 7.52383 6.94667 7.5435 7.12562 7.527Z" fill="#FF121C" />
                    </svg>
                </button>
                <ul>
                    <li onClick={(e: React.MouseEvent<HTMLElement>) => toggleButton(e as any)}
                        data-name='subject'
                        data-value="donation">תרומות</li>
                    <li onClick={(e: React.MouseEvent<HTMLElement>) => toggleButton(e as any)}
                        data-name='subject'
                        data-value="bracelets">הצמידים של עומר</li>
                    <li onClick={(e: React.MouseEvent<HTMLElement>) => toggleButton(e as any)}
                        data-name='subject'
                        data-value="house">הבית של עומר</li>
                    <li onClick={(e: React.MouseEvent<HTMLElement>) => toggleButton(e as any)}
                        data-name='subject'
                        data-value="house-available">בדיקת זמינות לבית לפתרון דיור</li>
                </ul>
            </div>
            <input placeholder='שם מלא'
                autoCapitalize='on'
                type="text"
                value={formInfo.fullName}
                name='fullName'
                minLength={2}
                maxLength={20}
                required={true}
                onChange={handleChange} />
            <input placeholder='מייל'
                type="email"
                value={formInfo.email}
                name='email'
                minLength={2}
                maxLength={40}
                required={true}
                onChange={handleChange} />
            <textarea placeholder='מה תרצו להגיד לנו?'
                value={formInfo.formContent}
                name='formContent'
                minLength={10}
                maxLength={650}
                required={true}
                onChange={(e) => handleChange(e)} />
            <input className='submit'
                type="submit"
                value="שליחת טופס" />
        </form>
    )
}

export default Form