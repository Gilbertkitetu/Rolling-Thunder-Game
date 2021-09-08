// import logo from './logo.svg';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';


import SirRolling from './components/SirRolling'


function App() {
  return (
    <div className="App">
    <Container>

      <h1>Rolling Thunder</h1>
      <Col>
      <SirRolling />
      </Col>
      
       {/* <Col>
      <SirRolling />
      </Col>
       */}

      </Container>
    </div>
  );
}

export default App;
