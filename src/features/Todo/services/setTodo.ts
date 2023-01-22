import { todoApi } from '../api/todoApi'
import { addTodo, addTodoError, addTodoSuccess } from '../reducers/todoReducer'
import { isAxiosError } from 'axios'
import { AppDispatch } from '../../../store/store'

export const setTodo = (todoTitle: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(addTodo())
    const res = await todoApi.addNewTodo(todoTitle)
    if (res.data.resultCode !== 0) {
      dispatch(
        addTodoError(
          res.data.messages[0] ? res.data.messages[0] : 'Some error occurred'
        )
      )
      return
    }

    dispatch(addTodoSuccess(res.data.data.item))
  } catch (e) {
    if (isAxiosError(e)) {
      dispatch(addTodoError(e.message))
    }
    dispatch(addTodoError('Some error occurred'))
  }
}
