import { useState } from 'react'
import './App.css'

function App() {
  console.log('App rerender');
  
  const [value, setValue] = useState(1)
  const [newvalue, setNewvalue]=useState(1)
  let newaddthree=newvalue+3
  const clickme=()=>{
    
    setNewvalue(newvalue+1)
    
  }

  //const [multipliedvalue, setMultipliedvalue]=useState(1)
  let multipliedvalue=value *5

  const multiply5=()=>{
    //setMultipliedvalue(value*5)
    setValue(value+1)
  }
  return (
    
    <>
      <h1>Main value:{value}</h1>
      <button onClick={multiply5}>Click to multiply by 5</button>
      <h2>Multiplied Value:{multipliedvalue} </h2>

      <button onClick={clickme}>Click me:{newvalue}</button>
      <h2>add value by three:{newaddthree}</h2>
    </>
  )
}

export default App
