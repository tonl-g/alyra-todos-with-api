import { useTodosDispatch } from "../context/TodosDispatchContext"

const ToggleTodo = ({ todo }) => {
  const dispatch = useTodosDispatch()

  const toggleCompleteTodo = (task) => {
    dispatch({ type: "TOGGLE", payload: task })
  }
  return (
    <button
      className={`btn btn-sm ${todo.isCompleted ? "btn-dark" : "btn-light"}`}
      type="button"
      onClick={() => toggleCompleteTodo(todo)}
    >
      {todo.isCompleted ? "Rétablir" : "Terminer"}
    </button>
  )
}

export default ToggleTodo
