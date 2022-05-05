import { valueToPercent } from '@mui/base';
import { useState } from 'react';

export const useFormLogic = ({ initialFormState, handleFormSubmit }) => {
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    console.log('value', e.target.value);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    handleFormSubmit(formState);
  };

  return [formState, setFormState, handleChange, handleSubmit];
};
