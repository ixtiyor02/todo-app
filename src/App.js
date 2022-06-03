import './App.css';
import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Form from "./components/Form"
import TodoList from './components/TodoList';

function App () {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos();
  }, [])
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])
  //function
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }
  return (
    <div className='cont-todo'>
        <header className='header-todo'>
          <h1>Your ToDo list</h1>
        </header>
        <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
        />
        <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
        />
    </div>
  )
}
export default App;