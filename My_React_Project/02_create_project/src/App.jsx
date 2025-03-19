import { useState } from 'react'

import './App.css'

function App() {
let [counter, setCounter]=useState(5)
  //let counter=5;
  const addValue=()=>{
    console.log(counter);
    
   //counter=counter+1
   //setCounter(counter) or
   
   if (counter>=20) {
    setCounter(counter)
   }else{
    setCounter(counter+1)
   }
    
  }
  const removeValue=()=>{
    if (counter <=0) {
      setCounter(counter)
    }else{
    setCounter(counter-1)}
  }
 
  return (
    <>
     <h1>React First Project</h1>
     <h3>Counter the value: {counter}</h3>
     <button onClick={addValue}>Add Value</button>
     <br/>
     <button onClick={removeValue}>Remove Value</button>
     
    </>
  )
}

export default App
