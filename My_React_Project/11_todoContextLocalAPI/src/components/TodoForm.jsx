import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
const [todo, setTodo]=useState('')
const {addTodo}=useTodo()

const addTodoIn=(e)=>{
    console.log(addTodoIn);
    
    e.preventDefault()
    if (!todo) {
       return 
    }else{
        addTodo({
            todo,
            checkFld:false, })
            setTodo('')
    }
}


    return (
        <form onSubmit={addTodoIn} className="flex">
            <input
                type="text"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}

export default TodoForm
