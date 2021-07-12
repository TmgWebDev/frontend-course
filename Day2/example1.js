import { useState } from 'react';
import './App.css';


function NumButton(props){
  function handleClick(){
    props.handleNumClick(props.value);
  }

  return <input type="button" value={props.value} onClick={handleClick}/>;
}

function OpButton(props){
  function handleClick(){
    props.handleOpClick(props.value);
  }

  return <input type="button" value={props.value} onClick={handleClick}/>;
}

function NumberPad(props){
  var array = [1,2,3,4,5,6,7,8,9];
  return array.map(value => <NumButton value={value} handleNumClick={props.handleNumClick}/>);
}

function App() {
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const [sign, setSign] = useState("+");

  function handleNumClick(val){
    setCurrent(current10 + val);
  }

  function handleOpClick(opType){ 
    let temp = total;
    if(sign === "+"){temp += current}
    if(sign === "-"){temp -= current}
    if(sign === ""){temp = current}
    if(sign === "/"){temp /= current}
    if(sign === "="){temp = current}
    setCurrent(0);
    setTotal(temp);
    if(opType === "="){
      setCurrent(temp);
      setTotal(0);
    } 
    setSign(opType);
  }

  return <div>
      <div style={{background: "black", color: "#FFF"}}>{current}</div>
      <NumberPad handleNumClick={handleNumClick}/>
      <OpButton value="+" handleOpClick={handleOpClick}/>
      <OpButton value="-" handleOpClick={handleOpClick}/>
      <OpButton value="" handleOpClick={handleOpClick}/>
      <OpButton value="/" handleOpClick={handleOpClick}/>
      <OpButton value="=" handleOpClick={handleOpClick}/>

    </div>;
}

export default App;
