import { useState } from 'react'
import Card from './components/Card'

import './App.css'

function App() {
 let myObj={
  myEmail:'man@gmail.com',
  age:40
 }
 let myArray=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl mb-4'>tailwind test</h1>
     <Card name='manjula' btn_text='read me' someObject={myObj} myArr={myArray} />
     <Card name='surekha'  someObject={myObj} myArr={myArray}/>
    </>
  )
}

export default App
