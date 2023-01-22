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

    case 'task/deleteTask':
      return {
        ...state,
        status: 'loading',
        error: null
      }

    case 'task/deleteTaskSuccess':
      return {
        ...state,
        status: 'succeeded',
        tasks: {
          ...state.tasks,
          [action.payload.todoId]: state.tasks[action.payload.todoId].filter(
            task => task.id !== action.payload.taskId
          )
        }
      }

    case 'task/deleteTaskError':
      return {
        ...state,
        status: 'failed',
        error: action.payload
      }

    case 'task/updateTask':
      return {
        ...state,
        status: 'loading',
        error: null
      }

    case 'task/updateTaskSuccess':
      return {
        ...state,
        status: 'succeeded',
        tasks: {
          ...state.tasks,
          [action.payload.todoListId]: state.tasks[
            action.payload.todoListId
          ].map(task => {
            if (task.id === action.payload.id) {
              return action.payload
            }
            return task
          })
        }
      }

    case 'task/updateTaskError':
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
  | ReturnType<typeof deleteTask>
  | ReturnType<typeof deleteTaskSuccess>
  | ReturnType<typeof deleteTaskError>
  | ReturnType<typeof updateTask>
  | ReturnType<typeof updateTaskSuccess>
  | ReturnType<typeof updateTaskError>

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

export const deleteTask = () =>
  ({
    type: 'task/deleteTask'
  } as const)

export const deleteTaskSuccess = (todoId: string, taskId: string) =>
  ({
    type: 'task/deleteTaskSuccess',
    payload: {
      todoId,
      taskId
    }
  } as const)

export const deleteTaskError = (errorMessage: string) =>
  ({
    type: 'task/deleteTaskError',
    payload: errorMessage
  } as const)

export const updateTask = () =>
  ({
    type: 'task/updateTask'
  } as const)

export const updateTaskSuccess = (task: TaskModel) =>
  ({
    type: 'task/updateTaskSuccess',
    payload: task
  } as const)

export const updateTaskError = (errorMessage: string) =>
  ({
    type: 'task/updateTaskError',
    payload: errorMessage
  } as const)
