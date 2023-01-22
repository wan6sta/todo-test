import { TodoModel } from '../../features/Todo/types/todoModel'
import { FC, useEffect } from 'react'
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { selectTasks } from '../../features/Task/selectors/selectTasks'
import { Task } from '../Task/Task'
import cls from './Todolist.module.scss'
import { Paper } from '@mui/material'
import { useAppDispatch } from '../../store/hooks/useAppDispatch'
import { setTodo } from '../../features/Task/services/fetchTasks'
import { ErrorAlert } from '../ErrorAlert/ErrorAlert'
import { PageLoader } from '../PageLoader/PageLoader'
import { AddNewTodo } from '../AddNewTodo/AddNewTodo'
import { motion } from 'framer-motion'

interface Props {
  todo: TodoModel
}

export const Todolist: FC<Props> = props => {
  const { todo } = props
  const tasks = useAppSelector(selectTasks(todo.id)) || []
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setTodo(todo.id))
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: '24deg' }}
      whileInView={{ opacity: 1, scale: 1, rotate: '0deg' }}
      className={cls.Todolist}
    >
      <Paper className={cls.todo}>
        <h2>{todo.title.slice(0, 14)}</h2>
        {tasks?.map(task => (
          <Task task={task} key={task.id} />
        ))}
        <AddNewTodo />
      </Paper>
      <ErrorAlert />
      <PageLoader />
    </motion.div>
  )
}
