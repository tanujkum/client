import React from 'react';
import styled from 'styled-components';
import Avatar from '../../assets/avatar.png'
import { IoIosSend } from "react-icons/io";

const MainDiv = styled.div`
    width: 100%;
    // height: 500px;
    // box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    background-color: white;
    display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
`;
const LeftDiv = styled.div`
    width:25%;
    background-color: #f1ffff;
`;
const MiddleDiv = styled.div`
    width:50%;
    background-color: white;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const RightDiv = styled.div`
    width:25%;
    background-color: aliceblue;
`;
const InsideLeftDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const InsideLeft = styled.div`
    margin-left:30px;
`;
const LeftSecondDiv = styled.div`
    margin: 10px 0px 0px 16px;
`;
const MessHeaderLeft = styled.div`
    color: #7979ff;
    font-size: 20px;
    font-weight: 600;
    margin-left: 27px;
`;
const InsideSecondDiv = styled.div`
`;
const InsideMiddlwDiv = styled.div`
  width:75%;
  background-color:aliceblue;
  height:80px;
  margin-top: 30px;
  border-radius: 50px;
    display:flex;
`;
const InsideMiddlwDiv1 = styled.div`
    height: 65%;
    width: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0.5em;
      }
    
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
    
      &::-webkit-scrollbar-thumb {
        background-color: transparent;
      }
`;
const InsideMiddlwDiv1_Inside = styled.div`
    height:400px;
    padding:14px 10px;

`;
const InsideMiddlwDiv2 = styled.div`
    padding:14px 10px;
    width: 60%;
    display: flex;

`;
const Input = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 20px;
    padding: 5px;
    background-color: lightgray;

`;
const One = styled.div`
    width:300px;
    background-color:#e4dcdc;
    border-radius:8px;
    padding:8px;

`;
const Two = styled.div`
    width:300px;
    background-color:#208fa0;
    border-radius:8px;
    padding:8px;
    margin-left:auto;
    color: white;
`;

const Image = styled.img``;

const Dashbaord = () => {
    const contacts = [
        {
            name:"Vishwas Pandey",
            status:"Available",
            img:Avatar
        },
        {
            name:"Himashu Sharma",
            status:"Available",
            img:Avatar
        },
        {
            name:"Suraj Bheda",
            status:"Available",
            img:Avatar
        },
        {
            name:"Sushant Tyagi",
            status:"Available",
            img:Avatar
        },
    ]
  return (
    <MainDiv>
        <LeftDiv>
            <InsideLeftDiv>
                <img src={Avatar} height={75} width={75}/>
                <InsideLeft>
                    <h3>Tanuj Tutorial</h3>
                    <p>My Account</p>
                </InsideLeft>
            </InsideLeftDiv>
            <hr/>
            <LeftSecondDiv>
                <MessHeaderLeft>
                    Messages
                </MessHeaderLeft>
                <InsideSecondDiv>
                    {
                        contacts.map((item,index)=>{
                            return (
                                <InsideLeftDiv key={index}>
                                    <Image src={item.img} height={75} width={75}/>
                                    <InsideLeft>
                                        <h3>{item.name}</h3>
                                        <p>{item.status}</p>
                                    </InsideLeft>
                                </InsideLeftDiv> 
                            )
                        })
                    }
                </InsideSecondDiv>

            </LeftSecondDiv>
        </LeftDiv>
        <MiddleDiv>
            <InsideMiddlwDiv>
            <div><Image src={Avatar} width={60} height={60}/></div>
             <div>
                <h3>Alexendar</h3>
                <p>online</p>
             </div>
       
            </InsideMiddlwDiv>
            <hr style={{color: "gray",width: "90%"}}/>
            <InsideMiddlwDiv1>
                <InsideMiddlwDiv1_Inside>
                    <One>
                        Hello myname is tnaujkUmar an iam 23 years old.
                    </One>
                    <Two>
                    Hello myname is tnaujkUmar an iam 23 years old.
                    </Two>
                    <One>
                        Hello myname is tnaujkUmar an iam 23 years old.
                    </One>
                    <Two>
                    Hello myname is tnaujkUmar an iam 23 years old.
                    </Two>
                    <One>
                        Hello myname is tnaujkUmar an iam 23 years old.
                    </One>
                    <Two>
                    Hello myname is tnaujkUmar an iam 23 years old.
                    </Two>
                    <One>
                        Hello myname is tnaujkUmar an iam 23 years old.
                    </One>
                    <Two>
                    Hello myname is tnaujkUmar an iam 23 years old.
                    </Two>
                </InsideMiddlwDiv1_Inside>
            </InsideMiddlwDiv1>
            <hr style={{color: "gray",width: "90%"}}/>

            <InsideMiddlwDiv2>
                <Input type='text' placeholder='Type a message...'/>
                <IoIosSend style={{fontSize: "30px",backgroundColor: "lightgray",borderRadius: "50%",padding: "6px",cursor: "pointer"}}/>
            </InsideMiddlwDiv2>
        </MiddleDiv>
        
        <RightDiv>
          
        </RightDiv>
    </MainDiv>
  )
}

export default Dashbaord