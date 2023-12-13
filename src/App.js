import './App.css';
import Dashbaord from './modules/Dashboard';
import Login from './modules/form/login';
import Form from './modules/form/signup';
import styled from 'styled-components';
import {Routes,Route} from 'react-router-dom'

const Root = styled.div`
  display:flex;
  justify-content:center;
  // align-items:center;
  height: 100vh;
`;


function App() {
  return (
    // <Root className="">
    //  {/* <Form/> */}
    //  <Dashbaord/>
    // </Root>

    <Routes>
      <Route path='/' element={<Dashbaord/>}/>
      <Route path='/user/signup' element={<Form/>}/>
      <Route path='/user/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
