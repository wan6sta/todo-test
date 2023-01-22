import { TaskModel } from '../../features/Task/types/taskModel'
import { FC, MouseEvent, useState } from 'react'
import cls from './Task.module.scss'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Modal } from '../Modal/Modal'
import { EditTask } from '../EditTask/EditTask'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

type Props = {
  task: TaskModel
}

export const Task: FC<Props> = ({ task }) => {
  const [open, setOpen] = useState(false)
  const [mousePos, setMousePos] = useState([0, 0])

  const x = useMotionValue(0)
  const background = useTransform(
    x,
    [-100, 0, 100],
    ['#2f0075', '#7700ff', 'rgb(255,0,204)']
  )

  const hideHandler = () => {
    setOpen(false)
  }

  const showHandler = (e: MouseEvent<HTMLDivElement>) => {
    // console.log(e.pageY)
    // console.log(e.pageX)
    setMousePos([e.pageX, e.pageY])
    setOpen(true)
  }

  return (
    <>
      <motion.div
        initial={{ scale: 0.5, y: 10 }}
        whileInView={{ scale: 1, y: 0 }}
        onClick={showHandler}
        className={cls.TaskWrapper}
        style={{ background }}
      >
        <motion.div
          drag='x'
          className={cls.Task}
          dragConstraints={{ left: 0, right: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ x }}
        >
          <span>{task.title.slice(0, 25)}</span>
          <motion.div
            onClick={e => e.stopPropagation()}
            className={cls.delete}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <DeleteOutlineIcon />
          </motion.div>
        </motion.div>
      </motion.div>

      <Modal x={mousePos[0]} y={mousePos[1]} open={open} setOpen={hideHandler}>
        <EditTask />
      </Modal>
    </>
  )
}
