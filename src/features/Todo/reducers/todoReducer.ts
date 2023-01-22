import { InitialState, TodoModel } from '../types/todoModel'

const initialState: InitialState = {
  status: 'idle',
  error: null,
  todos: []
}

export const todoReducer = (
  state = initialState,
  action: Action
): InitialState => {
  switch (action.type) {
    case 'todo/fetchTodos':
      return {
        ...state,
        status: 'loading',
        error: null
      }

    case 'todo/fetchTodosSuccess':
      return {
        ...state,
        status: 'succeeded',
        todos: action?.payload?.todos
      }

    case 'todo/fetchTodosError':
      return {
        ...state,
        status: 'failed',
        error: action.payload
      }

    case 'todo/addTodo':
      return {
        ...state,
        status: 'loading',
        error: null
      }

    case 'todo/addTodoSuccess':
      return {
        ...state,
        status: 'succeeded',
        todos: [action.payload.todo, ...state.todos]
      }

    case 'todo/addTodoError':
      return {
        ...state,
        status: 'failed',
        error: action.payload
      }

    case 'todo/deleteTodo':
      return {
        ...state,
        status: 'loading',
        error: null
      }

    case 'todo/deleteTodoSuccess':
      return {
        ...state,
        status: 'succeeded',
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }

    case 'todo/deleteTodoError':
      return {
        ...state,
        status: 'failed',
        error: action.payload
      }

    case 'todo/updateTodoTitle':
      return {
        ...state,
        status: 'loading',
        error: null
      }

    case 'todo/updateTodoTitleSuccess':
      return {
        ...state,
        status: 'succeeded',
        todos: state.todos.map(todo =>
          todo.id === action.payload.todoId
            ? {
                ...todo,
                title: action.payload.title
              }
            : todo
        )
      }

    case 'todo/updateTodoTitleError':
      return {
        ...state,
        status: 'failed',
        error: action.payload
      }

    default:
      return state
  }
}

type Action =
  | ReturnType<typeof fetchTodos>
  | ReturnType<typeof fetchTodosSuccess>
  | ReturnType<typeof fetchTodosError>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof addTodoSuccess>
  | ReturnType<typeof addTodoError>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof deleteTodoSuccess>
  | ReturnType<typeof deleteTodoError>
  | ReturnType<typeof updateTodoTitle>
  | ReturnType<typeof updateTodoTitleSuccess>
  | ReturnType<typeof updateTodoTitleError>

export const fetchTodos = () =>
  ({
    type: 'todo/fetchTodos'
  } as const)

export const fetchTodosSuccess = (todos: TodoModel[]) =>
  ({
    type: 'todo/fetchTodosSuccess',
    payload: { todos }
  } as const)

export const fetchTodosError = (errorMessage: string) =>
  ({
    type: 'todo/fetchTodosError',
    payload: errorMessage
  } as const)

export const addTodo = () =>
  ({
    type: 'todo/addTodo'
  } as const)

export const addTodoSuccess = (todo: TodoModel) =>
  ({
    type: 'todo/addTodoSuccess',
    payload: { todo }
  } as const)

export const addTodoError = (errorMessage: string) =>
  ({
    type: 'todo/addTodoError',
    payload: errorMessage
  } as const)

export const deleteTodo = () =>
  ({
    type: 'todo/deleteTodo'
  } as const)

export const deleteTodoSuccess = (todoId: string) =>
  ({
    type: 'todo/deleteTodoSuccess',
    payload: todoId
  } as const)

export const deleteTodoError = (errorMessage: string) =>
  ({
    type: 'todo/deleteTodoError',
    payload: errorMessage
  } as const)

export const updateTodoTitle = () =>
  ({
    type: 'todo/updateTodoTitle'
  } as const)

export const updateTodoTitleSuccess = (todoId: string, title: string) =>
  ({
    type: 'todo/updateTodoTitleSuccess',
    payload: {
      todoId,
      title
    }
  } as const)

export const updateTodoTitleError = (errorMessage: string) =>
  ({
    type: 'todo/updateTodoTitleError',
    payload: errorMessage
  } as const)
