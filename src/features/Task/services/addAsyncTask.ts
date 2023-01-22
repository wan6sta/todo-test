import { isAxiosError } from 'axios'
import { AppDispatch } from '../../../store/store'
import { taskApi } from '../api/taskApi'
import { addTask, addTaskError, addTaskSuccess } from '../reducers/taskReducer'

export const addAsyncTask =
  (todoId: string, title: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(addTask())
      const res = await taskApi.addNewTask({ todoId, title })
      if (res.data.resultCode !== 0) {
        dispatch(
          addTaskError(
            res.data.messages[0] ? res.data.messages[0] : 'Some error occurred'
          )
        )
        return
      }

      dispatch(addTaskSuccess(res.data.data.item, todoId))
    } catch (e) {
      if (isAxiosError(e)) {
        dispatch(addTaskError(e.message))
      }
      dispatch(addTaskError('Some error occurred'))
    }
  }
