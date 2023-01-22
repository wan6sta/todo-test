import { todoApi } from '../api/todoApi'
import {
  deleteTodo,
  deleteTodoError,
  deleteTodoSuccess
} from '../reducers/todoReducer'
import { isAxiosError } from 'axios'
import { AppDispatch } from '../../../store/store'

export const deleteAsyncTodo =
  (todoId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(deleteTodo())
      const res = await todoApi.deleteTodo(todoId)
      if (res.data.resultCode !== 0) {
        dispatch(
          deleteTodoError(
            res.data.messages[0] ? res.data.messages[0] : 'Some error occurred'
          )
        )
        return
      }

      dispatch(deleteTodoSuccess(todoId))
    } catch (e) {
      if (isAxiosError(e)) {
        dispatch(deleteTodoError(e.message))
      }
      dispatch(deleteTodoError('Some error occurred'))
    }
  }
