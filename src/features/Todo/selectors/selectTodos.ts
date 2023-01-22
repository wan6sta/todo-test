import { createSelector } from 'reselect'
import { RootState } from '../../../store/store'

export const selectTodos = createSelector(
  (state: RootState) => state.todo,
  todo => todo.todos
)
