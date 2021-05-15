import React, { useEffect, useState } from "react"
import TodosList from "./TodosList"
import SelectTodos from "./SelectTodos"
import AddTodoForm from "./AddTodoForm"
import { v4 as uuidv4 } from "uuid"

const initialTodos = [
  {
    text: "Forkez et cloner ce repo",
    isCompleted: true,
    id: "1b688c51-e990-4ce3-95a5-9018cf81d23d"
  },
  {
    text: "Refactor todos avec useReducer",
    isCompleted: false,
    id: "efc6331d-7ca2-49a6-b014-378b8280b33d"
  },
  {
    text: "Add dispatch to Context",
    isCompleted: false,
    id: "9e60d353-cd72-40bb-97e6-5841e51635c0"
  },
  {
    text: "Add Color Mode Context",
    isCompleted: false,
    id: "df0ce18c-b4fa-4651-82c0-72fad6b486e4"
  }
]

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("my-new-todos")) || initialTodos
    )
  })
  const [filter, setFilter] = useState("all")
  const completedCount = todos.filter((el) => el.isCompleted).length
  const todoCount = todos.length - completedCount
  useEffect(() => {
    window.localStorage.setItem("my-new-todos", JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    document.title = todoCount
      ? `${todoCount} choses à faire !`
      : "Qu'avez vous à faire aujourd'hui"
  }, [todoCount])

  const addTodo = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (task) => {
    setTodos(todos.filter((el) => el.id !== task.id))
  }

  const toggleCompleteTodo = (task) => {
    setTodos(
      todos.map((el) => {
        if (el.id === task.id) {
          return {
            ...el,
            isCompleted: !el.isCompleted
          }
        }
        return el
      })
    )
  }

  const filteredTodos = todos.filter((el) => {
    if (filter === "completed") {
      return el.isCompleted
    }
    if (filter === "notcompleted") {
      return !el.isCompleted
    }
    return true
  })

  return (
    <main>
      <h2 className="text-center">
        Ma liste de tâches ({completedCount} / {todos.length})
      </h2>
      <SelectTodos filter={filter} setFilter={setFilter} />
      <TodosList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleCompleteTodo={toggleCompleteTodo}
      />
      <AddTodoForm addTodo={addTodo} setFilter={setFilter} />
    </main>
  )
}

export default Todos
