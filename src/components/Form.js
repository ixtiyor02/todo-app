import React from "react";

function Form({inputText, setInputText, todos, setTodos, setStatus}) {
    //Here I can write JavaScript code and function
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, {
            text: inputText,
            completed: false,
            id: Math.random() * 1000
        }])
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form className="form-todo">
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all" key="">All</option>
                    <option value="completed" key="">Completed</option>
                    <option value="uncompleted" key="">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
export default Form;