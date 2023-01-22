import { RootState } from '../../../store/store'

export const selectTodoStatus = (state: RootState) => state.todo.status
