// import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, Button } from 'react-bootstrap';


import SirRolling from './components/SirRolling';
import Rolling from './components/Rolling'


function App() {
  return (
    <div className="App">
    <Container fluid>

      <h1>Rolling Thunder</h1>
      <Row className="justify-content-md-center">

      <Col sm md={2} xs={2}></Col>

      <Col sm md={4} xs={4}>
      <SirRolling />
      </Col>
      
       <Col sm md={4} xs={4}>
      <Rolling />
      </Col>
      
       <Col sm md={2} xs={2}></Col>

      </Row>
      <Row>
       <Col md xs>
          <Button variant = "primary" size="lg" style={{ width: "150px", margin: "30px"}}>3</Button>
          <Button variant="dark" size="lg" style={{ width: "150px", margin: "30px"}}>2</Button>
          <Button variant="dark" size="lg" style={{ width: "150px", margin: "30px"}}>1</Button>
       </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
