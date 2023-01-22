import cls from './EditTask.module.scss'
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material'
import { motion } from 'framer-motion'
import { useAppDispatch } from '../../store/hooks/useAppDispatch'
import { useState } from 'react'
import {
  TaskModel,
  TaskStatus,
  UpdateTaskModel
} from '../../features/Task/types/taskModel'
import { updateAsyncTask } from '../../features/Task/services/updateAsyncTask'

interface Props {
  task: TaskModel
  setOpen: () => void
}

export const EditTask = ({ task, setOpen }: Props) => {
  const dispatch = useAppDispatch()
  const [taskValue, setTaskValue] = useState(task.title)
  const [taskStatus, setTaskStatus] = useState<TaskStatus>(task.status)

  const updateTaskHandler = () => {
    if (!taskValue) return

    const newTask: UpdateTaskModel = {
      title: taskValue,
      description: task?.description,
      completed: false,
      status: taskStatus,
      priority: task.priority,
      startDate: task.startDate,
      deadline: task.deadline
    }

    dispatch(updateAsyncTask(task.todoListId, task.id, newTask))
    setOpen()
  }

  return (
    <div className={cls.EditTask}>
      <h2>Edit Task</h2>
      <TextField
        onKeyDown={e => {
          if (e.code === 'Enter') {
            updateTaskHandler()
          }
        }}
        value={taskValue}
        onChange={e => setTaskValue(e.currentTarget.value)}
        variant='standard'
        color='secondary'
      />

      <RadioGroup
        className={cls.radios}
        value={taskStatus}
        onChange={e => {
          setTaskStatus(Number(e.currentTarget.value))
        }}
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='female'
        name='radio-buttons-group'
      >
        <FormControlLabel
          value={TaskStatus.completed}
          color='secondary'
          control={<Radio />}
          label='Completed'
        />
        <FormControlLabel
          value={TaskStatus.inProgress}
          color='secondary'
          control={<Radio />}
          label='In Progress'
        />
        <FormControlLabel
          value={TaskStatus.active}
          color='secondary'
          control={<Radio />}
          label='Active'
        />
      </RadioGroup>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button onClick={updateTaskHandler} color='secondary'>
          Save
        </Button>
      </motion.div>
    </div>
  )
}
