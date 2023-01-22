import {
  DefaultTodoResponse,
  TodoModel,
  UpdateTodoTitleArgs
} from '../types/todoModel'
import { apiInstance } from '../../../shared/config/axiosInstance/axiosInstance'
import { AxiosResponse } from 'axios'

export const todoApi = {
  getTodos: () => {
    return apiInstance.get<TodoModel[]>('/todo-lists')
  },
  addNewTodo: (title: string) => {
    return apiInstance.post<
      undefined,
      AxiosResponse<DefaultTodoResponse<{ item: TodoModel }>>,
      { title: string }
    >('/todo-lists', { title })
  },
  deleteTodo: (todoId: string) => {
    return apiInstance.delete<DefaultTodoResponse>(`/todo-lists/${todoId}`)
  },
  updateTodoTitle: ({ todoId, title }: UpdateTodoTitleArgs) => {
    return apiInstance.put<
      undefined,
      AxiosResponse<DefaultTodoResponse>,
      { title: string }
    >(`/todo-lists/${todoId}`, {
      title
    })
  }
}
