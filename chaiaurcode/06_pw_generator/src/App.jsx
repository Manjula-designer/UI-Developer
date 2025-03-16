import { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [checkednum, setCheckednum]=useState(false)
  const [checkedchar, setCheckedchar]=useState(false)
  const [password, setPassword]=useState('')

  //useRef 
  const passwordRef=useRef(null)

//useCallBack method
//const pwGenerator=useCallback(function, dependencies)
const pwGenerator=useCallback(function(){
  let pass=''
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(checkednum){
    str += '0123456789'
  }
  if(checkedchar){
    str += '~`!@#$%^&*()+_{}[]|'
  }
  for (let i = 0; i < length; i++) {
    const char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char)
  }
  setPassword(pass)
}, [length, checkednum, checkedchar])

const copyPwClipboard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 20)
  window.navigator.clipboard.writeText(password)},[password])

useEffect(()=>{pwGenerator()}, [length, checkednum, checkedchar,pwGenerator])

  return (
   <div>
    
    <div className='w-full max-w-md m-auto shadow-lg rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-600 '>
    <h1 className='text-4xl text-center text-white'> Password Generator</h1>
      <div className='flex overflow-hidden mb-4 rounded-lg'>
        <input type="text" value={password} className='bg-white outline-none w-full p-2 m-3 rounded-sm' placeholder='password' readOnly ref={passwordRef}/>
        <button className='px-3 py-1  bg-blue-800 text-white shrink-0 outline-none' onClick={copyPwClipboard}>copy</button>
      </div>         
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
<input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
<label htmlFor="">Length: {length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
<input type="checkbox" defaultChecked={checkednum} id='numberInput' onChange={()=>{setCheckednum((prev)=>(!prev))}}/>
<label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex item-center gap-x-1'>
<input type="checkbox" defaultChecked={checkedchar} id='numberInput' onChange={()=>{setCheckedchar((prev)=>(!prev))}}/>
<label htmlFor="charInput">Charecter</label>
      </div>
      </div>
    
    </div>
   </div>
  )
}

export default App
