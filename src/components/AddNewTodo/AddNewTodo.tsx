import cls from './AddNewTodo.module.scss'
import { Button, TextField } from '@mui/material'
import { motion } from 'framer-motion'

export const AddNewTodo = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      initial={{ scale: 0, y: 100 }}
      whileInView={{ scale: 1, y: 0 }}
      className={cls.AddNewTodo}
    >
      <TextField variant='standard' color='secondary' />
      <motion.div whileTap={{ scale: 1.1 }}>
        <Button variant='outlined' color='secondary'>
          Add
        </Button>
      </motion.div>
    </motion.div>
  )
}
