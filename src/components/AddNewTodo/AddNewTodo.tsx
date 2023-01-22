import cls from './AddNewTodo.module.scss'
import { Button, TextField } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { setTodo } from '../../features/Todo/services/setTodo'
import { useAppDispatch } from '../../store/hooks/useAppDispatch'

export const AddNewTodo = () => {
  const [value, setValue] = useState('')
  const dispatch = useAppDispatch()

  const addNewTodoHandler = () => {
    if (!value) return

    dispatch(setTodo(value))
    setValue('')
  }

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      initial={{ scale: 1, y: -100 }}
      whileInView={{ scale: 1, y: 0 }}
      className={cls.AddNewTodo}
    >
      <TextField
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        variant='standard'
        color='secondary'
        onKeyDown={e => {
          if (e.code === 'Enter') {
            addNewTodoHandler()
          }
        }}
      />
      <motion.div whileTap={{ scale: 1.1 }}>
        <Button
          onClick={addNewTodoHandler}
          variant='outlined'
          color='secondary'
        >
          Add
        </Button>
      </motion.div>
    </motion.div>
  )
}
