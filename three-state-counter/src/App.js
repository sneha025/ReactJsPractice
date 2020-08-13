import React ,{useState}from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App(){

  const [count,setCount]=useState(0);
  // const [superman,setSuperman]=useState();
  return (
    <div className='App'>
      <header>
      <h1>Counter app using State</h1>
      </header>
  <h2>Current value of count is {count}</h2>
  <button onClick={()=>setCount(0)}>Reset Counter</button>
  <button onClick={()=>count >=10 ?"":setCount(count+1)}>Increase Counter</button>
  <button onClick={()=>count<=0 ? "":setCount(count-1)}>Decrease Counter</button>
    </div>
  )
}

// ReactDOM.render(<App/>,Document.getElemnetById())
export default App;