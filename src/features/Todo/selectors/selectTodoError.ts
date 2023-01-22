import { RootState } from '../../../store/store'

export const selectTodoError = (state: RootState) => state.todo.error
