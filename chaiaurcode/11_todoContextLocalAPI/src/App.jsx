import { useEffect, useState } from 'react'
import './App.css'
import {TodoProvider} from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos]=useState([])

  

  const addTodo=(todoMsg)=>{
    
    setTodos((prev)=>[{id:Date.now(), ...todoMsg}, ...prev])
  }

  const editTodoMsg=(id, todoMsg)=>{(prev)=>{
    return(
      setTodos(prev.map((prevtodoMsg)=>{if (prevtodoMsg.id===id) {
        todoMsg
      }else{prevtodoMsg}}))      
    )
  }}

  const deleteTodo=(id)=>{
    setTodos((prev)=>{
      return(
        prev.filter((todoBlock)=>todoBlock.id != id) )
    })
    
  }

  const checkFldUpdate=(id)=>{
    setTodos((prev)=>prev.map((prevCheck)=>prevCheck.id === id? {...prevCheck, checkFldUpdate: !prevCheck.checkFldUpdate}:prevCheck))    
  }

  useEffect(()=>{
    const todosLocal=JSON.parse(localStorage.getItem('todos'))    
    console.log(todosLocal);
    
    if (todos && todos.length>0) {
      setTodos(todos)
    }    
  },[])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
 
  return (
    <TodoProvider value={{todos, addTodo, editTodoMsg, deleteTodo, checkFldUpdate}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todoMsg)=>(
                          <div key={todoMsg.id} className='w-full'>
                            <TodoItem todoMsg={todoMsg}/>
                          </div>)
                          
                        )}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
