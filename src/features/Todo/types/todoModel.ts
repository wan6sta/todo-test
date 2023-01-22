export interface TodoModel {
  id: string
  title: string
  order: number
  addedDate: string
}

export interface DefaultTodoResponse<T = {}> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export interface UpdateTodoTitleArgs {
  todoId: string
  title: string
}

export interface TodoModelWithLoading extends TodoModel {
  isLoading: boolean
}

export type InitialState = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  todos: TodoModel[]
}
