import { FormInfo } from './useForm';

interface Errors {
    subject?: string,
    fullName?: string,
    email?: string,
    formContent?: string
}

export default function validate(formInfo: FormInfo) {
    let errors: Errors = {};
    const emailRx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    const textRx = /^[A-Za-z\u0590-\u05fe\0-9\-_!?@₪%():...,=\n]+$/;
    // const emailRx = /\S+@\S+\.\S+/;

    if (!formInfo.subject) {
        errors.subject = 'Subject is required';
    }
    if (!formInfo.fullName) {
        errors.fullName = 'שדה חובה';
    } else if (!textRx.test(formInfo.fullName)) {
        errors.formContent = 'שימוש בתווים לא חוקיים כמו: <>{}^~;';
    } else if (formInfo.fullName.length < 2) {
        errors.fullName = 'Full Name must be 2 or more characters';
    } else if (formInfo.fullName.length > 40) {
        errors.fullName = 'Full Name must be 40 or less characters';
    }
    if (!formInfo.email) {
        errors.email = 'שדה חובה';
    } else if (!emailRx.test(formInfo.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!formInfo.formContent) {
        errors.formContent = 'שדה חובה';
    } else if (!textRx.test(formInfo.formContent)) {
        errors.formContent = 'שימוש בתווים לא חוקיים כמו: <>{}^~;';
    } else if (formInfo.formContent.length < 8) {
        errors.formContent = 'Form Content must be 8 or more characters';
    } else if (formInfo.formContent.length > 800) {
        errors.formContent = 'Form Content must be 800 or less characters';
    }
    return errors;
};