import { RootState } from '../../../store/store'

export const selectTasks = (todoId: string) => (state: RootState) =>
  state.task.tasks[todoId]
