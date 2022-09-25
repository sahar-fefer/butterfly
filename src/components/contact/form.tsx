import React, { useState } from 'react'
import AyeletAbdOmer from '../../images/ayelet-and-omer.jpg'
import OmerTattoo from "../../images/butterflies-are-forever-omer's-tattoo.jpg"

interface FormInfo {
    subject: string,
    fullName: string,
    email: string,
    formContent: string
}

function Form() {
    const [formInfo, setFormInfo] = useState<FormInfo>({
        subject: '',
        fullName: '',
        email: '',
        formContent: ''
    })
    // const handleChange = (e: React.SyntheticEvent<Element, Event>) => {
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement> || React.SelectHTMLAttributes<HTMLSelectElement>): void => {
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const handleChange = (e: any) => {
        console.log(e.target.name);

        // setFormInfo({ ...formInfo, e.target.name: e.target.value });
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        alert('An essay was submitted: ' + formInfo);
        e.preventDefault();
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <select value={formInfo.subject} name='subject' onChange={handleChange}>
                <option value="title">נושא הפנייה</option>
            </select>
            <input type="text" value={formInfo.fullName} name='fullName' onChange={handleChange} />
            <input type="email" value={formInfo.email} name='email' onChange={handleChange} />
            <textarea value={formInfo.formContent} name='formContent' onChange={handleChange} />
            <input className='submit' type="submit" value="Submit" />
        </form>
    )
}

export default Form