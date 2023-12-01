import './App.css';
import Dashbaord from './modules/Dashboard';
import Login from './modules/form/login';
import Form from './modules/form/signup';
import styled from 'styled-components';

const Root = styled.div`
  display:flex;
  justify-content:center;
  // align-items:center;
  height: 100vh;
`;


function App() {
  return (
    <Root className="">
     {/* <Form/> */}
     <Dashbaord/>
    </Root>
  );
}

export default App;
