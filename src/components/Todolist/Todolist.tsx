import { TodoModel } from '../../features/Todo/types/todoModel'
import { FC, useEffect } from 'react'
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { selectTasks } from '../../features/Task/selectors/selectTasks'
import { Task } from '../Task/Task'
import cls from './Todolist.module.scss'
import { Paper } from '@mui/material'
import { useAppDispatch } from '../../store/hooks/useAppDispatch'
import { setTodo } from '../../features/Task/services/fetchTasks'
import { AddNewTask } from '../AddNewTask/AddNewTask'
import { motion } from 'framer-motion'
import { EditTitle } from '../EditTitle/EditTitle'
import { DeleteTodo } from '../DeleteTodo/DeleteTodo'

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
        <EditTitle todoTitle={todo.title} todoId={todo.id} />
        {tasks?.map(task => (
          <Task task={task} key={task.id} />
        ))}
        <AddNewTask todoId={todo.id} />
      </Paper>
      <DeleteTodo todoId={todo.id} />
    </motion.div>
  )
}
