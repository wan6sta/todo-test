import { InitialState, TaskModel } from '../types/taskModel'

const initialState: InitialState = {
  status: 'idle',
  error: null,
  tasks: {}
}

export const taskReducer = (
  state = initialState,
  action: Action
): InitialState => {
  switch (action.type) {
    case 'task/fetchTasks':
      return {
        ...state,
        status: 'loading',
        error: null
      }

    case 'task/fetchTasksSuccess':
      return {
        ...state,
        status: 'succeeded',
        tasks: { ...state.tasks, [action.payload.todoId]: action.payload.tasks }
      }

    case 'task/fetchTasksError':
      return {
        ...state,
        status: 'failed',
        error: action.payload
      }

    case 'task/addTask':
      return {
        ...state,
        status: 'loading',
        error: null
      }

    case 'task/addTaskSuccess':
      return {
        ...state,
        status: 'succeeded',
        tasks: {
          ...state.tasks,
          [action.payload.todoId]: [
            action.payload.task,
            ...state.tasks[action.payload.todoId]
          ]
        }
      }

    case 'task/addTaskError':
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
  | ReturnType<typeof fetchTasks>
  | ReturnType<typeof fetchTasksSuccess>
  | ReturnType<typeof fetchTasksError>
  | ReturnType<typeof addTask>
  | ReturnType<typeof addTaskSuccess>
  | ReturnType<typeof addTaskError>

export const fetchTasks = () =>
  ({
    type: 'task/fetchTasks'
  } as const)

export const fetchTasksSuccess = (tasks: TaskModel[], todoId: string) =>
  ({
    type: 'task/fetchTasksSuccess',
    payload: {
      tasks,
      todoId
    }
  } as const)

export const fetchTasksError = (errorMessage: string) =>
  ({
    type: 'task/fetchTasksError',
    payload: errorMessage
  } as const)

export const addTask = () =>
  ({
    type: 'task/addTask'
  } as const)

export const addTaskSuccess = (task: TaskModel, todoId: string) =>
  ({
    type: 'task/addTaskSuccess',
    payload: {
      task,
      todoId
    }
  } as const)

export const addTaskError = (errorMessage: string) =>
  ({
    type: 'task/addTaskError',
    payload: errorMessage
  } as const)
