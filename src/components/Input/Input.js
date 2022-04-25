import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

export default function Text({ value='', onChange, ...rest }) {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => setInputValue(value), [value]);

    const handleChange = (event) => {
        setInputValue(event.target.value);

        if (onChange) {
            onChange(event);
        }
    };
    

    return(
        <TextField 
            value={inputValue}
            className="Please"
            onChange={handleChange}
            {...rest}
            
        ></TextField>
    )
}