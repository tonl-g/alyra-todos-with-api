import React, { useState, useEffect } from "react"
import Todo from "./Todo"
import AddTodoForm from "./AddTodoForm"
import { uuid } from "uuidv4"

const initialTodos = [
  {
    text: "Faires des courses",
    isCompleted: false,
    id: "1b688c51-e990-4ce3-95a5-9018cf81d23d",
  },
  {
    text: "Réviser ES6 classes",
    isCompleted: false,
    id: "efc6331d-7ca2-49a6-b014-378b8280b33d",
  },
  {
    text: "Aroser les plantes",
    isCompleted: false,
    id: "9e60d353-cd72-40bb-97e6-5841e51635c0",
  },
]

const Todos = () => {
  const [todos, setTodos] = useState(initialTodos)

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, isCompleted: false, id: uuid() }])
  }

    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          console.log("here")
          //item.isCompleted = !item.isCompleted
          item = { ...item, isCompleted: !item.isCompleted }
        }
        return { ...item }
      })
    )
  }
  const deleteTodo = (todo) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== todo.id
      })
    )
  }
  const completedCount = todos.filter((el) => el.isCompleted).length
  return (
    <>
      <h2 className="text-center">
        Ma liste de tâches ({completedCount} / {todos.length})
      </h2>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleCompleteClick={toggleCompleteTodo}
            handleDeleteClick={deleteTodo}
          />
        )
      })}
      <AddTodoForm handler={addTodo} />
    </>
  )
}

export default Todos
