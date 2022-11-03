import { FormInfo, Errors } from './useForm';

export default function validate(formInfo: FormInfo) {
    let errors: Errors = {};
    const emailRx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    const textRx = /^[A-Za-z\u0590-\u05fe\0-9\-_!?@₪%():...,=\n]+$/;
    // const emailRx = /\S+@\S+\.\S+/;

    if (!formInfo.subject) {
        errors.subject = 'שדה חובה';
    }
    if (!formInfo.fullName) {
        errors.fullName = 'שדה חובה';
    } else if (!textRx.test(formInfo.fullName)) {
        errors.formContent = 'שימוש בתווים לא חוקיים כמו: <>{}^~;';
    } else if (formInfo.fullName.length < 2) {
        errors.fullName = 'שדה זה צריך להכיל 2 תווים לפחות';
    } else if (formInfo.fullName.length > 40) {
        errors.fullName = 'שדה זה צריך להכיל עד 40 תווים';
    }
    if (!formInfo.email) {
        errors.email = 'שדה חובה';
    } else if (!emailRx.test(formInfo.email)) {
        errors.email = 'כתובת אימייל לא תקינה';
    }
    if (!formInfo.formContent) {
        errors.formContent = 'שדה חובה';
    } else if (!textRx.test(formInfo.formContent)) {
        errors.formContent = 'שימוש בתווים לא חוקיים כמו: <>{}^~;';
    } else if (formInfo.formContent.length < 8) {
        errors.formContent = 'שדה זה צריך להכיל 8 תווים לפחות';
    } else if (formInfo.formContent.length > 800) {
        errors.formContent = 'שדה זה צריך להכיל עד 800 תווים';
    }
    return errors;
};