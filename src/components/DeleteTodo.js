import { useTodosDispatch } from "../context/TodosDispatchContext"

const DeleteTodo = ({ todo }) => {
  const dispatch = useTodosDispatch()
  const deleteTodo = (task) => {
    dispatch({ type: "DELETE", payload: task })
  }
  return (
    <button
      className="btn btn-danger btn-sm"
      type="button"
      onClick={() => deleteTodo(todo)}
    >
      Supprimer
    </button>
  )
}

export default DeleteTodo
