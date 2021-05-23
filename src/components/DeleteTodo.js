import { useTodosDispatch } from "../context/TodosDispatchContext"
import { useIsMounted } from "../hooks/useIsMounted"

const DeleteTodo = ({ todo }) => {
  const dispatch = useTodosDispatch()
  const isMounted = useIsMounted()
  const deleteTodo = () => {
    fetch(`${process.env.REACT_APP_API_URL}/todos/${todo.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Something went wrong: ${response.statusText}`)
      }
      return response.json
    })
    .then (() => {
      if (isMounted) {
        dispatch({ type: "DELETE", payload: todo })
      }
    })
    .catch((error) => {
      if (isMounted) {
        dispatch({ type: "FETCH_FAILURE", payload: error.message })
      }
    })
  }
  return (
    <button
      className="btn btn-danger btn-sm"
      type="button"
      onClick={deleteTodo}
    >
      Supprimer
    </button>
  )
}

export default DeleteTodo
