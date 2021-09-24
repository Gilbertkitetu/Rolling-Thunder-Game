// import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import React, { useState } from 'react';

import SirRolling from './components/SirRolling';
import Rolling from './components/Rolling'


function App() {
const [rollingResult, setRollingResult] = useState(0);
const [rollingSResult, setRollingSResult] = useState(0);
const [player1Results, setPlayer1Results] = useState(0);
const [player2Results, setPlayer2Results] = useState(0);
const [spin, setSpin] = useState(false);


//alert(rollingResult);
//alert(rollingSResult)
function startSpins (spinning) {
  spinning = true
}

function spinBoth () {
    setSpin(true)
    computeResults2()
    if(spin){
      startSpins()
    }
}

//for player 2
function spinBoth2 () {
  setSpin(true)
  
    computeResults()

}

function computeResults(){
  var results = +rollingResult + +rollingSResult;
  setPlayer1Results(results)
}

  function computeResults2(){
    var results = +rollingResult + +rollingSResult;
    setPlayer2Results(results)
  }

  return (
    <div className="App" >
    <Container fluid>

      <h1>Rolling Thunder</h1>
      <Row className="justify-content-md-center">

      <Col sm md={2} xs={2}>
      <Button variant="secondary" size="lg" w-100 style={{ width: "150px", margin: "10px"}} >{ rollingSResult }</Button>
         <Button variant="primary" size="lg" w-100 style={{ width: "150px", margin: "10px"}} onClick={ spinBoth2 }>Spin</Button>
          <Button variant="primary" size="lg" w-100 style={{ width: "150px", margin: "10px"}} >Reset</Button>

          <Card>
          <Card.Title>
          Results
          </Card.Title>
          <Card.Body>
          {player1Results}
          </Card.Body>
          </Card>
      </Col>

      <Col sm md={4} xs={4} >
      <SirRolling setRollingSResult = { setRollingSResult } startSpins= {startSpins()}/>
      </Col>
      
       <Col sm md={4} xs={4}>
    <Rolling setRollingResult={ setRollingResult } startSpins = { startSpins() }/>
      </Col>
      
       <Col sm md={2} xs={2} >
       <Button variant="secondary" size="lg" w-100 style={{ width: "150px", margin: "10px"}} >{ rollingResult }</Button>
         <Button variant="primary" size="lg" w-100 style={{ width: "150px", margin: "10px"}} onClick={ spinBoth}>Spin</Button>
          <Button variant="secondary" size="lg" w-100 style={{ width: "150px", margin: "10px"}} >Reset</Button>

           <Card>
          <Card.Title>
          Results
          </Card.Title>
          <Card.Body>
          {player2Results}
          </Card.Body>
          </Card>
       </Col>

      </Row>
      <Row>
       <Col md xs w-100>
          {/* <Button variant = "primary" size="lg" style={{ width: "150px", margin: "30px"}}>3</Button>
          <Button variant="primary" size="lg" style={{ width: "150px", margin: "30px"}}>2</Button>
          <Button variant="primary" size="lg" style={{ width: "150px", margin: "30px"}}>1</Button> */}
       </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
