import { useState, useEffect } from 'react';

export interface FormInfo {
  subject: string,
  fullName: string,
  email: string,
  formContent: string
}

const useForm = (callback: any, validate: any) => {

  const [formInfo, setFormInfo] = useState<FormInfo>({
    subject: '',
    fullName: '',
    email: '',
    formContent: ''
  })
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      console.log('submit');
    }
  }, [errors]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    setErrors(validate(formInfo));
    setIsSubmitting(true);
    console.log('submit func');

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    e.persist();
    let [name, value] = ''
    if (e.target.name && e.target.value) {
      [name, value] = [e.target.name, e.target.value]
    } else if (e.target.dataset.name && e.target.dataset.value) {
      [name, value] = [e.target.dataset.name, e.target.dataset.value]
    }
    setFormInfo({ ...formInfo, [name]: value });
  };

  return {
    handleChange,
    handleSubmit,
    formInfo,
    errors,
  }
};

export default useForm;