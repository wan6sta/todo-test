import { isAxiosError } from 'axios'
import { AppDispatch } from '../../../store/store'
import {
  fetchTasks,
  fetchTasksError,
  fetchTasksSuccess
} from '../reducers/taskReducer'
import { taskApi } from '../api/taskApi'

export const setTodo = (todoId: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchTasks())
    const res = await taskApi.getTasks(todoId)
    if (res.data.error) {
      dispatch(fetchTasksError(res.data.error))
      return
    }

    dispatch(fetchTasksSuccess(res.data.items, todoId))
  } catch (e) {
    if (isAxiosError(e)) {
      dispatch(fetchTasksError(e.message))
    }
    dispatch(fetchTasksError('Some error occurred'))
  }
}
