import cls from './DeleteTodo.module.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { motion } from 'framer-motion'

export const DeleteTodo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      className={cls.DeleteTodo}
    >
      <DeleteOutlineIcon />
    </motion.div>
  )
}
