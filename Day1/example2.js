import './App.css';
import {useState} from "react";

function MyDiv(props) {
    if (props.red === true) {
        return <div style={{background: "red"}}>{props.x}</div>
    } else {
        return <div>{props.x}</div>
    }
}

function App() {
    const [red, setRed] = useState(false)
    const [title, setTitle] = useState("Initial title")

    function handleClick(){
        if(red === true)setRed(false);
        else setRed(true);
    }

    return <div>
        <MyDiv x={title} red={red}/>
        <button onClick={handleClick}>click me</button>
    </div>
}

export default App;
