import { FC } from 'react'
import { EditableSpan } from '../EditableSpan/EditableSpan'
import { useAppDispatch } from '../../store/hooks/useAppDispatch'
import { updateAsyncTodoTitle } from '../../features/Todo/services/updateAsyncTodoTitle'

interface Props {
  todoTitle: string
  todoId: string
}

export const EditTitle: FC<Props> = ({ todoTitle, todoId }) => {
  const dispatch = useAppDispatch()

  const updateTitleHandler = (title: string) => {
    if (!title || !todoId) return

    dispatch(updateAsyncTodoTitle(todoId, title))
  }

  return <EditableSpan todoTitle={todoTitle} callback={updateTitleHandler} />
}
