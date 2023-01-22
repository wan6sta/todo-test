import { Alert, Snackbar } from '@mui/material'
import { useState } from 'react'
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { selectTaskError } from '../../features/Task/selectors/selectTaskError'
import { selectTaskStatus } from '../../features/Task/selectors/selectTaskStatus'

export const ErrorAlert = () => {
  const [open, setOpen] = useState(true)
  const error = useAppSelector(selectTaskError)
  const status = useAppSelector(selectTaskStatus)

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

  if (status === 'failed' && open) {
    return (
      <Snackbar onClose={handleClose} open={open} autoHideDuration={3000}>
        <Alert severity='error' onClose={handleClose}>
          {error}
        </Alert>
      </Snackbar>
    )
  }

  return null
}
