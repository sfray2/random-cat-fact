import './App.css';
import Axios from 'axios';
import {useEffect, useState} from "react";

function App() {
  const [info, setInfo] = useState(null);
  const [name, setName] = useState("");
  
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setInfo(res.data)
    })
  }


  return (
    <div className="App">
      <input 
        placeholder="Ex. Pedro..."
        onChange={(event)=> {
          setName(event.target.value)
        }} 
      />
      <button onClick={fetchData}> Predict Age </button>

      <h1>Name: {info?.name}</h1>
      <h1>Predicted Age: {info?.age}</h1>
      <h1>Count: {info?.count}</h1>
    </div>
  );
}

export default App;
