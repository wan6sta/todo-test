import { Alert, Snackbar } from '@mui/material'
import { useState } from 'react'
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { selectTaskError } from '../../features/Task/selectors/selectTaskError'
import { selectTaskStatus } from '../../features/Task/selectors/selectTaskStatus'
import { selectTodoError } from '../../features/Todo/selectors/selectTodoError'
import { selectTodoStatus } from '../../features/Todo/selectors/selectTodoStatus'

export const ErrorAlert = () => {
  const [open, setOpen] = useState(true)
  const taskError = useAppSelector(selectTaskError)
  const todoError = useAppSelector(selectTodoError)
  const taskStatus = useAppSelector(selectTaskStatus)
  const todoStatus = useAppSelector(selectTodoStatus)

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'timeout') {
      setOpen(false)
    }

    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  if (todoStatus === 'failed' && open) {
    return (
      <Snackbar onClose={handleClose} open={open} autoHideDuration={3000}>
        <Alert severity='error' onClose={handleClose}>
          {todoError}
        </Alert>
      </Snackbar>
    )
  }

  if (taskStatus === 'failed' && open) {
    return (
      <Snackbar onClose={handleClose} open={open} autoHideDuration={3000}>
        <Alert severity='error' onClose={handleClose}>
          {taskError}
        </Alert>
      </Snackbar>
    )
  }

  return null
}
