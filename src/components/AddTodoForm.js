import React from "react"

const AddTodoForm = (props) => {
  const handleFormSubmit = (e) => {
    e.preventDefault()
    props.handler(e.target.elements.todo.value)
    e.target.reset()
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="todo">
          Ajouter une tâche
        </label>
        <input className="form-control" id="todo" required />
      </div>
      <button type="submit" className="btn btn-primary">
        allons-y !
      </button>
    </form>
  )
}

export default AddTodoForm
