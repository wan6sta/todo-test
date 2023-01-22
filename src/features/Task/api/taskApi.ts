import { AxiosResponse } from 'axios'

import {
  AddNewTaskArgs,
  DefaultTaskResponse,
  DeleteTaskArgs,
  GetTasksResponse,
  TaskModel,
  UpdateTaskArgs,
  UpdateTaskModel
} from '../types/taskModel'
import { apiInstance } from '../../../shared/config/axiosInstance/axiosInstance'

export const taskApi = {
  getTasks: (todoId: string) => {
    return apiInstance.get<GetTasksResponse<TaskModel[]>>(
      `/todo-lists/${todoId}/tasks`
    )
  },
  addNewTask: ({ todoId, title }: AddNewTaskArgs) => {
    return apiInstance.post<
      undefined,
      AxiosResponse<DefaultTaskResponse<{ item: TaskModel }>>,
      { title: string }
    >(`/todo-lists/${todoId}/tasks`, { title })
  },
  deleteTask: ({ todoId, taskId }: DeleteTaskArgs) => {
    return apiInstance.delete<DefaultTaskResponse>(
      `/todo-lists/${todoId}/tasks/${taskId}`
    )
  },
  updateTask: ({ todoId, taskId, newTask }: UpdateTaskArgs) => {
    return apiInstance.put<
      undefined,
      AxiosResponse<DefaultTaskResponse<{ item: TaskModel }>>,
      UpdateTaskModel
    >(`/todo-lists/${todoId}/tasks/${taskId}`, newTask)
  }
}
