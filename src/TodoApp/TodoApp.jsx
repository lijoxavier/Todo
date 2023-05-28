import React, { useState } from 'react'

// import {v4 as uuidv4} from 'uuid'

import '../TodoApp/todoapp.css'
import '../styles/variables.css'

import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import TodoList from './TodoList/TodoList'

const TodoApp = () => {

  const [todoList,setTodoList]=useState([])
const [input,setInput]=useState('')
// const[key,setKey]=useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const addTodo=()=>{
    if(input.trim()){

      // const key=uuidv4()
      //  setKey(key)

    const todo2=[...todoList,{input,isDone:false}]
    // console.log(todo2,"==todo2");
      setTodoList(todo2)
      //  setTodo((prev)=>{
      //   return  {
      //     ...prev,
      //     input
      //   }

      // })
    
    localStorage.setItem("todos",JSON.stringify(todo2))
    
  }
}
console.log(todoList,"==todo");

  console.log(input);
  return (
    <div className='container'>
        <h3>Todo List</h3>
        <div className="search">
        <Input handleChange={handleChange} name='add'/>
        <Button text='ADD TODO' name='add' addTodo={addTodo}  />
        </div>
      <TodoList setTodoList={setTodoList} />
      {/* input={input} key={key} setInput={setInput} */}
    </div>
  )
}

export default TodoApp