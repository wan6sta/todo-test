import { isAxiosError } from 'axios'
import { AppDispatch } from '../../../store/store'
import { taskApi } from '../api/taskApi'
import {
  deleteTask,
  deleteTaskError,
  deleteTaskSuccess
} from '../reducers/taskReducer'

export const deleteAsyncTask =
  (todoId: string, taskId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(deleteTask())
      const res = await taskApi.deleteTask({ todoId, taskId })
      if (res.data.resultCode !== 0) {
        dispatch(
          deleteTaskError(
            res.data.messages[0] ? res.data.messages[0] : 'Some error occurred'
          )
        )
        return
      }

      dispatch(deleteTaskSuccess(todoId, taskId))
    } catch (e) {
      if (isAxiosError(e)) {
        dispatch(deleteTaskError(e.message))
      }
      dispatch(deleteTaskError('Some error occurred'))
    }
  }
