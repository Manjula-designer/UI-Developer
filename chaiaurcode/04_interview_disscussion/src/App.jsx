import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
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
    </>
  )
}

export default App
