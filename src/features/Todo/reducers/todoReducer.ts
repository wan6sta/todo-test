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
