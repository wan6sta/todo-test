import cls from './AddNewTodo.module.scss'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const AddNewTodo = () => {
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const addNewTaskHandler = () => {
    if (!newTaskTitle) return

    setNewTaskTitle('')
  }

  return (
    <div className={cls.AddNewTodo}>
      <TextField
        value={newTaskTitle}
        onChange={e => setNewTaskTitle(e.currentTarget.value)}
        color='secondary'
      />
      <motion.div whileTap={{ scale: 1.1 }}>
        <Button onClick={addNewTaskHandler} color='secondary'>
          Add
        </Button>
      </motion.div>
    </div>
  )
}
