import React from "react"

const Todo = (props) => {
  const { todo, handleCompleteClick, handleDeleteClick } = props
  const handler = () => handleCompleteClick(todo)
  return (
    <div className="shadow-sm border p-2 d-flex align-items-center justify-content-between mb-2">
      <span
        style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-light btn-sm"
          type="button"
          onClick={handler}
        >
          {todo.isCompleted ? "Rétablir" : "Terminer"}
        </button>
        <button
          className="btn btn-danger btn-sm"
          type="button"
          onClick={() => handleDeleteClick(todo)}
        >
          Supprimer
        </button>
      </div>
    </div>
  )
}

export default Todo
