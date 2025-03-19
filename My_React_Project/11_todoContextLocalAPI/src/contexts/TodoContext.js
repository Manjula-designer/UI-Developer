import {createContext, useContext} from 'react'

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todoMsg:'to do message',
            checkFld:false,            
        }],
        addTodo:(todoMsg) => {},
        editTodoMsg:(id, todoMsg)=>{},
        deleteTodo:(id)=>{},
        checkFldUpdate:(id)=>{}
    
})

export const useTodo=()=>{
return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider