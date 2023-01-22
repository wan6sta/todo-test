import { todoApi } from '../api/todoApi'
import {
  updateTodoTitle,
  updateTodoTitleError,
  updateTodoTitleSuccess
} from '../reducers/todoReducer'
import { isAxiosError } from 'axios'
import { AppDispatch } from '../../../store/store'

export const updateAsyncTodoTitle =
  (todoId: string, title: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(updateTodoTitle())
      const res = await todoApi.updateTodoTitle({ todoId, title })
      if (res.data.resultCode !== 0) {
        dispatch(
          updateTodoTitleError(
            res.data.messages[0] ? res.data.messages[0] : 'Some error occurred'
          )
        )
        return
      }

      dispatch(updateTodoTitleSuccess(todoId, title))
    } catch (e) {
      if (isAxiosError(e)) {
        dispatch(updateTodoTitleError(e.message))
      }
      dispatch(updateTodoTitleError('Some error occurred'))
    }
  }
