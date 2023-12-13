import React, { useState } from 'react'

import styled from 'styled-components';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttton/Button';
import { useNavigate } from 'react-router-dom';

const MainDiv = styled.div`
    width: 400px;
    height: 500px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
`;
const InnerDiv = styled.div`
    font-size: 30px;
    font-weight: 600;
`;
const SignupDiv = styled.div`
    font-weight: 400;
`;
const AlreadySigninDiv = styled.div`
    margin-top:10px;
`;
const SpanTag = styled.span`
    cursor: pointer;
    color: blue;
`;

const Form = () => {
    const navigate = useNavigate();
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })
    console.log(data.name,data.email,data.passsword)
  return (
    <MainDiv>
        <InnerDiv>
            Welcome
        </InnerDiv>
        <SignupDiv>
            Sign up to get started
        </SignupDiv>
        <form onSubmit={()=>console.log("sdfsdfd")}>
            <Input type="text" name="name" placeholder="Enter Your Full Name" label="Full name"  value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
            <Input type="email" name="email" placeholder="Enter Your Email" label="Email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
            <Input type="password" name="password" placeholder="Enter Your Password" label="Password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
            <Button type="submit" content="Signup"/>
        </form>
      
        <AlreadySigninDiv>
            Already have an account? {" "}
            <SpanTag onClick={()=>navigate('/user/login')}>Sign in</SpanTag>
        </AlreadySigninDiv>
    </MainDiv>
  )
}

export default Form