// import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, Button } from 'react-bootstrap';
import React, { useState } from 'react';

import SirRolling from './components/SirRolling';
import Rolling from './components/Rolling'


function App() {
const [rollingResult, setRollingResult] = useState(0);
const [rollingSResult, setRollingSResult] = useState(0);

alert(rollingResult);
alert(rollingSResult)
function rollingResultF(result){
  return result;
}
  function computeResults(){

  }
  return (
    <div className="App">
    <Container fluid>

      <h1>Rolling Thunder</h1>
      <Row className="justify-content-md-center">

      <Col sm md={2} xs={2}>
         <Button variant="primary" size="lg" w-100 style={{ width: "150px", margin: "30px"}}>Spin</Button>
          <Button variant="primary" size="lg" w-100 style={{ width: "150px", margin: "30px"}} >Reset</Button>
      </Col>

      <Col sm md={4} xs={4}>
      <SirRolling setRollingSResult = { setRollingSResult }/>
      </Col>
      
       <Col sm md={4} xs={4}>
      <Rolling setRollingResult={ setRollingResult }/>
      </Col>
      
       <Col sm md={2} xs={2}>
         <Button variant="primary" size="lg" w-100 style={{ width: "150px", margin: "30px"}}>Spin</Button>
          <Button variant="primary" size="lg" w-100 style={{ width: "150px", margin: "30px"}} >Reset</Button>
       </Col>

      </Row>
      <Row>
       <Col md xs>
          <Button variant = "primary" size="lg" style={{ width: "150px", margin: "30px"}}>3</Button>
          <Button variant="primary" size="lg" style={{ width: "150px", margin: "30px"}}>2</Button>
          <Button variant="primary" size="lg" style={{ width: "150px", margin: "30px"}}>1</Button>
       </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
