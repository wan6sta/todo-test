import { todoApi } from '../api/todoApi'
import {
  fetchTodos,
  fetchTodosError,
  fetchTodosSuccess
} from '../reducers/todoReducer'
import { isAxiosError } from 'axios'
import { AppDispatch } from '../../../store/store'

export const fetchAsyncTodos = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchTodos())
    const res = await todoApi.getTodos()
    dispatch(fetchTodosSuccess(res.data))
  } catch (e) {
    if (isAxiosError(e)) {
      dispatch(fetchTodosError(e.message))
    }
    dispatch(fetchTodosError('Some error occurred'))
  }
}
