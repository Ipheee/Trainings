import { useState } from 'react'
import './TodoForm.css'

export const TodoForm = ({addTodo}) => {
const [value, setValue] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
    
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>{setValue(e.target.value)}}/>
        <button>Add Task</button>

    </form>
  )
}
