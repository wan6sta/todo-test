import { isAxiosError } from 'axios'
import { AppDispatch } from '../../../store/store'
import { taskApi } from '../api/taskApi'
import {
  updateTask,
  updateTaskError,
  updateTaskSuccess
} from '../reducers/taskReducer'
import { UpdateTaskModel } from '../types/taskModel'

export const updateAsyncTask =
  (todoId: string, taskId: string, newTask: UpdateTaskModel) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(updateTask())
      const res = await taskApi.updateTask({ todoId, taskId, newTask })
      if (res.data.resultCode !== 0) {
        dispatch(
          updateTaskError(
            res.data.messages[0] ? res.data.messages[0] : 'Some error occurred'
          )
        )
        return
      }

      dispatch(updateTaskSuccess(res.data.data.item))
    } catch (e) {
      if (isAxiosError(e)) {
        dispatch(updateTaskError(e.message))
      }
      dispatch(updateTaskError('Some error occurred'))
    }
  }
