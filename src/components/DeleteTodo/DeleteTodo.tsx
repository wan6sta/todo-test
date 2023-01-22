import cls from './DeleteTodo.module.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { motion } from 'framer-motion'
import { useAppDispatch } from '../../store/hooks/useAppDispatch'
import { FC } from 'react'
import { deleteAsyncTodo } from '../../features/Todo/services/deleteAsyncTodo'

interface Props {
  todoId: string
}

export const DeleteTodo: FC<Props> = ({ todoId }) => {
  const dispatch = useAppDispatch()

  const deleteTodoHandler = () => {
    dispatch(deleteAsyncTodo(todoId))
  }

  return (
    <motion.div
      onClick={deleteTodoHandler}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      className={cls.DeleteTodo}
    >
      <DeleteOutlineIcon />
    </motion.div>
  )
}
