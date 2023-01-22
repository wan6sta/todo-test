import { useAppDispatch } from './store/hooks/useAppDispatch'
import { useAppSelector } from './store/hooks/useAppSelector'
import { selectTodos } from './features/Todo/selectors/selectTodos'
import { useEffect } from 'react'
import { fetchAsyncTodos } from './features/Todo/services/fetchAsyncTodos'
import { Todolist } from './components/Todolist/Todolist'
import { ErrorAlert } from './components/ErrorAlert/ErrorAlert'
import { PageLoader } from './components/PageLoader/PageLoader'

export const App = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectTodos)

  useEffect(() => {
    dispatch(fetchAsyncTodos())
  }, [])

  return (
    <div className='app'>
      <div className='todos'>
        {todos.map(todo => (
          <Todolist key={todo.id} todo={todo} />
        ))}
      </div>

      <PageLoader />
      <ErrorAlert />
    </div>
  )
}
