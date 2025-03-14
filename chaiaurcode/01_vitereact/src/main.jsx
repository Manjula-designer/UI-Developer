import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement=(<a href='https//google.com' target='_blank'>my click</a>)

const anotherApp = React.createElement('a',{href:'https//google.com', target:'_blank'}, 'Click')

function Appnew(){
  return(<h1>new React App</h1>)
}



createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    anotherApp
    <App />
   < Appnew/>
  </StrictMode>
)
