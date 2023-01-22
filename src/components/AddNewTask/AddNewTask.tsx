import cls from './AddNewTask.module.scss'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch } from '../../store/hooks/useAppDispatch'
import { addAsyncTask } from '../../features/Task/services/addAsyncTask'

export const AddNewTask = ({ todoId }: { todoId: string }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const dispatch = useAppDispatch()

  const addNewTaskHandler = () => {
    if (!newTaskTitle) return
    dispatch(addAsyncTask(todoId, newTaskTitle))
    setNewTaskTitle('')
  }

  return (
    <div className={cls.AddNewTodo}>
      <TextField
        value={newTaskTitle}
        onKeyDown={e => {
          if (e.code === 'Enter') {
            addNewTaskHandler()
          }
        }}
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
