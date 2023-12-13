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
        width: 100%;
    display: flex;
    justify-content: center;
`;
const SpanTag = styled.span`
    cursor: pointer;
    color: blue;
`;

const Login = () => {
    const navigate = useNavigate();
    const [data,setData] = useState({
        email:"",
        password:""
    })

    console.log(data)
  return (
    <MainDiv>
        <InnerDiv>
            Welcome Back
        </InnerDiv>
        <SignupDiv>
            Sign in to get explore
        </SignupDiv>
        <form onSubmit={()=>console.log("sdfsdfd")}>
            <Input name="email" placeholder="Enter Your Email" label="Email" type="email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}></Input>
            <Input name="password" placeholder="Enter Your Password" label="Password" type="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}></Input>
            <Button type="submit" content="Login"/>
        </form>
       
        <AlreadySigninDiv>
            Didn't have an account? {" "}
            <SpanTag onClick={()=>navigate("/user/signup")}>Sign up</SpanTag>
        </AlreadySigninDiv>
    </MainDiv>
  )
}

export default Login