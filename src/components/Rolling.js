import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { Button, Card, Row, Col } from 'react-bootstrap';
// import { ArrowRight } from 'react-bootstrap-icons';
import { AiFillThunderbolt } from 'react-icons/ai';

import "./styles/rolling.css"
function Rolling  (props) {
  // constructor(props) {
  //   super(props);
  //   this.rollingResultF = this.rollingResultF.bind(this);
  // }

  function startSpining() {
    spin()
  }

 

// const [state, setState] = useState({
  
//   radius: 75, // PIXELS
//   rotate: 0, // DEGREES
//   easeOut: 0, // SECONDS
//   angle: 0, // RADIANS
//   top: null, // INDEX
//   offset: null, // RADIANS
//   net: null, // RADIANS
//   result: null, // INDEX
//   spinning: false,
//   start: false
// });

const [radius, setRadius] = useState(75);
const [rotate, setRotate] = useState(0);
const [easeOut, setEaseOut] = useState(0);
const [angle, setAngle] = useState(0);
const [top, setTop] = useState(null);
const [offset, setOffset] = useState(null);
const [net, setNet] = useState(null);
const [result, setResult] = useState(null);
const [spinning, setSpinning] = useState(false);
const [start, setStart] = useState(false);

var list = ["0","-10","-5","6","12","-12","-1","-4"];
  


  useEffect ( () => {
    // generate canvas wheel on load
    renderWheel();
  }
  )

  function renderWheel() {
    // determine number/size of sectors that need to created
    //var l = state.list;
    let numOptions = list.length;
    let arcSize = (2 * Math.PI) / numOptions;
  
      setAngle( arcSize);
 

     


    // get index of starting position of selector
    topPosition(numOptions, arcSize);

    // dynamically generate sectors from state list
    let angle = 0;
    for (let i = 0; i < numOptions; i++) {
      let text = list[i];
      renderSector(i + 1, text, angle, arcSize, getColor());
      angle += arcSize;
    }
  }

  var topPosition = (num, angle) => {
    // set starting index and angle offset based on list length
    // works upto 9 options
    let topSpot = null;
    let degreesOff = null;
    if (num === 9) {
      topSpot = 7;
      degreesOff = Math.PI / 2 - angle * 2;
    } else if (num === 8) {
      topSpot = 6;
      degreesOff = 0;
    } else if (num <= 7 && num > 4) {
      topSpot = num - 1;
      degreesOff = Math.PI / 2 - angle;
    } else if (num === 4) {
      topSpot = num - 1;
      degreesOff = 0;
    } else if (num <= 3) {
      topSpot = num;
      degreesOff = Math.PI / 2;
    }

    
      setTop (topSpot - 1);
      setOffset(degreesOff);
    
  };

  function renderSector(index, text, start, arc, color) {
    // create canvas arc for each list element
    let canvas = document.getElementById("wheel2");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radiusC = radius;
    let startAngle = start;
    let endAngle = start + arc;
    let angle = index * arc;
    let baseSize = radius * 3.33;
    let textRadius = baseSize - 150;

    ctx.beginPath();
    ctx.arc(x, y, radiusC, startAngle, endAngle, false);
    ctx.lineWidth = radiusC * 2;
    ctx.strokeStyle = color;

    ctx.font = "17px  Valera Round";
    ctx.fillStyle = "blue";
    ctx.stroke();

    ctx.save();
    ctx.translate(
      baseSize + Math.cos(angle - arc / 2) * textRadius,
      baseSize + Math.sin(angle - arc / 2) * textRadius
    );
    ctx.rotate(angle - arc / 2 + Math.PI / 2);
    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
    ctx.restore();
  }

  function getColor() {
    // randomly generate rbg values for wheel sectors
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},0.4)`;
  }


  var spin = () => {
    
    // set random spin degree and ease out time
    // set state variables to initiate animation
    let randomSpin = Math.floor(Math.random() * 900) + 500;
    //alert(randomSpin)
    
      setRotate (randomSpin);
      setEaseOut(2);
      setSpinning(true);

    // alert(rotate)
    // alert(easeOut)

    // calcalute result after wheel stops spinning
    setTimeout(() => {
      getResult(randomSpin);
    }, 2000);
  };

  var getResult = spin => {
    // find next rotation and add to offset angle
    // repeat substraction of inner angle amount from total distance traversed
    // use count as an index to find value of result from state list
    // const { angle, top, offset, list } = state;
    let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
    let travel = netRotation + offset;
    let count = top + 1;
    while (travel > 0) {
      travel = travel - angle;
      count--;
    }
    let result;
    if (count >= 0) {
      result = count;
      
    } else {
      result = list.length + count;
     
      // this.props.rollingResultF(result)
    }
     

    // set state variable to display result
   
      setNet(netRotation);
      setResult(result);
  
    
    props.setRollingResult(result);
  };

   var reset = () => {
    // reset wheel and result
  
      setRotate(180);
      setEaseOut(0);
      setResult(null);
      setSpinning(false);
    
  };

  
    return (
      
      <div className="spinWheel">

        
        
        {/* <span id="selector">&#9660;</span> */}
        <Card style={{backgroundColor: 'transparent', border: 'none', paddingTop: '50px'}}>
         <span id="selector" ><AiFillThunderbolt size="80px"/></span>
         </Card>
         
        
        <Card>
        <canvas
          id="wheel2"
          width="500"
          height="500"
          style={{
            WebkitTransform: `rotate(${rotate}deg)`,
            WebkitTransition: `-webkit-transform ${
              easeOut
            }s ease-out`
          }}
        />
        </Card>
        
        
       

        
       
        {spinning ? 
          <Button type="button" id="reset" onClick={reset}>
            reset
          </Button>
         : 
         
          <Button type="button" id="spin" onClick={(e) => {spin()}}>
            spin
          </Button>
        }
        <div class="display">
          <span id="readout">
            
            <span id="result">{result}</span>
          </span>
        </div>

        </div>
      
    );
  
}

export default Rolling;
