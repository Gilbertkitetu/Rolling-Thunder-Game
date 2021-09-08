// import logo from './logo.svg';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';


import SirRolling from './components/SirRolling';
import Rolling from './components/Rolling'


function App() {
  return (
    <div className="App">
    <Container>

      <h1>Rolling Thunder</h1>
      <Row className="justify-content-md-center">
      <Col md={4} xs={4}>
      <SirRolling />
      </Col>
      
       <Col md={4} xs={4}>
      <Rolling />
      </Col>
       <Col md={4} xs={4}>
       </Col>

      </Row>
      </Container>
    </div>
  );
}

export default App;
