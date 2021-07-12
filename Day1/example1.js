import './App.css';
import {useState} from "react";

function MyDiv(props){
    return <div>{props.x}</div>
}

function App() {
    const [something, setSomething] = useState("zobizobi");

    function handleClick(){
        setSomething("notzobizobi");
    }

    return <div>
        <MyDiv x={something}/>
        <button onClick={handleClick}>click me</button>
    </div>
}

export default App;

