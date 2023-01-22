import cls from './EditTask.module.scss'
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material'
import { motion } from 'framer-motion'

export const EditTask = () => {
  return (
    <div className={cls.EditTask}>
      <h2>Edit Task</h2>
      <TextField variant='standard' color='secondary' />

      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='female'
        name='radio-buttons-group'
      >
        <FormControlLabel
          value='female'
          color='secondary'
          control={<Radio />}
          label='Completed'
        />
        <FormControlLabel
          value='male'
          color='secondary'
          control={<Radio />}
          label='In Progress'
        />
        <FormControlLabel
          value='other'
          color='secondary'
          control={<Radio />}
          label='Active'
        />
      </RadioGroup>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button color='secondary'>Save</Button>
      </motion.div>
    </div>
  )
}
