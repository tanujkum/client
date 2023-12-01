import React from 'react';
import styled from 'styled-components';
import Avatar from '../../assets/avatar.png'

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
`;

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
                                    <img src={item.img} height={75} width={75}/>
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

            </InsideMiddlwDiv>
        </MiddleDiv>
        <RightDiv>

        </RightDiv>
    </MainDiv>
  )
}

export default Dashbaord