export const todosReducer = (state, action) => {
  // ADD, DELETE, TOGGLE
  switch (action.type) {
    case "ADD":
      // setTodos([...state, newTodo])
      return [...state, action.payload]
    case "DELETE":
      // setTodos(state.filter((el) => el.id !== task.id))
      return state.filter((el) => el.id !== action.payload.id)
    case "TOGGLE":
      /*
      setTodos(
      todos.map((el) => {
        if (el.id === task.id) {
          return {
            ...el,
            isCompleted: !el.isCompleted,
          }
        }
        return el
      })
    )
    */
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            isCompleted: !el.isCompleted,
          }
        }
        return el
      })
    default:
      throw new Error(`Unsupported action type ${action.type} in todosReducer`)
  }
}
