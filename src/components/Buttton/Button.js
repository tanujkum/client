import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top:10px;
`;
const Input = styled.button`
    padding: 10px 40px;
    background-color: aliceblue;
    width:57%;
    border: none;
    border-radius: 5px;
    cursor:pointer;
    &:hover {
       background-color:skyblue;
    }
`;

const Button = ({type,content}) => {
  return (
    <InputWrapper>
        <Input type={type}>{content}</Input>
    </InputWrapper>
  )
}

export default Button