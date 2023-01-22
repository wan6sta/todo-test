import { createSelector } from 'reselect'
import { selectTaskStatus } from './selectTaskStatus'
import { selectTodoStatus } from '../../Todo/selectors/selectTodoStatus'

export const selectIsLoading = createSelector(
  selectTaskStatus,
  selectTodoStatus,
  (taskStatus, todoStatus) => {
    return taskStatus === 'loading' || todoStatus === 'loading'
  }
)
