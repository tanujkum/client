import React, { useState } from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const InputWrapper = styled.div`
    margin-top:10px;
`;



const Input = ({label,name,placeholder,type,value}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <InputWrapper>
            {/* <Box
            component="form"
            sx={{
                '& > :not(style)': {width: '80%' }, 
              }}
            noValidate
            autoComplete="off"
            > */}
                <TextField id="outlined-basic" label={label} variant="outlined" name={name} placeholder={placeholder} type={type}/>            
            {/* </Box> */}
        </InputWrapper>
       
    )
}

export default Input