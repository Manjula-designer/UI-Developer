import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
const red=()=>{
  setColor('red')
}
const green=()=>{
  setColor('green')
}
const blue=()=>{
  setColor('blue')
}
  return (
    <div className='w-full h-screen ' style={{backgroundColor:color}}>
       <div className='fixed justify-center bottom-12 inset-x-0 px-2 flex flex-wrap'>
       <div className='flex flex-wrap bg-white justify-center px-2 py-3 rounded-3xl gap-3 shadow-lg '>
        <button onClick={red} className='outline-none px-3 py-1 rounded-full shadow-lg text-white ' style={{backgroundColor:'red'}} >red</button> 
        <button onClick={green} className='outline-none px-3 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:'green'}} >green</button>
        <button onClick={blue} className='outline-none px-3 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:'blue'}} >blue</button>
        </div>
        
       </div>
       
    </div>
   
  )
}

export default App
