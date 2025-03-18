import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({todoMsg}) {
    const [isTodoEditable, setIsTodoEditable]=useState(false)
    const [todoEditMsg, setTodoEditMsg]=useState(todoMsg.todoMsg)
    const {editTodoMsg, deleteTodo, checkFldUpdate} =useTodo()

    const editNewTodoMsg=()=>{editTodoMsg(todoMsg.id, {...todoMsg, todoMsg:todoEditMsg})
    setIsTodoEditable(false)} 

    const checkedFliedUpdate=()=>{
        checkFldUpdate(todoMsg.id)
    }

    return (
        <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
            todoMsg.checkFldUpdate ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
    >
        <input
            type="checkbox"
            className="cursor-pointer"
            checked={todoMsg.checkFld}
            onChange={checkedFliedUpdate}
        />
        <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-lg ${
                isTodoEditable ? "border-black/10 px-2" : "border-transparent"
            } ${todoMsg.checkFldUpdate ? "line-through" : ""}`}
            value={todoEditMsg}
            onChange={(e) => setTodoEditMsg(e.target.value)}
            readOnly={!isTodoEditable}
        />
        {/* Edit, Save Button */}
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={() => {
                if (todoMsg.checkFldUpdate) return;

                if (isTodoEditable) {
                    editNewTodoMsg();
                } else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todoMsg.checkFldUpdate}
        >
            {isTodoEditable ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => deleteTodo(todoMsg.id)}
        >
            ❌
        </button>
    </div>
    )
}

export default TodoItem
