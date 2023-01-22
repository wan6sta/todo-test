import { useAppDispatch } from './store/hooks/useAppDispatch'
import { useAppSelector } from './store/hooks/useAppSelector'
import { selectTodos } from './features/Todo/selectors/selectTodos'
import { useEffect } from 'react'
import { fetchAsyncTodos } from './features/Todo/services/fetchAsyncTodos'
import { Todolist } from './components/Todolist/Todolist'
import { ErrorAlert } from './components/ErrorAlert/ErrorAlert'
import { PageLoader } from './components/PageLoader/PageLoader'
import { AddNewTodo } from './components/AddNewTodo/AddNewTodo'
import { apiInstance } from './shared/config/axiosInstance/axiosInstance'

export const App = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectTodos)

  const authMe = async () => {
    const res = await apiInstance.get('/auth/me')
    if (res.data.resultCode === 0) return

    await apiInstance.post('/auth/login', {
      email: 'free@samuraijs.com',
      password: 'free',
      rememberMe: true
    })
  }

  useEffect(() => {
    dispatch(fetchAsyncTodos())
    authMe()
  }, [])

  return (
    <div className='app'>
      <div className='todos'>
        {todos.map(todo => (
          <Todolist key={todo.id} todo={todo} />
        ))}
        <AddNewTodo />
      </div>

      <PageLoader />
      <ErrorAlert />
    </div>
  )
}
