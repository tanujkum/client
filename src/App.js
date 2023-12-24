import './App.css';
import Dashbaord from './modules/Dashboard';
import Login from './modules/form/login';
import Form from './modules/form/signup';
import styled from 'styled-components';
import {Routes,Route, Navigate} from 'react-router-dom'

const Root = styled.div`
  display:flex;
  justify-content:center;
  // align-items:center;
  height: 100vh;
`;


const ProtectedRoute=({children})=>{
  const isLoggedIn = localStorage.getItem('user:token') !==null || true;
  console.log(isLoggedIn)
  if(!isLoggedIn){
    return <Navigate to={'/user/login'}/>
  }else if(isLoggedIn && ["/user/signup","/user/login"].includes(window.location.pathname)){
    console.log("ooo");
    return <Navigate to={"/"}/>
  }
  return children; 
}

function App() {
  return (
    // <Root className="">
    //  {/* <Form/> */}
    //  <Dashbaord/>
    // </Root>

    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
          <Dashbaord/>
        </ProtectedRoute>
      }/>
      <Route path='/user/signup' element={
        <ProtectedRoute>
          <Form/>
        </ProtectedRoute>
       }/>
      <Route path='/user/login' element={
        <ProtectedRoute>
          <Login/>
        </ProtectedRoute>
       }/>
    </Routes>
  );
}

export default App;
